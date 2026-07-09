# Blueprint — Nova Landing Page: Guia Prático de Dietoterapia Pós-Bariátrica

Nova página de oferta para o mesmo produto (Guia Prático de Dietoterapia do Dr. Lucas Nemes), usando a estrutura de copywriting **LEAD → Story → Pitch → Evidence → Offer → Close → Q&A**.

---

## Análise do Projeto Atual

### Produto
- **Nome**: Guia Prático de Receitas Funcionais / Dietoterapia Pós-Bariátrica
- **Autor**: Dr. Lucas Nemes — CRM/MT 8060 | RQE 7982
- **Formato**: PDF Digital — Acesso Imediato
- **Preço**: de R$ 97 → **R$ 37** (1º Lote)
- **Bônus**: Estratégias para Mudanças de Hábitos de Vida (valor R$ 97, incluso grátis)
- **Checkout**: Hotmart — `https://pay.hotmart.com/N106123722W`
- **Marca**: Método Vida Plena / metodovidaplena.com.br
- **Pixel FB**: `1512938703955874`

### Público-Alvo
- Pacientes **pós-bariátricos** (maioria mulheres 30-50 anos)
- Sofrem com: anemia, queda de cabelo, cansaço, exames alterados, confusão alimentar
- Dor principal: não sabem o que comer após a cirurgia, ninguém ensinou
- Desejo: clareza, controle, manter resultados, saúde de longo prazo

### Stack Técnica
- **Vite + React + TypeScript + TailwindCSS v4**
- **Framer Motion** (`motion/react`) para animações
- **Lucide React** para ícones
- **Google Fonts**: Inter + Plus Jakarta Sans
- Componentes UI customizados: FluidButton, GlowingEffect, Marquee, PointerHighlight, GridBackground

### Design System (cores / tipografia)
| Token | Valor |
|---|---|
| `primary` | `#04A3CB` (cyan médico) |
| `alert-orange` | `#ff4d00` |
| `medical-slate` | `#0f172a` |
| `clinical-white` | `#f8fafc` |
| Font body | Inter |
| Font display | Plus Jakarta Sans |

### Imagens Disponíveis
- `/images/hero-guia-pratico.avif` — Foto do Dr. Lucas (hero)
- `/images/bghero.avif` — Background com Dr. Lucas
- `/images/bonus.avif` — Imagem do bônus
- `/images/dr-lucas-hero.jpg` — Foto alternativa

---

## Estrutura da Nova Página (8 Seções)

A nova página será criada como uma **rota separada** para não afetar a página atual e permitir testes A/B.

### Arquivos Novos a Criar

```
components/nova-oferta/
├── HeroSection.tsx
├── LeadSection.tsx
├── StorySection.tsx
├── PitchSection.tsx
├── EvidenceSection.tsx
├── OfferSection.tsx
├── CloseSection.tsx
└── FAQSection.tsx

NovaOferta.tsx          ← Novo "App" que monta todas as seções
nova-oferta.html        ← Entry point HTML para a nova rota
nova-oferta.tsx         ← Entry point React para a nova rota
```

---

## Seção 1 — HERO

**Arquivo**: `components/nova-oferta/HeroSection.tsx`

| Elemento | Conteúdo |
|---|---|
| **Headline (H1)** | "Seu corpo mudou depois da bariátrica — mas ninguém te deu o manual de instruções." |
| **H2** | "O Guia Prático de Dietoterapia é o protocolo médico que faltava para você parar de adivinhar e começar a nutrir seu corpo de verdade." |
| **Imagem** | `/images/hero-guia-pratico.avif` — Dr. Lucas com o produto |
| **CTA** | Botão "QUERO MEU GUIA AGORA →" → link Hotmart |

**Design**: 
- Layout 2 colunas (texto esquerda, imagem direita)
- Background limpo com gradiente sutil cyan/blue
- Badge animado "📖 Formato Digital • Acesso Imediato"
- Botão com gradiente cyan animado + shine effect

---

## Seção 2 — LEAD (Cenário + Perguntas)

**Arquivo**: `components/nova-oferta/LeadSection.tsx`

### Abertura com história/cenário:
> "Você saiu do hospital depois da bariátrica sentindo que finalmente ia mudar tudo. Os primeiros quilos foram embora rápido, as roupas começaram a caber, e pela primeira vez em anos você sentiu esperança de verdade..."

### Transição para a dor:
> "Mas aí vieram as primeiras dúvidas. Ninguém te disse o que comer de verdade. Ninguém te explicou como evitar que o cabelo caísse. Ninguém te avisou que seus exames podiam despencar silenciosamente..."

