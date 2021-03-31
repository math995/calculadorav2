var display = "";
var n1 = 0;
var n2 = 0;
var ope = "";
// capturar número selecionado
$(document).on('click','.num', function(){
// voltar o valor da ação/botão
 var textoDisplay = "";
$(document).on("click",".botao", function() {
textoDisplay += $(this).val();
$(".display").val(textoDisplay);
})

});
// função para limpar a tela
function CE(){
  display = "";
  $('#display').html(0);
}
// capturar operação de limpar tela
$(document).on('click', '.ce', function(){
  CE();
});
// capturar operação desejada
$(document).on('click', '.ope', function(){
  n1 = display;
  ope = $(this).html();
  CE();
});
// operação soma
$(document).on('click', '.calcular', function(){
  n2 = display;
  if(ope == "+"){
    var resultado = parseFloat(n1)+parseFloat(n2);
    $('#display').html(resultado);
  }
  // outras operações, continuar conta a partir do primeiro resultado
  display = resultado;

});
// operação subtração
$(document).on('click', '.calcular', function(){
  n2 = display;
  if(ope == "-"){
    var resultado = parseFloat(n1)-parseFloat(n2);
    $('#display').html(resultado);
  }
  // outras operações, continuar conta a partir do primeiro resultado
  display = resultado;

});
// operação multiplicação
$(document).on('click', '.calcular', function(){
  n2 = display;
  if(ope == ""){
    var resultado = parseFloat(n1)parseFloat(n2);
    $('#display').html(resultado);
  }
  // outras operações, continuar conta a partir do primeiro resultado
  display = resultado;

});
// operação divisão
$(document).on('click', '.calcular', function(){
  n2 = display;
  if(ope == "/"){
    var resultado = parseFloat(n1)/parseFloat(n2);
    $('#display').html(resultado);
  }
  // outras operações, continuar conta a partir do primeiro resultado
  display = resultado;

});