<template>
    <div class="destination">
        <h1>{{ destination.name }}</h1>
        <img :src="`/images/${destination.image}`" :alt="destination.name">
        <p>{{ destination.description }}</p>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import sourceData from '@/data.json'

const route = useRoute();
const destinationId = computed(() => parseInt(route.params.id))
const destination = computed(() => {
    return sourceData.destinations.find(destination => destination.id == destinationId.value)
})



</script>

<style lang="scss" scoped></style>