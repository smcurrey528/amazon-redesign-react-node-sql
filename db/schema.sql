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
  review_titleone VARCHAR(10000) NOT NULL,
  review_titletwo VARCHAR(10000) NOT NULL,
  review_titlethree VARCHAR(10000) NOT NULL,
  amazon_choice VARCHAR(10000) NOT NULL,
  prime VARCHAR(10000),
  price VARCHAR(10000) ,
  review_personone VARCHAR(10000) NOT NULL,
  review_persontwo VARCHAR(10000) NOT NULL,
  review_personthree VARCHAR(10000) NOT NULL
);
