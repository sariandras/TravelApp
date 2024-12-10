<template>
    <div id="nav">
        <RouterLink class="logo" to="/">Travel App</RouterLink>
        <router-link v-for="d in destinations" :key="d.id"
            :to="{ name: 'destination', params: { id: d.id, slug: d.slug } }">
            {{ d.name }}
        </router-link>

    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';
import sourceData from '@/data.json'

const destinations = ref(sourceData.destinations)

</script>
<style lang="css">
#nav .custom-active-link {
    font-weight: bold;
    color: red;
}
</style>