# Configuração do TS

1. Inicar um projeto Node.js
    - No terminal:
        npm init // ou npm init -y (sim para tudo)
        = só dar enter em tudo.

2. Intalar o TypeScript
    2.1. Instalação global - Em toda a máquina. (Não é interessante para não dar conflito de versões em projetos.);
    Comando no terminal: 'npm install -g typescript'
    2.2 Instalação local - Só no projeto. Controle de versão.
    Comando no terminal: "npm install typescript -D" (dentro da pasta do projeto - O -D indica que é só para o desenvolvimento)

3.  "Rodar o TS", "Compilar" : Utilizar o TS instalado para transpilar o nosso código (converter o TS para JS)
No terminal: npx tsc "nome do arquivo.ts" // Após isso deve surgir um arquivo JS, do mesmo nome, no diretório.
    3.1 Para ficar atualizand constantemente:
        No terminal: npx tsc "nome do arquivo.ts --watch"

4. Configurar o TS
    No terminal: npx tsc --init (inicializa todas as config do TS no projeto)

    4.1 - Observar as seguintes configurações:
        target: ver a edição do JS.
        strict: deixar todos habilitados
        module: descomitar = "noEmitOnError": true,       