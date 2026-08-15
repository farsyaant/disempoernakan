// ============================================================
// DATA BUNGA & CARD — versi Poerby
// ============================================================
// id HARUS sama persis dengan nama file di public/flowers/{id}.png
// dan public/cards/{id}.png
// ============================================================

const flowerIds = [
  "tori",
  "adamaurel",
  "teknis",
  "poerby1",
  "poerby2",
  "poerby3",
  "poerby4",
  "poerby5",
  "poerby6",
  "poerby7",
  "poerby8",
  "poerby9",
  "poerby10",
  "poerby11",
  "poerby12",
  "poerby13",
  "poerby14",
  "poerby15",
  "poerby16",
];

const flowers = flowerIds.map((id) => ({
  id,
  flowerImg: `/flowers/${id}.png`,
  photoImg: `/cards/${id}.png`,
}));

export default flowers;
