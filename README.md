## Overview

<img src="https://imgur.com/a/T0NpArc" width="20%" />

This is just a copy of jczstudios work with discord-chrome-presence(https://github.com/jczstudios/discord-chrome-presence) modified to only get soundcloud.

Discord-Chrome-SoundCloud-Presence allows you to set your Discord Rich Presence to whatever song you're listening to in Chrome. An additional Chrome extension is included in order to rely site information.

## Installation

REQUIRES NPM (https://www.npmjs.com/get-npm)
```
git clone
cd discord-chrome-soundcloud-presence
npm install
npm start
```
Then, install the Chrome extension from the extension directly. (Visit chrome://extensions, enable "Developer Mode", "Load Unpacked", choose the "Extension" directory inside this repository you cloned.

## Usage
Install the Google Chrome extension, included in the extension directory. Then, start the server using
```
npm start
```
Discord will need to be open and the Chrome extension needs to be added (see Installation). For now, your presence updates only when the active tab is updated [Chrome tabs API](https://developer.chrome.com/extensions/tabs#event-onUpdated). For example, refreshing the page, navigation, etc.

## License

[Unlicense](http://unlicense.org/)
