function item(id, resposta, nome, arte) {
  return {
    resposta: resposta,
    nome: nome,
    a: id,
    input: `${id}_input`,
    img: `${id}_img`,
    arte: arte
  };
}

// respostas
const desenho_001 = item('desenho_001', ["CAVALO DE FOGO", "WILDFIRE"], 'Cavalo de Fogo', 'imagens/cavalodefogo.png');
const desenho_002 = item('desenho_002', ["DUCK TALES", "DUCKTALES: OS CAÇADORES DE AVENTURAS", "DUCKTALES"], 'DuckTales: Os Caçadores de Aventuras', 'imagens/ducktales.png');
const desenho_003 = item('desenho_003', ["BABAR", "AS AVENTURAS DE BABAR", "AVENTURAS DE BABAR"], 'As Aventuras de Babar', 'imagens/babar.png');
const desenho_004 = item('desenho_004', ["ANIMANIACS", "OS ANIMANIACS"], 'Animaniacs', 'imagens/animaniacs.png');
const desenho_005 = item('desenho_005', ["NOSSA TURMA", "A NOSSA TURMA", "A TURMA", "A TURMA DO BAIRRO", "A GANGUE DO BARULHO", "THE GET ALONG GANG", "GET ALONG GANG"], 'A Nossa Turma', 'imagens/nossaturma.png');
const desenho_006 = item('desenho_006', ["DEFENSORES DA TERRA", "DEFENDERS OF THE EARTH"], 'Defensores da Terra', 'imagens/defensoresdaterra.png');
const desenho_007 = item('desenho_007', ["POLE POSITION"], 'Pole Position', 'imagens/poleposition.png');
const desenho_008 = item('desenho_008', ["RUGRATS OS ANJINHOS", "RUGRATS", "OS ANJINHOS"], 'Rugrats: Os Anjinhos', 'imagens/osanjinhos.png');
const desenho_009 = item('desenho_009', ["BOBBY", "O FANTÁSTICO MUNDO DE BOBBY", "O MUNDO FANTÁSTICO DE BOBBY", "FANTÁSTICO MUNDO DE BOBBY", "MUNDO FANTÁSTICO DE BOBBY", "O MUNDO DE BOBBY", "MUNDO DE BOBBY", "BOBBY'S WORLD", "THE WORLD ACCORDING TO BOBBY", "BOBBYS WORLD"], 'O Fantástico Mundo de Bobby', 'imagens/bobby.png');
const desenho_010 = item('desenho_010', ["PICA PAU", "PICA-PAU", "PICAPAU", "WOODY WOODPECKER"], 'Pica-Pau', 'imagens/picapau.png');
const desenho_011 = item('desenho_011', ["LOONEY TUNES", "LOONEY TOONES"], 'Looney Tunes', 'imagens/looneytunes.png');
const desenho_012 = item('desenho_012', ["DOUG"], 'Doug', 'imagens/doug.png');
const desenho_013 = item('desenho_013', ["JOHNNY BRAVO", "JONNY BRAVO"], 'Johnny Bravo', 'imagens/jonnybravo.png');
const desenho_014 = item('desenho_014', ["CAPTAIN PLANET AND THE PLANETEERS", "CAPTAIN PLANET", "CAPITÃO PLANETA", "CAPITAO PLANETA"], 'Capitão Planeta', 'imagens/capitaoplaneta.png');
const desenho_015 = item('desenho_015', ["O LABORATÓRIO DE DEXTER", "LABORATÓRIO DE DEXTER", "O LABORATÓRIO DO DEXTER", "LABORATÓRIO DO DEXTER", "DEXTER", "DEXTER'S LABORATORY", "O LABORATORIO DE DEXTER", "LABORATORIO DE DEXTER"], 'O Laboratório de Dexter', 'imagens/dexter.png');
const desenho_016 = item('desenho_016', ["TOM E JERRY", "TOM AND JERRY", "TOM JERRY", "TOM AND JERRY"], 'Tom e Jerry', 'imagens/tomejerry.png');

