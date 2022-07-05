<template>
    <Header></Header>
    <div class="bg-white">
        <div class="flex justify-center py-16 px-4 sm:py-24 sm:px-6 max-w-7xl mx-auto">
            <div class="h-full w-1/4 flex flex-col ">
                <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 rounded-md">{{ __('Фильтр') }}</h2>
                <div class=" bg-gray-100 mt-6 flex-auto p-2 rounded-md">
                    <div class="mt-4">
                        <label for="first-name" class="block text-sm font-medium text-gray-700 font-bold">{{
                                __('Цена')
                            }}</label>
                        <div class="grid grid-cols-2 gap-2">
                            <input type="number" name="first-name" id="first-name" v-model="form.priceMin"
                                   placeholder="от"
                                   class="font-bold mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>

                            <input type="number" name="first-name" id="first-name" v-model="form.priceMax"
                                   placeholder="до"
                                   class="font-bold mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>

                        </div>
                        <div class="col-span-6 sm:col-span-3 mt-8">
                            <label for="first-name" class="block text-sm font-medium text-gray-700 font-bold">{{
                                    __('Минимальная площадь')
                                }}</label>
                            <input type="number" name="first-name" id="first-name" v-model="form.area"
                                   class="font-bold mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>
                        <div class="col-span-6 sm:col-span-3 mt-8">
                            <label for="first-name" class="block text-sm font-medium text-gray-700 font-bold">{{
                                    __('Минимальное количество мест')
                                }}</label>
                            <input type="number" name="first-name" id="first-name" v-model="form.people"
                                   class="font-bold mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>

                        <div class="col-span-6 sm:col-span-3 mt-8">
                            <label for="country" class="block text-sm font-medium text-gray-700 font-bold">{{
                                    __('Удобства')
                                }}</label>
                            <select id="country" name="country" v-model="form.comfort"
                                    class="font-bold mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option></option>
                                <option>wifi</option>
                                <option>tv</option>
                                <option>кофемашина</option>
                            </select>
                        </div>
                        <div class="flex justify-end mt-8">
                            <button @click="btnOnSubmit"
                                    class="self-end inline-flex justify-center py-2 px-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                {{ __('Поиск') }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="max-w-2xl sm:ml-10 lg:max-w-7xl flex-1">
                <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">{{ __('Все офисы') }}</h2>

                <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    <CardOffice v-for="product in products" :key="product.id" :item="product"></CardOffice>
                </div>


                <div class="flex justify-center mt-10">
                    <nav aria-label="Page navigation example">
                        <ul class="flex list-style-none gap-1">
                            <li class="page-item" :class="{active: 'active'}" v-for="(link, key) in this.entries.links"
                                :key="key">
                                <Link
                                    :class="[link.active ? 'page-link relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md' :'page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none']"
                                    :href="link.url" v-html="link.label">
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Header from "@/Layouts/Header.vue";
import CardOffice from "@/Components/CardOffice.vue";
import BreezeInput from '@/Components/Input.vue';
import BreezeLabel from '@/Components/Label.vue';
import {Link} from "@inertiajs/inertia-vue3";


export default {
    name: "Offices",
    components: {CardOffice, Header, BreezeInput, BreezeLabel, Link},
    data() {
        return {
            form: {
                priceMin: '',
                priceMax: '',
                area: '',
                people: '',
                comfort: ''
            },
            comfortSets: [
                'wifi',
                'tv',
                'кофемашина',
            ],
        }
    },
    props: {
        entries: Object
    },
    computed: {
        products() {
            return this.entries.data
        },
        page() {
            return this.entries.current_page
        }
    },
    methods: {
        getPaginationURL(page) {
            return this.route('office', {page, locale: this.locale})
        },
        toPaginate(page) {
            this.$inertia.get(this.getPaginationURL(page))
        },
        btnOnSubmit() {
            let form = this.form
            let locale = this.locale
            let page = this.page
            let data = {}
            for (let key in form){
                if (form[key] != "") data[key] = form[key];
            }
            this.$inertia.get(this.route('office', {locale}), data, {replace: true, preserveState: true})
        }
    },

}
</script>

<style scoped>

</style>
