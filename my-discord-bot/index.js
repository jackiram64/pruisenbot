// Import required modules 
const { Client, GatewayIntentBits } = require('discord.js'); 
require('dotenv').config(); 

// Create a new Discord client with message intent 
const client = new Client({ 
  intents: [ 
      GatewayIntentBits.Guilds,  
      GatewayIntentBits.GuildMessages,  
      GatewayIntentBits.MessageContent] 
}); 

// Bot is ready 
client.once('ready', () => { 
  console.log(`🤖 Logged in as ${client.user.tag}`); 
}); 

// Listen and respond to messages 
client.on('messageCreate', message => { 

  // Ignore messages from bots 
  if (message.author.bot) return; 

    if (message.content.toLowerCase() === 'hello') { 
    message.reply('Ik doe niet aan groeten!'); 
  }

  // Respond to a specific message 
  if (message.content.toLowerCase() === 'help help help') { 
    message.reply('Dat is toch echt jouw eigen probleem!'); 
  } 

    if (message.content.toLowerCase() === 'mevrouw, wat moet je doen als je bent vergeten waar je boek over gaat?') { 
    message.reply('Dat is toch wel jouw eigen probleem!'); 
  }

    if (message.content.toLowerCase() === 'tijdschrift') { 
    message.reply('Iemand heeft ook zijn tijdschrift meegenomen! >:('); 
  }
});   

// Log in to Discord using token from .env 
client.login(process.env.DISCORD_TOKEN); 
