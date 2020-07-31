class Auth {
  /**
   * 获取设备类型
   *
   * @return string
   */
  getDevice = () => {
    const ua = window.navigator.userAgent
    if (/sunline/i.test(ua)) {
      if (/Android/i.test(ua)) {
        return 'android'
      } else if (/i(Phone\s*)?OS/i.test(ua)) {
        return 'ios'
      }
      return 'unknown'
    }
    return 'h5'
  }

  /**
   * 获取userId
   *
   * @return string
   */
  getUserId = () => {
    const matches = window.location.href.match(/userId=([a-z0-9]+)/i)
    if (matches) {
      let userInfo = localStorage.getItem('userSessionInfo')
      if (userInfo === 'undefined' || userInfo === undefined || userInfo === null || userInfo === 'null' || userInfo === '') {
        userInfo = '{}'
      }
      const sessionInfo = JSON.parse(userInfo)
      sessionInfo.userId = matches[1]
      localStorage.setItem('userSessionInfo', JSON.stringify(sessionInfo))
      return matches[1]
    }
    const sessionInfo = JSON.parse(localStorage.getItem('userSessionInfo'))
    if (sessionInfo) {
      return sessionInfo.userId
    }
    return ''
  };

  /**
   * 获取登录凭证
   *
   * @return string
   */
  getAuthToken = () => {
    const matches = window.location.href.match(/sessionId=([a-z0-9]+)/i)
    if (matches) {
      let userInfo = localStorage.getItem('userSessionInfo')
      if (userInfo === 'undefined' || userInfo === undefined || userInfo === null || userInfo === 'null' || userInfo === '') {
        userInfo = '{}'
      }
      const sessionInfo = JSON.parse(userInfo)
      sessionInfo.sessionId = matches[1]
      localStorage.setItem('userSessionInfo', JSON.stringify(sessionInfo))
      return matches[1]
    }
    const sessionInfo = JSON.parse(localStorage.getItem('userSessionInfo'))
    if (sessionInfo) {
      return sessionInfo.sessionId
    }

    return ''
  }
}

export default new Auth()
