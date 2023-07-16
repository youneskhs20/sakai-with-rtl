import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDirection = defineStore('direction', () => {
    let dir = ref('rtl');

    const toggleDir = () => {
        if (dir.value === 'ltr') {
            dir.value = 'rtl';
        } else {
            dir.value = 'ltr';
        }
    };

    return { dir, toggleDir };
});
