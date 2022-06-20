<template>
  <div class="c-main">
    
    <div class="dropdown">
        <button @click="hideTasks()"><img src="../assets/chevron.png"></button>
        <h2>Completadas</h2>
    </div>
    
    <b-row id="row">
        <b-col cols="2" lg="2" md="2"></b-col>

        <b-col cols="8" lg="8" md="8">
            <div class="mt-3" v-for="(task, index) of tasks" v-bind:key="task.id" >
                <div class="theIf" v-if="task.done===true">
                    <div class="text" >
                        {{task.text}}
                    </div>
                    <div class="buttons">
                        <button @click="addAgain(index)"><img src="../assets/up-arrow.png"></button>
                        <button @click="deleteTask(index)"><img src="../assets/cancel.png"></button>
                    </div>
                </div>    
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
        ...mapMutations(['addAgain','deleteTask']),
        hideTasks(){
        var x = document.getElementById("row");
        console.log(x);
            if (x.style.display === "none") {
                x.style.display = "flex";
            } else {
                x.style.display = "none";
            }
        }
    }
}
</script>

<style scoped>
.dropdown{
    margin-top: 5%;
    display: flex;
    padding-left: 10%;
}
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