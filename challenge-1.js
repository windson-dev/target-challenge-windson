// 1) Observe o trecho de código abaixo:

// int INDICE = 13, SOMA = 0, K = 0;

// enquanto K < INDICE faça

// {

// K = K + 1;

// SOMA = SOMA + K;

// }

// imprimir(SOMA);

// Ao final do processamento, qual será o valor da variável SOMA?


// SOLUÇÃO EM JAVASCRIPT
let k = 0;
let soma = 0;
for (const indice = 13; k <= indice; k = k + 1) {
  soma = soma + k;
  console.log(soma);
}

// Resultado 91

