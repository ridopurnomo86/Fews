<template>
  <Head>
    <Meta charset="UTF-8" />
    <Meta :x-ua-compatible="'X-UA-Compatible'" content="IE=edge" />
    <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
  <div class="relative">
    <Navbar
      :email="'John'"
      :full-name="'Mactavish'"
      :on-click-side-bar="handleSideBar"
      :is-authenticated="isAuthenticated"
      :on-click-profile="handleShowProfile"
      :is-show-profile="showProfile"
      :on-click-logout="handleLogout"
    />
    <ClientOnly>
      <Sidebar :is-show-sidebar="showSidebar" :handle-close-side-bar="handleSideBar" />
    </ClientOnly>
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
import useAuth from '~~/composables/useAuth';

const { disableScroll, enableScroll } = useDisableScroll();

export default defineComponent({
  name: 'Layouts',
  setup() {
    const showSidebar = ref<boolean>(false);
    const showProfile = ref<boolean>(false);

    const { isAuthenticated } = useAuth();

    const handleSideBar = () => {
      showSidebar.value = !showSidebar.value;
      if (!showSidebar.value) return enableScroll();
      return disableScroll();
    };

    const handleShowProfile = () => {
      showProfile.value = !showProfile.value;
    };

    const handleLogout = async () => {
      return null;
    };

    return {
      showSidebar,
      handleSideBar,
      isAuthenticated,
      handleShowProfile,
      handleLogout,
      showProfile,
    };
  },
});
</script>
