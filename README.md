# budget-planner
The main goal is to implement a budget planner for myself, however with the structure to go-live for production level.
---
## First Step

**Database and relashionship**: The focus here is to analyze and think which structure of tables and relations will fit the best while guaranting good performance and low complexity.

I redesigned several times, created, performed rollbacks, and finally came to a version where i can start with.

**Tech Stack**: The project is a Typescript-based application that will have the following components:
- **Framework Principal**: Nest.js - Arquitetura modular, simples
- **ORM**: Prisma - Interação simples e eficiente com o DB
- **Testes e Integração**: Jest - Garantir confiabilidade e funcionamento de todas as partes da aplicação
- **Conteinerização**: Docker - Segregação de ambientes de Desenvolvimento e Produção
- **Autenticação**: JWT (JSON Web Tokens) - Para proteger os endpoints da API de forma segura e stateless.

## Regras de Negócio

O Usuário deve ser capaz de:
- Possuir uma conta privada e segura
- CRUD para transações passadas e atuais
- Adicionar tags para transações
- Gerar com facilidade relatórios envolvendo datas, tags, tipo de transação, valores, cartões, etc
- Criar e gerenciar cartões de crédito e configurar limite, data de fechamento e vencimento
- Lançar transações em cartões de crédito, podendo parcelar
- Criar e gerenciar metas financeiras pessoais
- Criar Caixinhas, onde será possível informar o dinheiro guardado para um objetivo específico
-   
