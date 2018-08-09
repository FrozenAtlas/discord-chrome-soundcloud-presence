## Overview

<img src="https://i.imgur.com/b4EyqpV.png" width="20%" />

This is just a copy of jczstudios work with discord-chrome-presence(https://github.com/jczstudios/discord-chrome-presence) modified to only get soundcloud.

Discord-Chrome-SoundCloud-Presence allows you to set your Discord Rich Presence to whatever song you're listening to in Chrome. An additional Chrome extension is included in order to rely site information.

While not listening to anything the URL status will be shown.

## Installation

**REQUIRES NPM** (https://www.npmjs.com/get-npm)
```
git clone https://github.com/FrozenAtlas/discord-chrome-soundcloud-presence 
```
or download as .zip

open ```install.bat```

Then, install the Chrome extension from the extension directly. (Visit chrome://extensions, enable "Developer Mode", "Load Unpacked", choose the "Extension" directory inside this repository you cloned.

## Usage
Install the Google Chrome extension, included in the extension directory. Then, start the server using
```start.bat```
Discord will need to be open and the Chrome extension needs to be added (see Installation). For now, your presence updates only when the active tab is updated [Chrome tabs API](https://developer.chrome.com/extensions/tabs#event-onUpdated). For example, refreshing the page, navigation, etc.

## License

[Unlicense](http://unlicense.org/)
