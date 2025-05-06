import { TextEditor, window } from "vscode";
import { EntryLine } from "../models/EntryLine";
import { Symbol } from "../models/Symbol";


/**
 * Set an entry's symbol.
 * @param newSymbol The new symbol for updating the entry.
 */
async function setSymbolOperation(newSymbol: string): Promise<boolean> {
    // Ensure an editor is open.
    const editor: TextEditor | undefined = window.activeTextEditor;

    // Ensure an editor is open.
    if (!editor) {
        throw new Error("No editors open.");
    }

    // Make entry.
    const entry = new EntryLine(editor, editor.document.lineAt(editor.selection.active.line));

    // Parse and set the entry elements.
    await entry.parse(false);

    // Make symbol.
    const symbol = new Symbol(editor);

    // Update entry symbol.
    return await symbol.update(newSymbol, entry);
};


/**
 * Wrapper for to the user command for the symbol setting operation.
 */
export const setSymbol = (args: any): void => {
    // Ensure symbol is provided.
    if (!args.symbol) {
        window.showErrorMessage('Symbol not provided via keybinding.');
        return
    }

    // Update the task status.
    setSymbolOperation(args.symbol).then(success => {
        if (success) {
            window.showInformationMessage('Updated entry symbol.');
        } else {
            window.showErrorMessage("Failed to update task symbol");
        }
    }).catch(error => {
        window.showErrorMessage(error.message);
    });
}


/**
 * Completed.
 */
export const setSymbolCompleted = (): void => {
    setSymbolOperation('x').then(success => {
        if (success) {
            window.showInformationMessage('Completed.');
        } else {
            window.showErrorMessage("Failed to update task symbol");
        }
    }).catch(error => {
        window.showErrorMessage(error.message);
    });
};


/**
 * Opened.
 */
export const setSymbolOpened = (): void => {
    setSymbolOperation(' ').then(success => {
        if (success) {
            window.showInformationMessage('Opened.');
        } else {
            window.showErrorMessage("Failed to update task symbol");
        }
    }).catch(error => {
        window.showErrorMessage(error.message);
    });
};


/**
 * Started (i.e., in progress).
 */
export const setSymbolStarted = (): void => {
    setSymbolOperation('/').then(success => {
        if (success) {
            window.showInformationMessage('Started.');
        } else {
            window.showErrorMessage("Failed to update task symbol");
        }
    }).catch(error => {
        window.showErrorMessage(error.message);
    });
};


/**
 * Dropped.
 */
export const setSymbolDropped = (): void => {
    setSymbolOperation('-').then(success => {
        if (success) {
            window.showInformationMessage('Dropped.');
        } else {
            window.showErrorMessage("Failed to update task symbol");
        }
    }).catch(error => {
        window.showErrorMessage(error.message);
    });
};
