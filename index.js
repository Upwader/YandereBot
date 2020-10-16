const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NzM5NjY3MTU0MzQ5MDY0MjE0.Xydytw.diw8S59lLdzybDWWph9ZsMyrhHk'


//made by upwader. upwader.com 

bot.on('ready', () =>{ 
	console.log('My botdy is ready');
})
// this fucking login text is gonna be the end of me
bot.login(token);

// things used in the statuses
	setInterval(() => {
		const statuses = [
			'with Osana',
			'are ya coding son?',
			'yandev help',
			'what can i say except, get banned',
			'for the bans, the warns and the mutes',
			'yandev help'
		]
		
// code. great good code
		const status = statuses[Math.floor(Math.random() * statuses.length)]
		bot.user.setActivity(status, { type: "PLAYING" })
	}, 5000)

// messages and stuff
bot.on('message',msg=>{
	if(msg.content.toLowerCase() === 'yandev youre a simp'){
		msg.reply('In short: No im not. ');
		msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png');
    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev wheres osana"){
		msg.reply('I already released osana. In 2015, actually.');
		msg.channel.send('heres the download https://cdn.discordapp.com/attachments/439017534709170187/738905431317020703/OsanaRelease.zip');
		msg.channel.send('youre getting banned tho. osana isnt a thing.')
		msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png');
    }   
	
})


		
bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev consume the cum chalice"){
		msg.channel.send('banned. you suck kid. im going to commit toaster bath if you dont stop doing that');
		msg.channel.send('its not cum chalice its SEMEN GOBLET. I HATE YOU. YOU SUCK AND EVEYRONE ELSE SUCKS TOO. I HATE YOU')
		msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png');
    }   
	
})


bot.on('message',msg=>
{
  if (msg.content.toLowerCase() === "yandev are ya coding son")
  {
    var CodingSon = Math.random()
    if (CodingSon < 0.5)
    {
      msg.channel.send('sure i am dad')
      msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png')
    }
    else if (CodingSon >= 0.5 && CodingSon <= 0.9)
    {
      msg.channel.send('In Short: No i am not.')
      msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png')
    }
    else
    {
      msg.channel.send('Dad, what is coding?')
      msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png')
    }
  }
})	


bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev what spins round?"){
		msg.channel.send('My code spins you right round, baby');
		msg.channel.send('Right round like spaghetti, baby');
		msg.channel.send('Right round round round');
		msg.channel.send('My code spins you right round, baby');
		msg.channel.send('Right round like spaghetti, baby')
		msg.channel.send('Right round round round')
		msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png');
    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev, what are ya doing son" & "yandev, what are you doing"){
		msg.channel.send('I am coding, dad');
		msg.channel.send('Sorry dad. I have to ban you...')
		msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png');

    }   
	
})


bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev how do you like them"){
		msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739943750238863500/video0.mov');
		msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png');

    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev hi"){
		msg.channel.send('WHAT DID YOU JUST SYA TO ME??????? BANNED. I HOPE YOU DIE OF CANCER!!!!!');
		msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png');

    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev do you have any talent"){
		msg.channel.send('You spin me right round like my code baby');
		msg.channel.send('https://cdn.discordapp.com/attachments/734470270060068924/739950709641838623/slowspin.gif');
		msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png');

    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev whats your favorite song"){
		msg.channel.send('this one. really nice song');
		msg.channel.send('https://www.youtube.com/watch?v=ocaGMulwpEM')
		msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png');

    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev im going to the bank"){
		msg.channel.send('REACH FOR THE SKAAAAAAAAAAAAH');
		msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/740001132792905849/Yandere_Dev_is_robbing_you.mp4')

    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev invite"){
		msg.channel.send('**You have made a terrible mistake.**');
		msg.channel.send('https://discord.com/oauth2/authorize?client_id=739667154349064214&scope=bot&permissions=8')
		msg.channel.send('For supports and questions: discord.gg/ekKQ56x')

    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev make some unity code"){
		msg.channel.send('sniff https://cdn.discordapp.com/attachments/739631028808974419/740020961587232788/unknown.png')
		msg.channel.send('else if');
		msg.channel.send('else if');
		msg.channel.send('else if');
		msg.channel.send('else if');
		

    }   
	
})



