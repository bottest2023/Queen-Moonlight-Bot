const {PERFIX,AUTO_CHAT_PM,AUTO_CHAT_GRP} = require('../config');
const prefix = PERFIX=='false'?'':PERFIX;
const got = require('got');

module.exports = async(msg, conn, m, store) => {
  if(!m.client.body.startsWith(prefix) && AUTO_CHAT_PM == "true" && !m.isGroup){
  let {body} = await got(`http://api.brainshop.ai/get?bid=172372&key=nbjE0YAlyw3cpoMl&uid=[${m.sender}]&msg=[${m.client.body}]`)
  let value = JSON.parse(body).cnt;
  return await m.reply(value)
  } else if(!m.client.body.startsWith(prefix) && AUTO_CHAT_GRP == "true" && m.isGroup){
  let {body} = await got(`http://api.brainshop.ai/get?bid=172372&key=nbjE0YAlyw3cpoMl&uid=[${m.sender}]&msg=[${m.client.body}]`)
  let value = JSON.parse(body).cnt;
  return await m.reply(value)
  }
}
