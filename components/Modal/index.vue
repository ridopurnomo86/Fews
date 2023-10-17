<template>
  <ClientOnly>
    <Teleport to="body">
      <div v-if="isOpen" class="relative">
        <div
          ref="modalRef"
          class="fixed z-[1000] bg-black bg-opacity-50 top-0 left-0 w-full h-[100vh] flex items-center justify-center"
        >
          <dialog :open="isOpen" class="max-w-[500px] p-8 rounded bg-neutral-300 transition">
            <p class="mb-2 text-neutral-900 font-semibold text-md antialiased">
              This is the title property
            </p>
            <p class="mb-4 text-neutral-600 font-medium text-sm antialiased">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit consequuntur, aliquam
              iure ea aspernatur assumenda! Velit perspiciatis ratione laboriosam saepe. Dicta
              possimus enim maxime assumenda provident libero repellat corporis doloribus!
            </p>
          </dialog>
        </div>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
import useClickOutside from '~~/composables/useClickOutside';

const modalRef = ref(null);

useClickOutside(modalRef, () => {});

interface ModalPropsType {
  isOpen: boolean;
}

withDefaults(defineProps<ModalPropsType>(), {
  isOpen: false,
});
</script>
