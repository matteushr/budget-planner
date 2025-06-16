## Setting Up a NestJS Project

Here's how to quickly get a new NestJS project up and running:

1.  **Install the NestJS CLI:**
    First, install the command-line interface globally if you haven't already.
    ```bash
    npm i -g @nestjs/cli
    ```

2.  **Create a New Project:**
    Use the CLI to generate a new project. The `--strict` flag ensures a robust TypeScript configuration.
    ```bash
    nest new project-name --strict
    ```
    (Replace `project-name` with your desired project name.)

3.  **Customize (Optional Cleanup):**
    NestJS includes Jest, Prettier, and basic tests by default. If you want a barebones project:
    * Open `package.json` and **remove unwanted dependencies** from `devDependencies` and `dependencies` (e.g., `jest`, `prettier`).
    * **Delete related configuration files** (e.g., `jest.config.js`, `.prettierrc`) and test files (e.g., `src/*.spec.ts`).
    * Run `npm install` in your project's terminal to remove the unlisted dependencies.
        ```bash
        npm install
        ```

4.  **ESLint and Prettier Setup (Recommended):**
    To enforce code style and catch errors early, it's highly recommended to set up ESLint and integrate it with a powerful configuration like Rocketseat's:
    * **Install ESLint Config:** Add the ESLint config as a development dependency.
        ```bash
        npm i @rocketseat/eslint-config -D
        ```
    * **Create `.eslintrc.json`:** Create the file and add the following configuration. This adds the linter for Node.js and turns off (`no-useless-constructor`) that conflict with NestJS's dependency injection patterns.
        ```json
        {
          "extends": "@rocketseat/eslint-config/node",
          "rules": {
            "no-useless-constructor": "off"
          }
        }
        ```
    * **Create `.eslintignore`:** To prevent ESLint from checking generated or third-party code, add these directories:
        ```
        dist
        node_modules
        ```



5. Initialize Docker
    Create the file docket-compose.yml
    put the basic information such as services and then docker-compose up -d. Use docket-compose down if needed

6. Configure prisma

Run npm i prisma -D
then run npm i @prisma/client

after those two, lets initialize prisma with: npx prisma init
---

## Controller, Module e Service no NestJS

### 1. Controller

O **Controller** atua como a **porta de entrada** da sua aplicação. Sua principal função é **receber e gerenciar as requisições HTTP** que vêm de clientes externos e, após o processamento, **enviar a resposta** de volta ao usuário final. Ele é responsável pelo **roteamento**, mapeando URLs específicas para métodos específicos dentro da sua classe, e pela **extração dos dados** da requisição (parâmetros, corpo, headers). É fundamental lembrar que o Controller deve ser "magro"; ele **não deve conter a lógica de negócio principal**, mas sim delegá-la a outros componentes, como os Services.

---

### 2. Module

O **Module** é o **organizador estrutural** do NestJS. Ele é como um "bloco de construção" que agrupa e define um conjunto de funcionalidades relacionadas dentro da sua aplicação.

* Ele é definido com o decorator `@Module()`, que possui campos importantes:
    * `controllers`: Aqui você lista os **Controllers** que pertencem a este módulo.
    * `providers`: Este é o coração da **Injeção de Dependência** no NestJS. Você lista aqui todas as classes que podem ser "injetadas" em outras partes do seu módulo, como os **Services**.
    * `imports`: Usado para **importar outros Módulos** dos quais este módulo depende. Por exemplo, se seu módulo de pagamentos precisa de funcionalidades do módulo de usuários, você o importaria aqui.
    * `exports`: Usado para **exportar Providers** (como Services) para que outros módulos que o importam possam utilizá-los.

Basicamente, o que acontece é:

Quando um Controller (ou qualquer outro Provider) declara uma dependência em seu construtor, o **NestJS entende que precisa "fornecer" uma instância dessa dependência**. Ele procura essa dependência na lista de `providers` do módulo atual ou nos `providers` exportados por módulos importados. Se encontrada, o NestJS cria (ou reutiliza) uma instância dessa dependência e a "injetado" automaticamente no construtor. Isso é a **Injeção de Dependência** em ação, e é o que torna o NestJS tão poderoso e facilita a criação de código testável e modular.

No caso do `NestFactory.create()`, você sempre inicializa a aplicação passando o **módulo raiz** (geralmente `AppModule.ts`). Este módulo raiz é o ponto de entrada que, por sua vez, importa outros módulos, criando a árvore de dependências da sua aplicação.

---

### 3. Service

O **Service** (também conhecido como Provider) é onde a **lógica de negócio** e as operações complexas são encapsuladas. Diferente do Controller, o Service não lida diretamente com requisições HTTP. Sua responsabilidade é executar tarefas, manipular dados, interagir com bancos de dados, chamar APIs externas (como a da OKTO, Stripe, etc.), e fornecer funcionalidades que podem ser utilizadas por Controllers ou outros Services.

* Esta classe precisa receber o Decorator `@Injectable()` para que o NestJS saiba que ela pode ser **injetada** em outros componentes (como Controllers ou outros Services). É esse decorator que permite que o NestJS gerencie a criação e o ciclo de vida das instâncias do Service.

Em resumo, o **Controller** é a interface HTTP, o **Service** é a lógica de negócio, e o **Module** é o aglutinador que organiza, gerencia as dependências entre eles e estrutura sua aplicação. Essa separação clara de responsabilidades é a base para um código NestJS limpo, manutenível e escalável.