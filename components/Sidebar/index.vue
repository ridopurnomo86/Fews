<template>
  <div
    class="fixed z-[30] left-0 top-0 w-full h-full overflow-auto bg-black opacity-40"
    :class="[isShowSidebar ? 'block' : 'hidden']"
    @click="handleCloseSideBar"
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
              :to="item.link"
              class="flex items-center justify-between cursor-pointer px-2 py-4 text-base font-normal text-gray-900 rounded-lg hover:bg-zinc-200 transition"
              @click="handleCloseSideBar"
            >
              <div class="flex items-center">
                <Icon :name="item.icon" size="24px" class="mr-4 cursor-pointer text-gray-600" />
                <p class="text-gray-600 text-sm font-medium">
                  {{ item.title }}
                </p>
              </div>
              <span
                v-if="cartStore.countTotalPrice && item.id === 5"
                class="h-[20px] w-[20px] flex items-center justify-center rounded-full bg-red-500 border-[1px] top-[-4px] right-0 left-3"
              >
                <p class="text-xs font-medium text-white">{{ cartStore.countCartItems }}</p>
              </span>
            </NuxtLink>
          </div>
        </ul>
      </div>
      <div>
        <button
          v-if="status === 'authenticated'"
          :text="''"
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
          v-if="status === 'unauthenticated'"
          :to="'/signin'"
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
import { useCartStore } from '~~/stores/useCart';
import SIDEBAR_LINK from './data';

defineProps<{ isShowSidebar: boolean; handleCloseSideBar: () => void }>();

const { status, signOut } = useAuth();

const cartStore = useCartStore();

const handleLogout = async () => {
  await signOut();
};
</script>
