// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
// const fetch = require('node-fetch')

// this will import the quotes
// const { getRandomQuote } = require('./src/quotes') 

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	// statusBarItem.text = getRandomQuote();
	fetchQuote(statusBarItem); //This call fetchQuote() to use the api
	statusBarItem.show();
	
	async function fetchQuote(statusBarItem) {
		try {
			const response = await fetch("http://127.0.0.1:5000")
			const data = await response.json();
			console.log("Fetching data", data);

			// if (data && data.content && data.author) {
			// 	statusBarItem.text = {data.content}{data.author};
			// } else {
			// 	statusBarItem.text 
			// }

		} catch (error) {
			console.error("Error fetching data", error)
			statusBarItem.text = `"Stay positive and keep coding!"`;
		}
	}
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "quotes" is now active!');
	
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('newquote.newQuote', function () {
		// The code you place here will be executed every time your command is executed
		
		fetchQuote(statusBarItem); //fetch a new quote on command execution
			vscode.window.showInformationMessage(statusBarItem.text);


		// statusBarItem.text = getRandomQuote();

		// // Display a message box to the user
		// vscode.window.showInformationMessage('Hello VS Code');

		
	});
	context.subscriptions.push(disposable);
}


// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}