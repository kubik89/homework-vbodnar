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
                this.$destroy()
            }
        },
            //Такий метод запускається під капотом, він дивиться, що є в data, які методи...
            //Як видно вони винесені із методів
            beforeCreate() {
                console.log("before create")
            },
            //такий метод виконує компіляцію всіх змінних, проводить всі обчислення методів
            created() {
                console.log("created")
            },
            //цей метод замінює всі значення змінних в html компоненти, наприклад змінна msg передає своє значення в h1
            beforeMount() {
                console.log("before mount")
            },
            //тут шаблон прикріплюється до DOM дерева
            mounted() {
                console.log("mounted")
            },
        //тут проводиться повторний рендеринг сторінки
        beforeUpdate() {
            console.log("before update")
        },
        // оновлення того, що було потрібно для рендерингу. По суті при оновленні чогось два методи
        // beforeUpdate і updated запускаються разом
        updated() {
            console.log("updated")
        },
        //запускається коли ми закриваємо сторінку чи додаток
        //beforeDestroy і destroyed запускаються разом
        beforeDestroy() {
            console.log("beforeDestroy")
        },
        //після закриття додатку цей метод видаляє обєкт Vue із памяті і ми більше працювати з ним не можемо
        destroyed() {
            console.log("destroyed")
        }
    }
</script>

<style>

</style>