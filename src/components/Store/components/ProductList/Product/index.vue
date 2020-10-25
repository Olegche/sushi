<template>
  <div class="container">
    <img class="img" :src="img" />
    <div class="text">
      <b>
        {{ title }}
      </b>
    </div>
    <div class="text">{{ price }} грн.</div>
    <div class="text">{{ priceDol }} $</div>
    <div class="text">
      {{ `${calories} ккл` }}
    </div>
    <div class="text">
      {{ category }}
    </div>
    <button @click="$emit('add-to-cart')" class="btnAdd">в корзину</button>
  </div>
</template>

<script>
export default {
  name: "Product",

  props: {
    img: {
      type: String,
      default: require("@/assets/images/smile.jpg"),
    },
    title: {
      type: String,
      default: "",
    },
    price: {
      type: [String, Number],
      default: "not in stoke",
    },
    calories: {
      type: [String, Number],
      default: "have not information about calories"
    },
    category: {
      type: String,
      default: "new",
    },
    isVegan: {
    type: Boolean,
    default: null
    }
  },

  computed: {
    priceDol() {
      return (this.price / 28).toFixed(1);
    },
  },
};
</script>

<style lang="css" scoped>
.container {
  width: 220px;
  padding: 10px;
  height: 300px;
  background-color: rgb(255, 255, 255);
  margin: 10px;
  text-align: center;
}
.img {
  max-width: 200px;
  height: 200px;
}
.text {
  font-size: 14px;
  text-align: center;
}
.btnAdd {
  border-radius: 7px;
  background-color: limegreen;
  color: mintcream;
  font-size: 17px;
  border-width: 0.1px;
  cursor: pointer;
  animation: pulse 2s infinite;
}
.btnAdd:hover {
  animation: none;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
  }
  70% {
    -webkit-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 0 0 rgba(143, 247, 139, 0);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
    box-shadow: 0 0 0 0 rgba(143, 247, 139, 0.5);
  }
  70% {
    -moz-box-shadow: 0 0 0 10px rgba(143, 247, 139, 0.5);
    box-shadow: 0 0 0 10px rgba(143, 247, 139, 0.5);
  }
  100% {
    -moz-box-shadow: 0 0 0 rgba(143, 247, 139, 0.5);
    box-shadow: 0 0 0 0 rgba(143, 247, 139, 0.5);
  }
}
</style>