export default class Environment {
  static get FIREBASE_API_KEY() {
    return import.meta.env.VITE_FIREBASE_API_KEY
  }

  static get FIREBASE_AUTH_DOMAIN() {
    return import.meta.env.VITE_FIREBASE_AUTH_DOMAIN
  }

  static get FIREBASE_DATABASE_URL() {
    return process.env.FIREBASE_DATABASE_URL
  }

  static get FIREBASE_PROJECT_ID() {
    return import.meta.env.VITE_FIREBASE_PROJECT_ID
  }

  static get FIREBASE_STORAGE_BUCKET() {
    return import.meta.env.VITE_FIREBASE_STORAGE_BUCKET
  }

  static get FIREBASE_MESSAGING_SENDER_ID() {
    return import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID
  }

  static get FIREBASE_APP_ID() {
    return import.meta.env.VITE_FIREBASE_APP_ID
  }

  static get FIREBASE_MEASUREMENT_ID() {
    return import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
  }

  static makeApiUrl(path: string) {
    console.log(import.meta.env.VITE_API_HOST)
    if (path.startsWith('/')) {
      return import.meta.env.VITE_API_HOST + '/api/v1' + path
    }
    return import.meta.env.VITE_API_HOST + '/api/v1/' + path
  }
}
