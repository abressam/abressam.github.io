function menuButton() {
    var checkbox = document.getElementById("chk");

    if (checkbox.checked == true){
        window.onscroll = function () { window.scrollTo(0, 0); };
        document.body.style.overflow = 'hidden';
    } else {
        window.onscroll = function() {};
        document.body.style.overflow = 'visible';
    }
}