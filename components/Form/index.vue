<template>
  <div class="w-full">
    <form>
      <div v-for="form in forms" :key="form.id" class="overflow-hidden" sub>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-medium mb-2" for="{{ form.name }}">
            {{ form.label }}
          </label>
          <div class="relative">
            <input
              :id="form.name"
              :for="form.name"
              :name="form.name"
              :type="form.type"
              :placeholder="form.placeholder"
              :disabled="form.isDisable"
              class="appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-600 focus:shadow-outline transition"
            />
            <span
              v-if="form.rightIconName"
              class="absolute inset-y-0 bottom-0 right-0 mr-2 flex items-center pl-2"
              @click="form.onClickRightIcon"
            >
              <div class="focus:outline-none focus:shadow-outline">
                <Icon :name="form.rightIconName" size="20px" class="cursor-pointer text-gray-600" />
              </div>
            </span>
          </div>
          <p class="text-gray-600 text-xs mt-2">
            {{ form.description }}
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
interface FormType {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type: string;
  description?: string;
  isDisable?: boolean;
  rightIconName?: string;
  onClickRightIcon?: () => void;
}

defineProps<{ forms: FormType[] }>();
</script>
