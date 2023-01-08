let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flist')
let res = document.querySelector('div#res')
let values = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumber(num.value) && !inList(num.value, values)) {
        values.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Value ${num.value} add.`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Value invalid or already found in the list.')
    }
    num.value = ''
    num.focus()
}

function finalize() {
    if(values.length == 0) {
        alert('Add values before finalizing!')
    } else {
        let tot = values.length
        let highest = values[0]
        let lowest = values[0]
        let sum = 0
        let average = 0 
        for(let pos in values) {
            sum += values[pos]
            if (values[pos] > highest)
            highest = values[pos]
            if (values[pos] < lowest)
            lowest = values[pos]
        }
        average = sum / tot
        res.innerHTML = ''
        res.innerHTML += `<p>In all, we have ${tot} registered numbers.</p>`
        res.innerHTML += `<p>The highest reported value was ${highest}</p>`
        res.innerHTML += `<p>The lowest reported value was ${lowest}</p>`
        res.innerHTML += `<p>Adding all the values, we have ${sum}</p>`
        res.innerHTML += `<p>The average of the entered values is ${average}</p>`
        
    }
}