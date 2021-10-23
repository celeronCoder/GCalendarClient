const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
	const window = new BrowserWindow({
		titleBarStyle: 'hidden',
		title: 'Google Calendar',
		width: 1920,
		height: 1052,
		minHeight: 900,
		minWidth: 1281,
		icon: path.join(__dirname, 'calendar.png')
	});

	window.loadURL("https://calendar.google.com/calendar/u/0/r");
}

app.whenReady()
.then(() => {
	createWindow();

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	})
});

app.on("window-all-closed", () => {
	if (process.platform !== 'darwin') app.quit();
});

