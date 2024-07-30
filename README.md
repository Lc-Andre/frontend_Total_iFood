# Aplicação Total iFood

Esse projeto é uma ferramenta desenvolvida para auxiliar os usuários a monitorar seus gastos no Ifood. A aplicação fornece informações tais como: O total gasto em sua conta iFood, os restaurantes onde mais gastou, frequências em pedidos e as formas de pagamento mais utilizadas.

## Funcionalidades

- **Tela de Carregamento**: Uma tela de carregamento é exibida enquanto os dados são buscados da API.
- **Exibição de Gastos Totais**: O valor total gasto pelo usuário no período especificado é exibido, juntamente com a moeda utilizada.
- **Período de Gastos**: O período de tempo durante o qual os gastos foram calculados é mostrado.
- **Restaurantes Mais Gastos**: Os três restaurantes onde o usuário mais gastou são listados com o número de pedidos e o total gasto em cada um.
- **Restaurantes Mais Pedidos**: Os três restaurantes onde o usuário mais fez pedidos são listados com o número de pedidos e o total gasto em cada um.
- **Métodos de Pagamento**: O valor total gasto em cada método de pagamento é detalhado.

## Minha Contribuição

Como parte do desenvolvimento deste projeto, fui responsável pelo frontend e pela integração com o backend. As principais áreas de foco foram:

### 1. Interface de Usuário

Desenvolvi a interface de usuário utilizando HTML e CSS, garantindo que a aplicação seja intuitiva.

### 2. Tela de Carregamento

Implementei uma tela de carregamento que é exibida enquanto os dados são buscados da API. A tela de carregamento é suave e proporciona uma melhor experiência ao usuário, indicando que a aplicação está processando a solicitação.

### 3. Integração com a API

Desenvolvi a lógica para a integração com a API utilizando JavaScript. Isso inclui:

- Captura do token inserido pelo usuário.
- Envio de uma requisição `POST` para a API com o token.
- Tratamento da resposta da API e preenchimento da interface de usuário com os dados recebidos.
- Gerenciamento de erros e feedback visual para o usuário.

### 4. Atualização Dinâmica da Interface

Utilizando JavaScript, implementei a lógica para atualizar dinamicamente a interface com os dados obtidos da API. Isso inclui:

- Preenchimento de elementos HTML com os valores de gastos totais, período, restaurantes mais gastos/pedidos e métodos de pagamento.
- Garantia de que a interface se atualize de forma eficiente e mantenha uma aparência limpa e organizada.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da aplicação.
- **CSS3**: Estilização e layout responsivo.
- **JavaScript**: Lógica de integração com a API e manipulação do DOM.
- **Fetch API**: Requisições HTTP para o backend.

## Backend

O backend da aplicação foi desenvolvido em Python. Você pode acessar o repositório do backend no link abaixo:

- [Repositório do Backend](https://github.com/Ghust27/Total_iFood)

## Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório para o seu ambiente local:
    ```bash
    git clone https://github.com/Lc-Andre/frontend_Total_iFood.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd frontend_Total_iFood/public
    ```

3. Abra o arquivo `index.html` em um navegador web.

### Configuração do Backend

Para executar o backend, siga os passos descritos no repositório do backend [aqui](https://github.com/Ghust27/Total_iFood).

## Contribuições

Contribuições são bem-vindas! Se você tiver sugestões ou melhorias, sinta-se à vontade para abrir um `pull request` ou relatar um problema na seção de `issues`.

---
