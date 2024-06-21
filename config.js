// Enter the port that you want the website to be on.
// Default port is 4777, if you want to change it, you can change it here.
// If the hosting provider doesn't allow you to use the port 4777, you can change it to what the hosting provider allows you to use.
const port = 3000;

// Enter the domain that you will use for the website.
const domain = 'https://localhost:3000';

// Are you going to localhost the website or host it on a server?
// Set to "true" if you are localhosting.
// Set to "false" if you are hosting it on a server.
const localhosting = true;

module.exports = {
    // Client will be the bot that you will use for the main purpose of the website and commands.
    client: {
        id: '1253486883166621748', // Bot ID
        token: process.env.CLIENT_TOKEN, // Bot token
        secret: '1JTVAxkOm5S6JUuvpNoXCsunYJPZhM7T', // Bot secret
        prefix: 'a!', // Bot prefix
        owners: ["664171400193638401", "738684490787979304"], // Bot owner(s) ID, can be multiple owners separated by comma 
    },

    // ServerClient will be the bot that will be used for the server list/server commands 
    // and the bot that will be public to everyone so they can invite it to their server.
    serverClient: {
        id: '1253488617876226152', // Server Bot ID
        prefix: 's!', // Server Bot prefix
        token: process.env.CLIENT_TOKEN, // Server Bot token

        // Replace the REPLACEME with your client ID
        invite: 'https://discord.com/oauth2/authorize?client_id=1253488617876226152&scope=bot%20identify&permissions=19473'
    },

    database: {
        url: 'mongodb+srv://devvyydev:s2ilq6X1kIoeMWow@cluster0.gaxfdto.mongodb.net', // Mongo url (eg. mongodb+srv://<username>:<password>@<host>/<database>)
    },

    website: {
        port: port, // Website port

        // DO NOT CHANGE "localhosting"
        localhosting: localhosting,

        url: localhosting ? 'http://localhost:' + port : domain, // Website url
        callback: localhosting ? 'http://localhost:' + port + '/callback' : domain + '/callback', // Website callback url

        // For login issues about the callback url, please join the support server and check the #support channel pinned messages.
        // If you still can't fix it, feel free to open a ticket in the support server.

        support: 'https://discord.gg/sQQFSnQhdt', // discord support server
        roles: {
            administrator: ["664171400193638401"] // administrator role id(s)
        },
        botTags: [ // Botlist tags
            "Fun",
            "NSFW",
            "Game",
            "24/7",
            "OSU!",
            "Guard",
            "Anime",
            "Music",
            "Memes",
            "Invite",
            "Reddit",
            "Twitch",
            "Crypto",
            "Economy",
            "Logging",
            "Youtube",
            "Utility",
            "General",
            "Leveling",
            "Roleplay",
            "Fortnite",
            "Welcomer",
            "Chat bot",
            "Minecraft",
            "Community",
            "Minigames",
            "Moderation",
            "Protection",
            "Web Dashboard",
            "Reaction Roles",
            "Auto Moderation",
        ],
        serverTags: [
            "Fun",
            "Game",
            "NSFW",
            "Meme",
            "Shop",
            "Media",
            "Emoji",
            "Sound",
            "Stream",
            "Social",
            "Design",
            "Company",
            "Turkish",
            "Protest",
            "E-Sport",
            "Bot List",
            "Chatting",
            "Roleplay",
            "Challange",
            "Community",
            "Technology",
            "Server List",
            "Development",
        ]
    },

    server: {
        id: '1253503100715663392', // Server ID

        emojis: {
            "approve": "<:db_verified:826375752840249365>",
            "decline": "<:db_delete:816717275431174144>",
            "success": "✅",
            "error": "❌",
        },

        // Channel IDs
        channels: {
            errors: '1253503210627268678', // Sends errors to this channel
            login: '1253503232538316861', // Sends login logs to this channel (member login)
            botlogs: '1253503358904307712', // Bot Add, Remove, Approve, Deny, Edit
            votes: '1253503407063437404', // Bot votes channel
            serverlogs: '1253503469579669637', // Server Add, Remove, Approve, Deny, Edit

            // Greetings
            welcome: '1253503101315321858', // welcome logs channel Member/Bot joins the server
            leave: '1253503101315321858', // Leave logs channel Member/Bot leaves the server

            schedules: '1253503535622918204', // New schedule logs channel when you want to schedule a promotion

            // Mongo Logs
            database: {
                logs: '1253503596566155347', // Channel ID to store database changes
            },

            voiceChannelStatistics: '1253512651707781130', // Voice channel statistics channel "Website Visitors: 1365"
        },

        // Role IDs
        roles: {
            botReviewer: '1253512704484708372', // Bot reviewer role
            botDeveloper: '1253512744938901565', // Bot developer role

            verifiedBot: '1253512787620270172', // Verified bot role
            unverifiedBot: '1253512835334541312', // Unverified bot role
        }
    },

    languages: [{
        flag: 'gr',
        code: 'el',
        name: 'Greek'
    }, {
        flag: 'gb',
        code: 'en',
        name: 'English'
    }, {
        flag: 'tr',
        code: 'tr',
        name: 'Türkçe'
    }, {
        flag: 'de',
        code: 'de',
        name: 'Deutsch'
    }, {
        flag: 'ru',
        code: 'ru',
        name: 'Russian'
    }, {
        flag: 'fr',
        code: 'fr',
        name: 'French'
    }, {
        flag: 'es',
        code: 'es',
        name: 'Spanish'
    }],
}
