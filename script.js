const kelimeler = [
    "aşk", "kalp", "hayat", "yol", "ateş", "su", "rüzgar", "gece", "gündüz", "ışık",
    "karanlık", "umut", "acı", "mutluluk", "hüzün", "zafer", "yenilgi", "savaş", "barış", "özgürlük",
    "gökyüzü", "deniz", "yıldız", "ay", "güneş", "bulut", "yağmur", "kar", "fırtına", "şimşek",
    "orman", "ağaç", "çiçek", "yaprak", "toprak", "taş", "kum", "dağ", "tepe", "vadi",
    "nehir", "göl", "şelale", "kaynak", "buz", "alev", "duman", "sis", "çiy", "kırağı",
    "kuş", "kelebek", "arı", "karınca", "yılan", "kaplan", "aslan", "kurt", "tilki", "ayı",
    "balık", "yunus", "köpekbalığı", "balina", "fok", "penguen", "kartal", "şahin", "baykuş", "serçe",
    "şarkı", "müzik", "nota", "ritim", "melodi", "tını", "ezgi", "nağme", "koro", "orkestra",
    "dans", "figür", "adım", "ritim", "hareket", "koreografi", "bale", "salsa", "tango", "vals",
    "resim", "tablo", "fırça", "boya", "tuval", "heykel", "mermer", "kil", "çamur", "seramik",
    "kitap", "roman", "şiir", "öykü", "masal", "destan", "efsane", "mitoloji", "tarih", "felsefe",
    "bilim", "teknoloji", "keşif", "icat", "deney", "laboratuvar", "mikroskop", "teleskop", "uzay", "yıldız",
    "gezegen", "galaksi", "evren", "atom", "molekül", "enerji", "güç", "kuvvet", "hız", "ivme",
    "zaman", "mekan", "uzay", "boyut", "evrim", "doğa", "çevre", "ekoloji", "iklim", "hava",
    "su", "toprak", "hava", "ateş", "tahta", "metal", "cam", "plastik", "kağıt", "kumaş",
    "giysi", "ayakkabı", "şapka", "eldiven", "atkı", "mont", "ceket", "gömlek", "pantolon", "etek",
    "elbise", "takı", "kolye", "küpe", "yüzük", "bilezik", "saat", "gözlük", "şemsiye", "çanta",
    "ev", "oda", "mutfak", "banyo", "salon", "yatak", "dolap", "masa", "sandalye", "kanepe",
    "perde", "halı", "lamba", "avize", "priz", "anahtar", "kilit", "kapı", "pencere", "duvar",
    "çatı", "bahçe", "çiçek", "ağaç", "çim", "havuz", "çit", "kapı", "merdiven", "balkon",
    "şehir", "köy", "kasaba", "mahalle", "sokak", "cadde", "bulvar", "meydan", "park", "bahçe",
    "okul", "üniversite", "ders", "öğretmen", "öğrenci", "sınav", "not", "kitap", "defter", "kalem",
    "iş", "meslek", "kariyer", "ofis", "fabrika", "atölye", "mağaza", "market", "restoran", "kafe",
    "spor", "futbol", "basketbol", "voleybol", "tenis", "yüzme", "koşu", "jimnastik", "boks", "güreş",
    "sağlık", "hastane", "doktor", "hemşire", "ilaç", "tedavi", "ameliyat", "muayene", "teşhis", "reçete",
    "sevgi", "saygı", "dostluk", "arkadaşlık", "aile", "anne", "baba", "kardeş", "çocuk", "torun",
    "mutluluk", "hüzün", "neşe", "üzüntü", "korku", "endişe", "heyecan", "şaşkınlık", "öfke", "pişmanlık",
    "rüya", "gerçek", "hayal", "umut", "inanç", "güven", "şüphe", "merak", "ilgi", "dikkat",
    "zaman", "mekan", "an", "saniye", "dakika", "saat", "gün", "hafta", "ay", "yıl",
    "geçmiş", "şimdi", "gelecek", "tarih", "zaman", "devir", "çağ", "asır", "yüzyıl", "milenyum",
    "bilgisayar", "telefon", "internet", "yazılım", "donanım", "programlama", "veri", "bilgi", "iletişim", "teknoloji",
    "sanat", "tiyatro", "sinema", "fotoğraf", "heykel", "mimari", "tasarım", "moda", "renk", "şekil",
    "yemek", "tatlı", "tuzlu", "ekşi", "acı", "baharat", "tarif", "pişirme", "kahve", "çay",
    "seyahat", "otel", "tatil", "gezi", "macera", "keşif", "harita", "pusula", "valiz", "pasaport",
    "alışveriş", "indirim", "fiyat", "ödeme", "kart", "nakit", "kredi", "borç", "hesap", "bütçe",
    "eğlence", "parti", "davet", "kutlama", "hediye", "sürpriz", "oyun", "şaka", "gülme", "eğlenme",
    "çalışma", "proje", "toplantı", "sunum", "rapor", "analiz", "strateji", "plan", "hedef", "başarı",
    "öğrenme", "eğitim", "kurs", "seminer", "konferans", "araştırma", "keşif", "buluş", "deneyim", "tecrübe",
    "duygu", "his", "sevinç", "coşku", "huzur", "sakinlik", "stres", "gerginlik", "rahatlama", "meditasyon",
    "doğum", "ölüm", "yaşam", "varoluş", "evrim", "değişim", "gelişim", "ilerleme", "dönüşüm", "yenilenme",
    "güçlü", "zayıf", "büyük", "küçük", "uzun", "kısa", "geniş", "dar", "ağır", "hafif",
    "sıcak", "soğuk", "ılık", "serin", "kuru", "nemli", "parlak", "mat", "yumuşak", "sert",
    "hızlı", "yavaş", "düz", "eğri", "keskin", "kör", "keskin", "kör", "keskin", "kör",
    "gürültü", "sessizlik", "melodi", "ritim", "tını", "ses", "gürültü", "sessizlik", "melodi", "ritim",
    "renk", "şekil", "desen", "doku", "gölge", "ışık", "karanlık", "aydınlık", "parlaklık", "matlık",
    "tat", "koku", "doku", "ses", "görüntü", "his", "duygu", "düşünce", "hayal", "gerçek",
    "zaman", "mekan", "an", "saniye", "dakika", "saat", "gün", "hafta", "ay", "yıl",
    "geçmiş", "şimdi", "gelecek", "tarih", "zaman", "devir", "çağ", "asır", "yüzyıl", "milenyum"
];// Rastgele kelime üretme fonksiyonu
function rastgeleKelimeUret() {
    const rastgeleIndex = Math.floor(Math.random() * kelimeler.length);
    return kelimeler[rastgeleIndex];
}

