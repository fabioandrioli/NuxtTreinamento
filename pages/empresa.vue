<template>
  <div>
     <ul class="list-none flex p-5 bg-green-600">
      <li class="ml-5 mr-10"> <nuxt-link class="text-white" to="/empresa/aboutUs">Quem somos</nuxt-link></li>
      <li> <nuxt-link class="text-white" to="/empresa/company">A empresa</nuxt-link></li>
    </ul>
    <nuxt-child />
  </div>
</template>

<script>

export default {
  methods: {
  },
  middleware(){
      console.log("middleware de empresa")
  }
  
}
</script>

<style>

</style>