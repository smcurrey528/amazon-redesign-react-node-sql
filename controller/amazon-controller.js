const Amazon = require('../models/amazon-models');

const amazonController = {};

amazonController.index = (req, res) => {
  Amazon.findAll()
    .then(aimazon => {
      res.json({
        message: 'ok',
        data: aimazon,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

amazonController.show = (req, res) => {
  Amazon.findById(req.params.id)
    .then(amazon => {
      res.json({
        message: 'ok',
        data: amazon,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

amazonController.create = (req, res, next) => {
  console.log('REQBODY', req.body)
  const theData = {
    url: req.body.url,
    url_two: req.body.url_two,
    url_three: req.body.url_three,
    title: req.body.title,
    company: req.body.company,
    review_number: req.body.review_number,
    review_one: req.body.review_one,
    review_two: req.body.review_two,
    review_three: req.body.review_three,
    amazon_choice: req.body.amazon_choice,
    prime: req.body.prime,
    price: req.body.price,
    desc_one: req.body.desc_one,
    desc_two: req.body.desc_two,
    desc_three: req.body.desc_three,
    desc_four: req.body.desc_four,
    product_dimensions: req.body.product_dimensions,
    item_weight: req.body.item_weight,
    shipping_weight: req.body.shipping_weight,
    question: req.body.question,
    answer: req.body.answer,
    cust_imgone: req.body.cust_imgone,
    cust_imgtwo: req.body.cust_imgtwo,
    cust_imgthree: req.body.cust_imgthree
  }
  Amazon.create(theData)
    .then(amazon => {
      res.locals.data = amazon;
      next()
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

amazonController.add = (req, res) => {
  Amazon.add({
    url: req.body.url,
    url_two: req.body.url_two,
    url_three: req.body.url_three,
    title: req.body.title,
    company: req.body.company,
    amazon_choice: req.body.amazon_choice,
    prime: req.body.prime,
    price: req.body.price,
    desc_one: req.body.desc_one,
    desc_two: req.body.desc_two,
    desc_three: req.body.desc_three,
    desc_four: req.body.desc_four,
    product_dimensions: req.body.product_dimensions,
    item_weight: req.body.item_weight,
    shipping_weight: req.body.shipping_weight
  })
    .then(amazon => {
      res.json({
        message: 'ok',
        data: res.locals.data,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};


amazonController.update = (req, res, next) => {
  Amazon.update(
    {
       url: req.body.url,
    url_two: req.body.url_two,
    url_three: req.body.url_three,
    title: req.body.title,
    company: req.body.company,
    review_number: req.body.review_number,
    review_one: req.body.review_one,
    review_two: req.body.review_two,
    review_three: req.body.review_three,
    amazon_choice: req.body.amazon_choice,
    prime: req.body.prime,
    price: req.body.price,
    desc_one: req.body.desc_one,
    desc_two: req.body.desc_two,
    desc_three: req.body.desc_three,
    desc_four: req.body.desc_four,
    product_dimensions: req.body.product_dimensions,
    item_weight: req.body.item_weight,
    shipping_weight: req.body.shipping_weight,
    question: req.body.question,
    answer: req.body.answer,
    cust_imgone: req.body.cust_imgone,
    cust_imgtwo: req.body.cust_imgtwo,
    cust_imgthree: req.body.cust_imgthree
    },
    req.params.id
    )
    .then(amazon => {
      res.locals.data = amazon;
      next()
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};


amazonController.destroy = (req, res) => {
  Amazon.destroy(req.params.id)
    .then(amazon => {
      res.json({
        message: 'deleted',
        data: amazon,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};


module.exports = amazonController;
