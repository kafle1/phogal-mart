const sdk = require("node-appwrite");
module.exports = async (req, res) => {
  // Init SDK
  let client = new sdk.Client();

  let storage = new sdk.Storage(client);

  client
    .setEndpoint(req.env.API_ENDPOINT) // Your API Endpoint
    .setProject(req.env.PROJECT_ID) // Your project ID
    .setKey(req.env.API_KEY); // Your secret API key

  req.payload = JSON.parse(req.payload ?? "{}");
  const uid = req.payload.uid;
  const name = req.payload.name;

  let promise = await storage.createBucket(
    uid,
    name,
    'bucket', [`role:member`], [`user:${uid}`],
    undefined,
    undefined,
    undefined,
    true
  );

  res.json({ message: "called the function", data: promise });
};


