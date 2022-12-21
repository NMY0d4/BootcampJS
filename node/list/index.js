#!/usr/bin/env node

const fs = require("fs");
const util = require("util");
const chalk = require("chalk");

// ------- Methode 2 ------ //
// const lstat = util.promisify(fs.lstat);

// ------- Methode 3 ------ //
const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, filenames) => {
    if (err) {
        console.error(err);
    }

    const statPromises = filenames.map((filename) => lstat(filename));

    const allStats = await Promise.all(statPromises);

    allStats.forEach((stats) => {
        const index = allStats.indexOf(stats);

        if (stats.isFile()) {
            console.log(filenames[index]);
        } else {
            console.log(chalk.bold(filenames[index]));
        }
    });

    // try {
    //     for (let filename of filenames) {
    //         const stats = await lstat(filename);

    //         console.log(filename, stats.isFile());
    //     }
    // } catch (err) {
    //     console.log(err);
    // }

    // ------- Methode 1 -- not the best ------ //
    // const allStats = Array(filenames.length).fill(null);

    // for (let filename of filenames) {
    //     const index = filenames.indexOf(filename);

    //     fs.lstat(filename, (err, stats) => {
    //         if (err) console.log(err);

    //         allStats[index] = stats;

    //         const ready = allStats.every((stats) => {
    //             return stats;
    //         });
    //         if (ready) {
    //             allStats.forEach((stats, index) => {
    //                 console.log(filenames[index], stats.isFile());
    //             });
    //         }
    //     });
    // }

    // BAD CODE HERE!!!
    // for (let filename of filenames) {
    //     fs.lstat(filename, (err, stats) => {
    //         if (err) {
    //             console.log(err);
    //         }
    //         console.log(filename, stats.isFile());
    //     });
    // }
    // BAD CODE COMPLETE
});

// const lstat = (filename) => {
//     return new Promise((resolve, reject) => {
//         fs.lstat(filename, (err, stats) => {
//             if (err) {
//                 reject(err);
//             }

//             resolve(stats);
//         });
//     });
// };
