// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)

// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

function Attributes(titleOfTag, action) {
    this.titleOfTag = titleOfTag;
    this.action = action;
}
let attrB = new Attributes("class", "Для встановлення класів. ");
let attrH1 = new Attributes("id","Для використання ID");
let attrBR = new Attributes("style", "для прописання стилів");

let tagA = {
    titleOfTag: "a",
    action: "предназначен для создания ссылок",
    attrs: attrB, attrH1
};

let tagDiv = {
    titleOfTag: "div",
    action: "предназначен для выделения фрагмента документа",
    attrs: attrB, attrBR
};

let tagH1 = {
    titleOfTag: "h1",
    action: "отображается самым крупным шрифтом жирного начертания",
    attrs: attrB, attrBR
};






