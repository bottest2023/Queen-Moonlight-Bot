//created by @inrl
const { inrl, dogphoto, lovephoto, cartoonphoto } = require('../lib');
const fs = require('fs');
const Config = require('../config');

inrl({ pattern: ['sdog'], desc: "thus send random fun dog imgs, maybe bad",sucReact: "💗",  category: ["anime"],type: 'sticker'}, async (message, client) => {
let ttimg = await dogphoto();
return await client.sendImageAsSticker(message.from, ttimg, message, { packname: Config.PACKNAME, author: Config.FOOTER, categories: '🥵' })
})
inrl({ pattern: ['slove'], desc: "thus send random love photos,imgs, maybe bad",sucReact: "💗",  category: ["anime"],type: 'sticker'}, async (message, client) => {
let ttimg = await lovephoto();
return await client.sendImageAsSticker(message.from, ttimg, message, { packname: Config.PACKNAME, author: Config.FOOTER, categories: '🥵' })
})
inrl({ pattern: ['scartoon'], desc: "thus send random cartoon imgs, maybe bad",sucReact: "💗",  category: ["anime"],type: 'sticker'}, async (message, client) => {
let ttimg = await cartoonphoto();
return await client.sendImageAsSticker(message.from, ttimg, message, { packname: Config.PACKNAME, author: Config.FOOTER, categories: '🥵' })
})
