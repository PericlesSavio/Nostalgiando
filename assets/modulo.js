$(function () {
    var item = [desenho_001, desenho_002, desenho_003, desenho_004, desenho_005, desenho_006, desenho_007, desenho_008, desenho_009, desenho_010, desenho_011, desenho_012,
                desenho_013, desenho_014, desenho_015, desenho_016];
   
  $.each(item, function (index, element) {
    var Container = "<div class='box'><img src='imagens/_desconhecido.png' id='"+element.a+"_img'>"+
      "<input id='"+element.a+"_input' class='input' placeholder='Qual é o desenho?' onkeyup='resposta("+element.a+".resposta, "+element.a+".input, "+element.a+".img, "+element.a+".arte, "+element.a+".nome)'>"+
      "<div class='float_l'><button class='btn btn-dark' value='audios/"+element.a+".mp3'>Tocar</button></div><div class='px10'></div><div class='float_r'>"+
      "<button class='btn btn-dark' onclick='javascript:stopAllAudio()'>Parar</button></div></div>"

      $("modulo").append(Container);
    });
  }); 