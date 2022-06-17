<template>
  <b-navbar id="nav">
      <h1 id="titlenav" >ToDoer</h1>
      <img src="@/assets/seleccione.png" class="d-inline-block align-top" id="logo" alt="logo">
  </b-navbar>

</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>

#nav{
  width: 100%;
  background-color:#facbfb;
  box-shadow: 1px 0px 9px 6px rgba(71, 9, 85, 0.68);
}
#logo{
  width: 50px;
  margin-right: 5%;
}
#titlenav{
  text-align: left;
  width: 100%;
  font-size: 40px;
  margin-left: 5%;
}


</style>

