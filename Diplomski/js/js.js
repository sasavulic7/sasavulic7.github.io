"use strict";

const knjige = [
  {
    naziv: "Faraonovo Zavestanje",
    pisac: "A. M. Din",
    zanr: "TRILERI/MISTERIJE",
    pdfSrc: "knjige/A. M. Dean - Faraonovo zaveštanje.pdf",
    slika: "faraonovo_zavestanje",
  },
  {
    naziv: "Americki Dervis",
    pisac: "Ajad Aktar",
    zanr: "DRAMA",
    pdfSrc: "knjige/Ajad Aktar - Američki derviš.pdf",
    slika: "americki_dervis",
  },
  {
    naziv: "Mocvara",
    pisac: "Arnaldur Indridason",
    zanr: "TRILERI/MISTERIJE",
    pdfSrc: "knjige/Alnaldur Indriđason~Mocvara.pdf",
    slika: "mocvara",
  },
  {
    naziv: "Stranac",
    pisac: "Alber Kami",
    zanr: "KLASICI",
    pdfSrc: "knjige/Albert Kami - Stranac.pdf",
    slika: "stranac",
  },

  {
    naziv: "Otimač",
    pisac: "Alma Katsu",
    zanr: "HOROR/TRILERI",
    pdfSrc: "knjige/Alma Katsu - Otimač.pdf",
    slika: "otimac",
  },
  {
    naziv: "Večera sa vampirom",
    pisac: "Ebigejl Gibs",
    zanr: "LJUBAVNI/FANTASTIKA",
    pdfSrc: "knjige/Abigail Gibbs - Večera s vampirom.pdf",
    slika: "vecera_sa_vampirom",
  },
  {
    naziv: "Devojka koju si voleo",
    pisac: "A. R. Tori",
    zanr: "BELETRISTIKA",
    pdfSrc: "knjige/A. R. Tori - Devojka koju si voleo.pdf",
    slika: "devojka_koju_si_voleo",
  },
  {
    naziv: "Slatka osveta",
    pisac: "Abby Green",
    zanr: "LJUBAVNI",
    pdfSrc: "knjige/Abby Green - Slatka osveta.pdf",
    slika: "slatka_osveta",
  },
  {
    naziv: "Sećaš li se Doli Bel",
    pisac: "Abdulah Sidran",
    zanr: "LJUBAVNI/ISTORIJSKI",
    pdfSrc: "knjige/Abdulah Sidran~Sećaš li se Doli Bel.pdf",
    slika: "secas_li_se_doli_bel",
  },
  {
    naziv: "Vrata suza",
    pisac: "Abraham Verghese",
    zanr: "LJUBAVNI/DRAMA",
    pdfSrc: "knjige/Abraham Verghese - Vrata suza.pdf",
    slika: "vrataSuza",
  },
  {
    naziv: "Noćna Ptica",
    pisac: "Adam Brookes",
    zanr: "TRILERI/MISTERIJE",
    pdfSrc: "knjige/Adam Brookes - Noćna Ptica.pdf",
    slika: "nocnaPtica",
  },
  {
    naziv: "Sin gospodara siročadi",
    pisac: "Adam Johnson",
    zanr: "TRILERI/DRAMA",
    pdfSrc: "knjige/Adam Johnson - Sin gospodara siročadi.pdf",
    slika: "sinGospodaraSirocadi",
  },
  {
    naziv: "Troja",
    pisac: "Adel Geras",
    zanr: "ISTORIJSKI/DRAMA",
    pdfSrc: "knjige/Adel Geras - Troja.pdf",
    slika: "troja",
  },
  {
    naziv: "Muškarci koje sam volela",
    pisac: "Adele Parks",
    zanr: "LJUBAVNI",
    pdfSrc: "knjige/Adele Parks - Muškarci koje sam volela.pdf",
    slika: "muskarciKojeSamVolela",
  },
  {
    naziv: "Magi - Potraga za skrivenom tradicijom",
    pisac: "Adrian G. Gilbert",
    zanr: "MISTERIJA",
    pdfSrc:
      "knjige/Adrian G. Gilbert - Magi - Potraga za skrivenom tradicijom.pdf",
    slika: "magi",
  },
  {
    naziv: "Jesenji oblaci",
    pisac: "Adriana Trigiani",
    zanr: "LJUBAVNI",
    pdfSrc: "knjige/Adriana Trigiani - Jesenji oblaci.pdf",
    slika: "jesenjiOblaci",
  },
  {
    naziv: "Ljubav na italijanski način",
    pisac: "Adriana Trigiani",
    zanr: "LJUBAVNI",
    pdfSrc: "knjige/Adriana Trigiani - Ljubav na talijanski način.pdf",
    slika: "ljubavNaItalijanskiNacin",
  },
  {
    naziv: "Postolareva žena",
    pisac: "Adriana Trigiani",
    zanr: "LJUBAVNI",
    pdfSrc: "knjige/Adriana Trigiani - Postolareva žena.pdf",
    slika: "postolarevaZena",
  },
  {
    naziv: "Mesec nad Firencom",
    pisac: "Adrienne McDonnell",
    zanr: "LJUBAVNI",
    pdfSrc: "knjige/Adrienne McDonnell - Mesec nad Firencom.pdf",
    slika: "mesecNadFirencom",
  },
  {
    naziv: "Pojedite me",
    pisac: "Agnes Desarthe",
    zanr: "DRAMA",
    pdfSrc: "knjige/Agnes Desarthe - Pojedite me.pdf",
    slika: "pojediteMe",
  },
  {
    naziv: "Kraljica puta svile",
    pisac: "Agnes Imhof",
    zanr: "DRAMA",
    pdfSrc: "knjige/Agnes Imhof - Kraljica Puta svile.pdf",
    slika: "kraljicaPutaSvile",
  },
  {
    naziv: "Magla i noć",
    pisac: "Ahmet Ümit",
    zanr: "TRILER",
    pdfSrc: "knjige/Ahmet Ümit - Magla i noć.pdf",
    slika: "maglainoc",
  },
  {
    naziv: "Poslednji voz za Istanbul",
    pisac: "Ayse Kulin",
    zanr: "LJUBAVNI/DRAMA",
    pdfSrc: "knjige/Ajše Kulin~Poslednji voz za Istanbul.pdf",
    slika: "poslednjiVozZaIstambul",
  },
  {
    naziv: "Zbogom",
    pisac: "Ayse Kulin",
    zanr: "DRAMA",
    pdfSrc: "knjige/Ajše Kulin~Zbogom.pdf",
    slika: "zbogom",
  },
  {
    naziv: "Ako se usudite",
    pisac: "Kresley Cole",
    zanr: "LJUBAVNI/ISTORIJSKI",
    pdfSrc: "knjige/Ako se usudite.pdf",
    slika: "akoSeUsudite",
  },
  {
    naziv: "Pakao i druge priče",
    pisac: "Ryūnosuke Akutagawa",
    zanr: "PRIČE/MITOLOGIJA",
    pdfSrc: "knjige/Akutagava Rjunosuke - Pakao i druge priče.pdf",
    slika: "pakaoIdrugePrice",
  },
  {
    naziv: "Tuđinac",
    pisac: "Foster Alan Dean",
    zanr: "NAUČNA FANTASTIKA",
    pdfSrc: "knjige/Alan Dean Foster~Tuđinac.pdf",
    slika: "tudjinac",
  },
  {
    naziv: "Traganje za vrlinom",
    pisac: "Alaster Mekintajer",
    zanr: "FILOZOFIJA",
    pdfSrc: "knjige/Alaster Mekintajer~Traganje za vrlinom.pdf",
    slika: "traganjeZaVrlinom",
  },
  {
    naziv: "Boje prljasvtine",
    pisac: "Alber Kosri",
    zanr: "DRAMA",
    pdfSrc: "knjige/Alber Kosri~Boje prljavštine.pdf",
    slika: "bojePrljavstine",
  },
  {
    naziv: "Ako mi kažeš dođi, ostaviću sve...samo mi kaži da dođem",
    pisac: "Albert Espinosa",
    zanr: "SAVREMENA FIKCIJA",
    pdfSrc:
      "knjige/Albert Espinosa~Ako mi kažeš dođi, ostaviću sve...samo mi kaži da dođem.pdf",
    slika: "akoMiKazesDodji",
  },
  {
    naziv: "Mit o Sizifu",
    pisac: "Albert Kami",
    zanr: "SAVREMENA FIKCIJA",
    pdfSrc: "knjige/Albert Kami - Mit o Sizifu.pdf",
    slika: "mitOSizifu",
  },
  {
    naziv: "Rimljanka",
    pisac: "Alberto Moravia",
    zanr: "KLASICI",
    pdfSrc: "knjige/Alberto Moravia - Rimljanka.pdf",
    slika: "rimljanka",
  },
  {
    naziv: "Sav taj život",
    pisac: "Alehandro Palomas",
    zanr: "DRAMA",
    pdfSrc: "knjige/Alehandro Palomas - Sav taj život.pdf",
    slika: "savTajZivot",
  },
  {
    naziv: "Dama s kamelijama",
    pisac: "Aleksandar Dima",
    zanr: "LJUBAVNI/KLASICI",
    pdfSrc: "knjige/Aleksandar Dima - Dama s kamelijama.pdf",
    slika: "damasKamelijama",
  },
  {
    naziv: "Veliki rat",
    pisac: "Aleksandar Gatalica",
    zanr: "ISTORIJSKI",
    pdfSrc: "knjige/Aleksandar Gatalica - Veliki Rat.pdf",
    slika: "velikiRat",
  },
  {
    naziv: "U inat kiši",
    pisac: "Aleksandar Mekol-Smit",
    zanr: "DRAMA",
    pdfSrc: "knjige/Aleksandar Mekol-Smit~U inat kiši.pdf",
    slika: "uInatKisi",
  },
  {
    naziv: "Žirafine suze",
    pisac: "Aleksandar Mekol-Smit",
    zanr: "DRAMA",
    pdfSrc: "knjige/Aleksandar Mekol-Smit~Žirafine suze.pdf",
    slika: "zirafinesuze",
  },
  {
    naziv: "Tajne srpskog džet seta",
    pisac: "Aleksandar Saša Ignjatović",
    zanr: "PUBLICISTIKA",
    pdfSrc: "knjige/Aleksandar Sasa Ignjatovic - Tajne srpskog dzet seta 1.pdf",
    slika: "tajnesrpskog",
  },
  {
    naziv: "Ime žrtve NIKO",
    pisac: "Aleksandra Marinjina",
    zanr: "KRIMINALISTIKA",
    pdfSrc: "knjige/Aleksandra Marinjina~Ime žrtve niko.pdf",
    slika: "imezrtve",
  },
  {
    naziv: "Autiobiografija Branislava Nušića",
    pisac: "Branislav Nušić",
    zanr: "AUTOBIOGRAFIJA",
    pdfSrc: "https://www.laguna.rs/odlomak_5071_autobiografija.html",
    slika: "autiobNusic",
  },
  {
    naziv: "Blato, znoj i suze",
    pisac: "Ber Grils",
    zanr: "AUTOBIOGRAFIJA",
    pdfSrc: "https://www.laguna.rs/odlomak_2912_blato_znoj_i_suze_autobiografija.html",
    slika: "ber",
  },
  {
    naziv: "Život u porodici",
    pisac: "Jesper Jul",
    zanr: "PSIHOLOGIJA",
    pdfSrc: "https://www.laguna.rs/odlomak_4396_zivot_u_porodici.html",
    slika: "zivot",
  },
  {
    naziv: "Sreća",
    pisac: "Vilhelm Šmid",
    zanr: "PSIHOLOGIJA",
    pdfSrc: "https://www.laguna.rs/odlomak_3958_sreca.html",
    slika: "sreca",
  },
  {
    naziv: "Prisutnost",
    pisac: "Ejmi Kadi",
    zanr: "PSIHOLOGIJA",
    pdfSrc: "https://www.laguna.rs/odlomak_3582_prisutnost.html",
    slika: "prisutnost",
  },
  {
    naziv: "Moć Drveta",
    pisac: "Peter Voleben",
    zanr: "PUBLICISTIKA",
    pdfSrc: "https://www.laguna.rs/odlomak_3582_prisutnost.html",
    slika: "mocdrveta",
  },
  {
    naziv: "Soko zove lastu",
    pisac: "Dragan Velikić",
    zanr: "PUBLICISTIKA",
    pdfSrc: "https://www.laguna.rs/odlomak_6999_soko_zove_lastu.html",
    slika: "soko",
  },
  {
    naziv: "Pedeset - pedeset",
    pisac: "Stiv Kavana",
    zanr: "BELETRISTIKA/KRIMINALISTIKA",
    pdfSrc: "https://www.vulkani.rs/files/files/28899.pdf",
    slika: "pedeset",
  },
  {
    naziv: "Zločin i kazna",
    pisac: "Fjodor Dostojevski",
    zanr: "KLASICI/BELETRISTIKA",
    pdfSrc: "https://www.laguna.rs/odlomak_5074_zlocin_i_kazna.html",
    slika: "zlocin",
  },
  {
    naziv: "Tajni Grad",
    pisac: "K. Dž. Doerti, Karina Rozenfeld",
    zanr: "TINEJDZ/FANTASTIKA",
    pdfSrc: "https://www.laguna.rs/odlomak_7095_tajni_grad.html",
    slika: "tajnigrad",
  },
  {
    naziv: "Mali dimničar",
    pisac: "R. M. Marko",
    zanr: "TINEJDZ",
    pdfSrc: "https://www.laguna.rs/odlomak_6137_mali_dimnicar.html",
    slika: "mali",
  },
  {
    naziv: "Carstvo oluja",
    pisac: "Sara Dž. Mas",
    zanr: "TINEJDZ",
    pdfSrc: "https://www.laguna.rs/odlomak_4789_carstvo_oluja.html",
    slika: "carstvo",
  },
  {
    naziv: "Skelig",
    pisac: "Dejvid Almond",
    zanr: "TINEJDZ",
    pdfSrc: "https://www.laguna.rs/odlomak_4154_skelig.html",
    slika: "skelig",
  },
  {
    naziv: "To",
    pisac: "Stiven King",
    zanr: "Horor",
    pdfSrc: "https://clicklibrary.wordpress.com/wp-content/uploads/2018/09/it-by-stephen-king.pdf",
    slika: "to",
  },
  {
    naziv: "Kult",
    pisac: "Adam Nevil",
    zanr: "Horor",
    pdfSrc: "https://www.laguna.rs/odlomak_3245_kult.html",
    slika: "kult",
  },
  {
    naziv: "Deca noći",
    pisac: "Den Simons",
    zanr: "Horor",
    pdfSrc: "https://www.laguna.rs/odlomak_3204_deca_noci.html",
    slika: "deca",
  },
  {
    naziv: "Nordijska mitologija",
    pisac: "Nejl Gejmen",
    zanr: "MITOLOGIJA",
    pdfSrc: "https://www.laguna.rs/odlomak_4144_nordijska_mitologija.html",
    slika: "nordijska",
  },
  {
    naziv: "Ahilova pesma",
    pisac: "Madlin Miler",
    zanr: "MITOLOGIJA",
    pdfSrc: "https://www.laguna.rs/odlomak_6217_ahilova_pesma.html",
    slika: "ahilova",
  },
  {
    naziv: "Kirka",
    pisac: "Madlin Miler",
    zanr: "MITOLOGIJA",
    pdfSrc: "https://www.laguna.rs/odlomak_5566_kirka.html",
    slika: "kirka",
  },
  {
    naziv: "Off",
    pisac: "Momo Kapor",
    zanr: "PRIČE",
    pdfSrc: "https://www.laguna.rs/odlomak_7591_off.html",
    slika: "off",
  },
  {
    naziv: "Priče o skoro svemu",
    pisac: "Igor Kolarov",
    zanr: "PRIČE",
    pdfSrc: "https://www.laguna.rs/odlomak_7099_price_o_skoro_svemu.html",
    slika: "price",
  },
];

