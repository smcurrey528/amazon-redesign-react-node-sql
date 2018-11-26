const db = require('../db/config');

const amazonModels = {};

amazonModels.findAll = () => {
  return db.query(`SELECT * FROM products`);
};

amazonModels.findById = id => {
  return db.oneOrNone(
    `
    SELECT * FROM products
    WHERE products.id = $1
  `,
    [id]
  );
};

amazonModels.add = products => {
  return db.one(
    `
     INSERT INTO products
     (url, url_two, url_three, title, company, review_number, review_one,
  review_two, review_three, amazon_choice, prime, price, desc_one,
  desc_two, desc_three, desc_four, product_dimensions, item_weight, shipping_weight, question,
  answer, cust_imgone, cust_imgtwo, cust_imgthree)
     VALUES ($/url/, $/url_two/, $/url_three/, $/title/, $/company/, $/review_number/, $/review_one/,
  $/review_two/, $/review_three/, $/amazon_choice/, $/prime/, $/price/, $/desc_one/,
  $/desc_two/, $/desc_three/, $/desc_four/, $/product_dimensions/, $/item_weight/, $/shipping_weight/, $/question/,
  $/answer/, $/cust_imgone/, $/cust_imgtwo/, $/cust_imgthree/)
     RETURNING *
    `, products);
}

amazonModels.create = products => {
  return db.one(
    `
    INSERT INTO products
     (url, url_two, url_three, title, company, review_number, review_one,
  review_two, review_three, amazon_choice, prime, price, desc_one,
  desc_two, desc_three, desc_four, product_dimensions, item_weight, shipping_weight, question,
  answer, cust_imgone, cust_imgtwo, cust_imgthree)
     VALUES ($/url/, $/url_two/, $/url_three/, $/title/, $/company/, $/review_number/, $/review_one/,
  $/review_two/, $/review_three/, $/amazon_choice/, $/prime/, $/price/, $/desc_one/,
  $/desc_two/, $/desc_three/, $/desc_four/, $/product_dimensions/, $/item_weight/, $/shipping_weight/, $/question/,
  $/answer/, $/cust_imgone/, $/cust_imgtwo/, $/cust_imgthree/)
    RETURNING *
  `, products);
};

amazonModels.update = (products, id) => {
  return db.one(
    `
    UPDATE products SET
      url = $1,
      url_two = $2,
      url_three = $3,
      title = $4,
      company = $5,
      review_number = $6,
      review_one = $7,
      review_two = $8,
      review_three = $9,
      amazon_choice = $10,
      prime = $11,
      price = $12,
      desc_one = $13,
      desc_two = $14,
      desc_three = $15,
      desc_four = $16,
      product_dimensions = $17,
      item_weight = $18,
      shipping_weight = $19,
      question = $20,
      answer = $21,
      cust_imgone = $22,
      cust_imgtwo = $23,
      cust_imgthree= $24
    WHERE id = $25
    RETURNING *
  `,
  [products.url, products.url_two, products.url_three, products.title, products.company, products.review_number, products.review_one,
  products.review_two, products.review_three, products.amazon_choice, products.prime, products.price, products.desc_one,
  products.desc_two, products.desc_three, products.desc_four, products.product_dimensions, products.item_weight, products.shipping_weight, products.question,
  products.answer, products.cust_imgone, products.cust_imgtwo, products.cust_imgthree, id],
  );
};



amazonModels.destroy = id => {
  return db.none(
    `
    DELETE FROM products
    WHERE id = $1
  `,
    [id]
  );
};


module.exports = amazonModels;
