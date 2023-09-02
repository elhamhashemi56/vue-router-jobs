<template>
  <h1>Jobs</h1>
  <div v-for="item in jobs" :key="item.id" class="jobs">
     <router-link :to="{name:'JobsDetail',params:{id:item.id}}"> <h2>{{ item.title }}</h2></router-link>
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
.jobs {
    border-radius: 7px;
    background-color: #efefef;
    padding: 5px;
    margin: 10px auto;
    max-width: 600px;
  
}

.jobs a{
    text-decoration: none;
}

.jobs:hover{
    background-color: #dad7d7;
}
</style>