// tokusatsus
const tokusatsu_001 = item('tokusatsu_001', ["JIBAN", "POLICIAL DE AÇO JIBAN", "POLICIAL DE ACO JIBAN"], 'Policial de Aço Jiban', 'imagens/jiban.png');
const tokusatsu_002 = item('tokusatsu_002', ["POWER RANGERS", "MIGHTY MORPHIN POWER RANGERS"], 'Mighty Morphin Power Rangers', 'imagens/powerrangers.png');
const tokusatsu_003 = item('tokusatsu_003', ["JIRAIYA", "JIRAYA", "JIRAIA"], 'Jiraiya: O Incrível Ninja', 'imagens/jiraiya.png');
const tokusatsu_004 = item('tokusatsu_004', ["KAMEN RIDER", "KAMENRIDER"], 'Kamen Rider Black', 'imagens/kamerrider.png');
const tokusatsu_005 = item('tokusatsu_005', ["FLASHMAN", "COMANDO ESTELAR FLASHMAN"], 'Comando Estelar Flashman', 'imagens/flashman.png');
const tokusatsu_006 = item('tokusatsu_006', ["CHANGEMAN", "ESQUADRÃO RELÂMPAGO CHANGEMAN", "ESQUADRAO RELAMPAGO CHANGEMAN"], 'Esquadrão Relâmpago Changeman', 'imagens/changeman.png');
const tokusatsu_007 = item('tokusatsu_007', ["CYBERCOP", "CYBERCOPS"], 'Cybercop, os Policiais do Futuro', 'imagens/cybercop.png');
const tokusatsu_008 = item('tokusatsu_008', ["JASPION"], 'O Fantástico Jaspion', 'imagens/jaspion.png');
const tokusatsu_009 = item('tokusatsu_009', ["WINSPECTOR", "ESQUADRÃO ESPECIAL WINSPECTOR", "ESQUADRAO ESPECIAL WINSPECTOR"], 'Esquadrão Especial Winspector', 'imagens/winspector.png');
const tokusatsu_010 = item('tokusatsu_010', ["SOLBRAIN", "SUPER EQUIPE DE RESGATE SOLBRAIN", "EQUIPE DE RESGATE SOLBRAIN", "EQUIPE SOLBRAIN"], 'Super Equipe de Resgate Solbrain', 'imagens/solbrain.png');
const tokusatsu_011 = item('tokusatsu_011', ["METALDER"], 'Metalder, o Homem Máquina', 'imagens/metalder.png');
const tokusatsu_012 = item('tokusatsu_012', ["SPIELVAN", "GUERREIRO DIMENSIONAL SPIELVAN", "JASPION2", "JASPION 2"], 'Jaspion 2/Guerreiro Dimensional Spielvan', 'imagens/spielvan.png');
const tokusatsu_013 = item('tokusatsu_013', ["LION MAN", "LION-MAN"], 'Lion Man', 'imagens/lionman.png');
const tokusatsu_014 = item('tokusatsu_014', ["SHARIVAN, O GUARDIÃO DO ESPAÇO", "SHARIVAN"], 'Sharivan, O Guardião do Espaço', 'imagens/sharivan.png');
const tokusatsu_015 = item('tokusatsu_015', ["MASKMAN", "DEFENSORES DA LUZ MASKMAN"], 'Defensores da Luz Maskman', 'imagens/maskman.png');
const tokusatsu_016 = item('tokusatsu_016', ["GABAN", "POLICIAL DO ESPAÇO GABAN", "POLICIAL GABAN", "SPACE COP", "SPACECOP"], 'Space Cop/Policial do Espaço Gaban', 'imagens/gaban.png');

