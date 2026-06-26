/* =========================================================
   Premium Mechanical Portfolio JS
   Rebranded for Aditya Pal - Ripple Healthcare
   All original interactive rendering mechanics strictly preserved.
========================================================= */

/* ---------- Base path helper ---------- */
const BASE =
  document.querySelector('meta[name="site-base"]')?.getAttribute("content") ||
  (location.hostname.includes("github.io")
    ? `/${(location.pathname.split("/")[1] || "").trim()}/`
    : ""); 

function safe(path) {
  if (!path) return "";
  const normalized = String(path).replace(/\\/g, "/").replace(/^\/+/, "");
  return (
    BASE.replace(/\/+$/, "/") +
    normalized
      .split("/")
      .map((seg) => encodeURIComponent(seg))
      .join("/")
  );
}

/* ---------- Placeholder ---------- */
const placeholderImg =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1400" height="800">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#050b18"/>
          <stop offset="1" stop-color="#0a1128"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <circle cx="280" cy="220" r="220" fill="rgba(249,115,22,0.03)"/>
      <circle cx="1070" cy="520" r="280" fill="rgba(56,189,248,0.03)"/>
      <text x="50%" y="47%" dominant-baseline="middle" text-anchor="middle"
            fill="rgba(255,255,255,0.75)" font-family="Inter, Arial" font-size="34" font-weight="700">
        Media Asset Not Loaded
      </text>
      <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle"
            fill="rgba(148,163,184,0.5)" font-family="Inter, Arial" font-size="18">
        Verify directory structure and local filename configurations
      </text>
    </svg>
  `);

/* ---------- Media type ---------- */
function mediaType(path) {
  const lower = String(path || "").toLowerCase();
  if (lower.endsWith(".mp4")) return "video";
  if (lower.endsWith(".pdf")) return "pdf";
  return "img";
}

/* ---------- Render main media ---------- */
function renderMainMedia(path) {
  const url = safe(path);
  const type = mediaType(path);

  if (type === "video") {
    return `
      <div class="media-wrap">
        <video
          src="${url}"
          controls
          preload="metadata"
          playsinline
          onerror="this.outerHTML='<img src=&quot;${placeholderImg}&quot; alt=&quot;Media asset missing&quot; />'"
        ></video>
      </div>
    `;
  }

  if (type === "pdf") {
    return `
      <div class="media-wrap">
        <iframe
          src="${url}"
          title="PDF Production Sheet Preview"
          loading="lazy"
        ></iframe>
      </div>
    `;
  }

  return `
    <div class="media-wrap">
      <img
        src="${url}"
        alt="Mechanical Configuration Preview"
        loading="lazy"
        disabled-decoding="async"
        onerror="this.onerror=null; this.src='${placeholderImg}';"
      />
    </div>
  `;
}

/* ===================== DATA DATABASE ===================== */
const projectData = [
  {
    id: 1,
    category: "assembly",
    title: "Universal Coupling Joint Assembly",
    desc: "Torque transmission mechanism modeled to study angular misalignment and assembly motion.",
    summary:
      "A SolidWorks assembly project developed to represent torque transmission between intersecting shafts under angular misalignment. The work focused on mechanism understanding, assembly relationships, and motion-based presentation.",
    problem:
      "Design a mechanical coupling assembly that can transmit rotation between shafts that are not perfectly collinear.",
    tools: ["SolidWorks", "Assembly Mates", "Motion Study"],
    work: [
      "Modeled the yoke, cross, and connected mechanical elements with clean part geometry.",
      "Applied assembly mates to achieve realistic relative motion and kinematic behavior.",
      "Prepared project visuals including rendered views, animation, and documentation."
    ],
    result:
      "The project demonstrates correct assembly structure, motion visualization, and a clear understanding of universal joint mechanism behavior.",
    mainImg: "Universal Coupling Joint Assembly/Universal Coupling Joint Assembly.PNG",
    gallery: [
      "Universal Coupling Joint Assembly/Universal Coupling Joint Assembly.PNG",
      "Universal Coupling Joint Assembly/Universal Coupling Joint Assembly Motion.mp4",
      "Universal Coupling Joint Assembly/Universal Coupling Joint Assembly.mp4"
    ],
    downloads: [
      { label: "SolidWorks Assembly (.SLDASM)", path: "Universal Coupling Joint Assembly/Universal Coupling Joint Assembly.SLDASM" }
    ],
    specs: ["Assembly Design", "Motion Study", "Mechanism Visualization"]
  },
  {
    id: 2,
    category: "assembly",
    title: "Pipe Vice Assembly",
    desc: "Mechanical clamping assembly designed for secure gripping of cylindrical workpieces.",
    summary:
      "A function-oriented SolidWorks assembly project based on a screw-driven pipe vice mechanism. The project focused on component fit, clamping action, and a technically presentable assembly layout.",
    problem:
      "Create a mechanical vice assembly capable of firmly holding cylindrical pipes for workshop operations.",
    tools: ["SolidWorks", "Assembly Modeling", "Technical Documentation"],
    work: [
      "Modeled base, body, screw, jaw, and related parts required for clamping functionality.",
      "Established assembly constraints to reflect mechanical movement and fit between parts.",
      "Generated presentation-ready output for portfolio and technical review."
    ],
    result:
      "Delivered a complete vice assembly with a clear functional mechanism and a clean engineering presentation.",
    mainImg: "Pipe Vice Assembly/Pipe Vice Assembly.PNG",
    gallery: [
      "Pipe Vice Assembly/Pipe Vice Assembly.PNG",
      "Pipe Vice Assembly/Pipe Vice Assembly.mp4"
    ],
    downloads: [{ label: "SolidWorks Assembly (.SLDASM)", path: "Pipe Vice Assembly/Pipe Vice Assembly.SLDASM" }],
    specs: ["Mechanical Assembly", "Clamping System", "CAD Presentation"]
  },
  {
    id: 3,
    category: "assembly",
    title: "Ball Bearing Assembly",
    desc: "Precision-oriented bearing assembly created for arrangement, visualization, and documentation.",
    summary:
      "A detailed CAD representation of a ball bearing assembly with focus on race geometry, ball placement, and clean assembly structure. The project highlights accuracy and presentation quality in a common mechanical component.",
    problem:
      "Model and assemble a bearing system in a way that reflects correct part arrangement and mechanical understanding.",
    tools: ["SolidWorks", "Assembly Modeling", "Drawing / PDF Export"],
    work: [
      "Created bearing races, rolling elements, and related support geometry.",
      "Maintained dimensional consistency and organized component placement in assembly.",
      "Prepared supporting views and documentation for portfolio display."
    ],
    result:
      "Produced a clean and precise bearing assembly suitable for demonstrating core CAD assembly skills.",
    mainImg: "Ball Bearing Assembly/Ball Bearing Assembly.PNG",
    gallery: [
      "Ball Bearing Assembly/Ball Bearing Assembly.PNG",
      "Ball Bearing Assembly/Ball Bearing Assembly.mp4"
    ],
    downloads: [{ label: "SolidWorks Assembly (.SLDASM)", path: "Ball Bearing Assembly/Ball Bearing Assembly.SLDASM" }],
    specs: ["Precision Modeling", "Assembly Practice", "Technical Documentation"]
  },
  {
    id: 4,
    category: "assembly",
    title: "Belt Roller Support Assembly",
    desc: "Support arrangement designed for roller-based conveying and mechanical stability.",
    summary:
      "A conveyor-related support assembly built in SolidWorks to represent roller support structure, connected parts, and practical layout design.",
    problem:
      "Develop a support assembly that can carry roller components with proper alignment and structural arrangement.",
    tools: ["SolidWorks", "Assembly Mates", "CAD Visualization"],
    work: [
      "Modeled support members and connected parts for a roller-support application.",
      "Created assembly relationships to ensure positional accuracy between components.",
      "Prepared media and documentation for project presentation."
    ],
    result:
      "The final model communicates practical assembly structure and organized design intent for material handling applications.",
    mainImg: "Belt Roller Support Assembly/Belt Roller Support Assembly.PNG",
    gallery: [
      "Belt Roller Support Assembly/Belt Roller Support Assembly.PNG",
      "Belt Roller Support Assembly/Belt Roller Support Assembly.mp4"
    ],
    downloads: [{ label: "SolidWorks Assembly (.SLDASM)", path: "Belt Roller Support Assembly/Belt Roller Support Assembly.SLDASM" }],
    specs: ["Support Structure", "Material Handling", "Assembly Layout"]
  },
  {
    id: 5,
    category: "assembly",
    title: "Double Bearing Assembly",
    desc: "Dual-support bearing arrangement modeled for alignment and rotating-system support.",
    summary:
      "A SolidWorks project focused on a double bearing support arrangement, emphasizing neat assembly structure, positional control, and technical output preparation.",
    problem:
      "Represent a dual-bearing support configuration used to improve alignment and rotational stability.",
    tools: ["SolidWorks", "PDF Drafting", "Assembly Design"],
    work: [
      "Modeled bearing support components and assembled them with correct orientation.",
      "Focused on alignment, fit, and overall assembly clarity.",
      "Prepared technical export for communication of design structure."
    ],
    result:
      "Created a clean CAD assembly suitable for demonstrating bearing support arrangement and engineering presentation quality.",
    mainImg: "Double Bearing Assembly/Double Bearing Assembly.PNG",
    gallery: [
      "Double Bearing Assembly/Double Bearing Assembly.PNG"
    ],
    downloads: [{ label: "SolidWorks Assembly (.SLDASM)", path: "Double Bearing Assembly/Double Bearing Assembly.SLDASM" }],
    specs: ["Bearing Support", "Assembly Integrity", "Draft Export"]
  },
  {
    id: 6,
    category: "assembly",
    title: "Hydraulic Cylinder Assembly",
    desc: "Hydraulic actuator modeled with focus on moving parts, fit, and mechanical integration.",
    summary:
      "A SolidWorks assembly of a hydraulic cylinder featuring body, rod, and associated components. The project demonstrates assembly workflow, functional understanding, and clean technical presentation.",
    problem:
      "Create a mechanical assembly representing a hydraulic actuator and its integrated moving elements.",
    tools: ["SolidWorks", "Assembly Modeling", "Motion Understanding"],
    work: [
      "Modeled cylinder body, piston rod, and connected components.",
      "Built assembly relationships to reflect mechanical fit and movement.",
      "Prepared outputs for portfolio-quality documentation."
    ],
    result:
      "The project clearly communicates actuator construction and demonstrates practical assembly development skills.",
    mainImg: "Hydraulic Cylinder Assembly/Hydraulic Cylinder Assembly.PNG",
    gallery: [
      "Hydraulic Cylinder Assembly/Hydraulic Cylinder Assembly.PNG",
      "Hydraulic Cylinder Assembly/Hydraulic Cylinder Assembly.mp4"
    ],
    downloads: [{ label: "SolidWorks Assembly (.SLDASM)", path: "Hydraulic Cylinder Assembly/Hydraulic Cylinder Assembly.SLDASM" }],
    specs: ["Hydraulic Mechanism", "Moving Assembly", "CAD Documentation"]
  },
  {
    id: 7,
    category: "assembly",
    title: "Pulley Support Assembly",
    desc: "Mounting support assembly built for pulley positioning and load distribution.",
    summary:
      "A support-focused assembly designed in SolidWorks for pulley mounting applications. The model emphasizes layout planning, connected part structure, and presentation-oriented documentation.",
    problem:
      "Design a support system capable of holding pulley elements with stability and correct mounting geometry.",
    tools: ["SolidWorks", "Animation", "PDF Export"],
    work: [
      "Modeled structural support components for pulley mounting arrangement.",
      "Established the assembly for positional accuracy and clear mechanical layout.",
      "Produced animation and drawing output to communicate design intent."
    ],
    result:
      "Delivered a well-structured support assembly that highlights practical CAD assembly workflow and engineering presentation.",
    mainImg: "Pulley Support Assembly/Pulley Support Assembly.PNG",
    gallery: [
      "Pulley Support Assembly/Pulley Support Assembly.PNG",
      "Pulley Support Assembly/Pulley Support Assembly.mp4"
    ],
    downloads: [{ label: "SolidWorks Assembly (.SLDASM)", path: "Pulley Support Assembly/Pulley Support Assembly.SLDASM" }],
    specs: ["Support Assembly", "Mechanical Layout", "Technical Export"]
  },
  {
    id: 8,
    category: "sheetmetal",
    title: "Electrical Enclosure",
    desc: "Sheet metal enclosure designed for manufacturability, protection, and clean packaging layout.",
    summary:
      "A fabrication-oriented sheet metal enclosure created in SolidWorks using bends, flanges, and cut features. The project focuses on enclosure geometry, layout cleanliness, and production-style thinking.",
    problem:
      "Design a compact electrical enclosure suitable for fabrication and component protection.",
    tools: ["SolidWorks Sheet Metal", "Bends & Flanges", "Drawing Preparation"],
    work: [
      "Created enclosure geometry using standard sheet metal features and fold logic.",
      "Incorporated cutouts and panel design suitable for practical fabrication.",
      "Prepared drawing-ready output for manufacturing communication."
    ],
    result:
      "Produced a sheet metal enclosure that reflects manufacturable design intent and professional CAD documentation.",
    mainImg: "Electrical Enclosure/Electrical Enclosure.PNG",
    gallery: [
      "Electrical Enclosure/Electrical Enclosure.PNG"
    ],
    downloads: [{ label: "SolidWorks Assembly (.SLDASM)", path: "Electrical Enclosure/Electrical Enclosure.SLDASM" }],
    specs: ["Sheet Metal", "Fabrication Logic", "Engineering Drawings"]
  },
  {
    id: 9,
    category: "sheetmetal",
    title: "Foldable Laptop Stand",
    desc: "Portable sheet metal concept designed for compactness, usability, and manufacturable bending.",
    summary:
      "A product-style sheet metal design developed in SolidWorks to balance portability, structural stability, and user-oriented form.",
    problem:
      "Develop a foldable stand concept that is compact, usable, and feasible to manufacture using sheet metal methods.",
    tools: ["SolidWorks Sheet Metal", "Product Design", "Drawing Export"],
    work: [
      "Built the stand using bend-driven sheet metal design workflow.",
      "Focused on foldability, stability, and ergonomic intent.",
      "Prepared CAD outputs for technical and presentation purposes."
    ],
    result:
      "The project demonstrates product-focused sheet metal design with strong emphasis on simplicity and manufacturability.",
    mainImg: "Foldable Laptop Stand/Foldable Laptop Stand.PNG",
    gallery: [
      "Foldable Laptop Stand/Foldable Laptop Stand.PNG"
    ],
    downloads: [{ label: "SolidWorks Assembly (.SLDASM)", path: "Foldable Laptop Stand/Foldable Laptop Stand.SLDASM" }],
    specs: ["Portable Product", "Foldable Design", "Sheet Metal Modeling"]
  },
  {
    id: 10,
    category: "sheetmetal",
    title: "BBQ Grill",
    desc: "Sheet metal grill concept developed with fabrication and assembly considerations.",
    summary:
      "A SolidWorks sheet metal project built around a BBQ grill concept, focusing on feature creation, assembly structure, and product-style presentation.",
    problem:
      "Create a grill design that combines assembly thinking, fabrication feasibility, and a practical product structure.",
    tools: ["SolidWorks", "Sheet Metal", "Visual Presentation"],
    work: [
      "Developed grill components using sheet metal features and fabrication-oriented geometry.",
      "Organized the design into a coherent assembly structure.",
      "Prepared animation and supporting documentation for presentation."
    ],
    result:
      "Delivered a visually clear and fabrication-aware concept suitable for demonstrating product-style CAD skills.",
    mainImg: "BBQ Grill/BBQ Grill.PNG",
    gallery: [
      "BBQ Grill/BBQ Grill.PNG",
      "BBQ Grill/BBQ Grill.mp4"
    ],
    downloads: [{ label: "SolidWorks Assembly (.SLDASM)", path: "BBQ Grill/BBQ Grill.SLDASM" }],
    specs: ["Sheet Metal Assembly", "Product Concept", "Fabrication Awareness"]
  },
  {
    id: 11,
    category: "weldments",
    title: "Leisure Chair (Weldments)",
    desc: "Welded frame concept developed for structural support and lightweight furniture design.",
    summary:
      "A weldment-based chair frame created in SolidWorks using structural members and practical frame layout. The project highlights clean weldment workflow and documentation readiness.",
    problem:
      "Design a welded chair frame that is structurally practical, visually organized, and suitable for engineering presentation.",
    tools: ["SolidWorks Weldments", "Structural Profiles", "Drawing Export"],
    work: [
      "Created the frame using weldment profiles and structured member layout.",
      "Focused on frame organization and realistic welded construction logic.",
      "Prepared visuals and drawings to support technical communication."
    ],
    result:
      "Produced a clean weldment model that demonstrates frame design workflow and structural modeling ability.",
    mainImg: "Leisure Chair/Leisure Chair.PNG",
    gallery: [
      "Leisure Chair/Leisure Chair.PNG"
    ],
    downloads: [{ label: "SolidWorks Part (.SLDPRT)", path: "Leisure Chair/Leisure Chair.SLDPRT" }],
    specs: ["Weldments", "Frame Design", "Structural Layout"]
  },
  {
    id: 12,
    category: "weldments",
    title: "Platform Trolley",
    desc: "Welded trolley structure designed for industrial material handling applications.",
    summary:
      "A material-handling platform trolley developed in SolidWorks using weldment workflow and assembly-based thinking. The design focuses on utility, frame structure, and technical communication.",
    problem:
      "Create a trolley frame suitable for handling loads while maintaining a practical and fabrication-aware structural layout.",
    tools: ["SolidWorks", "Weldments", "Animation / Drawing Output"],
    work: [
      "Designed the trolley frame using welded members and function-oriented geometry.",
      "Organized the layout for mechanical clarity and industrial use context.",
      "Prepared animations and drawings to improve visual communication."
    ],
    result:
      "The final project communicates a strong structural concept for industrial handling equipment using weldment design workflow.",
    mainImg: "Platform Trolley/Platform Trolley.PNG",
    gallery: [
      "Platform Trolley/Platform Trolley.PNG",
      "Platform Trolley/Platform Trolley.mp4"
    ],
    downloads: [{ label: "SolidWorks Assembly (.SLDASM)", path: "Platform Trolley/Platform Trolley.SLDASM" }],
    specs: ["Industrial Design", "Welded Structure", "Technical Communication"]
  },
  {
    id: 13,
    category: "weldments",
    title: "Stair Structure",
    desc: "Structural stair frame modeled using weldment workflow for efficient fabrication-oriented design.",
    summary:
      "A structural stair model created in SolidWorks using weldment tools to represent fabricated frame geometry and member placement.",
    problem:
      "Build a stair frame that reflects a structured member-based approach suitable for welded fabrication.",
    tools: ["SolidWorks Weldments", "Structural Modeling"],
    work: [
      "Created the stair structure using member-based weldment workflow.",
      "Focused on geometric consistency and organized frame construction.",
      "Prepared the project as a clean structural design representation."
    ],
    result:
      "Produced a straightforward structural weldment model demonstrating frame planning and practical CAD execution.",
    mainImg: "Stair/Stair.PNG",
    gallery: ["Stair/Stair.PNG"],
    downloads: [{ label: "SolidWorks Part (.SLDPRT)", path: "Stair/Stair.SLDPRT" }],
    specs: ["Structural Frame", "Weldment Design", "CAD Modeling"]
  }
];

/* ===================== CONTROLLER RENDERERS ===================== */
function pill(text) {
  return `<span class="meta-pill">${text}</span>`;
}

function mediaLabel(path) {
  const type = mediaType(path);
  if (type === "video") return "Video System";
  if (type === "pdf") return "Production Print (PDF)";
  return "Orthographic Rendering";
}

function escapeHtml(text) {
  return String(text ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function createCard(project, idx) {
  return `
    <article
      class="project-card-shell"
      data-project-id="${project.id}"
      role="button"
      tabindex="0"
      aria-label="Open ${escapeHtml(project.title)}"
    >
      <div class="project-media">
        <img
          src="${safe(project.mainImg)}"
          alt="${escapeHtml(project.title)}"
          loading="lazy"
          onerror="this.onerror=null; this.src='${placeholderImg}';"
        />
      </div>

      <div class="project-body">
        <div class="project-top">
          <h3 class="project-title">${escapeHtml(project.title)}</h3>
          <div class="project-arrow" aria-hidden="true">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </div>
        </div>

        <p class="project-copy">${escapeHtml(project.desc)}</p>

        <div class="project-meta">
          ${(project.specs || []).slice(0, 3).map(pill).join("")}
        </div>

        <div class="project-footer">
          <span class="project-category">${escapeHtml(project.category)}</span>
          <span class="project-link">Verify Assets →</span>
        </div>
      </div>
    </article>
  `;
}

function buildThumb(path, idx, activeIndex) {
  const type = mediaType(path);
  const icon =
    type === "video"
      ? "fa-video"
      : type === "pdf"
      ? "fa-file-pdf"
      : "fa-image";

  const fileName = String(path).split("/").pop();

  return `
    <button
      class="thumb ${idx === activeIndex ? "active" : ""}"
      data-media-index="${idx}"
      aria-label="View asset index ${idx + 1}"
      type="button"
    >
      <div class="thumb-name">
        <i class="fa-solid ${icon}" style="margin-right:8px;color:#38bdf8;"></i>${escapeHtml(fileName)}
      </div>
      <div class="thumb-meta">${mediaLabel(path)}</div>
    </button>
  `;
}

/* ===================== PORTAL RUNTIME ARCHITECTURE ===================== */
let activeProject = null;
let activeMediaIndex = 0;
let lastFocusedCard = null;

function setActiveMedia(idx) {
  if (!activeProject) return;

  const gallery = activeProject.gallery || [];
  if (!gallery.length) return;

  if (idx < 0) idx = gallery.length - 1;
  if (idx >= gallery.length) idx = 0;

  activeMediaIndex = idx;

  const main = document.getElementById("portal-main-media");
  const thumbs = document.getElementById("portal-thumbs");
  const counter = document.getElementById("media-counter");

  if (main) main.innerHTML = renderMainMedia(gallery[activeMediaIndex]);
  if (thumbs) thumbs.innerHTML = gallery.map((m, i) => buildThumb(m, i, activeMediaIndex)).join("");
  if (counter) counter.textContent = `Asset ${activeMediaIndex + 1} / ${gallery.length}`;
}

function openProject(id, triggerEl = null) {
  const project = projectData.find((item) => item.id === id);
  if (!project) return;

  activeProject = project;
  activeMediaIndex = 0;
  lastFocusedCard = triggerEl || document.activeElement;

  const portal = document.getElementById("project-portal");
  const content = document.getElementById("portal-content");
  if (!portal || !content) return;

  const downloadsHtml =
    project.downloads && project.downloads.length
      ? project.downloads
          .map(
            (d) => `
              <a href="${safe(d.path)}" download class="portal-download">
                <i class="fa-solid fa-download"></i>
                ${escapeHtml(d.label)}
              </a>
            `
          )
          .join("")
      : `<div class="no-download-note">Analysis geometry restricted. Source configuration drawing metrics attached in configuration gallery index.</div>`;

  content.innerHTML = `
    <div class="portal-panel">
      <div class="portal-topbar">
        <div>Configuration Pipeline</div>
        <div id="media-counter"></div>
      </div>

      <div id="portal-main-media"></div>

      <div class="portal-nav-wrap">
        <button id="prevBtn" class="portal-nav" type="button">
          <i class="fa-solid fa-arrow-left"></i> Previous Node
        </button>
        <button id="nextBtn" class="portal-nav" type="button">
          Next Node <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div id="portal-thumbs" class="portal-thumbs"></div>
    </div>

    <div class="portal-panel">
      <div class="portal-headline">${escapeHtml(project.category)} System</div>
      <h2 class="portal-title">${escapeHtml(project.title)}</h2>
      <p class="portal-summary">${escapeHtml(project.summary)}</p>

      <div class="portal-grid">
        <div class="portal-block">
          <div class="portal-block-title">Functional Criteria</div>
          <p>${escapeHtml(project.problem)}</p>
        </div>

        <div class="portal-block">
          <div class="portal-block-title">Engineering Pipeline Tools</div>
          <ul>
            ${(project.tools || []).map((t) => `<li>${escapeHtml(t)}</li>`).join("")}
          </ul>
        </div>

        <div class="portal-block">
          <div class="portal-block-title">Applied Configuration Modifications</div>
          <ul>
            ${(project.work || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>

        <div class="portal-block">
          <div class="portal-block-title">Validation Metric / Outcome</div>
          <p>${escapeHtml(project.result)}</p>
        </div>
      </div>

      <div class="portal-specs">
        ${(project.specs || []).map((s) => `<span class="portal-pill">${escapeHtml(s)}</span>`).join("")}
      </div>

      <div class="portal-actions">
        ${downloadsHtml}
        <button id="backBtn" class="portal-return" type="button">Return to Main Database</button>
      </div>
    </div>
  `;

  portal.classList.remove("hidden");
  portal.classList.add("show");
  portal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  setActiveMedia(0);

  document.getElementById("prevBtn")?.addEventListener("click", prevMedia);
  document.getElementById("nextBtn")?.addEventListener("click", nextMedia);
  document.getElementById("backBtn")?.addEventListener("click", closeProjectPortal);

  document.getElementById("portal-thumbs")?.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-media-index]");
    if (!btn) return;
    setActiveMedia(Number(btn.dataset.mediaIndex));
  });

  setTimeout(() => {
    document.getElementById("closePortalBtn")?.focus();
  }, 50);
}

function closeProjectPortal() {
  const portal = document.getElementById("project-portal");
  if (!portal) return;

  portal.classList.remove("show");
  portal.classList.add("hidden");
  portal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto";

  activeProject = null;
  activeMediaIndex = 0;

  if (lastFocusedCard && typeof lastFocusedCard.focus === "function") {
    setTimeout(() => lastFocusedCard.focus(), 50);
  }
}

function prevMedia() {
  setActiveMedia(activeMediaIndex - 1);
}

function nextMedia() {
  setActiveMedia(activeMediaIndex + 1);
}

/* ===================== FILTER / SEARCH EXECUTION ENGINE ===================== */
let currentCat = "all";
let currentQuery = "";

function attachGridClickOnce() {
  const grid = document.getElementById("project-grid");
  if (!grid || grid.dataset.bound === "1") return;

  grid.addEventListener("click", (e) => {
    const card = e.target.closest("[data-project-id]");
    if (!card) return;
    openProject(Number(card.dataset.projectId), card);
  });

  grid.addEventListener("keydown", (e) => {
    const card = e.target.closest("[data-project-id]");
    if (!card) return;

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openProject(Number(card.dataset.projectId), card);
    }
  });

  grid.dataset.bound = "1";
}

function renderGrid(data) {
  const grid = document.getElementById("project-grid");
  const count = document.getElementById("count");
  if (!grid) return;

  grid.innerHTML = data.map((project, i) => createCard(project, i)).join("");
  if (count) count.textContent = data.length;
}

function setActiveFilter(cat) {
  document.querySelectorAll("#filters button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.cat === cat);
  });
}

function applyFilterAndSearch() {
  const query = currentQuery.trim().toLowerCase();

  const filteredByCat =
    currentCat === "all"
      ? projectData
      : projectData.filter((project) => project.category === currentCat);

  const finalData = !query
    ? filteredByCat
    : filteredByCat.filter((project) => {
        const haystack = [
          project.title,
          project.desc,
          project.summary,
          project.problem,
          project.result,
          ...(project.tools || []),
          ...(project.work || []),
          ...(project.specs || [])
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(query);
      });

  renderGrid(finalData);
}

/* ===================== INTERFACE ROUTINES ===================== */
function initMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => menu.classList.add("hidden"));
  });
}

function preloadMainImages() {
  projectData.forEach((project) => {
    if (!project?.mainImg) return;
    const img = new Image();
    img.src = safe(project.mainImg);
  });
}

/* ===================== APPLICATION BOOTSTRAP INITIALIZATION ===================== */
document.addEventListener("DOMContentLoaded", () => {
  attachGridClickOnce();
  initMobileMenu();
  preloadMainImages();

  document.querySelectorAll("#filters button").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentCat = btn.dataset.cat;
      setActiveFilter(currentCat);
      applyFilterAndSearch();
    });
  });

  const search = document.getElementById("search");
  if (search) {
    search.addEventListener("input", (e) => {
      currentQuery = e.target.value || "";
      applyFilterAndSearch();
    });
  }

  document.getElementById("closePortalBtn")?.addEventListener("click", closeProjectPortal);

  document.getElementById("project-portal")?.addEventListener("click", (e) => {
    if (e.target.id === "project-portal") closeProjectPortal();
  });

  document.addEventListener("keydown", (e) => {
    const portalOpen = document.getElementById("project-portal")?.classList.contains("show");
    if (!portalOpen) return;

    if (e.key === "Escape") closeProjectPortal();
    if (e.key === "ArrowLeft") prevMedia();
    if (e.key === "ArrowRight") nextMedia();
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Load and cache structural index cards on framework ignition
  setActiveFilter("all");
  applyFilterAndSearch();
});