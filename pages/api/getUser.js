import User from "../../lib/models/User";
import connectMongo from "../../lib/connectMongo";

export default async function handler(req, res) {
  const method = req.method;
  let { address } = req.query;
  if (!address)
    res
      .status(400)
      .json({ message: "Must include address in query parameters" });
  if (method !== "GET") res.status(400).send({ message: "Read only route" });
  try {
    await connectMongo();
    let user = await getUser(address);
    if (!user) res.send(null);
    res.send(user);
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).send(err);
  }
}

const getUser = async (address) => {
  try {
    const user = await User.findOne({
      address: address,
    });
    return user;
  } catch (err) {
    throw new Error(`No entry found with address: ${address}`);
  }
};
