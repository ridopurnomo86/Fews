<template>
  <div class="relative">
    <header class="mx-auto container py-4 relative w-full">
      <nav class="flex justify-between items-center">
        <ul class="flex items-center">
          <li>
            <NuxtLink to="/">
              <p class="text-xl font-bold mr-4">Fews</p>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/shop">
              <p class="text-md font-medium mr-4">Shop</p>
            </NuxtLink>
          </li>
        </ul>
        <ul class="flex items-center">
          <li v-if="!props.isAuthenticated" class="hidden md:block">
            <NuxtLink to="/signin">
              <p class="text-base font-medium mr-4">Sign In</p>
            </NuxtLink>
          </li>
          <div v-for="item in NAVBAR_LINK" :key="item.id">
            <NuxtLink :href="item.link" class="hidden md:block">
              <Icon :name="item.icon" size="20px" class="mr-4 cursor-pointer" />
            </NuxtLink>
          </div>
          <li class="hidden md:block cursor-pointer">
            <button text="" type="button" @click="onClickProfile">
              <Icon :name="'octicon:person-16'" size="20px" />
            </button>
          </li>
          <li>
            <button text="" type="button" @click="onClickSideBar">
              <Icon
                name="ant-design:align-right-outlined"
                size="20px"
                class="mr-4 cursor-pointer block md:hidden"
              />
            </button>
          </li>
        </ul>
      </nav>
      <div class="relative">
        <div class="absolute right-4 top-2 z-50">
          <UserMenuCard
            :email="email"
            :full-name="fullName"
            :is-show="isShowProfile"
            :has-authenticated="isAuthenticated"
            :on-logout="onClickLogout"
          />
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import UserMenuCard from '~~/components/cards/UserMenuCard.vue';
import NAVBAR_LINK from './data';

const props = withDefaults(
  defineProps<{
    isAuthenticated?: boolean;
    onClickSideBar: () => void;
    onClickProfile: () => void;
    email: string;
    fullName: string;
    isShowProfile: boolean;
    onClickLogout: () => void;
  }>(),
  {
    isAuthenticated: false,
  }
);
</script>
