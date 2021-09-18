export { default as BoardsList } from '../../components/dashboard/BoardsList.vue'
export { default as ColorSelect } from '../../components/common/ColorSelect.vue'
export { default as ConfirmationDialog } from '../../components/common/ConfirmationDialog.vue'
export { default as ContextMenu } from '../../components/common/ContextMenu.vue'
export { default as Loading } from '../../components/common/Loading.vue'
export { default as ShortcutButtons } from '../../components/common/ShortcutButtons.vue'
export { default as SnackBar } from '../../components/common/SnackBar.vue'
export { default as FontColorSelect } from '../../components/common/fontColorSelect.vue'
export { default as BoardAppBar } from '../../components/boards/BoardAppBar.vue'
export { default as BoardMenuBar } from '../../components/boards/BoardMenuBar.vue'
export { default as CreateBoardDialog } from '../../components/dialog/CreateBoardDialog.vue'
export { default as CreateNameDialog } from '../../components/dialog/CreateNameDialog.vue'
export { default as EditBoardDialog } from '../../components/dialog/EditBoardDialog.vue'
export { default as EditSharedCardDialog } from '../../components/dialog/EditSharedCardDialog.vue'
export { default as EmailListDialog } from '../../components/dialog/EmailListDialog.vue'
export { default as InstantLoginDialog } from '../../components/dialog/InstantLoginDialog.vue'
export { default as InviteUser } from '../../components/dialog/InviteUser.vue'
export { default as MembersDialog } from '../../components/dialog/MembersDialog.vue'
export { default as SharedCardSizeDialog } from '../../components/dialog/SharedCardSizeDialog.vue'
export { default as AppBar } from '../../components/layouts/AppBar.vue'
export { default as AppealCard } from '../../components/top/AppealCard.vue'
export { default as PricingCard } from '../../components/top/PricingCard.vue'
export { default as Section } from '../../components/top/Section.vue'
export { default as StepCard } from '../../components/top/StepCard.vue'
export { default as SharedBoard } from '../../components/boards/shared-view/SharedBoard.vue'
export { default as SharedBoardOverview } from '../../components/boards/shared-view/SharedBoardOverview.vue'
export { default as SharedCard } from '../../components/boards/shared-view/SharedCard.vue'
export { default as SharedCardMenuBar } from '../../components/boards/shared-view/SharedCardMenuBar.vue'
export { default as SharedCardsField } from '../../components/boards/shared-view/SharedCardsField.vue'
export { default as SharedCardsTool } from '../../components/boards/shared-view/SharedCardsTool.vue'
export { default as StockCard } from '../../components/boards/stock-view/StockCard.vue'
export { default as StockMenuBar } from '../../components/boards/stock-view/StockMenuBar.vue'
export { default as StockView } from '../../components/boards/stock-view/StockView.vue'

