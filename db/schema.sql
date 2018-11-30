\c amazon

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY NOT NULL,
  url VARCHAR(10000),
  url_two VARCHAR (10000),
  url_three VARCHAR(10000),
  title VARCHAR(10000),
  company VARCHAR(10000),
  review_number VARCHAR(10000),
  review_one VARCHAR(10000),
  review_two VARCHAR(10000),
  review_three VARCHAR(10000),
  review_titleone VARCHAR(10000),
  review_titletwo VARCHAR(10000),
  review_titlethree VARCHAR(10000),
  amazon_choice VARCHAR(10000),
  prime VARCHAR(10000),
  price VARCHAR(10000) ,
  review_personone VARCHAR(10000),
  review_persontwo VARCHAR(10000),
  review_personthree VARCHAR(10000)
);
