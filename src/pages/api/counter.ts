// pages/api/counter.js

import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

const filePath = path.join(process.cwd(), "public", "counter.json");

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const data = fs.readFileSync(filePath, "utf8");
      const counter = JSON.parse(data).count;
      const increment = Math.floor(Math.random() * 2) + 2; // Random increment between 2 and 3
      const updatedCounter = counter + increment;
      fs.writeFileSync(
        filePath,
        JSON.stringify({ count: updatedCounter }),
        "utf8"
      );
      res.status(200).json({ counter });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
