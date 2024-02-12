<template>
    <div class="grid grid-flow-cols grid-cols-1 sm:grid-cols-3 gap-x-2 gap-y-8">
        <div class="">
            <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
            <div class="mt-2">
                <div
                    class="flex rounded-md shadow-sm ring-1 ring-gray-300 ">
                    <!-- <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">yourmail@nstore.in</span> -->
                    <input type="text" name="username" id="username" autocomplete="username"
                        class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="yourmail@nstore.in">
                </div>
            </div>
        </div>
        <div class="">
            <label for="status" class="block text-sm font-medium leading-6 text-gray-900">Status</label>
            <div class="mt-2">
                <div
                    class="flex rounded-md shadow-sm ring-1 ring-gray-300  ">
                    <select id="status" name="status"
                        class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="">
            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Reset</button>
                <button type="submit"
                    class="rounded-md bg-orange-primary px-3 py-1 text-sm font-semibold text-white ring-2 ring-black hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Search</button>
            </div>

        </div>
    </div>
</template>


<script setup lang="ts">
</script>