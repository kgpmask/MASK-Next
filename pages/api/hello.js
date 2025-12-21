import { withDatabase } from "@/database";

export default withDatabase((req, res) => {
	res.status(200).json({ name: "John Doe" });
});
