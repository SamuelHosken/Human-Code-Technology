# Human Code Technology - Copy Completo do Site

---

## 1. HERO

**Tag:** `[SYS:ACTIVE]` (com indicador pulsante)

**Titulo principal** (revela linha por linha com barra branca):
> **Soluções** tecnológicas *sob medida* para empresas que **precisam de eficiência real**

**Descricao:**
> **Automação completa**, pensada do zero para os processos
> que movem o **seu negócio**.
> Não entregamos atalhos. Entregamos **profundidade**.

### Visual
```
┌─────────────────────────────────────────────────────────────────┐
│  ● SYS:ACTIVE                                                   │
│                                                                  │
│  Soluções tecnológicas          ┌──┬──┬──┬──┐                   │
│  sob medida                     │01│02│03│04│  ← grid 4x10      │
│  para empresas que              │05│06│07│08│    com dados       │
│  precisam de eficiência real    │09│10│11│12│    atualizando     │
│                                 │..│..│..│..│    aleatoriamente  │
│  Automação completa, pensada    └──┴──┴──┴──┘                   │
│  do zero para os processos...                                    │
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
> A **Human Code Technology** (HCT) é uma empresa especializada em **automação corporativa** sob medida. Atuamos com organizações que buscam reestruturar seus processos com **profundidade, inteligência** e foco em **resultados reais**.

**Grid de informacoes:**
| Codigo | Area |
|--------|------|
| 001 | Automação Corporativa |
| 002 | Inteligência Artificial |
| 003 | Engenharia de Processos |
| 004 | Execução Técnica |

**Citacao:**
> *"Somos uma empresa séria, técnica e extremamente comprometida com resultado."*

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
│  é uma empresa especializada...  │  └─────────────────────────┘  │
│                                  │                               │
│                                  │  ┌─────────────────────────┐  │
│                                  │  │ "Somos uma empresa      │  │
│                                  │  │  séria, técnica..."     │  │
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
| SRV-01 | Automação Estratégica | Processos internos de ponta a ponta, com foco em performance e controle. |
| SRV-02 | Integração de IA | Agentes, fluxos e assistentes com IA trabalhando a favor do negócio. |
| SRV-03 | Desenvolvimento Sob Medida | Dashboards, sistemas e integrações criados para desafios específicos. |
| SRV-04 | Consultoria Executiva | Decisões técnicas e estratégicas para CEOs e gestores. |
| SRV-05 | Arquitetura de Fluxos | Informações e tarefas fluindo sem ruídos ou gargalos invisíveis. |
| SRV-06 | Suporte Estratégico | Ajustes finos, upgrades e suporte consultivo contínuo. |
| SRV-07 | Orquestração de Sistemas | Ferramentas unificadas em um ecossistema eficiente e integrado. |
| SRV-08 | Painéis e Indicadores | Dashboards visuais com métricas acionáveis para decisões rápidas. |

### Visual
```
Desktop (painel glass fixo, muda com scroll):
┌─────────────────────────────────────────────────────────────────┐
│  ╔═══════════════════════════════════════════════════════════╗   │
│  ║  Nossas frentes       SRV-03                  ● ● ◉ ●   ║   │
│  ║  de atuação           DESENVOLVIMENTO SOB MEDIDA         ║   │
│  ║                       Dashboards, sistemas e             ║   │
│  ║                       integrações criados para           ║   │
│  ║                       desafios específicos.              ║   │
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

**Titulo:** Resultados que *falam*

| Valor | Descricao |
|-------|-----------|
| 150+ | Processos automatizados |
| 40% | Redução média de custos operacionais |
| 98% | Taxa de satisfação dos clientes |
| 24/7 | Monitoramento e suporte técnico |

### Visual
```
┌───────────────┬───────────────┬───────────────┬───────────────┐
│               │               │               │               │
│    150+       │     40%       │     98%       │    24/7       │
│  Processos    │  Redução de   │  Satisfação   │ Monitoramento │
│ automatizados │    custos     │  dos clientes │  e suporte    │
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
> Trabalhamos com **empresas que entendem** que tecnologia não é custo — é **infraestrutura estratégica**.

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
│  Trabalhamos com empresas        │  │ IND-03    │ IND-04    │    │
│  que entendem que tecnologia     │  │ Saúde     │ Varejo    │    │
│  não é custo...                  │  ├───────────┼───────────┤    │
│                                  │  │ IND-05    │ IND-06    │    │
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

**Titulo:** Empresas *eficientes* **não nascem prontas.**

**Descricao:**
> Acreditamos que toda empresa, mais cedo ou mais tarde, será forçada a se adaptar à **nova realidade** da automação inteligente.
>
> Nossa missão é entregar **automação de verdade**, que respeita o negócio e gera **retorno concreto**.

**Terminal (lado direito):**
```
┌──────────────────────────┐
│ ● mission.log            │  ← BorderBeam azul
│                          │     percorrendo a borda
│ > consistência           │
│ > estratégia             │
│ > sofisticação           │
│ > profundidade           │
│ > eficiência             │
│ > _                      │  ← cursor piscando
└──────────────────────────┘
```

### Visual
```
┌─────────────────────────────────┬───────────────────────────────┐
│  [SYS:VISION]                   │  ┌──────────────────────────┐ │
│                                  │  │ ● mission.log           │ │
│  Empresas eficientes             │  │ > consistência          │ │
│  não nascem prontas.             │  │ > estratégia            │ │
│                                  │  │ > sofisticação          │ │
│  Acreditamos que toda empresa... │  │ > profundidade          │ │
│                                  │  │ > eficiência            │ │
│  Nossa missão é entregar...      │  │ > _                     │ │
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
> Cada projeto segue uma **metodologia estruturada**, desenvolvida para garantir entregas consistentes e alinhadas às necessidades reais do negócio.

