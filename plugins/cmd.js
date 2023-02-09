const { inrl } = require("../lib")
const { setCmd, DeleteCmd } = require('../lib/database/cmddb');

inrl(
	   {
		pattern: ['setcmd'],
		desc: 'To set media as a cmd',
                sucReact: "😛",
                category: ["system", "all"],
                type : "system"
	   },
	async (message, client, match, cmd) => {
    if(message.client.isCreator){
    if(!message.quoted) return message.send("replay to a media")
    if(!message.quoted.msg.fileSha256) return message.send("you replayed not for a media")
    if(!match) return await message.send("for which cmd!")
    await setCmd(message.quoted.msg.fileSha256.join(""), match)
    return await message.reply("successfull")
                  }
	 }
);
inrl(
	   {
		pattern: ['dltcmd'],
		desc: 'To dlt media d as alrdy set',
                sucReact: "💥",
                category: ["system", "all"],
                type : "system"
	   },
    async (message, client, match, cmd) => {
    if(message.client.isCreator){
    if(!match) return await message.send("which cmd!")
    await DeleteCmd(match)
    return await message.reply("successfull")
                  }
	 }
);
