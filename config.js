require('dotenv').config(); 

global.owner = process.env.OWNER_NUMBER.split(','); 
global.anitav4 = process.env.BOT_NAME || "XＥꜱʜᴜ-BOT";
global.ownername = process.env.OWNER_NAME || "Eshan Kavishka";
global.packname = process.env.PACK_NAME || "XＥꜱʜᴜ-BOT";
global.author = process.env.AUTHOR || "Eshan Kavishka Whatsapp";
global.channelname = process.env.CHANNEL_NAME || "Eshan Kavishka Official";
global.channeljid = process.env.CHANNEL_JID || "120363315231436175@newsletter";
global.autoTyping = process.env.AUTO_TYPING === 'true'; 
global.autoRecord = process.env.AUTO_RECORD === 'true';
global.autoViewStatus = process.env.AUTO_VIEW_STATUS === 'true';
global.AUTOSTATUS_REACT = process.env.AUTOSTATUS_REACT === 'true';
global.autoLikeEmoji = process.env.AUTO_LIKE_EMOJI || "🖤";

global.LEVELUP = process.env.LEVELUP === 'true';

global.ANTIVIEWONCE = process.env.ANTIVIEWONCE === 'true';

global.roles = {
    1: "Novice",
    3: "Learner",
    5: "Apprentice",
    8: "Magician",
    10: "Wizard",
    15: "Sorcerer",
    20: "Grandmaster",
    25: "Legend",
};

global.sudoUsers = process.env.SUDO_USERS.split(',').map(user => `${user}@s.whatsapp.net`); 

global.public = process.env.PUBLIC === 'true';

global.ANTIDELETE = process.env.ANTIDELETE === 'true';
global.unavailable = process.env.UNAVAILABLE === 'true';
global.available = process.env.AVAILABLE === 'true';
global.autoreadmessages = process.env.AUTO_READ_MESSAGES === 'false';
global.chatbot = process.env.CHATBOT === 'true';
global.autoreact = process.env.AUTO_REACT === 'false';

global.WELCOME = process.env.WELCOME === 'true';

global.prefix = process.env.PREFIX || '.';

global.autobio = process.env.AUTO_BIO === 'false';

global.ANTICALL = process.env.ANTICALL === 'false';

global.antilink = process.env.ANTILINK === 'false';
global.antilinkkick = process.env.ANTILINK_KICK === 'false';
global.antilinkwarn = process.env.ANTILINK_WARN === 'false';

global.mess = {
    success: process.env.MESSAGE_SUCCESS || 'XＥꜱʜᴜ-BOT/𝙳𝚘𝚗𝚎',
    admin: process.env.MESSAGE_ADMIN || '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: process.env.MESSAGE_BOT_ADMIN || '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: process.env.MESSAGE_OWNER || '_*❗This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: process.env.MESSAGE_GROUP || '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: process.env.MESSAGE_PRIVATE || '_*❗This Command Can Only Be Used In Private Chat !*_',
    wait: process.env.MESSAGE_WAIT || '_*Please Wait*_',
    notregist: process.env.MESSAGE_NOT_REGIST || '_*You are not registered in the Bot Database. Please register first*_',
    premium: process.env.MESSAGE_PREMIUM || '_*Premium only" Want Premium? Chat Owner*_',
    endLimit: process.env.MESSAGE_END_LIMIT || '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
};


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
