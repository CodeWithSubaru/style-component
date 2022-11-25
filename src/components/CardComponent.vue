<script>
import ButtonComponent from './ButtonComponent.vue';

export default {
  props: ['data'],
  components: { ButtonComponent },
};
</script>

<template>
  <article
    class="card"
    v-for="info of data"
    :key="info.id"
    :class="'card--' + info.id"
  >
    <img :src="info.img" :alt="info.title" />
    <h1>{{ info.title }}</h1>
    <p>{{ info.desc }}</p>
    <button-component :type="info.btnType" :btn="info.id"
      >Learn More
    </button-component>
  </article>
</template>
