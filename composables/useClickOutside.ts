/* eslint-disable consistent-return */
import { onBeforeUnmount, onMounted } from 'vue';

const useClickOutside = (component: any, callback: () => void) => {
  if (!component) return;

  const listener = (event: Event) => {
    if (event.target !== component.value && event.composedPath().includes(component.value)) {
      return;
    }

    if (typeof callback === 'function') {
      callback();
    }
  };

  onMounted(() => {
    window.addEventListener('click', listener);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('click', listener);
  });

  return { listener };
};

export default useClickOutside;
