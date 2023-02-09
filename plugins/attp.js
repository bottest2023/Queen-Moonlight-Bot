const { inrl,config } = require('../lib');
const axios = require("axios");

inrl( { pattern: ["ttp"], sucReact: "🖼", category: ["all", "create"], type : "misc"},
  async (message, client) => {
    if (!message.client.text) return await message.send("need text");
    var uri = encodeURI(message.client.text);
    try {
      var resImage = await axios.get( "https://api.xteam.xyz/ttp?file&text=" + uri, { responseType: "arraybuffer" } );
    } catch (error) {
      return await message.send("error"+error);
    }
    await client.sendMessage( message.from, { image: Buffer.from(resImage.data), caption: config.exif.cap }, { quoted: message } );
  }
);

inrl( { pattern: ["attp"], desc: "for attp img", sucReact: "😛", category: ["all", "create"], type : "misc"},
  async (message, client) => {
    if (!message.client.text) return await message.send("need text");
    var uri = encodeURI(message.client.text);
    try {
      var resSticker = await axios.get( "https://api.xteam.xyz/attp?file&text=" + uri, { responseType: "arraybuffer" } );
    } catch (error) { 
        return message.send("error"+error);
    }
    client.sendMessage( message.from, { sticker: Buffer.from(resSticker.data) }, { quoted: message });
  }
);
