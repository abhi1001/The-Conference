<template>
  <div id="app">
    <h1><span>The </span>Conference</h1>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
};
</script>
<style>

body {
  background-color: #f6e9e8;
}
h1 {
  color: #d54d7b; font-family: "Great Vibes", cursive; font-size: 50px; line-height: 90px; font-weight: normal; 
  text-align: center; text-shadow: 0 1px 1px #fff;
}
#app {
  margin-top: 20px;
}
.search-wrapper {
  margin: 20px;
  text-align: center;
}
.badge {
  border-radius: 0;
}
</style>