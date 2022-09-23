import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

const connectDB =
  (handler: any) => async (req: NextApiRequest, res: NextApiResponse) => {
    if (mongoose.connections[0].readyState) {
      // Use current db connection
      return handler(req, res);
    }
    // Use new db connection
    await mongoose.connect("mongodb://localhost:27017/need-for-speed");
    return handler(req, res);
  };

export default connectDB;
