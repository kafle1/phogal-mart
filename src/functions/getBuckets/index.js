const sdk = require("node-appwrite");
module.exports = async (req, res) => {
  // Init SDK
  let client = new sdk.Client();

  let storage = new sdk.Storage(client);

  client
    .setEndpoint(req.env.API_ENDPOINT) // Your API Endpoint
    .setProject(req.env.PROJECT_ID) // Your project ID
    .setKey(req.env.API_KEY); // Your secret API key

  let promise = await storage.listBuckets();
  res.json({ message: "called the function", data: promise });
  return promise;
};
