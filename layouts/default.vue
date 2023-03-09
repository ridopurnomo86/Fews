<template>
  <Head>
    <Meta charset="UTF-8" />
    <Meta :x-ua-compatible="'X-UA-Compatible'" content="IE=edge" />
    <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
  <div>
    <Navbar :on-click-side-bard="handleSideBar" />
    <Sidebar :is-show-sidebar="showSidebar" :handle-close-side-bar="handleSideBar" />
  </div>

  <!-- Children -->
  <div class="min-h-screen">
    <NuxtLoadingIndicator />
    <slot />
  </div>

  <Footer />
</template>

<script lang="ts">
import { ref } from 'vue';

const { disableScroll, enableScroll } = useDisableScroll();

export default defineComponent({
  name: 'Layouts',
  setup() {
    const showSidebar = ref<boolean>(false);

    const handleSideBar = () => {
      showSidebar.value = !showSidebar.value;
      if (!showSidebar.value) return enableScroll();
      return disableScroll();
    };

    return { showSidebar, handleSideBar };
  },
});
</script>
