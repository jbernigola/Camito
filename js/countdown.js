// Setup End Date for Countdown (getTime == Time in Milleseconds)
let launchDate = new Date("Dec 24, 2023 00:00:00").getTime();
//"Dec 24, 2023 00:00:00"
// Setup Timer to tick every 1 second
let timer = setInterval(tick, 1000);


let now = new Date().getTime();
let t = launchDate - now;





function tick() {
    
    // Get current time
    let now = new Date().getTime();
    // Get the difference in time to get time left until reaches 0
    let t = launchDate - now;

    // Check if time is above 0
    if (t > 0) {
        // Setup Days, hours, seconds and minutes
        // Algorithm to calculate days...
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        // prefix any number below 10 with a "0" E.g. 1 = 01
        if (days < 10) { days = "0" + days; }

        // Algorithm to calculate hours
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10) { hours = "0" + hours; }

        // Algorithm to calculate minutes
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if (mins < 10) { mins = "0" + mins; }

        // Algorithm to calc seconds
        let secs = Math.floor((t % (1000 * 60)) / 1000);
        if (secs < 10) { secs = "0" + secs; }

        // Create Time String
        let time = `${days}d ${hours}hs ${mins}m ${secs}s`;

        // Set time on document
        document.querySelector('.countdown').innerText = time;
    }

    const boton = document.querySelector(".boton-display");
    if (t <= 0) {
        boton.classList.remove("none");
    }
    else {
        boton.classList.add("none");
    }



}