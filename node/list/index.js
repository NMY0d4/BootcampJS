#!/usr/bin/env node

const fs = require("fs");

fs.readdir(process.cwd(), (err, filenames) => {
    if (err) {
        console.error(err);
    }

    console.log(filenames);
});
