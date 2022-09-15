import moment from 'moment'

export const toDateString = (date: Date): string => moment(date).format('MMMM D, YYYY')

export const formatUSD = (num: number): string => `$${(num / 100).toLocaleString('en-us', { minimumFractionDigits: 2 })}`

export const decodeHTMLEntities = (str: string): string => {
  return str.replace(/&#(x?)([0-9]+);/g, (_, hex, num) => {
    return `${String.fromCharCode(parseInt(num, hex === 'x' ? 16 : 10))}`
  })
}
