# ページ

## 共通 UI の準備

### template の準備

- トップエレメントを page-template にして v-model="pageTemplateData" を設定する

```
<template lang="pug">
  div
    v-container
</template>
```

### script の準備

- mixins/page, PageTemplate を import する
- components に PageTemplate を追加する
- mixins に page を追加する

```
<script>
import PageTemplate from '~/components/common/PageTemplate';
import page from '~/mixins/page';
export default {
  components: {
  },
  ...
```

## 共通 UI の使い方

#### ローディング

```
// ローディング開始
this.$nuxt.$loading.start()
// ローディング停止
this.stopLoading()
```

#### スナックバー

```
this.$nuxt.$emit('openSnackbar', { color: 'success', text: 'SUCCESS' });
```

パラメータ

| パラメータ名 |                        | 値                                                                                    | デフォルト値 |
| ------------ | ---------------------- | ------------------------------------------------------------------------------------- | ------------ |
| text         | メッセージ             | 'Hello KAITE'                                                                         | 空           |
| y            | 表示する位置           | 'top', 'bottom', 'center'                                                             | 'top'        |
| 'color'      | メッセージ             | 'success', 'error', 'warning', 'info'..., or 'purple', '#033', 'rgba(255, 0, 0, 0.5)' | 'success'    |
| timeout      | 表示している時間(msec) | '5000'                                                                                | '3000'       |
