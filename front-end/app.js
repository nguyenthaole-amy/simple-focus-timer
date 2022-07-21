var form = document.getElementById("timer-form")
const now = new Date().toLocaleTimeString()
var timeOutID = null

form.onsubmit = (e) => {
    e.preventDefault()

    hours = document.getElementById("hour").value || 0
    minutes = document.getElementById("min").value || 0
    seconds = document.getElementById("sec").value || 0

    duration = hours * 3600000 + minutes * 60000 + seconds * 1000

    document.getElementById("timer").innerHTML = hours + " : " + minutes + " : " + seconds

    document.getElementById("timer-form").style.visibility = "hidden"

    timeOutID = setTimeout(() => {
        document.getElementById("timer").innerHTML = "Time is up!"
        document.getElementById("restart-timer").innerHTML = "To restart the timer, enter the time again!"
        document.getElementById("stop-b").innerHTML = "RESTART"
        document.getElementById("stop-b").onclick = () => {
            document.getElementById("timer-form").style.visibility = "visible"
            document.getElementById("timer").innerHTML = null
            document.getElementById("restart-timer").innerHTML = null
            document.getElementById("stop-b").remove()
        }
    }, duration)
}