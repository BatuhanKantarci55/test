const kelimeler = [
    { eski: "abide", kokEski: "arapça", yeni: "anıt", kokYeni: "türkçe" },
    { eski: "abidevi", kokEski: "arapça", yeni: "anıtsal", kokYeni: "türkçe" },
    { eski: "nikbin", kokEski: "farsça", yeni: "iyimser", kokYeni: "türkçe" },
    { eski: "bedbin", kokEski: "farsça", yeni: "kötümser", kokYeni: "türkçe" },
    { eski: "delil", kokEski: "arapça", yeni: "kanıt", kokYeni: "türkçe" },
    { eski: "ihtiras", kokEski: "arapça", yeni: "tutku", kokYeni: "türkçe" },
    { eski: "talebe", kokEski: "arapça", yeni: "öğrenci", kokYeni: "türkçe" },
    { eski: "muallim", kokEski: "arapça", yeni: "öğretmen", kokYeni: "türkçe" },
    { eski: "kelime", kokEski: "arapça", yeni: "sözcük", kokYeni: "türkçe" },
    { eski: "cümle", kokEski: "arapça", yeni: "tümce", kokYeni: "türkçe" },
    { eski: "sıfat", kokEski: "arapça", yeni: "ön ad", kokYeni: "türkçe" },
    { eski: "zamir", kokEski: "arapça", yeni: "adıl", kokYeni: "türkçe" },
    { eski: "mektep", kokEski: "arapça", yeni: "okul", kokYeni: "türkçe" },
    { eski: "müsavi", kokEski: "arapça", yeni: "eşit", kokYeni: "türkçe" },
    { eski: "zait", kokEski: "arapça", yeni: "artı", kokYeni: "türkçe" },
    { eski: "nakıs", kokEski: "arapça", yeni: "eksi", kokYeni: "türkçe" },
    { eski: "darp", kokEski: "arapça", yeni: "çarpı", kokYeni: "türkçe" },
    { eski: "taksim", kokEski: "arapça", yeni: "bölü", kokYeni: "türkçe" },
    { eski: "müselles", kokEski: "arapça", yeni: "üçgen", kokYeni: "türkçe" },
    { eski: "kompüter", kokEski: "ingilizce", yeni: "bilgisayar", kokYeni: "türkçe" },
    { eski: "ilim", kokEski: "arapça", yeni: "bilim", kokYeni: "türkçe" },
    { eski: "feza", kokEski: "arapça", yeni: "uzay", kokYeni: "türkçe" },
    { eski: "seyyare", kokEski: "arapça", yeni: "gezegen", kokYeni: "türkçe" },
    { eski: "peyk", kokEski: "farsça", yeni: "uydu", kokYeni: "türkçe" },
    { eski: "mahrek", kokEski: "arapça", yeni: "yörünge", kokYeni: "türkçe" },
    { eski: "millet", kokEski: "arapça", yeni: "ulus", kokYeni: "türkçe" },
    { eski: "milli", kokEski: "arapça", yeni: "ulusal", kokYeni: "türkçe" },
    { eski: "kampüs", kokEski: "fransızca", yeni: "yerleşke", kokYeni: "türkçe" },
    { eski: "mesaj", kokEski: "fransızca", yeni: "ileti", kokYeni: "türkçe" },
    { eski: "feedback", kokEski: "ingilizce", yeni: "dönüt", kokYeni: "türkçe" },
    { eski: "ufki", kokEski: "arapça", yeni: "yatay", kokYeni: "türkçe" },
    { eski: "şakuli", kokEski: "arapça", yeni: "düşey", kokYeni: "türkçe" },
    { eski: "amudi", kokEski: "arapça", yeni: "dikey", kokYeni: "türkçe" },
    { eski: "zaviye", kokEski: "arapça", yeni: "açı", kokYeni: "türkçe" },
    { eski: "izah", kokEski: "arapça", yeni: "açıklama", kokYeni: "türkçe" },
    { eski: "izah etmek", kokEski: "arapça", yeni: "açıklamak", kokYeni: "türkçe" },
    { eski: "zabıt", kokEski: "arapça", yeni: "tutanak", kokYeni: "türkçe" },
    { eski: "tevkif etmek", kokEski: "arapça", yeni: "tutuklamak", kokYeni: "türkçe" },
    { eski: "mevkuf", kokEski: "arapça", yeni: "tutuklu", kokYeni: "türkçe" },
    { eski: "gayrimevkuf", kokEski: "arapça", yeni: "tutuksuz", kokYeni: "türkçe" },
    { eski: "namzet", kokEski: "farsça", yeni: "aday", kokYeni: "türkçe" },
    { eski: "cinsiyet", kokEski: "arapça", yeni: "eşey", kokYeni: "türkçe" },
    { eski: "tasdik", kokEski: "arapça", yeni: "onay", kokYeni: "türkçe" },
    { eski: "liva", kokEski: "arapça", yeni: "tugay", kokYeni: "türkçe" },
    { eski: "kumandan", kokEski: "fransızca", yeni: "komutan", kokYeni: "türkçe" },
    { eski: "seviye", kokEski: "arapça", yeni: "düzey", kokYeni: "türkçe" },
    { eski: "suni", kokEski: "arapça", yeni: "yapay", kokYeni: "türkçe" },
    { eski: "hadise", kokEski: "arapça", yeni: "olay", kokYeni: "türkçe" },
    { eski: "tecrübe", kokEski: "arapça", yeni: "deneyim", kokYeni: "türkçe" },
    { eski: "imtihan", kokEski: "arapça", yeni: "sınav", kokYeni: "türkçe" },
    { eski: "satıh", kokEski: "arapça", yeni: "yüzey", kokYeni: "türkçe" },
    { eski: "mediatris", kokEski: "fransızca", yeni: "ortay", kokYeni: "türkçe" },
    { eski: "mukaar", kokEski: "arapça", yeni: "içbükey", kokYeni: "türkçe" },
    { eski: "muhaddep", kokEski: "arapça", yeni: "dışbükey", kokYeni: "türkçe" },
    { eski: "mübalağa", kokEski: "arapça", yeni: "abartı", kokYeni: "türkçe" },
    { eski: "mübalağa etmek", kokEski: "arapça", yeni: "abartmak", kokYeni: "türkçe" },
    { eski: "ekvator", kokEski: "fransızca", yeni: "eşlek", kokYeni: "türkçe" },
    { eski: "sebep", kokEski: "arapça", yeni: "neden", kokYeni: "türkçe" },
    { eski: "şart", kokEski: "arapça", yeni: "koşul", kokYeni: "türkçe" },
    { eski: "şerait", kokEski: "arapça", yeni: "koşullar", kokYeni: "türkçe" },
    { eski: "fiil", kokEski: "arapça", yeni: "eylem", kokYeni: "türkçe" },
    { eski: "opsiyon", kokEski: "fransızca", yeni: "seçenek", kokYeni: "türkçe" },
    { eski: "şekil", kokEski: "arapça", yeni: "biçim", kokYeni: "türkçe" },
    { eski: "nebat", kokEski: "arapça", yeni: "bitki", kokYeni: "türkçe" },
    { eski: "idrak", kokEski: "arapça", yeni: "algı", kokYeni: "türkçe" },
    { eski: "hatırlamak", kokEski: "arapça", yeni: "anımsamak", kokYeni: "türkçe" },
    { eski: "whiteout", kokEski: "ingilizce", yeni: "daksil", kokYeni: "türkçe" },
    { eski: "software", kokEski: "ingilizce", yeni: "yazılım", kokYeni: "türkçe" },
    { eski: "hardware", kokEski: "ingilizce", yeni: "donanım", kokYeni: "türkçe" },
    { eski: "gıda", kokEski: "arapça", yeni: "besin", kokYeni: "türkçe" },
    { eski: "bilhassa", kokEski: "arapça", yeni: "özellikle", kokYeni: "türkçe" },
    { eski: "müracaat", kokEski: "arapça", yeni: "başvuru", kokYeni: "türkçe" },
    { eski: "müzekker", kokEski: "arapça", yeni: "eril", kokYeni: "türkçe" },
    { eski: "müennes", kokEski: "arapça", yeni: "dişil", kokYeni: "türkçe" },
    { eski: "muasır", kokEski: "arapça", yeni: "çağdaş", kokYeni: "türkçe" },
    { eski: "muntazam", kokEski: "arapça", yeni: "düzgün", kokYeni: "türkçe" },
    { eski: "tabiat", kokEski: "arapça", yeni: "doğa", kokYeni: "türkçe" },
    { eski: "tabii", kokEski: "arapça", yeni: "doğal", kokYeni: "türkçe" },
    { eski: "selef", kokEski: "arapça", yeni: "öncel", kokYeni: "türkçe" },
    { eski: "halef", kokEski: "arapça", yeni: "ardıl", kokYeni: "türkçe" },
    { eski: "cevap", kokEski: "arapça", yeni: "yanıt", kokYeni: "türkçe" },
    { eski: "sual", kokEski: "arapça", yeni: "soru", kokYeni: "türkçe" },
    { eski: "istintak", kokEski: "arapça", yeni: "sorgu", kokYeni: "türkçe" },
    { eski: "isticvap etmek", kokEski: "arapça", yeni: "sorgulamak", kokYeni: "türkçe" },
    { eski: "netice", kokEski: "arapça", yeni: "sonuç", kokYeni: "türkçe" },
    { eski: "hissikablelvuku", kokEski: "arapça", yeni: "önsezi", kokYeni: "türkçe" },
    { eski: "mirliva", kokEski: "arapça", yeni: "tuğgeneral", kokYeni: "türkçe" },
    { eski: "mesela", kokEski: "arapça", yeni: "örneğin", kokYeni: "türkçe" },
    { eski: "fevkalade", kokEski: "arapça", yeni: "olağanüstü", kokYeni: "türkçe" },
    { eski: "ihtimal", kokEski: "arapça", yeni: "olasılık", kokYeni: "türkçe" },
    { eski: "muhtemel", kokEski: "arapça", yeni: "olası", kokYeni: "türkçe" },
    { eski: "imkan", kokEski: "arapça", yeni: "olanak", kokYeni: "türkçe" },
    { eski: "hayat", kokEski: "arapça", yeni: "yaşam", kokYeni: "türkçe" },
    { eski: "muta", kokEski: "arapça", yeni: "veri", kokYeni: "türkçe" },
    { eski: "bey", kokEski: "türkçe", yeni: "bay", kokYeni: "türkçe" },
    { eski: "hanım", kokEski: "türkçe", yeni: "bayan", kokYeni: "türkçe" },
    { eski: "ehemmiyet", kokEski: "arapça", yeni: "önem", kokYeni: "türkçe" },
    { eski: "mühim", kokEski: "arapça", yeni: "önemli", kokYeni: "türkçe" },
    { eski: "edebiyat", kokEski: "arapça", yeni: "yazın", kokYeni: "türkçe" },
    { eski: "kader", kokEski: "arapça", yeni: "yazgı", kokYeni: "türkçe" },
    { eski: "vazife", kokEski: "arapça", yeni: "ödev", kokYeni: "türkçe" },
    { eski: "misyon", kokEski: "fransızca", yeni: "görev", kokYeni: "türkçe" },
    { eski: "fonksiyon", kokEski: "fransızca", yeni: "işlev", kokYeni: "türkçe" },
    { eski: "tayyare", kokEski: "arapça", yeni: "uçak", kokYeni: "türkçe" },
    { eski: "mikyasülzevaya", kokEski: "arapça", yeni: "açıölçer", kokYeni: "türkçe" },
    { eski: "hattımunassıf", kokEski: "arapça", yeni: "açıortay", kokYeni: "türkçe" },
    { eski: "müdafaa etmek", kokEski: "arapça", yeni: "savunmak", kokYeni: "türkçe" },
    { eski: "lügat", kokEski: "arapça", yeni: "sözlük", kokYeni: "türkçe" },
    { eski: "mücerret", kokEski: "arapça", yeni: "soyut", kokYeni: "türkçe" },
    { eski: "müşahhas", kokEski: "arapça", yeni: "somut", kokYeni: "türkçe" },
    { eski: "mesul", kokEski: "arapça", yeni: "sorumlu", kokYeni: "türkçe" },
    { eski: "mesuliyet", kokEski: "arapça", yeni: "sorumluluk", kokYeni: "türkçe" },
    { eski: "mesele", kokEski: "arapça", yeni: "sorun", kokYeni: "türkçe" },
    { eski: "faal", kokEski: "arapça", yeni: "etkin", kokYeni: "türkçe" },
    { eski: "faaliyet", kokEski: "arapça", yeni: "etkinlik", kokYeni: "türkçe" },
    { eski: "amil", kokEski: "arapça", yeni: "etken", kokYeni: "türkçe" },
    { eski: "tenasüp", kokEski: "arapça", yeni: "orantı", kokYeni: "türkçe" },
    { eski: "tekamül", kokEski: "arapça", yeni: "evrim", kokYeni: "türkçe" },
    { eski: "iftihar", kokEski: "arapça", yeni: "övünç", kokYeni: "türkçe" },
    { eski: "methiye", kokEski: "arapça", yeni: "övgü", kokYeni: "türkçe" },
    { eski: "müeyyide", kokEski: "arapça", yeni: "yaptırım", kokYeni: "türkçe" },
    { eski: "safha", kokEski: "arapça", yeni: "evre", kokYeni: "türkçe" },
    { eski: "ekseriyet", kokEski: "arapça", yeni: "çoğunluk", kokYeni: "türkçe" },
    { eski: "ekalliyet", kokEski: "arapça", yeni: "azınlık", kokYeni: "türkçe" },
    { eski: "kitabe", kokEski: "arapça", yeni: "yazıt", kokYeni: "türkçe" },
    { eski: "zaruri", kokEski: "arapça", yeni: "zorunlu", kokYeni: "türkçe" },
    { eski: "neşriyat", kokEski: "arapça", yeni: "yayın", kokYeni: "türkçe" },
    { eski: "zafer", kokEski: "arapça", yeni: "utku", kokYeni: "türkçe" },
    { eski: "şuur", kokEski: "arapça", yeni: "bilinç", kokYeni: "türkçe" },
    { eski: "teferruat", kokEski: "arapça", yeni: "ayrıntı", kokYeni: "türkçe" },
    { eski: "adale", kokEski: "arapça", yeni: "kas", kokYeni: "türkçe" },
    { eski: "aksülamel", kokEski: "arapça", yeni: "tepki", kokYeni: "türkçe" },
    { eski: "ıstılah", kokEski: "arapça", yeni: "terim", kokYeni: "türkçe" },
    { eski: "teneffüs", kokEski: "arapça", yeni: "solunum", kokYeni: "türkçe" },
    { eski: "mihrak", kokEski: "arapça", yeni: "odak", kokYeni: "türkçe" },
    { eski: "celse", kokEski: "arapça", yeni: "oturum", kokYeni: "türkçe" },
    { eski: "organ", kokEski: "fransızca", yeni: "örgen", kokYeni: "türkçe" },
    { eski: "organik", kokEski: "fransızca", yeni: "örgensel", kokYeni: "türkçe" },
    { eski: "lökosit", kokEski: "fransızca", yeni: "akyuvar", kokYeni: "türkçe" },
    { eski: "eritrosit", kokEski: "fransızca", yeni: "alyuvar", kokYeni: "türkçe" },
    { eski: "alaka", kokEski: "arapça", yeni: "ilgi", kokYeni: "türkçe" },
    { eski: "enteresan", kokEski: "fransızca", yeni: "ilginç", kokYeni: "türkçe" },
    { eski: "prensip", kokEski: "fransızca", yeni: "ilke", kokYeni: "türkçe" },
    { eski: "hayal", kokEski: "arapça", yeni: "imge", kokYeni: "türkçe" },
    { eski: "intiba", kokEski: "arapça", yeni: "izlenim", kokYeni: "türkçe" },
    { eski: "taviz", kokEski: "arapça", yeni: "ödün", kokYeni: "türkçe" },
    { eski: "lider", kokEski: "fransızca", yeni: "önder", kokYeni: "türkçe" },
    { eski: "hikaye", kokEski: "arapça", yeni: "öykü", kokYeni: "türkçe" },
    { eski: "hususi", kokEski: "arapça", yeni: "özel", kokYeni: "türkçe" },
    { eski: "mahsus", kokEski: "arapça", yeni: "özgü", kokYeni: "türkçe" }
];



