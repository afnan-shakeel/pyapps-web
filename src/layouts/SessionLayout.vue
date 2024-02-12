<template>
    <Disclosure as="nav" class="bg-white shadow-md" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <DisclosureButton
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span class="absolute -inset-0.5" />
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                        <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                    </DisclosureButton>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <img class="h-8 w-15 bg-white rounded-md px-5" src="/nStore_logo.png" alt="Your Company" />
                    </div>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <!-- <a v-for="item in navigation" :key="item.name" :href="item.to"
                                :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
                                :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a> -->
                            <Menu v-for="item in navigation" as="div" class="relative inline-block text-left">
                                <div>
                                    <MenuButton
                                        class="inline-flex w-full justify-center rounded-md bg-white/90 ring-2 ring-orange-primary px-4 py-2 text-sm font-medium text-black hover:bg-orange-primary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                                        {{ item.name }}
                                        <ChevronDownIcon v-if="item.subMenu"
                                            class="-mr-1 ml-2 pt-0.5 h-5 w-5 text-gray-400 "
                                            aria-hidden="true" />
                                    </MenuButton>
                                </div>
                                <transition :show="true" enter-active-class="transition duration-100 ease-out"
                                    enter-from-class="transform scale-95 opacity-0"
                                    enter-to-class="transform scale-100 opacity-100"
                                    leave-active-class="transition duration-75 ease-in"
                                    leave-from-class="transform scale-100 opacity-100"
                                    leave-to-class="transform scale-95 opacity-0">
                                    <MenuItems
                                        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                        <div class="px-1 py-1">
                                            <MenuItem v-for="childItem in item.subMenu" v-slot="{ active }">
                                            <button v-if="!childItem.subMenu" :class="[
                                                active ? 'hover:bg-orange-primary/90 text-white' : 'text-gray-900',
                                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                            ]">
                                                <EditIcon :active="active" class="mr-2 h-5 w-5 text-violet-400"
                                                    aria-hidden="true" />
                                                {{ childItem.name }}
                                            </button>
                                            <div v-else>
                                                <Menu as="div" class="relative inline-block text-left w-full">
                                                    <div>
                                                        <MenuButton
                                                            class="hover:bg-orange-primary/90 text-gray-900 hover:text-white group flex w-full items-center rounded-md px-2 pl-8 py-2 text-sm">
                                                            {{ childItem.name }}
                                                            <ChevronDownIcon
                                                                class="-mr-1 ml-auto h-5 w-5 text-violet-200 hover:text-violet-100"
                                                                aria-hidden="true" />
                                                        </MenuButton>
                                                    </div>
                                                    <transition :show="true"
                                                        enter-active-class="transition duration-100 ease-out"
                                                        enter-from-class="transform scale-95 opacity-0"
                                                        enter-to-class="transform scale-100 opacity-100"
                                                        leave-active-class="transition duration-75 ease-in"
                                                        leave-from-class="transform scale-100 opacity-100"
                                                        leave-to-class="transform scale-95 opacity-0">
                                                        <MenuItems
                                                            class="absolute z-20 right-0 mt-2 origin-top-right divide-y w-full divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                                            <div v-for="kidItem in childItem.subMenu" class="px-1 py-1">
                                                                <MenuItem v-slot="{ active }">
                                                                <button :class="[
                                                                    active ? 'bg-orange-primary text-white' : 'text-gray-900',
                                                                    'group rounded-md px-2 py-2 text-sm w-full text-start',
                                                                ]">
                                                                    {{ kidItem.name }}
                                                                </button>
                                                                </MenuItem>
                                                            </div>
                                                        </MenuItems>
                                                    </transition>
                                                </Menu>
                                            </div>

                                            </MenuItem>
                                        </div>
                                        <div class="px-1 py-1">
                                            <MenuItem v-slot="{ active }">
                                            <button :class="[
                                                active ? 'bg-orange-primary text-white' : 'text-gray-900',
                                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                            ]">
                                                <ArchiveIcon :active="active" class="mr-2 h-5 w-5 text-violet-400"
                                                    aria-hidden="true" />
                                                Archive
                                            </button>
                                            </MenuItem>
                                        </div>
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button type="button"
                        class="relative rounded-full bg-white p-1 text-black hover:text-orange-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ">
                        <span class="absolute -inset-1.5" />
                        <span class="sr-only">View notifications</span>
                        <BellIcon class="h-6 w-6" aria-hidden="true" />
                    </button>

                    <!-- Profile dropdown -->
                    <Menu as="div" class="relative ml-3">
                        <div>
                            <MenuButton
                                class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span class="absolute -inset-1.5" />
                                <span class="sr-only">Open user menu</span>
                                <img class="h-8 w-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="" />
                            </MenuButton>
                        </div>
                        <transition enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95">
                            <MenuItems
                                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <MenuItem v-slot="{ active }">
                                <a href="#"
                                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your
                                    Profile</a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <a href="#"
                                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <a href="#"
                                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign
                                    out</a>
                                </MenuItem>
                            </MenuItems>
                        </transition>
                    </Menu>
                </div>
            </div>
        </div>

        <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 px-2 pb-3 pt-2">
                <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.to"
                    :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
                    :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
    <router-view />
</template>
    
<script setup lang="ts">
import { ref } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'


const navigation = [
    {
        name: 'User Management', to: '/', current: true, subMenu: [
            { name: 'User List', to: '/' },
            { name: 'User Profile', to: '/' },
        ]
    },
    {
        name: 'Operations', to: '/', current: true, subMenu: [
            { name: 'Image Resize', to: '/' },
            { name: 'Menu Digitization', to: '/' },
            { name: 'Speech To Text', to: '/' },
            {
                name: 'Store', to: '/', subMenu: [
                    { name: 'Update Store', to: '/' },
                    { name: 'Activate Store', to: '/' },
                ]
            },
            {
                name: 'Product', to: '/', subMenu: [
                    { name: 'Update Product', to: '/' },
                    { name: 'Activate Product', to: '/' },
                ]
            },
        ]
    },
    { name: 'Backend', to: '/', current: false, },
    { name: 'Kyc', to: '/', current: false, },
    {
        name: 'Reports', to: '/', current: false, subMenu: [
            { name: 'ONDC', to: '/' },
            {
                name: 'IRCTC', to: '/', subMenu: [
                    { name: 'Overview', to: '/' },
                    { name: 'Order', to: '/' },
                    { name: 'Stores', to: '/' },
                    { name: 'Product Timing', to: '/' },
                ],
                isOpen: true
            },
            { name: 'nStore', to: '/' },

        ], isOpen: true
    },
]

const menuList = ref([
    { name: 'Operations', to: '', isOpen: false },
    { name: 'Frontend', to: '', isOpen: false },
    { name: 'Backend', to: '', isOpen: false },
    { name: 'Kyc', to: '', isOpen: false },
    {
        name: 'Report', to: '', subMenu: [
            { name: 'ONDC', to: '' },
            {
                name: 'IRCTC', to: '', subMenu: [
                    { name: 'Overview', to: '' },
                    { name: 'Order', to: '' },
                    { name: 'Stores', to: '' },
                ], isOpen: false
            },
        ], isOpen: false
    },
])

</script>

<style></style>
```