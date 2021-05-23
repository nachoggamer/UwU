//estas aqui devem ser só para interagir com o discord
var channelID = "774963744282902559";
const Discord = require("discord.js")
const { Client, MessageAttachment } = require('discord.js');
const client = new Discord.Client()
var pathToFfmpeg = require('ffmpeg-static');
var ffmpeg = require('ffmpeg');
const { OpusEncoder } = require('@discordjs/opus');
var OpusScript = require("opusscript");
//Estes servem para que o bot fique online
const keepAlive = require("./server")
keepAlive()
//as 2 primeiras são para o hentai e a ultima escolhe a categoria
const HMfull = require("hmfull");
const hentain = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]
//array de respostas para uwu
var uwur = ["Xiu", "Cala-te", "Cala-te, por favor", "UwU o caralho levas uma lagostada vais até á China e voltas"]
//array de imagens do ruben
var joemonkey = ['https://i.imgur.com/21Tjdrb.png', 'https://media1.tenor.com/images/265a1fda49a19aa9327438e0ba3c963e/tenor.gif?itemid=21181236', 'https://i.imgur.com/RjD2uG8.png', 'https://i.imgur.com/ha7XdPs.png', 'https://i.imgur.com/9TtsAVr.png', '']
const timea = 1
const uID = "654324684380176384"
const hentaine = ["1", "2", "3", '4', '5', '6', '7', '8', '9', '10']
var log = console.log;
var comunismo = ["<@403289633896529931>", "<@774761986243428382>", "<@583296716942606354>", "<@719319997201121370>", "<@574957409102200833>", "<@654324684380176384>"]

//isto tudo serve para ter horas nos logs
console.log = function() {
  var first_parameter = arguments[0];
  var other_parameters = Array.prototype.slice.call(arguments, 1);

  function formatConsoleDate(date) {
    var hour = date.getHours() + 1;
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var milliseconds = date.getMilliseconds();

    return '[' +
      ((hour < 10) ? '0' + hour : hour) +
      ':' +
      ((minutes < 10) ? '0' + minutes : minutes) +
      ':' +
      ((seconds < 10) ? '0' + seconds : seconds) +
      '.' +
      ('00' + milliseconds).slice(-3) +
      '] ';
  }

  log.apply(console, [formatConsoleDate(new Date()) + first_parameter].concat(other_parameters));
};
//Chance de 1 em 5000 de mandar uma imagem
const imagemrara = 'https://i.imgur.com/MDApnqZ.jpg'
const imagemrara2 = 'https://i.imgur.com/fNTyUno.png'
client.on("message", msg => {
  var numeror = require('random-number');
  var raro = {
    min: 1
    , max: 5000
    , integer: true
  }
  if (numeror(raro) === 420 || msg.content == 'Testejolt1') {
    msg.reply('Pog conseguiste uma das mensagens raras\n' + imagemrara)
  }
  else if (numeror(raro) === 69 || msg.content == 'Testejolt2') {
    msg.reply('Pog conseguiste uma das mensagens raras\n' + imagemrara2)
  }
})

//faz login
client.login(process.env.TOKEN)

//faz print na consola se o login foi com sucesso
client.on("ready", () => {
  client.user.setActivity('Arroz', { type: 'PLAYING' }).catch
  console.log(`Logged in as ${client.user.tag}!`)
  var CronJob = require('cron').CronJob;
  var job = new CronJob(
    '0 0 0 * * *',
    function() {
      client.channels.cache.get(channelID).send('Parabéns <@583296716942606354> \n Não faço a minima se isto funcionou mas deve tar bem')
      console.log('o coiso do cron fez algo');
    },
    null,
    true,
    'Portugal'
  );
  // Use this if the 4th param is default value(false)
  // job.start()

})

//entre 1 a 6 horas é escolhido um user para ser mandado pó carvalho
/*client.on("ready", () => {
  var numeror = require('random-number');
  var options = {
  min:  3600000
, max:  21600000 
, integer: true
}
     console.log('ok a cenita do @ começou')
    setInterval(async function(){
        //The code you want to run
var numeror = require('random-number');
var options1 = {
  min:  0
, max:  5
, integer: true
}
var nmrrandom = numeror(options1)
var respostabruh = comunismo[nmrrandom]
        client.channels.cache.get(channelID).send(respostabruh + ' Pó carvalho sem v \n Se for de noite descupa aí boa noite');
         
}, timea * numeror(options) );      
  
})*/


client.on("message", msg => {
  if (msg.content.toLowerCase().includes("monkey")) {
    var VC = msg.member.voice.channel;
    if (VC) {
      VC.join().then(connection => {
        const dispatcher = connection.play('./monke.ogg', { volume: 1, });
        dispatcher.on("finish", end => { VC.leave() });
        console.log("monke.ogg");
      })
        .catch(e => {
          console.error(e);
        });
    }
  };
})


//coiso para testes
client.on("message", msg => {
  if (msg.content.toLowerCase().includes("uhuhu")) {
    msg.channel.send({
      files: ['./monke.ogg']
    })
  }
})


client.on("message", msg => {
  if (msg.content.toLowerCase() == "test") {
    msg.channel.send('tou vivo');
    console.log('tou vivo')
  }
})
//responde á mensagem sem dar ping
client.on("message", msg => {
  if (msg.content.toLowerCase() == "teste") {

    msg.channel.send('que queres');
  }
})

//responde ao ruben com o emote

