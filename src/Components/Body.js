import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  vertical: false, // Set to true to enable vertical orientation
  verticalSwiping: false, // Enable vertical swiping
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        vertical: false, // Horizontal orientation for smaller screens
        verticalSwiping: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: false, // Horizontal orientation for smaller screens
        verticalSwiping: false
      }
    }
  ]
};

const settings2 = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  vertical: false, // Set to true to enable vertical orientation
  verticalSwiping: false, // Enable vertical swiping
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: false, // Horizontal orientation for smaller screens
        verticalSwiping: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: false, // Horizontal orientation for smaller screens
        verticalSwiping: false
      }
    },
    {
      breakpoint: 168,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false, // Horizontal orientation for smaller screens
        verticalSwiping: false
      }
    }
  ]
};

const settings3 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

function Body() {
  
  return (
<div className="fixed-bottom-bar">

<div className="osahan-home-page">
<div className="bg-primary p-3 d-none">
<div className="text-white">
<div className="title d-flex align-items-center">
<a className="toggle" href="#">
<span></span>
</a>
<h4 className="fw-bold m-0 ps-5">Browse</h4>
<a className="text-white fw-bold ms-auto" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">Filter</a>
</div> 
</div>
<div className="input-group bg-white rounded shadow-sm mt-3">
<span className="input-group-text bg-transparent border-0 rounded-0"><i className="feather-search"></i></span>
<input type="text" className="form-control bg-transparent border-0 rounded-0 px-0 shadow-none" placeholder="Enter Your Location" aria-label="Enter Your Location"/>
</div>
</div>


{/* main - row - 1 */}
<div className="bg-success">
<div className="container">
<div className="slick-slider ">
<Slider {...settings}>
<div className="slick-item px-1 py-3">
<div className="bg-white rounded position-relative p-2 text-center shadow-sm">
<img src="assets/img/Mita-img/bed/Frame_360_14062024_2.webp" className="img-fluid rounded-3 p-3" alt="beds"/>
<div className="listing-card-body pt-0">
<h6 className="card-title mb-1 fs-14">Beds</h6>
<p className="card-text small text-success">128 Items</p>
</div>
<a href="trending.html" className="stretched-link"></a>
</div>
</div>
<div className="slick-item px-1 py-3">
<div className="bg-white rounded position-relative p-2 text-center shadow-sm">
<img src="assets/img/Mita-img/Dining/dining.webp" className="img-fluid rounded-3 p-3" alt="Dining"/>
<div className="listing-card-body pt-0">
<h6 className="card-title mb-1 fs-14">Dining Sets</h6>
<p className="card-text small text-success">345 Items</p>
</div>
<a href="trending.html" className="stretched-link"></a>
</div>
</div>
<div className="slick-item px-1 py-3">
<div className="bg-white rounded position-relative p-2 text-center shadow-sm">
<img src="assets/img/Mita-img/Sofa/Frame_360_14062024_1.webp" className="img-fluid rounded-3 p-3" alt="Sofa"/>
<div className="listing-card-body pt-0">
<h6 className="card-title mb-1 fs-14">Sofa Sets</h6>
<p className="card-text small text-success">233 Items</p>
</div>
<a href="trending.html" className="stretched-link"></a>
</div>
</div>
<div className="slick-item px-1 py-3">
<div className="bg-white rounded position-relative p-2 text-center shadow-sm">
<img src="assets/img/Mita-img/Study Tables/Frame_360_14062024_4.webp" className="img-fluid rounded-3 p-3" alt="StudyTables"/>
<div className="listing-card-body pt-0">
<h6 className="card-title mb-1 fs-14">Study Tables</h6>
<p className="card-text small text-success">4445 Items</p>
</div>
<a href="trending.html" className="stretched-link"></a>
</div>
</div>
<div className="slick-item px-1 py-3">
<div className="bg-white rounded position-relative p-2 text-center shadow-sm">
<img src="assets/img/Mita-img/TV&Media/Frame_360_14062024_23.webp" className="img-fluid rounded-3 p-3" alt="Tv Tables"/>
<div className="listing-card-body pt-0">
<h6 className="card-title mb-1 fs-14">TV & Media Units</h6>
<p className="card-text small text-success">234 Items</p>
</div>
<a href="trending.html" className="stretched-link"></a>
</div>
</div>
<div className="slick-item px-1 py-3">
<div className="bg-white rounded position-relative p-2 text-center shadow-sm">
<img src="assets/img/Mita-img/Wardrobes/Frame_360_14062024_8.webp" className="img-fluid rounded-3 p-3" alt="Wardrobes"/>
<div className="listing-card-body pt-0">
<h6 className="card-title mb-1 fs-14">Wardrobes</h6>
<p className="card-text small text-success">83 Items</p>
</div>
<a href="trending.html" className="stretched-link"></a>
</div>
</div>
<div className="slick-item px-1 py-3">
<div className="bg-white rounded position-relative p-2 text-center shadow-sm">
<img src="assets/img/Mita-img/Bedside Tables/Frame_360_14062024_14.webp" className="img-fluid rounded-3 p-3" alt="Bedside"/>
<div className="listing-card-body pt-0">
<h6 className="card-title mb-1 fs-14">Bedside Tables</h6>
<p className="card-text small text-success">564 Items</p>
</div>
<a href="trending.html" className="stretched-link"></a>
</div>
</div>
<div className="slick-item px-1 py-3">
<div className="bg-white rounded position-relative p-2 text-center shadow-sm">
<img src="assets/img/Mita-img/Book Cases/Frame_360_14062024_22.webp" className="img-fluid rounded-3 p-3" alt="Bookcase"/>
<div className="listing-card-body pt-0">
<h6 className="card-title mb-1 fs-14">Book Cases</h6>
<p className="card-text small text-success">233 Items</p>
</div>
<a href="trending.html" className="stretched-link"></a>
</div>
</div>
<div className="slick-item px-1 py-3">
<div className="bg-white rounded position-relative p-2 text-center shadow-sm">
<img src="assets/img/Mita-img/Chest of Drawers/Frame_360_14062024_26.webp" className="img-fluid rounded-3 p-3" alt="Chest of Drawers"/>
<div className="listing-card-body pt-0">
<h6 className="card-title mb-1 fs-14">Chest Of Drawers</h6>
<p className="card-text small text-success">677 Items</p>
</div>
<a href="trending.html" className="stretched-link"></a>
</div>
</div>
<div className="slick-item px-1 py-3">
<div className="bg-white rounded position-relative p-2 text-center shadow-sm">
<img src="assets/img/Mita-img/Dining Chair/Frame_360_14062024_21.webp" className="img-fluid rounded-3 p-3" alt="Dining Tables"/>
<div className="listing-card-body pt-0">
<h6 className="card-title mb-1 fs-14">Dining Chair</h6>
<p className="card-text small text-success">456 Items</p>
</div>
<a href="trending.html" className="stretched-link"></a>
</div>
</div>
<div className="slick-item px-1 py-3">
<div className="bg-white rounded position-relative p-2 text-center shadow-sm">
<img src="assets/img/Mita-img/Kids and teens/Frame_360_14062024_36.webp" className="img-fluid rounded-3 p-3" alt="Kids And Teens"/>
<div className="listing-card-body pt-0">
<h6 className="card-title mb-1 fs-14">Kids And Teens</h6>
<p className="card-text small text-success">23 Items</p>
</div>
<a href="trending.html" className="stretched-link"></a>
</div>
</div>
<div className="slick-item px-1 py-3">
<div className="bg-white rounded position-relative p-2 text-center shadow-sm">
<img src="assets/img/Mita-img/Shoe Racks/Shoe.webp" className="img-fluid rounded-3 p-3" alt="Shoe Racks"/>
<div className="listing-card-body pt-0">
<h6 className="card-title mb-1 fs-14">Shoe Racks</h6>
<p className="card-text small text-success">866 Items</p>
</div>
<a href="trending.html" className="stretched-link"></a>
</div>
</div>
</Slider>
</div>
</div>
</div>

{/* main - row -2  */}
<div className="bg-white pb-3">
      <div className="container">
        <div className="slick-slider">
          <Slider {...settings2}>
            <div className="cat-item px-1 py-3 bestsell m-0">
              <a className="d-block text-center shadow-sm" href="trending.html">
                <img alt="#" src="assets/img/Mita-img/Bestsell/6 Seater Dinings Sets.jpg" className="slider-image m-0" id="demo"/>
              </a>
            </div>
            <div className="cat-item px-1 py-3 bestsell m-0">
              <a className="d-block text-center shadow-sm" href="trending.html">
                <img alt="#" src="assets/img/Mita-img/Bestsell/02.jpg" className="slider-image m-0" id="demo"/>
              </a>
            </div>
            <div className="cat-item px-1 py-3 bestsell m-0">
              <a className="d-block text-center shadow-sm" href="trending.html">
                <img alt="#" src="assets/img/Mita-img/Bestsell/03.jpg" className="slider-image m-0" id="demo"/>
              </a>
            </div>
            <div className="cat-item px-1 py-3 bestsell m-0">
              <a className="d-block text-center shadow-sm" href="trending.html">
                <img alt="#" src="assets/img/Mita-img/Bestsell/04.jpg" className="slider-image m-0" id="demo"/>
              </a>
            </div>
            <div className="cat-item px-1 py-3 bestsell m-0">
              <a className="d-block text-center shadow-sm" href="trending.html">
                <img alt="#" src="assets/img/Mita-img/Bestsell/05.jpg" className="slider-image m-0" id="demo"/>
              </a>
            </div>
            {/* Add more slides as needed */}
          </Slider>
        </div>
      </div>
    </div>


<div className="container">


<div className="py-3 title d-flex align-items-center">
<h5 className="m-0">Most popular</h5>
<a className="fw-bold ms-auto" href="most_popular.html">26 places <i className="feather-chevrons-right"></i></a>
</div>

<div className="most_popular">
    {/* <!-- row-1 --> */}
<div className="row">
<div className="col-md-3 pb-4">
<div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
<div className="list-card-image">
<div className="star position-absolute"><span className="badge text-bg-success"><i className="feather-star"></i> 3.1 (300+)</span></div>
<div className="favourite-heart text-danger position-absolute rounded-circle"><a href="#"><i className="feather-heart"></i></a></div>
<div className="member-plan position-absolute"><span className="badge text-bg-dark">Promoted</span></div>
<a href="restaurant.html">
<img alt="bed1" src="assets/img/Mita-img/Cards/bed1.png" className="img-fluid item-img w-100  " />
</a>
</div>
<div className="p-3 position-relative">
<div className="list-card-body">
<h6 className="mb-1"><a href="restaurant.html" className="text-black">The osahan Restaurant
</a>
</h6>
<p className="text-gray mb-1 small">• North • Hamburgers</p>
<p className="text-gray mb-1 rating">
</p>
<ul className="rating-stars list-unstyled">
<li>
<i className="feather-star star_active"></i>
<i className="feather-star star_active"></i>
<i className="feather-star star_active"></i>
<i className="feather-star star_active"></i>
<i className="feather-star"></i>
</li>
</ul>
<p></p>
</div>
<div className="list-card-badge">
<span className="badge text-bg-danger">OFFER</span> <small>65% OSAHAN50</small>
</div>
</div>
</div>
</div>
<div className="col-md-3 pb-4">
<div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
<div className="list-card-image">
<div className="star position-absolute"><span className="badge text-bg-success"><i className="feather-star"></i> 3.1 (300+)</span></div>
<div className="favourite-heart text-danger position-absolute rounded-circle"><a href="#"><i className="feather-heart"></i></a></div>
<div className="member-plan position-absolute"><span className="badge text-bg-dark">Promoted</span></div>
<a href="restaurant.html">
<img alt="cof1" src="assets/img/Mita-img/Cards/coffe1.png" className="img-fluid item-img w-100 cardimg"/>
</a>
</div>
<div className="p-3 position-relative">
<div className="list-card-body">
<h6 className="mb-1"><a href="restaurant.html" className="text-black">Thai Famous Indian
Cuisine</a></h6>
<p className="text-gray mb-1 small">• Indian • Pure veg</p>
<p className="text-gray mb-1 rating">
</p>
<ul className="rating-stars list-unstyled">
<li>
<i className="feather-star star_active"></i>
<i className="feather-star star_active"></i>
<i className="feather-star star_active"></i>
<i className="feather-star star_active"></i>
<i className="feather-star"></i>
</li>
</ul>
<p></p>
</div>
<div className="list-card-badge">
<span className="badge text-bg-success">OFFER</span> <small>65% off</small>
</div>
</div>
</div>
</div>
<div className="col-md-3 pb-4">
<div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
<div className="list-card-image">
<div className="star position-absolute"><span className="badge text-bg-success"><i className="feather-star"></i> 3.1 (300+)</span></div>
<div className="favourite-heart text-danger position-absolute rounded-circle"><a href="#"><i className="feather-heart"></i></a></div>
<div className="member-plan position-absolute"><span className="badge text-bg-dark">Promoted</span></div>
<a href="restaurant.html">
    <img alt="din2" src="assets/img/Mita-img/Cards/din2.png" className="img-fluid item-img w-100 cardimg"/>
</a>
</div>
<div className="p-3 position-relative">
<div className="list-card-body">
<h6 className="mb-1"><a href="restaurant.html" className="text-black">The osahan Restaurant
</a>
</h6>
<p className="text-gray mb-1 small">• Hamburgers • Pure veg</p>
<p className="text-gray mb-1 rating">
</p>
<ul className="rating-stars list-unstyled">
<li>
<i className="feather-star star_active"></i>
<i className="feather-star star_active"></i>
<i className="feather-star star_active"></i>
<i className="feather-star star_active"></i>
<i className="feather-star"></i>
</li>
</ul>
<p></p>
</div>
<div className="list-card-badge">
<span className="badge text-bg-danger">OFFER</span> <small>65% OSAHAN50</small>
</div>
</div>
</div>
</div>
<div className="col-md-3 pb-4">
<div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
<div className="list-card-image">
<div className="star position-absolute"><span className="badge text-bg-success"><i className="feather-star"></i> 3.1 (300+)</span></div>
<div className="favourite-heart text-danger position-absolute rounded-circle"><a href="#"><i className="feather-heart"></i></a></div>
<div className="member-plan position-absolute"><span className="badge text-bg-dark">Promoted</span></div>
<a href="restaurant.html">
    <img alt="shoe1" src="assets/img/Mita-img/Cards/shoe1.png" className="img-fluid item-img w-100 cardimg"/>
</a>
</div>
<div className="p-3 position-relative">
<div className="list-card-body">
<h6 className="mb-1"><a href="restaurant.html" className="text-black">Bite Me Now
Sandwiches</a></h6>
<p className="text-gray mb-1 small">American • Pure veg</p>
<p className="text-gray mb-1 rating">
</p>
<ul className="rating-stars list-unstyled">
<li>
<i className="feather-star star_active"></i>
<i className="feather-star star_active"></i>
<i className="feather-star star_active"></i>
<i className="feather-star star_active"></i>
<i className="feather-star"></i>
</li>
</ul>
<p></p>
</div>
<div className="list-card-badge">
<span className="badge text-bg-success">OFFER</span> <small>65% off</small>
</div>
</div>
</div>
</div>
</div>
{/* <!-- row -2  --> */}
<div className="row">
<div className="col-md-3 pb-4">
<div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
<div className="list-card-image">
<div className="star position-absolute"><span className="badge text-bg-success"><i className="feather-star"></i> 3.1 (300+)</span></div>
<div className="favourite-heart text-danger position-absolute rounded-circle"><a href="#"><i className="feather-heart"></i></a></div>
<div className="member-plan position-absolute"><span className="badge text-bg-dark">Promoted</span></div>
<a href="restaurant.html">
    <img alt="din1" src="assets/img/Mita-img/Cards/din1.png" className="img-fluid item-img w-100 cardimg"/>
</a>
</div>
<div className="p-3 position-relative">
<div className="list-card-body">
<h6 className="mb-1"><a href="restaurant.html" className="text-black">The osahan Restaurant
</a>
</h6>
<p className="text-gray mb-1 small">• North • Hamburgers</p>
<p className="text-gray mb-1 rating">
</p>
<ul className="rating-stars list-unstyled">
<li>
<i className="feather-star star_active"></i>
<i className="feather-star star_active"></i>
<i className="feather-star star_active"></i>
<i className="feather-star star_active"></i>
<i className="feather-star"></i>
</li>
</ul>
<p></p>
</div>
<div className="list-card-badge">
<span className="badge text-bg-danger">OFFER</span> <small>65% OSAHAN50</small>
</div>
</div>
</div>
</div>
<div className="col-md-3 pb-4">
<div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
<div className="list-card-image">
<div className="star position-absolute"><span className="badge text-bg-success"><i className="feather-star"></i> 3.1 (300+)</span></div>
<div className="favourite-heart text-danger position-absolute rounded-circle"><a href="#"><i className="feather-heart"></i></a></div>
<div className="member-plan position-absolute"><span className="badge text-bg-dark">Promoted</span></div>
<a href="restaurant.html">
    <img alt="shofa1" src="assets/img/Mita-img/Cards/shofa1.png" className="img-fluid item-img w-100 cardimg"/>
</a>
</div>
<div className="p-3 position-relative">
<div className="list-card-body">
<h6 className="mb-1"><a href="restaurant.html" className="text-black">Thai Famous Indian
Cuisine</a></h6>
<p className="text-gray mb-1 small">• Indian • Pure veg</p>
<p className="text-gray mb-1 rating">
</p>
<ul className="rating-stars list-unstyled">
<li>
<i className="feather-star star_active"></i>
<i className="feather-star star_active"></i>
<i className="feather-star star_active"></i>
<i className="feather-star star_active"></i>
<i className="feather-star"></i>
</li>
</ul>
<p></p>
</div>
<div className="list-card-badge">
<span className="badge text-bg-success">OFFER</span> <small>65% off</small>
</div>
</div>
</div>
</div>
<div className="col-md-3 pb-4">
<div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
<div className="list-card-image">
<div className="star position-absolute"><span className="badge text-bg-success"><i className="feather-star"></i> 3.1 (300+)</span></div>
<div className="favourite-heart text-danger position-absolute rounded-circle"><a href="#"><i className="feather-heart"></i></a></div>
<div className="member-plan position-absolute"><span className="badge text-bg-dark">Promoted</span></div>
<a href="restaurant.html">
    <img alt="cof2" src="assets/img/Mita-img/Cards/coffe2.png" className="img-fluid item-img w-100 cardimg"/>
</a>
</div>
<div className="p-3 position-relative">
<div className="list-card-body">
<h6 className="mb-1"><a href="restaurant.html" className="text-black">The osahan Restaurant
</a>
</h6>
<p className="text-gray mb-1 small">• Hamburgers • Pure veg</p>
<p className="text-gray mb-1 rating">
</p>
<ul className="rating-stars list-unstyled">
<li>
<i className="feather-star star_active"></i>
<i className="feather-star star_active"></i>
<i className="feather-star star_active"></i>
<i className="feather-star star_active"></i>
<i className="feather-star"></i>
</li>
</ul>
<p></p>
</div>
<div className="list-card-badge">
<span className="badge text-bg-danger">OFFER</span> <small>65% OSAHAN50</small>
</div>
</div>
</div>
</div>
<div className="col-md-3 pb-4">
<div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
<div className="list-card-image">
<div className="star position-absolute"><span className="badge text-bg-success"><i className="feather-star"></i> 3.1 (300+)</span></div>
<div className="favourite-heart text-danger position-absolute rounded-circle"><a href="#"><i className="feather-heart"></i></a></div>
<div className="member-plan position-absolute"><span className="badge text-bg-dark">Promoted</span></div>
<a href="restaurant.html">
    <img alt="bed2" src="assets/img/Mita-img/Cards/bed2.png" className="img-fluid item-img w-100 cardimg"/>
</a>
</div>
<div className="p-3 position-relative">
<div className="list-card-body">
<h6 className="mb-1"><a href="restaurant.html" className="text-black">Bite Me Now
Sandwiches</a></h6>
<p className="text-gray mb-1 small">American • Pure veg</p>
<p className="text-gray mb-1 rating">
</p>
<ul className="rating-stars list-unstyled">
<li>
<i className="feather-star star_active"></i>
<i className="feather-star star_active"></i>
<i className="feather-star star_active"></i>
<i className="feather-star star_active"></i>
<i className="feather-star"></i>
</li>
</ul>
<p></p>
</div>
<div className="list-card-badge">
<span className="badge text-bg-success">OFFER</span> <small>65% off</small>
</div>
</div>
</div>
</div>
</div>
{/* <!-- row-3  --> */}
<div className="row">
    <div className="col-md-3 pb-4">
    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
    <div className="list-card-image">
    <div className="star position-absolute"><span className="badge text-bg-success"><i className="feather-star"></i> 3.1 (300+)</span></div>
    <div className="favourite-heart text-danger position-absolute rounded-circle"><a href="#"><i className="feather-heart"></i></a></div>
    <div className="member-plan position-absolute"><span className="badge text-bg-dark">Promoted</span></div>
    <a href="restaurant.html">
        <img alt="tv1" src="assets/img/Mita-img/Cards/tv1.png" className="img-fluid item-img w-100 cardimg"/>
    </a>
    </div>
    <div className="p-3 position-relative">
    <div className="list-card-body">
    <h6 className="mb-1"><a href="restaurant.html" className="text-black">The osahan Restaurant
    </a>
    </h6>
    <p className="text-gray mb-1 small">• North • Hamburgers</p>
    <p className="text-gray mb-1 rating">
    </p>
    <ul className="rating-stars list-unstyled">
    <li>
    <i className="feather-star star_active"></i>
    <i className="feather-star star_active"></i>
    <i className="feather-star star_active"></i>
    <i className="feather-star star_active"></i>
    <i className="feather-star"></i>
    </li>
    </ul>
    <p></p>
    </div>
    <div className="list-card-badge">
    <span className="badge text-bg-danger">OFFER</span> <small>65% OSAHAN50</small>
    </div>
    </div>
    </div>
    </div>
    <div className="col-md-3 pb-4">
    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
    <div className="list-card-image">
    <div className="star position-absolute"><span className="badge text-bg-success"><i className="feather-star"></i> 3.1 (300+)</span></div>
    <div className="favourite-heart text-danger position-absolute rounded-circle"><a href="#"><i className="feather-heart"></i></a></div>
    <div className="member-plan position-absolute"><span className="badge text-bg-dark">Promoted</span></div>
    <a href="restaurant.html">
        <img alt="study1" src="assets/img/Mita-img/Cards/study1.png" className="img-fluid item-img w-100 cardimg"/>
    </a>
    </div>
    <div className="p-3 position-relative">
    <div className="list-card-body">
    <h6 className="mb-1"><a href="restaurant.html" className="text-black">Thai Famous Indian
    Cuisine</a></h6>
    <p className="text-gray mb-1 small">• Indian • Pure veg</p>
    <p className="text-gray mb-1 rating">
    </p>
    <ul className="rating-stars list-unstyled">
    <li>
    <i className="feather-star star_active"></i>
    <i className="feather-star star_active"></i>
    <i className="feather-star star_active"></i>
    <i className="feather-star star_active"></i>
    <i className="feather-star"></i>
    </li>
    </ul>
    <p></p>
    </div>
    <div className="list-card-badge">
    <span className="badge text-bg-success">OFFER</span> <small>65% off</small>
    </div>
    </div>
    </div>
    </div>
    <div className="col-md-3 pb-4">
    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
    <div className="list-card-image">
    <div className="star position-absolute"><span className="badge text-bg-success"><i className="feather-star"></i> 3.1 (300+)</span></div>
    <div className="favourite-heart text-danger position-absolute rounded-circle"><a href="#"><i className="feather-heart"></i></a></div>
    <div className="member-plan position-absolute"><span className="badge text-bg-dark">Promoted</span></div>
    <a href="restaurant.html">
        <img alt="wal1" src="assets/img/Mita-img/Cards/walnet1.png" className="img-fluid item-img w-100 cardimg"/>
    </a>
    </div>
    <div className="p-3 position-relative">
    <div className="list-card-body">
    <h6 className="mb-1"><a href="restaurant.html" className="text-black">The osahan Restaurant
    </a>
    </h6>
    <p className="text-gray mb-1 small">• Hamburgers • Pure veg</p>
    <p className="text-gray mb-1 rating">
    </p>
    <ul className="rating-stars list-unstyled">
    <li>
    <i className="feather-star star_active"></i>
    <i className="feather-star star_active"></i>
    <i className="feather-star star_active"></i>
    <i className="feather-star star_active"></i>
    <i className="feather-star"></i>
    </li>
    </ul>
    <p></p>
    </div>
    <div className="list-card-badge">
    <span className="badge text-bg-danger">OFFER</span> <small>65% OSAHAN50</small>
    </div>
    </div>
    </div>
    </div>
    <div className="col-md-3 pb-4">
    <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
    <div className="list-card-image">
    <div className="star position-absolute"><span className="badge text-bg-success"><i className="feather-star"></i> 3.1 (300+)</span></div>
    <div className="favourite-heart text-danger position-absolute rounded-circle"><a href="#"><i className="feather-heart"></i></a></div>
    <div className="member-plan position-absolute"><span className="badge text-bg-dark">Promoted</span></div>
    <a href="restaurant.html">
        <img alt="din3" src="assets/img/Mita-img/Cards/din3.png" className="img-fluid item-img w-100 cardimg"/>
    </a>
    </div>
    <div className="p-3 position-relative">
    <div className="list-card-body">
    <h6 className="mb-1"><a href="restaurant.html" className="text-black">Bite Me Now
    Sandwiches</a></h6>
    <p className="text-gray mb-1 small">American • Pure veg</p>
    <p className="text-gray mb-1 rating">
    </p>
    <ul className="rating-stars list-unstyled">
    <li>
    <i className="feather-star star_active"></i>
    <i className="feather-star star_active"></i>
    <i className="feather-star star_active"></i>
    <i className="feather-star star_active"></i>
    <i className="feather-star"></i>
    </li>
    </ul>
    <p></p>
    </div>
    <div className="list-card-badge">
    <span className="badge text-bg-success">OFFER</span> <small>65% off</small>
    </div>
    </div>
    </div>
    </div>
    </div>
    {/* <!-- row - 4  --> */}
    <div className="row">
        <div className="col-md-3 pb-4">
        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
        <div className="list-card-image">
        <div className="star position-absolute"><span className="badge text-bg-success"><i className="feather-star"></i> 3.1 (300+)</span></div>
        <div className="favourite-heart text-danger position-absolute rounded-circle"><a href="#"><i className="feather-heart"></i></a></div>
        <div className="member-plan position-absolute"><span className="badge text-bg-dark">Promoted</span></div>
        <a href="restaurant.html">
            <img alt="cof3" src="assets/img/Mita-img/Cards/coffe3.png" className="img-fluid item-img w-100 cardimg"/>
        </a>
        </div>
        <div className="p-3 position-relative">
        <div className="list-card-body">
        <h6 className="mb-1"><a href="restaurant.html" className="text-black">The osahan Restaurant
        </a>
        </h6>
        <p className="text-gray mb-1 small">• North • Hamburgers</p>
        <p className="text-gray mb-1 rating">
        </p>
        <ul className="rating-stars list-unstyled">
        <li>
        <i className="feather-star star_active"></i>
        <i className="feather-star star_active"></i>
        <i className="feather-star star_active"></i>
        <i className="feather-star star_active"></i>
        <i className="feather-star"></i>
        </li>
        </ul>
        <p></p>
        </div>
        <div className="list-card-badge">
        <span className="badge text-bg-danger">OFFER</span> <small>65% OSAHAN50</small>
        </div>
        </div>
        </div>
        </div>
        <div className="col-md-3 pb-4">
        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
        <div className="list-card-image">
        <div className="star position-absolute"><span className="badge text-bg-success"><i className="feather-star"></i> 3.1 (300+)</span></div>
        <div className="favourite-heart text-danger position-absolute rounded-circle"><a href="#"><i className="feather-heart"></i></a></div>
        <div className="member-plan position-absolute"><span className="badge text-bg-dark">Promoted</span></div>
        <a href="restaurant.html">
            <img alt="shoe2" src="assets/img/Mita-img/Cards/shoe2.png" className="img-fluid item-img w-100 cardimg"/>
        </a>
        </div>
        <div className="p-3 position-relative">
        <div className="list-card-body">
        <h6 className="mb-1"><a href="restaurant.html" className="text-black">Thai Famous Indian
        Cuisine</a></h6>
        <p className="text-gray mb-1 small">• Indian • Pure veg</p>
        <p className="text-gray mb-1 rating">
        </p>
        <ul className="rating-stars list-unstyled">
        <li>
        <i className="feather-star star_active"></i>
        <i className="feather-star star_active"></i>
        <i className="feather-star star_active"></i>
        <i className="feather-star star_active"></i>
        <i className="feather-star"></i>
        </li>
        </ul>
        <p></p>
        </div>
        <div className="list-card-badge">
        <span className="badge text-bg-success">OFFER</span> <small>65% off</small>
        </div>
        </div>
        </div>
        </div>
        <div className="col-md-3 pb-4">
        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
        <div className="list-card-image">
        <div className="star position-absolute"><span className="badge text-bg-success"><i className="feather-star"></i> 3.1 (300+)</span></div>
        <div className="favourite-heart text-danger position-absolute rounded-circle"><a href="#"><i className="feather-heart"></i></a></div>
        <div className="member-plan position-absolute"><span className="badge text-bg-dark">Promoted</span></div>
        <a href="restaurant.html">
            <img alt="study2" src="assets/img/Mita-img/Cards/study2.png" className="img-fluid item-img w-100 cardimg"/>
        </a>
        </div>
        <div className="p-3 position-relative">
        <div className="list-card-body">
        <h6 className="mb-1"><a href="restaurant.html" className="text-black">The osahan Restaurant
        </a>
        </h6>
        <p className="text-gray mb-1 small">• Hamburgers • Pure veg</p>
        <p className="text-gray mb-1 rating">
        </p>
        <ul className="rating-stars list-unstyled">
        <li>
        <i className="feather-star star_active"></i>
        <i className="feather-star star_active"></i>
        <i className="feather-star star_active"></i>
        <i className="feather-star star_active"></i>
        <i className="feather-star"></i>
        </li>
        </ul>
        <p></p>
        </div>
        <div className="list-card-badge">
        <span className="badge text-bg-danger">OFFER</span> <small>65% OSAHAN50</small>
        </div>
        </div>
        </div>
        </div>
        <div className="col-md-3 pb-4">
        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
        <div className="list-card-image">
        <div className="star position-absolute"><span className="badge text-bg-success"><i className="feather-star"></i> 3.1 (300+)</span></div>
        <div className="favourite-heart text-danger position-absolute rounded-circle"><a href="#"><i className="feather-heart"></i></a></div>
        <div className="member-plan position-absolute"><span className="badge text-bg-dark">Promoted</span></div>
        <a href="restaurant.html">
            <img alt="wal2" src="assets/img/Mita-img/Cards/walnet2.png" className="img-fluid item-img w-100 cardimg"/>
        </a>
        </div>
        <div className="p-3 position-relative">
        <div className="list-card-body">
        <h6 className="mb-1"><a href="restaurant.html" className="text-black">Bite Me Now
        Sandwiches</a></h6>
        <p className="text-gray mb-1 small">American • Pure veg</p>
        <p className="text-gray mb-1 rating">
        </p>
        <ul className="rating-stars list-unstyled">
        <li>
        <i className="feather-star star_active"></i>
        <i className="feather-star star_active"></i>
        <i className="feather-star star_active"></i>
        <i className="feather-star star_active"></i>
        <i className="feather-star"></i>
        </li>
        </ul>
        <p></p>
        </div>
        <div className="list-card-badge">
        <span className="badge text-bg-success">OFFER</span> <small>65% off</small>
        </div>
        </div>
        </div>
        </div>
        </div>

</div>

<div className="pt-2 pb-3 title d-flex align-items-center">
<h5 className="m-0">Most sales</h5>
<a className="fw-bold ms-auto" href="#">26 places <i className="feather-chevrons-right"></i></a>
</div>

<div className="most_sale">
<div className="row mb-3">
<div className="col-md-4 mb-3">
<div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
<div className="list-card-image">
<div className="star position-absolute"><span className="badge text-bg-success"><i className="feather-star"></i> 3.1 (300+)</span></div>
<div className="favourite-heart text-danger position-absolute rounded-circle"><a href="#"><i className="feather-heart"></i></a></div>
<div className="member-plan position-absolute"><span className="badge text-bg-dark">Promoted</span></div>
<a href="restaurant.html">
    <img alt="din1" src="assets/img/Mita-img/Cards/din1.png" className="img-fluid item-img w-100 cardimg"/>
</a>
</div>
<div className="p-3 position-relative">
<div className="list-card-body">
<h6 className="mb-1"><a href="restaurant.html" className="text-black">The osahan Restaurant
</a>
</h6>
<p className="text-gray mb-3">North • Hamburgers • Pure veg</p>
<p className="text-gray mb-3 time"><span className="bg-light text-dark rounded-sm py-1 px-2"><i className="feather-clock"></i> 15–25 min</span> <span className="float-end text-black-50"> $500 FOR TWO</span></p>
</div>
<div className="list-card-badge">
<span className="badge text-bg-danger">OFFER</span> <small>65% OSAHAN50</small>
</div>
</div>
</div>
</div>
<div className="col-md-4 mb-3">
<div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
<div className="list-card-image">
<div className="star position-absolute"><span className="badge text-bg-success"><i className="feather-star"></i> 3.1 (300+)</span></div>
<div className="favourite-heart text-danger position-absolute rounded-circle"><a href="#"><i className="feather-heart"></i></a></div>
<div className="member-plan position-absolute"><span className="badge text-bg-dark">Promoted</span></div>
<a href="restaurant.html">
<img alt="#" src="assets/img/Mita-img/Bestsell/03.jpg" className="img-fluid item-img w-100"/>
</a>
</div>
<div className="p-3 position-relative">
<div className="list-card-body">
<h6 className="mb-1"><a href="restaurant.html" className="text-black">Thai Famous
Cuisine</a></h6>
<p className="text-gray mb-3">North Indian • Indian • Pure veg</p>
<p className="text-gray mb-3 time"><span className="bg-light text-dark rounded-sm py-1 px-2"><i className="feather-clock"></i> 30–35 min</span> <span className="float-end text-black-50"> $250 FOR TWO</span></p>
</div>
<div className="list-card-badge">
<span className="badge text-bg-success">OFFER</span> <small>65% off</small>
</div>
</div>
</div>
</div>
<div className="col-md-4 mb-3">
<div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
<div className="list-card-image">
<div className="star position-absolute"><span className="badge text-bg-success"><i className="feather-star"></i> 3.1 (300+)</span></div>
<div className="favourite-heart text-danger position-absolute rounded-circle"><a href="#"><i className="feather-heart"></i></a></div>
<div className="member-plan position-absolute"><span className="badge text-bg-dark">Promoted</span></div>
<a href="restaurant.html">
    <img alt="#" src="assets/img/Mita-img/Bestsell/05.jpg" className="img-fluid item-img w-100"/>
</a>
</div>
<div className="p-3 position-relative">
<div className="list-card-body">
<h6 className="mb-1"><a href="restaurant.html" className="text-black">The osahan Restaurant
</a>
</h6>
<p className="text-gray mb-3">North • Hamburgers • Pure veg</p>
<p className="text-gray mb-3 time"><span className="bg-light text-dark rounded-sm py-1 px-2"><i className="feather-clock"></i> 15–25 min</span> <span className="float-end text-black-50"> $500 FOR TWO</span></p>
</div>
<div className="list-card-badge">
<span className="badge text-bg-danger">OFFER</span> <small>65% OSAHAN50</small>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center d-none">
<div className="row">
<div className="col selected">
<a href="home.html" className="text-danger small fw-bold text-decoration-none">
<p className="h4 m-0"><i className="feather-home text-danger"></i></p>
Home
</a>
</div>
<div className="col">
<a href="most_popular.html" className="text-dark small fw-bold text-decoration-none">
<p className="h4 m-0"><i className="feather-map-pin"></i></p>
Trending
</a>
</div>
<div className="col bg-white rounded-circle mt-n4 px-3 py-2">
<div className="bg-danger rounded-circle mt-n0 shadow">
<a href="checkout.html" className="text-white small fw-bold text-decoration-none">
<i className="feather-shopping-cart"></i>
</a>
</div>
</div>
<div className="col">
<a href="favorites.html" className="text-dark small fw-bold text-decoration-none">
<p className="h4 m-0"><i className="feather-heart"></i></p>
Favorites
</a>
</div>
<div className="col">
<a href="profile.html" className="text-dark small fw-bold text-decoration-none">
<p className="h4 m-0"><i className="feather-user"></i></p>
Profile
</a>
</div>
</div>
</div>


<nav id="main-nav">
      {/* Main Navigation */}
      <ul className="second-nav">
        <li><a href="home.html"><i className="feather-home me-2"></i> Homepage</a></li>
        <li><a href="my_order.html"><i className="feather-list me-2"></i> My Orders</a></li>
        <li>
          <a href="#"><i className="feather-edit-2 me-2"></i> Authentication</a>
          <ul>
            <li><a href="login.html">Login</a></li>
            <li><a href="signup.html">Register</a></li>
            <li><a href="forgot_password.html">Forgot Password</a></li>
            <li><a href="verification.html">Verification</a></li>
            <li><a href="location.html">Location</a></li>
          </ul>
        </li>
        <li><a href="favorites.html"><i className="feather-heart me-2"></i> Favorites</a></li>
        <li><a href="trending.html"><i className="feather-trending-up me-2"></i> Trending</a></li>
        <li><a href="most_popular.html"><i className="feather-award me-2"></i> Most Popular</a></li>
        <li><a href="restaurant.html"><i className="feather-paperclip me-2"></i> Restaurant Detail</a></li>
        <li><a href="checkout.html"><i className="feather-list me-2"></i> Checkout</a></li>
        <li><a href="successful.html"><i className="feather-check-circle me-2"></i> Successful</a></li>
        <li><a href="map.html"><i className="feather-map-pin me-2"></i> Live Map</a></li>
        <li>
          <a href="#"><i className="feather-user me-2"></i> Profile</a>
          <ul>
            <li><a href="profile.html">Profile</a></li>
            <li><a href="favorites.html">Delivery support</a></li>
            <li><a href="contact-us.html">Contact Us</a></li>
            <li><a href="terms.html">Terms of use</a></li>
            <li><a href="privacy.html">Privacy & Policy</a></li>
          </ul>
        </li>
        <li>
          <a href="#"><i className="feather-alert-triangle me-2"></i> Error</a>
          <ul>
            <li><a href="not-found.html">Not Found</a></li>
            <li><a href="maintence.html">Maintence</a></li>
            <li><a href="coming-soon.html">Coming Soon</a></li>
          </ul>
        </li>
        <li>
          <a href="#"><i className="feather-link me-2"></i> Navigation Link Example</a>
          <ul>
            <li>
              <a href="#">Link Example 1</a>
              <ul>
                <li>
                  <a href="#">Link Example 1.1</a>
                  <ul>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">Link Example 1.2</a>
                  <ul>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="#">Link Example 2</a></li>
            <li><a href="#">Link Example 3</a></li>
            <li><a href="#">Link Example 4</a></li>
            <li data-nav-custom-content>
              <div className="custom-message">
                You can add any custom content to your navigation items. This text is just an example.
              </div>
            </li>
          </ul>
        </li>
      </ul>

      {/* Bottom Navigation */}
      <ul className="bottom-nav">
        <li className="email">
          <a className="text-danger" href="home.html">
            <p className="h5 m-0"><i className="feather-home text-danger"></i></p>
            Home
          </a>
        </li>
        <li className="github">
          <a href="faq.html">
            <p className="h5 m-0"><i className="feather-message-circle"></i></p>
            FAQ
          </a>
        </li>
        <li className="ko-fi">
          <a href="contact-us.html">
            <p className="h5 m-0"><i className="feather-phone"></i></p>
            Help
          </a>
        </li>
      </ul>
    </nav>
<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title">Filter</h5>
<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
</button>
</div>
<div className="modal-body p-0">
<div className="osahan-filter">
<div className="filter">

<div className="p-3 bg-light border-bottom">
<h6 className="m-0">SORT BY</h6>
</div>
<div className="border-bottom p-3">
<div className="form-check form-check-reverse m-0">
<input className="form-check-input" type="radio" name="exampleRadios" id="customRadios1" value="option1" checked/>
<label className="form-check-label text-start w-100" for="customRadios1">
Top Rated
</label>
</div>
</div>
<div className="border-bottom p-3">
<div className="form-check form-check-reverse m-0">
<input className="form-check-input" type="radio" name="exampleRadios" id="customRadios2" value="option2"/>
<label className="form-check-label text-start w-100" for="customRadios2">
Nearest Me
</label>
</div>
</div>
<div className="border-bottom p-3">
<div className="form-check form-check-reverse m-0">
<input className="form-check-input" type="radio" name="exampleRadios" id="customRadios3" value="option3"/>
<label className="form-check-label text-start w-100" for="customRadios3">
Cost High to Low
</label>
</div>
</div>
<div className="border-bottom p-3">
<div className="form-check form-check-reverse m-0">
<input className="form-check-input" type="radio" name="exampleRadios" id="customRadios4" value="option4"/>
<label className="form-check-label text-start w-100" for="customRadios4">
Cost Low to High
</label>
</div>
</div>
<div className="border-bottom p-3">
<div className="form-check form-check-reverse m-0">
<input className="form-check-input" type="radio" name="exampleRadios" id="customRadios5" value="option5"/>
<label className="form-check-label text-start w-100" for="customRadios5">
Most Popular
</label>
</div>
</div>

<div className="p-3 bg-light border-bottom">
<h6 className="m-0">FILTER</h6>
</div>
<div className="border-bottom p-3">
<div className="form-check form-check-reverse m-0">
<input className="form-check-input" type="checkbox" value id="defaultCheck1" checked/>
<label className="form-check-label text-start w-100" for="defaultCheck1">
Open Now
</label>
</div>
</div>
<div className="border-bottom p-3">
<div className="form-check form-check-reverse m-0">
<input className="form-check-input" type="checkbox" value id="defaultCheck2"/>
<label className="form-check-label text-start w-100" for="defaultCheck2">
Credit Cards
</label>
</div>
</div>
<div className="border-bottom p-3">
<div className="form-check form-check-reverse m-0">
<input className="form-check-input" type="checkbox" value id="defaultCheck3"/>
<label className="form-check-label text-start w-100" for="defaultCheck3">
Alcohol Served
</label>
</div>
</div>

<div className="p-3 bg-light border-bottom">
<h6 className="m-0">ADDITIONAL FILTERS</h6>
</div>
<div className="px-3 pt-3">
<input type="range" className="form-range" min="0" max="5" step="0.5"/>
<div className="row mb-3">
<div className="col-6">
<label>Min</label>
<input className="form-control" placeholder="$0" type="number"/>
</div>
<div className="col-6 text-end">
<label>Max</label>
<input className="form-control" placeholder="$1,0000" type="number"/>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="modal-footer p-0 border-0">
<div className="col-6 m-0 p-0">
<button type="button" className="btn border-top btn-lg w-100" data-bs-dismiss="modal">Close</button>
</div>
<div className="col-6 m-0 p-0">
<button type="button" className="btn btn-primary btn-lg w-100">Apply</button>
</div>
</div>
</div>
</div>
</div>


</div>

  );
}

export default Body;
