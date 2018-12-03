# Sarazon: An Amazon ReDesign

# ![](https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2014/amazonlogo.jpg)


# Project Overview
For my Unit 4 project, I am going to create a simplified web application of Amazon.com. For my technologies, I am using HTML, CSS, Bootstrap, Reactstap and React for the Front-End development, and on the backend, I am using Express.js, PostgreSQL, Postman, and Postico to build the server and database. I will also be looking into npm packages and Shopify development tools.


## Project Description

The full-stack web application will include the Amazon's home page which will include a search form and navigation routing bar. There will be various routes that the user can take to search listings of products as well as a single product view.


## Project Schedule

|  Day   | Deliverable          | Status
|--------|----------------------| ----------|
|Nov 19th | Project Description  | Complete
|Nov 20th | Wireframes / Priority Matrix | Complete
|Nov 21th | Core Application Structure   | Complete
|Nov 22th | Thanksgiving | Complete
|Nov 23rd | Thanksgiving  | Complete
|Nov 24th| MVP | Complete
|Nov 25th| MVP | Complete
|Nov 26th| MVP| Complete
|Nov 27th| MVP | Complete
|Nov 28th| Post-MVP| Complete
|Nov 29th| Post-MVP | Complete
|Nov 30th| Post-MVP | Complete
|Dec 1st| Post-MVP | Complete
|Dec 2nd| Finalize and Deploy | Complete
|Dec 3rd| Present | Complete

## Style Guide
-Create a website that strips away clutter and unnecessary information and uses an minimalist and intuititve design.
-Colors: Black, white, whitesmoke, golden rod, gray.
-Font: 'Ubuntu', sans-serif; Closest font to Amazon's customized font and created by the same design company. 
-Font-Weights: 400, 700
-Less is more
-ClassNames only for CSS
-Reactstrap, D3, C3

## Wireframes

Priority Matrix:
https://i.imgur.com/aLIzhhz.png

Wireframes:
 Home page- https://i.imgur.com/CWmGeeM.png
 Single Product page- https://i.imgur.com/euFFU8C.png

Tables:
https://i.imgur.com/nlUbh2Z.jpg

App Structure:
https://i.imgur.com/0RKNQ8N.png


## Priority Matrix

In order of priority:

- Pages Layout 5hrs
- Server setup 5hrs
- MVC  5hrs
- Basic Styles 5hrs
- DB and tables 5hrs
-------
- Total: 30 hours for MVP

- Advanced Styles 5hrs
- Login 5hrs
- Shopify 5hrs
- Shopping Cart 5hrs
-----------
- Total: 15 hours for post-MVP


#### MVP

- Pages Layout
- Server setup
- MVC
- Styles
- DB and tables

#### PostMVP

- Styles
- Login
- Shopify
- Shopping Cart

### Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This renders the app and include the API fetch call and other components | 
| Nav | This renders the header include the nav |
| Products List| This renders the mapped category list |  
| Product | This renders the mapped category items individual sections | 
| Single Products | This renders the single product that the user chooses from the product list |   
| Shopping Cart | This renders the shopping cart and checkout of the user | 

### Data Fetch

componentDidMount() {
  axios.get(amazondata)
    .then(store in state as json obj)
    }

### Style Guide

For each component, I will be creating a css page to import into each one in order to keep track of the styling for each one as well as using class-based names for styling. I will also use ReactStrap where it is possible.

For font, I will be using Ubuntu since Amazon's Ember is not available. However, Ubuntu was also created by the same design company, Dalton Maag, as Amazon's font. The colors will consist of golden rod, black, and dark gray. 

### Data Render

renderData() {
if (data is in state) {
this.state.data.map( (d,i) => {
render the data and pass it as props
  }
}

## Timetable

| Component    | Priority | Estimated Time | Time Invested | Actual Time |
| ------------ | :------: |  :-----------: | :------------: | :---------: |
| Home page    | H | 5hrs | 4hrs |  5hrs |
| Header w/ Links   | H | 4hrs | 2hrs |2hrs  |
| Products Components | H | 4hrs | 4hrs | 
| Shopping Cart | H | 4hrs | 3hrs | 3hrs  |
| Checking out | H | 4hrs | 5hrs | 5hrs
| Featured Items| H | 4hrs | 4hrs | 4hrs
| Your Amazon| H | 4hrs | 2hrs | 2hrs
| ProductList | H | 4hrs | 4hrs | 4hrs
| ProductList Sticky Footer | H | 4hrs | 1hr | 1hr
| ProductList Sticky Nav | H | 4hrs | 1hr | 1hr
| ReactStrap | H | 4hrs | 3hrs  |  3hrs
| Form Component | H | 4hrs | 3hrs | 3hrs|
| Server Setup | H  | 4hrs|4hrs  | 4hrs |
| Basic Styles | H  | 4hrs| 4hrs | 4hrs|
| Adv Styles | H  | 4hrs| 2hrs | 2hrs |
| Routes | H | 4hrs | 3hrs | 3hrs  |
| Model | H | 4hrs | 2hrs | 2hrs |
| Controller | H | 4hrs | 2hrs | 2hrs |
| DB and Tables | H  | 4hrs |4hrs   | 4hrs 
| Shopify | M  | 4hrs |  3hrs |  3hrs
| E-commerce Add-ons  | M  | 4hrs | 4hrs  |  4hrs
| Data Creation  | H | 4hrs | 4hrs  | 4hrs
| Project Management | H | 4hrs | 3hr | 3hr



## Database and Tables

1 Database with 1 table

Table   -  Products

url, url_two, url_three, title, company, review_number, review_one, review_two, review_three, amazon_choice,  prime, price, desc_one, desc_two, desc_three, desc_four , product_dimensions,  item_weight, shipping_weight, question, answer, cust_imgone, cust_imgtwo, cust_imgthree


