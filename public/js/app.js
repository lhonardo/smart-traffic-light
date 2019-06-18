function setPreferenceLight(light) {
    document.getElementById("loading").classList.add("show");
    fetch("https://smart-traffic-light-9acdb.firebaseio.com/preference_light.json", {
        method: 'PUT', 
        cache: 'no-cache',
        body: light,
    })
    .then(response => response.json())
    .then((body) => {
        let x = document.getElementsByClassName("selected");
        if(x.length > 0){
            x[0].classList.remove("selected");
        }

        document.getElementById("loading").classList.remove("show");
        document.getElementById(`light-${body}`).classList.add("selected");
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loading").classList.add("show");
    fetch('https://smart-traffic-light-9acdb.firebaseio.com/preference_light.json')
      .then(response => response.text())
      .then((body) => {
        document.getElementById(`light-${body}`).classList.add("selected");
        document.getElementById("loading").classList.remove("show");
      });
});