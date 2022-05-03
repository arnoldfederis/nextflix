import dayjs from 'dayjs'

export const formatDate = (date = dayjs(), format = 'YYYY-MM-DD HH:mm:ss') => {
  return dayjs(date).format(format)
}

export const formatCamelCase = (string) => {
  return string.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => {
    return str.toUpperCase()
  })
}
