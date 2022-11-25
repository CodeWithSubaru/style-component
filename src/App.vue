<script>
import { ref } from 'vue';
import suvs from './assets/icon-suvs.svg';
import luxury from './assets/icon-luxury.svg';
import sedans from './assets/icon-sedans.svg';
import CardComponent from './components/CardComponent.vue';

export default {
  components: { CardComponent },
  setup() {
    const data = ref([
      {
        id: 1,
        img: sedans,
        title: 'Sedans',
        desc: 'Choose a sedan for its affordability and excellent fuel economy. Ideal forcruising in the city or on your next road trip.',
        btnType: 'primary',
      },
      {
        id: 2,
        img: suvs,
        title: 'SUVs',
        desc: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
        btnType: 'primary',
      },
      {
        id: 3,
        img: luxury,
        title: 'Luxury',
        desc: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
        btnType: 'primary',
      },
    ]);

    return { data };
  },
};
</script>

<template>
  <CardComponent :data="data" />
</template>
