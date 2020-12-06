<template>


  <b-carousel  :autoplay="true" :arrow="arrow" :interval="interval" :pause-hover ="false">
    
    <b-carousel-item class="is-medium" v-for="(item, i) in items" :key="i">
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
      interval: 3000,

      items: [
        {
          title: "Slide 1",
          image: require("@/assets/images/carusel1.jpeg"),
        },
        {
          title: "Slide 2",
          image: require("@/assets/images/carusel2.jpeg"),
        },
        {
          title: "Slide 3",
          image: require("@/assets/images/carusel3.jpeg"),
        },
        {
          title: "Slide 4",
          image: require("@/assets/images/carusel4.jpeg"),
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
.carousel {
    max-width: 1160;
    height: 554;
    text-align: center;
}
.h1 {
  margin: 100px auto;
}
</style>