// animes
const anime_001 = item('anime_001', ["ONE PIECE"], 'One Piece', 'imagens/onepiece.png');
const anime_002 = item('anime_002', ["NARUTO"], 'Naruto', 'imagens/naruto.png');
const anime_003 = item('anime_003', ["POKEMON", "POKÉMON"], 'Pokémon', 'imagens/pokemon.png');
const anime_004 = item('anime_004', ["STREET FIGHTER", "STREET FIGHTER VICTORY", "STREET FIGHTER II V", "STREET FIGHTER II VICTORY"], 'Street Fighter II V', 'imagens/streetfighter.png');
const anime_005 = item('anime_005', ["DIGIMON"], 'Digimon', 'imagens/digimon.png');
const anime_006 = item('anime_006', ["DRAGON BALL", "DRAGONBALL"], 'Dragon Ball', 'imagens/dragonball.png');
const anime_007 = item('anime_007', ["NEON GENESIS EVANGELION", "EVANGELION"], 'Neon Genesis Evangelion', 'imagens/evangelion.png');
const anime_008 = item('anime_008', ["JOJO'S BIZARRE ADVENTURE", "JOJOS BIZARRE ADVENTURE", "JOJO BIZARRE ADVENTURE", "JOJO"], "JoJo's Bizarre Adventure", 'imagens/jojo.png');
const anime_009 = item('anime_009', ["EL HAZARD", "EL-HAZARD"], 'El-Hazard', 'imagens/elhazard.png');
const anime_010 = item('anime_010', ["DRAGON BALL Z", "DBZ"], 'Dragon Ball Z', 'imagens/dbz.png');
const anime_011 = item('anime_011', ["YU YU HAKUSHO", "YUYU HAKUSHO"], 'Yu Yu Hakusho', 'imagens/yuyuhakusho.png');
const anime_012 = item('anime_012', ["SAKURA CARD CAPTORS", "SAKURA CARDCAPTORS"], 'Sakura Card Captors', 'imagens/sakuracardcaptors.png');
const anime_013 = item('anime_013', ["OS CAVALEIROS DO ZODÍACO", "OS CAVALEIROS DO ZODIACO", "CAVALEIROS DO ZODÍACO", "CAVALEIROS DO ZODIACO", "SAINT SEIYA"], 'Os Cavaleiros do Zodíaco', 'imagens/saintseiya.png');
const anime_014 = item('anime_014', ["GUERREIRAS MÁGICAS DE RAYEARTH", "GUERREIRAS MAGICAS DE RAYEARTH", "GUERREIRAS DE RAYEARTH"], 'Guerreiras Mágicas de Rayearth', 'imagens/rayearth.png');
const anime_015 = item('anime_015', ["SAILOR MOON"], 'Sailor Moon', 'imagens/sailormoon.png');
const anime_016 = item('anime_016', ["SAMURAI X", "RUROUNI KENSHIN"], 'Samurai X/Rurouni Kenshin', 'imagens/samuraix.png');

