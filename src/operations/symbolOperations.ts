import { TextEditor, window } from 'vscode'
import { EntryLine } from '../models/EntryLine'
import { Symbol } from '../models/Symbol'

/**
 * Set an entry's symbol.
 * @param newSymbol The new symbol for updating the entry.
 */
const setSymbolOperation = async (newSymbol: string): Promise<boolean> => {
  // Ensure an editor is open.
  const editor: TextEditor | undefined = window.activeTextEditor
  if (!editor) {
    throw new Error('No editors open.')
  }

  // Make entry.
  const entry = new EntryLine(editor.document.lineAt(editor.selection.active.line))

  // Parse and set the entry elements.
  await entry.parse()

  // Make symbol.
  const symbol = new Symbol(editor)

  // Update entry symbol.
  return await symbol.update(newSymbol, entry)
}

/**
 * Wrapper for to the user command for the symbol setting operation.
 * @param symbol The symbol for updating the entry.
 */
export const setSymbol = (symbol = ' '): void => {
  // Update the task status.
  setSymbolOperation(symbol)
    .then((success) => {
      if (!success) {
        window.showErrorMessage('Failed to update task symbol')
      }
    })
    .catch((error) => {
      window.showErrorMessage(error.message)
    })
}

/**
 * Completed.
 */
export const setSymbolCompleted = (): void => {
  setSymbol('x')
}

/**
 * Opened.
 */
export const setSymbolOpened = (): void => {
  setSymbol()
}

/**
 * Started.
 */
export const setSymbolStarted = (): void => {
  setSymbol('/')
}

/**
 * Dropped.
 */
export const setSymbolDropped = (): void => {
  setSymbol('-')
}
