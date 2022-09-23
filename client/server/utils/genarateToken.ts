import jwt from "jsonwebtoken";

export const userGenerateToken = (id: any) => {
  return jwt.sign({ id }, "userIsTheTop", {
    expiresIn: "30d",
  });
};

export const userRefreshToken = (id: any) => {
  return jwt.sign({ id }, "userIsRefreshTheTop", {
    expiresIn: "1y",
  });
};
