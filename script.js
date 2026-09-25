/* =========================
   30 АРХЕОЛОГИЯЛЫҚ НЫСАН
========================= */

const bronzeSites = [

  /* БАТЫС — 5 */

  {
    name: "Тоқсанбай",
    region: "Батыс Қазақстан",
    color: "#795548"
  },

  {
    name: "Жаңа Қазан",
    region: "Батыс Қазақстан",
    color: "#795548"
  },

  {
    name: "Сор-Айдын I",
    region: "Батыс Қазақстан",
    color: "#795548"
  },

  {
    name: "Елекшар II",
    region: "Батыс Қазақстан",
    color: "#795548"
  },

  {
    name: "Үлгілі I",
    region: "Батыс Қазақстан",
    color: "#795548"
  },


  /* ОҢТҮСТІК — 8 */

  {
    name: "Тегіскен",
    region: "Оңтүстік Қазақстан",
    color: "#4caf50"
  },

  {
    name: "Таутары",
    region: "Оңтүстік Қазақстан",
    color: "#4caf50"
  },

  {
    name: "Асы",
    region: "Оңтүстік Қазақстан",
    color: "#4caf50"
  },

  {
    name: "Тұрген II",
    region: "Оңтүстік Қазақстан",
    color: "#4caf50"
  },

  {
    name: "Бутакты",
    region: "Оңтүстік Қазақстан",
    color: "#4caf50"
  },

  {
    name: "Талапты III",
    region: "Оңтүстік Қазақстан",
    color: "#4caf50"
  },

  {
    name: "Тамғалы",
    region: "Оңтүстік Қазақстан",
    color: "#4caf50"
  },

  {
    name: "Күлсай I",
    region: "Оңтүстік Қазақстан",
    color: "#4caf50"
  },


  /* ОРТАЛЫҚ — 6 */

  {
    name: "Беғазы",
    region: "Орталық Қазақстан",
    color: "#ff9800"
  },

  {
    name: "Дәндібай",
    region: "Орталық Қазақстан",
    color: "#ff9800"
  },

  {
    name: "Кент",
    region: "Орталық Қазақстан",
    color: "#ff9800"
  },

  {
    name: "Атасу",
    region: "Орталық Қазақстан",
    color: "#ff9800"
  },

  {
    name: "Бұғылы",
    region: "Орталық Қазақстан",
    color: "#ff9800"
  },

  {
    name: "Ақмая",
    region: "Орталық Қазақстан",
    color: "#ff9800"
  },


  /* СОЛТҮСТІК — 6 */

  {
    name: "Петровка II",
    region: "Солтүстік Қазақстан",
    color: "#2196f3"
  },

  {
    name: "Амангелді I",
    region: "Солтүстік Қазақстан",
    color: "#2196f3"
  },

  {
    name: "Боголюбово I",
    region: "Солтүстік Қазақстан",
    color: "#2196f3"
  },

  {
    name: "Новоникольское",
    region: "Солтүстік Қазақстан",
    color: "#2196f3"
  },

  {
    name: "Чаглинка I",
    region: "Солтүстік Қазақстан",
    color: "#2196f3"
  },

  {
    name: "Ефимовка I",
    region: "Солтүстік Қазақстан",
    color: "#2196f3"
  },


  /* ШЫҒЫС — 5 */

  {
    name: "Қанай",
    region: "Шығыс Қазақстан",
    color: "#9c27b0"
  },

  {
    name: "Мало-Красноярка",
    region: "Шығыс Қазақстан",
    color: "#9c27b0"
  },

  {
    name: "Новошульбинское",
    region: "Шығыс Қазақстан",
    color: "#9c27b0"
  },

  {
    name: "Қойтас 4",
    region: "Шығыс Қазақстан",
    color: "#9c27b0"
  },

  {
    name: "Қойтас 5",
    region: "Шығыс Қазақстан",
    color: "#9c27b0"
  }

];



/* =========================
   КАРТА КООРДИНАТАЛАРЫ
========================= */

const mapCoordinates = [

  /* 1–5 БАТЫС */

  [48.0, 52.5],
  [49.0, 51.8],
  [49.1, 52.0],
  [50.5, 52.3],
  [50.4, 51.9],


  /* 6–13 ОҢТҮСТІК */

  [45.7, 61.3],
  [42.9, 70.5],
  [43.2, 77.5],
  [43.35, 77.2],
  [43.25, 76.9],
  [43.0, 76.8],
  [43.80, 75.54],
  [43.05, 78.39],


  /* 14–19 ОРТАЛЫҚ */

  [48.26818, 75.34607],
  [48.1, 75.2],
  [49.23122, 75.86259],
  [48.3, 71.5],
  [48.4, 73.0],
  [49.0, 73.5],


  /* 20–25 СОЛТҮСТІК */

  [54.2, 69.1],
  [54.3, 69.0],
  [54.6, 68.9],
  [54.2, 70.0],
  [53.6, 69.0],
  [54.8, 68.5],


  /* 26–30 ШЫҒЫС */

  [49.9, 83.5],
  [49.8, 83.2],
  [51.0, 82.4],
  [49.2, 83.8],
  [49.2, 83.85]

];



