<script lang="ts">
import { defineComponent } from 'vue';
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.min';
import 'element-plus/dist/index.css';

export default defineComponent({
  components: {
    [ElConfigProvider.name]: ElConfigProvider,
  },
  setup() {
    return {
      locale: zhCn,
    };
  },
});
</script>

<template>
  <el-config-provider :locale="locale" size="small">
    <router-view />
  </el-config-provider>
</template>
