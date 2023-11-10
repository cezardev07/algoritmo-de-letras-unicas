
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" width="100%"/>

## Algoritmos de Identificação de Letras Não Repetidas:

<strong>DESAFIO:</strong> 

1 -  Desenvolva um algoritmo em **Node.js** utilizando **TypeScript** e uma abordagem **orientada a objetos** por meio de **classes**. 

2 - O objetivo é identificar e **apresentar a segunda letra não repetida em uma string (palavra)**. 

3 - **Caso não haja uma segunda letra não repetida**, o algoritmo deve verificar se existe uma primeira letra não repetida e exibi-la.

4 - **Se todas as letras da string se repetirem**, o programa deve exibir uma mensagem indicando essa condição.


<strong>RESOLUÇÃO:</strong> 

1 - A classe MapWord é responsável por mapear as ocorrências de cada letra em uma palavra fornecida. Com um vetor privado que armazena os caracteres da palavra em minúsculas, a classe realiza a contagem de ocorrências por meio de um objeto chamado countWord. A inicialização da classe ocorre durante a criação de uma instância, tomando como parâmetro a palavra a ser analisada.
Atributos:

- **vetor (O(1)):** Um vetor privado que armazena os caracteres da palavra em minúsculas, proporcionando uma estrutura conveniente para iterar sobre as letras.

- **countWord (O(1)):** Um objeto que representa a contagem de ocorrências de cada letra na palavra, inicializado como um objeto vazio.

**Métodos:**

- **constructor (O(n)):** O método de inicialização da classe, que converte a palavra fornecida para minúsculas e a divide em um vetor de caracteres. Em seguida, chama o método mapWord para contar as ocorrências.

- **mapWord (O(n)):** Método privado responsável por iterar sobre o vetor de caracteres, contando as ocorrências de cada letra e armazenando no objeto countWord.

- **getCountWord (O(1)):** Método público que retorna o objeto countWord, representando a contagem de ocorrências de letras na palavra.

Essa classe fornece uma abstração eficiente para a contagem de ocorrências de letras em uma palavra, facilitando a análise posterior das letras não repetidas.

<strong>CODIGO:</strong> 

````ts
class MapWord implements MapWordProps {
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
````

2 - Este bloco de código executa a lógica principal para identificar e processar as letras não repetidas em uma palavra fornecida. Abaixo está uma descrição mais detalhada:

- **Palavra de Entrada (O(1)):** Define a palavra de entrada como "Google".

- **Criação da Instância da Classe MapWord (O(n)):** Instancia a classe MapWord para contar as ocorrências de cada letra na palavra. Isso envolve a conversão da palavra para minúsculas e a contagem das ocorrências de cada letra na palavra.

- **Obtenção da Contagem de Ocorrências (O(n)):** Obtém a contagem de ocorrências de letras na palavra por meio do método getCountWord da instância da classe MapWord.

- **Vetor para Letras Não Repetidas (O(1)):** Inicializa um vetor para armazenar as letras que não se repetem na palavra.

- **Iteração sobre as Chaves do Objeto CountWord (O(n)):** Utiliza um loop for-in para iterar sobre as chaves do objeto countWord, que representa as letras na palavra e suas contagens de ocorrências.

- **Verificação de Letras Não Repetidas (O(1)):** Dentro do loop, verifica se a contagem de uma letra é igual a 1, indicando que a letra não se repete. Se verdadeiro, adiciona a letra ao vetor de letras não repetidas.

- **Saída do Loop ao Encontrar Duas Letras Não Repetidas (O(1)):** Utiliza uma verificação para sair do loop caso já tenha encontrado duas letras não repetidas.

- **Switch para Exibição de Mensagens (O(1)):** Usa um switch para determinar a quantidade de letras não repetidas encontradas e exibe mensagens correspondentes.

- **Exibição da Mensagem (O(1)):** Utiliza a função view para exibir mensagens formatadas, indicando a palavra de entrada e a(s) letra(s) que não se repete(m). Se todas as letras se repetem, exibe uma mensagem indicando esse cenário.

Esse bloco de código oferece uma abordagem clara e eficiente para identificar e comunicar as letras não repetidas na palavra fornecida.

<strong>CODIGO:</strong> 

```ts
// O(1)
// Palavra de entrada
const word: string = "Google";

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

```

- <strong>É importante ressaltar que este projeto é voltado exclusivamente para fins educacionais e de aprendizado.</strong>

### Get started project

    # clone o repositorio
    git clone < repositorio >

    # open project
    cd ./ < name project >

    # install all dependencias
    yarn install
    or
    npm install

    # started application
    yarn dev
    or
    npm run dev