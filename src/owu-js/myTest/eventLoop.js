// це синхронна функція - вона виконується миттєво
console.log("start1"); // виконається першим
console.log("start2"); // виконається другим

function timeOut2sec () { // ця функція тут не викликається
    console.log("TimeOut2sec");
}

// https://www.youtube.com/watch?v=vIZs5tH-HGQ
// це асинхронна функція - вона виконується в порядку значень відліку таймера, та потім черги в queue
setTimeout(function () { // зареєструє цю функцію в WebApi і таймер почнеться, після закінчення таймеру
    // відправить на виконання в queue (чергу) і в порядку черги виконає цей код
    console.log("in time out")
}, 2000);

setTimeout(timeOut2sec, 3000);
