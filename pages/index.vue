<template>
  <div>
    {{$store.state.user.firstName}}
    <div v-for="(dev,index) in $store.state.user.devs" :key="index">
      <ul class="list-none">
        <li>{{dev.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState, mapMutations} from 'vuex'
export default {
  name: 'IndexPage',

   created() {
    console.log('created')
    //this.$store.dispatch('user/getDevs') // maneira antiga
    this.getDevs(); // nova maneira usando o map
  },

  mounted() {
    //Variavel vinda do plugin
    console.log(this.$name)
    console.log("Mounted")
  },
  data () {
    return{
   
    }
  },

  methods: {
    ...mapActions({
      getDevs: 'user/getDevs',
    })
  }

}
</script>
