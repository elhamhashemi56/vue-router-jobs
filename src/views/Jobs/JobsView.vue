<template>
  <h1>Jobs</h1>
  <div v-for="item in jobs" :key="item.id">
    {{ item.title }}
  </div>
</template>

<script>
export default {
    data(){
        return{
            jobs:[{title:"Web Develop", id:1 , detail:"Lorem1"},
                  {title:"Vue Router", id:2 , detail:"Lorem2"},
                  {title:"Web Design", id:3 , detail:"Lorem3"}
                ]
        }
    }
}
</script>

<style>

</style>