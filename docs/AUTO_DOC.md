**Visão Geral**
- Repositório central de provas técnicas do Medgrupo para candidatos de Front-end (UI/UX, Júnior e Pleno) em diferentes edições e formatos.
- Cada prova fica publicada em uma branch específica com instruções próprias, materiais de referência e critérios de avaliação.
- Fluxo padrão: o candidato faz fork, executa a prova de acordo com o nível/branch, e submete via Pull Request (ou envia `.zip` por e-mail quando indicado).

**Branches Principais**
- `Prova-Front-2022` — Prova Front-end UI/UX (estagiário, júnior, pleno). Ênfase em HTML semântico, CSS/SCSS, acessibilidade, BEM, componentização e estados com JS/TS. Links de material em imagens PNG.
- `UI/UX` — Prova Front-end UI/UX com layout no Figma, troca de tema, responsividade, estados, e (para níveis mais altos) Storybook, Angular/Stencil/React/Vue/Ionic/React Native. Sem frameworks de CSS.
- `front`, `front-v2.0`, `front-v3.0`, `FrontJR`, `frontJR-v2.0` — Provas Front-end voltadas para reprodução fiel de layout, responsividade e animações, com variações de prazo, escopo e critérios.
- `back-front`, `back-front-junior` — Provas com foco em JavaScript (organização em camadas, boas práticas, Angular Styleguide), mantendo deploy em `dist`.

**Propósito e Escopo**
- Avaliar competências práticas de desenvolvimento de interfaces a partir de layouts (prints ou Figma), priorizando fidelidade visual, organização de código, acessibilidade e componentização.
- Verificar domínio de ferramentas e padrões modernos de front-end (SCSS/Styled Components, BEM, Storybook), além de frameworks/libs quando aplicável (Angular, Stencil, React, Vue, Ionic).
- Validar capacidade de estruturar projeto, seguir boas práticas (lint, semântica, SEO básico), criar animações e gerenciar estados de componentes.

**Regras de Negócio (Submissão e Prazos)**
- Fork do repositório, desenvolvimento na sua cópia, e submissão via Pull Request; quando não for possível, envio do projeto em `.zip` por e-mail.
- Prazos variam por nível/branch: indicados nos READMEs da branch (ex.: `Prova-Front-2022` — 3/4/5 dias conforme nível; `UI/UX` — 4 dias; outras variações em `front-*`).
- Fidelidade ao layout obrigatório; observância das restrições e permissões de cada prova (ex.: não usar frameworks CSS na branch `UI/UX`).
- Em provas que pedem, manter artefatos minificados e não minificados; quando indicado, publicar build na pasta `dist`.

**Tecnologias e Competências**
- Marcação e estilo: HTML semântico, CSS, SCSS, Styled Components, Metodologia BEM, responsividade (breakpoints definidos nas instruções das branches `front-*`).
- Lógica/estados: JavaScript e/ou TypeScript para estados de componentes, navegação, modais, menus e trocas de tema.
- Frameworks/libs (quando solicitado): Angular, Stencil, React, Vue, Ionic, React Native; Storybook para documentação de componentes; animações com CSS, GreenSock (GSAP) ou Ionic Animations.
- Boas práticas: acessibilidade, SEO básico, organização por componentes, linting, estrutura de camadas (service/controller etc. quando aplicável), commit de versões minificadas e não minificadas.

**Padrões Arquiteturais**
- Componentização: isolar componentes visuais e seus estilos; em SCSS/Styled Components, manter coesão e reutilização.
- BEM: usar blocos, elementos e modificadores para previsibilidade e baixo acoplamento de estilos.
- Camadas (quando aplicável): separar responsabilidades (ex.: service/controller) para evitar inflar uma única camada de lógica.
- Documentação e DX: quando exigido, documentar componentes no Storybook; aplicar linting e convenções (ex.: Angular Styleguide em branches específicas).

**Acessibilidade e UX**
- Fornecer HTML semântico, foco gerenciável, contraste suficiente e navegação por teclado.
- Descrever interação de elementos dinâmicos (modais, navegação retraída/expandida) com ARIA apropriado.
- Manter responsividade de acordo com instruções de cada prova e tratar estados desabilitados/com carregamento.

