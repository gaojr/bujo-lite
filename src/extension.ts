import * as vscode from 'vscode';
import * as operations from "./operations";


// When extension gets activated.
export function activate(context: vscode.ExtensionContext) {

    // Register commands.
    context.subscriptions.push(
        // Symbol default symbols.
        vscode.commands.registerCommand('bujo.symbol.setCompleted', operations.symbol.setSymbolCompleted),
        vscode.commands.registerCommand('bujo.symbol.setOpened', operations.symbol.setSymbolOpened),
        vscode.commands.registerCommand('bujo.symbol.setStarted', operations.symbol.setSymbolStarted),
        vscode.commands.registerCommand('bujo.symbol.setDropped', operations.symbol.setSymbolDropped),
    );
}


// Clean-up.
export function deactivate() {}
