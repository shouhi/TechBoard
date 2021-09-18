export default class Const {
  static get MAX_BOARD_X() {
    return 2000
  }

  static get MIN_BOARD_X() {
    return -2000
  }

  static get MAX_BOARD_Y() {
    return 2000
  }

  static get MIN_BOARD_Y() {
    return -2000
  }

  static get MAX_BOARD_SCALE() {
    return 3.0
  }

  static get BOARD_WIDTH() {
    return Const.MAX_BOARD_X - Const.MIN_BOARD_X
  }

  static get BOARD_HEIGHT() {
    return Const.MAX_BOARD_Y - Const.MIN_BOARD_Y
  }

  static get ALIGN_PADDING() {
    return 15
  }

  static get defaults() {
    return {
      cardWidth: 200,
      cardHeight: null,
      fontColor: '#101010',
    }
  }

  static get colors() {
    return {
      board: [
        '#B2EBF2',
        '#FFCDD2',
        '#FFF59D',
        '#DCEDC8',
        '#FAFAFA',
        '#00000000',
      ],
      cardSelectedRect: '#2196F3',
      transparent: '#00000000',
      grey: 'grey darken-1',
    }
  }

  static get fontColors() {
    return {
      board: ['#20221F', '#FFFFFF', '#F44336', '#1E88E5'],
      transparent: '#00000000',
      grey: 'grey darken-1',
    }
  }

  static get zIndex() {
    return {
      // movable-controll-boxが3000なのでそれより大きい数字
      sharedBoardOverview: 3004,
      sharedBoardOverlay: 3005,
      boardMenuBar: 3006,
      stockView: 3010,
      sharedCardMenuBar: 3015,
      mainMenuBar: 3020,
      dialog: 3025,
      snackBar: 3030,
      loadingBlocker: 3035,
    }
  }

  static get fontSize() {
    return {
      small: 1.0,
      medium: 1.5,
      large: 2.25,
      xlarge: 3.375,
      xxlarge: 5,
    }
  }

  static get cardSize() {
    return {
      squareSmall: { width: 100, height: 100 }, // 正方形
      squareMedium: { width: 200, height: 200 },
      squareLarge: { width: 300, height: 300 },
      rectangleSmall: { width: 100, height: 50 }, // 長方形
      rectangleMedium: { width: 200, height: 100 },
      rectangleLarge: { width: 300, height: 150 },
    }
  }

  // 権限
  static get ROLE_VIEWER() {
    return 1
  }

  static get ROLE_EDITOR() {
    return 2
  }

  static get ROLE_ADMIN() {
    return 7
  }

  // 参加中・招待中
  static get PERMISSION_STATE_JOIN() {
    return 1
  }

  static get PERMISSION_STATE_NOT_JOIN() {
    return 0
  }

  static ROLE_TO_NAME(role) {
    return Const.ROLE_NAME_TABLE[role]
  }

  static NAME_TO_ROLE(name) {
    return Const.NAME_ROLE_TABLE[name]
  }

  static get ROLE_NAME_TABLE() {
    const ret = {}
    ret[Const.ROLE_VIEWER] = '閲覧者'
    ret[Const.ROLE_EDITOR] = '編集者'
    ret[Const.ROLE_ADMIN] = '管理者'
    return ret
  }

  static get NAME_ROLE_TABLE() {
    const ret = {}
    ret['閲覧者'] = Const.ROLE_VIEWER
    ret['編集者'] = Const.ROLE_EDITOR
    ret['管理者'] = Const.ROLE_ADMIN
    return ret
  }
}
