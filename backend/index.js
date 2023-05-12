const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const rest = await axios.put("https://api.chatengine.io/users/", {
      username: username,
      secret: username,
      first_name: username,
    },
    {headers:{'private-key':"687736e4-6e9f-43ac-9fe6-8a302401e296"}}
    );
    return res.status(rest.status).json(rest.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
  return res.json({ username: username, secret: "k" });
});

app.listen(3001);