### Perguntas retóricas (cards interativos):
- "Você sabe quais micronutrientes seu corpo absorve menos agora?"
- "Já se perguntou por que o cansaço não vai embora, mesmo comendo 'certinho'?"
- "Quantas vezes você pesquisou receitas online e ficou mais confusa?"
- "Você sente que está cuidando do corpo — mas os exames dizem o contrário?"

**Design**: 
- Background branco/clinical com glassmorphism
- Perguntas como cards com ícone de interrogação, hover effect
- Texto narrativo com tipografia editorial grande

---

## Seção 3 — HISTÓRIA (Dr. Lucas + Pacientes)

**Arquivo**: `components/nova-oferta/StorySection.tsx`

### A história do Dr. Lucas:
> "Nos últimos 10 anos, o Dr. Lucas Nemes atendeu mais de 300 pacientes pós-bariátricos em Mato Grosso. E o que mais o frustrava não era a complexidade dos casos — era ver pacientes voltando ao consultório com os mesmos problemas que poderiam ter sido prevenidos..."

### Mini-histórias de pacientes (anonimizadas):

1. **Ana, 38 anos** — Perdeu 45kg, mas começou a perder cabelo aos montes. Descobriu deficiência severa de ferro. Com o guia, reverteu em 8 meses.
2. **Carla, 42 anos** — Achava que comer pouco era suficiente. Vivia com anemia crônica. Aprendeu que manutenção é consistência, não perfeição.
3. **Roberto, 45 anos** — Exames sempre alterados, energia zero. Após aplicar o protocolo do guia, normalizou tudo em 3 meses.

### O problema revelado:
> "O problema nunca foi falta de disciplina. O problema é que a cirurgia bariátrica muda a fisiologia do seu corpo — e a maioria das receitas e dietas que existem por aí simplesmente **ignoram isso**."

**Design**:
- Background dark (medical-slate) com imagem do Dr. Lucas como bg
- Timeline vertical com as histórias dos pacientes
- Cards com avatares, resultados em badges verdes
- Citação do Dr. com aspas estilizadas

---

## Seção 4 — PITCH (Produto + Benefícios)

**Arquivo**: `components/nova-oferta/PitchSection.tsx`

### Transição:
> "Foi por isso que o Dr. Lucas criou o Guia Prático de Dietoterapia Pós-Bariátrica."

### Apresentação do produto:
- Mockup visual do guia (imagem)
- "Um guia prático, direto e baseado em ciência, criado por quem realmente entende a fisiologia pós-bariátrica."

### Benefícios (grid de 6 cards com ícones):
1. 🍽️ **+40 receitas funcionais** — ricas em micronutrientes, fáceis de fazer
2. 💊 **Lista de suplementação** — o que repor, quando e por quê
3. 🧬 **Formulado para absorção** — adaptado à sua nova fisiologia
4. 📋 **Protocolo médico validado** — não é achismo, é ciência
5. 🏃‍♀️ **Estratégias de mudança de hábito** — bônus incluso
6. 👨‍⚕️ **Feito por um nutrólogo** — CRM/MT 8060, ABRAN/AMB

**Design**:
- Background limpo com gradiente sutil
- Grid responsivo 2x3 com cards glassmorphism
- Animação stagger nos cards
- Glow effect nos ícones

---

## Seção 5 — EVIDÊNCIA (Provas + Credibilidade)

**Arquivo**: `components/nova-oferta/EvidenceSection.tsx`

### Bloco de credibilidade:
- Foto do Dr. Lucas com credenciais
- "Médico Nutrólogo — UFMT | Especialista ABRAN/AMB"
- "+300 pacientes atendidos | 89% mantêm peso após 12 meses | 10 anos dedicados"

### Depoimentos reais (marquee/carousel):
- Reutilizar os 6 depoimentos existentes do SocialProof
- Cards com estrelas, resultado em badge, citação

### Queixas atendidas (before/after):
| Antes | Depois |
|---|---|
| Queda de cabelo | Cabelo forte e saudável |
| Anemia crônica | Exames normalizados |
| Cansaço persistente | Energia restaurada |
| Confusão alimentar | Clareza total |

**Design**:
- Background dark
- Stats em grid horizontal animado
- Testimonials em marquee horizontal
- Tabela before/after com ícones ❌/✅

---

## Seção 6 — OFERTA (Valor + Preço)

**Arquivo**: `components/nova-oferta/OfferSection.tsx`

