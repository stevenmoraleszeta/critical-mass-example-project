# Steven Morales FE-01 – Human Front-End Experience Engine

## 0. Concepto general del proyecto

### Nombre tentativo:
**"Steven Morales FE-01 – Human Front-End Experience Engine"**

### Idea central:
Una single-brand experience donde yo soy el "producto", presentado como si fuera una herramienta SaaS / producto digital diseñada para agencias como Critical Mass.

### Lo que quiero demostrar:

**Mis capacidades:**
- Traducir un diseño (que yo mismo defino) a código responsive y accesible.
- Crear un mini design system / component library.
- Integrar datos desde una API JSON.
- Pensar en performance, testing, arquitectura CSS, etc.

**Y al mismo tiempo:**
- Tener un tono divertido, irónico suave, pero profesional.
- Mostrar que entiendo branding, UX, narrativa y microcopy.

## 1. Objetivo del proyecto (ligado al puesto)

Este proyecto tiene que responder claramente al job posting:

- **Traducir diseños / Figma → Tu diseño propio convertido en HTML/CSS/React/Next.**
- **Responsive / Mobile-first / Cross-browser → Layout impecable en móvil/tablet/desktop.**
- **Accesibilidad → HTML semántico, ARIA, focus states, etc.**
- **APIs / JSON / HTTP → Consumo de un endpoint (interno) como si fuera CMS.**
- **SASS / preprocesadores → Uso real de SCSS con BEM/SMACSS.**
- **Testing → Al menos 2–3 tests unitarios (Jest + RTL).**
- **Performance → Lazy loading, buenas prácticas de imágenes, componentes eficientes.**
- **Design system / componentes reutilizables → Página /components.**
- **Prototipo / POC optimizado → Proyecto pequeño pero muy pulido.**

## 2. Arquitectura general de la aplicación

### 2.1. Páginas (App Router Next.js)

- **/** → Product Landing
  - Página principal donde me presento como producto.

- **/components** → Component Library / Design System
  - Showcase de los componentes UI reutilizables.

- **/content** → Content / CMS View
  - Pantalla que simula integración con contenido dinámico vía JSON.

- **/about** (opcional pero recomendado) → About the Prototype
  - Página para explicar, en tono profesional, el propósito del proyecto para Critical Mass.

- **/api/content** → API interna que devuelve JSON con "casos de uso / proyectos / campañas".

### 2.2. Estructura de carpetas

```
src/
  app/
    layout.tsx
    globals.scss              # importa main.scss si lo prefieres así
    page.tsx                  # Landing /
    components/
      page.tsx                # /components
    content/
      page.tsx                # /content
    about/
      page.tsx                # /about
    api/
      content/
        route.ts              # GET /api/content

  components/
    layout/
      MainLayout.tsx
      Header.tsx
      Footer.tsx
      NavBar.tsx
    sections/
      Hero.tsx
      Features.tsx
      Specs.tsx
      UseCases.tsx
      PerformanceSection.tsx
      PricingSection.tsx
      Testimonials.tsx
      CTASection.tsx
    ui/
      Button.tsx
      IconButton.tsx
      Tag.tsx
      Badge.tsx
      Card.tsx
      StatCard.tsx
      Pill.tsx
      Input.tsx
      Select.tsx
      Toggle.tsx
      Skeleton.tsx
      SwitchTheme.tsx
    content/
      ContentFilters.tsx
      ContentList.tsx
      ContentCard.tsx
    feedback/
      Loader.tsx
      ErrorMessage.tsx
      Toast.tsx

  lib/
    api/
      contentApi.ts           # función fetchContent()
    hooks/
      useFetchContent.ts      # custom hook

  styles/
    base/
      _reset.scss
      _variables.scss
      _mixins.scss
      _typography.scss
      _layout.scss
    components/
      _buttons.scss
      _cards.scss
      _tags.scss
      _navbar.scss
      _hero.scss
      _forms.scss
      _content.scss
    pages/
      _home.scss
      _components-page.scss
      _content-page.scss
      _about-page.scss
    main.scss                  # importa base, components, pages

  tests/
    Hero.test.tsx
    Button.test.tsx
    Content.test.tsx

public/
  images/
    logo-steven.svg
    avatar-steven.png
    hero-bg.jpg
    icon-feature-1.svg
    icon-feature-2.svg
    icon-feature-3.svg
    ...
```

## 3. Concepto narrativo y contenido de cada página

