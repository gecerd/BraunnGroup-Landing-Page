/**
 * Advanced script to parse car images from brauncar.com using Puppeteer
 * This script requires puppeteer to be installed: npm install puppeteer
 * 
 * Usage: node scripts/parse-cars-advanced.js
 */

const puppeteer = require('puppeteer');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create cars directory if it doesn't exist
const carsDir = path.join(__dirname, '..', 'public', 'cars');
if (!fs.existsSync(carsDir)) {
  fs.mkdirSync(carsDir, { recursive: true });
}

// Function to download image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);
      
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`✓ Downloaded: ${path.basename(filepath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

// Main parsing function
async function parseCarImages() {
  console.log('Starting advanced parsing of brauncar.com...\n');
  
  let browser;
  try {
    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    // Set user agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    
    console.log('Loading brauncar.com...');
    await page.goto('https://brauncar.com/', { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Wait for car cards to load
    await page.waitForTimeout(3000);
    
    // Extract car information and images
    const carsData = await page.evaluate(() => {
      const cars = [];
      
      // Find all car cards (adjust selector based on actual site structure)
      const carCards = document.querySelectorAll('[class*="car"], [class*="product"], [data-car]');
      
      carCards.forEach((card, index) => {
        try {
          // Extract car name
          const nameElement = card.querySelector('h2, h3, [class*="title"], [class*="name"]');
          const name = nameElement ? nameElement.textContent.trim() : `Car ${index + 1}`;
          
          // Extract images
          const images = [];
          const imgElements = card.querySelectorAll('img');
          imgElements.forEach(img => {
            const src = img.src || img.getAttribute('data-src') || img.getAttribute('data-lazy-src');
            if (src && !src.includes('logo') && !src.includes('icon')) {
              images.push(src);
            }
          });
          
          // Extract price
          const priceElement = card.querySelector('[class*="price"], [class*="cost"]');
          const price = priceElement ? priceElement.textContent.trim() : '';
          
          if (name && images.length > 0) {
            cars.push({
              name,
              price,
              images: [...new Set(images)], // Remove duplicates
              index
            });
          }
        } catch (error) {
          console.error(`Error parsing card ${index}:`, error);
        }
      });
      
      return cars;
    });
    
    console.log(`Found ${carsData.length} cars\n`);
    
    // Download images for each car
    const results = {};
    
    for (const carData of carsData) {
      const carId = carData.name.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
      
      console.log(`Processing ${carData.name}...`);
      const downloadedImages = [];
      
      for (let i = 0; i < carData.images.length; i++) {
        const imageUrl = carData.images[i];
        const ext = path.extname(new URL(imageUrl).pathname) || '.jpg';
        const filename = i === 0 ? `${carId}${ext}` : `${carId}-${i}${ext}`;
        const filepath = path.join(carsDir, filename);
        
        try {
          await downloadImage(imageUrl, filepath);
          downloadedImages.push(`/cars/${filename}`);
          // Add delay between downloads
          await new Promise(resolve => setTimeout(resolve, 500));
        } catch (error) {
          console.log(`  ⚠ Failed to download image ${i + 1}: ${error.message}`);
        }
      }
      
      results[carId] = {
        name: carData.name,
        price: carData.price,
        images: downloadedImages
      };
      
      console.log(`✓ Processed ${carData.name}: ${downloadedImages.length} image(s)\n`);
    }
    
    // Save results to JSON
    const resultsPath = path.join(carsDir, 'images.json');
    fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
    console.log(`✓ Results saved to ${resultsPath}`);
    
  } catch (error) {
    console.error('Error during parsing:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Check if puppeteer is installed
try {
  require('puppeteer');
  parseCarImages().catch(console.error);
} catch (error) {
  console.error('Puppeteer is not installed. Please run: npm install puppeteer');
  console.error('Or use the basic script: npm run parse-cars');
  process.exit(1);
}

