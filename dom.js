// // by ID

// const title=document.getElementById('main-heading');
// console.log(title);

// // by Class

// const listItem=document.getElementsByClassName('list-items');
// console.log(listItem);

// //by Tag

// const tags=document.getElementsByTagName('li');
// console.log(tags);

// //by query

// const container=document.querySelector('div');
// console.log(container);

// //by queryall

// const containers=document.querySelectorAll('div');
// console.log(containers);

// --------------DOM Manipulation----------------------------

// styling element
// const title=document.querySelector('#main-heading');
// title.style.color='red';
// title.innerHTML="LOL";  

// const listItems = document.querySelectorAll('.list-items')

// for (i=0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = '5rem'
// }

// creating elements

// const ul = document.querySelector('ul')
// const li = document.createElement('li')

// appending element

// ul.append(li)

// modify the text

// const firstListItem = document.querySelector('.list-items')
// console.log(firstListItem.innerText)
// Neo matrix

// console.log(firstListItem.textContent)
//  Neo
// matrix

// console.log(firstListItem.innerHTML)
// <span>Neo</span>
// matrix

// li.innerText = "X-men"

// modifying attributes & classes

// li.setAttribute('id', 'main-heading')
// <li id="main-heading">X-men</li>
// li.removeAttribute('id')

// const title = document.querySelector('#main-heading')
// console.log(title.getAttribute('id'))
// main-heading

// li.classList.add('list-items')

// console.log(li.classList.contains('list-items')) // true

// remove element

// li.remove()

// --------------Traverse DOM----------------------------

// parent node traversal

// let ul = document.querySelector('ul')
// console.log(ul.parentNode)
// <div class="container">
//     <h1 id="main-heading">Favourite Movie Franchise</h1>
//     <ul>
//         <li class="list-items">
//             <span>Neo</span>
//                 matrix</li>
//         <li class="list-items">Star Wars</li>
//         <li class="list-items">Harry poter</li>
//         <li class="list-items">KGF</li>
//         <li class="list-items">Avatar</li>
//     </ul>
// </div>

// console.log(ul.parentElement) // 같은 결과

// console.log(ul.parentNode.parentNode)
// <body>...</body>
// console.log(ul.parentElement.parentElement) // 같은 결과
// <body>...</body>

// const html = document.documentElement
// console.log(html)

// console.log(html.parentNode) // #document
// console.log(html.parentElement) // null

// child node traversal

// let ul = document.querySelector('ul')
// console.log(ul.childNodes)
// 왜 5개 아냐?
// {
//     "0": {},
//     "1": {},
//     "2": {},
//     "3": {},
//     "4": {},
//     "5": {},
//     "6": {},
//     "7": {},
//     "8": {},
//     "9": {},
//     "10": {}
// }

// 0:text
// 1:li.list-items
// 2:text
// 3:li.list-items
// 4:text
// ...

// console.log(ul.firstChild) // #text
// console.log(ul.lastChild) // #text

// ul.childNodes[1].style.backgroundColor = 'blue'

// console.log(ul.children)
// [li.list-items, li.list-items, ...]

// console.log(ul.firstElementChild)

// <li class="list-items">
//     <span>Neo</span>
//     matrix</li>

// console.log(ul.lastElementChild)
// <li class="list-items">Avatar</li>

// sibling node traversal

// let ul = document.querySelector('ul')
// const div = document.querySelector('div')
// console.log(div.childNodes)

// [0:text,
// 1:h1#main-heading,
// 2:text,
// 3:ul,
// 4:text]
// length:5

// console.log(ul.previousSibling) // #text
// console.log(ul.nextSibling) // #text

// console.log(ul.previousElementSibling)
// <h1 id="main-heading">Favourite Movie Franchise</h1>
// console.log(ul.nextElementSibling)
// null

