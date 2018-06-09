const Discord = require("discord.js");

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 3000");
});

var http = require("http");

const token = require("./Confidential/token.json");
const pref = "Z!";

var cmd = require("./zCommands/cmd-handle");

const Zilla = new Discord.Client();

Zilla.on("ready", () => {
    console.log("Ready to be OP!");
    Zilla.user.setActivity("how OP we are", "https://www.twitch.tv/prittclash");
});

Zilla.on("message", (message) => {
    if(message.content.startsWith(pref)) {
        var saidCommand = message.content.slice(2, message.content.length);
        message.channel.send(cmd.handleCommand(saidCommand, message.author.id));

        if(saidCommand == "help") {
            message.channel.send({embed: {
                color: 26112,
                author: {
                    name: Zilla.user.username,
                    icon_url: Zilla.user.avatarURL
                },
                title: "Zilla Bot (Beta) Help Center",
                description: "Zilla Bot Beta is a multipurpose bot made for Zillas' fam. It's proven to be highly capable and OP, just like any other zilla. The current beta version has been equipped with custom commands. The next version (gamma) will add the moderation commands.",
                fields: [
                    {
                        name: "Z!help",
                        value: "You just typed this. I don't wanna be too sarcastic here, but opening this gives you the help message. It's so simple, that you already did this before even I told you."
                    },
                    {
                        name: "Z!op",
                        value: "This command tells the name of the most OP fam"
                    },
                    {
                        name: "Z!invite",
                        value: "Pastes the invite link to the Zilla fam. (Remember that not everyone deserves to be invited to the fam. Only invite OP people who show interest to join us. At no point should you invite plebs or people who arent interested in us.)"
                    },
                    {
                        name: "Z!scheisters",
                        value: "Pastes the invite link to the supercell heist server."
                    },
                    {
                        name: "Z!zfclan",
                        value: "Pastes clan id for ZillaFam"
                    },
                    {
                        name: "Z!zf2clan",
                        value: "Pastes clan id for ZillaFam 2"
                    }
                ]
    
            }});
        }
    }

    if(message.content == "Z!party") {
    	message.channel.send("<a:partyblob:418417234449399808>");
    }

    if(message.content.startsWith("Z!preact")) {
    	var msgid = message.content.slice(8, message.content.length);
        message.react("418417234449399808");
    }

    if(message.content == "<:GWnkeHYPEREYES:373159877931171860>") {
        if(message.member.roles.find("name", "Dark side")) {
            message.channel.send(message.author.username + " uses the power of the dark side to unleash the ultimate hypergaze!");
        } else {
            if(message.member.roles.find("name", "Dark Apprentice")) {
                message.channel.send("Patience, you are still in trial to join the dark side!");
            } else {
                message.channel.send("Nub, you ain't dark side, so you can't hypergaze.");
            }
        }
    }

    if(message.content == "🤔") {
        message.channel.send(message.author.username + " is thinking. Expect a response after 4 years.");
    }

    if(message.content == "k") {
        message.channel.send("l,m,n,o,p,...");
    }

    if(message.content == "K") {
        message.channel.send("L,M,N,O,P,...");
    }

    if(message.content.indexOf("!!") >= 0) {
        message.channel.send("One exclamation mark is sufficient to express excitement, please not that many :rolling_eyes:");
    }

    if(message.content == "👀") {
        message.channel.send(message.author.username + " is peeking! 👀");
    }

    if(message.content.indexOf("<:GWcorbinTopKek:384871333705678868>") >= 0) {
        message.channel.send("Zilla Fam jokes are always OP...");
    }

    if(message.content.startsWith("Z!find-emote")) {
        var emote = message.content.slice(13, message.content.length);
        var server = emote.slice(2, emote.length);
        if(server.startsWith("corbin")) {
            message.channel.send("https://discord.gg/8RVRgwP");
        } else if(server.startsWith("froggy")) {
            message.channel.send("https://discord.gg/N63Pc6y");
        } else if(server.startsWith("nke")) {
            message.channel.send("https://discord.gg/EeBKmMz");
        } else if(server.startsWith("lgbtq")) {
            message.channel.send("https://discord.gg/pT8ScPB");
        } else if(server.startsWith("myths")||server.startsWith("mythi")) {
            message.channel.send("https://discord.gg/6AQh77S");
        } else if(server.startsWith("dotjs")) {
            message.channel.send("https://discord.gg/bxu7Q2p");
        } else if(server.startsWith("victoria")||server.startsWith("vicky")) {
            message.channel.send("https://discord.gg/xuR9mzZ");
        } else if(server.startsWith("immo")) {
            message.channel.send("https://discord.gg/UpCfesc");
        } else if(server.startsWith("skarzz")) {
            message.channel.send("https://discord.gg/KRh7UNe");
        } else if(server.startsWith("meh")||server.startsWith("tbh")||server.startsWith("smh")) {
            message.channel.send("https://discord.gg/GkSsPUW");
        } else if(server.startsWith("ping")) {
            message.channel.send("https://discord.gg/zvx3uRG");
        } else {
            if(emote.startsWith("GW")) {
                message.channel.send("I don't know where that emote is fam. <@293773173860597770>, find this emote!");
            } else {
                message.channel.send("That ain't a valid global emote name fam.");
            }
        }
    }

    
});

Zilla.login(token.value);

