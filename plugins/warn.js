//created by @inrl

const Config = require('../config');
const { inrl } = require('../lib')
const { setWarn, ResetWarn, ListWarn } = require('../lib/database/warndb')
inrl({
	pattern: ['warn'],
	desc: 'To warn a user in group',
        sucReact: "😑",
        category: ["system", "all"],
        type : "system"
	},async (message, client, match) => {
        if(message.client.isCreator && message.isGroup) {
    if(message.quoted){
    const u = message.quoted.sender;
    const g = message.from;
    const t = match || "warning";
    const d = await setWarn(u, g, t)
    let count = d.count, COUND = Config.WARNCOUND;
    let remains = COUND - count;
    let warnmsg = `❏─────[ ᴡᴀʀɴɪɴɢ ]─────❏
│ Group:-${d.group}
│ User :-${d.user}
❏───────────────────❏
┏─────── INFO ───────❏
│ Reason :- ${d.reason}
│ Count :- ${d.count}
│ Remaining :- ${remains}
┗•──────────────────❏`
  await message.reply(warnmsg)
  if(remains <= "0"){
  await client.groupParticipantsUpdate( message.from, [message.quoted.sender], "remove" );
  return await message.reply("_user removes from the group due to warn limit existence_")
           };
       };
   };
})
inrl({
	pattern: ['resetwarn'],
	desc: 'To remove warn count of a user',
        sucReact: "💥",
        category: ["system", "all"],
        type : "system"
	},async (message, client, match) => {
        if(message.client.isCreator && message.isGroup) {
        if(message.quoted){
    const u = message.quoted.sender;
    const g = message.from;
    const t = match || "reset";
    const d = await ResetWarn(u, g, t)
    return await message.reply(`_reset ${u} your warn count in ${g}_`);
            }
      };
});
