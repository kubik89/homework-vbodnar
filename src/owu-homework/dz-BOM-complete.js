// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// let elementById = document.getElementById("area1");
// elementById.value = localStorage.getItem("area1");
// elementById.oninput = () => {
//     localStorage.setItem("area1", elementById.value)
// };

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// let name = document.getElementById("Name");
// name.value = localStorage.getItem("Name");
// name.oninput = () => {
//     localStorage.setItem("Name", name.value)
// };
//
// let lastName = document.getElementById("LastName");
// lastName.value = localStorage.getItem("LastName");
// lastName.oninput = () => {
//     localStorage.setItem("LastName", lastName.value)
// };
//
// let age = document.getElementById("Age");
// age.value = localStorage.getItem("Age");
// age.oninput = () => {
//     localStorage.setItem("Age", Age.value)
// };

// let date = document.getElementById("Date");
// date.value = localStorage.getItem("Date");
// date.oninput = () => {
//     localStorage.setItem("Date", date.value)
// };
//
//
// let check1 = document.getElementById("Check1");
// check1.value = localStorage.getItem("Check1");
// check1.oninput = () => {
//     localStorage.setItem("Check1", check1.value)
// };
//
// let oneFour = document.getElementById("oneFour");
// oneFour.value = localStorage.getItem("oneFour");
// oneFour.oninput = () => {
//     localStorage.setItem("oneFour", oneFour.value)
// };

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// let elementArea3 = document.getElementById("area3");
// console.log(elementArea3);
// let elementSave = document.getElementById("save");
// console.log(elementSave);
// let arr1 = [];
//
// elementSave.onclick = () => {
//     var x = document.getElementById("oneFour");
//     var option = document.createElement("option");
//     option.text = elementArea3.value;
//     x.add(option)
// };


// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все
// необходимые инпуты для редактирования, которые уже заполнены данными объекта

let data = [
    {
        name: "Vova",
        phone: "+3806665575",
        email: "alala@gmail.com",
        comName: "MyCompany"
},
{
        name: "Petia",
        phone: "+3806444575",
        email: "petia@gmail.com",
        comName: "PetiaCompany"
},
{
        name: "Svitlana",
        phone: "+3806444000",
        email: "svitlana@gmail.com",
        comName: "SvitlanaCompany"
},
{
        name: "Oleg",
        phone: "+3809665575",
        email: "oleh@gmail.com",
        comName: "OlehCompany"
}];

let allUsersDiv = document.getElementById("AllUsers"); // в цей div буду запхаю ВСІ контакти з кнопками

function adder() { // займається відмалюванням всіх елементів сторінки
    let item = localStorage.getItem("data");
    let data = JSON.parse(item);

    allUsersDiv.innerHTML = ""; // очищаю текст цього елементу, щоб не копіювались дані які вже існують
    data.forEach(({id, name, phone}, index) => { // для всіх полів контакту, як ітерація
        let userDiv = document.createElement("div"); // створюю елемент
        let editBtn = document.createElement("button"); // створюю кнопку Редагувати
        editBtn.innerText = "Edit";
        let removeBtn = document.createElement("button"); // створюю кнопку Видалити
        removeBtn.innerText = "Remove ME";

        removeBtn.onclick = () => { // при кліку на кнопку ВИДАЛИТИ ->
            data.splice(index, 1); // з масиву data видалити один елемент
            localStorage.setItem("data", JSON.stringify(data));
            adder(); // і щераз перестворити всі інші елементи, що були й не видалені, бо по-іншому видаляться всі
        };

        editBtn.onclick = () => {
          editHelper({name, phone}, index);
        };

        userDiv.innerText = `${index + 1}. Name: ${name}, Phone: ${phone}, Email: `;
        userDiv.appendChild(removeBtn); // додаю кнопку Видалити кожному Контакту
        userDiv.appendChild(editBtn);
        allUsersDiv.appendChild(userDiv); // додаю всі елементи  в div
    })
}

adder();

let elementSave = document.getElementById("Save");
let NameInp = document.getElementById("name");
let phoneInp = document.getElementById("PhoneNumber");
let emailInp = document.getElementById("Email");
let comNameInp = document.getElementById("CN");

elementSave.onclick = () => {
    let name = NameInp.value;
    let phone = phoneInp.value;
    let email = emailInp.value;
    let comName = comNameInp.value;

    data.push ({
        name, phone, email, comName
    });
    localStorage.setItem("data", JSON.stringify(data));
    adder();
};

function editHelper({name, phone}, index) { // {name, phone} - деструктуризую обєкт user і приймаю лише name, phone
    document.getElementById("EditForm").style.display = "block"; // тільки коли клікаю форма видима, бо в html вона display: none"
    let editButton = document.getElementById("editSave");
    let editName = document.getElementById("editName");
    let editPhone = document.getElementById("editPhone");
    editName.value = name;
    editPhone.value = phone;

    editButton.onclick = () => {
        data[index].name = editName.value;
        data[index].phone = editPhone.value;

        localStorage.setItem("data", JSON.stringify(data));

        adder();

        document.getElementById("EditForm").style.display = "none";
    }
}