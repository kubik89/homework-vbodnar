<template>
    <div>
        <ul>
            <li v-for="(item, i) in listTodo" :key="i">
                <span>{{item}}</span>
                <button v-on:click="remove(i)">Del</button>
            </li>
        </ul>
        <input type="text" v-model="text">
        <button v-on:click="add" v-if="listTodo.length<=5">Add</button>
    </div>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {
                text: "",
                listTodo: [
                    "sleep", "eat"
                ]
            }
        },

        methods: {
            add() {
                this.listTodo.push(this.text);
                this.text = ""
            },
            remove(i) {
                this.listTodo.splice(i, 1)
            }
        }
    }
</script>

<style>

</style>
