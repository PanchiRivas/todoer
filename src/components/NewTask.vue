<template>
    <div class="c-main">
        <b-row>
            <b-col cols="2" lg="2" md="2">
                <p></p>
            </b-col>
            <b-col cols="8" lg="8" md="8">
                <input v-model="text" class="input" placeholder="Que quieres hacer hoy? ...">
            </b-col>
            <b-col cols="2" lg="2" md="2">
                <b-button variant="success" @click="addTask(text)">+</b-button>
            </b-col>
        </b-row>
    </div>
</template>



<script>

import {mapMutations, mapState} from 'vuex';

export default {
    name: 'NewTask',
    data(){
        return {text: ''}
    }, computed:{
        ...mapState(['tasks'])
    }, methods:{
        ...mapMutations(['addTask'])
    }
}
</script>

<style scoped>
.c-main{
    width: 100%;
}
.btn-success{
    border-radius: 70%;
    align-content: center;
}
.input{
    width: 100%;
    font-size: 25px;
    border-width: 0px;
    border-color: #cccccc;
    color: #464646;
    border-style: solid;
    border-radius: 2px;
    box-shadow: 0px 0px 3px rgba(66,66,66,.76);
}

</style>