<template>
  <div class="app">
      <podcast-list/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PodcastList from "./PodcastList.vue";

export default Vue.extend({
  components: {
    PodcastList
  }
});
</script>
