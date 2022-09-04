//MODULE_NAME
const {Client,GatewayIntentBits} = require('discord.js');
const Discord = require("discord.js");
const fetch=require("node-fetch");
require('dotenv').config();

//TOKEN CONFIGURATION
const token_api=process.env.API_TOKEN;
const token_discord=process.env.DISCORD_TOKEN;

//CLIENT CONFIGURATION
const client=new Client({intents:[GatewayIntentBits.GuildMessages,
                                GatewayIntentBits.GuildMessageTyping,
                                GatewayIntentBits.Guilds,
                                GatewayIntentBits.MessageContent
                            ]});


//API_CONFIGURATION


//CLIENT CONFIGURATION
client.on("ready",()=>{
    console.log(`client logged in as ${client.user.tag}`);
});

client.on("messageCreate",msg=>{
    if(msg.author.bot){
        return ;
    }
    if(msg.content.toLowerCase()==="hello"){
        msg.channel.send("working");
    }
})

//CLIENT LOGIN CONFIGURATION
client.login(token_discord);