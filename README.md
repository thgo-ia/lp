# Workshop Lapidação Empresarial - Landing Page

Uma landing page moderna e responsiva criada com Next.js 14+ para o "Workshop Lapidação Empresarial", inspirada nos melhores layouts de workshops de IA e focada em conversão e experiência do usuário.

## 🎨 Design Inspirado em Referências Modernas

Esta landing page foi desenvolvida com base nas melhores práticas observadas em:
- **Workshop AI Video Lab** - Layout limpo e profissional
- **Human Academy AI** - Elementos visuais modernos e interativos
- **Workshops de tecnologia** - UX otimizada para conversão

## 🚀 Tecnologias Utilizadas

- **Next.js 14+** com App Router
- **TypeScript** para tipagem estática
- **Tailwind CSS** para estilização
- **Framer Motion** para animações
- **shadcn/ui** para componentes
- **React Hook Form + Zod** para validação de formulários
- **Lucide React** para ícones

## 📋 Funcionalidades

### ✅ Seções Implementadas
- **Header/Navigation** - Menu moderno com navegação suave
- **Hero Section** - Design dark com elementos flutuantes e social proof
- **Benefits** - 6 benefícios com ícones e processo de transformação
- **Statistics** - Métricas de impacto (500+ empresas, 300% ROI, etc.)
- **About** - Os 3 pilares do workshop com features detalhadas
- **Timeline** - Cronograma detalhado dos 2 dias do evento
- **Testimonials** - Carousel com depoimentos de participantes
- **Pricing** - 3 lotes com contador de vagas e ofertas
- **FAQ** - Perguntas frequentes com accordion
- **Footer** - Informações completas e links sociais

### ✅ Elementos Dinâmicos
- **Modal de Pré-cadastro** - 2 fases com validação
- **Countdown Timer** - Contagem regressiva para o evento
- **Contador de Vagas** - Por lote de preços
- **Exit Intent** - Modal quando usuário vai sair
- **Sticky CTA** - Botão fixo após scroll
- **WhatsApp Float** - Botão flutuante de suporte
- **Scroll to Top** - Voltar ao topo
- **Animações** - Framer Motion nas seções

### ✅ SEO e Performance
- **Meta tags** otimizadas
- **Schema markup** para eventos
- **Open Graph** tags
- **Responsive design** (mobile-first)
- **Otimização de imagens** com next/image
- **Lazy loading** implementado

## 🎨 Design System

### Cores
- **Hero Section**: Dark theme com azuis e slate
- **CTAs Principais**: Gradiente amarelo-laranja (#fbbf24 → #f97316)
- **Primária**: Azul corporativo (#1e40af)
- **Secundária**: Dourado/Laranja (#f59e0b)
- **Accent**: Verde sucesso (#10b981)
- **Neutros**: Escalas de cinza e slate

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Font-bold, tamanhos responsivos
- **Body**: Font-normal, legibilidade otimizada
- **CTA**: Font-semibold com destaque visual

## 🚀 Como Executar

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd workshop
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

## 🏗️ Build e Deploy

### Build Local
```bash
npm run build
npm start
```

### Deploy
O projeto está pronto para deploy em:
- **Vercel** (recomendado)
- **Netlify**
- **AWS Amplify**
- **Outros providers Node.js**

## 📁 Estrutura do Projeto

```
workshop/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal com SEO
│   │   ├── page.tsx            # Página principal
│   │   └── globals.css         # Estilos globais
│   ├── components/
│   │   ├── sections/           # Seções da landing page
│   │   │   ├── Header.tsx      # Navegação moderna
│   │   │   ├── Hero.tsx        # Hero dark com social proof
│   │   │   ├── Benefits.tsx    # 6 benefícios + processo
│   │   │   ├── Statistics.tsx  # Métricas de impacto
│   │   │   ├── About.tsx       # 3 pilares do workshop
│   │   │   ├── Timeline.tsx    # Cronograma detalhado
│   │   │   ├── Testimonials.tsx# Carousel de depoimentos
│   │   │   ├── Pricing.tsx     # Sistema de lotes
│   │   │   ├── FAQ.tsx         # Perguntas frequentes
│   │   │   └── Footer.tsx      # Footer completo
│   │   ├── modals/
│   │   │   └── PreRegistrationModal.tsx
│   │   └── ui/                 # Componentes shadcn/ui
│   └── lib/
│       └── utils.ts            # Utilitários
├── tailwind.config.ts          # Configuração Tailwind
├── components.json             # Configuração shadcn/ui
└── package.json
```

## 🎯 Principais Features

### Modal de Pré-cadastro (2 Fases)
**Fase 1 - Dados Pessoais:**
- Nome completo
- Email
- WhatsApp

**Fase 2 - Dados da Empresa:**
- Nome da empresa
- Cargo/função
- Faturamento (select)
- Principal desafio (textarea)

### Sistema de Preços por Lotes
- **1º Lote**: R$ 1.497 (50% OFF) - 30 vagas
- **2º Lote**: R$ 1.797 (40% OFF) - 50 vagas  
- **3º Lote**: R$ 2.297 (23% OFF) - 20 vagas

### Integrações Preparadas
- **Google Analytics** (GTM ready)
- **Facebook Pixel** (estrutura preparada)
- **WhatsApp API** (links diretos)
- **Email Marketing** (captura de leads)

## 🔧 Customização

### Cores
Edite o arquivo `tailwind.config.ts` para personalizar as cores:

```typescript
colors: {
  primary: {
    DEFAULT: "#1e40af", // Azul principal
    // ...
  },
  secondary: {
    DEFAULT: "#f59e0b", // Dourado
    // ...
  }
}
```

### Conteúdo
Os textos estão diretamente nos componentes para facilitar personalização:
- Seções em `src/components/sections/`
- Dados dos depoimentos em `Testimonials.tsx`
- FAQ em `FAQ.tsx`
- Timeline em `Timeline.tsx`

### Integração com Backend
Para conectar com seu backend, edite:
- `PreRegistrationModal.tsx` - linha do `submitRegistration`
- Adicione endpoints para captura de leads
- Configure webhook para contadores de vagas

## 📱 Responsividade

A landing page foi desenvolvida com abordagem **mobile-first**:
- **Mobile**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large Desktop**: 1280px+

## 🔒 Segurança e Validação

- **Validação client-side** com Zod
- **Sanitização** de inputs
- **Proteção XSS** implementada
- **HTTPS** ready para produção

## 📊 Analytics e Tracking

### Eventos Configurados
- Cliques nos CTAs principais
- Abertura do modal de pré-cadastro
- Conclusão do formulário
- Cliques no WhatsApp
- Scroll depth tracking

### Métricas Importantes
- Taxa de conversão por seção
- Abandono no formulário
- Origem do tráfego
- Dispositivos mais utilizados

## 🚀 Próximos Passos

1. **Configurar Analytics**
   - Google Analytics 4
   - Facebook Pixel
   - Hotjar/Clarity para heatmaps

2. **Backend Integration**
   - API para captura de leads
   - Sistema de email marketing
   - Dashboard administrativo

3. **Testes A/B**
   - Headlines diferentes
   - CTAs alternativos
   - Cores dos botões

4. **Performance**
   - Otimização de imagens
   - CDN para assets
   - Lazy loading avançado

## 📞 Suporte

Para dúvidas sobre implementação ou customização:
- Email: suporte@workshop-lapidacao.com
- WhatsApp: (11) 99999-9999

---

**Status**: ✅ Pronto para produção
**Última atualização**: Dezembro 2024
**Versão**: 1.0.0