let secilenKelime = {};
let filtreliKelimeler = kelimeler; // Başlangıçta tüm kelimeler

function yeniSoru() {
    const rastgeleIndex = Math.floor(Math.random() * kelimeler.length);
    secilenKelime = kelimeler[rastgeleIndex];
    document.getElementById("soru-kelime").textContent = secilenKelime.eski;
    document.getElementById("kullanici-cevap").value = "";
    document.getElementById("sonuc").textContent = "";
}

function kontrolEt() {
    const girilen = document.getElementById("kullanici-cevap").value.trim().toLowerCase();
    const gosterilen = document.getElementById("soru-kelime").textContent;
    const kelime = kelimeler.find(k => k.eski === gosterilen || k.yeni === gosterilen);

    if (!kelime) {
        document.getElementById("sonuc").textContent = "Bir hata oluştu.";
        return;
    }

    const dogruCevap = (secilenYön === "eski") ? kelime.yeni : kelime.eski;

    if (girilen === dogruCevap.toLowerCase()) {
        document.getElementById("sonuc").textContent = "✅ Doğru!";
    } else {
        document.getElementById("sonuc").textContent = `❌ Yanlış. Doğru cevap: ${dogruCevap}`;
    }
}


function sonrakiKelime() {
    const rastgele = Math.floor(Math.random() * kelimeler.length);
    const kelime = kelimeler[rastgele];

    if (secilenYön === "eski") {
        document.getElementById("soru-kelime").textContent = kelime.eski;
    } else {
        document.getElementById("soru-kelime").textContent = kelime.yeni;
    }

    document.getElementById("kullanici-cevap").value = "";
    document.getElementById("sonuc").textContent = "";
}


