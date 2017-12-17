<template>
    <div class="hello">
        <h1>Get coding! - {{ name }}</h1>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      name: "Kia"
    };
  }
});
</script>

<style>
.hello {
  color: #222;
}
</style>
