import moment from "moment";

export const toDateString = (date: Date) =>  moment(date).format('MMMM D, YYYY')

export const formatUSD = (num: number) => `$${(num / 100).toLocaleString('en-us', {minimumFractionDigits: 2})}`