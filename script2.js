require("dotenv").config()

let usersNEW = JSON.parse(process.env.usersNEW)
let usersOLD = JSON.parse(process.env.usersOLD)
const active = {}

for (const usersNEWKey in usersNEW) {
    const old = usersOLD[usersNEWKey]
    const newActive = usersNEW[usersNEWKey]

    if (old === newActive) {
        continue
    } else {
        let newNumber = parseFloat(newActive)
        if (newActive.includes("k")) {
            newNumber *= 1000
        }

        let oldNumber = parseFloat(old)
        if (old.includes("k")) {
            oldNumber *= 1000
        }
        active[usersNEWKey] = newNumber - oldNumber
    }
}
const arr = Object.entries(active)
arr.sort(([,a],[,b]) => b-a)
console.log(Object.fromEntries(arr))














/*
fs.readFile(path.resolve(__dirname, "storage", "old-data.json"), (err, data) => {
    if (err) return console.error(err);

    const oldD = JSON.parse(data.toString())

    fs.readFile(path.resolve(__dirname, "storage", "new-data.json"), (err, dataNew) => {
        if (err) return console.error(err);

        const newD = JSON.parse(dataNew.toString())


    })
})
*/