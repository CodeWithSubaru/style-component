<script>
import profilePic from '../assets/images/image-victor.jpg';
import bgPatternCard from '../assets/images/bg-pattern-card.svg';
import bgPatternTop from '../assets/images/bg-pattern-top.svg';
import bgPatternBottom from '../assets/images/bg-pattern-bottom.svg';

export default {
  props: ['social'],
  setup() {
    return { profilePic, bgPatternCard, bgPatternTop, bgPatternBottom };
  },
};
</script>

<template>
  <img :src="bgPatternTop" alt="background pattern" class="bg-pattern-top" />
  <img
    :src="bgPatternBottom"
    alt="background pattern"
    class="bg-pattern-bottom"
  />
  <section class="profile-card">
    <img
      :src="bgPatternCard"
      alt="profile background"
      class="profile-card__bg"
    />
    <img :src="profilePic" alt="profile picture" class="profile-card__img" />
    <h2 class="profile-card__name">
      Victor Crest <span class="profile-card__age"> 26</span>
    </h2>
    <p class="profile-card__city">London</p>
    <footer class="profile-card__footer">
      <div class="profile-card__social" v-for="info of social" :key="info.id">
        <h2 class="profile-card__numbers">{{ info.number }}</h2>
        <small class="profile-card__description"> {{ info.desc }}</small>
      </div>
    </footer>
  </section>
</template>
