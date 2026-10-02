# 🖥️ Digital Museum — Museu Interativo de Tecnologia

> Uma landing page interativa que apresenta a evolução da tecnologia através de uma experiência visual inspirada em um museu digital.

## 📌 Sobre o projeto

O **Digital Museum** é um projeto front-end criado para explorar a evolução da computação e da tecnologia ao longo das décadas.

A experiência permite navegar por diferentes períodos históricos:

**1940 → 1960 → 1980 → 2000 → 2020 → Futuro**

Ao selecionar um período, a interface apresenta novas informações, imagens, estatísticas e elementos visuais relacionados à tecnologia daquela época.

O projeto foi pensado como uma combinação de:

* 🖥️ Desenvolvimento Front-end
* 🎨 UI/UX Design
* 🧩 Interações com JavaScript
* 📚 História da tecnologia
* ✨ Animações e microinterações
* 📱 Design responsivo

---

## 🎯 Objetivo

Criar uma experiência digital que transforme informações históricas sobre tecnologia em uma interface interativa e visualmente envolvente.

A proposta é que o usuário não apenas leia sobre a evolução tecnológica, mas **explore cada período como se estivesse visitando uma exposição digital**.

---

## 🕰️ Linha do tempo

| Período    | Tecnologia              | Destaque                            |
| ---------- | ----------------------- | ----------------------------------- |
| **1940**   | ENIAC                   | Primeiros computadores eletrônicos  |
| **1960**   | IBM System/360          | Era dos mainframes                  |
| **1980**   | IBM PC                  | Popularização da computação pessoal |
| **2000**   | World Wide Web          | Expansão da Web                     |
| **2020**   | Inteligência Artificial | IA em larga escala                  |
| **Futuro** | Computação Quântica     | Nova fronteira computacional        |

---

## ✨ Funcionalidades

### 🧭 Navegação por períodos

O usuário pode selecionar diferentes momentos da história da tecnologia através de uma timeline interativa.

### 🖼️ Imagens dinâmicas

Cada período possui uma imagem relacionada à tecnologia apresentada.

### 📊 Estatísticas

As informações exibidas na exposição são atualizadas de acordo com o período selecionado.

### 🔍 Visualização ampliada

As imagens podem ser abertas em uma visualização maior através do recurso de zoom.

### 📖 Ficha técnica

Cada tecnologia possui informações adicionais apresentadas em uma janela/modal.

### 🎞️ Animações

A troca entre períodos utiliza animações e efeitos visuais para reforçar a sensação de transição temporal.

### 💾 Progresso da exposição

O projeto registra no navegador os períodos que já foram visitados utilizando `localStorage`.

### 📱 Responsividade

A interface foi planejada para funcionar em:

* Desktop
* Notebook
* Tablet
* Smartphone

---

## 🎨 Conceito visual

A identidade visual utiliza uma estética inspirada em:

* Museus contemporâneos
* Interfaces futuristas
* Arquivos digitais
* Terminais de computador
* Sistemas de catalogação tecnológica

### Paleta principal

```text
Background    #08090C
Surface       #101217
Accent        #B8FF00
Text          #F0F2F5
Muted         #858B99
```

O verde ácido funciona como cor de destaque para representar tecnologia, energia e inovação.

---

## 🛠️ Tecnologias utilizadas

### Front-end

* HTML5
* CSS3
* JavaScript
* Google Fonts

### APIs e recursos nativos

* DOM API
* LocalStorage API
* Intersection/scroll interactions
* Image loading
* Modal / Lightbox

O projeto não depende de frameworks JavaScript.

---

## 📁 Estrutura do projeto

```text
digital-museum/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│   └── images/
│       ├── eniac.jpg
│       ├── system360.jpg
│       ├── ibm-pc.jpg
│       ├── first-web.png
│       ├── ai.jpg
│       └── quantum.jpg
│
└── README.md
```

---

## 🚀 Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/digital-museum.git
```

### 2. Entre na pasta

```bash
cd digital-museum
```

### 3. Abra no VS Code

```bash
code .
```

### 4. Execute o projeto

A maneira mais simples é utilizar a extensão **Live Server** do VS Code.

Abra:

```text
index.html
```

e clique em:

```text
Go Live
```

O projeto será aberto no navegador.

---

## 🧩 Como funciona

As informações de cada período são armazenadas em um objeto JavaScript.

Exemplo simplificado:

```javascript
const eras = {
    1940: {
        title: "ENIAC",
        year: "1946",
        category: "Primeiros computadores",
        image: "assets/images/eniac.jpg"
    },

    1960: {
        title: "IBM System/360",
        year: "1964",
        category: "Mainframes",
        image: "assets/images/system360.jpg"
    }
};
```

Quando o usuário seleciona uma época, o JavaScript atualiza:

* título;
* descrição;
* imagem;
* estatísticas;
* categoria;
* créditos;
* progresso da exposição.

---

## 🖼️ Imagens e créditos

As imagens utilizadas no projeto devem possuir seus respectivos créditos e condições de uso.

Algumas fontes utilizadas como referência incluem:

* Wikimedia Commons
* Smithsonian Institution
* CERN

Os créditos são apresentados diretamente na interface da exposição.

---

## 🎨 Design

O projeto possui uma versão de interface criada no **Figma**, utilizada como referência para a implementação visual.

Principais elementos:

```text
Header
   ↓
Hero
   ↓
Timeline
   ↓
Exhibition
   ↓
Technology Details
   ↓
Progress / Passport
   ↓
About
   ↓
Footer
```

---

## 🔮 Possíveis melhorias

O projeto pode evoluir para uma experiência ainda mais completa.

### Próximas funcionalidades

* [ ] Transições mais avançadas entre décadas
* [ ] Efeitos sonoros opcionais
* [ ] Navegação por teclado
* [ ] Modo imersivo / fullscreen
* [ ] Mais tecnologias históricas
* [ ] Linha do tempo horizontal
* [ ] Sistema de conquistas
* [ ] Pesquisa por tecnologia
* [ ] Filtros por categoria
* [ ] Página individual para cada tecnologia
* [ ] Animações com GSAP
* [ ] WebGL / Three.js
* [ ] Versão PWA
* [ ] Acessibilidade avançada
* [ ] Internacionalização PT/EN

---

## 📚 Objetivos de aprendizagem

Este projeto foi desenvolvido também como exercício de desenvolvimento front-end, permitindo praticar:

* Estrutura semântica com HTML;
* CSS Grid e Flexbox;
* Responsive Design;
* Manipulação do DOM;
* Eventos JavaScript;
* Estado da interface;
* Animações CSS;
* Modais;
* Lightbox;
* LocalStorage;
* Organização de arquivos;
* UI/UX;
* Design de interfaces interativas.

---

## 👩‍💻 Autora

**Andressa Santos**

Estudante de Ciência da Computação e desenvolvedora Front-end em formação.

Interesses:

* Front-end Development
* UI/UX
* JavaScript
* Tecnologia
* Cybersecurity
* Desenvolvimento de aplicações web

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de portfólio.

As imagens e materiais de terceiros permanecem sujeitos às respectivas licenças e condições de uso indicadas por seus proprietários.

---

## ⭐ Projeto

Se este projeto foi útil ou interessante para você, considere deixar uma ⭐ no repositório.
