<template>
    <div>
        <NavBar/>
        <Nuxt/>
    </div>
</template>

<script>
export default {
    // middleware(){
    //     console.log("ativando middleware")
    // }
    middleware:'auth',
  
}
</script>

<style>

</style>