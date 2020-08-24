<template>
<!--    Передаю дані із батьківського обєкту FrameworksList в FrameworkItem через props-->
    <div>
        <h3>FrameworkItem</h3>
        <h5>{{title1}}</h5>
<!--        <span>{{frameworks1}}</span>-->
        <p>{{frameworks1.name}} - {{frameworks1.completed}}</p>
        <button @click="editTitle">Edit Title</button>
        <button @click="completeChg">CompleteChange</button>

        <button @click="editFooter">Edit Footer</button>
    </div>
</template>

<script>
// <!--    імпортую eventBus1 для звязку мід дочірніми елементами, бо вони спілкуються через батька використовуючи eventBus1-->
    import {eventBus1} from "../../main";

    export default {
        name: "FrameworkItem",
        props: {
            frameworks1: {
                //оскільки передаю Обєкт то ці дані обовязкові для успішного відображення
                type: Object,
                required: true,
                default: null
            },
            //оскільки передаю String то ці дані обовязкові для успішного відображення
            title1: {
            type: String,
            default: "Frame11111111"
            }
        },
        data () {
            return {
                //можна також передавати title1 через data таким чином але через this
                frameTitle: this.title1
            }
        },
        methods: {
            editTitle() {
                let value = "new Updated Title1234";
                this.$emit("updateTitle", value)
            },
            completeChg() {
                this.frameworks1.completed = true
            },
            editFooter() {
                const value = "UpdateFooter";
                this.$emit("updatefooter", value);
                eventBus1.$emit("footerEdited", value);
                console.log("this is EditFooter")
            }
        }
    }
</script>