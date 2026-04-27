# Guia de Deploy na Vercel

Este guia irá ajudá-lo a publicar seu projeto React + Vite na Vercel.

## 1. Pré-requisitos
- Uma conta na [Vercel](https://vercel.com).
- Seu projeto enviado para o GitHub, GitLab ou Bitbucket (Recomendado).

## 2. Deploy via Interface da Vercel (Recomendado)

O método mais fácil é conectar seu repositório Git à Vercel.

1.  Acesse o [Dashboard da Vercel](https://vercel.com/dashboard) e clique em **"Add New..."** > **"Project"**.
2.  Importe o repositório Git onde este projeto está hospedado.
3.  Na tela "Configure Project":
    -   **Framework Preset**: A Vercel deve detectar automaticamente como **Vite**. Se não, selecione "Vite".
    -   **Root Directory**: Se o seu projeto não estiver na raiz do repositório, clique em "Edit" e selecione a pasta `imersao-aovivo-drlucasnemes` (ou a pasta onde está o `package.json`).
    -   **Build and Output Settings**: Deixe os padrões (`npm run build` e `dist`).
    -   **Environment Variables**:
        -   Adicione a variável `GEMINI_API_KEY` com o valor da sua chave de API.
        -   Adicione qualquer outra variável que esteja no seu `.env`.

4.  Clique em **Deploy**.

## 3. Deploy via Vercel CLI (Opcional)

Se preferir fazer o deploy direto do seu computador via terminal:

1.  Instale a Vercel CLI globalmente (se ainda não tiver):
    ```bash
    npm i -g vercel
    ```
2.  Faça login na Vercel via terminal:
    ```bash
    vercel login
    ```
3.  Na pasta do projeto, execute:
    ```bash
    vercel
    ```
4.  Siga as instruções no terminal.
    -   Set up and deploy? [Y/n] **y**
    -   Which scope do you want to deploy to? (Selecione sua conta)
    -   Link to existing project? [N/y] **n** (ou y se já tiver criado)
    -   What’s your project’s name? (Dê um nome ou aceite o padrão)
    -   In which directory is your code located? **./**
    -   Want to modify these settings? [y/N] **n**

5.  **Importante**: Para configurar as variáveis de ambiente via CLI ou dashboard após o primeiro deploy (que pode falhar se depender delas no build):
    -   Vá ao painel da Vercel > Settings > Environment Variables.
    -   Adicione `GEMINI_API_KEY`.
    -   Redeploy se necessário.

6.  Para deploy em produção (após testar):
    ```bash
    vercel --prod
    ```

## Observações Importantes

-   **Arquivo `vercel.json`**: Adicionei um arquivo `vercel.json` na raiz para garantir que, se você usar rotas no futuro (ex: `/sobre`, `/contato`), a Vercel redirecione tudo para o `index.html` (comportamento de SPA - Single Page Application).
-   **Vite Config**: O `vite.config.ts` está configurado com `base: './'`. Isso geralmente funciona bem, mas se você notar problemas com imagens ou rotas na Vercel, pode ser necessário mudar para `base: '/'`. Por enquanto, mantenha como está.
