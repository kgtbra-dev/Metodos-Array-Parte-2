
console.log("===  EXEMPLOS COM filter()  ===\n");

//-------------------------------------------------------------
//Exemplo 1 (básico): filtrar maiores de idade (> 18)
//-------------------------------------------------------------
console.log("--- Exemplo 1: Filtrar maiores de idade (básico) ---");

const idades = [12, 17, 18, 21, 14, 30, 25];

//Mnatém apenas as idades maiores ou iguais a 18
const maioresdeIdade =idades.filter((idades) => {
    return idades >= 18;
});

console.log("Todas as idades:", idades);
console.log("Apenas os maiores de idade:", maioresdeIdade);
console.log("\n");

//-------------------------------------------------------------
//Exemplo 2 (intermediário): filtrar usuários ativos
//-------------------------------------------------------------
console.log("--- Exemplo 2: filtrar cadastros ativos (intermediário) ---");
const usuarios = [
    { id: 1, nome: "ana", ativo: true},
    { id: 2, nome: "bruno", ativo: false},
    { id: 3, nome: "carlos", ativo: true},
    { id: 4, nome: "diana", ativo: false},
];

const usuariosAtivos = usuarios.filter((usuarios) => usuarios.ativo);

console.log("Usuários Ativos no sistema:", usuariosAtivos);
console.log("\n");

//-------------------------------------------------------------
//Exemplo 3 (Back-End real): filtro de produtos por estoque e 
//categoria (GET /produtos? categoria-...)
//-------------------------------------------------------------
console.log("--- Exemplo 3: Endpoint de vitrine com produtos em estoque (Back-End real) ---");
 const catalogo = [
    { id: 101, nome: "Teclado Mecânico", categoria: "Periféricos", preco: 250.0, estoque: 12, ativo: true},
    { id: 102, nome: "Mouse Gamer", categoria: "Periféricos", preco: 120.0, estoque: 0, ativo: true},
    { id: 103, nome: "Monitor 144Hz ", categoria: "Monitores", preco: 1100.0, estoque: 5, ativo: true},
    { id: 104, nome: "Headset USB", categoria: "Periféricos", preco: 180.0, estoque: 8, ativo: true},
    { id: 105, nome: "Cabo HDMI", categoria: "Acessórios", preco: 30.0, estoque: 0, ativo: false}
 ];

 //Regra de Negócio: Listar somente periféricos que estejam ativos e tenham unidades em estoque
 const perifericosDisponiveis = catalogo.filter((item) => {
    return item.categoria === "Periféricos" && item.ativo && item.estoque > 0;
 });

 console.log("Periféricos Disponieis pra venda:");
 console.log(perifericosDisponiveis);