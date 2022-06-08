<script lang="ts">
import { defineComponent } from 'vue';
import Exception from '@/components/exception.vue';

export default defineComponent({
  components: {
    Exception,
  },
});
</script>

<template>
  <exception
    title="404 Error!"
    description="抱歉，你访问的页面不存在~"
  />
</template>
