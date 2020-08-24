<template>
    <div>
        <h1>Footer</h1>
    </div>
</template>

<script>
    import {eventBus1} from "../main";

    export default {
        name: "Footer",
        created() {
            eventBus1.$on("footerEdited", (msg) => {
                this.$refs.footer.textContent = msg
            })
        }
    }
</script>

<style scoped>
/*<!-- style scoped пишиться якщо треба використати цей стиль лише для h1 даного файлу vue, в іншому випадку всі h1
всіх файлів так застилізуються -->*/
    h1{
        background-color: rebeccapurple;
    }
</style>