const { Client } = require("discord.js");
const client = new Client({ disableEveryone: true });

client.on("ready", () => {
  console.log(`Connecté en tant que ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") msg.channel.send("Pong!");
  if (msg.content === "everyone")
    msg.channel.send("@everyone, salut à tous!", { disableEveryone: false });
  if (msg.content === "noteveryone")
    msg.channel.send("@everyone (noteveryone), salut à tous!");
});

client.login("NjQ5MjY3NjA4NzcxODg3MTc0.Xd6UHg.NLek33ZGLEexKt2P0TwSJIl8ZJM");
