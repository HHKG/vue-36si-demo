<template>
  <div id="app">
		<!-- <antHome></antHome> -->
     <!-- <img src="./assets/logo.png"> -->
     <router-view/>
  </div>
</template>

<script>
import antHome from './components/antHome.vue';
export default {
	name: 'App',
	components:{
		'antHome':antHome
	}

}
</script>
<style>
  body{
    margin: 0!important;
    padding: 0!important;
  }
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
