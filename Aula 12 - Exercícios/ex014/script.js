function download(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var date = new Date()
    var hour = date.getHours()
    msg.innerHTML = `It's now ${hour} o'clock`
    if (hour >= 0 && hour < 12) {
        //GOOD MORNING
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hour >= 12 && hour <= 18) {
        //GOOD AFTERNOON
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //GOOD NIGHT
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}
