<template>
  <div>
    <h1>Про нас</h1>
    <b-carousel
      :autoplay="true"
      :arrow="arrow"
      :interval="interval"
      :pause-hover="false"
    >
      <b-carousel-item class="is-medium" v-for="(item, i) in items" :key="i">
        <figure>
          <img :src="item.image" />
        </figure>
      </b-carousel-item>
    </b-carousel>
    <h1>
      "<b>Hello world!</b> <br />
      Ми команда <b> iSushie</b> , Готуємо технологічні суші, сервіруємо блюда з
      padding-ами мінімум 20рх, <br />
      саме тому вони виглядають дуже привабливо, <br />
      а наші страви завжди свіжі завдяки технології <span style="color: royallblue">Shift+f5</span> . <br />
      Також зауважимо, ми дотримуємося соціального margin в 10 000px, <br />
      та тримаємо нашу console в чистоті, все це for each наших клієнтів. <br />
      В нас можите замовити всі блюда, навіть яких немає на сайті. <br />
      <b> Наш девіз - Жодних 404 для клієнтів! </b> <br />
      Тож обирайте Нас і Ваш статус буде завжди
      <span style="color: rgb(35, 209, 96)"> 200</span> !"
    </h1>

    <div>
        
    </div>

    
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      arrow: true,
      interval: 3000,

      items: [
        {
          title: "Slide 1",
          image: require("@/assets/images/about1.jpeg"),
        },
        {
          title: "Slide 2",
          image: require("@/assets/images/about2.jpeg"),
        },
        {
          title: "Slide 3",
          image: require("@/assets/images/about3.jpeg"),
        },
        {
          title: "Slide 4",
          image: require("@/assets/images/about4.jpeg"),
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
h1 {
  text-align: center;
  font-size: x-large;
  margin: 30px auto;
}
</style>