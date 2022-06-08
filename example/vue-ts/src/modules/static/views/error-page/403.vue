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
    title="403 Error!"
    description="抱歉，您没有权限访问~"
    :has-goback="false"
  />
</template>
