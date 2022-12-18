const fs = require("fs");

fs.readdir(".", (err, filenames) => {
    if (err) {
        console.error(err);
    }

    console.log(filenames);
});
