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
        <button v-on:click="increase5(5, $event)">Increase1</button>
        <button v-on:click="counter--">Decrease1</button>
        <button v-on:click="secondCounter++">Increase2</button>
        <button v-on:click="resetCounter(4, $event)">Reset</button>
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
<!--ІТЕРАЦІЯ масивів forEach - проходимось по масиву ingridients, беремо всі значення як ingr і виводимо Їх як {{ingr}} -->
<!--                <li v-for="(ingr, index1) in ingridients" :key="`${index1}`">-->
<!--                    {{ingr}}-->
<!--                </li>-->
<!--            </ul>-->
<!--            ця кнопка додає до списку в масив слово salt-->
<!--            <button @click="ingridients.push('salt')">Add salt</button>-->
<!--        </div>-->

<!-- ІТЕРАЦІЯ обєктів-->
<!--        <div>-->
<!--            <ul>-->
<!--                <li v-for="(pers, number1) in persons" :key="`${number1}`">-->
<!--                    {{"Мене звати " + pers.name}}, {{"мені " + pers.age}}, {{"cтатус - " + pers.married}}-->
<!--                </li>-->
<!--            </ul>-->
<!--        </div>-->

<!--    ЦИКЛИ-->
        <div>
            <ul>
                <li v-for="(pers, i) in persons" :key="i">
                    <div v-for="(someValue, someKey, someIndex) in pers" :key="someIndex">
                        {{someIndex}}, {{someKey}}, {{someValue}}
                    </div>
                </li>
            </ul>
        </div>

<!--Цикли через template -->
        <div>
            <template v-for="pers in persons">
                {{pers.name}}, {{pers.age}}
            </template>
        </div>
<!--        ЦИКЛ від 1 до 10-->
        <div>
            <span v-for="n in 10" :key="n">
                {{n}}
            </span>
        </div>

        <div class="demo" :class="[color, {red: isTrue}]"></div>
        <input type="text" v-model="color">

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

        <div>
            <ul>
<!--                Цикл в циклі-->
<!--                Проходжусь по масиві employee - де кожен обєкт це empl. key тут це якесь завжди УНІКАЛЬНЕ значення
 в даному випадку  в мене було id, але може бути якась умовна змінна якої не існує, як індекс-->
<!--                Далі для кожного значення empl проганяюсь по вкладеному обєкту params  -->
                <li v-for="empl in employee" :key="empl.id">
                    <p v-for="(params, index) in empl" :key="index">
                    {{"I'm " + empl.name}} . {{"My name is " + empl.lastname}} {{empl.params.age}}, {{empl.params.height}}
                    </p>
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
                isTrue: true,
                show: true,
                ingridients: ["meat", "fruits", "cookies"],
                persons: [
                    {
                        name: "Vova", age: 25, married: true
                    },
                    {
                        name: "Svitlana", age: 31, married: false
                    }
                ],
                employee: [
                    {id: 1, name: "Iryna", lastname: "Petrova",
                        params:
                            {age: 30, height: 180}
                        },
                    {id: 2, name: "Svitlana", lastname: "Morozova",
                        params:
                            {age: 41, height: 150}},
                    {id: 3, name: "Ihor", lastname: "Bilyk",
                        params:
                            {age: 10, height: 120}},
                ],

                text: "",
                listTodo: [
                    "sleep", "eat"
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
            //тут step - це приймається значення, що додається до counter,
            //event - це подія при if...
            increase5(step, event) {
                console.log(event);
                this.counter += step;
                if (this.counter >= 15) {
                    event.target.style.color = "blue"
                } else event.target.style.color = "yellow"
            },
            decrease5(step) {
                this.counter -= step
            },
            resetCounter(numb, event) {
                this.counter = numb;
                if (this.counter === numb) {
                    event.target.innerHTML = "Inc1"
                } else event.target.innerHTML = "Increaseeee"
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
            },
            //метод add додає якесь значення в масив, потім обнулюється значення цього інпута
            add() {
                this.listTodo.push(this.text);
                this.text = ""
            },
            //метод remove видаляє із масиву один елемент i
            remove(i) {
                this.listTodo.splice(i, 1)
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
