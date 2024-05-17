function forma_1() {
  let inicio = parseInt(prompt("Ingresa el numero de inicio"));
  let fin = parseInt(prompt("Ingresa el numero final "));

  for (let a = 0; a <= fin; a++){
    if (a >= inicio) {
      setInterval(
        1000, function () {
          console.log(a)
            
      })
    }
  }
}
function forma_2() {

}