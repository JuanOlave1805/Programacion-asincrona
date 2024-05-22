function ejecutar(){
  const promise1 = Promise.resolve("Promise resuelta");

  setTimeout(() =>{
    promise1.then((value) => {
        console.log(value);
    });
  }, 1000) 
}