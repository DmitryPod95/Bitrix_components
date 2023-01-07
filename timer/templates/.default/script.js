function getCookie(user) {
    var cookieArr = document.cookie.split(";");
    console.log(cookieArr);
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if(user == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

function checkCookie() {
    var user = getCookie("user_hash_id");
    console.log(user);
    if (user != null) {

        document.getElementById('countdown').style.display = 'none';

    } else {

        document.getElementById('countdown').style.display = 'inline-block';
    }
}
checkCookie();

function saveCoockie(hash_id) {

    var value = hash_id;
    var cookie_date = new Date();
    var name = "user_hash_id";
    cookie_date.setMonth(cookie_date.getMonth()+1);

    document.cookie = name + "=" + value + ";expires=" + cookie_date.toUTCString();
    document.getElementById('countdown').style.display = 'none';

}



let oCount = document.querySelector("div[countdown]");
oCount.innerText = oCount.countValue = +oCount.getAttribute("countdown");
oCount.countRatio = 360 / oCount.countValue;
oCount.countColor = 100 / oCount.countValue;
oCount.countLight = oCount.countValue / 20;
oCount.countTimer = setInterval(fCountdown.bind(oCount), 1000);

function fCountdown() {
    let nCount = this.countValue;
    if (nCount > 0) {
        nCount--;
        this.innerText = this.countValue = nCount;
        this.style.setProperty("--deg", 361 - nCount * this.countRatio);
        this.style.setProperty("--col", `red`);
    } else {

        clearInterval(this.countTimer);

        document.getElementById('sec').style.display = 'none';
        document.getElementById('user').style.display = 'block';
    }
}