function sayfaGoster(secim) {
    document.getElementById("sinav-alani").style.display = secim === "sinav" ? "block" : "none";
    document.getElementById("liste-alani").style.display = secim === "liste" ? "block" : "none";

    document.getElementById("sec-sinav").classList.toggle("aktif", secim === "sinav");
    document.getElementById("sec-liste").classList.toggle("aktif", secim === "liste");

    if (secim === "liste") {
        kelimeleriListele();
    } else {
        yeniSoru();
    }
}

function kelimeleriListele() {
    const tablo = document.getElementById("liste-tablosu");
    tablo.innerHTML = "";

    const sirali = [...filtreliKelimeler];

    // Sıralama
    if (siralaAktif === "eski") {
        sirali.sort((a, b) => a.eski.localeCompare(b.eski));
    } else if (siralaAktif === "yeni") {
        sirali.sort((a, b) => a.yeni.localeCompare(b.yeni));
    }

    // Listeyi oluştur
    sirali.forEach((kelime, index) => {
        const satir = document.createElement("tr");
        satir.innerHTML = `
            <td>${index + 1}</td>
            <td>${kelime.eski}</td>
            <td><span class="kok ${kokSinifi(kelime.kokEski)}">${kelime.kokEski}</span></td>
            <td>${kelime.yeni}</td>
            <td><span class="kok ${kokSinifi(kelime.kokYeni)}">${kelime.kokYeni}</span></td>
        `;
        tablo.appendChild(satir);
    });
}