// Kafiye örnekleri oluşturma fonksiyonu
function kafiyeOlustur(kelime) {
    const kafiyeler = kelimeler.filter(k => k !== kelime && k.endsWith(kelime.slice(-2)));
    return kafiyeler.slice(0, 5); // En fazla 5 kafiye örneği
}

// Olay dinleyicileri
document.getElementById("rastgele-kelime").addEventListener("click", () => {
    const kelimeInput = document.getElementById("kelime-input");
    kelimeInput.value = rastgeleKelimeUret();
});

document.getElementById("kafiye-olustur").addEventListener("click", () => {
    const kelimeInput = document.getElementById("kelime-input");
    const kelime = kelimeInput.value.trim();
    const kafiyeSonuc = document.getElementById("kafiye-sonuc");

    if (kelime) {
        const kafiyeler = kafiyeOlustur(kelime);
        if (kafiyeler.length > 0) {
            kafiyeSonuc.innerHTML = `<strong>${kelime}</strong> ile kafiyeli kelimeler:<br>${kafiyeler.join(", ")}`;
        } else {
            kafiyeSonuc.innerHTML = `"${kelime}" ile kafiyeli kelime bulunamadı.`;
        }
    } else {
        kafiyeSonuc.innerHTML = "Lütfen bir kelime girin veya rastgele kelime üretin.";
    }
});