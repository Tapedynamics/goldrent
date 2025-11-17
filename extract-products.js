const fs = require('fs');
const xml2js = require('xml2js');

// Read and parse the XML file
const xmlContent = fs.readFileSync('noleggiolungoterminegoldrentitalia.WordPress.2025-11-04.xml', 'utf-8');

const parser = new xml2js.Parser({
  explicitArray: false,
  mergeAttrs: true,
  trim: true
});

parser.parseString(xmlContent, (err, result) => {
  if (err) {
    console.error('Error parsing XML:', err);
    return;
  }

  const items = result.rss.channel.item;
  const products = [];

  items.forEach(item => {
    // Check if this is a product
    if (item['wp:post_type'] === 'product' && item['wp:status'] === 'publish') {
      const product = {
        id: item['wp:post_id'],
        title: item.title,
        slug: item['wp:post_name'],
        link: item.link,
        description: item['content:encoded'] || '',
        excerpt: item['excerpt:encoded'] || '',
        categories: [],
        brand: '',
        fuelType: '',
        transmission: '',
        displacement: '',
        horsepower: '',
        thumbnail_id: '',
        price: {
          regular: '',
          sale: '',
          option1: {
            monthly: '',
            km: '',
            duration: '',
            deposit: ''
          },
          option2: {
            monthly: '',
            km: '',
            duration: '',
            deposit: ''
          }
        }
      };

      // Extract categories
      if (item.category) {
        const cats = Array.isArray(item.category) ? item.category : [item.category];
        cats.forEach(cat => {
          if (cat.domain === 'product_cat') {
            product.categories.push(cat._);
          }
        });
      }

      // Extract metadata
      if (item['wp:postmeta']) {
        const metas = Array.isArray(item['wp:postmeta']) ? item['wp:postmeta'] : [item['wp:postmeta']];

        metas.forEach(meta => {
          const key = meta['wp:meta_key'];
          const value = meta['wp:meta_value'];

          switch (key) {
            case '_thumbnail_id':
              product.thumbnail_id = value;
              break;
            case '_regular_price':
              product.price.regular = value;
              break;
            case '_sale_price':
              product.price.sale = value;
              break;
            case '_price':
              product.price.current = value;
              break;
            case 'ptb_prezzo1':
              product.price.option1.monthly = value;
              break;
            case 'ptb_kmprezzo1':
              product.price.option1.km = value;
              break;
            case 'ptb_durataprezzo1':
              product.price.option1.duration = value;
              break;
            case 'ptb_anticipoprezzo1':
              product.price.option1.deposit = value;
              break;
            case 'ptb_prezzo2':
              product.price.option2.monthly = value;
              break;
            case 'ptb_kmprezzo2':
              product.price.option2.km = value;
              break;
            case 'ptb_durataprezzo2':
              product.price.option2.duration = value;
              break;
            case 'ptb_anticipoprezzo2':
              product.price.option2.deposit = value;
              break;
            case 'ptb_cilindrata':
              product.displacement = value;
              break;
            case 'ptb_cavalli':
              product.horsepower = value;
              break;
          }
        });
      }

      products.push(product);
    }
  });

  console.log(`✅ Extracted ${products.length} products`);

  // Save to JSON file
  fs.writeFileSync('products.json', JSON.stringify(products, null, 2));
  console.log('✅ Products saved to products.json');

  // Print first product as example
  console.log('\n📦 Example product:');
  console.log(JSON.stringify(products[0], null, 2));
});
