# Hospedin - Calculadora de Tarifário

Esta é uma aplicação frontend em React desenvolvida como solução para o Desafio Técnico da Hospedin. O objetivo principal é calcular o custo de uma estadia hoteleira baseado em regras de negócio pré-definidas, entregando uma interface limpa, dinâmica e pragmática.

## Como rodar o projeto

Este projeto utiliza **React**, **Vite** e **Tailwind CSS**. Siga os passos abaixo para rodar localmente:

1. **Clone o repositório:**
   git clone https://github.com/theuldev/Tariff-Calculator.git

2. **Instale as dependências:**
   npm install

3. **Inicie o servidor de desenvolvimento:**
   npm run dev

4. **Acesse a aplicação:**
   Abra no seu navegador o endereço fornecido no terminal (`http://localhost:5173`).


## Regras de Negócio Implementadas

A lógica central da aplicação (`src/utils/calculator.js`) calcula o valor total da reserva baseando-se nas seguintes regras:

1. **Acomodações Base:**
   *   **Suíte Jardim:** R$ 300/noite | Estadia mínima: 2 noites | Limite: 2 adultos | Limpeza: R$ 80
   *   **Chalé Família:** R$ 450/noite | Estadia mínima: 2 noites | Limite: 4 adultos | Limpeza: R$ 100
2. **Adultos Extras:** Se o número de adultos ultrapassar o limite da acomodação selecionada, é cobrada uma taxa de **R$ 50 adicionais por noite**, por adulto extra.
3. **Taxa de Fim de Semana:** Qualquer diária que caia num sábado ou domingo recebe um **acréscimo de 20%** sobre o valor base.
4. **Desconto de Estadia Longa:** Reservas estritamente maiores do que **7 noites** recebem um **desconto de 10%** sobre o valor total (diárias + taxas de adultos excedentes, antes da taxa de limpeza).
5. **Validações:** Impede o cálculo caso a data de Check-out seja menor ou igual à data de Check-in, ou se a quantidade mínima de noites da acomodação não for respeitada.


## Decisões Técnicas e Trade-offs

*   **Isolamento da Regra de Negócios:** 
    A função `calculateTarifario` não tem qualquer dependência do React ou do DOM. Ela é uma função pura (Pura no escopo do negócio) localizada em `/utils`, facilitando enormemente a criação de testes unitários no futuro.
*   **Gerenciamento de Estado (Lifting State Up):** 
    O escopo da aplicação não exigia o uso de bibliotecas de estado complexas (Redux, Context API). Optei por elevar o estado (`calculationResult`, `alertMessage`) para o componente pai (`App.jsx`), que o distribui de forma clara para os formulários e cards de resultado usando propriedades ("prop drilling" simples).
*   **Componentização e SRP (Single Responsibility Principle):**
    Quebrei o frontend em múltiplos componentes menores (`Button.jsx`, `Alert.jsx`, `ResultRow.jsx`), evitando a criação de "Deus-Componentes". Isso deixa o código do formulário principal limpo e focado em orquestrar os dados.
*   **Utilização de biblioteca externa (Datepicker):**
    Foi decidido  **não usar o input nativo de data** (`<input type="date">`), que costuma ter comportamento inconsistente entre Safari, Chrome e Firefox, além de ser ruim visualmente. Abracei um pequeno trade-off de *bundle size* adicionando `react-datepicker` e `date-fns`.
*   **Tratamento de Erros:**
    Substituí o `alert()` obstrusivo nativo do navegador por um sistema próprio e suave de **Toasts** customizados.

