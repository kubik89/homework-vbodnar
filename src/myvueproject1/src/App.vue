<template>
    <div>
        <h1>{{msg}}</h1>
<!--        при кліку на першу кнопку назва кнопки зміниться на Changed-->
        <button @click="msg = 'Changed'">Update Title</button>
        <button @click="destroy">Destroy</button>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                msg: "Hello Vue"
            }
        },

        methods: {
            destroy() {

            }
        }
    }
</script>

<style>

</style>