const Amazon = require('../models/amazon-models');

const amazonController = {};

amazonController.index = (req, res) => {
  Amazon.findAll()
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
    review_titleone: req.body.review_titleone,
    review_titletwo: req.body.review_titletwo,
    review_titlethree: req.body.review_titlethree,
    amazon_choice: req.body.amazon_choice,
    prime: req.body.prime,
    price: req.body.price,
    review_personone: req.body.review_personone,
    review_persontwo: req.body.review_persontwo,
    review_personthree: req.body.review_personthree
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
    review_number: req.body.review_number,
    review_one: req.body.review_one,
    review_two: req.body.review_two,
    review_three: req.body.review_three,
    review_titleone: req.body.review_titleone,
    review_titletwo: req.body.review_titletwo,
    review_titlethree: req.body.review_titlethree,
    amazon_choice: req.body.amazon_choice,
    prime: req.body.prime,
    price: req.body.price,
    review_personone: req.body.review_personone,
    review_persontwo: req.body.review_persontwo,
    review_personthree: req.body.review_personthree
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
    review_titleone: req.body.review_titleone,
    review_titletwo: req.body.review_titletwo,
    review_titlethree: req.body.review_titlethree,
    amazon_choice: req.body.amazon_choice,
    prime: req.body.prime,
    price: req.body.price,
    review_personone: req.body.review_personone,
    review_persontwo: req.body.review_persontwo,
    review_personthree: req.body.review_personthree
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
