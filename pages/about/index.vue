<template>
  <TransitionFade :delay="200" :duration="600">
    <div class="box">About Page</div>
  </TransitionFade>
</template>

<script lang="ts">
import { TransitionFade } from '@morev/vue-transitions';

export default {
  components: { TransitionFade },
};
</script>
