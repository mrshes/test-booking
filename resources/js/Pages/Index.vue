<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <Header></Header>
    <div class="bg-white">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">{{ __('Last added products') }}</h2>
            <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <CardOffice v-for="product in products" :key="product.id" :item="product"></CardOffice>
                <!--                <div v-for="product in products" :key="product.id" class="group relative">-->
<!--                    <div-->
<!--                        class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">-->
<!--                        <img src="@/Images/office.jpg" :alt="product.imageAlt"-->
<!--                             class="w-full h-full object-center object-cover lg:w-full lg:h-full"/>-->
<!--                    </div>-->
<!--                    <div class="mt-4 flex justify-between">-->
<!--                        <div>-->
<!--                            <h3 class="text-sm text-gray-700">-->
<!--                                <a :href="product.href">-->
<!--                                    <span aria-hidden="true" class="absolute inset-0"/>-->
<!--                                    {{ product.name }}-->
<!--                                </a>-->
<!--                            </h3>-->
<!--                            <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>-->
<!--                        </div>-->
<!--                        <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
import {Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {BellIcon, MenuIcon, XIcon} from '@heroicons/vue/outline'
import {Link} from '@inertiajs/inertia-vue3'
import Header from "@/Layouts/Header.vue";
import CardOffice from "@/Components/CardOffice.vue";
export default {
    name: "index",
    components: {
        CardOffice,
        Header,
        Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, BellIcon, MenuIcon, XIcon, Link},
    data() {
        return {
        }
    },
    props: {
        auth: Object,
        locale: String,
        entries: Object,
    },
    computed: {
        products() {
            return this.entries
        }
    },
}
</script>
