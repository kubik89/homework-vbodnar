<template>
  <div>
    <h1>{{message}}</h1>
    <h1>{{age1}}</h1>
    <h1 v-once>{{ message }}</h1>         // якщо треба перерендерити сторінку, щоб лише РАЗ вивести оригінальне
                                          // повідомлення, а не переприсвоєне методом, то використовуємо v-once
    <p>{{sayHello()}}</p>
    <p>
      <a v-bind:href="link">Google</a>
    </p>
    <span v-html="finishedLink"></span>
  </div>


</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      message: "Hello World1",
      age1: 30,
      link: "http://google.com",
      finishedLink: "<a href='http://google.com'>Google</a>"
    }
  },
  methods: {
    sayHello() {
      this.message = "Hello only"; // при потребі таким чином можна переприсвоїти значення ВСЮДИ де використовував message
      return this.message       // в методах викликаємо функцію message тільки через this

    }
  }
}
</script>

<style>

</style>
