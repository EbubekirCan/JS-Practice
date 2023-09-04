// Tarih: Yıl, Ay (0'dan başlayarak), Gün, Saat, Dakika, Saniye
const hedefTarih = "11 September 2023"; // 1 Eylül 2023

function geriSayimiGuncelle() {
  const simdikiTarih = new Date();
  const hedefTarih2 = new Date(hedefTarih);
  const kalanZaman = hedefTarih2 - simdikiTarih;

  const gunler = Math.floor(kalanZaman / (1000 * 60 * 60 * 24));
  const saatler = Math.floor((kalanZaman % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const dakikalar = Math.floor((kalanZaman % (1000 * 60 * 60)) / (1000 * 60));
  const saniyeler = Math.floor((kalanZaman % (1000 * 60)) / 1000);

  document.getElementById("gun").textContent = gunler;
  document.getElementById("saat").textContent = saatler;
  document.getElementById("dakika").textContent = dakikalar;
  document.getElementById("saniye").textContent = saniyeler;
}

geriSayimiGuncelle();
setInterval(geriSayimiGuncelle, 1000); // Her saniyede bir güncelle
