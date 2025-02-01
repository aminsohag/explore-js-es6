function greeting(greetingHandler, name){
    greetingHandler(name);
}

//const name = 'halim mama';
//const numbers = [45, 54, 78];
//const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'}

function greetingHandler(name){
    console.log('Good Morning', name);
}

function greetEvening(name){
    console.log('Good Evening', name);
}

function greetNight(name){
    console.log('Good Night', name);
}


greeting(greetingHandler, 'Tom Hanks')
greeting(greetingHandler, 'Tom Brady')
greeting(greetingHandler, 'Tom Cruise')
greeting(greetEvening, 'Tom Solaiman')
greeting(greetEvening, 'Tom Salma')
greeting(greetNight, 'Tom jerry')
greeting(greetNight, 'Tom tom')


function submitHandler(){
    console.log('button submit clicked');
}
document.getElementById(btn-submit).addEventListener('click', submitHandler)