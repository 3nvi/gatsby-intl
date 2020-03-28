#! /usr/bin/env node
"use strict"

const { spawnSync } = require("child_process")

spawnSync("npm install")
spawnSync("npm run bootstrap")

console.log("All setup!")
console.log("cd packages/gatsby-starter-intl")
console.log("npm run start")
