<template>
  <div class="podcast">
    <div class="image-container">
      <img :src="image" :alt="title"/>
    </div>
    <div class="info-container">
      <div class="info">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
      <div class="links">
        <p>Listen on:</p>
        <p v-for="(link, index) in links"
         :key="index">
          <a :href="link.url">{{ link.name }}</a>
        </p>
      </div>
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

<style>
.podcast {
  margin: 1.5em 0;
}
.podcast img {
  width: 100%;
}

.podcast h3 {
  font-size: 20px;
}

.podcast .info p {
  margin-bottom: 0.5em;
}

.links p:first-of-type {
  font-weight: bold;
}

.links p {
  display: inline-block;
  margin-bottom: 0;
  margin-right: 0.5em;
  margin-top: 0;
}

.links a {
  text-decoration: underline;
}

@media (max-width: 599px) {
  .podcast .info-container {
    margin-top: 0.5em;
  }
}

@media (min-width: 600px) {
  .podcast {
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    margin: 1.5em 0;
    padding-bottom: 1.5em;
  }

  .image-container {
    flex: 0 0 40%;
  }

  .info-container {
    flex: 0 0 50%;
  }

  .info h3 {
    margin-top: 0;
  }
}

@media (min-width: 1000px) {
  .image-container {
    flex: 0 0 35%;
  }

  .info-container {
    flex: 0 0 60%;
  }
}

/* @media (min-width: 1600px) {
  .image-container {
    flex: 0 0 30%;
  }

  .info-container {
    flex: 0 0 65%;
  }
} */
</style>
