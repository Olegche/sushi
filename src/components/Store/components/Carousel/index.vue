<template>
  <b-carousel :autoplay="true" :arrow="arrow" :interval="interval">
    >
    <b-carousel-item v-for="(item, i) in items" :key="i">
      <figure>
        <img :src="item.image" />
      </figure>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
export default {
  data() {
    return {
      arrow: true,
      interval: 1000,

      items: [
        {
          title: "Slide 1",
          image: require("@/assets/images/sushies/gunkan1.png"),
        },
        {
          title: "Slide 2",
          image: require("@/assets/images/sushies/gunkan2.png"),
        },
        {
          title: "Slide 3",
          image: require("@/assets/images/sushies/gunkan3.png"),
        },
        {
          title: "Slide 4",
          image: require("@/assets/images/sushies/gunkan4.png"),
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
</style>