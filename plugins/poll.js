//crated by @inrl
const { inrl, pass, hentaivideo, send_vote, send_poll } = require('../lib');
const Config = require('../config');
let checkPass = Config.PASSWORD;
let crtPass = pass.PASS;
//const { setStore, resetStore, shedule } = require('inrldb');

inrl(
	   {
		pattern : ["vote"] ,
		desc: 'To send a vote msg',
                sucReact: "💯",
                category: ["system", "all"],
                type: 'whatsapp'
	   },
	async (message, client, text, cmd, store) => {
return await send_vote(message, client);
       }
);
inrl(
	   {
		pattern : ["poll"] ,
		desc: 'To send a poll msg',
                sucReact: "💯",
                category: ["system", "all"],
                type: 'whatsapp'
	   },
	async (message, client, text) => {
return await send_poll(message, client, text);
       }
);
inrl({ pattern: ['hentaivideo'], desc: "thus send random anime hot videos, asure thets bad",sucReact: "😕",  category: ["anime","18+"],type : '18+'}, async (message, client) => {
if(checkPass === crtPass && message.client.isCreator){
rslt = await hentaivideo();
result = rslt[Math.floor(Math.random(), rslt.length)]

let buttons = [
        {buttonId:'.hentaivideo', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      video : {url: result.video_1 },
      caption: `Title : ${result.title}\n\n Category : ${result.category}\n\n Mimetype : ${result.type}\n\n Views : ${result.views_count}\n\n Shares : ${result.share_count}\n\nSource : ${result.link}\n\n Media Url : ${result.video_1}`,
      footer: Config.FOOTER,
      buttons: buttons,
      headerType: 4
      }
return await client.sendMessage(message.from, buttonMsg, {quoted: message})
    }
})
