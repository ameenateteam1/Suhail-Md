const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349136098207";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_03_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjksXG4gICAgICAgIDk1LFxuICAgICAgICAzNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA4OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1OSxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDk2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDcsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkyLFxuICAgICAgICAyNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgODksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgODMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNixcbiAgICAgICAgMTU1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAxOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExLFxuICAgICAgICA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODIsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA4NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyLFxuICAgICAgICA1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc2LFxuICAgICAgICA0NixcbiAgICAgICAgMjQzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUY00zMExMV0VYQVdjSXVjN2M2MVZRcmtxdWExdElreHhMN3JvMysyNU1vPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMzYwOTgyMDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIxODVFQTMwNUU2RDAyMzI3MDMwMzM1QzZEQkY2OTgzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM2MTAwNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMzYwOTgyMDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI0MzE2RjlBMTM0QzYxNzBDMzUxRDNGRTk5ODJBODQxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM2MTAwNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFb2JrMFRJZlR6YVMxVlVHNHRQZGFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE5ODU5ZGE0LTgwMGMtNDI5OC05YzE4LTJjM2E1NGEyMWUzNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICAzLFxuICAgICAgMjM5LFxuICAgICAgMTY5LFxuICAgICAgMjE3LFxuICAgICAgMTA5LFxuICAgICAgOTAsXG4gICAgICAyMjgsXG4gICAgICA1NSxcbiAgICAgIDEzLFxuICAgICAgMSxcbiAgICAgIDIxNSxcbiAgICAgIDc5LFxuICAgICAgMTgwLFxuICAgICAgMTI2LFxuICAgICAgMjA3LFxuICAgICAgNzYsXG4gICAgICAxNzYsXG4gICAgICAxMDgsXG4gICAgICA2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MCxcbiAgICAgIDE4LFxuICAgICAgMTMzLFxuICAgICAgMTYyLFxuICAgICAgNzcsXG4gICAgICAyMixcbiAgICAgIDk1LFxuICAgICAgMzIsXG4gICAgICA2OCxcbiAgICAgIDU1LFxuICAgICAgMTUzLFxuICAgICAgNTksXG4gICAgICAxMjcsXG4gICAgICAxNDcsXG4gICAgICAxMjUsXG4gICAgICAxMzcsXG4gICAgICAyMTEsXG4gICAgICAxNTgsXG4gICAgICAyNCxcbiAgICAgIDE3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQSFk3WEUySlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzNjA5ODIwNzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTQ3Nzc5Mjk4MTQxNzk6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJEb24gVGVzY29cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNREF5YW9IRUtYQXFyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImd3U1JMSGMwUEFWcWI4dXNLYjgreStCY0c0c0h1VnNxTTVhN2N0bTljSDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibGVjN3A5S05nS1pGcWc5K2VidlBVUGNJSjc5Y2RjSjdwcy9rRjNXK0RlMjBPbCtwT05xRmdyT3REYTBPTzZqcjF3UGJYWFl4ZDNxSHlMVlB4Tk16QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYmNnL200NFZtcmUrd2grYUZqMWxGKzVhb1lkS2Z0NCsyNHVsS1diZS8vMDhFZVRNY0I3L0RnY1FML0c0MHE0b0hYMVNaZU1hcWcxaFpHSllVZzZJaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzNjA5ODIwNzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzNjEwMDAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBb1pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFvWi5qc29uIjogIntcImtleURhdGFcIjpcImRSOWtwNWlTM0FjMlNnR0xYVG01YVhmMTdOaGtJT3NRbU90Y3d2L1dHVTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk2ODMzMjg2MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
