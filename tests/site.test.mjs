import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";

const origin = "https://www.sbai.pl";
for (const route of ["", "pl/", "en/"]) {
  test(`export /${route}: navigation, contact and metadata`, async () => {
    const html = await readFile(`out/${route}index.html`, "utf8");
    const canonical = route === "en/" ? `${origin}/en/` : `${origin}/`;
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    assert.ok(html.includes(`rel="canonical" href="${canonical}"`));
    assert.ok(html.includes('name="description"'));
    assert.ok(html.includes('property="og:title"'));
    assert.ok(html.includes('name="twitter:card"'));
    assert.ok(html.includes(`lang="${route === "en/" ? "en" : "pl"}"`));
    const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
    const links = [...html.matchAll(/<a\b[^>]*href="([^"]*)"/g)].map(
      (m) => m[1],
    );
    assert.ok(links.length > 15);
    for (const href of links) {
      assert.ok(href && href !== "#", `Empty CTA: ${href}`);
      if (href.startsWith("#"))
        assert.ok(ids.has(href.slice(1)), `Missing anchor ${href}`);
      else if (href.startsWith("/")) await access(`out${href}index.html`);
      else if (href.startsWith("mailto:"))
        assert.equal(href.split("?")[0], "mailto:info@sbai.pl");
      else
        assert.ok(
          [
            "https://github.com/JakubParol/VibeRails",
            "https://www.linkedin.com/in/jakub-parol-ai/",
          ].includes(href),
          `Unexpected external link: ${href}`,
        );
    }
    assert.ok(!html.includes("<form"), "Do not simulate a contact form");
    assert.ok(!html.includes("/assets/sbai_hero.png"), "No legacy hero asset");
    assert.ok(
      !html.includes("Strategic Business AI"),
      "Use the current brand name",
    );
  });
}
test("crawler files list only canonical routes", async () => {
  const sitemap = await readFile("out/sitemap.xml", "utf8");
  const robots = await readFile("out/robots.txt", "utf8");
  assert.ok(sitemap.includes(`<loc>${origin}/</loc>`));
  assert.ok(sitemap.includes(`<loc>${origin}/en/</loc>`));
  assert.ok(!sitemap.includes("<loc>https://www.sbai.pl/pl/</loc>"));
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
});

test("hero and social-preview asset are present in the export", async () => {
  const html = await readFile("out/index.html", "utf8");
  await access("out/assets/sbai-architecture.webp");
  assert.ok(html.includes('property="og:image"'));
  assert.ok(html.includes("https://www.sbai.pl/assets/sbai-architecture.webp"));
  assert.ok(!html.includes("PROJEKT ZAWIESZONY"));
});

for (const route of ["", "en/"]) {
  test(`/${route}: all three active products have their own card and contact`, async () => {
    const html = await readFile(`out/${route}index.html`, "utf8");
    const cards = [
      ...html.matchAll(
        /<article class="product-card[^"\n]*"[^>]*>([\s\S]*?)<\/article>/g,
      ),
    ].map((match) => match[1]);
    assert.equal(cards.length, 3);
    assert.equal((html.match(/data-status="in-development"/g) || []).length, 3);
    const names = cards.map((card) =>
      card.match(/<h3>([\s\S]*?)<\/h3>/)[1].replace(/<[^>]+>/g, ""),
    );
    assert.deepEqual(names, ["Yaga.Ai", "IQControl.Ai", "SignalBoy.Ai"]);
    for (let i = 0; i < cards.length; i++) {
      assert.ok(cards[i].includes(`mailto:info@sbai.pl?subject=${names[i]}`));
      assert.ok(cards[i].includes("<p>"));
    }
    assert.ok(!html.includes("YagaAi"));
    assert.ok(!html.includes("PROJECT ON HOLD"));
    assert.ok(!html.includes("PROJEKT ZAWIESZONY"));
    for (const asset of ["product-glass.webp"]) {
      await access(`out/assets/${asset}`);
    }
  });
}

for (const route of ["", "en/"]) {
  test(`/${route}: consulting prices and enquiries match the agreed offer`, async () => {
    const html = await readFile(`out/${route}index.html`, "utf8");
    const offers = [
      ...html.matchAll(
        /<article[^>]*data-offer="([^"]+)"[^>]*>([\s\S]*?)<\/article>/g,
      ),
    ];
    assert.deepEqual(
      offers.map((offer) => offer[1]),
      ["review-ai", "codex-workshop", "finance-ai"],
    );
    const expectedPrices =
      route === "en/"
        ? ["PLN 2,500–4,000", "PLN 4,000–7,000", "PLN 3,000–5,000"]
        : ["2 500–4 000 zł", "4 000–7 000 zł", "3 000–5 000 zł"];
    const subjects = [];
    for (const [index, offer] of offers.entries()) {
      const price = offer[2]
        .match(/<div class="offer-price">([\s\S]*?)<\/div>/)[1]
        .replace(/<!--[\s\S]*?-->/g, "")
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      assert.ok(
        price.includes(expectedPrices[index]),
        `${offer[1]}: wrong range ${price}`,
      );
      assert.ok(price.includes(route === "en/" ? "excluding VAT" : "netto"));
      if (index === 1)
        assert.ok(
          price.includes(route === "en/" ? "per workshop" : "za warsztat"),
        );
      const href = offer[2].match(/href="(mailto:[^"]+)"/)[1];
      const url = new URL(href);
      assert.equal(url.pathname, "info@sbai.pl");
      assert.ok(url.searchParams.get("subject"));
      assert.ok(
        !url.searchParams.has("body"),
        "An enquiry must not prefill a purchase commitment",
      );
      subjects.push(url.searchParams.get("subject"));
    }
    assert.equal(
      new Set(subjects).size,
      3,
      "Each service needs its own enquiry subject",
    );
  });
}
