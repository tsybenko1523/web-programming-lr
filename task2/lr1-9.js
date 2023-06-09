var Season;
(function (Season) {
    Season[Season["Winter"] = 0] = "Winter";
    Season[Season["Spring"] = 1] = "Spring";
    Season[Season["Summer"] = 2] = "Summer";
    Season[Season["Autumn"] = 3] = "Autumn";
})(Season || (Season = {}));
;
var current = Season.Summer;
console.log(current); // 2
current = Season.Autumn; // изменение значения
(function (Season) {
    Season[Season["Winter1"] = 0] = "Winter1";
    Season[Season["Spring1"] = 1] = "Spring1";
    Season[Season["Summer1"] = 2] = "Summer1";
    Season[Season["Autumn1"] = 3] = "Autumn1";
})(Season || (Season = {}));
;
var current1 = Season[2]; // 2 - числовое значение Summer
console.log(current); // Summer
(function (Season) {
    Season["Winter2"] = "\u0417\u0438\u043C\u0430";
    Season["Spring2"] = "\u0412\u0435\u0441\u043D\u0430";
    Season["Summer2"] = "\u041B\u0435\u0442\u043E";
    Season["Autumn2"] = "\u041E\u0441\u0435\u043D\u044C";
})(Season || (Season = {}));
;
var current2 = Season.Summer;
console.log(current); // Лето
(function (Season) {
    Season[Season["Winter3"] = 1] = "Winter3";
    Season["Spring3"] = "\u0412\u0435\u0441\u043D\u0430";
    Season[Season["Summer3"] = 3] = "Summer3";
    Season["Autumn3"] = "\u041E\u0441\u0435\u043D\u044C";
})(Season || (Season = {}));
;
var current3 = Season.Summer;
console.log(current); // 3
console.log(Season.Autumn); // Осень
var DayTime;
(function (DayTime) {
    DayTime[DayTime["Morning"] = 0] = "Morning";
    DayTime[DayTime["Evening"] = 1] = "Evening";
})(DayTime || (DayTime = {}));
;
function welcome(dayTime) {
    if (dayTime === DayTime.Morning) {
        console.log("Доброе утро");
    }
    else {
        console.log("Добрый вечер");
    }
}
var current4 = DayTime.Morning;
welcome(current4); // Доброе утро
welcome(DayTime.Evening); // Добрый вечер
