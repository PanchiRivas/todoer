<template>
  <div class="c-main">
    <b-row >
            <b-col cols="2" lg="2" md="2"></b-col>

            <b-col cols="8" lg="8" md="8">
                <div class="mt-3" v-for="(task, index) of tasks" v-bind:key="task" >
                   <div class="theIf" v-if="task.done===false">
                        <div class="text" >
                            {{task.text}}
                        </div>
                        <div class="buttons">
                            <button @click="isDone(index)"><img src="../assets/checked.png"></button>
                            <button @click="deleteTask(index)"><img src="../assets/cancel.png"></button>
                        </div>
                   </div>
                   <span v-else></span>
                </div>
            </b-col>

            <b-col cols="2" lg="2" md="2"></b-col>

        </b-row>
  </div>
</template>

<script>

import {mapMutations, mapState} from 'vuex';

export default {
    name: 'NewTask',
    computed:{
        ...mapState(['tasks'])
    }, methods:{
        ...mapMutations(['isDone','deleteTask'])
    }
}
</script>

<style scoped>
.mt-3 .buttons{
    display: none;
}
.mt-3:hover .buttons{
    display: flex;
}
.mt-3{
    width: 100%;
    display: flex;
    font-size: 25px;
    border-width: 0px;
    border-color: #cccccc;
    color: #464646;
    border-style: solid;
    border-radius: 2px;
    box-shadow: 0px 0px 3px rgba(66,66,66,.76);
}
.theIf{
    width: 100%;
    display: flex;
}
.text{
    width: 70%;
}
button{
    font-size: 18px;
    background: none;
	border: none;
}
img{
    height: 35px;
}
.buttons{
    display: flex;
    margin-left:auto;
}


</style>