### 3.1. Landing / – "Steven Morales: Front-End Experience Engine"

#### 3.1.1. Sección Hero

**Objetivo:** Presentarme como producto y dejar claro el tono.

**Elementos:**
- Logo (puede ser "SM" estilizado).
- **Título (H1):**
  - "Meet Steven Morales: Your Next Front-End Experience Engine."
- **Subtítulo:**
  - "A human-first, code-driven product designed to translate beautiful designs into responsive, accessible, high-quality web experiences."
- **CTAs:**
  - View Features → scroll a sección Features.
  - See Live Content → navega a /content.
- **Copy pequeño irónico:**
  - "No monthly subscription. Just coffee and interesting problems."
- **Visual:**
  - Imagen mía estilo ilustración/blurred o un mock tipo interfaz con código + UI superpuesta.
  - Fondo con ligero gradient.

#### 3.1.2. Sección "Core Features"

**Título:** "Core Features"

Presentar mis skills como features de producto. 3–4 tarjetas:

1. **Design-to-Code Translation**
   - **Subtexto:** "Converts Figma and wireframes into clean, semantic HTML/CSS and reusable React components."

2. **Responsive & Mobile-First Layout Engine**
   - "Optimized for all breakpoints. Designed to behave nicely on phones your stakeholders actually use."

3. **API Integration Module**
   - "Speaks fluent REST, JSON and HTTP. Comfortable integrating with CMSs and external web services."

4. **Accessibility & Performance Optimizer**
   - "Focuses on semantic structure, keyboard navigation and fast load times. Because pretty is not enough."

**Cada tarjeta incluirá:**
- Ícono decorativo.
- Título.
- Breve descripción.
- Clase BEM: .feature-card, .feature-card__icon, etc.

#### 3.1.3. Sección "Specs & Tech Stack"

**Título:** "Tech Specs"

Dividido en columnas:

- **Supported Technologies**
  - React, Next.js, TypeScript, HTML5, CSS3, SASS, Git, Jest, RTL.

- **Protocols & Data**
  - HTTP, JSON, basic XML, REST APIs.

- **Integrations**
  - CMS-like data, 3rd-party APIs, webhooks (mencionado a nivel conceptual).

**Copy con guiño:**
- "Backwards-compatible with legacy codebases (with patience)."

#### 3.1.4. Sección "Use Cases"

**Título:** "Use Cases"

Lista de situaciones típicas en una agencia:

- "Need a pixel-perfect build from a Figma file?"
  - "Steven FE-01 converts design tokens, grids and components into maintainable front-end architecture."

- "Need a component library your design team actually likes?"
  - "Can build accessible, reusable components and document them clearly."

- "Need someone to debug that weird layout in Safari?"
  - "Comfortable with cross-browser issues and digging into root causes instead of patching symptoms."

Lo voy a renderizar como tarjetas o timeline, todavía no decidí.

#### 3.1.5. Sección "Performance & Reliability"

**Título:** "Performance & Reliability"

**Contenido sugerido:**
- Bloques tipo "stats cards":
  - "Focus on Lighthouse scores & perceived performance."
  - "Works with lazy loading, image optimization and bundle awareness."
  - "Approach: profile, measure, then optimize – not guess."

- Pequeño párrafo más serio explicando:
  - Cómo abordo debugging y root cause analysis.
  - Cómo me comunico con el equipo (estimaciones, updates, etc.).

#### 3.1.6. Sección "Testimonials / Social Proof" (ficticio pero creíble)

Puedo usar testimonios ficticios o referir a "teams" de forma genérica (sin mentir, pero sin nombres reales). Algo muy neutral, tipo:

- "Working with Steven FE-01 felt like plugging a specialized module into our team – fast to understand the brief, calm under pressure, and always pushing for cleaner code."

#### 3.1.7. Sección "Pricing" (guiño suave)

**Título:** "Availability & Pricing"

**Copy:**
- "Available for full-time integration into your team. Salary expectations available upon request. Refunds not available, but continuous improvement is included by default."

#### 3.1.8. Sección "Final CTA"

**Botones:**
- Explore Components → /components
- View Content in Action → /content

**Pequeña nota:**
- "This prototype was crafted specifically with the Critical Mass Front-End Developer role in mind."

### 3.2. Página /components – Component Library

**Objetivo:** Que parezca una mini Storybook / design system docs.

**Secciones:**

#### Intro
- **Título:** "UI Component Library"
- **Texto:** "A small set of reusable components used across this prototype, documented with their intended usage and accessibility notes."

