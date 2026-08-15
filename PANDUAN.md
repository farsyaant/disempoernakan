# Panduan bagi2materi.vercel.app

## Struktur yang sudah dibuat
```
tori-cards/
├── public/
│   ├── lobby-bg.png       ← ISI: gambar background lobby (langit+padang bunga)
│   ├── flowers/           ← ISI: gambar tiap bunga (bning.png, pei.png, dst)
│   └── cards/             ← ISI: foto polaroid tiap orang (bning.png, pei.png, dst)
├── src/
│   ├── data/flowers.js    ← ISI: nama, greeting, pesan tiap orang (SUDAH aku isi dari screenshot)
│   ├── components/
│   │   ├── FloatingFlower.jsx   (logic bunga terbang bebas)
│   │   └── CardModal.jsx        (logic popup card + tombol X)
│   ├── App.jsx             (halaman lobby + render semua bunga)
│   └── App.css             (semua styling: animasi float, glow, desain card pink)
```

## Langkah 1 — Isi gambar-gambar
1. Export tiap bunga dari Figma jadi PNG transparan (klik bunga → Export → PNG)
   → simpan sebagai `public/flowers/bning.png`, `public/flowers/pei.png`, dst
   (nama file harus PERSIS sama kaya `id` di `src/data/flowers.js`)
2. Export tiap foto polaroid orang → simpan di `public/cards/bning.png`, dst
3. Export gambar lobby (yang ada langit-padang bunga) → simpan sebagai `public/lobby-bg.png`

## Langkah 2 — Cek & lengkapi teks
Buka `src/data/flowers.js`, cek tiap `message` — beberapa aku transkrip dari
screenshot yang agak buram (misal `tata` masih placeholder), tolong dicek ulang
dan diperbaiki kalau ada kata yang salah baca.

## Langkah 3 — Jalanin di VSCode
```bash
cd tori-cards
npm install
npm run dev
```
Buka link yang muncul di terminal (biasanya `http://localhost:5173`).

## Langkah 4 — Deploy ke Vercel
Sama kayak project PIONIR map kamu:
```bash
git init
git add .
git commit -m "bagi2materi website"
git remote add origin <link-repo-github-kamu>
git push -u origin main
```
Terus di [vercel.com](https://vercel.com) → **Add New Project** → import repo ini →
Vercel otomatis detect Vite → klik **Deploy**. Selesai, langsung dapet link.

## Cara kerja fitur-fiturnya
- **Landing page** → tombol "masuk lobby"
- **Lobby** → semua bunga di `flowers.js` otomatis dirender, posisi awal acak
  tapi rapi (grid + jitter), lalu tiap bunga "mengambang" pakai animasi CSS
  (`floaty` di App.css) — arah & kecepatan tiap bunga beda2 biar keliatan natural.
- **Klik bunga** → modal card muncul (`CardModal.jsx`) dengan foto + pesan,
  ada tombol **×** di kanan atas kayak referensi kamu.
- **Klik ×** → modal tertutup, dan bunga itu otomatis dapat status "opened" →
  langsung memancarkan **glow** (radial gradient + animasi pulse) selamanya,
  disimpan di `localStorage` jadi tetap glow walau refresh halaman.

## Kalau mau nambah/ganti orang
Tinggal edit array di `src/data/flowers.js` — copy salah satu object, ganti
`id`, `greeting`, `message`, dan siapin file gambarnya. Otomatis muncul di lobby.
