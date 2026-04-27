# Guia de Deploy na Hostinger

Seu projeto foi configurado e compilado com sucesso. Aqui estão os passos para publicar no seu plano da Hostinger.

## 1. Localize os arquivos
Os arquivos prontos para publicação estão na pasta `dist` dentro do seu projeto:
`d:\CLIENTES 2024\LP\Dr. Lucas Nemes\Modelar\Pronta Wordpress\imersao-aovivo-drlucasnemes\dist`

## 2. Acesse o Gerenciador de Arquivos da Hostinger
1. Faça login no painel da Hostinger.
2. Vá para **Files** > **File Manager** (Gerenciador de Arquivos).
3. Entre na pasta **public_html** (ou `public`, dependendo da configuração do seu servidor, mas geralmente é `public_html`).

## 3. Faça o Upload
1. Delete qualquer arquivo padrão que esteja na pasta (como `default.php` ou `index.php` vazio), se houver.
2. Abra a pasta `dist` no seu computador.
3. Arraste e solte **TODO o conteúdo** de dentro da pasta `dist` (a pasta `assets` e o arquivo `index.html`, etc.) para dentro da pasta `public_html` no navegador.

> **Importante:** Não suba a pasta `dist` em si, suba o **conteúdo** dela. No final, o arquivo `index.html` deve ficar diretamente dentro de `public_html`.

## 4. Teste
Acesse seu domínio. O site deve carregar corretamente.

## Observação Técnica
Eu ajustei o arquivo `vite.config.ts` adicionando `base: './'`. Isso garante que o site funcione mesmo se você o colocar em uma subpasta, e evita problemas comuns de caminhos quebrados na Hostinger.
