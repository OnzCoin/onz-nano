# Onz Nano

[![Build Status](https://jenkins.onzcoin.com/buildStatus/icon?job=onz-nano/development)](https://jenkins.onzcoin.com/job/onz-nano/job/development)
[![Coverage Status](https://coveralls.io/repos/github/OnzCoin/onz-nano/badge.svg?branch=development)](https://coveralls.io/github/OnzCoin/onz-nano?branch=development)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)
[![Join the chat at https://gitter.im/OnzCoin/onz](https://badges.gitter.im/OnzCoin/onz.svg)](https://gitter.im/OnzCoin/onz?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![devDependencies Status](https://david-dm.org/onzHQ/onz-nano/dev-status.svg)](https://david-dm.org/onzHQ/onz-nano?type=dev)

## Development

```
git clone https://github.com/OnzCoin/onz-nano.git
cd onz-nano
npm install
npm run dev
```

Open http://localhost:8080

For ease of development, you can setItem in localStorage to prefill a passphrase, e.g.:
```
localStorage.setItem('passphrase', 'wagon stock borrow episode laundry kitten salute link globe zero feed marble')
```

And then you can setItem in localStorage to login automatically
```
localStorage.setItem('autologin', true)
```

## Build

```
npm run build
```

## Electron

### Start


Start the Electron client. Before staring you need to make sure the application is built. If you need to built the entire application, run

```
npm run build
```

as mentioned before. And if you want to solely build electron app, run

```
npm run build-electron
```

Then, in order to launch electron, you can run

```
npm run start
```

### Trouble Shoot

[LevelDown fails installation with NPM on windows 10.]
```
FIX:    choco install microsoft-build-tools / npm install windows-build-tools
FIX 1:  Install python, ie: choco install python, choco install python3.6
FIX 2:  Install windows sdk version 8.1,  choco install windows-sdk-8.1 
FIX 3:  Set Enviroment varible for python.
```

[Unable to find Electron App Error https://i.imgur.com/9lqLVhb.png]
```
FIX:    npm run build && npm start
FIX 2:  Check contents of package.json make sure "main" key exists. main.js is Electron Config file.
```


### Windows

Build package for Windows (on Windows in [Git BASH](https://git-for-windows.github.io/)).

```
npm run pack:win
```

### macOS

Build package for macOS (on macOs)

```
npm run pack 
```

### Linux

Build package for Linux (on Linux).

```
npm run pack 
```

## Run unit tests

### Single run
```
npm run test
```

### Run each time a file changes
```
npm run test-live
```

## Run end-to-end tests

### Setup

Setup protractor

```
./node_modules/protractor/bin/webdriver-manager update
```

Setup a onz test node to run on localhost:4000 as described in https://github.com/OnzCoin/onz#tests

And run it with [pm2](http://pm2.keymetrics.io/).

### Run

Start the development version of onz-nano:

```
npm run dev
```

Run the protractor tests (replace `~/git/onz/` with your path to onz core):

```
./e2e-test-setup.sh ~/git/onz/
npm run e2e-test
```

## Launch React Storybook

To launch storybook sandbox with components run
```
npm run storybook
```
and go to

http://localhost:6006/


## Authors

- Kan Wong <kan@onzcoin.com>
- Mars Yau <mars@onzcoin.com>
-Ricardo Ferro <ricardo.ferro@gmail.com>
-Oliver Beddows <oliver@lightcurve.io>
-Vít Stanislav <vit@lightcurve.io>
-Tobias Schwarz <tobias@lightcurve.io>
-Ali Haghighatkhah <ali@lightcurve.io>
-Yashar Ayari <darkyashi@gmail.com>

## License

Copyright © 2017-2018 ONZ COIN<br>
Copyright © 2016-2017 Lisk Foundation<br>

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the [GNU General Public License](https://github.com/OnzCoin/onz/tree/master/LICENSE) along with this program.  If not, see <http://www.gnu.org/licenses/>.


***

This program also incorporates work previously released with lisk `0.7.0` (and earlier) versions under the [MIT License](https://opensource.org/licenses/MIT). To comply with the requirements of that license, the following permission notice, applicable to those parts of the code only, is included below:

Copyright © 2016-2017 Lisk Foundation<br>
Copyright © 2015 Crypti<br>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
