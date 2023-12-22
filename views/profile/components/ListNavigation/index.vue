<template>
  <div class="hidden items-start md:block">
    <Navigation :path="'/profile/my-details'" :title="'My Details'" />
    <Navigation :path="'/profile/password'" :title="'Password'" />
    <Navigation :path="'/profile/orders'" :title="'Orders'" />
    <Navigation :path="'/profile/address'" :title="'Address'" />
    <button type="button" class="md:mt-8 block w-full" @click="handleLogout">
      <p
        class="px-4 py-2 text-sm text-left font-semibold text-red-500 truncate rounded transition-all hover:bg-red-100 cursor-pointer"
      >
        Logout
      </p>
    </button>
  </div>
  <div class="block md:hidden">
    <BaseSelectInput
      :id="'navigation'"
      v-model="formData.navigation"
      :options="[
        { id: 'profile-my-details', name: 'My Details', value: '/profile/my-details' },
        { id: 'profile-password', name: 'Password', value: '/profile/password' },
        { id: 'profile-email', name: 'Email', value: '/profile/email' },
        { id: 'profile-order', name: 'Orders', value: '/profile/orders' },
        { id: 'profile-address', name: 'Address', value: '/profile/address' },
      ]"
      :label="''"
      :name="'navigation'"
      :placeholder="''"
      :error-message="``"
      :is-disable="false"
      :is-error="false"
      :on-change="handleNavigation"
    />
  </div>
</template>

<script setup lang="ts">
import Navigation from './Navigation/index.vue';

const route = useRoute();

const { signOut } = useAuth();

const formData = ref({
  navigation: route.path,
});

const handleNavigation = async (e: Event) => {
  await navigateTo((e?.target as HTMLInputElement).value);
};

const handleLogout = async () => {
  await signOut({
    callbackUrl: '/profile/my-details',
    redirect: true,
  });
};
</script>
