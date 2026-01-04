const readline = require("readline"); //chamada do módulo readline

const heroisXP = [
  "heroiA",
  "heroiB",
  "heroiC",
  "heroiD",
  "heroiE",
  "heroiF",
  "heroiG",
  "heroiH",
];
console.log();
console.log();
console.log("Classificador de Nivel de Heroi! \n");
console.log();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite seu nickname: ", (nomeJogador) => {
  console.log("------------------------------");
  console.log(`Bem vindo, ${nomeJogador}!`);
  console.log("------------------------------");
  console.log(
    "Escolha o seu herói e informe o XP para saber o nível e categoria!"
  );
  console.log("------------------------------");
  console.log(
    "Herois a escolher: heroiA, heroiB, heroiC, heroiD, heroiE, heroiF, heroiG, heroiH"
  );
  console.log("------------------------------");
  console.log("XP: Deve ser um número inteiro.");
  console.log("------------------------------\n");

  //solicita o nome do herói e o XP
  rl.question("Digite o nome do herói: ", (nome) => {
    for (let i = 0; i < heroisXP.length; i++) {
      if (nome === heroisXP[i]) {
        //console.log(`Herói ${nome} encontrado!`);
        break;
      } else if (i === heroisXP.length - 1) {
        console.log(`Herói ${nome} inexistente!`);
        console.log(`Execute o aplicativo novamente!`);
        rl.close();
        return;
      }
    }

    rl.question("Digite o XP do herói: ", (xpTexto) => {
      const xp = Number(xpTexto);
      console.log("------------------------------\n");

      if (isNaN(xp)) {
        console.log("XP inválido \n");
      } else {
        console.log("Herói: " + nome);
        console.log("XP: " + xp);
      }

      if (xp <= 1000) {
        console.log("Nivel: Iniciante");
        console.log("Categoria: Ferro \n");
      } else if (xp >= 1001 || xp <= 2000) {
        console.log("Nivel: Iniciante");
        console.log("Categoria: Bronze \n");
      } else if (xp >= 2001 || xp <= 5000) {
        console.log("Nivel: Iniciante");
        console.log("Categoria: Prata \n");
      } else if (xp >= 5001 || xp <= 7000) {
        console.log("Nivel: Iniciante");
        console.log("Categoria: Ouro \n");
      } else if (xp >= 7001 || xp <= 8000) {
        console.log("Nivel: Intermediario");
        console.log("Categoria: Platina \n");
      } else if (xp >= 8001 || xp <= 9000) {
        console.log("Nivel: Intermediario");
        console.log("Categoria: Ascendente \n");
      } else if (xp >= 9001 || xp <= 10000) {
        console.log("Nivel: Avancado");
        console.log("Categoria: Imortal \n");
      } else if (xp >= 10001) {
        console.log("Nivel: Avancado");
        console.log("Categoria: Radiante \n");
      }

      rl.close();
    });
  });
});
