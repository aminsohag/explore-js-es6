const myLoader = () => {
    return new Promise( (resolve, reject) => {
        const success = true;
        if(success <= 0.5){
            resolve(success)
        }
        else{
            reject(success)
        }
    })
}

myLoader()
.then(data => console.log('resolve', data))
.catch(err => console.log('reject', err))

fetch('')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))

async function laodData(){
    const res = await fetch('')
    const data = await res.json()
    console.log(data);
}

const taskLoader = async() => {
    const res = await fetch('')
}

laodData()