### 3 passos simples:
1. **Clique no botão** → Você será redirecionado ao checkout seguro
2. **Faça o pagamento** → Cartão ou PIX, processamento imediato
3. **Acesso liberado** → Receba o guia + bônus no seu email instantaneamente

### Construção de valor (stack):
| Item | Valor |
|---|---|
| Guia Prático de Dietoterapia | R$ 197 |
| +40 Receitas Funcionais | R$ 97 |
| Lista de Suplementação | R$ 67 |
| Bônus: Mudança de Hábitos | R$ 97 |
| Grupo Exclusivo de Membros | R$ 47 |
| Certificado de Participação | R$ 27 |
| **Valor Total** | **~~R$ 532~~** |

### Revelação do preço:
> "Você não vai pagar R$ 532. Nem R$ 197. Nem R$ 97."
> 
> **Primeiro Lote: R$ 37**

**Design**:
- Background preto com grid pattern
- Card de pricing com glassmorphism dark
- Preço gigante com animação de reveal
- Barra de progresso "37% vendido"
- Selos: Checkout Seguro, Satisfação Garantida, Privacidade Protegida

---

## Seção 7 — ACORDO (Fechar a Venda + Urgência)

**Arquivo**: `components/nova-oferta/CloseSection.tsx`

### Comparação de caminhos:
- ❌ Continuar sem orientação → exames alterados, queda de cabelo, frustração
- ✅ Seguir o protocolo → clareza, saúde, resultados duradouros

### Razões para agir agora:
- ⏰ Preço de 1º Lote pode aumentar a qualquer momento
- 📉 Vagas limitadas nesta condição
- 🛡️ Garantia de 7 dias — risco zero
- ⚡ Acesso imediato — comece hoje

### CTA Final:
> Botão grande: "QUERO GARANTIR MEU GUIA POR R$ 37 →"

**Design**:
- Background dark com gradiente amber/warning
- 2 colunas: caminho errado vs caminho certo
- Badge "Último Aviso" com ícone ⚠️
- Countdown ou barra de urgência

---

## Seção 8 — Q&A (Perguntas e Respostas)

**Arquivo**: `components/nova-oferta/FAQSection.tsx`

### Perguntas:

**1. Para quem é este guia?**
Para qualquer pessoa que fez cirurgia bariátrica e quer saber exatamente o que comer, como suplementar e como evitar deficiências nutricionais.

**2. Preciso ter feito a cirurgia recentemente?**
Não. O guia serve tanto para quem operou há meses quanto para quem operou há anos. A fisiologia pós-bariátrica é permanente.

**3. As receitas são complicadas?**
Não. Foram pensadas com ingredientes acessíveis do dia a dia, sem complicação.

**4. Quanto tempo tenho de acesso?**
Acesso imediato e vitalício. O material é seu para sempre.

**5. E se eu não gostar?**
Você tem 7 dias de garantia incondicional. Se não servir para você, devolvemos 100% do valor sem perguntas.

**6. O guia substitui o acompanhamento médico?**
Não. Ele complementa. No final do material, há também uma condição especial para quem deseja acompanhamento individualizado com o Dr. Lucas.

**7. Como recebo o material?**
Após o pagamento, você recebe acesso imediato por email ao guia em PDF + bônus.

**8. Posso pagar com PIX?**
Sim! Cartão de crédito ou PIX, processamento imediato.

**Design**:
- Background claro (clinical-white)
- Accordion com animação expand/collapse
- Ícone (+) que vira (−) ao expandir
- CTA fixo ao final da seção

---

## Perguntas Abertas

1. **Rota da nova página**: Criar como uma rota separada (`/nova-oferta`) ou substituir a página atual? Recomendo rota separada para poder testar A/B.

2. **Preço**: Manter R$ 37 no 1º Lote ou há um novo preço para esta oferta?

3. **Link de checkout**: Continuar usando `https://pay.hotmart.com/N106123722W` ou há um novo link?

4. **Copy**: Os textos de copy que coloquei são sugestões baseadas na análise do conteúdo atual. Você quer que eu siga exatamente esses textos ou prefere fornecer copy própria?

5. **Imagens**: Precisa de imagens novas ou posso reutilizar as que já existem (`hero-guia-pratico.avif`, `bghero.avif`, `bonus.avif`)?

---

## Verificação

### Testes Automatizados
- `npm run build` — Verificar que a nova rota compila sem erros
- Lighthouse audit na nova página

### Verificação Manual
- Visualizar a página em `npm run dev` no browser
- Testar responsividade (mobile, tablet, desktop)
- Verificar que todos os CTAs levam ao link correto do Hotmart
- Validar animações e transições
