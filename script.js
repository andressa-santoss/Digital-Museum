/* =========================================
   DIGITAL MUSEUM
   SCRIPT PRINCIPAL
========================================= */


/* =========================================
   DADOS DAS ERAS
========================================= */

const eras = {

    "1940": {

        number: "01",

        year: "1940",

        category: "COMPUTAÇÃO",

        title: "ENIAC",

        description:
            "Considerado um dos primeiros computadores eletrônicos de uso geral, o ENIAC ocupava uma sala inteira e utilizava milhares de válvulas eletrônicas.",

        image: "assets/images/eniac.jpg",

        alt: "ENIAC, um dos primeiros computadores eletrônicos",

        source: "Wikimedia Commons",

        license: "Public Domain",

        stats: {

            one: "17.468",

            two: "30 t",

            three: "150 kW"

        },

        labels: {

            one: "VÁLVULAS",

            two: "PESO",

            three: "CONSUMO"

        }

    },


    "1960": {

        number: "02",

        year: "1960",

        category: "MAINFRAMES",

        title: "SYSTEM/360",

        description:
            "A família IBM System/360 marcou uma nova geração de computadores empresariais, permitindo que diferentes modelos compartilhassem uma mesma arquitetura.",

        image: "assets/images/system360.jpg",

        alt: "IBM System 360",

        source: "Wikimedia Commons",

        license: "CC BY-SA 2.5",

        stats: {

            one: "1964",

            two: "360",

            three: "IBM"

        },

        labels: {

            one: "LANÇAMENTO",

            two: "ARQUITETURA",

            three: "FABRICANTE"

        }

    },


    "1980": {

        number: "03",

        year: "1980",

        category: "COMPUTADOR PESSOAL",

        title: "IBM PC",

        description:
            "O IBM Personal Computer ajudou a consolidar o computador pessoal como uma ferramenta para empresas, profissionais e usuários domésticos.",

        image: "assets/images/ibm-pc.jpg",

        alt: "IBM Personal Computer",

        source: "Smithsonian Institution",

        license: "Usage Conditions Apply",

        stats: {

            one: "1981",

            two: "16 KB",

            three: "4,77 MHz"

        },

        labels: {

            one: "LANÇAMENTO",

            two: "MEMÓRIA BASE",

            three: "CPU"

        }

    },


    "2000": {

        number: "04",

        year: "2000",

        category: "WEB",

        title: "WORLD WIDE WEB",

        description:
            "A Web transformou a internet em um espaço de publicação e navegação de informações. O projeto iniciado por Tim Berners-Lee no CERN tornou-se uma infraestrutura fundamental da sociedade digital.",

        image: "assets/images/first-web.png",

        alt: "Primeiro website da World Wide Web",

        source: "CERN / Wikimedia Commons",

        license: "Free-use status indicated on Commons",

        stats: {

            one: "1989",

            two: "1993",

            three: "HTML"

        },

        labels: {

            one: "INÍCIO",

            two: "WEB PÚBLICA",

            three: "LINGUAGEM"

        }

    },


    "2020": {

        number: "05",

        year: "2020",

        category: "INTELIGÊNCIA ARTIFICIAL",

        title: "AI",

        description:
            "Sistemas de inteligência artificial passaram a ocupar um espaço cada vez maior em pesquisa, negócios, criação de conteúdo, automação e interação digital.",

        image: "assets/images/ai.jpg",

        alt: "Representação de inteligência artificial",

        source: "Wikimedia Commons",

        license: "CC BY 2.0",

        stats: {

            one: "AI",

            two: "ML",

            three: "LLM"

        },

        labels: {

            one: "INTELIGÊNCIA",

            two: "MACHINE LEARNING",

            three: "MODELOS"

        }

    },


    "future": {

        number: "06",

        year: "FUTURO",

        category: "COMPUTAÇÃO QUÂNTICA",

        title: "QUANTUM",

        description:
            "A computação quântica explora propriedades da mecânica quântica para desenvolver novas formas de processamento e resolver determinados problemas de maneira diferente dos computadores clássicos.",

        image: "assets/images/quantum.jpg",

        alt: "Computador quântico",

        source: "Wikimedia Commons",

        license: "CC BY-SA 4.0",

        stats: {

            one: "QUBITS",

            two: "QUANTUM",

            three: "∞"

        },

        labels: {

            one: "UNIDADE",

            two: "COMPUTAÇÃO",

            three: "POSSIBILIDADES"

        }

    }

};


