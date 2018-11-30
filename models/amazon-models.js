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
      review_two, review_three, review_titleone, review_titletwo, review_titlethree,
       amazon_choice,  prime, price, review_personone, review_persontwo, review_personthree)
     VALUES ($/url/, $/url_two/, $/url_three/, $/title/, $/company/,
      $/review_number/, $/review_one/, $/review_two/, $/review_three/,
      $/review_titleone/, $/review_titletwo/, $/review_titlethree/,
      $/amazon_choice/,  $/prime/, $/price, $/review_personone/, $/review_persontwo/, $/review_personthree/)
     RETURNING *
    `, products);
}

amazonModels.create = products => {
  return db.one(
    `
    INSERT INTO products
     (url, url_two, url_three, title, company, review_number, review_one,
      review_two, review_three, review_titleone, review_titletwo, review_titlethree,
       amazon_choice,  prime, price, review_personone, review_persontwo, review_personthree)
     VALUES ($/url/, $/url_two/, $/url_three/, $/title/, $/company/,
      $/review_number/, $/review_one/, $/review_two/, $/review_three/,
      $/review_titleone/, $/review_titletwo/, $/review_titlethree/,
      $/amazon_choice/,  $/prime/, $/price, $/review_personone/, $/review_persontwo/, $/review_personthree/)
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
      review_titleone = $10,
      review_titletwo = $11,
      review_three = $12,
      amazon_choice = $13,
      prime = $14,
      price = $15,
      review_personone = $16,
      review_persontwo = $17,
      review_personthree = $18,
    WHERE id = $19
    RETURNING *
  `,
  [products.url, products.url_two, products.url_three, products.title, products.company, products.review_number,
  products.review_one, products.review_two, products.review_three, products.review_titleone,
  products.review_titletwo, products.review_titlethree, products.amazon_choice,  products.prime,
   products.price, products.review_personone, products.review_persontwo, products.review_personthree, id],
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
