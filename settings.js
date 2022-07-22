//═══════════════════════════════════════════════════════//

//

//                              ＴＩＮΛ 𝐕2 𝓫𝔂 𝘾𝙃𝙄𝙍𝘼𝙂 𝙔𝙊𝙐𝙏𝙐𝘽𝙀𝙍

//𝐌𝐎𝐒𝐓 𝐒𝐄𝐗𝐈𝐒𝐓 𝐒𝐂𝐑𝐈𝐏𝐓 𝐄𝐕𝐄𝐑 𝐁𝐘 𝐂𝐇𝐈𝐑𝐀𝐆 𝐘𝐎𝐔𝐓𝐔𝐁𝐄𝐑 

//𝐃𝐎 𝐍𝐎𝐓 𝐅𝐎𝐑𝐆𝐄𝐓 𝐓𝐎 𝐒𝐇𝐁𝐒𝐂𝐑𝐈𝐁𝐄 𝐌𝐘 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐂𝐇𝐀𝐍𝐍𝐄𝐋 

//════════════════════════════//



const fs = require('fs')

const chalk = require('chalk')



//Api Website\\

global.APIs = {

	zenz: 'https://zenzapis.xyz',
}



//Api Key\\

global.APIKeys = {

	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\

}



//customize settings\\

global.owner = ['919536476115']

global.premium = ['919536476115']

global.ownernomer = '919536476115'

global.ownername = '𝘾𝙃𝙄𝙍𝘼𝙂 𝙔𝙊𝙐𝙏𝙐𝘽𝙀𝙍'

global.botname = 'ＴＩＮΛ'

global.footer = 'ＴＩＮΛ ❤️😎👨🏻‍💻'

global.ig = 'https://github.com/LOSTHACKEROFC'

global.region = 'India, North India, UTTRAKHAND'

global.sc = 'https://github.com/LOSTHACKEROFC/TINA'

global.myweb = 'https://www.youtube.com/channel/UCOYVQIN4SGwaKV2ukY5FgdA'

global.packname = 'ＴＩＮΛ 👨🏻‍💻❤️'

global.author = '𝘾𝙃𝙄𝙍𝘼𝙂 𝙔𝙊𝙐𝙏𝙐𝘽𝙀𝙍 ❤️'

global.sessionName = 'session'

global.prefa = ['','!','.','🐦','🐤','🗿']

global.sp = '⭔'

global.mess = {

    success: 'Done ✓',

    admin: 'This Feature Is Only For Admin!',

    botAdmin: 'Bot Must Be Admin First!',

    owner: 'This Feature Is Only For Owner!',

    group: 'Feature Used Only For Groups!',

    private: 'Features Used Only For Private Chat!',

    bot: 'This Feature Is Only For Bot',

    wait: 'Wait A minute...',

    error: 'Error! Maybe Api Key Is Expired🤔!',

    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',

}

    global.limitawal = {

    premium: "Infinity",

    free: 12,

    monayawal: 1000

}

   global.rpg = {

   darahawal: 100,

   besiawal: 15,

   goldawal: 10,

   emeraldawal: 5,

   umpanawal: 5,

   potionawal: 1

}

global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

let file = require.resolve(__filename)

fs.watchFile(file, () => {

	fs.unwatchFile(file)

	console.log(chalk.redBright(`Update'${__filename}'`))

	delete require.cache[file]

	require(file)

})




