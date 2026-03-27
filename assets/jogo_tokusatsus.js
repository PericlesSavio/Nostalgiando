var score; // Variável global para armazenar o score

$(function () {
  var item = [tokusatsu_001, tokusatsu_002, tokusatsu_003, tokusatsu_004, tokusatsu_005, tokusatsu_006, tokusatsu_007, tokusatsu_008, tokusatsu_009, tokusatsu_010, tokusatsu_011, tokusatsu_012, tokusatsu_013, tokusatsu_014, tokusatsu_015, tokusatsu_016];

  score = ` de ${item.length}`; // Atualiza o score com o tamanho do array item

  $.each(item, function (index, element) {
    var Container = "<div class='box'><img src='imagens/desconhecido.png' id='"+element.a+"_img'>"+
      "<input id='"+element.a+"_input' class='input' placeholder='Qual é o programa?' onkeyup='resposta("+element.a+".resposta, "+element.a+".input, "+element.a+".img, "+element.a+".arte, "+element.a+".nome)'>"+
      "<div class='float_l'><button class='btn btn-dark play' value='audios/"+element.a+".mp3'>Tocar</button></div><div class='px10'></div><div class='float_r'>"+
      "<button class='btn btn-dark stop'>Parar</button></div></div>"

      $("modulo").append(Container);
    });
  });