bot.on('message',msg=>
{
  if (msg.content.toLowerCase() === "yandev buy something")
  {
    var Patreon = Math.random()
    if (Patreon < 0.5)
    {
      msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/740310067940950036/unknown.png')
      msg.channel.send('Just bought this with my patreon money.')
    }
    else if (Patreon >= 0.5 && Patreon <= 0.9)
    {
      msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/740058607831220314/unknown.png')
      msg.channel.send('Just bought this with my patreon money.')
    }
    else
    {
      msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/740059011923312732/unknown.png')
      msg.channel.send('Just bought 3 of these with my patreon money.')
    }
  }
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev what have you done the past 6 years"){
		msg.channel.send('opened up the unity engine, made a new game cuz i was horny');
		msg.channel.send('did a few things with the game')
		msg.channel.send('nothing')
		msg.channel.send('nothing')
		msg.channel.send('nothing')
		msg.channel.send('nothing')
		msg.channel.send('nothing')
		msg.channel.send('nothing')
		msg.channel.send('got mad because people think im not doing anything with my game')
		msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png');
		
		
    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev can i have a drink"){
		msg.channel.send('Heres a nice drink that i made just for you with my special skills ;) ')
		msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/740052203036737636/unknown.png');
		msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png');


    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev what happens if you dont code"){
		msg.channel.send('please help')
		msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/740052909630292038/unknown.png');
		msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png');


    }   
	
})

bot.on('message',msg=>{
    if(msg.content.toLowerCase() === "yandev can i speedrun"){
    var Speedrun = Math.random();
        if (Speedrun > 0.5)
       {
             msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/740048802739781642/Yanderedev_Rage.mp3');
             msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png');
			 msg.channel.send('Congrats! You got the world record.')
       }
        else
        {
             msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/740048802739781642/Yanderedev_Rage.mp3');
             msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png');
			 msg.channel.send('Dammit! You didnt get a world record. That sucks! Try again.')
        }}
})  
bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev dox drapeis"){
             msg.channel.send('```doxxing dr apeys...```');
             msg.channel.send('name: crash bandicoot');
			 msg.channel.send('location: sony land')
			 msg.channel.send('phone number: 0414-4829573')


    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev fuck you"){
             msg.channel.send('https://cdn.discordapp.com/attachments/740059956098760804/740302224818700329/you_are_dead.mp4');
             msg.channel.send('Fuck you kid');


    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev loveletter is better"){
             msg.channel.send('In short: No its not.');
             msg.channel.send('Bow chan is fucking fat and yandere-chan isnt. Fuckin hell. Its obvious YanSim is better');
			 msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png')


    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev hi toddbot"){
             msg.channel.send('WHAT THE FUCK IS WRONG WITH YOU');
			 msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png')


    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev play cuphead"){
             msg.channel.send('https://cdn.discordapp.com/attachments/739998451861028885/740430862268760124/video0.mov');
			 msg.channel.send('RAWR')	


    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev enable the simulation"){
		msg.reply('**ACTIVATING YANDEV ACCURACY**');
		msg.channel.send('Done.');
		msg.channel.send('Hey guys, samus is cool.')
		msg.channel.send('Samus. I fucking love Samus. Look at them thighs!!')
		msg.channel.send('...')
		msg.channel.send('https://cdn.discordapp.com/attachments/739998451861028885/740430862268760124/video0.mov')
		msg.channel.send('FUCK')
		msg.channel.send('SOMEONE SAYS SAMUS AINT GOOD AT FUCKING SMASH')
		msg.channel.send('WHAT THE FUCK')
		
    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev you spin me right round"){
		msg.reply('All i know exactly');
		msg.react('🤗')
		msg.channel.send('is that you are really smart');
		msg.channel.send('**Congrats!!! Heres a free hug.**');
		msg.channel.send('https://cdn.discordapp.com/attachments/734470270060068924/739950709641838623/slowspin.gif')
    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev tell me the truth"){
		msg.reply('The emoji i reacted with is a hint of a better game made by a better developer');
		msg.react('💌')
    }   
	
})

