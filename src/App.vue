<template>
  <main>
    <NavBar></NavBar>
    <div class="mt-5">
      <NewTask> </NewTask>
      <CurrentTask></CurrentTask>
    </div>
  </main>
  
</template>

<script>

import NavBar from './components/NavBar.vue'
import NewTask from './components/NewTask.vue'
import CurrentTask from './components/CurrentTask.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    NewTask,
    CurrentTask
  }
}
</script>

<style>

#app{
  width: 100%;
}


</style>
