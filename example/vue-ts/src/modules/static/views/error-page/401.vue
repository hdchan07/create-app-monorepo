<template>
  <exception
    title="401 Error!"
    description="抱歉，您没有登陆~"
    :has-goback="false"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Exception from '@/components/exception';

export default defineComponent({
  components: {
    Exception,
  },
});
</script>