client.on("message", msg => {
  var numeror = require('random-number');
  var rubengaya = {
    min: 1
    , max: 250
    , integer: true
  }
  if (msg.author.id === uID && numeror(rubengaya) === 5) {
    msg.react('810936686594228244');
  }
  else if (msg.author.id === uID && numeror(rubengaya) === 55) {
    var sum = 'https://tenor.com/view/shut-up-man-will-you-gif-18636332'
    msg.reply(sum)
  }

});

//responde á mensagem com uma imagem sem dar ping
client.on("message", msg => {
  if (msg.content.toLowerCase() == "joemamad4") {
    var joemamad4m = joemonkey[Math.floor(Math.random() * 5)];
    const attachment = new MessageAttachment(joemamad4m);
    msg.channel.send(attachment);
  }
})
//quando é dito UwU escolhe uma resposta da array com chance de não responder
client.on("message", msg => {
  if (msg.content.toLowerCase().includes('uwu')) {
    var rruwu = uwur[Math.floor(Math.random() * 5)];
    msg.reply(rruwu);
  }
})
//Temos os testes todos aqui
client.on("message", msg => {
  if (msg.content.toLowerCase().includes('-testes')) {
    msg.reply('\n Temos esta trampa para fazer : \n ~~26/04 - Teste MAT~~ \n ~~06/05 - Teste CFQ~~ \n ~~07/05 - Mini-Teste BG~~ \n ~~10/05 - Teste PT~~ \n ~~12/05 - Teste FIL~~ \n ~~13/05 - Listening ING~~ \n ~~17/05 - Trabalho de PT~~ \n ~~21/05 - Teste global BG~~ \n <:gun1:810933877773565953> 24/05 - Teste MAT <:nug:810937692837117983>  \n 27/05 - TTP BG \n 01/06 - Teste ING \n 02/06 - Teste de CFQ \n 08/06 -  Verificação de Leitura cesário verde  \n 18/06 - ESTA MERDA ACABA(~~durante 3 meses depois voltamos á merda~~) '
    );
  }
})

/* client.on("message" , msg => {
  if (msg.content.toLowerCase().includes(' n ')){
       msg.reply('Está caladinho');
  }
})

client.on("message" , msg => {
  if (msg.content.toLowerCase().includes('pog')){
       msg.reply('Está caladinho');
  }
})
*/


//salganhada para dar um hentai random para o ruben
client.on('message', msg => {
  if (msg.content == "-hentai") {
    var hentair = hentain[Math.floor(Math.random() * 19)];

    if (hentair == 1) {
      let res = HMfull.HMtai.nsfw.zettaiRyouiki()
      msg.channel.send("HentaiTH: " + res.url)
    }
    else if (hentair == 2) {
      let res = HMfull.HMtai.nsfw.zettaiRyouiki()
      msg.channel.send("Hentai: " + res.url)
    }
    else if (hentair == 3) {
      let res = HMfull.HMtai.nsfw.uniform()
      msg.channel.send('HentaiU: ' + res.url)
    }
    else if (hentair == 4) {
      let res = HMfull.HMtai.nsfw.ahegao()
      msg.channel.send('hentai UwU: ' + res.url)
    }
    else if (hentair == 5) {
      let res = HMfull.HMtai.nsfw.vagina()
      msg.channel.send('HentaiPussy: ' + res.url)
    }
    else if (hentair == 6) {
      let res = HMfull.HMtai.nsfw.thighs()
      msg.channel.send('HentaiTH: ' + res.url)
    }
    else if (hentair == 7) {
      let res = HMfull.HMtai.nsfw.boobjob()
      msg.channel.send('Paizuri: ' + res.url)
    }
    else if (hentair == 8) {
      let res = HMfull.HMtai.nsfw.glasses()
      msg.channel.send('Hentai: ' + res.url)
    }
    else if (hentair == 9) {
      let res = HMfull.HMtai.nsfw.glasses()
      msg.channel.send('Hentai: ' + res.url)
    }
    else if (hentair == 10) {
      let res = HMfull.HMtai.nsfw.pantsu()
      msg.channel.send('Pantsu: ' + res.url)
    }
    else if (hentair == 11) {
      let res = HMfull.HMtai.nsfw.yuri()
      msg.channel.send('Hentai yuri: ' + res.url)
    }
    else if (hentair == 12) {
      let res = HMfull.HMtai.nsfw.elves()
      msg.channel.send('Hentai: ' + res.url)
    }
    else if (hentair == 13) {
      let res = HMfull.HMtai.nsfw.ero()
      msg.channel.send('Hentai: ' + res.url)
    }
    else if (hentair == 14) {
      let res = HMfull.HMtai.nsfw.public()
      msg.channel.send('Hentai: ' + res.url)
    }
    else if (hentair == 15) {
      let res = HMfull.HMtai.nsfw.masturbation()
      msg.channel.send('Hentai: ' + res.url)
    }
    else if (hentair == 16) {
      let res = HMfull.HMtai.nsfw.hentai()
      msg.channel.send('Hentai: ' + res.url)
    }
    else if (hentair == 17) {
      let res = HMfull.HMtai.nsfw.femdom()
      msg.channel.send('Hentai: ' + res.url)
    }
    else if (hentair == 18) {
      let res = HMfull.HMtai.nsfw.manga()
      msg.channel.send('Hentai Manga: ' + res.url)
    }
    else if (hentair == 19) {
      let res = HMfull.HMtai.nsfw.ass()
      msg.channel.send('Hentai Ass: ' + res.url)
    }
  }
})
