class jean{
ejercicio1(){
  let cadena=[2,3,4]
   let resol=""
   let res=0
  for(let pos=0;pos<cadena.length;pos++){
    let digito=cadena[pos]
   res= digito*digito*digito 
   
  console.log(res);
  }


} 
ejercicio4(){
  const cadena = [2, 3, 4];
  const respuesta = cadena.map(numero => Math.pow(numero, 3)).join(",");
  
  console.log(respuesta); // Output: "8,27,64"
  
}
}
let clas= new jean
clas.ejercicio1()
clas.ejercicio4()