$(function () {
    var item = [anime_001, anime_002, anime_003, anime_004, anime_005, anime_006, anime_007, anime_008, anime_009, anime_010, anime_011, anime_012,
                anime_013, anime_014, anime_015, anime_016];
   
  $.each(item, function (index, element) {
    var Container = "<div class='box'><img src='imagens/desconhecido.png' id='"+element.a+"_img'>"+
      "<input id='"+element.a+"_input' class='input' placeholder='Qual é o anime?' onkeyup='resposta("+element.a+".resposta, "+element.a+".input, "+element.a+".img, "+element.a+".arte, "+element.a+".nome)'>"+
      "<div class='float_l'><button class='btn btn-dark' value='audios/"+element.a+".mp3'>Tocar</button></div><div class='px10'></div><div class='float_r'>"+
      "<button class='btn btn-dark' onclick='javascript:stopAllAudio()'>Parar</button></div></div>"

      $("modulo").append(Container);
    });
  });

const score = ' de 16'