// jogo
const jogo_001 = item('jogo_001', ["VALIS 2", "VALIS II"], 'Valis II (PC Engine)', 'imagens/valisii.png');
const jogo_002 = item('jogo_002', ["PRESSURE COOKER"], 'Pressure Cooker (Atari 2600)', 'imagens/pressurecooker.png');
const jogo_003 = item('jogo_003', ["LORD OF THE SWORD", "LORD OF SWORD"], 'Lord of The Sword (Master System)', 'imagens/lordofthesword.png');
const jogo_004 = item('jogo_004', ["SPACE HARRIER"], 'Space Harrier (32x)', 'imagens/spaceharrier.png');
const jogo_005 = item('jogo_005', ["OUTRUN", "OUT RUN"], 'Outrun (Mega Drive)', 'imagens/outrun.png');
const jogo_006 = item('jogo_006', ["STREET FIGHTER II", "STREET FIGHTER 2"], 'Street Fighter II (Arcade)', 'imagens/streetfighterii.png');
const jogo_007 = item('jogo_007', ["BOBBY IS GOING HOME", "BOBBY GOING HOME"], 'Bobby is Going Home (Atari 2600)', 'imagens/bobbyisgoinghome.png');
const jogo_008 = item('jogo_008', ["DUCKTALES"], 'DuckTales (NES)', 'imagens/ducktales_nes.png');
const jogo_009 = item('jogo_009', ["CRASH BANDICOOT"], 'Crash Bandicoot (Playstation)', 'imagens/crashbandicoot.png');
const jogo_010 = item('jogo_010', ["DONKEY KONG COUNTRY", "DK1", "DKC"], 'Donkey Kong Country (Super Nintendo)', 'imagens/donkeykongcountry.png');
const jogo_011 = item('jogo_011', ["THE LEGEND OF ZELDA", "ZELDA"], 'The Legend of Zelda (NES)', 'imagens/thelegendofzelda.png');
const jogo_012 = item('jogo_012', ["CASTLEVANIA"], 'Castlevania (NES)', 'imagens/castlevania.png');
const jogo_013 = item('jogo_013', ["DONKEY KONG", "DK"], 'Donkey Kong (Arcade)', 'imagens/donkeykong.png');
const jogo_014 = item('jogo_014', ["PACMAN", "PAC-MAN", "PAC MAN", "COME COME", "COME-COME"], 'Pac-Man (Arcade)', 'imagens/pacman.png');
const jogo_015 = item('jogo_015', ["TETRIS"], 'Tetris (Game Boy)', 'imagens/tetris.png');
const jogo_016 = item('jogo_016', ["POKEMON"], 'Pokemon Blue/Red/Yellow (Game Boy)', 'imagens/pokemon-bry.png');
const jogo_017 = item('jogo_017', ["RADIANT SILVERGUN", "RADIANT SILVER GUN"], 'Radiant Silvergun (Saturn)', 'imagens/radiantsilvergun.png');
const jogo_018 = item('jogo_018', ["TOP GEAR", "TOP RACER"], 'Top Gear (Super Nintendo)', 'imagens/topgear.png');
const jogo_019 = item('jogo_019', ["SONIC"], 'Sonic the Hedgehog (Master System)', 'imagens/sonic_sms.png');
const jogo_020 = item('jogo_020', ["METAL GEAR SOLID"], 'Metal Gear Solid (Playstation)', 'imagens/metalgearsolid.png');
const jogo_021 = item('jogo_021', ["DIABLO"], 'Diablo (PC)', 'imagens/diablo.png');
const jogo_022 = item('jogo_022', ["DOOM"], 'Doom (PC)', 'imagens/doom.png');
const jogo_023 = item('jogo_023', ["DYNAMITE HEADDY"], 'Dynamite Headdy (Mega Drive)', 'imagens/dynamiteheaddy.png');
const jogo_024 = item('jogo_024', ["STAR FOX", "STARFOX"], 'Star Fox (Super Nintendo)', 'imagens/starfox.png');
const jogo_025 = item('jogo_025', ["DOUBLE DRAGON"], 'Double Dragon (Arcade)', 'imagens/doubledragon.png');
const jogo_026 = item('jogo_026', ["SONIC"], 'Sonic the Hedgehog (Mega Drive)', 'imagens/sonic_smd.png');
const jogo_027 = item('jogo_027', ["STREET OF RAGE"], 'Street of Rage (Mega Drive)', 'imagens/streetofrage.png');
const jogo_028 = item('jogo_028', ["PRINCE OF PERSIA"], 'Prince of Persia (PC)', 'imagens/princeofpersia.png');
const jogo_029 = item('jogo_029', ["THE LEGEND OF ZELDA OCARINA OF TIME", "OCARINA OF TIME", "LEGEND OF ZELDA OCARINA OF TIME"], 'The Legend of Zelda: Ocarina of Time (N64)', 'imagens/ocarinaoftime.png');





// contador
var contador = 0

// resposta
function resposta(resposta, id, img, arte, nome) {    
  let text;
  let x = document.getElementById(id).value.toUpperCase();
  if (
    x == resposta[0] || x == resposta[1] || x == resposta[2] || x == resposta[3] || x == resposta[4] ||
    x == resposta[5] || x == resposta[6] || x == resposta[7] || x == resposta[8] || x == resposta[9]
    ) {
    document.getElementById(id).style.color = '#66ff66'; 
    document.getElementById(id).disabled = true; 
    document.getElementById(id).value = nome;    
    document.getElementById(img).src = arte;

    contador = contador + 1;

    } else {
      
    }
    document.getElementById("placar").innerHTML = 'Placar: ' + contador + score
  } 
