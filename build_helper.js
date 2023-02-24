const fs = require('fs')

fs.readFile('./build/asset-manifest.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`Error reading file from disk: ${err}`)
    } else {
        const asset = JSON.parse(data)
        const files = asset["files"]

        const mainjs = files["main.js"]
        const maincss = files["main.css"]

        fs.readFile("./.temphia/bprint_template.yaml", (e1, d1) => {
            const tpl = d1.toString('utf8')
            const out = tpl.replace("main.xxxx.js", mainjs).
                replace("main.xxxx.css", maincss)

            fs.writeFileSync('./.temphia/bprint.yaml', out, 'utf8')
        })

        console.log("@asset", asset["files"])


    }
})