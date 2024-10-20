**DO NOT INSTALL THIS PACKAGE IN A PRODUCTION ENVIRONMENT**

# Supply Chain Attack Demonstration

This repository contains a demonstration package to illustrate the potential dangers of supply chain attacks in the npm ecosystem. It is intended for educational purposes only.

Part of my "Supply Chain Shenanigans" session.
Check out that session and others [HERE](https://todorov.bg/speaking/).

## ⚠️ Warning

This package creates a file in your home directory when installed.

That file contains the content of your `/etc/passwd` file.

It does **not** expose any real sensitive information, but it demonstrates how a malicious package could potentially do so.

## Purpose

The purpose of this demonstration is to raise awareness about the importance of vetting dependencies and maintaining good security practices when working with npm packages.

## How it works

When this package is installed, it runs a `postinstall.js` script that:

1. Creates a file named 'HACKED.txt' in the user's home directory.
2. Writes a message to this file, including the content of a system file (`/etc/passwd`).
3. Logs warning messages to the console.

## Usage

**DO NOT INSTALL THIS PACKAGE IN A PRODUCTION ENVIRONMENT**

1. Clone this repository
2. Run `npm pack` to create a tarball of the package
3. In a separate test directory, run `npm install path/to/shady-package-1.0.0.tgz`

## Ethical Considerations

This demonstration is for educational purposes only. Creating and distributing actually malicious packages is unethical and illegal. Always respect system integrity and user privacy.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
