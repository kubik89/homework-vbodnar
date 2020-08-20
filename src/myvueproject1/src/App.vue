<template>
    <!--  все що тут завжди має бути обгорнуте в щось, наприклад div-->
    <div>
        <!--    <h1>{{message}}</h1>-->
        <h1>{{age1 * 365 + "днів"}}</h1>
        <!--    <h1 v-once>{{ message }}</h1>-->
        <!--    якщо треба перерендерити сторінку, щоб лише РАЗ вивести оригінальне-->
<!--            повідомлення, а не переприсвоєне методом, то використовуємо v-once-->
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


        <!--Робимо 2 кнопки що будуть додавати лічильник по кліку-->

        <!--метод v-on тепер замінили на @ , можна тепер писати лише @-->
        <!--метод v-bind тепер замінили на : , можна тепер писати лише : -->
        <!--        Варіант 1-->
<!--        <button v-on:click="decrease5(5)">ClickMe</button>-->
<!--        <button v-on:click="increase5(5)">ClickMe</button>-->
<!--        <p>{{counter}}</p>-->
<!--        <p>{{ counter > 10 ? "More that 10" : "Less or equal than 10" }}</p>-->

        <!--        Варіант 2-->
        <button v-on:click="counter++">Increase1</button>
        <button v-on:click="counter--">Decrease1</button>
        <button v-on:click="secondCounter++">Increase2</button>
        <p>{{counter}} | {{secondCounter}}</p>
        <p>{{result()}}</p>


        <!--    при подвійному кліку спрацює помилка функція alert1-->
        <input type="text" v-on:dblclick="alert1">

        <!--    після введення тексту нажати Enter чи Space - спрацює помилка функція alert1-->
        <!--      після івенту keyup через крапку ставиться модифікатор (enter, space .... його можна не ставити)-->
        <!--      в цьому випадку без модифікатора alert1 спрацює відразу після введення першого символу в полі-->
        <!--    <input type="text" v-on:keyup.enter.space="alert1">-->
        <p></p>

        <!--      v-model дозволяє вписати автоматично текст із name-->
        <input type="text" v-model="name">
        <p></p>
        <input type="text" v-model="myName.name1">
        <input type="text" v-model="myName.surName">
        <p>{{myName.name1}} {{myName.surName}}</p>

        <div>
<!--            при кліку на перший div змінюємо колір в другій div на червоний, при другому кліку - потім синій-->
        <div class="demo" @click="attachedRed= !attachedRed"></div>
<!--            змінили змінну attachedRed яка в data внизу = false на true-->
        <div class="demo" :class="{red: attachedRed, blue: !attachedRed}"></div>
<!--            тут ніби якщо attachedRed = true - тоді class червоний-->
        <div class="demo" :class="color"></div>
            <input type="text" v-model="color">
<!--            вводимо текст з назвою кольору div в інпут і ця div із класом color малюється в нього-->
        </div>

        <div>
<!--            якщо клікнути на кнопку SHOW - поле з текстом зникне і відкриється інше поле зі значенням else-->
<!--            тут теж v-else не живе без v-if -->
<!--            v-if, якщо дивитися в елементах консолі, при кліку забирає його з DOM дерева, а потім назад його повертає-->
<!--            v-show - накладає на елемент стиль display: none-- і не працює із v-else -->

            <p v-if="show">
<!--            <p v-show="show">-->
                You can see me at the moment
            </p>
            <p v-else>
            because ELSE - you see me
            </p>
            <button @click="show = !show">SHOW</button>
<!--            <span>Hello!</span>-->
        </div>

<!--        <div>-->
<!--            <ul>-->
<!--&lt;!&ndash;                ІТЕРАЦІЯ масивів forEach - проходимось по масиву ingridients, беремо всі значення як ingr і виводимо Їх як {{ingr}} &ndash;&gt;-->
<!--                <li v-for="(ingr, index1) in ingridients" :key="`${index1}`">-->
<!--                    {{ingr}}-->
<!--                </li>-->
<!--            </ul>-->
<!--&lt;!&ndash;            ця кнопка додає до списку в масив слово salt&ndash;&gt;-->
<!--            <button @click="ingridients.push('salt')">Add salt</button>-->
<!--        </div>-->

<!-- ІТЕРАЦІЯ обєктів-->
        <div>
            <ul>
                <li v-for="(pers, number1) in persons" :key="`${number1}`">
                    {{"Мене звати " + pers.name}}, {{"мені " + pers.age}}, {{"cтатус - " + pers.married}}
                </li>
            </ul>
        </div>

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
                secondCounter: 0,
                x: 0,
                y: 0,
                name: "Volodymyr",
                myName: {
                    name1: "Ihor",
                    surName: "Bondaryuk"
                },
                attachedRed: false,
                color: "green",
                show: true,
                ingridients: ["meat", "fruits", "cookies"],
                persons: [
                    {
                        name: "Vova", age: 25, married: true
                    },
                    {
                        name: "Svitlana", age: 31, married: false
                    }
                ]
            }
        },

        computed: {

            divClass() {
                return {
                    red: this.attachedRed,
                    blue: !this.attachedRed
                }
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
                this.counter += step
            },
            decrease5(step) {
                this.counter -= step
            },
            //цією функцією result фактично робимо те саме, що методами increase5 та decrease5, коротштй код
            result() {
                return this.counter > 5? "Більше 5" : "Менше 5"
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

    .demo {
        width: 100px;
        height: 100px;
        background-color: #ffd1d1;
        margin: 10px;
        display: inline-block;
    }

    .red {
        background-color: red;
    }
    .blue {
        background-color: blue;
    }
    .green {
        background-color: green;
    }

</style>
