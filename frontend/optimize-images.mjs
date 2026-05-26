import sharp from 'sharp';
import { optimize } from 'svgo';
import fs from 'fs/promises';
import path from 'path';
import glob from 'fast-glob';

const IMAGE_DIR = 'public';
const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'svg'];

async function getFiles() {
  const patterns = EXTENSIONS.map(ext =>
    `${IMAGE_DIR}/**/*.${ext}`
  );

  return await glob(patterns, {
    caseSensitiveMatch: false,   // JPG, PNG etc
    ignore: [
      '**/node_modules/**',
      '**/.git/**',
      '**/dist/**',
      '**/build/**'
    ],
  });
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const buffer = await fs.readFile(filePath);
  const originalSize = buffer.length;

  let optimizedBuffer;

  try {
    if (ext === '.svg') {
      const result = optimize(buffer.toString(), {
        path: filePath,
        multipass: true,
      });
      optimizedBuffer = Buffer.from(result.data);
    } else {
      let pipeline = sharp(buffer);

      if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: 85, mozjpeg: true });
      } 
      else if (ext === '.png') {
        pipeline = pipeline.png({
          quality: 85,
          compressionLevel: 9
        });
      } 
      else if (ext === '.webp') {
        pipeline = pipeline.webp({ quality: 85 });
      }

      optimizedBuffer = await pipeline.toBuffer();
    }

    const optimizedSize = optimizedBuffer.length;

    if (optimizedSize < originalSize) {
      await fs.writeFile(filePath, optimizedBuffer);

      const savings = originalSize - optimizedSize;
      const percent = ((savings / originalSize) * 100).toFixed(2);

      console.log(
        `✅ ${filePath}
        ${(originalSize/1024).toFixed(2)} KB → ${(optimizedSize/1024).toFixed(2)} KB (-${percent}%)`
      );

      return savings;
    }

    console.log(`ℹ️ Skipped: ${filePath}`);
    return 0;

  } catch (err) {
    console.error(`❌ Error: ${filePath}`, err.message);
    return 0;
  }
}

async function main() {
  console.log('🚀 Starting nested image optimization...\n');

  const files = await getFiles();
  console.log(`📁 Found ${files.length} images\n`);

  let totalSavings = 0;

  // Run in parallel (FAST)
  const results = await Promise.all(
    files.map(file => optimizeImage(file))
  );

  totalSavings = results.reduce((a,b) => a+b, 0);

  console.log('\n✨ DONE!');
  console.log(`💾 Total saved: ${(totalSavings/1024/1024).toFixed(2)} MB`);
}

main().catch(console.error);
