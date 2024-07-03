const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = true;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = true;                 //make true to view statuses 


global.Owner = ["Joshkingmd"];
global.OwnerNumber = ["263716729222"];
global.ownertag = ["263716729222"]; 
global.OwnerName =  "Joshuamambo1";
global.BotName = "🐦 Joshkingmd-v2";
global.packname = "Joshuamambo";                             //Do not change.
global.author = "🐦Joshuamambomd";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/FCURRZJoRUd6Tuvf6DwUnZ "; 
global.SupportGroupLink = "https://chat.whatsapp.com/FCURRZJoRUd6Tuvf6DwUnZ"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/263716729222"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || "{"noiseKey":{"private":{"type":"Buffer","data":"MA3pAnwSy5wd91/zxYfxN0Atf+gHoI3K4QVuf92180U="},"public":{"type":"Buffer","data":"K+w/cgf0Vwn459X+DV+gvXmbvG/5PCAtezYVb7EpzDE="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"KMtOqfQ8r1N36sKRE3kY636Q/sGMlinfGSBCJFRx52Q="},"public":{"type":"Buffer","data":"rZkLUCFjEihG/0SLSIyEF7ARe5yPM+tyshCGa/YaxTs="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"YBr7ZJRL/lGgswCMEIh/sb13tIy7uPm0cNpepRKRzVY="},"public":{"type":"Buffer","data":"polS20Qz2r4ATdmUWDl2ltGikmaKFCWZeJa94v0nBiU="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"uAeP1x7p6mn8mWaSXzdjLOouAVxbNKRooUx0tup6KFo="},"public":{"type":"Buffer","data":"u6AGSYs7XiLOglRyn23y0bcTQNDFRxLdldV5xcHV31I="}},"signature":{"type":"Buffer","data":"b34dwFwrRpVMCB7uA8JZ27j0Ab4DZTHtX2dO4X7n9fYPrMOWH/QkpcH2NZW7FTIasyGY5L60WtGW7AaCcNLnjg=="},"keyId":1},"registrationId":60,"advSecretKey":"YK+BsKU4DoQ0u+BqgGktG3/cH6fubMos2TS6GtyaafI=","processedHistoryMessages":[{"key":{"remoteJid":"263716729222@s.whatsapp.net","fromMe":true,"id":"A351C09E2E103B5F72261719F4BAC905"},"messageTimestamp":1720036200}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"bGIWGPbITm6mQVn2g0lfrw","phoneId":"47a780eb-eba4-46b9-b5ee-87daab0b7f11","identityId":{"type":"Buffer","data":"P14ZmZaKpXTRFB+7he8EAUUkq48="},"registered":true,"backupToken":{"type":"Buffer","data":"vsz6GVCp46uGWzC7lZy7u/o4r1s="},"registration":{},"pairingCode":"LTR2E3VW","me":{"id":"263716729222:32@s.whatsapp.net"},"account":{"details":"CNv15uADENfWlrQGGAEgACgA","accountSignatureKey":"vdvuCTRtrv0kz6VivPUlYdzZOR/BJWxL75xn1V9wxUQ=","accountSignature":"dtXRJHUP4MTw9xrbNZWn+HkBJo5mT/PmWr7ta62f1T8yfhxb0BCJ6UrOMJIk0q4iZSRak0pn8t+gjYegsMZVBg==","deviceSignature":"ZNTz+TYK3STuOdtmebFkA0mZYc+AEZMsFUBFs1RWMJu/Ijydsx7HDDrK6KTi6jOOnSqxwBOTLMeStdQwV8VFjA=="},"signalIdentities":[{"identifier":{"name":"263716729222:32@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bb3b7gk0ba79JM+lYrz1JWHc2TkfwSVsS++cZ9VfcMVE"}}],"platform":"android","lastAccountSyncTimestamp":1720036196,"myAppStateKeyId":"AAAAAHBU"}`
global.prefa = ["+"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
