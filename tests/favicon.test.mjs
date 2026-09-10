import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const favicon = "docs/branding/SBAI_Brand_Package/09_Favicon/";
const read = (path) => readFile(new URL(path, root));

test("Next.js icons match the approved favicon exports", async () => {
  for (const [runtime, source] of [
    ["src/app/icon.svg", "02_SVG/SBAI_Favicon_Navy.svg"],
    ["src/app/favicon.ico", "favicon.ico"],
    ["src/app/apple-icon.png", "03_PNG/SBAI_Favicon_Navy_180px.png"],
  ]) {
    const [actual, approved] = await Promise.all([
      read(runtime),
      read(favicon + source),
    ]);
    assert.deepEqual(actual, approved, `${runtime} differs from the brand package`);
  }
  const apple = await read("src/app/apple-icon.png");
  assert.equal(apple.readUInt32BE(16), 180);
  assert.equal(apple.readUInt32BE(20), 180);
});

test("favicon.ico contains intact Inkscape PNGs at all six browser sizes", async () => {
  const ico = await read("src/app/favicon.ico");
  const sizes = [16, 32, 48, 64, 128, 256];
  assert.equal(ico.readUInt16LE(0), 0);
  assert.equal(ico.readUInt16LE(2), 1);
  assert.equal(ico.readUInt16LE(4), sizes.length);
  let expectedOffset = 6 + sizes.length * 16;

  for (const [index, size] of sizes.entries()) {
    const entry = 6 + index * 16;
    assert.equal(ico[entry] || 256, size);
    assert.equal(ico[entry + 1] || 256, size);
    const length = ico.readUInt32LE(entry + 8);
    const offset = ico.readUInt32LE(entry + 12);
    assert.equal(offset, expectedOffset, "ICO images must not overlap or leave gaps");
    assert.ok(offset + length <= ico.length, "Truncated ICO image");
    const png = ico.subarray(offset, offset + length);
    assert.deepEqual(png.subarray(0, 8), Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
    assert.equal(png.readUInt32BE(16), size);
    assert.equal(png.readUInt32BE(20), size);
    assert.deepEqual(
      png,
      await read(`${favicon}03_PNG/SBAI_Favicon_Navy_${size}px.png`),
      `The ${size}px image must use the original Inkscape export`,
    );
    expectedOffset += length;
  }
  assert.equal(expectedOffset, ico.length);
});
