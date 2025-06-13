# budget-planner
The main goal is to implement a budget planner for myself, however with the structure to go-live for production level.
---

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

# Documento de Arquitetura e Desenvolvimento: Budget Planner

**Versão:** 1.1
**Data:** 13 de Junho de 2025

## 1. Visão Geral do Projeto

O **Budget Planner** é uma aplicação Full-Stack projetada para oferecer um controle financeiro pessoal completo e intuitivo. O projeto é composto por uma API de backend robusta e uma interface de frontend moderna e reativa. Embora seja um projeto pessoal, ele é desenvolvido seguindo as melhores práticas de mercado, com foco em escalabilidade, manutenibilidade e segurança, para que esteja pronto para um ambiente de produção.

## 2. Tecnologias (Tech Stack)

A stack foi escolhida para maximizar a produtividade, segurança e performance, utilizando um ecossistema coeso baseado em TypeScript.

#### **Backend (API)**
* **Framework:** **Nest.js** - Para uma arquitetura de servidor robusta, modular e escalável.
* **ORM:** **Prisma** - Para acesso ao banco de dados de forma segura, intuitiva e totalmente type-safe.
* **Banco de Dados:** **PostgreSQL** - Um banco de dados relacional poderoso e confiável.
* **Autenticação:** **JWT (JSON Web Tokens)** via Passport.js.
* **Mensageria e Filas:** **RabbitMQ** - Um message broker robusto e consagrado para comunicação assíncrona e processamento de tarefas em segundo plano.
* **Cache:** **Redis** - Para caching de alta performance de respostas e dados frequentemente acessados.

#### **Frontend (Aplicação Web)**
* **Ferramenta de Build:** **Vite** - Para um ambiente de desenvolvimento front-end extremamente rápido e moderno.
* **Framework:** **React** (ou Vue.js) - Para a construção de uma interface de usuário reativa e dinâmica (Single-Page Application).

#### **DevOps e Ferramentas**
* **Containerização:** **Docker** e **Docker Compose** - Para garantir um ambiente de desenvolvimento e produção consistente e isolado.
* **Testes:** **Jest** e **Supertest** - Para testes unitários, de integração e end-to-end da API.
* **CI/CD:** **GitHub Actions** - Para automação de testes e deploy contínuo.
* **Documentação da API:** **Swagger (OpenAPI)** - Integrado ao Nest.js para documentação interativa.
* **Monitoramento e Observabilidade:** **Grafana** em conjunto com **Prometheus** - Para criação de dashboards, visualização de métricas da aplicação e sistema de alertas.

## 3. Metodologia e Desenvolvimento

O projeto adota uma metodologia **Ágil** pessoal, visando flexibilidade, foco e progresso constante.

* **Framework Metodológico:** Um híbrido prático de **Kanban** e **Scrum**.
    * **Kanban Board (Visualização):** Um quadro no GitHub Projects (ou Trello) com as colunas: `Backlog` (todas as ideias), `To Do` (tarefas do ciclo atual), `In Progress` (tarefa atual) e `Done` (concluídas).
    * **Sprints (Ritmo):** Ciclos de trabalho de **1 semana** para manter o foco e a cadência. O planejamento ocorre no início da semana, e uma breve revisão/retrospectiva acontece no final.
    * **Gerenciamento de Tarefas:** As funcionalidades são descritas como **User Stories** no Backlog para manter o foco no valor para o usuário.

* **Ciclo de Vida:** Como desenvolvedor solo, todos os papéis (Product Manager, Arquiteto, Dev, QA, DevOps) são exercidos de forma cíclrica em cada Sprint, garantindo uma visão holística do produto.

## 4. Arquitetura do Projeto

A arquitetura foi desenhada para ser desacoplada, permitindo que o backend e o frontend evoluam de forma independente.

* **Arquitetura Geral:** Separação clara entre **Backend (API RESTful)** e **Frontend (Single-Page Application - SPA)**. A comunicação entre eles é feita via requisições HTTP, com o backend expondo os dados em formato JSON.

* **Arquitetura do Backend (API):**
    * **Padrão:** **Arquitetura em Camadas (Layered Architecture)**, promovida pelo Nest.js.
    * **Camadas:**
        1.  **Controller Layer:** Responsável por receber as requisições HTTP, validar os DTOs (Data Transfer Objects) e invocar os serviços.
        2.  **Service Layer:** O "cérebro" da aplicação. Contém toda a lógica de negócio (as **Regras de Negócio**), orquestra as operações e implementa os princípios do **DDD (Domain-Driven Design)**.
        3.  **Data Access Layer:** Responsável pela comunicação com o banco de dados, abstraída pelo **Prisma Client**.
    * **Princípios de Design:** O código é guiado pelos princípios **SOLID** para garantir alta coesão, baixo acoplamento e facilidade de manutenção. A **Injeção de Dependência** do Nest.js é utilizada extensivamente.

## 5. Estrutura de Pastas

A estrutura do projeto será organizada em um formato de monorepo, com pastas distintas para o backend e o frontend.
