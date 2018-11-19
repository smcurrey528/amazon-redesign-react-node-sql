# Amazon ReDesign

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
|Nov 21th | Core Application Structure   | Incomplete
|Nov 22th | Thanksgiving | Incomplete
|Nov 23rd | Thanksgiving  | Incomplete
|Nov 24th| MVP | Incomplete
|Nov 25th| MVP | Incomplete
|Nov 26th| MVP| Incomplete
|Nov 27th| MVP | Incomplete
|Nov 28th| Post-MVP| Incomplete
|Nov 29th| Post-MVP | Incomplete
|Nov 30th| Post-MVP | Incomplete
|Dec 1st| Post-MVP | Incomplete
|Dec 2nd| Finalize and Deploy | Incomplete
|Dec 3rd| Present | Incomplete



## Wireframes

Priority Matrix:
https://res.cloudinary.com/div3mompi/image/upload/v1541434083/MVP_PMVP_Priority_Matrix.jpg

Wireframes:
 Home page- https://i.imgur.com/CWmGeeM.png
 Single Product page- https://i.imgur.com/euFFU8C.png

Tables:
https://res.cloudinary.com/div3mompi/image/upload/v1541432951/Tables.jpg

Location Constraints:
https://res.cloudinary.com/div3mompi/image/upload/v1541432942/Location_Contraints.jpg

ERD Tables:
https://res.cloudinary.com/div3mompi/image/upload/v1541437548/ERD_tables.jpg

App Structure:
https://res.cloudinary.com/div3mompi/image/upload/v1541438623/App_Structure.jpg


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



## Functional Components

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
| Home page    | H | 4hrs |  | 
| Header w/ Links   | H | 4hrs |  | 
| Products Components | H | 4hrs |  | 
| Shopping Cart | H | 4hrs |  | 
| Checking out | H | 4hrs |  | 
| Featured Items| H | 4hrs |  | 
| Your Amazon| H | 4hrs |  | 
| ProductList | H | 4hrs |  | 
| ProductList Sticky Footer | H | 4hrs |  | 
| ProductList Sticky Nav | H | 4hrs |  | 
| ReactStrap | H | 4hrs |  | 
| Amazon API | L | 4hrs | |  |
| Form Component | H | 4hrs |  | |
| Server Setup | H  | 4hrs|  |  |
| Basic Styles | H  | 4hrs|  | |
| Adv Styles | H  | 4hrs|  |  |
| Routes | H | 4hrs |  |  |
| Model | H | 4hrs | | 
| Controller | H | 4hrs |  | 
| DB and Tables | H  | 4hrs |  | 
| Shopify | M  | 4hrs |   |  
| E-commerce  | M  | 4hrs |   |  
| Data Creation  | H | 4hrs |   | 
| Login| L | 4hrs |  | 
| Project Management | H | 4hrs |  | 



## Database and Tables

1 Database with 1 table

Table   -  Products

url, url_two, url_three, title, company, review_number, review_one, review_two, review_three, amazon_choice,  prime, price, desc_one, desc_two, desc_three, desc_four , product_dimensions,  item_weight, shipping_weight, question, answer, cust_imgone, cust_imgtwo, cust_imgthree


