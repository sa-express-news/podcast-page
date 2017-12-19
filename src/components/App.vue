<template>
  <div class="app">
    <app-header />
    <podcast-list/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeader from "./Header.vue";
import PodcastList from "./PodcastList.vue";

export default Vue.extend({
  components: {
    AppHeader,
    PodcastList
  }
});
</script>

<style>
.app {
  margin: 0 auto;
  width: 85%;
}

.app p {
  line-height: 24px;
}

@media (min-width: 550px) {
  .app {
    width: 88%;
  }
}

@media (min-width: 1200px) {
  .app {
    width: 70%;
  }
}

@media (min-width: 1400px) {
  .app {
    width: 60%;
  }
}

@media (min-width: 1600px) {
  .app {
    width: 55%;
  }
}
</style>