**Materiais e Assets (Exemplos de Referência)**
- `Prova-Front-2022`: Estagiário/Junior/Pleno com imagens de referência (estagiario.png, junior.png, pleno.png).
- `UI/UX`: Layout no Figma e fluxos definidos (paths Verde/Laranja/Azul) para modais e navegação; troca de tema com paleta definida.
- `front`, `front-v2.0`, `front-v3.0`, `FrontJR`, `frontJR-v2.0`: Links para pacotes zip com layouts, listas de breakpoints e tarefas de animação/scroll.

**Banco de Dados**
- Provas são focadas em front-end e não exigem banco de dados. Quando frameworks são solicitados (Angular/Stencil/React/Vue/Ionic), o consumo de dados é simulado por JSON/material fornecido.

**Setup e Execução (Guia Genérico)**
- Fork o repositório e crie uma branch com seu nome na sua cópia.
- Siga o README da branch da prova escolhida. Para bases com tooling (ex.: Angular/Stencil/React/Vue/Ionic), use o gerenciador de pacotes e scripts padrão do framework.
- Quando exigido: gerar build e publicar em `dist`; manter arquivos minificados e não minificados sob controle de versão.
- Não utilize frameworks de CSS onde for explicitamente proibido (ex.: branch `UI/UX`).

**Estrutura de Pastas Sugerida**
- `src/` — código-fonte organizado por componentes/módulos.
- `src/styles/` — SCSS/Styled Components (ou CSS) por componente e utilidades (cores, mixins, variáveis).
- `assets/` — imagens, fontes e ícones.
- `dist/` — artefatos de build quando solicitado.
- `storybook/` — configuração e stories quando requerido.

**Critérios de Avaliação (Consolidados)**
- Fidelidade ao layout e responsividade; execução dos fluxos requeridos.
- Organização, componentização, legibilidade e consistência (BEM, arquitetura de estilos e de TS/JS).
- Acessibilidade, semântica e boas práticas (SEO básico, linting, DX).
- Qualidade de animações e transições; estados funcionais (modais, menus, filtros, trocas de tema).
- Aderência às restrições/permissões e entrega dentro do prazo; build/processo quando solicitado.

**Mapeamento de Branches e Instruções**
- `Prova-Front-2022` — README com instruções e materiais por nível: https://github.com/MEDGRUPOGIT/Medgrupo-Desenv-Provas/tree/Prova-Front-2022
- `UI/UX` — README com Figma, fluxos e critérios: https://github.com/MEDGRUPOGIT/Medgrupo-Desenv-Provas/tree/UI/UX
- `front` — README com regras, breakpoints e material: https://github.com/MEDGRUPOGIT/Medgrupo-Desenv-Provas/tree/front
- `front-v2.0` — README com variação de prazo/escopo: https://github.com/MEDGRUPOGIT/Medgrupo-Desenv-Provas/tree/front-v2.0
- `front-v3.0` — README detalhado com múltiplas telas/fluxos: https://github.com/MEDGRUPOGIT/Medgrupo-Desenv-Provas/tree/front-v3.0
- `FrontJR` e `frontJR-v2.0` — READMEs para Júnior/Estagiário: https://github.com/MEDGRUPOGIT/Medgrupo-Desenv-Provas/tree/FrontJR | https://github.com/MEDGRUPOGIT/Medgrupo-Desenv-Provas/tree/frontJR-v2.0
- `back-front` e `back-front-junior` — READMEs com foco JS/camadas: https://github.com/MEDGRUPOGIT/Medgrupo-Desenv-Provas/tree/back-front | https://github.com/MEDGRUPOGIT/Medgrupo-Desenv-Provas/tree/back-front-junior

**Dicas para Manutenção**
- Atualizar READMEs nas branches quando adicionarem/alterarem materiais, prazos ou critérios.
- Manter convenções de nome de branch coerentes (`front-*`, `UI/UX`, `Prova-Front-*`) e evitar mudanças retrógradas.
- Incluir links válidos para Figma/ZIPs e revisar periodicamente acessibilidade dos materiais.
- Quando novas provas exigirem tooling, registrar versões mínimas de Node/PNPM/NPM/Yarn e scripts de build/test/storybook no README da branch.

**Notas Importantes**
- Este documento consolida as instruções públicas encontradas nos READMEs das branches remotas do repositório.
- Como a branch `master` contém apenas um apontamento para uma prova específica, sempre consulte o README da branch da prova que você irá realizar/manter.