bot.on('message',msg=>
{
  if (msg.content.toLowerCase() === "yandev stop sending me traps")
  {
    var traps = Math.random()
    if (traps < 0.5)
    {
	  msg.react('😉')
      msg.channel.send('https://cdn.discordapp.com/attachments/740059956098760804/740654964975730829/image0.jpg')
      msg.channel.send('what if i didnt?? 😉😉😉😉😉🍆🍑')
    }
    else if (traps >= 0.5 && traps <= 0.9)
    {
	  msg.react('😉')
      msg.channel.send('https://cdn.discordapp.com/attachments/740059956098760804/740655312729538721/image0.jpg')
	  msg.channel.send('what if i didnt?? 😉😉😉😉😉🍆🍑')
    }
    else
    {
	  msg.react('😉')
      msg.channel.send('https://cdn.discordapp.com/attachments/740059956098760804/740655805526835310/image0.jpg')
	  msg.channel.send('what if i didnt?? 😉😉😉😉😉🍆🍑')
    }
  }
})	

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev who did this"){
		msg.react('💯')
        msg.react('💥')
		msg.react('😂')
		msg.react('🔥')
		msg.react('💢')
		msg.channel.send('https://cdn.discordapp.com/attachments/734470270060068924/739950709641838623/slowspin.gif')
	}	
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev else if"){
		msg.reply('WHAT THYE FUCJK SI WRNG WITBHHF YOU IM FDBANDENDE YUO.');
		msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png')
    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev end the suffering"){
		msg.reply('ok. sad that you want to die. prepare!!!');
		msg.channel.send(':gun:')
		msg.channel.send('...wait')
		msg.channel.send('THIS IS A FUCKING WATER GUN')
		msg.channel.send('sorry i cant kill you')
    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev submit a toast"){
		msg.reply('You have humbly submitted a toast to Nicholas Alexander');
		msg.channel.send('For: Succesfully managing to pirate Warcraft 3 so that he may play Defense of the ancients.')
		msg.channel.send('Congratulations nick!!! Enjoy your DoTA.')
		
    }   
	
})

bot.on('message',msg=>
{
  if (msg.content.toLowerCase() === "yandev sing a song")
  {
    var song = Math.random()
    if (song < 0.5)
    {
      msg.channel.send('https://cdn.discordapp.com/attachments/740059956098760804/740696076583043102/YandereDev_-_You_Spin_Me_Round_Like_my_Code.mp4')
      msg.channel.send('credit to: Yandere Shitposter on YouTube')
    }
    else if (song >= 0.5 && song <= 0.9)
    {
      msg.channel.send('https://cdn.discordapp.com/attachments/740059956098760804/740696441122717826/YandereDev_sings_Bohemian_Rhapsody.mp4')
	  msg.channel.send('credit to: switch2e on YouTube')
    }
    else
    {
      msg.channel.send('https://cdn.discordapp.com/attachments/740059956098760804/740697423315337346/YandereDev_sings_Ocean_Man.mp4')
	  msg.channel.send('credit to: fcantil on YouTube')
    }
  }
})	

bot.on('message',msg=>
{
  if (msg.content.toLowerCase() === "yandev new feature")
  {
    var feature = Math.random()
    if (feature < 0.5)
    {
      msg.channel.send('The dick wanting level')
	  msg.channel.send('When you perform an act of hornyness, you will get horny. This will cause you to appear visibly horny. If youre too horny, people will be able to tell that you are horny as fuck just by looking at you. If your target sees you like this, this game will get a "Adult only" rating ( ͡~ ͜ʖ ͡°).')
      msg.channel.send('credit to: https://yandere-simulator.com')
    }
    else if (feature >= 0.5 && feature <= 0.9)
    {
      msg.channel.send('Osana')
	  msg.channel.send('haha jk')
	  msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png')
    }
    else
    {
      msg.channel.send('the Semen Cup')
	  msg.channel.send('when you drink the semen cup you become EvaX and humbly submit a toast to Nicholas Alexander for succesfully managing to pirate Warcraft 3.')
	  msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png')
    }
  }
})	

