const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create cars directory if it doesn't exist
const carsDir = path.join(__dirname, '..', 'public', 'cars');
if (!fs.existsSync(carsDir)) {
  fs.mkdirSync(carsDir, { recursive: true });
}

// Car data structure
const cars = [
  { id: 'mg3-blue', name: 'MG 3', color: 'Blue', year: 2024 },
  { id: 'mg3-black', name: 'MG 3', color: 'Black', year: 2024 },
  { id: 'mg3-grey', name: 'MG 3', color: 'Grey', year: 2024 },
  { id: 'mg5-silver', name: 'MG 5', color: 'Silver', year: 2023 },
  { id: 'mg5-white', name: 'MG 5', color: 'White', year: 2024 },
  { id: 'mg-gt-blue', name: 'MG GT', color: 'Blue', year: 2024 },
  { id: 'mg-gt-red', name: 'MG GT', color: 'Red', year: 2024 },
  { id: 'mg-gt-white', name: 'MG GT', color: 'White', year: 2024 },
  { id: 'mg-gt-black', name: 'MG GT', color: 'Black', year: 2024 },
  { id: 'mg-zs-silver', name: 'MG ZS', color: 'Silver', year: 2024 },
  { id: 'mg-zs-white', name: 'MG ZS', color: 'White', year: 2024 },
  { id: 'mg-rx5', name: 'MG RX5', color: '', year: 2024 },
  { id: 'jetour-t2', name: 'JETOUR T2', color: 'Sand', year: 2026 },
];

// Function to download image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect
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

// Function to try multiple image URL patterns
async function tryDownloadCarImages(car) {
  const patterns = [
    `https://brauncar.com/images/cars/${car.id}.jpg`,
    `https://brauncar.com/images/cars/${car.id}.png`,
    `https://brauncar.com/images/${car.id}.jpg`,
    `https://brauncar.com/images/${car.id}.png`,
    `https://brauncar.com/uploads/cars/${car.id}.jpg`,
    `https://brauncar.com/uploads/${car.id}.jpg`,
  ];

  const downloadedImages = [];
  
  for (let i = 0; i < patterns.length; i++) {
    const url = patterns[i];
    const ext = path.extname(url) || '.jpg';
    const filename = i === 0 ? `${car.id}${ext}` : `${car.id}-${i}${ext}`;
    const filepath = path.join(carsDir, filename);
    
    try {
      await downloadImage(url, filepath);
      downloadedImages.push(`/cars/${filename}`);
    } catch (error) {
      // Try next pattern
      continue;
    }
  }

  return downloadedImages;
}

// Main function
async function main() {
  console.log('Starting to parse and download car images from brauncar.com...\n');
  
  const results = {};
  
  for (const car of cars) {
    console.log(`Processing ${car.name} ${car.color} ${car.year}...`);
    const images = await tryDownloadCarImages(car);
    results[car.id] = images;
    
    if (images.length === 0) {
      console.log(`⚠ No images found for ${car.id}`);
    } else {
      console.log(`✓ Found ${images.length} image(s) for ${car.id}\n`);
    }
    
    // Add delay to avoid overwhelming the server
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Save results to JSON
  const resultsPath = path.join(__dirname, '..', 'public', 'cars', 'images.json');
  fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
  console.log(`\n✓ Results saved to ${resultsPath}`);
  console.log('\nNote: If images were not found, you may need to:');
  console.log('1. Inspect the brauncar.com website to find the actual image URLs');
  console.log('2. Manually download images and place them in public/cars/');
  console.log('3. Update the image paths in RentPage.tsx');
}

main().catch(console.error);

