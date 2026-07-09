import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';

const INPUT_DIR  = './public/pic';
const OUTPUT_DIR = './public/pic_opt';
const MAX_WIDTH  = 1200;
const QUALITY    = 80;

if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true });

const files = readdirSync(INPUT_DIR).filter(f => /\.(jpe?g|png|webp)$/i.test(f));

console.log(`Optimizing ${files.length} images...`);

for (const file of files) {
  const inputPath  = join(INPUT_DIR, file);
  const outputName = basename(file, extname(file)) + '.webp';
  const outputPath = join(OUTPUT_DIR, outputName);

  try {
    const info = await sharp(inputPath)
      .rotate()                          // auto-rotate based on EXIF
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const inputSize  = (await import('fs')).statSync(inputPath).size;
    const outputSize = info.size;
    const savings    = (((inputSize - outputSize) / inputSize) * 100).toFixed(1);
    console.log(`  ✓ ${file} → ${outputName}  (${(inputSize/1024/1024).toFixed(1)}MB → ${(outputSize/1024).toFixed(0)}KB, saved ${savings}%)`);
  } catch (err) {
    console.error(`  ✗ ${file}:`, err.message);
  }
}

console.log('\nDone! Images saved to', OUTPUT_DIR);
