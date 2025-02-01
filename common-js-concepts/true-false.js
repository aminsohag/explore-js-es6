/*
Truthy
1. true
2. any number (+ve, -ve) will be truthy other than 0
3. any string other than empty string
4. '0' , 'false'
5. {}
6. []


Falsy
1. false
2. 0
3. '' (empty string)
4. undefined
5. null
*/


const x = false;
if(x){
    console.log('value of x is truty');
}
else{
    console.log('value of x is falsy');
}

// optional
// check falsy
const y = '';
if(!x){
    console.log('value is falsy')
}

// check true
const z = '';
if(!!x){
    console.log('value is truthy');
}