#### Buttons
Voy a mostrar variantes:
- .btn--primary
- .btn--secondary
- .btn--ghost

Estados: normal, hover, focus, disabled. Todos los estados importantes para accesibilidad.

**Para cada variante incluiré:**
- Preview.
- **Notas:**
  - Uso recomendado.
  - Accesibilidad (uso de <button>, aria-label cuando hay solo ícono).

#### Cards
- Card básica.
- FeatureCard.
- ContentCard.

**Voy a mostrar:**
- Diferentes layouts (con imagen, sin imagen).
- Responsividad (cómo se comporta en pantallas pequeñas).

#### Tags / Badges / Pills
- Tags para categorías.
- Badges de estado (Live, Upcoming, Draft).

#### Form Elements
- Input (búsqueda).
- Select (filter).
- Toggle (modo oscuro / preferencia).

**Incluiré:**
- <label> asociado.
- aria-invalid y aria-describedby como ejemplo.

#### Feedback States
- Loader (spinner o skeleton).
- ErrorMessage.
- Toast (mensaje de notificación).

### 3.3. Página /content – CMS-like View

**Objetivo:** Simular integración con CMS / API para mostrar que sé trabajar con datos dinámicos.

#### 3.3.1. Layout

**Barra superior:**
- Título: "Content Feed".
- Descripción: "Data fetched from a JSON endpoint, filtered on the client."

**Fila de filtros:**
- Dropdown de categoría (Campaign, Case Study, Experiment, Learning).
- Input de búsqueda (por título / keywords).
- Toggle de "Show only live".

**Zona de contenido:**
- Si loading === true → skeletons / loader.
- Si error → mensaje con botón "Retry".
- Si data.length === 0 → estado vacío: "No content matches your filters yet."

**Lista de tarjetas (ContentCard):**
Cada item muestra:
- Título.
- Categoría (Tag).
- Estado (Live/Upcoming/Draft) como Badge color-coded.
- Fecha.
- Small summary.
- Tags (chips) con keywords.

#### 3.3.2. API / Datos

**En app/api/content/route.ts:**
Endpoint GET que retorna un array de objetos.

**Algo así:**

```typescript
// app/api/content/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const content = [
    {
      id: 1,
      title: "Critical Portfolio Microsite",
      category: "Case Study",
      status: "Live",
      publishedAt: "2025-11-20",
      summary: "A microsite designed and built to showcase front-end skills for an agency environment.",
      tags: ["React", "Next.js", "SASS", "Accessibility"]
    },
    {
      id: 2,
      title: "Design-to-Code Experiment",
      category: "Experiment",
      status: "Draft",
      publishedAt: "2025-10-05",
      summary: "Exploring translation of complex Figma components into reusable code patterns.",
      tags: ["Figma", "Components", "Design System"]
    },
    // ...
  ];

  return NextResponse.json(content);
}
```

**En lib/api/contentApi.ts:**

```typescript
export async function fetchContent() {
  const res = await fetch("/api/content");
  if (!res.ok) throw new Error("Failed to fetch content");
  return res.json();
}
```

**En hooks/useFetchContent.ts:**
Voy a manejar:
- data
- loading
- error
- refetch() opcional (si tengo tiempo).

### 3.4. Página /about – Propósito del proyecto

**Contenido que voy a incluir:**

Explicar en 2–3 secciones:

#### Contexto
- Estoy aplicando al puesto de Front-End Developer en Critical Mass.

#### Objetivo del prototipo
- Demostrar habilidades alineadas al job posting:
  - Design-to-code, responsive, accesibilidad, performance, APIs, SASS, testing.

#### Cómo está construido
- Next.js + TypeScript + SASS.
- Mención de tests.
- Mención de accesibilidad y performance.

Es un lugar muy bueno para ser directo con el reclutador.

## 4. Diseño visual y sistema de estilos

### 4.1. Paleta de colores

- **Primario:** #4B3FFF (azul/violeta vibrante).
- **Secundario:** #00D4B5 (turquesa suave).
- **Acento:** #FFB347 (naranja suave) para badges o highlights.
- **Fondo principal:** #050818 (tono oscuro) o fondo claro tipo #F5F7FB, elegir uno y mantenerse consistente.

**Textos:**
- **Principal:** #111827 (si fondo claro) o #F9FAFB (si fondo oscuro).
- **Secundario:** gris #6B7280.

Define todo esto en _variables.scss.

