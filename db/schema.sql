\c amazon

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY NOT NULL,
  url VARCHAR(10000) NOT NULL,
  url_two VARCHAR (10000) NOT NULL,
  url_three VARCHAR(10000) NOT NULL,
  title VARCHAR(10000) NOT NULL,
  company VARCHAR(10000) NOT NULL,
  review_number VARCHAR(10000) NOT NULL,
  review_one VARCHAR(10000) NOT NULL,
  review_two VARCHAR(10000) NOT NULL,
  review_three VARCHAR(10000) NOT NULL,
  amazon_choice VARCHAR(10000) NOT NULL,
  prime VARCHAR(10000),
  price VARCHAR(10000) ,
  desc_one VARCHAR(10000),
  desc_two VARCHAR(10000) ,
  desc_three VARCHAR(10000),
  desc_four VARCHAR(10000),
  product_dimensions VARCHAR(10000) NOT NULL,
  item_weight VARCHAR(10000) NOT NULL,
  shipping_weight VARCHAR(10000) NOT NULL,
  question VARCHAR(10000) NOT NULL,
  answer VARCHAR(10000) NOT NULL,
  cust_imgone VARCHAR(10000) NOT NULL,
  cust_imgtwo VARCHAR(10000) NOT NULL,
  cust_imgthree VARCHAR(10000) NOT NULL
);
