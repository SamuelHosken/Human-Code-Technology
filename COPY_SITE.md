# Human Code Technology - Copy Revisado v2

---

## 1. HERO

**Tag:** `[SYS:ACTIVE]` (com indicador pulsante)

**Titulo principal** (revela linha por linha com barra branca):
> **Sua operação** *não foi feita* para depender de **processos manuais.**

**Descricao:**
> Somos a **engenharia por trás da automação** que grandes
> empresas precisam para **operar no ritmo do mercado**.
> Do diagnóstico à execução. **Sem atalhos. Sem improvisos.**

### Visual
```
┌─────────────────────────────────────────────────────────────────┐
│  ● SYS:ACTIVE                                                   │
│                                                                  │
│  Sua operação                   ┌──┬──┬──┬──┐                   │
│  não foi feita                  │01│02│03│04│  ← grid 4x10      │
│  para depender de               │05│06│07│08│    com dados       │
│  processos manuais.             │09│10│11│12│    atualizando     │
│                                 │..│..│..│..│    aleatoriamente  │
│  Somos a engenharia por trás    └──┴──┴──┴──┘                   │
│  da automação que grandes...                                     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```
- **Fundo:** preto (#000)
- **Texto:** bege claro (#f5f0e8)
- **Grid direito:** celulas estilo terminal com codigos (001-012) que atualizam a cada 600ms
- **Animacoes:** texto revela com barra branca da esquerda pra direita, grid pisca em azul

---

## 2. CARROSSEL DE LOGOS

**Visual:**
```
┌─────────────────────────────────────────────────────────────────┐
│ ░░░  [logo1]  [logo2]  [logo3]  [logo4]  [logo5]  →→→    ░░░  │
└─────────────────────────────────────────────────────────────────┘
```
- 17 logos em escala de cinza rolando horizontalmente
- Blur nas bordas esquerda/direita
- Velocidade lenta e continua

---

## 3. TRANSICAO (Hero → About)

**Visual:**
```
┌─────────────────────────────────────────────────────────────────┐
│  ┌──                     0x4A  1010              ──┐            │
│  │                                                  │           │
│  │           ┌─────────────────┐                    │           │
│  │           │ SYS:ABOUT  ● _  │                    │           │
│  │           └─────────────────┘                    │           │
│  │                   ↓                              │           │
│  └──             0xFF  0011                    ──┘             │
└─────────────────────────────────────────────────────────────────┘
```
- Codigos hexadecimais flutuantes
- Caixa terminal centralizada com cursor piscando
- Seta animada apontando para baixo
- Linhas decorativas nas laterais
- **Apenas desktop** (oculto no mobile)

---

## 4. QUEM SOMOS (About)

**Tag:** `[SYS:ABOUT]`

**Titulo:** O que é a **Human Code** ?

**Descricao:**
> A **Human Code Technology** (HCT) é uma empresa de **automação corporativa e inteligência artificial** que atua na reestruturação de operações em empresas de médio e grande porte. Combinamos **domínio tecnológico de ponta** com conhecimento profundo de processos para entregar **soluções que funcionam na escala que o negócio exige**.

**Grid de informacoes:**
| Codigo | Area |
|--------|------|
| 001 | Automação Corporativa |
| 002 | Inteligência Artificial |
| 003 | Engenharia de Processos |
| 004 | Execução Técnica |

**Citacao:**
> *"Se a tecnologia existe, nós implementamos. Se o processo pode ser melhor, nós redesenhamos."*

### Visual (Desktop - Scroll Pinned)
```
FASE 1 (centralizado, grande):
┌─────────────────────────────────────────────────────────────────┐
│                                                                  │
│              O que é a Human Code ?                              │
│              (titulo grande, centralizado)                        │
│                                                                  │
│                         ↓                                        │
└─────────────────────────────────────────────────────────────────┘

FASE 2+ (layout normal, 2 colunas):
┌─────────────────────────────────┬───────────────────────────────┐
│  [SYS:ABOUT]                    │  ┌─────────────────────────┐  │
│                                  │  │ 001  Automação Corp.    │  │
│  O que é a Human Code ?          │  │ 002  Inteligência IA    │  │
│                                  │  │ 003  Eng. de Processos  │  │
│  A Human Code Technology (HCT)   │  │ 004  Execução Técnica   │  │
│  é uma empresa de automação...   │  └─────────────────────────┘  │
│                                  │                               │
│                                  │  ┌─────────────────────────┐  │
│                                  │  │ "Se a tecnologia existe │  │
│                                  │  │  nós implementamos..."  │  │
│                                  │  └─────────────────────────┘  │
└─────────────────────────────────┴───────────────────────────────┘
```
- **Desktop:** seção fixa (sticky) com 350vh, animação controlada por scroll em 5 fases
- **Mobile:** layout linear com IntersectionObserver
- Titulo com animacao de barra branca (fase 1) e blur/fade (fase 2)

---

## 5. SERVICOS

**Tag:** `[SYS:SERVICES]`

**Titulo:** Nossas **frentes** de *atuação*

| Codigo | Servico | Descricao |
|--------|---------|-----------|
| SRV-01 | Automação de Operações | Redesenho e automação completa de processos internos — do fluxo manual à operação autônoma. |
| SRV-02 | Inteligência Artificial Aplicada | Agentes inteligentes, modelos de linguagem e assistentes de IA integrados ao contexto real do negócio. |
| SRV-03 | Desenvolvimento Sob Medida | Plataformas, sistemas e integrações construídas do zero para desafios que soluções prontas não resolvem. |
| SRV-04 | Consultoria Técnica para Lideranças | Apoio direto a CEOs, CTOs e conselhos na tomada de decisões tecnológicas de alto impacto. |
| SRV-05 | Arquitetura de Fluxos | Eliminação de gargalos invisíveis no tráfego de informações e tarefas entre equipes e sistemas. |
| SRV-06 | Sustentação e Evolução Contínua | Monitoramento ativo, otimizações de performance e evolução técnica das soluções em produção. |
| SRV-07 | Orquestração de Ecossistemas | Unificação de múltiplas ferramentas e plataformas em uma infraestrutura integrada e governável. |
| SRV-08 | Painéis e Inteligência de Dados | Dashboards em tempo real com indicadores operacionais e estratégicos para decisão imediata. |

### Visual
```
Desktop (painel glass fixo, muda com scroll):
┌─────────────────────────────────────────────────────────────────┐
│  ╔═══════════════════════════════════════════════════════════╗   │
│  ║  Nossas frentes       SRV-03                  ● ● ◉ ●   ║   │
│  ║  de atuação           DESENVOLVIMENTO SOB MEDIDA         ║   │
│  ║                       Plataformas, sistemas e            ║   │
│  ║                       integrações construídas do zero    ║   │
│  ║                       para desafios que soluções         ║   │
│  ║                       prontas não resolvem.              ║   │
│  ║                                          ●●●○○○○○       ║   │
│  ╚═══════════════════════════════════════════════════════════╝   │
└─────────────────────────────────────────────────────────────────┘
```
- **Desktop:** painel com efeito liquid glass (backdrop blur), servicos mudam com scroll
- **Mobile:** carrossel horizontal com indicadores de progresso
- Barra de progresso no fundo

---

## 6. METRICAS

**Tag:** `[SYS:METRICS]`

**Titulo:** O que já *entregamos*

| Valor | Descricao |
|-------|-----------|
| 2.4M+ | Tarefas automatizadas por mês em operações ativas |
| 40% | Redução média de custo operacional nos primeiros 90 dias |
| R$12M+ | Em economia gerada para nossos clientes |
| 99.8% | Uptime médio das soluções em produção |

### Visual
```
┌───────────────┬───────────────┬───────────────┬───────────────┐
│               │               │               │               │
│   2.4M+       │     40%       │   R$12M+      │   99.8%       │
│   Tarefas     │  Redução de   │  Economia     │   Uptime      │
│ automatizadas │ custo em      │  gerada para  │  médio em     │
│   por mês     │ 90 dias       │  clientes     │  produção     │
│               │               │               │               │
└───────────────┴───────────────┴───────────────┴───────────────┘
```
- **Fundo:** branco (#fff)
- **MagicCard:** efeito spotlight azul segue o mouse
- **Hover:** numero conta de 0 ate o valor, escala +10%, fica azul
- Grid 4 colunas (2 no mobile)

---

## 7. PARA QUEM ATUAMOS

**Tag:** `[SYS:AUDIENCE]`

**Titulo:** Para **quem** *atuamos*

**Descricao:**
> Atendemos **organizações que operam em escala** e precisam de parceiros técnicos à altura da complexidade dos seus processos.

| Codigo | Industria | Descricao |
|--------|-----------|-----------|
| IND-01 | Indústria | Manufatura, logística e supply chain |
| IND-02 | Serviços Financeiros | Bancos, fintechs e gestoras |
| IND-03 | Saúde | Hospitais, clínicas e healthtechs |
| IND-04 | Varejo | E-commerce e redes de lojas |
| IND-05 | Energia | Utilities e renováveis |
| IND-06 | Educação | Instituições e edtechs |

**Rodape da secao:** EMPRESAS DE MÉDIO E GRANDE PORTE

### Visual
```
┌─────────────────────────────────┬───────────────────────────────┐
│  [SYS:AUDIENCE]                 │  ┌───────────┬───────────┐    │
│                                  │  │ IND-01    │ IND-02    │    │
│  Para quem atuamos               │  │ Indústria │ Financeiro│    │
│                                  │  ├───────────┼───────────┤    │
│  Atendemos organizações          │  │ IND-03    │ IND-04    │    │
│  que operam em escala e          │  │ Saúde     │ Varejo    │    │
│  precisam de parceiros           │  ├───────────┼───────────┤    │
│  técnicos à altura...            │  │ IND-05    │ IND-06    │    │
│                                  │  │ Energia   │ Educação  │    │
│                                  │  └───────────┴───────────┘    │
│         ── EMPRESAS DE MÉDIO E GRANDE PORTE ──                   │
└─────────────────────────────────┴───────────────────────────────┘
```
- **Fundo:** cinza claro (#f8f8f8)
- Grid 2 colunas no lado direito

---

## 8. VISAO

**Tag:** `[SYS:VISION]`

**Titulo:** O mercado *acelera*. **Sua operação acompanha?**

**Descricao:**
> Empresas que ainda dependem de processos manuais e sistemas desconectados estão perdendo margem, velocidade e capacidade de competir. Não é uma questão de "se" — é de **quando**.
>
> Existimos para garantir que, quando esse momento chegar, sua empresa já esteja **operando à frente**.

**Terminal (lado direito):**
```
┌──────────────────────────┐
│ ● mission.log            │  ← BorderBeam azul
│                          │     percorrendo a borda
│ > antecipação            │
│ > infraestrutura         │
│ > precisão               │
│ > escala                 │
│ > domínio                │
│ > _                      │  ← cursor piscando
└──────────────────────────┘
```

### Visual
```
┌─────────────────────────────────┬───────────────────────────────┐
│  [SYS:VISION]                   │  ┌──────────────────────────┐ │
│                                  │  │ ● mission.log           │ │
│  O mercado acelera.              │  │ > antecipação           │ │
│  Sua operação acompanha?         │  │ > infraestrutura        │ │
│                                  │  │ > precisão              │ │
│  Empresas que ainda dependem...  │  │ > escala                │ │
│                                  │  │ > domínio               │ │
│  Existimos para garantir que...  │  │ > _                     │ │
│                                  │  └──────────────────────────┘ │
└─────────────────────────────────┴───────────────────────────────┘
```
- **Fundo:** preto (#000)
- **BorderBeam** no terminal com feixe azul (#0066FF)

---

## 9. METODOLOGIA

**Tag:** `[SYS:METHOD]`

**Titulo:** Como **operamos**

**Descricao:**
> Cada projeto segue uma **metodologia própria em quatro fases**, construída para eliminar incertezas e entregar resultados desde o primeiro ciclo.

| Fase | Titulo | Descricao |
|------|--------|-----------|
| 01 | Diagnóstico | Imersão na operação: processos, sistemas, dependências, gargalos e oportunidades mapeados em detalhe. |
| 02 | Arquitetura | Projeto técnico completo da solução — tecnologias, integrações, cronograma e critérios de sucesso definidos antes da primeira linha de código. |
| 03 | Execução | Desenvolvimento em ciclos curtos com entregas parciais, validações reais e ajustes controlados. |
| 04 | Operação | Implantação assistida, treinamento das equipes, documentação completa e sustentação ativa da solução. |

### Visual
```
Desktop (grid 4 colunas com MagicCard):
┌──────────────┬──────────────┬──────────────┬──────────────┐
│ 01 ────────  │ 02 ────────  │ 03 ────────  │ 04 ────────  │
│              │              │              │              │
│ Diagnóstico  │ Arquitetura  │ Execução     │ Operação     │
│              │              │              │              │
│ Imersão na   │ Projeto      │ Desenvolvimento│ Implantação │
│ operação...  │ técnico...   │ em ciclos...   │ assistida..│
└──────────────┴──────────────┴──────────────┴──────────────┘

Mobile (timeline vertical):
  ●─── 01 Diagnóstico
  │    Imersão na operação...
  │
  ●─── 02 Arquitetura
  │    Projeto técnico...
  │
  ●─── 03 Execução
  │    Desenvolvimento em ciclos...
  │
  ●─── 04 Operação
       Implantação assistida...

  ● CICLO CONTÍNUO
```
- **Desktop:** MagicCard com spotlight azul no hover
- **Mobile:** timeline vertical com circulos indicadores

---

## 10. COMPROMISSO

**Tag:** `[SYS:COMMITMENT]`

**Titulo:** Nosso *compromisso*

**Descricao:**
> Quando uma empresa confia a operação a um parceiro externo, precisa ter **garantias concretas** — não discurso. É assim que trabalhamos.

| Codigo | Principio | Descricao |
|--------|-----------|-----------|
| PRC-01 | Independência total | Sua operação nunca fica refém da HCT. Sistemas, dados e código são seus — sempre. |
| PRC-02 | Documentação técnica completa | Cada projeto é entregue com documentação que permite a qualquer equipe técnica dar continuidade. |
| PRC-03 | Resultados com prazo | KPIs definidos antes da execução, acompanhados em tempo real e reportados até a estabilização. |
| PRC-04 | Sustentação ativa | Pós-implantação com monitoramento contínuo, correções proativas e ciclos de evolução. |

**Citacao:**
> Não apresentamos promessas. **Apresentamos escopo, prazo e resultado** — e entregamos os três.

### Visual
```
┌─────────────────────────────────┬───────────────────────────────┐
│  [SYS:COMMITMENT]               │  ┌───────────────────────────┐│
│                                  │  │ ● PRC-01                 ││
│  Nosso compromisso               │  │   Independência total    ││
│                                  │  ├───────────────────────────┤│
│  Quando uma empresa confia       │  │ ● PRC-02                 ││
│  a operação a um parceiro        │  │   Documentação completa  ││
│  externo, precisa ter            │  ├───────────────────────────┤│
│  garantias concretas...          │  │ ● PRC-03                 ││
│                                  │  │   Resultados com prazo   ││
│                                  │  ├───────────────────────────┤│
│                                  │  │ ● PRC-04                 ││
│                                  │  │   Sustentação ativa      ││
│                                  │  └───────────────────────────┘│
│                                                                   │
│  ┌───────────────────────────────────────────────────────────┐   │
│  │ "Não apresentamos promessas. Apresentamos escopo,         │   │
│  │  prazo e resultado — e entregamos os três."               │   │
│  └───────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```
- **Fundo:** preto (#000)
- Indicadores pulsantes em cada principio

---

## 11. TECNOLOGIAS

**Tag:** `[SYS:MODELS]`

**Titulo:** **Modelos** e **tecnologias** que *dominamos*

**135 tecnologias em 15 categorias:**

- **IA:** GPT-4o, Claude Opus, Gemini Pro, Llama 3.1, Mistral, DeepSeek, Grok 2, Qwen 2.5, OpenAI o1, Perplexity, Claude Sonnet, Whisper, DALL-E 3, Stable Diffusion, Midjourney API
- **Linguagens:** Python, TypeScript, JavaScript, Go, Rust, SQL, GraphQL, Swift, Java, C#
- **Frameworks:** React, Next.js, Node.js, FastAPI, Django, TailwindCSS, Express, NestJS, Spring Boot, Flask
- **Automacao:** n8n, Make, Zapier, Pipedream, Activepieces, Power Automate, Selenium, Playwright, Retool, Appsmith, Temporal, RPA UiPath
- **Cloud:** AWS, Vercel, GCP, Azure, Docker, Kubernetes, Supabase, Firebase, Railway, Render
- **ML/IA:** Fine-tuning, RAG, Embeddings, LangChain, Vector DB, Prompt Eng, Agents, Workflows, CrewAI, AutoGen, Hugging Face, OpenRouter, Replicate
- **Bancos de dados:** PostgreSQL, MongoDB, Redis, Pinecone, Weaviate, Qdrant, MySQL, DynamoDB
- **APIs:** REST, Webhooks, OAuth 2.0, WebSockets, gRPC, OpenAPI, Stripe, Twilio
- **Ferramentas:** Git, Notion, Slack, Figma, Jira, Linear, Airtable, HubSpot
- **Analytics:** Mixpanel, Amplitude, Metabase, Looker, Tableau, BigQuery, Datadog, Grafana
- **Seguranca:** Clerk, Auth0, Vault, Cloudflare
- **DevOps:** Terraform, GitHub Actions, ArgoCD, Ansible
- **Data/ETL:** Apache Kafka, Airflow, dbt, Spark
- **Comunicacao:** SendGrid, Resend, WhatsApp API, Intercom
- **Testes:** Cypress, Jest, Vitest, Puppeteer

### Visual
```
Desktop (grid 8×19 = 152 cells, estilo terminal):
┌──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┐
│AI-01 │LNG-03│FRM-02│AUT-05│CLD-01│ML-04 │DB-02 │API-03│
│GPT-4o│JavaSc│Next.j│Active│ AWS  │LangCh│MongoD│OAuth │
├──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┤
│ ...  │ ...  │ ...  │ ...  │ ...  │ ...  │ ...  │ ...  │
│ (celulas atualizam aleatoriamente a cada 500ms)        │
└──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┘

Mobile (scroll horizontal por categoria):
  AI MODELS ──────────────────────────→
  [GPT-4o] [Claude] [Gemini] [Llama]...

  LANGUAGES ──────────────────────────→
  [Python] [TypeScript] [JavaScript]...
```
- Celulas revelam ao entrar na tela
- 2-5 celulas mudam aleatoriamente a cada 500ms
- Indicadores coloridos por categoria

---

## 12. ARTIGOS

**Tag:** `[SYS:ARTICLES]`

**Titulo:** Nosso **olhar** *técnico*

| Codigo | Titulo | Tag |
|--------|--------|-----|
| ART-01 | Por que IA agente é a próxima camada da automação corporativa | AGENTIC AI |
| ART-02 | O retorno financeiro real da automação em operações de escala | FINANCE |
| ART-03 | O que lideranças precisam saber antes de decidir sobre tecnologia | STRATEGY |
| ART-04 | A corrida trilionária da IA nos próximos 5 anos | MARKET |

**CTA em cada card:** LER →

### Visual
```
┌────────────────────────────────┬────────────────────────────────┐
│ ART-01            AGENTIC AI   │ ART-02               FINANCE   │
│                                │                                │
│ Por que IA agente é a próxima  │ O retorno financeiro real da   │
│ camada da automação            │ automação em operações         │
│ corporativa                    │ de escala                      │
│                                │                                │
│ ● LER →                       │ ● LER →                        │
├────────────────────────────────┼────────────────────────────────┤
│ ART-03             STRATEGY    │ ART-04                MARKET   │
│                                │                                │
│ O que lideranças precisam      │ A corrida trilionária da IA    │
│ saber antes de decidir         │ nos próximos 5 anos            │
│ sobre tecnologia               │                                │
│                                │                                │
│ ● LER →                       │ ● LER →                        │
└────────────────────────────────┴────────────────────────────────┘
```
- **Fundo:** preto (#000)
- Hover muda cor de fundo e indicador fica azul
- Grid 2 colunas (1 no mobile)

---

## 13. CONTATO

**Tag:** `[SYS:CONTACT]`

**Titulo:** Pronto para **reestruturar** sua *operação*?

**Descricao:**
> Fale com a nossa equipe. O primeiro passo é um **diagnóstico técnico** para entender onde sua empresa está — e até onde ela pode chegar.

| Campo | Valor |
|-------|-------|
| EMAIL | contato@humancode.com |
| LOCAL | Brasília, DF |
| STATUS | DISPONÍVEL |

### Visual
```
┌─────────────────────────────────┬───────────────────────────────┐
│  [SYS:CONTACT]                  │  ┌───────────────────────────┐│
│                                  │  │ EMAIL   contato@human... ●││
│  Pronto para reestruturar        │  ├───────────────────────────┤│
│  sua operação?                   │  │ LOCAL   Brasília, DF     ○││
│                                  │  ├───────────────────────────┤│
│  Fale com a nossa equipe.        │  │ STATUS  DISPONÍVEL       ●││
│  O primeiro passo é um           │  └───────────────────────────┘│
│  diagnóstico técnico...          │    ↑ ShineBorder azul animado │
└─────────────────────────────────┴───────────────────────────────┘
```
- **Fundo:** branco (#fff)
- **ShineBorder** com brilho azul animado no card de contato
- Email e clicavel (mailto)

---

## 14. FOOTER

**Conteudo:**
- Logo Human Code Technology (invertido)
- Links: ABOUT | SERVICES | ARTICLES | CONTACT
- Copyright: © 2025 HCT

### Visual
```
┌─────────────────────────────────────────────────────────────────┐
│  [LOGO HCT]     ABOUT  SERVICES  ARTICLES  CONTACT    © 2025   │
└─────────────────────────────────────────────────────────────────┘
```
- **Fundo:** branco (#fff)
- Links com scroll suave
- Monospace, 10px

---

## PALETA DE CORES

| Cor | Hex | Uso |
|-----|-----|-----|
| Preto | #000 | Fundo principal |
| Azul Accent | #0066FF | Destaques, interacoes, efeitos |
| Bege | #f5f0e8 | Texto principal em fundo escuro |
| Branco | #fff | Secoes claras, texto destaque |
| Cinza claro | #f8f8f8 | Fundo secoes alternadas |
| Cinza medio | #888 | Texto secundario |
| Cinza escuro | #666 | Descricoes |
| Borda escura | #1a1a1a | Bordas em fundo preto |

## TIPOGRAFIA

| Tipo | Uso |
|------|-----|
| Inter (sans-serif) | Corpo, titulos, navegacao |
| Fraunces (serif, italico) | Palavras de destaque (*não foi feita*, *acelera*, *operação*) |
| Monospace | Codigos, tags [SYS:], labels, terminal |

## EFEITOS MAGIC UI

| Componente | Onde | Efeito |
|------------|------|--------|
| MagicCard | Metricas, Metodologia | Spotlight azul segue o mouse |
| BorderBeam | Terminal Visao | Feixe azul percorre a borda |
| ShineBorder | Card Contato | Borda com brilho azul animado |