const containerCards = document.querySelector("#kartice");
// const kartica = document.querySelector(".kartica");
const btnKnjige = document.querySelector("#btn-knjige");
const sekcijaKnjige = document.querySelector("#section1");
const crnaTema = document.querySelector("#themeToggle");

// const themeToggle = document.getElementById("themeToggle");

btnKnjige.addEventListener("click", function (e) {
  e.preventDefault();
  const scrollSekcijaKnjige = sekcijaKnjige.getBoundingClientRect();

  sekcijaKnjige.scrollIntoView({
    behavior: "smooth",
  });
});

let currentPage = 1;
const itemsPerPage = 12;

function generisiKarticu(knjiga) {
  return `<div class="flex-container">
    <div class="item">
      <h2 class="h2Kartica">${knjiga.naziv}</h2>
      <p class="pKartica">Pisac: ${knjiga.pisac}</p>
      <p class="pKartica">Žanr: ${knjiga.zanr}</p>
      <img src="slikeKnjiga/${knjiga.slika}.jpg" alt="Naslov slike">
    </div>
    <div>
      <a href="${knjiga.pdfSrc}" target="_blank">
        <button>Citaj odlomak</button>
      </a>
      <button class="naruci-knjigu" data-knjiga="${knjiga.naziv}">Naruči knjigu</button>
    </div>
  </div>`;
}

