const puppeteer = require('puppeteer-core');
const path = require('path');

const ARTIFACT_DIR = '/Users/KiranBasa/.gemini/antigravity/brain/f38602bf-4bdf-4a0b-a8e5-3ea37df2017f';
const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

async function capture() {
  console.log('Launching Chrome...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
    defaultViewport: {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2
    }
  });

  const page = await browser.newPage();
  console.log('Navigating to http://localhost:5173...');
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 30000 });
  await page.waitForTimeout ? page.waitForTimeout(2000) : new Promise(r => setTimeout(r, 2000));

  // 1. Hero
  console.log('Capturing Hero...');
  await page.screenshot({
    path: path.join(ARTIFACT_DIR, '01_hero.png')
  });

  // 2. Introduction & Perspective
  console.log('Capturing Introduction...');
  const intro = await page.$('#introduction');
  if (intro) {
    await intro.scrollIntoView();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({
      path: path.join(ARTIFACT_DIR, '02_introduction.png')
    });
  }

  // 2B. Projects Explorer
  console.log('Capturing Projects Explorer...');
  const projects = await page.$('#projects');
  if (projects) {
    await projects.scrollIntoView();
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({
      path: path.join(ARTIFACT_DIR, '03_projects_explorer.png')
    });
  }

  // 2C. Loading Calculator
  console.log('Capturing Loading Calculator...');
  const calculator = await page.$('#calculator');
  if (calculator) {
    await calculator.scrollIntoView();
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({
      path: path.join(ARTIFACT_DIR, '04_loading_calculator.png')
    });
  }

  // 3. Expertise
  console.log('Capturing Expertise...');
  const expertise = await page.$('#expertise');
  if (expertise) {
    await expertise.scrollIntoView();
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({
      path: path.join(ARTIFACT_DIR, '05_expertise.png')
    });
  }

  // 4. Hyderabad Focus & Interactive Corridor Radar
  console.log('Capturing Hyderabad Focus...');
  const hyderabad = await page.$('#hyderabad-focus');
  if (hyderabad) {
    await hyderabad.scrollIntoView();
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({
      path: path.join(ARTIFACT_DIR, '06_hyderabad_focus.png')
    });
  }

  // 5. Opportunities
  console.log('Capturing Selected Opportunities...');
  const opportunities = await page.$('#opportunities');
  if (opportunities) {
    await opportunities.scrollIntoView();
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({
      path: path.join(ARTIFACT_DIR, '05_opportunities.png')
    });
  }

  // 6. Market Intelligence
  console.log('Capturing Market Intelligence...');
  const insights = await page.$('#insights');
  if (insights) {
    await insights.scrollIntoView();
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({
      path: path.join(ARTIFACT_DIR, '06_insights.png')
    });
  }

  // 7. How We Work (Process)
  console.log('Capturing Process...');
  const process = await page.$('#process');
  if (process) {
    await process.scrollIntoView();
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({
      path: path.join(ARTIFACT_DIR, '07_process.png')
    });
  }

  // 8. Contact Section & Direct WhatsApp
  console.log('Capturing Contact...');
  const contact = await page.$('#contact');
  if (contact) {
    await contact.scrollIntoView();
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({
      path: path.join(ARTIFACT_DIR, '08_contact.png')
    });
  }

  await browser.close();
  console.log('All section screenshots captured successfully!');
}

capture().catch((err) => {
  console.error('Error during capture:', err);
  process.exit(1);
});
