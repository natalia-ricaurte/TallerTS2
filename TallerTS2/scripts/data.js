import { Serie } from './Serie.js';
export var series = [
    new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "./img/GGje0vc.jpeg"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "./img/EvKe48G.jpeg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "./img/TDCEV1S.jpeg"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "./img/uAEpVWk.jpeg"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "./img/02B7qhj.jpeg"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "./img/D4y3DrQ.jpeg"),
];
var seriesTable = document.getElementById('seriesTable');
function mostrarDatosSerie(serie) {
    var tr = document.createElement('tr');
    tr.innerHTML = "\n    <td>".concat(serie.id, "</td>\n    <td class=\"clickable-name\"><a href=\"#\" onclick=\"event.preventDefault();\">").concat(serie.name, "</a></td>\n    <td>").concat(serie.channel, "</td>\n    <td>").concat(serie.seasons, "</td>");
    var nameTd = tr.querySelector('.clickable-name a');
    if (nameTd) {
        nameTd.addEventListener('click', function (event) {
            event.preventDefault();
            mostrarDetalleSerie(serie);
        });
    }
    seriesTable.appendChild(tr);
}
series.forEach(function (serie) { return mostrarDatosSerie(serie); });
function promedioSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons += serie.seasons; });
    return totalSeasons / series.length;
}
function mostrarPromedioSeasons(series) {
    var promedio = promedioSeasons(series);
    var averageContainer = document.getElementById('averageContainer');
    if (averageContainer !== null) {
        averageContainer.innerHTML = "<p>Seasons average: ".concat(promedio, " </p>");
        seriesTable.appendChild(averageContainer);
    }
}
mostrarPromedioSeasons(series);
function mostrarDetalleSerie(serie) {
    var serieDetail = document.getElementById('serieDetail');
    if (serieDetail !== null) {
        serieDetail.innerHTML = "\n        <div class=\"card\">\n            <img src=\"".concat(serie.image, "\" class=\"card-img-top\" alt=\"").concat(serie.name, "\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">").concat(serie.name, "</h5>\n                <p class=\"card-text\">").concat(serie.description, "</p>\n                <a href=\"").concat(serie.url, "\" target=\"_blank\">").concat(serie.url, "</a>\n            </div>\n        </div>");
    }
}
