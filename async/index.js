// generar la promesa
const doSomethingAsync = () => {
    return new Promise ((resolve ,reject)=>{
       (true)
    //    ? operacion termaria
          ? setTimeout(()=>resolve('do something async'),3000)
          : reject(new Error(' test Error'))
          
    });
}

// generar el async
const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something)
}
 console.log('Before');
 doSomething();
 console.log('After');

// async para errores
 const anotherFunction = async() => {
     try {
        //  aca puedo generar las veces que necesite llamar a esa promesa
         const something = await doSomethingAsync();
         console.log(something);
     } catch (error) {
         console.error(error)
     }
 }
 console.log('Before 2');
 anotherFunction();
 console.log('After 2');