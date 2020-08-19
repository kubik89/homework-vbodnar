<template>
<!--  все що тут завжди має бути обгорнуте в щось, наприклад div-->
  <div>
<!--    <h1>{{message}}</h1>-->
    <h1>{{age1 * 365 + "днів"}}</h1>
<!--    <h1 v-once>{{ message }}</h1>-->
<!--&lt;!&ndash;    якщо треба перерендерити сторінку, щоб лише РАЗ вивести оригінальне&ndash;&gt;-->
<!--&lt;!&ndash;    повідомлення, а не переприсвоєне методом, то використовуємо v-once&ndash;&gt;-->
<!--    <p>{{sayHello()}}</p>-->
<!--    <p>-->
<!--      <a v-bind:href="link">Google</a>-->
<!--    </p>-->
<!--    <span v-html="finishedLink"></span>-->
<!--    <p></p>-->
<!--    <button v-on:click="increase">ClickMe</button>-->
<!--    <p>{{counter}}</p>-->
    <p v-on:mousemove="updateCoordinates($event)">
<!--       переміщаючись по p отримую координати x y-->
      Coordinates: {{x}} {{y}}
    </p>
      <p>{{ x > 50 ? "now x = " + x: "x less than 50"}}</p>

    <button v-on:click="decrease5(5)">ClickMe</button>
    <button v-on:click="increase5(5)">ClickMe</button>
    <p>{{counter}}</p>
      <p>{{ counter > 10 ? "More that 10" : "Less or equal than 10" }}</p>

<!--    при подвійному кліку спрацює помилка функція alert1-->
    <input type="text" v-on:dblclick="alert1">

<!--    після введення тексту нажати Enter чи Space - спрацює помилка функція alert1-->
<!--      після івенту keyup через крапку ставиться модифікатор (enter, space .... його можна не ставити)-->
<!--      в цьому випадку без модифікатора alert1 спрацює відразу після введення першого символу в полі-->
<!--    <input type="text" v-on:keyup.enter.space="alert1">-->
    <p></p>

<!--      v-model дозволяє вписати автоматично текст із name-->
        <input type="text" v-model="name">
<!--        <p>{{name}}</p>-->

  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      message: "Hello World1",
      age1: 31,
      link: "http://google.com",
      finishedLink: "<a href='http://google.com'>Google</a>",
      counter: 0,
        x: 0,
        y: 0,
        name: "Volodymyr"
    }
  },
  methods: {
    sayHello() {
      this.message = "Hello only"; // при потребі таким чином можна переприсвоїти значення ВСЮДИ де використовував message
      return this.message       // в методах викликаємо функцію message тільки через this
    },
    increase() {
      this.counter++
    },
    increase5(step) {
      this.counter+= step
    },
    decrease5(step) {
      this.counter-= step
    },
    updateCoordinates(event) {
      console.log(event);
     this.x = event.clientX;  // отримую координати по x через event
     this.y = event.clientY;
    },
    alert1() {
      alert("Ти двічі клікнув")
    }
  }
}
</script>

<style>

</style>
