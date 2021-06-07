function myFunction() {
    console.log(123); // in browser console
    document.getElementById('demo').innerHTML = 'Text after the click!'
    // document.getElementsByTagName('div')[0].innerHTML = 'Text after the click!'
}

function toggleLogo() {
    const state = document.getElementById('logo').style.display
    if (state === 'none') {
        document.getElementById('logo').style.display = 'block'
    } else {
        document.getElementById('logo').style.display = 'none'
    }
}