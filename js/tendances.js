document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");
    let submit_log = localStorage.getItem("user");
    let el = document.querySelector(".em");
    let el2 = document.querySelector(".compte");
    el.innerText += ` ${submit_log}`;
    el2.innerText += ` ${submit_log}`;
    let btn = document.querySelector(".unlocked");
    /*event*/
    btn.addEventListener("click", () => {
        localStorage.clear();
        sessionStorage.clear();
        document.location.assign("tendances.html");
    });
});