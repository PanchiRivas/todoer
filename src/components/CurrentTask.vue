<template>
  <div>
    <b-row >
            <b-col cols="2" lg="2" md="2">
                <p></p>
            </b-col>
            <b-col cols="8" lg="8" md="8">
                <div class="mt-3" v-for="task of tasks" v-bind:key="task">

                    <b-row>
                        <b-col cols="7" sm="8" lg="8" md="8" xl="9"><p>{{task.text}}</p></b-col>
                        <b-col cols="1" sm="1" lg="1" md="1" xl="1">
                            
                        </b-col>
                        <b-col cols="4" sm="3" lg="3" md="3" xl="2">
                            <div class="right">
                            <b-button variant="success">O</b-button>
                            <b-button variant="danger">X</b-button>
                            </div>
                        </b-col>
                    </b-row>

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

</style>