<script>
import { ref } from 'vue';
import CardComponent from './components/CardComponent.vue';

export default {
  components: { CardComponent },

  setup() {
    const social = ref([
      { id: 1, number: '80K', desc: 'Followers' },
      { id: 2, number: '803K', desc: 'Likes' },
      { id: 3, number: '1.4K', desc: 'Photos' },
    ]);

    return { social };
  },
};
</script>

<template>
  <main>
    <card-component :social="social" />
  </main>
</template>
