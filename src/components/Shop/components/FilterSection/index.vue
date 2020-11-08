<template>
    <div class="container">
         <div class="is-two-fifths">

        
        <div>
             Фільтрувати за цінами:
             
            <div class="minMaxPriceSlider">

                <b-field> мінімальна ціна
            <b-slider  v-model="minPrice" :min="0" :max="800" :step="100" type="is-success" ticks>
            </b-slider>
        </b-field>
      

        <b-field> максимальна ціна
            <b-slider v-model="maxPrice" :min="0" :max="2000" :step="100" type="is-danger" ticks>
            </b-slider>
        </b-field>
  
            </div>
        </div>
        <div>
            <hr>
            Контролювати калорійність:

            <div>
                <b-field label=" мін. калорій на одну страву" > 
                    
            <b-slider v-model="minCalories" type="is-success" :tooltip-type="sliderType"  :min="0" :max="2000" :step="50" ></b-slider>
        </b-field>
        </div>
            <div>
                <b-field label=" макс. калорій на одну страву" > 
                    
            <b-slider v-model="maxCalories" type="is-warning" :tooltip-type="sliderType"  :min="0" :max="2000" :step="50" ></b-slider>
        </b-field>
                
            </div>
        </div>
        <div>
            <hr>
            
            <div class="categoryFilter">

                 <b-field type="is-success">
            <b-select v-model="category"  placeholder="Оберіть улюблені страви">
                <option v-for="cat in categoriesList" :key="cat.id"
                    :value="cat.id">{{cat.title}}</option>
            </b-select>
        </b-field>
                

            </div>
            <div class="field">
            <b-checkbox  v-model="isVegan"  size="is-medium" type="is-success">I am vegan!</b-checkbox>
           
            <div>
                <br>
             <b-button  @click="cleanFilter" type="is-danger" outlined>очистити фільтри </b-button>

            </div>
        </div>
           
        </div>
    
         </div>
    </div>
</template>

<script>
    export default {
        name:'FilterSection',
        props: {
           
            categoriesList: {
                type: Array,
                default: ()=>[]
            },
        },

        data() {
            return {
                minPrice: null,
                maxPrice:null,
                maxCalories:null,
                minCalories:null,
                category: null,
                isVegan: null

            }
        },

        computed: {
            sliderType(){
            if ((this.maxCalories <=2000 && this.maxCalories > 1000)|| (this.minCalories <=2000 && this.minCalories > 1000)){
                return "is-danger";
            } else if ((this.maxCalories >= 500) || (this.minCalories >= 500)   ){
                return "is-warning";
            }
            return "is-success";
            }
        },

        watch: {
            minPrice(newValue) {
                this.$emit('filter-changed',{
                    minPrice: newValue || null
                })
            },
            maxPrice(newValue) {
                this.$emit('filter-changed',{
                    maxPrice: newValue || null
                })
            },
            maxCalories(newValue) {
                this.$emit('filter-changed',{
                    maxCalories: newValue || null
                })
            },
            minCalories(newValue) {
                this.$emit('filter-changed',{
                    minCalories: newValue || null
                })
            },
            category(newValue) {
                this.$emit('filter-changed',{
                    category: newValue || null
                })
            },
            isVegan(newValue) {
               this.$emit('filter-changed',{
                    isVegan: newValue || null
                })
            },
            
        },

        methods: {
            cleanFilter() {
                this.minPrice = null,
                this.maxPrice = null,
                this.maxCalories = null,
                this.minCalories = null,
                this.category = null,
                this.isVegan = null
            }
        },
    }
</script>

<style lang="css" scoped>
.container{
    width: 300px;
    height: 590px;
    max-width: 300px;
    background-color:rgba(241, 151, 87, 0.515);
    border-radius: 20px;
    padding: 19px;
    float: left;
    margin-left: 7px;
    margin-right: 10px;
    position: sticky;
    top: 3em;
    z-index: 99999;
    
 


    
}
.container div{
    display: block;
    margin-bottom: 20px;
}

.minMaxPriceSlider{
    width: 250px;
    margin: 10px;
}

.categoryFilter{
    text-align: left;
}
.categoryFilter select {
    width: 100px;
}

</style>