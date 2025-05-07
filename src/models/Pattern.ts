export class Pattern {
  /*
   * Pattern to check if a line contains a valid entry.
   * Demo: https://regex101.com/r/kQeMBp/1
   */
  public static checkEntry = /(?<=\s)\[.\](?=\s*[?!*]?\s*)(?!\s*[?!*]?\s*\||\s*[?!*]?\s*$)/

  /*
   * Pattern to parse a line and extract the components of an entry.
   * Demo: https://regex101.com/r/aRIlGX/3
   */
  public static extractEntry =
    /(?<=\s)(?<open>\[)(?<symbol>.)(?<close>\])(?=\s*[?!*]?\s*)(?!\s*[?!*]?\s*\||\s*[?!*]?\s*$)\s*(?<modifier>[!?*]?)\s*(?<text>.*?)(?=\s+\^[a-z0-9]{6,}|\s+\||\s*$)/

  /*
   * Pattern to extract the symbol of an entry.
   * Demo: https://regex101.com/r/ABVEf2/3
   */
  public static extractSymbol(symbol: string) {
    return new RegExp('(?<=\\s\\[)(' + symbol + ')(?=\\]\\s)')
  }
}
