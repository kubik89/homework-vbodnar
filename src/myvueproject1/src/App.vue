<template>
    <div>
<!--        якщо компонент не містить даних, тобто пустий, можна його додати через слеш вкінці-->
        <Header></Header>
        <FrameworksList/>
        <Footer/>

    </div>
</template>

<script>
    import Header from "./components/Header";
    import Footer from "./components/Footer";
    import FrameworksList from "./components/Frameworks/FrameworksList";

    export default {
        name: 'App',
        components: {
          //в компонентах міститься вся структура, тобто залежності, переадресації...
          //  щоб додати компоненти слід вказати його назву та імпортувати.
          //  якщо писати через два крапки, то він імпортується як вище import Header from "./components/Header";
          //  або якщо без двох крапок, слід через Alt+Enter імпортувати
          Header,
          Footer: Footer,
          FrameworksList
        },

        data() {
            return {}
        }
    }
</script>

<style>

</style>
