const somethingWillHappen = ()=>{
    return new Promise((resolve ,reject) => {
        if(true) {
            resolve ('hey');
        } else {
            reject('whooops');
        }
    });
};

somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err));

const  somethingWillHappen2 = ()=> {
    return new Promise( (resolve , reject) => {
        if (true) {
            setTimeout( ()=>{
                resolve('true');
            },2000)
        } else {
            const error = new Error ('whoops2'); 
            // para que salga error en consola completo
            reject(error);
        }
    });
}
somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err));

// promesas en paralelo, devuelve un arreglo

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log('array of result', response);
})
.catch(err => {
    console.error(err);
})