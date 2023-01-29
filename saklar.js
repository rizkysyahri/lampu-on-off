function saklar() {
    const toggle1 = document.getElementById("default-toggle1")
    const lampu1 = document.getElementById("lampu1")

    if(toggle1.checked) {
        lampu1.src = "assets/img/on.gif";

    }else {
        lampu1.src = "assets/img/off.gif";
    }
}