### 4.2. Tipografía

- **Headings:** fuente sans-serif bold (ej. Inter / Poppins / system font).
- **Body:** sans-serif regular.

**En _typography.scss:**
- Escalas de font-size (--fs-xs, --fs-sm, --fs-md, etc.).
- line-height consistente.

Nota: Voy a usar Inter o Poppins, todavía no decidí.

### 4.3. Layout y spacing

**En _layout.scss:**
- Clases utilitarias:
  - .container
  - .grid, .grid--2, .grid--3, con media queries.

**Spacing variables:**
- --space-xs, --space-sm, --space-md, --space-lg, etc.

### 4.4. BEM + SMACSS

**Ejemplo para Hero en _hero.scss:**

```scss
.hero {
  padding: var(--space-xl) 0;
  display: grid;
  gap: var(--space-lg);

  &__content {
    max-width: 560px;
  }

  &__title {
    font-size: var(--fs-3xl);
    margin-bottom: var(--space-md);
  }

  &__subtitle {
    font-size: var(--fs-lg);
    color: var(--color-text-muted);
    margin-bottom: var(--space-lg);
  }

  &__actions {
    display: flex;
    gap: var(--space-md);
    flex-wrap: wrap;
  }

  &__note {
    margin-top: var(--space-md);
    font-size: var(--fs-sm);
    color: var(--color-text-muted);
  }
}
```

## 5. Accesibilidad (plan claro)

### Checklist que tengo que incorporar:

#### Estructura semántica
- <header>, <main>, <section>, <footer>.
- Un solo <h1> por página, jerarquía clara de h2, h3.

#### Navegación por teclado
- **Skip link al inicio:**
  ```html
  <a href="#main-content" class="skip-link">Skip to main content</a>
  ```
- Clases .skip-link con estilos para estar visible al tener :focus.

#### Enlaces y botones correctos
- No usar <div onClick>.
- Para acciones → <button>.
- Para navegación → <a>.

#### Focus visible
- Estilos específicos para :focus en botones, links, inputs.

#### Texto alternativo
- Todas las imágenes clave con alt significativo.
- Imágenes decorativas con alt="" y aria-hidden="true" si aplica.

#### Formularios accesibles
- <label for="search">Search content</label>
- id correspondiente en el input.
- Para errores: aria-describedby, aria-invalid.

#### Contraste
- Asegurarme de que texto vs fondo cumplan contraste (mínimo 4.5:1 para texto normal).

## 6. Performance (plan)

### Medidas concretas:

- Usar next/image para imágenes.
- Añadir loading="lazy" donde no use next/image.
- Evitar librerías pesadas innecesarias.
- Dividir la página en componentes pequeños.
- Si quiero, usar React.Suspense para algunas secciones cargadas diferido (no obligatorio).

**En el README, voy a añadir una sección:**

### Performance Notes
- Lazy loading on non-critical images.
- Optimized layout and minimal re-renders via simple composition.
- Focus on small bundle by avoiding unnecessary libraries.

## 7. Testing (mínimo viable)

- Configurar Jest + React Testing Library.

### Tests sugeridos:

#### Hero.test.tsx
- Verificar que el título "Meet Steven Morales…" se renderiza.
- Verificar que existen botones con texto View Features y See Live Content.

#### Button.test.tsx
- Renderizar un botón con texto dado.
- Simular click y verificar que llama al handler.

#### Content.test.tsx
- Mock de fetchContent para devolver datos.
- Renderizar /content (o el componente principal de la vista).
- Verificar:
  - Que muestra loading.
  - Luego muestra tarjetas de contenido.

## 8. Git & flujo de trabajo

### Flujo que voy a seguir:

- Crear repo en GitHub.

### Ramas:
- main → estable.
- feature/landing-page
- feature/components-page
- feature/content-api
- feature/accessibility
- chore/tests

### Commits descriptivos:
- feat: add hero section layout
- feat: implement content API integration
- style: refine responsive grid on home
- test: add button component tests

Esto refleja buenas prácticas de version control como piden en el job posting.

## 9. README – estructura que voy a usar

### Contenido que incluiré:

#### Título
"Steven Morales FE-01 – Front-End Experience Engine (Critical Mass Prototype)"

(Probablemente lo acorte un poco, pero esa es la idea)

#### Descripción
2–3 párrafos explicando:
- Es un micro-sitio tipo producto personal.
- Construido específicamente pensando en el rol de Developer, Front End en Critical Mass.

