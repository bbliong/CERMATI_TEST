const notificationBtn = document.querySelector("#notificationBtn")
const notificationPanel = document.querySelector("#notification-panel")
const newslaterPanel = document.querySelector("#newslater-panel")
const containerHero = document.querySelector("#hero")
const header = document.querySelector("#header > nav")
const newslaterClose = document.querySelector("#panel__newslater__close")

const contactMe = document.querySelector("#contact_me")



contactMe.addEventListener("click", function(){
    window.open('tel:089634555083');
})
notificationBtn.addEventListener("click", function () {
    notificationPanel.classList.add("panel__notification__hide")
    containerHero.classList.add("panel__notification__hide")
    header.classList.add("panel__notification__hide")
});

newslaterClose.addEventListener("click", function () {
    newslaterPanel.classList.add("panel__newslater__hide")
    newslaterPanel.classList.remove("panel__newslater__show")

    setTimeout(() => {
        newslaterPanel.classList.remove("panel__newslater__show")
        localStorage.removeItem("notification_closed")
    },600000  );

});


window.onscroll = function () {
    let newsLaterClosed = localStorage.getItem("notification_closed")
    let bodyHeight =document.body.scrollHeight -800
    let scroll = this.scrollY;
    newslaterShow = newslaterPanel.classList.contains("panel__newslater__show")

    if (!newsLaterClosed && (scroll > Math.floor(bodyHeight / 3)) && !newslaterShow) {
        newslaterPanel.classList.remove("panel__newslater__hide")
        newslaterPanel.classList.add("panel__newslater__show")
        localStorage.setItem("notification_closed", true)
    }

}