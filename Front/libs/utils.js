import moment from 'moment'
import firebase from '~/plugins/firebase.js'

export default class Utils {
  static limit(src, a, b) {
    const min = Math.min(a, b)
    const max = Math.max(a, b)
    if (src < min) {
      return min
    }
    if (src > max) {
      return max
    }
    return src
  }

  static nl2br(text) {
    return text.replace(/\n/g, '<br/>')
  }

  static removeItemFromArrayWithKey(array, item, key) {
    const index = array.findIndex((i) => i[key] === item[key])
    if (index >= 0) {
      array.splice(index, 1)
    }
  }

  static removeItemFromArrayIndex(array, index) {
    if (index >= 0) {
      array.splice(index, 1)
    }
  }

  static removeItemFromArray(array, item) {
    const index = array.findIndex((i) => i === item)
    if (index >= 0) {
      array.splice(index, 1)
    }
  }

  static sleep(msec) {
    return new Promise((resolve) => setTimeout(resolve, msec))
  }

  static isBetween(src, a, b) {
    const min = Math.min(a, b)
    const max = Math.max(a, b)
    return min <= src && max >= src
  }

  static dateToJapanese(date) {
    moment.locale('ja')
    return moment(date).format('LLLL')
  }

  static isBoardAcceped(state) {
    return state !== 0
  }

  static errorMessage(err) {
    let ret = err.message
    if (err.response && err.response.data && err.response.data.message) {
      ret = err.response.data.message
    } else {
      const englishErr = err.message
      const re = /[^\s]+/g // 空白を含まない一文字以上の文字列を全て検索し、代入する正規表現
      const arrErrMessage = englishErr.match(re)
      if (
        arrErrMessage.includes('no' && 'user' && 'record' && 'corresponding')
      ) {
        return 'このメールアドレスは登録されていません'
      } else if (arrErrMessage.includes('email' && 'already' && 'use')) {
        return 'すでに登録されているメールアドレスです'
      } else if (arrErrMessage.includes('email' && 'badly' && 'formatted.')) {
        return 'メールアドレスの形式が不正です'
      } else if (arrErrMessage.includes('should' && 'least' && 'characters')) {
        return '6桁以上のパスワードを入力してください'
      } else if (arrErrMessage.includes('password' && 'invalid')) {
        return 'パスワードが間違っています'
      } else if (
        arrErrMessage.includes(
          'many' && 'failed' && 'login' && 'temporarily' && 'disabled'
        )
      ) {
        return '多くのログインに失敗したため、このアカウントへのアクセスは一時的に無効化されています。パスワードをリセットすることで、すぐに復元することができます。'
      } else {
        return englishErr
      }
    }
    return ret
  }

  static getFirstChar(str) {
    return str[0]
  }

  static getUser = (_) => {
    return new Promise((resolve, reject) => {
      const fAuth = firebase.auth()
      fAuth.onAuthStateChanged((user) => {
        resolve(user)
      })
    })
  }

  static async setupUser(user, axios, store) {
    const idToken = await user.getIdToken() // トークン取得
    axios.setToken(idToken, 'Bearer')
    store.commit('user/setFirebaseUid', user.uid)
  }
}
