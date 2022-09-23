// @ts-nocheck
import connectDB from "@server/config/db";
import UserModel from "@server/models/User.models";
import {
  userGenerateToken,
  userRefreshToken,
} from "@server/utils/genarateToken";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await UserModel.findOne({ email });

    if (userExists) {
      res.status(400).json({ message: "User already exists" });
    } else {
      const user = await UserModel.create({
        name,
        email,
        password,
      });

      if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          adminAccessToken: `Bearer ${userGenerateToken(user._id)}`,
          refreshToken: userRefreshToken(user._id),
        });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

export default connectDB(handler);
