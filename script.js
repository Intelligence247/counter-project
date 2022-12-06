let count = document.querySelector('#count')
let x = 0
count.textContent = x


let add = document.querySelector('#add')
add.addEventListener('click', () => {
    let ans = count.textContent = ++x
    if (ans < 0) {
        count.style.color = 'red'
    } else if (ans > 0) {
        count.style.color = 'green'
    } else {
        count.style.color = '#333'
    }
})


let lower = document.querySelector('#lower')
lower.addEventListener('click', () => {
    let ans = count.textContent = --x
    console.log(ans)
    console.log(count.textContent)
    if (ans < 0) {
        count.style.color = 'red'
    } else if (ans > 0) {
        count.style.color = 'green'
    } else {
        count.style.color = '#333'
    }
})

