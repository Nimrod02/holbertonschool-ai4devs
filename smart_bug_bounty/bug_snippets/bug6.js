const fs = require("fs/promises");

async function fakeFetch(url) {
  // simule un réseau
  await new Promise(r => setTimeout(r, Math.random() * 200));
  if (url.includes("bad")) throw new Error("HTTP 500");
  return `DATA:${url}`;
}

async function saveAll(urls) {
  // BUG: Array.map async sans await sur les promesses -> retourne trop tôt
  const results = urls.map(async (u) => {
    const data = await fakeFetch(u);
    await fs.writeFile(`./out_${u.replace(/\W+/g, "_")}.txt`, data);
    return data;
  });
  console.log("Saved:", results.length, "files"); // imprime avant que ce soit fini
  return results; // retourne des Promises non résolues
}

(async () => {
  try {
    await saveAll(["a.com", "bad.com", "c.com"]);
    console.log("Done? (pas vraiment)");
  } catch (e) {
    // BUG: l’erreur dans map n’est jamais catchée ici
    console.error("Should have caught:", e);
  }
})();