| Fase | Titulo | Descricao |
|------|--------|-----------|
| 01 | Diagnóstico | Mapeamento completo de processos, sistemas e gargalos existentes. |
| 02 | Arquitetura | Desenho técnico da solução com definição de tecnologias e integrações. |
| 03 | Execução | Desenvolvimento iterativo com validações constantes e ajustes em tempo real. |
| 04 | Operação | Implantação assistida, treinamento e suporte estratégico contínuo. |

### Visual
```
Desktop (grid 4 colunas com MagicCard):
┌──────────────┬──────────────┬──────────────┬──────────────┐
│ 01 ────────  │ 02 ────────  │ 03 ────────  │ 04 ────────  │
│              │              │              │              │
│ Diagnóstico  │ Arquitetura  │ Execução     │ Operação     │
│              │              │              │              │
│ Mapeamento   │ Desenho      │ Desenvolvimento│ Implantação │
│ completo...  │ técnico...   │ iterativo...   │ assistida..│
└──────────────┴──────────────┴──────────────┴──────────────┘

Mobile (timeline vertical):
  ●─── 01 Diagnóstico
  │    Mapeamento completo...
  │
  ●─── 02 Arquitetura
  │    Desenho técnico...
  │
  ●─── 03 Execução
  │    Desenvolvimento iterativo...
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
> Trabalhamos com **transparência absoluta** e responsabilidade técnica. Cada decisão é documentada, cada entrega é mensurável.

| Codigo | Principio | Descricao |
|--------|-----------|-----------|
| PRC-01 | Sem dependência tecnológica | Você mantém controle total sobre seus sistemas e dados. |
| PRC-02 | Documentação completa | Cada projeto entregue com manuais técnicos e operacionais. |
| PRC-03 | Resultados mensuráveis | KPIs definidos no início, acompanhados até o final. |
| PRC-04 | Suporte contínuo | Acompanhamento pós-implantação com ajustes e otimizações. |

**Citacao:**
> Não vendemos promessas. **Entregamos infraestrutura** que funciona, escala e *gera valor* desde o primeiro dia.

### Visual
```
┌─────────────────────────────────┬───────────────────────────────┐
│  [SYS:COMMITMENT]               │  ┌───────────────────────────┐│
│                                  │  │ ● PRC-01                 ││
│  Nosso compromisso               │  │   Sem dependência tecn.  ││
│                                  │  ├───────────────────────────┤│
│  Trabalhamos com transparência   │  │ ● PRC-02                 ││
│  absoluta e responsabilidade...  │  │   Documentação completa  ││
│                                  │  ├───────────────────────────┤│
│                                  │  │ ● PRC-03                 ││
│                                  │  │   Resultados mensuráveis ││
│                                  │  ├───────────────────────────┤│
│                                  │  │ ● PRC-04                 ││
│                                  │  │   Suporte contínuo       ││
│                                  │  └───────────────────────────┘│
│                                                                   │
│  ┌───────────────────────────────────────────────────────────┐   │
│  │ "Não vendemos promessas. Entregamos infraestrutura..."    │   │
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
| ART-01 | Por que as empresas precisam de IA agente agora | AGENTIC AI |
| ART-02 | O impacto real da automação no desempenho financeiro | FINANCE |
| ART-03 | Como CEOs tomam decisões tecnológicas | STRATEGY |
| ART-04 | A corrida trilionária da IA nos próximos 5 anos | MARKET |

**CTA em cada card:** LER →

### Visual
```
┌────────────────────────────────┬────────────────────────────────┐
│ ART-01            AGENTIC AI   │ ART-02               FINANCE   │
│                                │                                │
│ Por que as empresas precisam   │ O impacto real da automação    │
│ de IA agente agora             │ no desempenho financeiro       │
│                                │                                │
│ ● LER →                       │ ● LER →                        │
├────────────────────────────────┼────────────────────────────────┤
│ ART-03             STRATEGY    │ ART-04                MARKET   │
│                                │                                │
│ Como CEOs tomam decisões       │ A corrida trilionária da IA    │
│ tecnológicas                   │ nos próximos 5 anos            │
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

**Titulo:** Vamos **construir** algo *juntos*.

**Descricao:**
> Entre em contato para discutir como podemos **transformar seus processos** com automação inteligente.

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
│  Vamos construir                 │  ├───────────────────────────┤│
│  algo juntos.                    │  │ LOCAL   Brasília, DF     ○││
│                                  │  ├───────────────────────────┤│
│  Entre em contato para           │  │ STATUS  DISPONÍVEL       ●││
│  discutir como podemos...        │  └───────────────────────────┘│
│                                  │    ↑ ShineBorder azul animado │
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
| Fraunces (serif, italico) | Palavras de destaque (*sob medida*, *falam*, *juntos*) |
| Monospace | Codigos, tags [SYS:], labels, terminal |

## EFEITOS MAGIC UI

| Componente | Onde | Efeito |
|------------|------|--------|
| MagicCard | Metricas, Metodologia | Spotlight azul segue o mouse |
| BorderBeam | Terminal Visao | Feixe azul percorre a borda |
| ShineBorder | Card Contato | Borda com brilho azul animado |