#### Objectives
Lista de objetivos conectados al job posting. Esto es clave para que vean que leí bien el posting.

#### Tech Stack
Next.js, TypeScript, SASS, Jest, etc.

#### Pages
- / – Product landing
- /components – UI Component Library
- /content – CMS-like API-driven view
- /about – Project context

#### How to Run
Requisitos, npm install, npm run dev, npm run test.

Básico pero claro.

#### Accessibility
Lista corta de medidas implementadas. No quiero que sea muy largo.

#### Performance
Medidas implementadas. Lighthouse scores si puedo.

#### How this maps to the job description
Pequeña tabla o bullet list conectando cada requisito del job posting con lo que implementé:
- "Translate graphic designs…" → secciones X, uso de CSS Grid, etc.
- "Mobile-first, responsive…" → layout, breakpoints.
- "APIs, JSON, HTTP…" → /api/content, /content.
- "SASS, pre-processing tools…" → styles/ con SCSS.
- "Design systems & reusable components" → /components.
- "Testing" → carpeta tests/.

## 10. Cómo lo presento a Critical Mass

Cuando lo tenga deployado en Vercel:

**En la entrevista o por mail, puedo decir:**

"I built a small front-end prototype to show how I think about design translation, component systems and API integration in an agency context. It's a playful 'me-as-a-product' microsite, but the underlying code, accessibility and performance work are very serious."

**Mandar:**
- Live demo URL.
- Repo GitHub.

---

## 11. Job Posting - Critical Mass

**Puesto:** Developer, Front End  
**Ubicación:** San Jose, Costa Rica

### Descripción del rol

We are seeking an experienced and motivated Developer, Front End to join our team. The Developer, Front End will be responsible for delivering front-end tasks, supporting web applications, and translating graphic designs into efficient, high-quality, responsive, and accessible code. This role requires both independent ownership of basic tasks and the ability to collaborate on more complex projects, seeking guidance from senior team members as needed.

### Responsabilidades (You Will)

- Translate graphic designs and wireframes from tools like Figma (or similar) into standard-compliant HTML, CSS, and responsive components.
- Collaborate with Creative, Business, Technology, and QA teams to ensure the delivery of high-quality, punctual web development.
- Implement technical solutions following best practices and maintain clear documentation according to project guidelines.
- Work with a variety of front-end technologies including HTML5, CSS, JavaScript, and popular frameworks.
- Integrate web solutions with external web services (SOAP/REST), content management systems, and third-party applications (API/webhook integration).
- Implement and maintain automation and pre-processing tools (e.g., Gulp, SASS, LESS).
- Ensure cross-browser compatibility and mobile-first, performant code.
- Debug and troubleshoot issues, providing root cause analysis for both simple and complex problems.
- Analyze and optimize code for quality, efficiency, and performance; provide feedback to peers during code reviews.
- Identify and resolve performance and scalability issues, and drive efforts to reduce technical debt.
- Provide progress updates and task estimates to senior or technology leads as required.

### Requisitos (You Have)

- Minimum 2+ years of experience working with front-end technologies (HTML/CSS/JavaScript).
- Excellent knowledge of modern development practices (Mobile First, MVC, Object-Oriented Development).
- Experience with cross-browser and responsive development, and general software/unit testing.
- Familiarity with design systems, reusable components, and design translation using Figma or similar tools.
- Experience with version control systems (e.g., Git/GitHub).
- Work experience integrating with APIs, external web services, and content management systems.
- Fluency with data transfer formats and protocols (JSON, XML, HTTP).
- Experience with automation and pre-processing tools (Gulp, SASS, LESS).
- Ability to build proof-of-concept prototypes and optimize code for performance.
- Exposure to full-stack development, including working with databases (SQL), designing/consuming APIs, and monitoring application performance.
- Expertise in troubleshooting, debugging, and root cause analysis.
- Resourceful, critical thinker with a curiosity mindset and strong problem-solving skills.

### Beneficios (What We Offer)

- Global maternity and parental leave
- Competitive benefits packages
- Vacation, compassionate leave, wellness days, and flex days
- Access to online services for families and new parents
- 13 affinity groups
- Internal learning and development programs
- Enterprise-wide employee discounts

The Talent Team at Critical Mass is focused on ensuring we provide the best training, onboarding, and employee experience possible! Our new hires & employees are the future of our organization, and we want to set you up for long-term success. In an effort to do so, we expect our team to work from an office a minimum of 3 days a week.