const karticeContainer = document.getElementById("kartice-container");

knjige.forEach((knjiga) => {
  karticeContainer.innerHTML += generisiKarticu(knjiga);
});

function prikaziKnjige() {
  const karticeContainer = document.getElementById("kartice-container");
  karticeContainer.innerHTML = "";

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const knjigeZaPrikaz = knjige.slice(startIndex, endIndex);

  knjigeZaPrikaz.forEach((knjiga) => {
    karticeContainer.innerHTML += generisiKarticu(knjiga);
  });
}

function updatePaginationButtons() {
  document.getElementById("prevPage").disabled = currentPage === 1;
  document.getElementById("nextPage").disabled =
    currentPage === Math.ceil(knjige.length / itemsPerPage);
}

document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    prikaziKnjige();
    updatePaginationButtons();
  }
});

document.getElementById("nextPage").addEventListener("click", () => {
  if (currentPage < Math.ceil(knjige.length / itemsPerPage)) {
    currentPage++;
    prikaziKnjige();
    updatePaginationButtons();
  }
});

// Initial display
prikaziKnjige();
updatePaginationButtons();

crnaTema.addEventListener("change", function () {
  const body = document.querySelector("#body");
  const glBody = document.querySelector("body");

  const glavniNaslov = document.querySelector(".glavniNaslov");

  glavniNaslov.classList.toggle("dark-theme-text");
  glBody.classList.toggle("dark-theme-body");
  body.classList.toggle("dark-theme-body");

  const h4 = document.querySelector("h4");
  if (!crnaTema.checked) {
    h4.textContent = "Bela tema";
    h4.style.color = "black";
  } else {
    h4.textContent = "Crna tema";
    h4.style.color = "white";
  }
});

