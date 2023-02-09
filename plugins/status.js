// created by @inrl

const { inrl,config }= require('../lib/');
const fs = require('fs');
const Config = require('../config');

const _0x5c1c0b=_0x2d0a;function _0x2d0a(_0x5b7439,_0x1daa56){const _0x2aa7ae=_0x2aa7();return _0x2d0a=function(_0x2d0a39,_0xe0cf50){_0x2d0a39=_0x2d0a39-0xf0;let _0x5731f5=_0x2aa7ae[_0x2d0a39];return _0x5731f5;},_0x2d0a(_0x5b7439,_0x1daa56);}(function(_0x45053c,_0x26a347){const _0x39de87=_0x2d0a,_0x372edf=_0x45053c();while(!![]){try{const _0x1af658=parseInt(_0x39de87(0xf0))/0x1+-parseInt(_0x39de87(0x103))/0x2*(-parseInt(_0x39de87(0xf7))/0x3)+parseInt(_0x39de87(0xf6))/0x4+-parseInt(_0x39de87(0xfe))/0x5+-parseInt(_0x39de87(0xf4))/0x6*(parseInt(_0x39de87(0xfb))/0x7)+-parseInt(_0x39de87(0xf3))/0x8*(-parseInt(_0x39de87(0xfc))/0x9)+-parseInt(_0x39de87(0x100))/0xa;if(_0x1af658===_0x26a347)break;else _0x372edf['push'](_0x372edf['shift']());}catch(_0x265375){_0x372edf['push'](_0x372edf['shift']());}}}(_0x2aa7,0xb67f3),inrl({'pattern':['send',_0x5c1c0b(0xf5)],'desc':_0x5c1c0b(0xff),'sucReact':'⚒️','category':['ff']},async(_0x2da092,_0x538047)=>{const _0x233b58=_0x5c1c0b;if(_0x2da092['quoted'][_0x233b58(0xfd)]){let _0x845757=await _0x2da092[_0x233b58(0xf1)][_0x233b58(0x102)]();await _0x538047[_0x233b58(0xfa)](_0x2da092['from'],{'video':_0x845757,'caption':config[_0x233b58(0xf8)][_0x233b58(0xf2)]},{'quoted':_0x2da092}),await fs[_0x233b58(0x101)](_0x845757);}else{if(!_0x2da092[_0x233b58(0xf1)][_0x233b58(0xfd)]&&_0x2da092[_0x233b58(0xf1)][_0x233b58(0xf9)]){let _0x33cadf=await _0x2da092[_0x233b58(0xf1)]['download']();await _0x538047[_0x233b58(0xfa)](_0x2da092['from'],{'image':_0x33cadf,'caption':config['exif'][_0x233b58(0xf2)]},{'quoted':_0x2da092});}}}));function _0x2aa7(){const _0x30ae23=['12geCpNK','snd','1134096kBNlKj','3FGIkAa','exif','imageMessage','sendMessage','4792676VmdgAt','63xKwLHe','videoMessage','1113175zbxlCp','to\x20create\x20ff\x20logo','10441480iqOzuY','unlinkSync','download','2232684AKztdu','1278944oOHzXd','quoted','cap','805504UdJzts'];_0x2aa7=function(){return _0x30ae23;};return _0x2aa7();}

inrl({pattern: ['scan','getqr'], desc: "to scan", sucReact: "💗", category: ['system'],},   async (message, client) => {
	    const url = `https://qr-code-for-inrl-md.vercel.app/`;
		    
const qrTxtNew = "ᴛᴏ ᴜꜱᴇ ɪɴʀʟ ʙᴏᴛ ᴍᴅ\nᴩʟᴇᴀꜱᴇ ꜱᴄᴀɴ ᴛɢᴇ qʀ ᴡɪᴛʜɪɴ 25 ꜱᴇᴄᴏᴜɴᴅꜱ\nɪꜰ ᴛʜᴇ qʀ ᴡɪʟʟ ʙᴇᴇɴ ᴇxᴩɪʀᴇᴅ\nᴄʟɪᴄᴋ ᴛʜᴇ ʙɪʟᴏᴡ ʙᴜᴛᴛᴏɴ ᴀɴᴅ ʀᴇꜱᴄᴀɴ";
      const buttons = [
        { buttonId: "scan", buttonText: { displayText: "ꜱᴄᴀɴ qʀ"}, type: 1, },
      ]
const templateButtons = {
      image: { url: url },
      caption: qrTxtNew,
      footer: config.exif.footer,
      buttons,
    };
return await client.sendMessage( message.from, templateButtons, { quoted: message });
 });
inrl({pattern: ['status'], desc: "to scan", sucReact: "💗", category: ['all'],},   async (message, client) => {

        let r_text = new Array ();
        r_text[0] = "https://i.imgur.com/WXEksN4.mp4";
        r_text[1] = "https://imgur.com/3VOuEfg.mp4";
        r_text[2] = "https://imgur.com/rbGjIBI.mp4";
        r_text[3] = "https://imgur.com/tt2gMXr.mp4";
        r_text[4] = "https://imgur.com/kR4XGKY.mp4";
        r_text[5] = "https://imgur.com/3PHv4Uu.mp4";
        r_text[6] = "https://imgur.com/4O5pLdC.mp4";
        r_text[7] = "https://imgur.com/Q6REjY0.mp4";
        r_text[8] = "https://imgur.com/5m5TDEJ.mp4";
        r_text[9] = "https://i.imgur.com/j8EHCh6.mp4";
        r_text[10] = "https://i.imgur.com/j8EHCh6.mp4";
        r_text[11] = "https://i.imgur.com/IUb17JQ.mp4";
        r_text[12] = "https://i.imgur.com/SH3tyRo.mp4";
        r_text[13] = "https://i.imgur.com/mSAFD9c.mp4";
        r_text[14] = "https://imgur.com/a/yY48lMK.mp4";
        r_text[15] = "https://imgur.com/64FWq3W.mp4";
        r_text[16] = "https://imgur.com/aZlS1bV.mp4";
        r_text[17] = "https://imgur.com/ed0X9m5.mp4";
        r_text[18] = "https://imgur.com/nDlrBug.mp4";
        r_text[19] = "https://imgur.com/3AczL5y.mp4";
        r_text[20] = "https://imgur.com/CeizCwC.mp4";
        r_text[21] = "https://imgur.com/XQNNBxg.mp4";
        var i = Math.floor(r_text.length * Math.random());

     const buttons = [
        { buttonId: "status", buttonText: { displayText: "ɴᴇxᴛ"}, type: 1, },
      ]
const templateButtons = {
      video: { url: r_text[i]  },
      caption: "status",
      footer: config.exif.footer,
      buttons,
    };
return await client.sendMessage( message.from, templateButtons, { quoted: message });
 });
