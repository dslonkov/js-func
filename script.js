function getRandom(min, max) {
  var correctNum = Math.floor(Math.random() * (max - min) + min);
  var userNum;
  console.log(correctNum);
  while (userNum = prompt('Отгадайте число!','')) {
    if (isNaN(userNum)) {
      alert('Введите число!');
    }
    else if (userNum < correctNum) {
      alert('Больше');
    }
    else if (userNum > correctNum) {
      alert('Меньше');
    }
    else {
      alert('Правильно!')
      break;
    }
  }
};

getRandom(1,1000);