function aramaFiltrele() {
    const arama = document.getElementById("arama-kutusu").value.toLowerCase();
    filtreliKelimeler = kelimeler.filter(kelime =>
        kelime.eski.toLowerCase().includes(arama) || kelime.yeni.toLowerCase().includes(arama)
    );
    kelimeleriListele(); // Listeyi yeniden oluştur
}

document.getElementById("sec-sinav").addEventListener("click", () => sayfaGoster("sinav"));
document.getElementById("sec-liste").addEventListener("click", () => sayfaGoster("liste"));

// Başlangıçta sınav ekranı
window.onload = yeniSoru;

let siralaAktif = "yeni"; // Varsayılan sıralama: yeni Türkçe

function sirala(tur) {
    if (siralaAktif === tur) {
        // Eğer zaten bu türde sıralanmışsa ters çevir
        filtreliKelimeler.reverse();
    } else {
        siralaAktif = tur;
    }
    kelimeleriListele();
}


function kokSinifi(kok) {
    switch (kok.toLowerCase()) {
        case "arapça": return "kok-arapca";
        case "farsça": return "kok-farsca";
        case "fransızca": return "kok-fransizca";
        case "ingilizce": return "kok-ingilizce";
        case "italyanca": return "kok-italyanca";
        case "türkçe": return "kok-turkce";
        default: return "kok-diger";
    }
}


