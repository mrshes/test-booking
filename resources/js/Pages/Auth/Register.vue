<script setup>
import BreezeButton from '@/Components/Button.vue';
import BreezeGuestLayout from '@/Layouts/Guest.vue';
import BreezeInput from '@/Components/Input.vue';
import BreezeLabel from '@/Components/Label.vue';
import BreezeValidationErrors from '@/Components/ValidationErrors.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import {computed, onMounted} from 'vue'
import Cookie from 'js-cookie'

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
    date_visit:'',
    work:'',
});

const submit = () => {
    form.date_visit = Cookie.get('date_visit')

    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};

onMounted((context) => {
    let currDate = new Date();
    let dateFormat = currDate.toJSON().slice(0,10).replace(/-/g,'-') +' '+ currDate.toLocaleTimeString();
    // Фиксируем первый заход на страницу
    if (!Cookie.get('date_visit')) Cookie.set('date_visit', dateFormat)
})
</script>

<template>
    <BreezeGuestLayout>
        <Head title="Register" />

        <BreezeValidationErrors class="mb-4" />

        <form @submit.prevent="submit">
            <div>
                <BreezeLabel for="name" :value="__('Name')" />
                <BreezeInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required autofocus autocomplete="name" />
            </div>

            <div class="mt-4">
                <BreezeLabel for="email" value="Email" />
                <BreezeInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autocomplete="username" />
            </div>
            <div class="mt-4">
                <BreezeLabel for="work" :value="__('Место работы')" />
                <BreezeInput id="work" type="text" class="mt-1 block w-full" v-model="form.work" required autocomplete="work" />
            </div>

            <div class="mt-4">
                <BreezeLabel for="password" :value="__('Password')" />
                <BreezeInput id="password" type="password" class="mt-1 block w-full" v-model="form.password" required autocomplete="new-password" />
            </div>

            <div class="mt-4">
                <BreezeLabel for="password_confirmation" :value="__('Confirm Password')" />
                <BreezeInput id="password_confirmation" type="password" class="mt-1 block w-full" v-model="form.password_confirmation" required autocomplete="new-password" />
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link :href="route('login')" class="underline text-sm text-gray-600 hover:text-gray-900">
                    {{ __('Already registered') }}?
                </Link>

                <BreezeButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    {{ __('Register') }}
                </BreezeButton>
            </div>
        </form>
    </BreezeGuestLayout>
</template>
