var chart

function toonHuidigWeer(canvasDom, data) {
    if (chart != null) {
        chart.destroy()
    }

    chart = new Chart(canvasDom, {
        type: 'horizontalBar',
        data: {
            labels: ["Temperatuur", "Windsnelheid", "Luchtdruk", "Luchtvochtigheid"],
            datasets: [
                {
                    backgroundColor: ["#012A36", "#5082A0","#74BCAF","#E8E8E8"],
                    data: data
                }
            ]
        },
        options: {
            legend: { display: false },
            title: { display: false }
        }
    })
}

function vraagWeerdataEnToon(lat, lng) {
    let request = new XMLHttpRequest()
    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&appid=51e3373283ba83127a421c991c987aa8");
    request.send();
    request.onload = function() {
        if(request.status == 200) {
            var result = JSON.parse(request.response)

            var data = [result.main.temp, result.wind.speed, result.main.pressure, result.main.humidity]

            toonHuidigWeer(document.getElementsByClassName("B1")[0].getElementsByTagName("canvas")[0], data)

            document.getElementById('wolk').className = "owf owf-" + result.weather[0].id
        }
    }
}

function run() {
    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#FFFFFF';
    var lat = 28.457695;
    var lng = -80.565769;

    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDTZQVr6VM1XX3HmkhxIKlqsuUl4a0YNj0&callback=initMap';
    script.defer = true;
    script.async = true;

    window.initMap = function() {
        const map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: lat, lng: lng},
            zoom: 10
        });

        var marker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: map
        });

        map.addListener('click', function(e) {
            marker.setMap(null);
            marker = placeMarkerAndPanTo(e.latLng, map);
            vraagWeerdataEnToon(e.latLng.lat(), e.latLng.lng());
        });

        vraagWeerdataEnToon(lat, lng);
    };

    function placeMarkerAndPanTo(latLng, map) {
        var marker = new google.maps.Marker({
            position: latLng,
            map: map
        });

        map.panTo(latLng);
        return marker;
    }

    document.head.appendChild(script);
}

window.onload = run
