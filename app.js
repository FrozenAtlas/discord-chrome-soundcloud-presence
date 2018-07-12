const express = require('express');
const app = express();
const client = require('discord-rich-presence')('466175424616071169');

app.use(express.json());

app.post("/", (request, response) => {
	let body = request.body;
	let presence = {
		state: body.details.substring(0, 128),
		details: body.state.substring(0, 128),
		largeImageKey: 'soundcloud',
		largeImageText: 'SoundCloud',
		instance: true
	}

	client.updatePresence(presence);
	response.sendStatus(200);
});

app.listen(3000, () => console.log('Discord-Chrome-SoundCloud-Presence is ready!'))
