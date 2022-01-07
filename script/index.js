let startingDate, endingDate;

document.getElementById("starting-date").addEventListener("change", function () {
    var input = this.value;
    startingDate = new Date(input);
});

document.getElementById("ending-date").addEventListener("change", function () {
    var input = this.value;
    endingDate = new Date(input);
});

let calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", function () {
    var diff = Math.abs(endingDate.getTime() - startingDate.getTime());
    var dayNumber = diff / (1000 * 3600 * 24);
    var dateInYears = Math.floor(dayNumber / 365);
    var dateInMonths = Math.floor((dayNumber - (dateInYears * 365)) / 30);
    var dateInDays = dayNumber - dateInYears * 365 - dateInMonths * 30;

    let daysLabel = document.getElementById("days");
    daysLabel.textContent = "Girdiğiniz Tarihler Arasındaki Gün Sayısı: " + dayNumber;

    let extendedDaysLabel = document.getElementById("extended-days");
    extendedDaysLabel.textContent = "Bitiş Tarihi Dahil Edildiğinde Aradaki Gün Sayısı (+1 gün): " + (dayNumber + 1);

    let dateLabel = document.getElementById("date");
    dateLabel.textContent = "Bu Tarihler Arasındaki Süre: " + dateInYears + " yıl " + dateInMonths + " ay " + dateInDays + " gün";
})