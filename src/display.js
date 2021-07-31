const figlet = require("figlet");
const chalk = require("chalk");

module.exports = () => {
  figlet("Shadow Painel", (error, data) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(`${chalk.red(data)}
Desenvolvido por: ϟ ᴀʟᴅᴇʙᴀʀᴀɴ ϟ
Criador da Shadow: Zeromaker`);
    console.log(`
Escolha uma opção:

[1] - Consulta CNPJ [${chalk.red("OFF")}]
[2] - Consulta CPF [${chalk.red("OFF")}]
[3] - Consulta IP [${chalk.red("OFF")}]
[4] - Consulta Telefone [${chalk.red("OFF")}]
[5] - Consulta Placa de Veículo [${chalk.red("OFF")}]
[6] - Consulta CEP [${chalk.red("OFF")}]
[7] - Consulta Site [${chalk.red("OFF")}]
[8] - Rastrear Encomenda [${chalk.red("OFF")}]
[9] - Doar
[0] - Sair`);
  });
};
