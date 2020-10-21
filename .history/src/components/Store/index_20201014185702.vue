<template>
    <div>
        <header-section 
          :products-in-cart="productsInCart"
          @title-filter="setTextFilterData"/>
        <div class="container">
            <product-list :products="filteredProducts"/>
        </div>
    </div>
</template>

<script>
import ProductList from "./components/ProductList";
import HeaderSection from "./components/HeaderSection";
    export default {
        name:"Store",

        components: {
            ProductList,
            HeaderSection
        },

        data() {
            return {
                filter:{},
                productsInCart:0,
                myProducts:[
        {
          id:1,
          title:'Tel',
          price:1200,
          img:'https://i2.rozetka.ua/goods/19989681/samsung_galaxy_m51_6_128gb_black_images_19989681366.jpg',
          category:'phone',
          year:2010
        },
        {
          id:2,
          title:'Tel2',
          price:12040,
          img:'https://i2.rozetka.ua/goods/17831432/apple_iphone_se_64gb_white_images_17831432779.jpg',
          category:'phone',
          year:2010
        },
        {
          id:1,
          title:'Tel',
          price:1200,
          img:'https://i2.rozetka.ua/goods/19989681/samsung_galaxy_m51_6_128gb_black_images_19989681366.jpg',
          category:'phone',
          year:2010
        },
        {
          id:2,
          title:'Tel2',
          price:12040,
          img:'https://i2.rozetka.ua/goods/17831432/apple_iphone_se_64gb_white_images_17831432779.jpg',
          category:'phone',
          year:2010
        },
        {
          id:1,
          title:'Tel',
          price:1200,
          img:'https://i2.rozetka.ua/goods/19989681/samsung_galaxy_m51_6_128gb_black_images_19989681366.jpg',
          category:'phone',
          year:2010
        },
        {
          id:2,
          title:'Tel2',
          price:12040,
          img:'https://i2.rozetka.ua/goods/17831432/apple_iphone_se_64gb_white_images_17831432779.jpg',
          category:'phone',
          year:2010
        },
        {
          id:1,
          title:'Tel',
          price:1200,
          img:'https://i2.rozetka.ua/goods/19989681/samsung_galaxy_m51_6_128gb_black_images_19989681366.jpg',
          category:'phone',
          year:2010
        },
        {
          id:2,
          title:'Tel2',
          price:12040,
          img:'https://i2.rozetka.ua/goods/17831432/apple_iphone_se_64gb_white_images_17831432779.jpg',
          category:'phone',
          year:2010
        },
        {
          id:1,
          title:'Tel',
          price:1200,
          img:'https://i2.rozetka.ua/goods/19989681/samsung_galaxy_m51_6_128gb_black_images_19989681366.jpg',
          category:'phone',
          year:2010
        },
        {
          id:2,
          title:'Tel2',
          price:12040,
          img:'https://i2.rozetka.ua/goods/17831432/apple_iphone_se_64gb_white_images_17831432779.jpg',
          category:'phone',
          year:2010
        },
        {
          id:1,
          title:'Tel',
          price:1200,
          img:'https://i2.rozetka.ua/goods/19989681/samsung_galaxy_m51_6_128gb_black_images_19989681366.jpg',
          category:'phone',
          year:2010
        },
        {
          id:2,
          title:'Tel2',
          price:12040,
          img:'https://i2.rozetka.ua/goods/17831432/apple_iphone_se_64gb_white_images_17831432779.jpg',
          category:'phone',
          year:2010
        },
        {
          id:1,
          title:'Tel',
          price:1200,
          img:'https://i2.rozetka.ua/goods/19989681/samsung_galaxy_m51_6_128gb_black_images_19989681366.jpg',
          category:'phone',
          year:2010
        },
        {
          id:2,
          title:'Tel2',
          price:12040,
          img:'https://i2.rozetka.ua/goods/17831432/apple_iphone_se_64gb_white_images_17831432779.jpg',
          category:'phone',
          year:2010
        },
      ],
            }
        },

        computed: {
            filteredProducts() {
                return this.myProducts.filter(item=>
                item.title.toLowerCase().includes(this.filter.textFilter)) 
            }
        },

        methods: {
            setTextFilterData(seachText) {
                this.filter={
                    ...this.filter,
                    textFilter: seachText.toLowerCase()
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>