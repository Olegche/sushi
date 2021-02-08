<template>
  <section>
    <br>
    
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
    
        
   
<div class="map">
    <hr>
   
      <strong>
Доставка здійснюється БЕЗКОШТОВНО в межах Ужгорода, для доставки в інші населені пункти діє тариф 10грн 1 км
деталі за телефоном <a href="tel:+380679587995">0679587995</a>
</strong>
  


    
     <img src="@/assets/images/delivery.gif" alt="delivery" width="300" />
    <br>
    <b-notification
            type="is-warning"
            has-icon
            aria-close-label="Close notification">
            Доставка по місту  займає до 30хв! Ми настільки впевнені в цьому, що в разі запізнення ... натисніть на червону кнопку, і ми вмить вирішимо цю проблему! 
  <div class="btnNote">
  <button class="button is-medium is-danger" @click="success">
                кур'єр спізнився!
            </button> 
        </div>
        </b-notification>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d168785.6517483892!2d22.13557308576228!3d48.62370397586225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473919b944b6e3d9%3A0xda6ae0130042a3c!2z0KPQttCz0L7RgNC-0LQsINCX0LDQutCw0YDQv9Cw0YLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1sru!2sua!4v1603630720421!5m2!1sru!2sua" width="500" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
</div>
  
      
  
     
       
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
        { title: "дуже", color: "warning" },
        { title: "Швидка", color: "primary" },
        { title: "Доставка", color: "success" },
      ],

      
      
     

    };
  },

  methods: {
      success() {
                this.$buefy.notification.open({
                    message: `Отакої! В нас таке не часто... Проте приносимо Вам вибачення. телефон гарячої лінії iSushi <a href="tel:+380679587995">0679587995</a>, внесіть заявку про спізнення за цим номером`,
                    type: 'is-danger',
                    duration: 9000,
                    
                })
            }
  },

 
};
</script>


<style lang="css" scoped>
.btnNote{
    text-align: center;

}

.map {
    text-align: center;
    display: block;
}

</style>