const fs = require('fs')
const fsp = require('fs').promises

async function createFiles() {
    try {
        await fsp.writeFile('Async.txt', "Created By Async")
    } catch (error) {
        console.log(error.message)
    }
}

fs.writeFileSync("Sync.txt", "Created By Sync")

createFiles()