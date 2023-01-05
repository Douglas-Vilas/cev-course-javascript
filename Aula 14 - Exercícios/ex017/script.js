function multiplicationTable() {
    let num = document.querySelector('input#txtn')
    let mul = document.querySelector('select#selmult')
    if (num.value.length == 0) {          
        alert('Please, enter a number!')    
    } else {
        let n = Number(num.value)           
        let c = 1
        mul.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.txt = `${n} x ${c} = ${n*c}`
            item.value = `mul${c}`
            mul.appendChild(item)
            c++
        }
    }
}//Problema na execução. Verificar. Não aparece a tabuada