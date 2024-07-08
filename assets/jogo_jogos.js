$(function () {
    var item = [jogo_001, jogo_002, jogo_003, jogo_004, jogo_005, jogo_006, jogo_007, jogo_008, jogo_009, jogo_010, jogo_011, jogo_012, jogo_013, jogo_014, jogo_015,
      jogo_016, jogo_017, jogo_018, jogo_019, jogo_020, jogo_021, jogo_022, jogo_023, jogo_024, jogo_025, jogo_026, jogo_027, jogo_028, jogo_029];
   
  $.each(item, function (index, element) {
    var Container = "<div class='box'><img src='imagens/desconhecido.png' id='"+element.a+"_img'>"+
      "<input id='"+element.a+"_input' class='input' placeholder='Qual é o jogo?' onkeyup='resposta("+element.a+".resposta, "+element.a+".input, "+element.a+".img, "+element.a+".arte, "+element.a+".nome)'>"+
      "<div class='float_l'><button class='btn btn-dark' value='audios/"+element.a+".mp3'>Tocar</button></div><div class='px10'></div><div class='float_r'>"+
      "<button class='btn btn-dark' onclick='javascript:stopAllAudio()'>Parar</button></div></div>"

      $("modulo").append(Container);
    });
  }); 

const score = ' de 22'