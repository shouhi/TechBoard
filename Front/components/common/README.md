# 共通コンポーネント

## 共通 UI の準備

script に mixins を追加する

```
import extensions from '~/mixins/extensions'

export default {
  mixins: [extensions],
  ...
```

## 共通 UI の使い方

#### ローディング

```
// ローディング開始
this.startLoading()
// ローディング停止
this.stopLoading()
```

#### スナックバー

```
this.openSnackbar({ color: 'success', text: 'SUCCESS' });
```

パラメータ

| パラメータ名 |                        | 値                                                                                    | デフォルト値 |
| ------------ | ---------------------- | ------------------------------------------------------------------------------------- | ------------ |
| text         | メッセージ             | 'Hello KAITE'                                                                         | 空           |
| y            | 表示する位置           | 'top', 'bottom', 'center'                                                             | 'top'        |
| 'color'      | メッセージ             | 'success', 'error', 'warning', 'info'..., or 'purple', '#033', 'rgba(255, 0, 0, 0.5)' | 'success'    |
| timeout      | 表示している時間(msec) | '5000'                                                                                | '3000'       |

## 右クリックメニューの準備

### template の準備

- 任意の箇所に context-menu をかく

```
　context-menu(v-model="contextMenu")
    v-list
      v-list-item
        v-list-item-title aaaaaa
```

### script の準備

- mixins/contextmenu, ContextMenu を import する
- components に ContextMenu を追加する
- mixins に contextmenu を追加する

```
<script>
import ContextMenu from '~/components/common/ContextMenu';
import contextmenu from '~/mixins/contextmenu';
export default {
  mixins: [contextmenu],
  components: {
    ContextMenu,
  },
```
