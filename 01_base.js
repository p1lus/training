// 1. Переменные - сущности, где можно хранить значения

// camelCase - правило написания переменных в джс

// var name = 'Dmitry' // можно менять
// const firstName = 'Dmitry'
// const lastName = 'Bakhoff' // const - потоянные перменные, только чтение // string
// const age = 28 // можно менять, например age = 26 // number
// const isProgrammer = true // boolean

// стараться не использовать var, предпочтительно всегда const

// const _private = 'private'
// const _ = ''
// const $ = 'some value'
// const if = 'mkef' // err

// const withNum5 = '5'
// const 5withNum = 5 // err
// ------------------------------------------------------------------------

// 2. Мутирование
// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)
// ------------------------------------------------------------------------

// 3. Операторы
// Различные операторы для взаимодействия с переменными
// let currentYear = 2022
// const birthYear = 1993

// // const age = currentYear - birthYear

// const a = 10
// const b = 5

// let c = 32
// c = c + a
// c += a
// c -= a
// c *= a
// c /= a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear) // ++ - оператор, добавляющий единицу к значению
// console.log(--currentYear)
// --------------------------------------------------------------------------------------

// 4. Типы данных
// const isProgrammer = true // примитив boolean
// const name = 'Dmitry' // примитив string
// const age = 28 // примитив number
// let x // примитив undefined 
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)
// --------------------------------------------------------------------------------------

// 5. Приоритет операторов
// const fullAge = 28
// const birthYear = 1993
// const currentYear = 2022

// // > < >= <= операторы сравнения
// const isFullAge = currentYear - birthYear >= fullAge // 28 >= 29 => true
// console.log(fullAge)
// -----------------------------------------------------------------------------------------

// 6. Условные операторы
// const courseStatus = 'fail' // в процессе, ready - готов, fail - провалился

// синтаксис if: () - условие, {} - блок, который выполнится если условие совпало
// if (courseStatus === 'ready') {
//   console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//   console.log('Курс пока находится в процессе разработки')
// } else {
//   console.log('Курс не получился')
// }

// const isReady = false

// if (isReady) {
//   console.log('Всё готово!')
// } else {
//   console.log('Всё не готово!')
// }

// Тернарное выражение
// isReady ? console.log('Всё готово!') : console.log('Всё не готово!')

// offtop
// const num1 = 42 // number
// const num2 = '42' // string

// console.log(num1 === num2)
// === - js проверяет значения по типу данных, == лучше забыть, потому что js динамически типизируемый язык
// --------------------------------------------------------------------------------------------

// 7. Булевая логика
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators
// --------------------------------------------------------------------------------------------

// 8. Функции

// function calculateAge(year) {
//   return 2022 - year
// }

// // console.log(calculateAge(1993))
// // console.log(calculateAge(1999))
// // console.log(calculateAge(1986))

// function logInfoAbout(name, year) {
//   const age = calculateAge(year)

//   if (age > 0) {
//     console.log('Человек по имени ' + name + ' имеет сейчас возраст ' + age)
//   } else {
//     console.log('Вообще-то это уже будущее!')
//   }
// }

// logInfoAbout('Дмитрий', 1993)
// logInfoAbout('Настя', 1999)
// logInfoAbout('Настя', 2023)
// ---------------------------------------------------------------------------------------------

// 9. Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд']
// const cars = new Array('Мазда', 'Мерседес', 'Форд')

// console.log(cars.length) // поле length - длинна массива (сколько элементов внутри)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])

// cars[0] = 'Porsche'
// cars[3] = 'Mazda' // либо cars[cars.length] - складывать элемент в конец массива
// console.log(cars)
// -------------------------------------------------------------------------------------------

// 10. Циклы. Как итеррировать массивы
// const cars = ['Мазда', 'Мерседес', 'Форд']

// цикл for: i - задали переменную (по классике это i), i=0 - начальное значение, i<cars.length - до какого момента итеррировать, i++ - после того как всё завершилось, увеличить i на единицуц
// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i]
//   console.log(car)
// }

// for (let car of cars) {
//   console.log(car)
// }
// ------------------------------------------------------------------------------------------

// 11. Объекты
// В объект мы группируем определенное количество значений. Разные структуры

// const person = {  // person - объект, группирует определенные значения
//   firstName: 'Dmitry', // ключи
//   lastName: 'Bakhov',
//   year: 1993,
//   languages: ['Ru', 'En', 'De'],
//   hasWife: false,
//   greet: function() {  // метод
//     console.log('greet from person')
//   }
// }

// как обращаться к объекту
// console.log(person.firstName) // через точку
// console.log(person['lastName']) // через скобки
// const key = 'year'  // динамический ключ
// console.log(person[key])
// person.hasWife = true // можно менять ключи
// person.isProgrammer = true // можно добавлять ключи
// console.log(person)

