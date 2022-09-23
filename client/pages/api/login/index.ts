// @ts-nocheck
import connectDB from "@server/config/db";
import UserModel from "@server/models/User.models";
import {
  userGenerateToken,
  userRefreshToken,
} from "@server/utils/genarateToken";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  email: string;
  password: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        access_token: `Bearer ${userGenerateToken(user._id)}`,
        refreshToken: userRefreshToken(user._id),
      });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

export default connectDB(handler);
