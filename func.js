const userNameEl = document.querySelector("[data-testid = slackUserName]")
const weekDayEl = document.querySelector("[data-testid = currentDayOfTheWeek]")
const timeEl = document.querySelector("[data-testid = currentUTCTime]")
const imageEl = document.querySelector("[data-testid = slackDisplayImage")

function detailedContent(){
userNameEl.innerText = "@Odinaka 1️⃣";
imageEl.alt = userNameEl.innerText;

const date = new Date();
weekDayEl.innerText = date.toLocaleString( "en", {
    weekday: "long"
})

timeEl.innerText = date.getTime();

setTimeout(() => {
    detailedContent()
}, 1000)
}

detailedContent()