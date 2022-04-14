# Librae

Trabalho final da matéria de Sistemas da Informação, com a professora Fernanda Lima. Universidade de Brasília (UnB), semestre 2021/2.

O trabalho se resume em um aplicativo mobile de aprendizado de Libras (Linguagem Brasileira de Sinais), ao estilo do "Duoliguo". Ou seja, o usuário aprenderá a se comunicar e praticará seu vocabulário dentro do aplicativo, com o intuito de aprender a língua e motivado pelo aspecto de gameficação, através de medalhas, pontos e indicadores de progresso.

O front foi feito em React-Native para execução nativa em celulares. Não há exatamente o backend bem definido, usamos armazenamento interno para guardar dados que normalmente iriam para um banco de dados.

## Como utilizar em produção

O Aplicativo foi compilado apenas para Android (cheque na aba de releases), mas o código é completamente compatível com IOS.

Para instalar no Android, basta baixar o binário e executá-lo no seu dispositivo.

## Como utilizar em desenvolvimento

Instale o **nodejs** e o **npm (node package manager)**.

Em seguida, usando o npm, instale o Expo CLI:

```bash
npm install -g expo-cli
```

Clone o projeto em uma pasta, entre na pasta e instale as dependências:

```bash
git clone https://github.com/ABMHub/Librae.git
cd Librae
npm install
```

Finalmente, rode o projeto no ambiente de desenvolvimento:

```bash
npm start
```

Para ver a execução do projeto, existem duas opções: utilizando o Android Studio ou Usando o Expo, que consegue simular o aplicativo diretamente no celular, sem a necessidade de build. As instruções aparecerão no terminal quando assim que o último comando for executado.
