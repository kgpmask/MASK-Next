import { withDatabase } from "@/database";
import Member from "@/database/schemas/Member";

export default withDatabase(async (req, res) => {
  if (req.method !== "GET") {
    res.writeHead(302, { Location: "/api/404" });
    res.end();
    return;
  }

  const members = await Member.find({}, { _id: 0 }).lean();
  res.status(200).json(members);
});
