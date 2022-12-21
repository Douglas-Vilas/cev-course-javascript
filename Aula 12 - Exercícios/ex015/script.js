function checking() {
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.querySelector('input#txtyear')
    var res = document.querySelector('div#res')
    if (fyear.value.length == 0 || fyear.value > year) {
        alert('[ERROR] Check the data and try again!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(fyear.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (fsex[0].checked) {
            gender = 'Man'
            if (age >= 0 && age < 10) {
                // Child
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (age < 21) {
                // Young
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (age < 50) {
                // Adult
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // Old man
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gender = 'Woman'
            if (age >= 0 && age < 10) {
                // Child
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (age < 21) {
                // Young
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (age < 50) {
                // Adult
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // Elderly
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `We detected ${gender} with ${age} years.`
    res.appendChild(img)
}