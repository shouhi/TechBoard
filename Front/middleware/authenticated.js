import clientInit from '~/plugins/nuxt-client-init.js'
import utils from '~/libs/utils'

const myMiddleware = async ({route, redirect, store, $axios}) => {
  const user = await utils.getUser()
  if (user) {
    //Process when user is logged in
    await utils.setupUser(user, $axios, store)
    await clientInit({store})
    if (['index'].includes(route.name)) {
      redirect(`/dashboard`)
    }
  } else if (['boards-boardId-invites-id'].includes(route.name)) {
    redirect(`/instant-login?url=${encodeURI(route.fullPath)}`)
  } else if (
    !['index', 'login', 'signup', 'instant-login'].includes(route.name)
  ) {
    redirect(`/login?url=${encodeURI(route.fullPath)}`)
  }
}
export default myMiddleware
