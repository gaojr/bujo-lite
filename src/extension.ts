import * as vscode from 'vscode'
import * as operations from './operations'

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('bujo-lite.symbol.setCompleted', operations.symbol.setSymbolCompleted),
    vscode.commands.registerCommand('bujo-lite.symbol.setOpened', operations.symbol.setSymbolOpened),
    vscode.commands.registerCommand('bujo-lite.symbol.setStarted', operations.symbol.setSymbolStarted),
    vscode.commands.registerCommand('bujo-lite.symbol.setDropped', operations.symbol.setSymbolDropped)
  )
}

export function deactivate() {
  // Clean-up.
}
