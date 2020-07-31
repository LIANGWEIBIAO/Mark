import html2canvas from 'html2canvas'

/**
 * Converts canvas to an image
 * @param {object} canvas 对象
 * @return {String} Base64
 */
function convertCanvasToImage(canvas) {
  const base64 = canvas.toDataURL('image/jpeg', 1.0)
  return base64
}

/**
 * 截图 - 核心
 * @param {String} el 元素容器
 * @return {String} Base64(Promise返回)
 */
function screenshot(el, options = {}) {
  if (!el) {
    console.error('调用screenshot方法缺少el元素')
    return false
  }

  const opts = {
    scale: 2, // 添加的scale 参数
    backgroundColor: null, // 默认透明
    logging: false // 日志开关，便于查看html2canvas的内部执行流程
  }

  const params = Object.assign({}, opts, options)

  return new Promise((resolve, reject) => {
    html2canvas(el, params).then(function (canvas) {
      const context = canvas.getContext('2d')
      context.mozImageSmoothingEnabled = false
      context.webkitImageSmoothingEnabled = false
      context.msImageSmoothingEnabled = false
      context.imageSmoothingEnabled = false

      const capture = convertCanvasToImage(canvas)
      resolve(capture)
    })
  })
}

export default screenshot