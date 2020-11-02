//Reservations

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
const check = document.getElementById('check')
console.log(check);
const checkReservation = function() {
    let name = document.getElementById('name').value

    if (reservations[name] && reservations[name].claimed) {
       const resClaimed = document.createElement('p')
       resClaimed.innerHTML = 'Your reservation already claimed'
       resClaimed.style.fontFamily = "Helvetica"
       check.appendChild(resClaimed)

    } else if (reservations[name] && !reservations[name].claimed) {
      const welcome = document.createElement('p')   
      welcome.innerHTML = 'Welcome ' + name
      welcome.style.fontFamily = "Helvetica"
      check.appendChild(welcome)  
    } else {
      const goHome = document.createElement('p')
      goHome.innerHTML = 'You have no reservation'
      goHome.style.fontFamily = "Helvetica"
      check.appendChild(goHome)
        }
    
}
 
//Visual Overload
const getRandomColor = function () {
    const niceColors = ['#8e44ad', '#3498db', '#c0392b', '#f1c40f', '#d35400', '#2ecc71', '#1abc9c', '#2c3e50', '#7f8c8d'];
    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
  };
  
  
  for (let i = 1; i < 8; i++) {
    const newBox = document.createElement('div');
    newBox.setAttribute('class', 'box');
    newBox.style.backgroundColor = getRandomColor();
    newBox.onmouseenter = function () {
      const randomColor = getRandomColor();
      newBox.style.backgroundColor = randomColor;
    };
    document.getElementById('container').appendChild(newBox);
  }

//form
const form = document.getElementById('form')
const validate = function() {
    
    if (document.getElementById('name').value.length < 2) {
        const wrongName = document.createElement('p')
        wrongName.innerHTML = 'Name must be longer than 2 characters'
        wrongName.style.color = 'red'
        form.appendChild(wrongName)

    } else if (document.getElementById('salary').value > 16000 || document.getElementById('salary').value < 10000 ) {
        const wrongSalary = document.createElement('p')
        wrongSalary.innerHTML = 'Salary must be greater than 10,000 but less than 16,000'
        wrongSal
        ary.style.color = 'red'
        form.appendChild(wrongSalary)
    } /*else if (document.getElementById('birthaday').value == null ) {
        const wrongDate = document.createElement('p')
        wrongDate.innerHTML = 'Birthday date is missing'
        wrongDate.style.color = 'red'
        form.appendChild(wrongDate)
    } */ else if (document.getElementById('phone').value.length !== 10) {
        const wrongNumber = document.createElement('p')
        wrongNumber.innerHTML = 'Phone number must be 10 digits long'
        wrongNumber.style.color = 'red'
        form.appendChild(wrongNumber)
    }
}