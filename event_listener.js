// event listeners

// const buttonTwo = document.querySelector('.btn-2')

// function alertBtn() {
//     alert('I also love JavaScript')
// }

// buttonTwo.addEventListener("click", alertBtn)

// mouseover

// const newBackgroundColor = document.querySelector('.box-3')

// function changeBgColor() {
//     newBackgroundColor.style.backgroundColor = 'blue'
// }

// newBackgroundColor.addEventListener('mouseover', changeBgColor)

// reveal vvent

const revealBtn = document.querySelector('.reveal-btn')

const hiddenContent = document.querySelector('.hidden-content')

function revealContent() {
    if (hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove('reveal-btn')
    } else {
        hiddenContent.classList.add('reveal-btn')
    }
}

revealBtn.addEventListener('click', revealContent)