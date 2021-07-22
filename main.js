const { app, BrowserWindow } = require("electron");

function createWindow() {
	const window = new BrowserWindow({
		width: 800,
		height: 600,
		icon: './calendar.png'
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

