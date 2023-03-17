<template>
  <div class="relative">
    <Navbar :on-click-side-bar="handleSideBar" />
    <ClientOnly>
      <Sidebar
        v-on-click-outside="handleSideBar"
        :is-show-sidebar="showSidebar"
        :handle-close-side-bar="handleSideBar"
      />
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
    const sidebarRef = ref(null);

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
      sidebarRef,
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
