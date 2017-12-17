import Vue from "vue";
import Hello from './components/Hello.vue';

const v = new Vue({
    el: "#root",
    template: `
        <hello />
    `,
    components: {
        Hello
    }
});
