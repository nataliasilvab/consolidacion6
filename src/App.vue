<template>
  <v-app>
    <Navbar></Navbar>
   
    <v-main>
      <router-view/>
    </v-main>

  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';


export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods:{
    
  },
  components:{
    Navbar
  },
  created(){
    
  }
};
</script>
