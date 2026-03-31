document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = Array.from(document.querySelectorAll(".tab-button"));
    const tabPanels = Array.from(document.querySelectorAll(".tab-panel"));

    function activateTab(button) {
        const targetId = button.getAttribute("aria-controls");

        tabButtons.forEach((item) => {
            const isActive = item === button;
            item.classList.toggle("active", isActive);
            item.setAttribute("aria-selected", String(isActive));
        });

        tabPanels.forEach((panel) => {
            const isActive = panel.id === targetId;
            panel.classList.toggle("active", isActive);
            panel.hidden = !isActive;
        });
    }

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => activateTab(button));
    });

    const currentEnvironment = document.getElementById("currentEnvironment");
    const currentPort = document.getElementById("currentPort");
    const environmentBadge = document.getElementById("environmentBadge");

    function detectPort() {
        if (window.location.protocol === "file:") {
            return "preview";
        }
        if (window.location.port) {
            return window.location.port;
        }
        if (window.location.protocol === "http:") {
            return "80";
        }
        if (window.location.protocol === "https:") {
            return "443";
        }
        return "preview";
    }

    const port = detectPort();
    const frontPorts = {
        "80": "main",
        "81": "qa",
        "82": "dev",
        "preview": "local"
    };

    const environment = frontPorts[port] || "externo";
    const environmentLabels = {
        main: "MAIN",
        qa: "QA",
        dev: "DEV",
        local: "LOCAL",
        externo: "EXTERNO"
    };

    currentEnvironment.textContent = environmentLabels[environment];
    currentPort.textContent = port === "preview" ? "Vista local del archivo" : `Puerto del front: ${port}`;
    environmentBadge.textContent = `Front en ambiente ${environmentLabels[environment]}`;

    const quickLinksContainer = document.getElementById("accesos");

    const services = [
        {
            title: "Front",
            description: "Landing principal de la clase y punto de entrada de la demo.",
            links: [
                { label: "Main 80", url: "http://localhost:80", env: "main" },
                { label: "QA 81", url: "http://localhost:81", env: "qa" },
                { label: "Dev 82", url: "http://localhost:82", env: "dev" }
            ]
        },
        {
            title: "API Gateway",
            description: "Puerta de entrada unica para enrutar hacia los microservicios.",
            links: [
                { label: "Main 8000", url: "http://localhost:8000", env: "main" },
                { label: "QA 8001", url: "http://localhost:8001", env: "qa" },
                { label: "Dev 8002", url: "http://localhost:8002", env: "dev" }
            ]
        },
        {
            title: "micro-1 / Seguridad",
            description: "Representa el dominio Seguridad usando Spring Boot.",
            links: [
                { label: "Main 8080", url: "http://localhost:8080", env: "main" },
                { label: "QA 8081", url: "http://localhost:8081", env: "qa" },
                { label: "Dev 8082", url: "http://localhost:8082", env: "dev" }
            ]
        },
        {
            title: "micro-2 / Venta",
            description: "Representa el dominio Venta usando Node.",
            links: [
                { label: "Main 9000", url: "http://localhost:9000", env: "main" },
                { label: "QA 9001", url: "http://localhost:9001", env: "qa" },
                { label: "Dev 9002", url: "http://localhost:9002", env: "dev" }
            ]
        },
        {
            title: "micro-3 / Inventario",
            description: "Representa el dominio Inventario usando Python.",
            links: [
                { label: "Main 8888", url: "http://localhost:8888", env: "main" },
                { label: "QA 8889", url: "http://localhost:8889", env: "qa" },
                { label: "Dev 8890", url: "http://localhost:8890", env: "dev" }
            ]
        },
        {
            title: "base-dato",
            description: "Pagina visual para representar el repo de datos por ambiente.",
            links: [
                { label: "Main 5432", url: "http://localhost:5432", env: "main" },
                { label: "QA 5433", url: "http://localhost:5433", env: "qa" },
                { label: "Dev 5434", url: "http://localhost:5434", env: "dev" }
            ]
        }
    ];

    quickLinksContainer.innerHTML = services.map((service) => {
        const links = service.links.map((link) => (
            `<a class="port-link env-${link.env}" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`
        )).join("");

        return `
            <article class="quick-link-card">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <div class="link-row">${links}</div>
            </article>
        `;
    }).join("");
});
