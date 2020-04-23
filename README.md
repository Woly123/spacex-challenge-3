# Dashboard Spacex - Challenge 3

Dit dashboard is voor de astronauten die met Falcon Heavy terug naar de aarde reizen. Het is belangrijk om te weten wat de weersomstandigheden zijn op de plek waar je wilt landen. Wanneer je op de map een plek kiest om te landen: (standaard Cape Canaveral) wordt het dashboard geupdate met de weersomstandigheden van die lokatie. Het dashboard toont onder andere temperatuur, windsnelheid, luchtdruk, luchtvochtigheid en bewolking. Deze statistieken zijn ook interressant wanneer je dingen wilt ondernemen op aarde. Zo kun je een zonnige en fijne plek uitkiezen voor de landing. 

## Installatie
Je hebt twee mogelijkheden.


- 1) Kloon deze repository en open index.html met de chrome web-browser.

```bash
git clone https://github.com/Woly123/spacex-challenge-3.git
```

- 2) Open de website gehost op git.
[https://woly123.github.io/spacex-challenge-3](https://woly123.github.io/spacex-challenge-3)

## Opbouw
Dit project is tot stand gekomen met HTML, CSS, Javascript, de library [chart.js](https://www.chartjs.org/). Het plaatsen van de dashboard items komt tot stand met CSS Flexbox. De statistieken worden getoond door middel van [OpenWeatherMap](https://openweathermap.org/current) en [GoogleMaps API](https://developers.google.com/maps/documentation/javascript/tutorial).

## Bekende problemen
De Google Maps Kaart zal bij het laden van de pagina altijd een melding tonen "Google Maps kan niet correct geladen worden op deze pagina.". Dit komt omdat geen betalingsgegevens opgegeven zijn voor de gebruikte api sleutel. De melding kan weggeklikt worden en de kaart is daarna te gebruiken.

## Licentie
Het is iedereen toegestaan deze code te gebruiken en zich toe te eigenen zonder mij daarvan te verwittigen. 
