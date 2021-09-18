export default class Environment {
  static get FIREBASE_API_KEY() {
    return process.env.FIREBASE_API_KEY
  }

  static get FIREBASE_AUTH_DOMAIN() {
    return process.env.FIREBASE_AUTH_DOMAIN
  }

  static get FIREBASE_DATABASE_URL() {
    return process.env.FIREBASE_DATABASE_URL
  }

  static get FIREBASE_PROJECT_ID() {
    return process.env.FIREBASE_PROJECT_ID
  }

  static get FIREBASE_STORAGE_BUCKET() {
    return process.env.FIREBASE_STORAGE_BUCKET
  }

  static get FIREBASE_MESSAGING_SENDER_ID() {
    return process.env.FIREBASE_MESSAGING_SENDER_ID
  }

  static get FIREBASE_APP_ID() {
    return process.env.FIREBASE_APP_ID
  }

  static get FIREBASE_MEASUREMENT_ID() {
    return process.env.FIREBASE_MEASUREMENT_ID
  }

  static makeApiUrl(path) {
    if (path.startsWith('/')) {
      return process.env.API_HOST + '/api/v1' + path
    }
    return process.env.API_HOST + '/api/v1/' + path
  }

  static makeFrontUrl(path) {
    if (path.startsWith('/')) {
      return process.env.FRONT_HOST + path
    }
    return process.env.FRONT_HOST + '/' + path
  }
}