bot.on('message',msg=>
{
  if (msg.content.toLowerCase() === "yandev how are you right now")
  {
    var ystatus = Math.random()
    if (ystatus < 0.5)
    {
      msg.channel.send('i am horny :wink:')
      msg.channel.send('since i am horny im gonna go fap and not work on YanSim')
    }
    else if (ystatus >= 0.5 && ystatus <= 0.9)
    {
      msg.channel.send('bored')
	  msg.channel.send('since i am bored im gonna stream on Twitch and not work on YanSim')
    }
    else
    {
      msg.channel.send('good')
	  msg.channel.send('since i am good i am gonna go on 4chan and not work on YanSim')
    }
  }
})	

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev please release my family"){
		msg.channel.send('Not until you hand me 50000 dollars through Patreon.')
		msg.channel.send('Then, ill hand you your family and a free Yandere-chan body pillow.')
		msg.channel.send(':gun:')
		
    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "toddbot"){
		msg.reply('STOP CHEATING ON ME WITH TODDBOT')
		msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png')
		
    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev suggest command"){
		msg.reply('https://forms.gle/v1WpPJhHrNSEDacd6')
		
    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev suggest"){
		msg.reply('https://forms.gle/v1WpPJhHrNSEDacd6')
		
    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev loveletter"){
		msg.reply('im going to commit suicide if:')
		msg.channel.send('1. else')
		msg.channel.send('2. drapeis doesnt cancel loveletter')
		msg.channel.send('3. you dont stop harassing me')
		msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png')
		
    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev ocean man"){
		msg.channel.send('TAKE ME BY THE HAND')
		msg.channel.send('LEAD ME TO THE LAND')
		msg.channel.send('THAT YOU UNDERSTAND')
		msg.channel.send('https://cdn.discordapp.com/attachments/734470270060068924/739950709641838623/slowspin.gif')
		
    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev release osana"){
		msg.channel.send('Sure.')
		msg.channel.send('https://cdn.discordapp.com/attachments/439017534709170187/738905431317020703/OsanaRelease.zip')
		msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png')
		
    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev whens yansim releasing"){
		msg.channel.send('October 26th, 2032.')
		msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png')
		
    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev wheres yansim releasing"){
		msg.channel.send('Windows, Mac, Linux, Atari 2600, Sega Pico, Nintendo Entertainment System, Nintendo Switch, Windows Phone and Atari 5200.')
		msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png')
		
    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev i love you"){
		msg.guild.me.setNickname("Not really");
		msg.channel.send('I love you too.')
		msg.guild.me.setNickname("YandereBot");
		
    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev how do you code"){
		msg.guild.me.setNickname("else if");
		msg.channel.send("else if");
		msg.channel.send("else if");
		msg.channel.send("else if");
		msg.channel.send("else if");
		msg.channel.send("else if");
		msg.guild.me.setNickname("YandereBot");
		msg.channel.send("https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png")
		
    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev you are gay"){
		msg.channel.send("NO I AM NOT. YOU ARE GAY!!! FUCK YOU KID!!!");
		msg.channel.send("https://cdn.discordapp.com/attachments/739631028808974419/739672726608019489/unknown.png")

		
    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev dammit"){
		msg.channel.send("https://www.youtube.com/watch?v=2HjLN1TA3bc");
		msg.channel.send("Holy shit. Just holy shit. The lifeless creation praises you.")

		
    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev dammit"){
		msg.channel.send("https://www.youtube.com/watch?v=2HjLN1TA3bc");
		msg.channel.send("Holy shit. Just holy shit. The lifeless creation praises you.")

		
    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev hug me"){
		msg.channel.send("https://cdn.discordapp.com/attachments/741547902983208971/741897820583362641/unknown.png");
		msg.channel.send("Bring it in!")

		
    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev hug me bring it in"){
		msg.channel.send("https://cdn.discordapp.com/attachments/741547902983208971/741897820583362641/unknown.png");
		msg.channel.send("I think they wanna take a picture.")

		
    }   
	
})

// PLEASE. KEEP THIS SHIT AT THE BOTTOM. I CANT STRESS THIS ENOUGH
bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev help"){
		msg.reply('**YANDEREBOT HELP**');
		msg.channel.send('This is a list of all the things YandereBot can reply to.');
		msg.channel.send(' All of these are placed in an image due to *GREAT CODING PRACTICES.* The bot may lag while sending these, so be patient.')
		msg.channel.send('https://cdn.discordapp.com/attachments/741547902983208971/742104382769856643/YanbotCodelist.png')
		
    }   
	
})

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev help 2"){
		msg.reply('**YANDEREBOT HELP: ELECTRIC BOOGALOO**');
		msg.channel.send('This is a list of all the things YandereBot can reply to.');
		msg.channel.send(' All of these are placed in an image due to *GREAT CODING PRACTICES.* The bot may lag while sending these, so be patient.')
		msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/741183070132109342/YanbotCodelist2.png')
		
    }   
	
})




bot.on('message',msg=>
{
  if (msg.content.toLowerCase() === "yandev who made you")
  {
    var hugme = Math.random()
    if (hugme < 0.5)
    {
      msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/742948061768319036/Credits.webm')
      msg.channel.send('I think they wanna take a picture.')
    }
    else if (hugme >= 0.5 && hugme <= 0.9)
    {
      msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/742948061768319036/Credits.webm')
	  msg.channel.send('I was the dirty boy, youre the new secret toy')
    }
    else
    {
      msg.channel.send('https://cdn.discordapp.com/attachments/739631028808974419/742948061768319036/Credits.webm')
	  msg.channel.send('Hug me!')
    }
  }
})	

bot.on('message',msg=>{
	if(msg.content.toLowerCase() === "yandev betatest"){
		msg.channel.send('Congrats, you got that nice mspaint skill.')
		msg.channel.send('If you want to betatest the YandereBot, dm me. Upwader#2829 (case sensitive)');


    }   
	
})
