function check() {
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.querySelector('input#txtYear')
    var res = document.querySelector('div#res')
    if (fyear.value.length == 0 || Number(fyear.value) > year) {
        alert('[ERROR] Check the data and try again!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(fyear.value)
        var gender = ''
        if (fsex[0].checked) {
            gender = 'Man'
        } else if (fsex[1].checked) {
            gender = 'Woman'
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `We detected ${gender} with ${age} years.`
    
}