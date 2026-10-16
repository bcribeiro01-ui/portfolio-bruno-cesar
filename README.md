# Bruno César — Portfólio profissional

Site estático em português brasileiro, com foco em .NET, backend, integrações e bancos de dados. HTML, CSS e JavaScript sem frameworks, fontes remotas, CDN, analytics ou dependências de produção.

## Executar localmente

Abra index.html no navegador ou execute na pasta do projeto:

    python -m http.server 8080 --bind 127.0.0.1

Acesse http://127.0.0.1:8080. O servidor atende apenas o computador local. Encerre com Ctrl+C.

## Estrutura

- index.html: conteúdo, navegação, SEO e Open Graph.
- styles.css: identidade visual, responsividade, temas e movimento reduzido.
- app.js: menu mobile, tema, seção ativa e ano.
- assets/favicon.svg: monograma vetorial original.
- .nojekyll: publicação estática direta no GitHub Pages.
- REVIEW.md: resultado da revisão local e limites da validação.

## Conteúdo e privacidade

O site utiliza somente o nome e as áreas de conhecimento fornecidas pelo titular, além do perfil GitHub público autorizado: https://github.com/bcribeiro01-ui.

Os cartões de projetos representam áreas de atuação, sem afirmar entregas reais. O exemplo visual de API é ilustrativo e usa dados fictícios; não existe endpoint operacional.

Não são apresentados tempo de experiência, empresas, cargos anteriores, clientes, certificações, métricas ou contatos pessoais. Não há formulário, integração com serviços externos, cookies ou rastreadores. A preferência de tema é armazenada localmente no navegador e não é enviada a servidores.

## Acessibilidade

HTML semântico, link para pular ao conteúdo, foco visível, navegação por teclado, menu com estado expandido, indicação de links em nova aba, descrição textual do diagrama e suporte a prefers-reduced-motion. Conteúdo e links permanecem disponíveis sem JavaScript.

## GitHub Pages

Todos os recursos usam caminhos relativos, compatíveis com publicação em subdiretório. Publicar a branch main, diretório raiz. Desenvolvimento na branch feature/portfolio-pessoal.

A publicação depende de aprovação explícita do titular. Antes dela, revisar arquivos, metadados, links, dados pessoais e histórico Git.

Depois de confirmar a URL pública, adicionar og:url, canonical e uma imagem social com URL absoluta. Esses campos foram omitidos enquanto o destino não existe, para evitar links inventados.

## Manutenção

Edite os textos em index.html e os tokens de cor no início de styles.css. Acrescente projetos reais somente com autorização para divulgar código, dados, imagens e links. Nunca inclua segredos em arquivos ou commits.
