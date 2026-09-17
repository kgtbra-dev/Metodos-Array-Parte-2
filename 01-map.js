/**
 * ============================================================
 * MÉTODO: map()
 * ============================================================
 * Função: Percorre o array e TRANSFORMA cada item, retornando 
 * um NOVO array com o mesmo tamanho original.
 * ============================================================
 */

console.log("=== EXEMPLOS COM MAP() ===\n");

//-------------------------------------------------------------
//Exemplo 1 (básico): Dobrar valores númericos
//-------------------------------------------------------------

console.log("--- Exemplo 1: dobro de números (básico ---)");

const numeros = [1, 2, 3, 4, 5];

const dobrados =numeros.map((num) => {
    return num *2;
});

console.log("Original:", numeros);
console.log("Dobrados", dobrados);
console.log("\n");

//-------------------------------------------------------------
//Exemplo 2 (intermediária): Extração de propriedades em arrays
//de objetos.
//-------------------------------------------------------------
console.log("--- Exemplo 2: Extrair apenas os nomes (intermediário) ---");

const usuarios = [
    { id: 1, nome: "Ana Silva", idade: 22},
    { id: 2, nome: "Bruno Costa", idade: 17},
    { id: 3, nome: "Carlos Souza", idade: 22}
];

const apenasNomes = usuarios.map((usuarios) => usuario.nome);

console.log("Lista de nomes:", apenasNomes);
console.log("\n");

//-------------------------------------------------------------
//Exemplo 3 (Back-End-Real): Sanitização e formatação de DTO 
//para resposta API.
//-------------------------------------------------------------
console.log("--- Exemplo 3: DTO e Sanitização de dados de API (Back-End real)");
const produtosbanco = [
 {id: 101, none: "Teclado Mecânico RGB", preco: 250.0, estoque: 15, custointerno:120.0},
 { id: 102, none: "Mouse Gamer 16000 DPI", preco: 120.0, estoque: 0, custointerno: 50.0},
 { id: 103, none: "Monitor 144Hz IPS", preco: 1100.0, estoque: 8, custointerno: 700.0}
];

//Regra de Back-End: formatar preço para o cliente e omitir dados sensiveis (custo interno)
const respostaAPIpublica = produtosbanco.map((produto) => {
    return {
        id: produto.id,
        tirulo: produto.nome.toUpperCase(),
        precoformatado: `R$ ${produto.preco.toFixed(2)}`,
        disponivel: produto.estoque > 0
    };
});

console.log("Resposta de API (Sem custo interno): ");
console.log(respostaAPIpublica);
//Fim