function filtrirajKnjigePoZanru(zanr) {
  const filtriraneKnjige = knjige.filter((knjiga) =>
    knjiga.zanr.toUpperCase().includes(zanr.toUpperCase())
  );
  prikaziFiltriraneKnjige(filtriraneKnjige);
}

function prikaziFiltriraneKnjige(knjigeZaPrikaz) {
  const karticeContainer = document.getElementById("kartice-container");
  karticeContainer.innerHTML = "";

  knjigeZaPrikaz.forEach((knjiga) => {
    karticeContainer.innerHTML += generisiKarticu(knjiga);
  });
}

// Selektovanje svih dropdown stavki
const dropdownItems = document.querySelectorAll(".dropdown-item");

// Dodavanje događaja na svaku stavku
dropdownItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault(); // Zaustavljanje podrazumevanog ponašanja linka

    // Dobijanje teksta izabrane stavke
    const izabraniZanr = item.innerText;
    const filterIme = document.getElementById("filtriraj");

    filterIme.textContent = izabraniZanr;

    // Filtriranje i prikazivanje knjiga koje pripadaju izabranoj kategoriji
    filtrirajKnjigePoZanru(izabraniZanr);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("naruci-modal");
  const span = document.getElementsByClassName("close")[0];
  const knjigaNaziv = document.getElementById("knjiga-naziv");
  const naruciForma = document.getElementById("naruci-forma");
  const karticaInput = document.getElementById("kartica");

  // Otvaranje modala
  document.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("naruci-knjigu")) {
      modal.style.display = "block";
      knjigaNaziv.textContent = e.target.getAttribute("data-knjiga");
    }
  });

  // Zatvaranje modala
  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Formatiranje broja kreditne kartice
  karticaInput.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
  });

  // Obrada forme
  naruciForma.onsubmit = function (e) {
    e.preventDefault();
    const ime = document.getElementById("ime").value;
    const email = document.getElementById("email").value;
    const adresa = document.getElementById("adresa").value;
    const kartica = document.getElementById("kartica").value;
    const knjiga = knjigaNaziv.textContent;

    // Sakrij poslednje 4 cifre kreditne kartice
    const sakriveniBrojKartice = "*".kartica.slice(-4);

    console.log(`Narudžbina primljena: ${knjiga}`);
    console.log(`Ime i prezime: ${ime}`);
    console.log(`Email: ${email}`);
    console.log(`Adresa: ${adresa}`);
    console.log(`Broj kreditne kartice: ${sakriveniBrojKartice}`);

    alert("Narudžbina je uspešno primljena!");
    modal.style.display = "none";
    naruciForma.reset();
  };
});
