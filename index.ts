// Importa a classe MapWord do módulo './usecase/MapWord'
import { MapWord } from './usecase/MapWord';

// O(1)
// Palavra de entrada
const word: string = "GitHub";

// O(n)
// Cria uma instância da classe MapWord, que conta as ocorrências de cada letra na palavra
const mapWordInstance = new MapWord(word);
// O(n)
// Obtém a contagem de ocorrências de letras na palavra
const countWord = mapWordInstance.getCountWord();

// O(1)
// Vetor (Array) para armazenar letras que não se repetem na palavra
const wordNotRepeat: string[] = [];

// O(n)
// Itera sobre as chaves do objeto countWord (representando as letras) para encontrar letras que não se repetem
for (let chave in countWord) {
  // O(1)
  // Verifica se a letra ocorre apenas uma vez
  if (countWord[chave] === 1) {
    // O(1)
    // Adiciona a letra ao array de letras que não se repetem
    wordNotRepeat.push(chave);
  }
  // O(1)
  // Sai do loop se já encontrou duas letras que não se repetem
  if (wordNotRepeat.length === 2) break;
}

// O(1)
// Usa um switch para determinar quantas letras não se repetem e exibe a mensagem correspondente
switch (wordNotRepeat.length) {
  case 1:
    // O(1)
    // Exibe a mensagem para uma letra que não se repete
    view({
      mensage: `\nWord: ${word}\n(Primeira) letra que não se repete: ${wordNotRepeat[0].toLocaleUpperCase()}\n`
    });
    break;
  case 2:
    // O(1)
    // Exibe a mensagem para duas letras que não se repetem
    view({
      mensage: `\nWord: ${word}\n(Segunda) letra que não se repete: ${wordNotRepeat[1].toLocaleUpperCase()}\n`
    });
    break;
  default:
    // O(1)
    // Exibe a mensagem para todas as letras se repetindo
    view({
      mensage: "Todas as letras se repetem!!!"
    });
    break;
}

// O(1)
// Função para exibir mensagens no console
function view({ mensage } : { mensage: string }) {
  console.log(mensage);
}
