import { Range, TextEditor, TextEditorEdit, TextLine } from 'vscode'
import { EntryLine } from './EntryLine'
import { Pattern } from './Pattern'

export class Symbol {
  /**
   * VS Code objects.
   */
  private editor: TextEditor

  /**
   * Symbol constructor.
   */
  public constructor(editor: TextEditor) {
    this.editor = editor
  }

  /**
   * Get line index for a given entry symbol.
   * @param line An instance of `TextLine` class.
   * @param symbol The symbol to use during parsing.
   */
  private getLineIndexAtSymbol(line: TextLine, symbol: string): number {
    // Get `regex` pattern given symbol.
    const pattern = Pattern.extractSymbol(symbol)

    // Match and return.
    return line.text.match(pattern)?.index ?? 0
  }

  /**
   * Update the symbol corresponding to an entry.
   * @param newSymbol The new symbol for updating the entry.
   * @param entry An instance of `Entry` class.
   */
  public async update(newSymbol: string, entry: EntryLine): Promise<boolean> {
    // Get index for the current symbol.
    const index = this.getLineIndexAtSymbol(entry.line, entry.symbol)

    // Toggle symbol if the new symbol matches the current one.
    entry.symbol = entry.symbol === newSymbol ? ' ' : newSymbol

    // Create range for replacement.
    const range: Range = new Range(entry.line.lineNumber, index, entry.line.lineNumber, index + 1)

    // Replace character with symbol.
    return await this.editor.edit((editBuilder: TextEditorEdit) => {
      editBuilder.replace(range, entry.symbol)
    })
  }
}