export const LazyBoardsList = import('../../components/dashboard/BoardsList.vue' /* webpackChunkName: "components/boards-list" */).then(c => c.default || c)
export const LazyColorSelect = import('../../components/common/ColorSelect.vue' /* webpackChunkName: "components/color-select" */).then(c => c.default || c)
export const LazyConfirmationDialog = import('../../components/common/ConfirmationDialog.vue' /* webpackChunkName: "components/confirmation-dialog" */).then(c => c.default || c)
export const LazyContextMenu = import('../../components/common/ContextMenu.vue' /* webpackChunkName: "components/context-menu" */).then(c => c.default || c)
export const LazyLoading = import('../../components/common/Loading.vue' /* webpackChunkName: "components/loading" */).then(c => c.default || c)
export const LazyShortcutButtons = import('../../components/common/ShortcutButtons.vue' /* webpackChunkName: "components/shortcut-buttons" */).then(c => c.default || c)
export const LazySnackBar = import('../../components/common/SnackBar.vue' /* webpackChunkName: "components/snack-bar" */).then(c => c.default || c)
export const LazyFontColorSelect = import('../../components/common/fontColorSelect.vue' /* webpackChunkName: "components/font-color-select" */).then(c => c.default || c)
export const LazyBoardAppBar = import('../../components/boards/BoardAppBar.vue' /* webpackChunkName: "components/board-app-bar" */).then(c => c.default || c)
export const LazyBoardMenuBar = import('../../components/boards/BoardMenuBar.vue' /* webpackChunkName: "components/board-menu-bar" */).then(c => c.default || c)
export const LazyCreateBoardDialog = import('../../components/dialog/CreateBoardDialog.vue' /* webpackChunkName: "components/create-board-dialog" */).then(c => c.default || c)
export const LazyCreateNameDialog = import('../../components/dialog/CreateNameDialog.vue' /* webpackChunkName: "components/create-name-dialog" */).then(c => c.default || c)
export const LazyEditBoardDialog = import('../../components/dialog/EditBoardDialog.vue' /* webpackChunkName: "components/edit-board-dialog" */).then(c => c.default || c)
export const LazyEditSharedCardDialog = import('../../components/dialog/EditSharedCardDialog.vue' /* webpackChunkName: "components/edit-shared-card-dialog" */).then(c => c.default || c)
export const LazyEmailListDialog = import('../../components/dialog/EmailListDialog.vue' /* webpackChunkName: "components/email-list-dialog" */).then(c => c.default || c)
export const LazyInstantLoginDialog = import('../../components/dialog/InstantLoginDialog.vue' /* webpackChunkName: "components/instant-login-dialog" */).then(c => c.default || c)
export const LazyInviteUser = import('../../components/dialog/InviteUser.vue' /* webpackChunkName: "components/invite-user" */).then(c => c.default || c)
export const LazyMembersDialog = import('../../components/dialog/MembersDialog.vue' /* webpackChunkName: "components/members-dialog" */).then(c => c.default || c)
export const LazySharedCardSizeDialog = import('../../components/dialog/SharedCardSizeDialog.vue' /* webpackChunkName: "components/shared-card-size-dialog" */).then(c => c.default || c)
export const LazyAppBar = import('../../components/layouts/AppBar.vue' /* webpackChunkName: "components/app-bar" */).then(c => c.default || c)
export const LazyAppealCard = import('../../components/top/AppealCard.vue' /* webpackChunkName: "components/appeal-card" */).then(c => c.default || c)
export const LazyPricingCard = import('../../components/top/PricingCard.vue' /* webpackChunkName: "components/pricing-card" */).then(c => c.default || c)
export const LazySection = import('../../components/top/Section.vue' /* webpackChunkName: "components/section" */).then(c => c.default || c)
export const LazyStepCard = import('../../components/top/StepCard.vue' /* webpackChunkName: "components/step-card" */).then(c => c.default || c)
export const LazySharedBoard = import('../../components/boards/shared-view/SharedBoard.vue' /* webpackChunkName: "components/shared-board" */).then(c => c.default || c)
export const LazySharedBoardOverview = import('../../components/boards/shared-view/SharedBoardOverview.vue' /* webpackChunkName: "components/shared-board-overview" */).then(c => c.default || c)
export const LazySharedCard = import('../../components/boards/shared-view/SharedCard.vue' /* webpackChunkName: "components/shared-card" */).then(c => c.default || c)
export const LazySharedCardMenuBar = import('../../components/boards/shared-view/SharedCardMenuBar.vue' /* webpackChunkName: "components/shared-card-menu-bar" */).then(c => c.default || c)
export const LazySharedCardsField = import('../../components/boards/shared-view/SharedCardsField.vue' /* webpackChunkName: "components/shared-cards-field" */).then(c => c.default || c)
export const LazySharedCardsTool = import('../../components/boards/shared-view/SharedCardsTool.vue' /* webpackChunkName: "components/shared-cards-tool" */).then(c => c.default || c)
export const LazyStockCard = import('../../components/boards/stock-view/StockCard.vue' /* webpackChunkName: "components/stock-card" */).then(c => c.default || c)
export const LazyStockMenuBar = import('../../components/boards/stock-view/StockMenuBar.vue' /* webpackChunkName: "components/stock-menu-bar" */).then(c => c.default || c)
export const LazyStockView = import('../../components/boards/stock-view/StockView.vue' /* webpackChunkName: "components/stock-view" */).then(c => c.default || c)