let realMap = null;



/* =========================
   БЕТ АУЫСТЫРУ
========================= */

function openPage(page) {

  document.getElementById("home").style.display = "none";

  const pages =
    document.querySelectorAll(".info-page");

  pages.forEach(function(pageElement) {

    pageElement.style.display = "none";

  });


  const selectedPage =
    document.getElementById(page);


  if (selectedPage) {

    selectedPage.style.display = "block";

  }


  window.scrollTo(0, 0);


  /* КАРТА АШЫЛСА */

  if (page === "map") {

    setTimeout(function() {

      createMap();

    }, 200);

  }

}



/* =========================
   БАСТЫ БЕТКЕ ҚАЙТУ
========================= */

function goHome() {

  const pages =
    document.querySelectorAll(".info-page");


  pages.forEach(function(pageElement) {

    pageElement.style.display = "none";

  });


  document.getElementById("home").style.display = "block";


  window.scrollTo(0, 0);

}



/* =========================
   LEAFLET КАРТАСЫ
========================= */

function createMap() {

  const mapElement =
    document.getElementById("kazakhstan-map");


  if (!mapElement) {

    return;

  }


  /* карта бұрын жасалса */

  if (realMap) {

    setTimeout(function() {

      realMap.invalidateSize();

    }, 100);

    return;

  }


  /* КАРТАНЫ ЖАСАУ */

  realMap =
    L.map("kazakhstan-map").setView(
      [48.0, 67.0],
      5
    );


  /* КАРТА ФОНЫ */

  L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 18,

      attribution:
        "&copy; OpenStreetMap contributors"
    }
  ).addTo(realMap);



  /* 30 НҮКТЕ */

  bronzeSites.forEach(function(site, index) {


    const coordinate =
      mapCoordinates[index];


    /* НӨМІРЛІ БЕЛГІ */

    const icon =
      L.divIcon({

        className: "",

        html:
          `
          <div
            class="number-marker"
            style="background:${site.color};"
          >
            ${index + 1}
          </div>
          `,

        iconSize: [32, 32],

        iconAnchor: [16, 16],

        popupAnchor: [0, -15]

      });



    /* MARKER */

    const marker =
      L.marker(
        coordinate,
        {
          icon: icon
        }
      ).addTo(realMap);



    /* POPUP */

    marker.bindPopup(

      `
      <div style="
        min-width:190px;
        font-family:Arial,sans-serif;
      ">

        <div style="
          font-size:13px;
          color:#86694c;
          margin-bottom:5px;
        ">
          Археологиялық нысан №${index + 1}
        </div>

        <h3 style="
          margin:0 0 8px;
          color:#3f3024;
        ">
          ${site.name}
        </h3>

        <p style="
          margin:5px 0;
        ">
          <strong>Аймақ:</strong>
          ${site.region}
        </p>

        <p style="
          margin:8px 0 0;
          line-height:1.4;
        ">
          Қола дәуіріне қатысты
          археологиялық нысан.
        </p>

      </div>
      `

    );

  });



  /* МАСШТАБ */

  L.control.scale().addTo(realMap);



  /* КАРТАНЫ ДҰРЫС ӨЛШЕМГЕ КЕЛТІРУ */

  setTimeout(function() {

    realMap.invalidateSize();

  }, 300);

}



/* =========================
   ІЗДЕУ
========================= */

function showSearch() {

  document.getElementById("search-box").style.display =
    "flex";

}


function showSettings() {

  document.getElementById("settings-box").style.display =
    "flex";

}


function closePopup() {

  document.getElementById("search-box").style.display =
    "none";

  document.getElementById("settings-box").style.display =
    "none";

}



function searchSite() {

  const input =
    document.getElementById("search-input");

  const result =
    document.getElementById("search-result");


  const text =
    input.value.trim().toLowerCase();


  if (!text) {

    result.textContent =
      "Іздеу сөзін енгізіңіз.";

    return;

  }


  const found =
    bronzeSites.find(function(site) {

      return site.name
        .toLowerCase()
        .includes(text);

    });


  if (found) {

    result.innerHTML =
      `
      <strong>${found.name}</strong><br>
      Аймақ: ${found.region}
      `;

  } else {

    result.textContent =
      "Бұл нысан табылмады.";

  }

}



/* =========================
   ҚАРІП ӨЛШЕМІ
========================= */

function changeFontSize(size) {

  if (size === "large") {

    document.body.classList.add("large-font");

  } else {

    document.body.classList.remove("large-font");

  }

}



/* =========================
   САЙТТЫ АШҚАНДА
========================= */

window.addEventListener(
  "load",
  function() {

    document.getElementById("home").style.display =
      "block";


    document
      .querySelectorAll(".info-page")
      .forEach(function(pageElement) {

        pageElement.style.display = "none";

      });

  }
);