let aktifDil = "hepsi"; // Varsayılan tüm diller

function filtreDil(dil) {
    aktifDil = dil;

    // Butonlara aktif sınıfı ver
    document.querySelectorAll(".filtre-btn").forEach(btn => {
        btn.classList.remove("aktif");
    });
    const aktifButon = Array.from(document.querySelectorAll(".filtre-btn")).find(btn =>
        btn.textContent.toLowerCase() === dil
    );
    if (aktifButon) aktifButon.classList.add("aktif");

    aramaFiltrele(); // Aramayı da yeniden uygula
}

function aramaFiltrele() {
    const arama = document.getElementById("arama-kutusu").value.toLowerCase();

    filtreliKelimeler = kelimeler.filter(kelime => {
        const kelimeUygun = kelime.eski.toLowerCase().includes(arama) || kelime.yeni.toLowerCase().includes(arama);

        const dilUygun = (aktifDil === "hepsi") ||
            kelime.kokEski.toLowerCase() === aktifDil ||
            kelime.kokYeni.toLowerCase() === aktifDil;

        return kelimeUygun && dilUygun;
    });

    kelimeleriListele(); // Listeyi yeniden oluştur
}




let secilenYön = "eski"; // varsayılan yön

function yönDegistir() {
    const secilen = document.querySelector('input[name="yön"]:checked');
    secilenYön = secilen.value;
    sonrakiKelime(); // yön değişince yeni soru gelsin
}
