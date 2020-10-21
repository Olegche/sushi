<template>
  <div class="hello">

    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>

<ul>
  <li v-for="(el,index) in linksList" :key="index">
    <a :href="el.link" target="_blank" rel="noopener">
      {{el.title}}
    </a>
  </li>
</ul>

<select >
  <option value="1">a1</option>
  <option value="2">a2</option>
  <option value="3">a3</option>
  <option value="4">a4</option>
</select>


<select v-model="sel">
  <option v-for="item in optList" :key="item.val"   :value="item.val" >
    {{item.title}}
  </option>
  
</select>
<div>

</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data() {
    return {
      sel:3,
      optList:[
        {
          val:1,
          title:'a1'
        },
        {
          val:2,
          title:'a2'
        },
        {
          val:3,
          title:'a3'
        },
        {
          val:4,
          title:'a4'
        },
        
      ],
      linksList:[
        {
          link:"https://router.vuejs.org",
          title:'vue-router1'
        },
        {
          link:"https://router.vuejs.org",
          title:'vue-router2'
        },
        {
          link:"https://router.vuejs.org",
          title:'vue-router3'
        },
        {
          link:"https://router.vuejs.org",
          title:'vue-router4'
        }

      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
