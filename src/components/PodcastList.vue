<template>
  <div>
    <podcast v-for="(podcast, index) in podcasts"
    :image="podcast.image"
    :title="podcast.title"
    :description="podcast.description"
    :links="podcast.links"
    :key="index"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Podcast from "./Podcast.vue";
import podcasts from "../data";

export default Vue.extend({
  data() {
    return {
      podcasts
    };
  },
  components: {
    Podcast
  }
});
</script>
