const fs = require('fs')
const eris = require('eris')
let arr = []
const express = require("express")
const app = express()
// MADE BY SHELBY
app.get("/", (req, res) => {
 res.send("bot online > MADE BY SHELBY")
})
module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    const mongo = require('../mongo');
    mongo();
    console.log(client.user.tag + ' has logged in!');
    client.user.setActivity("SHELBY OP Join .gg/hackersop", {type: "PLAYING"}); // Status can be 'online' 'idle' or 'dnd' for do not disturb!
  }
};

console.log(`ok`)
app.listen(3000, () => {})

fs.readFileSync('shelby.txt').toString().split('\n').forEach(t => {
  arr.push(new eris(t))
})

for (let i = 0; i < arr.length; i++) {
  const b = arr[i]
  b.on('hello', function () { console.log(`token #${i+1}`) })
  b.on('error', function () { b.disconnect() })
  b.connect()
}