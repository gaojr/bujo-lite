import { TextLine } from 'vscode'
import { Entry } from './Entry'
import { Pattern } from './Pattern'

export class EntryLine implements Entry {
  /**
   * BuJo skeleton implementation.
   */
  public notationOpen = ''
  public notationClose = ''
  public symbol = ''
  public modifier = ''
  public text = ''
  public id = ''

  /**
   * The editor and text line corresponding to the entry.
   */
  public line: TextLine

  /**
   * Entry constructor.
   */
  public constructor(line: TextLine) {
    // Set the line.
    this.line = line
  }

  /**
   * Set entry elements from text.
   */
  private parseEntryComponents(text: string) {
    // Match the entry elements text.
    const match = text.match(Pattern.extractEntry)

    // Set the entry elements.
    this.notationOpen = match!.groups!.open
    this.notationClose = match!.groups!.close
    this.symbol = match!.groups!.symbol
    this.modifier = match!.groups!.modifier
    this.text = match!.groups!.text
  }

  /**
   * Create an entry from a given editor line or fail.
   */
  public async parse(): Promise<void> {
    // Check if the line has a valid entry.
    if (!Pattern.checkEntry.test(this.line.text)) {
      throw new Error('The line does not contain a valid BuJo entry.')
    }

    // Set entry components.
    this.parseEntryComponents(this.line.text)
  }
}
