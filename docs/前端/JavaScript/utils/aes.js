/**
 * MD5加密文件
 * 前后端数据传输加密
 */
const CryptoJS = require('crypto-js')

// 秘钥
const aesKey = CryptoJS.enc.Utf8.parse(window.AES_KEY)

// Encrypt
export function encrypt(params) {
  const srcs = CryptoJS.enc.Utf8.parse(params)
  const ciphertext = CryptoJS.AES.encrypt(srcs, aesKey, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 })
  return ciphertext.toString()
}

// Decrypt
export function decrypt(params) {
  const decryptedData = CryptoJS.AES.decrypt(params, aesKey, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 })
  return CryptoJS.enc.Utf8.stringify(decryptedData).toString()
}