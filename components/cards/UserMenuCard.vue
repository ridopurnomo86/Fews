<template>
  <div
    class="overflow-hidden z-50 transition-all rounded border bg-white max-w-[250px] w-full bg-white shadow"
    :class="[isShow ? 'opacity-100' : 'opacity-0']"
  >
    <div class="flex items-center border-b-[1px] p-4">
      <div class="rounded-[100%] bg-indigo-200 p-2 mr-4">
        <Icon
          v-if="!hasAuthenticated"
          :name="'material-symbols:person-off-outline-rounded'"
          size="24px"
          class="text-gray-600"
        />
        <p v-else class="text-md text-black font-semibold">
          {{ displayName(fullName) }}
        </p>
      </div>
      <div>
        <p class="text-sm sm:text-md text-black font-semibold">
          {{ hasAuthenticated ? fullName : 'Sign In' }}
        </p>
        <p class="text-xs sm:text-sm text-gray-600 font-medium">
          {{ hasAuthenticated ? email : 'Please, Sign in' }}
        </p>
      </div>
    </div>
    <div class="p-4">
      <NuxtLink href="/account/settings">
        <div class="flex items-center mb-3">
          <Icon
            :name="'material-symbols:person-outline-rounded'"
            size="20px"
            class="mr-4 text-gray-600"
          />
          <p class="text-xs sm:text-sm text-gray-600 font-semibold">Account Settings</p>
        </div>
      </NuxtLink>
      <div v-if="hasAuthenticated">
        <button
          text=""
          type="button"
          class="flex items-center mb-3 cursor-pointer"
          @click="onLogout"
        >
          <Icon :name="'ion:md-log-out'" size="20px" class="mr-4 text-gray-600" />
          <p class="text-xs sm:text-sm text-gray-600 font-semibold">Logout</p>
        </button>
      </div>
      <div v-else>
        <NuxtLink href="/signin">
          <div class="flex items-center">
            <Icon :name="'clarity:sign-in-solid'" size="20px" class="mr-4 text-gray-600" />
            <p class="text-xs sm:text-sm text-gray-600 font-semibold">Sign in</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const displayName = (name: string) => {
  const init: string[] = [];
  const initialName = name.split(' ');

  initialName.map((item) => init.push(item.split('')[0]));

  return init.join('').toUpperCase();
};
interface UserMenuCardPropsType {
  hasAuthenticated: boolean;
  isShow: boolean;
  fullName: string;
  email: string;
  onLogout: () => void;
}

withDefaults(defineProps<UserMenuCardPropsType>(), {
  isShow: false,
  type: 'button',
  onLogout: () => {},
});
</script>
