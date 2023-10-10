#!/bin/sh
set -e

# Required for BrowserStackLocal
export NODE_OPTIONS="--experimental-modules"

npm install

USE_BROWSERSTACK=true ./node_modules/.bin/wdio wdio.conf.ts
