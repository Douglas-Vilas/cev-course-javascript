function check() {
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.querySelector('input#txtyear')
    var res = document.querySelector('div#res')
    if (fyear.value.length == 0 || Number(fyear.value) > year) {
        alert('[ERROR] Check the data and try again!')
    } else {
        var fsex = document.querySelector('radsex')
        var age = year - Number(fyear.value)
        var gender = ''
        if (fsex[0].checked) {
            gender = 'Men'
        } else if (fsex[1].checked) {
            gender = 'Woman'
        }
        res.innerHTML = `We detect ${gender} with ${age} years.` // Aula parada em 14:59 tentando resolver o erro na linha 12
    }
}