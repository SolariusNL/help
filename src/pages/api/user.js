import { auth } from "@solariusnl/authentication";

export default async function handler(req, res) {
  const user = await auth.getFwUser(req.cookies[".frameworksession"]);
  res.status(200).json({ user });
}
