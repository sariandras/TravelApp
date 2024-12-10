<template>
  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations">
      <router-link v-for="d in destinations" :key="d.id"
        :to="{ name: 'destination', params: { id: d.id, slug: d.slug } }">
        <h2>{{ d.name }}</h2>
        <img :src="`/images/${d.image}`" :alt="`${d.name}`">
      </router-link>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import sourceData from '@/data.json'

const destinations = ref(sourceData.destinations)
</script>
