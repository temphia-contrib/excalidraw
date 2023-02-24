# Excalidraw

simple excaldraw example.

## Usage

```bash

# build with npm
npm run build

#fix new main.xxx.js and main.xxx.css in bprint.yaml

# export config file
export TEMPHIA_BDEV_BPRINT_CONFIG=".temphia/bprint.yaml"

# export as zip
temphia-cli  bdev zip

# upload to from admin/bprints -> new
# then instance it

# ofcourse doing this in each modification would be stupid 
# you could temphia-cli push to push modified file
# but you have to set .env file with `bprint_dev_token` thing


```

## Links

- [Excalidraw](https://github.com/excalidraw/excalidraw)
- [Temphia](http://github.com/temphia/temphia)


[Demo](demo.md)