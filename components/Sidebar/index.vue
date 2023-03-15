<template>
  <div
    class="fixed z-[30] left-0 top-0 w-full h-full overflow-auto bg-black opacity-40"
    :class="[isShowSidebar ? 'block' : 'hidden']"
  />
  <aside
    id="sidebar-multi-level-sidebar"
    class="fixed top-0 left-0 z-50 w-64 h-screen transition-transform -translate-x-full"
    :class="{ [`translate-x-0`]: isShowSidebar }"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-white flex flex-col justify-between">
      <div>
        <div class="flex justify-between pb-4 border-b mb-4">
          <NuxtLink to="/">
            <p class="text-xl font-bold">Fews</p>
          </NuxtLink>
          <button text="" type="button" @click="handleCloseSideBar">
            <Icon
              :name="'carbon:close-filled'"
              size="20px"
              class="mr-4 cursor-pointer text-gray-600"
            />
          </button>
        </div>
        <ul class="space-y-2">
          <div v-for="item in SIDEBAR_LINK" :key="item.id">
            <NuxtLink
              :href="item.link"
              class="flex items-center cursor-pointer px-2 py-4 text-base font-normal text-gray-900 rounded-lg hover:bg-zinc-200 transition"
            >
              <Icon :name="item.icon" size="24px" class="mr-4 cursor-pointer text-gray-600" />
              <p class="text-gray-600 text-sm font-medium">
                {{ item.title }}
              </p>
            </NuxtLink>
          </div>
        </ul>
      </div>
      <div>
        <button
          type="button"
          class="flex items-center w-full cursor-pointer px-2 py-4 text-base font-normal rounded-lg hover:bg-zinc-200 transition"
          @click="handleLogout"
        >
          <Icon
            :name="'ion:md-log-out'"
            size="24px"
            class="mr-4 cursor-pointer text-red-600 -rotate-180"
          />
          <p class="text-red-600 text-sm font-medium">Logout</p>
        </button>
        <NuxtLink
          :href="'/signin'"
          class="flex items-center cursor-pointer px-2 py-4 text-base font-normal text-gray-900 rounded-lg hover:bg-zinc-200 transition"
        >
          <Icon
            :name="'clarity:sign-in-solid'"
            size="24px"
            class="mr-4 cursor-pointer text-gray-600"
          />
          <p class="text-gray-600 text-sm font-medium">Sign in</p>
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useToast } from 'tailvue';
import SIDEBAR_LINK from './data';

defineProps<{ isShowSidebar: boolean; handleCloseSideBar: () => void }>();

const config = useRuntimeConfig();

const $toast = useToast();

const handleLogout = async () => {
  const { data, error }: any = await useFetch('/api/logout', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (data.value) {
    const cookies = useCookie(config.authSession, {
      maxAge: 0,
    });
    cookies.value = '';
    $toast.show({
      message: data.value.message,
      type: 'success',
      title: data.value.type,
      timeout: 2,
      wide: true,
    });

    return cookies;
  }

  if (error.value) {
    return $toast.show({
      message: 'Something Gone Wrong',
      type: 'warning',
      title: 'Error',
      timeout: 2,
      wide: true,
    });
  }

  return null;
};
</script>
