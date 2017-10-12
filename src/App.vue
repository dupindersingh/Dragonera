<template>
  <div id="app">
  <productType>
  </productType>
  <productPurpose>
  </productPurpose>
  <Platform></Platform>
  <Category></Category>
  <Audience></Audience>
  <Revenue></Revenue>
  <Login></Login>
  <Admin></Admin>
  <Solution></Solution>
  <Competitors></Competitors>
  <Other></Other>
  <Name></Name>
  </div>
</template>

<script>
  import Type from './components/Type' 
  import Purpose from './components/Purpose'
  import Platform from './components/Platform'
  import Category from './components/Category'
  import Audience from './components/Audience'
  import Login from './components/Login'
  import Revenue from './components/Revenue'
  import Admin from './components/Admin'
  import Solution from './components/Solution'
  import Competitors from './components/Competitors'
  import Other from './components/Other'
  import Name from './components/Name'
  
  export default {
    name: 'app',
    components: {
      Type, Purpose, Platform, Category, Audience, Login, Revenue, Admin, Solution, Competitors, Other, Name
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
