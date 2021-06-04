var notas    = [100,50,20,10,5,2,1,0.50,0.25,0.10,0.05];
var troco    = 487.96;

function calcularTroco() {
   trocado = new Array();	
 	
   for (x in notas) {
       if (notas[x] > troco) continue;
       
       var quantidadeCedula = parseInt(troco / notas[x]);
       trocado.push([quantidadeCedula, notas[x]]);
       
       troco = troco - (quantidadeCedula * notas[x]);
   }
   
   return trocado;
}
console.log(calcularTroco());