/* =========================================
   ELEMENTOS
========================================= */

const museumImage =
    document.getElementById("museumImage");

const eraNumber =
    document.getElementById("eraNumber");

const eraYear =
    document.getElementById("eraYear");

const eraCategory =
    document.getElementById("eraCategory");

const eraTitle =
    document.getElementById("eraTitle");

const eraDescription =
    document.getElementById("eraDescription");

const statOne =
    document.getElementById("statOne");

const statTwo =
    document.getElementById("statTwo");

const statThree =
    document.getElementById("statThree");

const labelOne =
    document.getElementById("labelOne");

const labelTwo =
    document.getElementById("labelTwo");

const labelThree =
    document.getElementById("labelThree");

const imageSource =
    document.getElementById("imageSource");

const imageLicense =
    document.getElementById("imageLicense");

const imageIndex =
    document.getElementById("imageIndex");

const imageStatus =
    document.getElementById("imageStatus");

const timelineItems =
    document.querySelectorAll(".timeline-item");

const progressText =
    document.getElementById("progressText");

const progressFill =
    document.getElementById("progressFill");

const progressPercent =
    document.getElementById("progressPercent");


/* =========================================
   MODAL
========================================= */

const modal =
    document.getElementById("modal");

const closeModal =
    document.getElementById("closeModal");

const modalBackground =
    document.getElementById("modalBackground");

const detailsButton =
    document.getElementById("detailsButton");

const modalYear =
    document.getElementById("modalYear");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalStatOne =
    document.getElementById("modalStatOne");

const modalStatTwo =
    document.getElementById("modalStatTwo");

const modalStatThree =
    document.getElementById("modalStatThree");


/* =========================================
   LIGHTBOX
========================================= */

const zoomButton =
    document.getElementById("zoomButton");

const imageLightbox =
    document.getElementById("imageLightbox");

const lightboxClose =
    document.getElementById("lightboxClose");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxCaption =
    document.getElementById("lightboxCaption");


/* =========================================
   MENU
========================================= */

const menuButton =
    document.getElementById("menuButton");

const mainNav =
    document.getElementById("mainNav");


/* =========================================
   CONTROLE DA ERA ATUAL
========================================= */

let currentEra = "1940";

let visitedEras = JSON.parse(
    localStorage.getItem("museumVisited") || "[]"
);


/* =========================================
   MOSTRAR ERA
========================================= */

function showEra(year) {

    const era = eras[year];

    if (!era) {
        return;
    }

    currentEra = year;


    /* -------------------------
       TEXTOS
    ------------------------- */

    eraNumber.textContent =
        era.number;

    eraYear.textContent =
        era.year;

    eraCategory.textContent =
        era.category;

    eraTitle.textContent =
        era.title;

    eraDescription.textContent =
        era.description;


    /* -------------------------
       STATS
    ------------------------- */

    statOne.textContent =
        era.stats.one;

    statTwo.textContent =
        era.stats.two;

    statThree.textContent =
        era.stats.three;


    labelOne.textContent =
        era.labels.one;

    labelTwo.textContent =
        era.labels.two;

    labelThree.textContent =
        era.labels.three;


    /* -------------------------
       CRÉDITOS
    ------------------------- */

    imageSource.textContent =
        era.source;

    imageLicense.textContent =
        era.license;


    /* -------------------------
       IMAGEM
    ------------------------- */

    changeImage(
        era.image,
        era.alt
    );


    /* -------------------------
       CONTADOR
    ------------------------- */

    imageIndex.textContent =
        era.number;

    imageStatus.textContent =
        "ARQUIVO DIGITALIZADO";


    /* -------------------------
       TIMELINE
    ------------------------- */

    timelineItems.forEach(item => {

        item.classList.remove("active");

        if (item.dataset.year === year) {

            item.classList.add("active");

        }

    });


    /* -------------------------
       PROGRESSO
    ------------------------- */

    registerVisit(year);

}


/* =========================================
   ALTERAR IMAGEM
========================================= */

