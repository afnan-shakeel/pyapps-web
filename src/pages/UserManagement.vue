<template>
    <div class="m-4 shadow-md rounded-md">
        <div class="py-2 px-10 flex justify-between  border-b">
            <h1 class="text-xl font-bold text-gray-900">User Search</h1>
            <button @click="openModal"
                class="rounded-md bg-orange-primary px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black ">Add
                User</button>
        </div>
        <div class="py-2 pb-6 px-10">
            <UserSearch></UserSearch>
        </div>
    </div>
    <div class="mt-4 p-4 shadow-lg rounded-sm">
        <UserTable></UserTable>
    </div>
    <TransitionRoot appear :show="isForm" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                                User Form
                            </DialogTitle>
                            <UserForm></UserForm>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup lang="ts">
import UserSearch from '../components/user/user-search.vue';
import UserTable from '../components/user/user-table.vue';
import UserForm from '../components/user/user-form.vue';
import { ref } from 'vue';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const isForm = ref(false);
const setForm = (value: boolean) => {
    // Handle close form logic here
    isForm.value = value;
};

function closeModal() {
  isForm.value = false
}
function openModal() {
  isForm.value = true
}
</script>
```