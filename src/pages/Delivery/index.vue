<template>
  <section>
    <b-carousel
      :arrow="arrow"
      :repeat="arrowBoth"
      :arrow-hover="arrowHover"
      :icon-pack="iconPack"
      :icon-prev="iconPrev"
      :icon-next="iconNext"
      :icon-size="iconSize"
      :interval="interval"
    >
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section :class="`hero is-medium is-${carousel.color}`">
          <div class="hero-body has-text-centered">
            <h1 class="title">{{ carousel.title }}</h1>
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>

  </section>
</template>

<script>
export default {
  name: "Delivery",

  
  data() {
    return {
      arrow: true,
      arrowBoth: true,
      arrowHover: false,
      autoPlay: true,
      interval: 900,
      iconPack: "mdi",
      iconPrev: "arrow-left",
      iconNext: "arrow-right",
      iconSize: "",
      carousels: [
        { title: "Дуже", color: "success" },
        { title: "дуже", color: "success" },
        { title: "Швидка", color: "success" },
        { title: "Доставка", color: "success" },
      ],

      
      
     

    };
  },

 
};
</script>


<style lang="css" scoped>


</style>