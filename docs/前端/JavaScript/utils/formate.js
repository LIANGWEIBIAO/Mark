/***************************
 * 格式化参数处理的方法
 ***************************/

/**
 * 千位分隔数字
 * @params num 数字
 * @params str 格式化类型(默认逗号)
 * 23423.342 => 23,23.342
 */
export function formateNum(num, str = ',') {
  const arr = String(num).split('.')
  // 整数
  const inter = arr[0]
  // 小数
  const deci = arr[1]
  const temp = String(inter).replace(/(\d)(?=(\d{3})+$)/g, `$1${str}`)
  return deci ? temp + '.' + deci : temp
}