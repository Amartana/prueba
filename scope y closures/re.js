function sumWithClosure(firstNum) {
    function funcion2(otroparametro){
       var suma = firstNum + otroparametro
       console.log(suma)
    if(otroparametro) {
    return firstNum
  } else {
    return suma
  }
}
} 
sumWithClosure(1)(2)
sumWithClosure(1)()