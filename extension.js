// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this will import the quotes
const { getRandomQuote } = require('./src/quotes') 

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	statusBarItem.text = getRandomQuote();
	statusBarItem.show();
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "quotes" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('newquote.newQuote', function () {
		// The code you place here will be executed every time your command is executed
		
		statusBarItem.text = getRandomQuote();
			vscode.window.showInformationMessage(statusBarItem.text);
		// // Display a message box to the user
		// vscode.window.showInformationMessage('Hello VS Code');
	});

	context.subscriptions.push(statusBarItem, disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}