enum Season { Winter, Spring, Summer, Autumn };
let current: Season = Season.Summer;
console.log(current);       // 2
current = Season.Autumn;    // изменение значения


enum Season { Winter1=0, Spring1=1, Summer1=2, Autumn1=3 };
var current1: string = Season[2];    // 2 - числовое значение Summer
console.log(current);   // Summer


enum Season { 
    Winter2 = "Зима", 
    Spring2 = "Весна",
    Summer2 = "Лето", 
    Autumn2 = "Осень"
};
var current2: Season = Season.Summer;
console.log(current);   // Лето


enum Season { 
    Winter3 = 1, 
    Spring3 = "Весна",
    Summer3 = 3, 
    Autumn3 = "Осень"
};
var current3: Season = Season.Summer;
console.log(current);           // 3
console.log(Season.Autumn);     // Осень


enum DayTime { 
    Morning, 
    Evening
};
function welcome(dayTime: DayTime){
     
    if(dayTime === DayTime.Morning){
        console.log("Доброе утро");
    }
    else{
        console.log("Добрый вечер");
    }
}
let current4: DayTime = DayTime.Morning;
welcome(current4);           // Доброе утро
welcome(DayTime.Evening);   // Добрый вечер
