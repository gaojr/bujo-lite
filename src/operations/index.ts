import * as symbol from './symbolOperations'

/**
 * Create operations module.
 *
 * Each operation has a wrapper that can directly use in a command exposed via
 * the command palette.
 */
const operations = {
  symbol,
}

/**
 * Export the bundled operations module.
 */
export = operations
