// Interface que representa a contagem de ocorrências de palavras
interface WordCount {
  [key: string]: number;
}

// Interface para as propriedades da classe MapWord
interface MapWordProps {
  getCountWord: () => WordCount;
}

// Classe para contar as ocorrências de letras em uma palavra
export class MapWord implements MapWordProps {
  private vetor: string[];     // O(1)
  private countWord: WordCount = {};  // O(1)

  constructor(word: string) {
    // O(n)
    // Converte a palavra para minúsculas e divide em um vetor de caracteres
    this.vetor = word
      ?.toLowerCase()
      ?.split("");
    // O(n)
    // Conta as ocorrências de cada letra na palavra
    this.mapWord();
  }

  // O(n)
  // Conta as ocorrências de cada letra na palavra
  private mapWord() {
    // O(n)
    for (let i = 0; i < this.vetor.length; i++) {
      // O(1)
      // Verifica se a letra já foi contada
      if (this.countWord[this.vetor[i]]) {
        // O(1)
        // Incrementa a contagem se a letra já foi contada
        this.countWord[this.vetor[i]]++;
      } else {
        // O(1)
        // Inicializa a contagem se a letra ainda não foi contada
        this.countWord[this.vetor[i]] = 1;
      }
    }
  }

  // O(1)
  // Retorna a contagem de ocorrências de letras
  public getCountWord() {
    return this.countWord;
  }
}
