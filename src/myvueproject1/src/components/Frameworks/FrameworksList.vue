<template>
    <div>
        <h3>FrameworkList</h3>
<!--        <FrameworkItem v-for="(frameItem, i) in 5" :key="i"></FrameworkItem>-->
        <div v-for="(frames1, index) in frameworks" :key="index">
<!--            якщо props передавати без : , то передаю лише текст як стрінгу, а якщо з : , то тоді те
                що в самому props (масив чи обєкт)-->
<!--            <FrameworkItem props="frameworks11"/>-->
            <div :class="frames1.completed ? 'green' : 'red'">
                <FrameworkItem
                        :frameworks1="frames1"
                        :title="title1"
                        @updateTitle = "updateTitttttle"
                />
            </div>
<!--            :frameworks1 - це довільна назва props яку передаю (ця назва підвязана із
масивом із FrameworkItem>props)
та елементом span в якому передаю теж цей props,
а далі вже те, що справді передаю-->
        </div>
    </div>
</template>

<script>
    import FrameworkItem from "./FrameworkItem";

    export default {
        name: "FrameworkList",
        components: {
            FrameworkItem
        },
        data() {
            return {
                frameworks: [
                    {
                        name: "Vue",
                        difficult: "easy",
                        completed: false
                    },
                    {
                        name: "React",
                        difficult: "hard",
                        completed: false
                    },
                    {
                        name: "Angular",
                        difficult: "easy",
                        completed: true
                    },
                ],
                title1: "MyFrame1234"
            }
        },
        methods: {
            updateTitttttle(event) {
                console.log(event);
                this.title = event
            }
        }
    }
</script>

<style>
    .red {
        background-color: red;
    }
    .green {
        background-color: green;
    }
    .yellow {
        background-color: yellow;
    }
</style>