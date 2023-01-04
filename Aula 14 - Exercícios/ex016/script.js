function count() {
    let ben = document.querySelector('input#txtb')
    let end = document.querySelector('input#txte')
    let step = document.querySelector('input#txts')
    let res = document.querySelector('div#res')

    if (ben.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        res.innerHTML = 'Impossible to count!'
        //alert('[Fault] Data is missing!')
    }else {
        res.innerHTML = 'Counting: <br>'
        let b = Number(ben.value)
        let e = Number(end.value)
        let s = Number(step.value)
        if (s <= 0) {
            alert('Invalid step! Considering STEP 1')
            s = 1
        }
        if (b < e) {
            // Cont Up
            for(let c = b; c <= e; c += s){
                res.innerHTML += ` ${c} \u{1F449}` // u+1F601 emoji website code. But in JS we convert to \u{1F601}	
            }                        
        } else {
            // Countdown
            for(let c = b; c >= e; c -= s) {
                res.innerHTML += ` ${c} \u{1F449}`
            }            
        }
        res.innerHTML += `\u{1F3C1}`
    }
}