function changeImage(
    imagePath,
    altText
) {

    museumImage.classList.remove(
        "image-enter"
    );


    /*
     * Força o navegador a reconhecer
     * uma nova animação.
     */

    void museumImage.offsetWidth;


    museumImage.src =
        imagePath;

    museumImage.alt =
        altText;


    museumImage.classList.add(
        "image-enter"
    );


    museumImage.onerror = function () {

        console.warn(
            `Imagem não encontrada: ${imagePath}`
        );

        museumImage.alt =
            "Imagem não disponível";

    };

}


/* =========================================
   TIMELINE
========================================= */

timelineItems.forEach(item => {

    item.addEventListener(
        "click",
        () => {

            const year =
                item.dataset.year;

            showEra(year);

            const museum =
                document.getElementById(
                    "museum"
                );

            museum.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

});


/* =========================================
   BOTÃO EXPLORAR
========================================= */

const startButton =
    document.getElementById("startButton");

startButton.addEventListener(
    "click",
    () => {

        document
            .getElementById("timeline")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* =========================================
   REGISTRAR VISITA
========================================= */

function registerVisit(year) {

    if (!visitedEras.includes(year)) {

        visitedEras.push(year);

        localStorage.setItem(
            "museumVisited",
            JSON.stringify(visitedEras)
        );

    }

    updateProgress();

}


/* =========================================
   PROGRESSO
========================================= */

function updateProgress() {

    const total =
        Object.keys(eras).length;

    const visited =
        Math.min(
            visitedEras.length,
            total
        );

    const percentage =
        Math.round(
            (visited / total) * 100
        );


    progressText.textContent =
        `${visited} / ${total}`;


    progressFill.style.width =
        `${percentage}%`;


    progressPercent.textContent =
        percentage;

}


/* =========================================
   MODAL
========================================= */

function openModal() {

    const era =
        eras[currentEra];


    modalYear.textContent =
        era.year;

    modalTitle.textContent =
        era.title;

    modalDescription.textContent =
        era.description;

    modalStatOne.textContent =
        era.stats.one;

    modalStatTwo.textContent =
        era.stats.two;

    modalStatThree.textContent =
        era.stats.three;


    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}


function closeModalFunction() {

    modal.classList.remove(
        "active"
    );

    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


detailsButton.addEventListener(
    "click",
    openModal
);


closeModal.addEventListener(
    "click",
    closeModalFunction
);


modalBackground.addEventListener(
    "click",
    closeModalFunction
);


/* =========================================
   LIGHTBOX
========================================= */

function openLightbox() {

    lightboxImage.src =
        museumImage.src;

    lightboxImage.alt =
        museumImage.alt;


    lightboxCaption.textContent =
        `${eras[currentEra].year} — ${eras[currentEra].title}`;


    imageLightbox.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}


function closeLightbox() {

    imageLightbox.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}


zoomButton.addEventListener(
    "click",
    openLightbox
);


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


/* =========================================
   FECHAR COM ESC
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModalFunction();

            closeLightbox();

        }

    }
);


/* =========================================
   MENU MOBILE
========================================= */

menuButton.addEventListener(
    "click",
    () => {

        mainNav.classList.toggle(
            "mobile-open"
        );

    }
);


/* Fecha menu ao clicar em um link */

document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mainNav.classList.remove(
                    "mobile-open"
                );

            }
        );

    });


/* =========================================
   NAV ACTIVE
========================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.id;

            }

        });


        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);


/* =========================================
   PRÉ-CARREGAR IMAGENS
========================================= */

function preloadImages() {

    Object.values(eras).forEach(
        era => {

            const image =
                new Image();

            image.src =
                era.image;

        }
    );

}


/* =========================================
   ANIMAÇÃO DO MOUSE
========================================= */

const orb =
    document.querySelector(".orb");

if (orb) {

    window.addEventListener(
        "mousemove",
        event => {

            const x =
                (event.clientX /
                    window.innerWidth -
                    0.5) * 15;

            const y =
                (event.clientY /
                    window.innerHeight -
                    0.5) * 15;


            orb.style.transform =
                `translate(${x}px, ${y}px)`;

        }
    );

}


/* =========================================
   INICIALIZAÇÃO
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        showEra("1940");

        preloadImages();

        updateProgress();

    }
);