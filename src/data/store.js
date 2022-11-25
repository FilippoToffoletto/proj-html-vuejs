import { reactive } from 'vue'

export const store=reactive({
    getImageUrl(name) {
        return new URL(`../images/${name}`, import.meta.url).href
    }
})