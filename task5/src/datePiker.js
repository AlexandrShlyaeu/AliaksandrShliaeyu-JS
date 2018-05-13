function DatePicker(selector) {
  var args = document.querySelectorAll(selector);
    (function checkInputs() {
        if (args.length === 0) {
            return;}
    })();

  this.selector = selector;
  var nowDate = new Date();
  var currentDay = nowDate.getDate();
  var currentMonth = nowDate.getMonth();
  var currentYear = nowDate.getFullYear();
  var today = new Date(currentYear, currentMonth, currentDay);

  var weekDayNames = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var pikerWrapper = document.createElement("div");
      pikerWrapper.className = "piker__wrapper";
      document.querySelector(selector).appendChild(pikerWrapper);

  createMonthRow(currentYear, currentMonth);
  createWeekNameRow();
  createMonth(currentYear, currentMonth);
  createListeners();
  dateClicked(currentYear, currentMonth)


  function reBuild(currentYear, currentMonth) {
    createMonthRow(currentYear, currentMonth);
    createWeekNameRow();
    createMonth(currentYear, currentMonth);
    createListeners();
    dateClicked(currentYear, currentMonth);
  };
  function createMonthRow(currentYear, currentMonth) {
      this.currentMonth = currentMonth; 
      this.currentYear = currentYear; 
      labelRow = document.createElement("div");
      labelRow.className = "piker__monthRow";
        
      var previousMonth = document.createElement("button");
      previousMonth.className = "piker__monthButton";
      previousMonth.classList.add("piker__previousMonthButton");
      previousMonth.innerHTML ="&#9668";
      labelRow.appendChild(previousMonth);
      
      var monthLabel = document.createElement('span');
      monthLabel.className = "piker__monthLabel";
      
      monthLabel.innerHTML =
      monthNames[this.currentMonth] + ' ' + this.currentYear;
      labelRow.appendChild(monthLabel);
  
      var nextMonth = document.createElement("button");
      nextMonth.className = "piker__monthButton";
      nextMonth.classList.add("piker__nextMonthButton");
      nextMonth.innerHTML ="&#9658";
      labelRow.appendChild(nextMonth);
      pikerWrapper.appendChild(labelRow);
  }
  
  function createListeners() {
    var next = document.querySelector('.piker__nextMonthButton');
    var previous = document.querySelector('.piker__previousMonthButton');
    next.addEventListener('click', function () {
      clearPiker();
      currentMonth = currentMonth + 1;
      if (currentMonth > 11) {
        currentYear = currentYear + 1;
        currentMonth = 0;
      };
      reBuild(currentYear, currentMonth);
    })

    previous.addEventListener('click', function () {
      clearPiker();
      currentMonth = currentMonth - 1;
      if (currentMonth < 0) {
        currentYear = currentYear - 1;
        currentMonth = 11;
      };
      reBuild(currentYear, currentMonth);
    })
  }

  function createWeekNameRow() {
    weekDaysRow = document.createElement("div");
    weekDaysRow.className = "piker__weekDaysNames";
  
    for (let i = 0; i < weekDayNames.length; i++) {
      day = document.createElement("span");
      day.innerHTML = weekDayNames[i];
      day.className = "piker__weekDaysItem"
      weekDaysRow.appendChild(day);
    }
    pikerWrapper.appendChild(weekDaysRow);
  }
    
  function createMonth(currentYear, currentMonth) {
    var monthArea = document.createElement('div');
    monthArea.className = "piker__monthArea";
    var date = new Date(this.currentYear, this.currentMonth, 1); 
    var lastDay = new Date(currentYear, currentMonth+1, 0);
    var numberOfWeekDay= date.getDay()-1;
    if (numberOfWeekDay< 0) {
      numberOfWeekDay= 6;}
    var  rowCounter = 0;
    while (date.getMonth() == this.currentMonth) {
      var week = document.createElement('div');
      week.classList.add("piker__week");
      var i =  0;
      while (i < 7) {
        var day = document.createElement('span');
        day.classList.add("piker__day");
        var attributeDate = date.getDate()+"."+ (date.getMonth() + 1) + "." + date.getFullYear();
        day.setAttribute('data-calendar-date', attributeDate);
        if (date.toString() === today.toString()) {
          day.classList.add('piker__today');}
        if (date.getMonth().toString() > lastDay.getMonth().toString()) { //1
          day.style.visibility = "hidden";}
        if ( rowCounter == 0) {
          if (i < numberOfWeekDay) {
            day.style.visibility = "hidden";
          } else {
            day.innerHTML = date.getDate();
            date.setDate(date.getDate()+1);
          }
        } else {
          day.innerHTML = date.getDate();
          date.setDate(date.getDate()+1);
        }
        week.appendChild(day);
        i++;
      }
      monthArea.appendChild(week);
      rowCounter++;
    }
    pikerWrapper.appendChild(monthArea);
  }

  function clearPiker() {
    var label = document.querySelector('.piker__monthRow');
    label.remove();
    var weekNames = document.querySelector('.piker__weekDaysNames');
    weekNames.remove();
    var month = document.querySelector('.piker__monthArea');
    month.remove();
  }
  
  function dateClicked(currentYear, currentMonth) {
    activeDates = document.querySelectorAll('.piker__day');
    for (var i = 0; i < this.activeDates.length; i++) {
      this.activeDates[i].addEventListener('click', function (event) {
        var atrDate = event.target.getAttribute("data-calendar-date");
        var inp = document.querySelector('input[name="outputDate"]');
        inp.value = atrDate;
          removeActiveClass();
          this.classList.add('piker__day_picked')
      })
    }
  }
  function removeActiveClass() {
    for (var i = 0; i < this.activeDates.length; i++) {
      this.activeDates[i].classList.remove('piker__day_picked')
    }
  }
}

