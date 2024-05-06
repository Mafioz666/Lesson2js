//Масиви та об'єкти:
//
// 1- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let mass =[ 1,2,3,4,5,6,7,8,9,10]
let mass2 =[ 1,2,3,4,5,6,7,"fffff",true,"10"]
console.log(mass,mass2)
// 2- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let books1= {
    title: "marry",
    pageCount: 230,
    genre: "story",
}
let books2= {
    title: "aggat",
    pageCount: 260,
    genre: "action",
}
let books3= {
    title: "cat",
    pageCount: 120,
    genre: "fairy tale",
}
console.log(books1,books2,books3)
// 3- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1= {
    title: "marry",
    pageCount: 230,
    genre: "story",
    authors:["Name: Ivan", "age: 45"]
}
let book2= {
    title: "aggat",
    pageCount: 260,
    genre: "action",
    authors:["Name: Ivasyc", "age: 35"]
}
let book3= {
    title: "cat",
    pageCount: 120,
    genre: "fairy tale",
    authors:["Name: Taras", "age: 25"]
}
console.log(book1,book2,book3)
// 4- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users=[
    {
        name: "Igor",
        username: "Galkin",
        password:1111
    },
    {
        name: "Ig",
        username: "Dtx",
        password:2222
    },
    {
        name: "You",
        username: "Ara",
        password:3333
    },
    {
        name: "i",
        username: "am",
        password:4444
    },
    {
        name: "We",
        username: "are",
        password:5555
    }, {
        name: "she",
        username: "is",
        password:6666
    }, {
        name: "It",
        username: "is",
        password: 7777
    }, {
        name: "How",
        username: "Now",
        password: 8888
    }, {
        name: "Cow",
        username: "Wow",
        password: 9999
    }, {
        name: "Kol",
        username: "Mol",
        password: 1234
    }
]
console.log(users)
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)
// 5- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
// Fist version
let temperatyra =[
    {
        day:"№",
        ranok:"ranok",
        denn:"day",
        vechir:"vvecheri"
    },
    {
        day:"1",
        ranok:"-2",
        denn:"+15",
        vechir:"5"
    },
    {
        day:"2",
        ranok:"-1",
        denn:"+10",
        vechir:"7"
    },  {
        day:"3",
        ranok:"-4",
        denn:"+22",
        vechir:"17"
    },  {
        day:"4",
        ranok:"8",
        denn:"+15",
        vechir:"+7"
    },  {
        day:"5",
        ranok:"3",
        denn:"+27",
        vechir:"12"
    },  {
        day:"6",
        ranok:"-8",
        denn:"+7",
        vechir:"5"
    },  {
        day:"7",
        ranok:"2",
        denn:"+25",
        vechir:"10"
    },

]
console.log(temperatyra)
// Second version
let temperatyra2 =[
    ["№", "yt","day","evn"],
    ["1","-2","+15","5"],
    ["2","-3","+25","5"],
    ["3","-4","+17","5"],
    ["4","-5","+10","5"],
    ["5","-6","+7","5"],
    ["6","-7","+12","5"],
    ["7","-8","+16","5"]
]
console.log(temperatyra2)


// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Вірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x=0
if (x!==0){
    console.log("Вірно")
} else {
    console.log("NeВірно")
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 0
if (time == 0 || time == 1 || time == 2 || time == 3 || time == 4 || time == 5|| time == 6 || time == 7 || time == 8 || time == 9 || time == 10 || time == 11 || time == 12 || time == 13 || time == 14 || time == 15){
    console.log( "First")
}
if ( time == 16 || time == 17 || time == 18 || time == 19 || time == 20|| time == 21 || time == 22 || time == 23 || time == 24 || time == 25 || time == 26 || time == 27 || time == 28 || time == 29 || time == 30){
    console.log( "Second")
}
if ( time == 31 || time == 32 || time == 33 || time == 34 || time == 35|| time == 36 || time == 37 || time == 38 || time == 39 || time == 40 || time == 41 || time == 42 || time == 43 || time == 44 || time == 45){
    console.log( "Third")
}
if ( time == 46 || time == 47 || time == 48 || time == 49 || time == 50|| time == 51 || time == 52 || time == 53 || time == 54 || time == 55 || time == 56 || time == 57 || time == 58 || time == 59 ){
    console.log( "Fourth")
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 31
if ( day == 1 || day == 2 || day == 3 || day == 4 || day == 5|| day == 6 || day == 7 || day == 8 || day == 9 || day == 10 ){
    console.log( "First1")
}
if ( day == 11 || day == 12 || day == 13 || day == 14 || day == 15|| day == 16 || day == 17 || day == 18 || day == 19 || day == 20 ){
    console.log( "Second2")
}
if ( day == 21 || day == 22 || day == 23 || day == 24 || day == 25|| day == 26 || day == 27 || day == 28 || day == 29 || day == 30 || day == 31 ){
    console.log( "Third3")
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// - Користувач вводить або має два числа.
let nomer1=2
let nomer2= 1
switch (nomer1){
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;
    default:
        console.log("Неправильно введені дані")
}
switch (nomer2){
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;
    default:
        console.log("Неправильно введені дані")
}
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
//
let ch1=1
let ch2=1
if (ch1>ch2){
    console.log(ch1)
}else if (ch2>ch1){
    console.log(ch2)
} else{
    console.log(ch1,ch2)
}
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//
let x2= 0
if (!x2){
    x2="default"
    console.log(x2)
}else {
    console.log(x2)
}


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration>5){
    console.log("Супер")
}
if (coursesAndDurationArray[1].monthDuration>5){
    console.log("Супер")
}
if (coursesAndDurationArray[2].monthDuration>5){
    console.log("Супер")
}
if (coursesAndDurationArray[3].monthDuration>5){
    console.log("Супер")
}
if (coursesAndDurationArray[4].monthDuration>5){
    console.log("Супер")
}
if (coursesAndDurationArray[5].monthDuration>5){
    console.log("Супер")
}