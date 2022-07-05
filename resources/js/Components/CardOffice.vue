<template>
    <div class="group relative" @click="show(item.slug)">
        <div
            class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img src="@/Images/office.jpg"
                 class="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
        </div>
        <div class="mt-4 flex justify-between">
            <div>
                <h3 class="text-sm text-gray-700">
                    <a :href="item?.href">
                        <span aria-hidden="true" class="absolute inset-0"/>
                        {{ item.name }}
                    </a>
                </h3>
                <p class="mt-1 text-sm text-gray-400">{{ item.desc }}</p>
            </div>
            <div class="text-sm font-medium text-gray-900 font-bold">{{ item.price }}</div>
        </div>
    </div>
</template>

<script>
import {Link} from "@inertiajs/inertia-vue3";

export default {
    name: "CardOffice",
    components: {Link},
    props: {
        item: Object
    },
    methods: {
        show(slug) {
            this.$inertia.get(route('office.show', {office: slug, 'locale': this.locale}))
        }
    },
}
</script>

<style scoped>

</style>
