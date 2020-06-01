const fp = require('lodash/fp')
const { Container, Maybe } = require("./support")

// ========================================= 练习1 ===============================================

/*使用fp.add(x,y)和fp.map(f,x)创建一个能让functor里的值增加的函数ex1*/

let maybe = Maybe.of([5, 6, 1])
// increment 为增量
let ex1 = increment => fp.map(fp.add(increment))
// 示例，增量为3
console.log(maybe.map(ex1(3)))

// ========================================= 练习2 ===============================================

/*实现一个函数ex2，能够使用fp.first获取列表的第一个元素*/

let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
let ex2 = xs.map(fp.first)._value
console.log(ex2)

// ========================================= 练习3 ===============================================

/*实现一个函数ex3，使用safeProp和fp.first找到user的名字的首字母*/

let safeProp = fp.curry(function (x, o) {
    return Maybe.of(o[x])
})
let user = { id:2, name:'Albert' }
let ex3 = safeProp('name')(user).map(fp.first)._value
console.log(ex3)

// ========================================= 练习4 ===============================================

/*使用Maybe重写ex4，不要有if语句

let ex4 = function (n) {
    if (n) {
        return parseInt(n)
    }
}*/

let ex4 = n => Maybe.of(n).map(x => parseInt(x))._value
console.log(ex4(3.5))
