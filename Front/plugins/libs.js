import _const from '~/libs/const'
import utils from '~/libs/utils'
import env from '~/libs/environment'

export default ({ app }, inject) => {
  inject('const', _const)
  inject('utils', utils)
  inject('env', env)
}
