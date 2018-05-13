function View(selector) {
	this.selector = selector;
}
View.prototype ={
  constructor: View,

// nowDate: new Date(),
// currentDay: nowDate.getDate(),
// currentMonth: nowDate.getMonth(),
// currentYear: nowDate.getFullYear(),
// today: new Date(currentYear, currentMonth, currentDay),
// lastDay: new Date(currentYear, currentMonth+1, 0),
weekDayNames: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],

// date: new Date(currentYear, currentMonth, 1),

init: function(){
  createMonthRow();
  createWeekNameRow();
  createMonth();
  // createListeners();
  // dateClicked();
},

createMonthRow: function() {
    labelRow = document.createElement("div");
    labelRow.className = "piker__monthRow";
      
    var previousMonth = document.createElement("button");
    previousMonth.className = "piker__monthButton";
    previousMonth.classList.add("piker__previousMonthButton");
    previousMonth.innerHTML ="&#9668";
    
    // previousMonth.addEventListener('click', function () {
    //   debugger
    //   const month = document.querySelectorAll('.piker__monthArea');
    //   month.innerHTML = '';
    //     var nextMonth = this.nowDate.setMonth(currentMonth + 1);
    //     console.log(nextMonth);
    //     // this.nowDate.setMonth(nextMonth);
    //     this.createMonth();
    //   })

    labelRow.appendChild(previousMonth);

    var monthLabel = document.createElement('span');
    monthLabel.className = "piker__monthLabel";
    monthLabel.innerHTML =
      this.monthNames[this.currentMonth] + ' ' + this.currentYear;
    labelRow.appendChild(monthLabel);

    var nextMonth = document.createElement("button");
    nextMonth.className = "piker__monthButton";
    nextMonth.classList.add("piker__nextMonthButton");
    nextMonth.innerHTML ="&#9658";
    labelRow.appendChild(nextMonth);
    

    document.querySelector(selector).appendChild(labelRow);
  },

createWeekNameRow: function() {

  weekDaysRow = document.createElement("div");
  weekDaysRow.className = "piker__weekDaysNames";

  for (let i = 0; i < weekDayNames.length; i++) {
    day = document.createElement("span");
    day.innerHTML = weekDayNames[i];
    day.className = "piker__weekDaysItem"
    weekDaysRow.appendChild(day);
  }
  document.querySelector(selector).appendChild(weekDaysRow);
},

createMonth: function() {
  var monthArea = document.createElement('div');
  monthArea.className = "piker__monthArea";

  document.querySelector(selector).appendChild(monthArea);
},

// function dateClicked() {
//   debugger
//   this.activeDates = document.querySelectorAll('.piker__day');
//   for (var i = 0; i < this.activeDates.length; i++) {
//     this.activeDates[i].addEventListener('click', function (event) {
//       var inp = document.querySelector('input[name="outputDate"]');
//       inp.value = this.currentYear + " " + this.currentMonth + " ";

//         removeActiveClass();
//         picked.classList.add('piker__day_picked')
//     })
//   }
// }

// function removeActiveClass() {
//   for (var i = 0; i < this.activeDates.length; i++) {
//     this.activeDates[i].classList.remove('piker__day_picked')
//   }
// }

// function createListeners() {
//   var next = document.querySelector('.piker__nextMonthButton');
//   var previous = document.querySelector('.piker__previousMonthButton');
//   var currentMonth = nowDate.getMonth();

//   next.addEventListener('click', function () {
//   debugger
  
//   const month = document.querySelectorAll('.piker__monthArea');
//   month.innerHTML = '';
      
  
//     var nextMonth = this.currentMonth+1;
//     console.log(nextMonth);
    
//     // this.nowDate.setMonth(nextMonth);
//     this.createMonth();
//   })
  
//   previous.addEventListener('click', function () {
    
//     this.clearPiker();
//     var prevMonth = this.nowDate.getMonth() - 1;
//     this.nowDate.setMonth(prevMonth);
//     this.createMonth();
//   })
// }

// function clearPiker() {
//   const month = document.querySelectorAll('.piker__monthArea');
//   month.innerHTML = '';
// }
}