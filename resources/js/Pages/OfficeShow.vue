<template>
    <Header/>
    <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-2 py-10 gap-10">
            <img src="@/Images/office.jpg"
                 class="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
            <div class=" flex flex-col gap-4">
                <h3 class="text-3xl font-bold">{{ entry.name.title }}</h3>
                <div v-for="attribute in attributes">
                    <label class="text-gray-400 ml-1 mb-1">{{ attribute.attribute.title }}:</label>
                    <div class="block bg-gray-100 rounded-md p-2 w-1/2">{{ attribute.value }}</div>
                </div>

                <div class="pt-10 flex flex-col w-1/2" v-if="isAuth">
                    <label class="font-bold ml-1 mb-1">{{ __('Дата бронирования') }}:</label>
                    <input name="first-name" id="first-name" type="date" placeholder="ДД.ММ.ГГГГ" v-model="form.date"
                           class="font-bold mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-100  p-3"/>

                    <button type="button" @click="submit"
                            class="font-bold mt-2 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        {{ __('Бронировать') }}
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/Layouts/Header.vue";

export default {
    name: "OfficeShow",
    components: {Header},
    data() {
        return {
            form: {
                date:''
            }
        }
    },
    props: {
        entry: {
            type: Object,
            default: {}
        },
    },
    computed: {
        attributes() {
            return this.entry?.attributes
        }
    },

    methods: {
        submit() {
            let form = this.form
            form.office_id = this.entry.id
            this.$inertia.post(route('order.store'), form,{
                onError:(err) => {
                    console.log(err)
                }
            });
        }
    },
}
</script>

<style scoped>

</style>
