// event probagation

// window.addEventListener('click',function(){
//     console.log('window')
// }, true)
// document.addEventListener('click',function(){
// console.log('Document')
// }, true)

// document.querySelector('.div2').addEventListener('click',function(){
//     console.log('DIV 2')
// }, true)
// document.querySelector('.div1').addEventListener('click',function(){
//     console.log('DIV 1')
// }, true)

// document.querySelector('button').addEventListener('click',function(e){
     // console.log(e)
     // console.log(e.target)
//     console.log(e.target.innerText='clicked!')
// }, true)

// window
// document
// div 2
// div 1
// clicked

// window.addEventListener('click',function(){
//     console.log('window')
// }, false)
// document.addEventListener('click',function(){
// console.log('Document')
// }, false)

// document.querySelector('.div2').addEventListener('click',function(){
//     console.log('DIV 2')
// }, false)
// document.querySelector('.div1').addEventListener('click',function(){
//     console.log('DIV 1')
// }, false)

// document.querySelector('button').addEventListener('click',function(e){
    // console.log(e)
    // console.log(e.target)
//     console.log(e.target.innerText='clicked!')

// clicked
// div 1
// div 2
// document
// window

// }, false)

// window.addEventListener('click',function(){
//     console.log('window')
// }, false)
// document.addEventListener('click',function(){
// console.log('Document')
// }, false)

// document.querySelector('.div2').addEventListener('click',function(e){
//     e.stopPropagation() // 얘가 있어서!
//     console.log('DIV 2')
// }, false)
// document.querySelector('.div1').addEventListener('click',function(){
//     console.log('DIV 1')
// }, false)

// document.querySelector('button').addEventListener('click',function(e){
//     console.log(e.target.innerText='clicked!')

// clicked
// div 1
// div 2

// }, false)


// window.addEventListener('click',function(){
//     console.log('window')
// }, true)
// document.addEventListener('click',function(){
// console.log('Document')
// }, true)

// document.querySelector('.div2').addEventListener('click',function(e){
//     e.stopPropagation() // 얘가 있어서!
//     console.log('DIV 2')
// }, true)
// document.querySelector('.div1').addEventListener('click',function(){
//     console.log('DIV 1')
// }, true)

// document.querySelector('button').addEventListener('click',function(e){
//     console.log(e.target.innerText='clicked!')

// // window
// // document
// // div 2

// }, true)


// window.addEventListener('click',function(){
//     console.log('window')
// }, false)
// document.addEventListener('click',function(){
// console.log('Document')
// }, false)

// document.querySelector('.div2').addEventListener('click',function(){
//     // e.stopPropagation()!
//     console.log('DIV 2')
// }, {once: true})
// document.querySelector('.div1').addEventListener('click',function(){
//     console.log('DIV 1')
// }, false)

// document.querySelector('button').addEventListener('click',function(e){
//     console.log(e.target.innerText='clicked!')

// clicked!
// div 1
// div 2
// document
// window

// 한번 더 클릭하면

// clicked!
// div 1
// document
// window

// }, false)

window.addEventListener('click',function(){
    console.log('window')
}, false)
document.addEventListener('click',function(){
console.log('Document')
}, false)

document.querySelector('.div2').addEventListener('click',function(){
    // e.stopPropagation()!
    console.log('DIV 2')
}, {once: true})
document.querySelector('.div1').addEventListener('click',function(){
    console.log('DIV 1')
}, false)

document.querySelector('.button').addEventListener('click',function(e){
    // 재빨리 refresh 되버림(a tag가 어디론가 열고 있기 때문?)
    e.preventDefault() // 이게 있어야 함! 그리고 이거 어디선가 많이 봤는데!!!!
    console.log(e.target.innerText='clicked!')


}, false)