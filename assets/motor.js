// respostas
const desenho_001 = {resposta:["CAVALO DE FOGO", "WILDFIRE"], nome:'Cavalo de Fogo', 
                    a:'desenho_001', input:'desenho_001_input', img:'desenho_001_img', arte:'imagens/cavalodefogo.png'}

const desenho_002 = {resposta:["DUCK TALES", "DUCKTALES: OS CAÇADORES DE AVENTURAS", "DUCKTALES"], nome:'DuckTales: Os Caçadores de Aventuras',
                    a:'desenho_002', input:'desenho_002_input', img:'desenho_002_img', arte:'imagens/ducktales.png'}

const desenho_003 = {resposta:["BABAR", "AS AVENTURAS DE BABAR" , "AVENTURAS DE BABAR"], nome:'As Aventuras de Babar',
                    a:'desenho_003', input:'desenho_003_input', img:'desenho_003_img', arte:'imagens/babar.png'}

const desenho_004 = {resposta:["ANIMANIACS" , "OS ANIMANIACS"], nome:'Animaniacs',
                    a:'desenho_004', input:'desenho_004_input', img:'desenho_004_img', arte:'imagens/animaniacs.png'}

const desenho_005 = {resposta:["NOSSA TURMA" , "A NOSSA TURMA", "A TURMA", "A TURMA DO BAIRRO", "A GANGUE DO BARULHO"], nome:'A Nossa turma',
                    a:'desenho_005', input:'desenho_005_input', img:'desenho_005_img', arte:'imagens/nossaturma.png'}

const desenho_006 = {resposta:["DEFENSORES DA TERRA" , "DEFENDERS OF THE EARTH"], nome:'Defensores da Terra',
                    a:'desenho_006', input:'desenho_006_input', img:'desenho_006_img', arte:'imagens/defensoresdaterra.png'}

const desenho_007 = {resposta:["POLE POSITION"], nome:'Pole Position',
                    a:'desenho_007', input:'desenho_007_input', img:'desenho_007_img', arte:'imagens/poleposition.png'}

const desenho_008 = {resposta:["POKEMON" , "POKÉMON"], nome:'Pokémon',
                    a:'desenho_008', input:'desenho_008_input', img:'desenho_008_img', arte:'imagens/pokemon.png'}

const desenho_009 = {resposta:["BOBBY", "O FANTÁSTICO MUNDO DE BOBBY", "O MUNDO FANTÁSTICO DE BOBBY", "FANTÁSTICO MUNDO DE BOBBY", "MUNDO FANTÁSTICO DE BOBBY", "O MUNDO DE BOBBY"], nome:'O Fantástico Mundo de Bobby',
                    a:'desenho_009', input:'desenho_009_input', img:'desenho_009_img', arte:'imagens/bobby.png'}

const desenho_010 = {resposta:["PICA PAU", "PICA-PAU"], nome:'Pica-Pau',
                    a:'desenho_010', input:'desenho_010_input', img:'desenho_010_img', arte:'imagens/picapau.png'}

const desenho_011 = {resposta:["LOONEY TUNES"], nome:'Looney Tunes',
                    a:'desenho_011', input:'desenho_011_input', img:'desenho_011_img', arte:'imagens/looneytunes.png'}

const desenho_012 = {resposta:["DOUG"], nome:'Doug',
                    a:'desenho_012', input:'desenho_012_input', img:'desenho_012_img', arte:'imagens/doug.png'}

const desenho_013 = {resposta:["DRAGON BALL"], nome:'Dragon Ball',
                    a:'desenho_013', input:'desenho_013_input', img:'desenho_013_img', arte:'imagens/dragonball.png'}

const desenho_014 = {resposta:["STREET FIGHTER", "STREET FIGHTER VICTORY", "STREET FIGHTER II V", "STREET FIGHTER II VICTORY"], nome:'Street Fighter II V',
                    a:'desenho_014', input:'desenho_014_input', img:'desenho_014_img', arte:'imagens/streetfighter.png'}

const desenho_015 = {resposta:["DIGIMON"], nome:'Digimon',
                    a:'desenho_015', input:'desenho_015_input', img:'desenho_015_img', arte:'imagens/digimon.png'}

const desenho_016 = {resposta:["TOM E JERRY", "TOM AND JERRY","TOM JERRY"], nome:'Tom & Jerry',
                    a:'desenho_016', input:'desenho_016_input', img:'desenho_016_img', arte:'imagens/tomejerry.png'}

      
const desenho_000 = {resposta:[""], nome:'',
                    a:'desenho_0', input:'desenho_0_input', img:'desenho_0_img', arte:'imagens/.png'}

// contador
var contador = 0

// resposta
function resposta(resposta, id, img, arte, nome) {    
  let text;
  let x = document.getElementById(id).value.toUpperCase();
  if (x == resposta[0] || x == resposta[1] || x == resposta[2] || x == resposta[3] || x == resposta[4] || x == resposta[5]) {
    document.getElementById(id).style.color = '#66ff66'; 
    document.getElementById(id).disabled = true; 
    document.getElementById(id).value = nome;    
    document.getElementById(img).src = arte;

    contador = contador + 1;

    } else {
      
    }
    document.getElementById("placar").innerHTML = 'Placar: ' + contador + ' de 16'    
  } 