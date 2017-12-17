<template>
  <div class="podcast">
      <img :src="image" :alt="title"/>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div class="links">
        <p>Listen On:</p>
        <p :v-for="link in links"><a :href="link.url">{{ link.name }}</a></p>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    links: {
      type: Array,
      required: true
    }
  }
});
</script>
