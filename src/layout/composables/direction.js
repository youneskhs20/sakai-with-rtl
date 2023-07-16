import { useDirection } from '@/store/direction.js';
import { storeToRefs } from 'pinia';

export function useDir() {
    const direction = useDirection();
    const { dir } = storeToRefs(direction);

    const setDirClasses = (ltrClass, rtlClass, others) => {
        return {
            [ltrClass]: dir.value === 'ltr',
            [rtlClass]: dir.value === 'rtl',
            ...others
        };
    };

    return {
        dir,
        setDirClasses
    };
}
