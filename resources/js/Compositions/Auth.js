import {defineProps} from 'vue'

export function isAuth() {
    const props = defineProps({
        auth: Object,
        locale: String
    })
}

