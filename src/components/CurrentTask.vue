<template>
  <div>
    <b-row >
            <b-col cols="2" lg="2" md="2">
                <p></p>
            </b-col>
            <b-col cols="8" lg="8" md="8">
                <div class="mt-3" v-for="task of tasks" v-bind:key="task">
                    <p>{{task.text}}</p>
                    <div class="buttons">
                        <b-button variant="success">O</b-button>
                        <b-button variant="danger">X</b-button>
                    </div>
                    
                </div>
            </b-col>
            <b-col cols="2" lg="2" md="2">
                <p></p>
            </b-col>
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

.mt-3{
    width: 100%;
    font-size: 25px;
    border-width: 0px;
    align-items: center;
    border-color: #cccccc;
    color: #464646;
    border-style: solid;
    border-radius: 2px;
    box-shadow: 0px 0px 3px rgba(66,66,66,.76);
}
.buttons{
    display: inline-flex;
}
.btn{
    outline:none !important;
    border: none;
    background: none;
}
p{
    width: 92%;
    margin: 0;
    display: inline-flex;
}
</style>