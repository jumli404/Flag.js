const { Client, GatewayIntentBits } = require('discord.js')
const c = new Client({ intents: [GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers] })
let prefix = '!flag'
let url = "https://restcountries.com/v3.1/all"
let msg = []
let i;
c.on("ready", () => {
    console.log('Ready')
    console.log("           ")
})
let game = (m) => {
    let index = Math.floor(Math.random() * 250 - 1)

    fetch(url)
        .then(res => res.json())
        .then(data => {
            m.channel.send('Guess the country')
            m.channel.send(data[index].flags.png)
            console.log(msg[0])
            console.log(data[index].name.common)
            check(data, m, index, i)

        })

}
function check(data, m, index,) {
    i = msg.length
    let intervalid = setInterval(a => {

        if (msg[i] === data[index].name.common) {
            m.channel.send('GG ')
            clearInterval(intervalid)
            msg = []
        }
        if (msg[i] != undefined & msg[i] != data[index].name.common) {
            m.channel.send('`Incorrect`')
            m.channel.send(`it's called  ${data[index].name.common}`)
            clearInterval(intervalid)
            msg[i]
            msg = []

        }
    }, 1000)

}

c.on("messageCreate", (m) => {
    if (m.content === "son" & m.author.id === "990966941126627370") {
        m.channel.send('`Father ~_~ `')

    }
    if (!m.author.bot) {

        console.log('You got a mail')
        //  m.channel.send('hi')
        if (m.content.startsWith(prefix.toLowerCase())) {
            //   m.channel.send('Guess The country')
            game(m)

        }
        else {
            msg.push(m.content)
            console.log(msg)


        }

    }
})

c.login(token)
