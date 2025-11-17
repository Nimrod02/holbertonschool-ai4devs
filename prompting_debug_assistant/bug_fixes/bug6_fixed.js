const fs = require("fs/promises");

async function fakeFetch(url) {
  await new Promise((r) => setTimeout(r, Math.random() * 200));
  if (url.includes("bad")) throw new Error("HTTP 500");
  return `DATA:${url}`;
}

async function saveAll(urls) {
  // why: await all writes to ensure completion & error propagation
  const tasks = urls.map(async (u) => {
    const data = await fakeFetch(u);
    await fs.writeFile(`./out_${u.replace(/\W+/g, "_")}.txt`, data);
    return data;
  });
  const results = await Promise.all(tasks);
  console.log("Saved:", results.length, "files");
  return results;
}

(async () => {
  try {
    const results = await saveAll(["a.com", "c.com"]);
    console.log("Done:", results);
  } catch (e) {
    console.error("Failure:", e.message);
  }
})();