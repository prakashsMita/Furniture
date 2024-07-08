import React, { useRef } from 'react';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import OwlCarousel from 'react-owl-carousel';
function LandingBody() {
    const carouselRef = useRef(null);

    const carouselOptions = {
    autoplaySpeed: 2000,
      autoplay: true,
      dots: false,
      loop: true,
      margin: 10,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 2
        },
        1000: {
          items: 4
        }
      },
      nav: true,
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
    };
    return (
        <>
            <section className="section-padding homepage-search-block position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto pt-lg-5">
                            <div className="homepage-search-title text-center">
                                <h1 className="mb-3 text-shadow text-gray-900 font-weight-bold">
                                    Find Best Deals in <span className="font-weight-light">Dindigul</span>
                                </h1>
                                <h5 className="mb-5 text-shadow text-gray-800 font-weight-normal">
                                    Let our experts find the best coupons and deals for you!
                                </h5>
                            </div>
                            <div className="homepage-search-form">
                                <form className="form-noborder">
                                    <div className="form-row">
                                        <div className="col-lg-3 col-md-3 col-sm-12 form-group">
                                            <div className="location-dropdown">
                                                <i className="icofont-location-arrow"></i>
                                                <select className="custom-select form-control-lg">
                                                    <option> All </option>
                                                    <option> Coupons </option>
                                                    <option> Offers </option>
                                                    <option> Stores </option>
                                                    <option> Restaurants </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-7 col-sm-12 form-group">
                                            <input
                                                type="text"
                                                placeholder="Search for stores, coupons, & offers…"
                                                className="form-control border-0 form-control-lg shadow-sm"
                                            />
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm-12 form-group">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-block btn-lg shadow-sm"
                                            >
                                                <i className="icofont-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <h6 className="mb-0 mt-1 text-shadow text-center text-gray-500-700 font-weight-normal">
                                E.g. Coupons, Offers, Brands, Stores, Restaurant & more...
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding homepage-view-offers">
<div className="container">
<div className="d-sm-flex align-items-center justify-content-between mb-4">
<h1 className="h5 mb-0 text-gray-900">Top Offers</h1>
<a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-eye fa-sm text-white-50 "></i> View All</a>
</div>
<div className="row">
<div className="col-xl-3 col-sm-6">
<div className="custom-card shadow-sm h-100">
<div className="custom-card-image">
<a href="#">
{/* <img className="img-fluid item-img" src="assets/Landing/images/custom-card/1.png"> */}
<iframe src="https://d1csarkz8obe9u.cloudfront.net/index.php/posterbuilder/view/e31ff6f768ef3873fc8d181f7f3a9e06/1" style={{height: '180px', width:'100%', border:'none'}}></iframe>
</a>
<div className="button-g-btn button-g-btn-up">
<img className="img-fluid" src="assets/Landing/images/brand/1.png"/>
<span>MakeMyTrip</span>
</div>
</div>
<div className="p-3 pt-4">
<div className="custom-card-body">
<h6 className="mb-3"><a className="text-gray-900" href="#">Get Flat 30% OFF on Payment Via RBL
Bank</a></h6>
<p className="text-gray-500"><i className="icofont-clock-time"></i> Ends in 18 days</p>
</div>
<div className="custom-card-footer d-flex align-items-center">
<span className="text-danger"><i className="icofont-sale-discount"></i> 50 % OFF</span><a className="btn btn-sm btn-white ml-auto" href="#">Get Offer</a>
</div>
</div>
</div>
</div>
<div className="col-xl-3 col-sm-6">
<div className="custom-card shadow-sm h-100">
<div className="custom-card-image">
<a href="#">
<div><iframe src="https://d1csarkz8obe9u.cloudfront.net/index.php/posterbuilder/view/5fe9d3b7b13866ec7f734a16c41b097d/1" style={{height: '180px', width:'100%', border:'none'}}></iframe></div>
</a>
<div className="button-g-btn button-g-btn-up">
<img className="img-fluid" src="assets/Landing/images/brand/2.png"/>
<span>Dominos</span>
</div>
</div>
<div className="p-3 pt-4">
<div className="custom-card-body">
<h6 className="mb-3"><a className="text-gray-900" href="#">Special Offer: Get Up to 50% Off On
Web Hosting
</a>
</h6>
<p className="text-gray-500"><i className="icofont-clock-time"></i> Ends in 18 days</p>
</div>
<div className="custom-card-footer d-flex align-items-center">
<span className="text-danger"><i className="icofont-sale-discount"></i> 50 % OFF</span><a className="btn btn-sm btn-white ml-auto" href="#">Get Offer</a>
</div>
</div>
</div>
</div>
<div className="col-xl-3 col-sm-6">
<div className="custom-card shadow-sm bg-white h-100">
<div className="custom-card-image">
<a href="#">
<div><iframe src="https://d1csarkz8obe9u.cloudfront.net/index.php/posterbuilder/view/a3a3e9767babcfec1d24fd4c7396282b/1" style={{height: '180px', width:'100%', border:'none'}}></iframe></div>
</a>
<div className="button-g-btn button-g-btn-up">
<img className="img-fluid" src="assets/Landing/images/brand/3.png"/>
<span>Amazon</span>
</div>
</div>
<div className="p-3 pt-4">
<div className="custom-card-body">
<h6 className="mb-3"><a className="text-gray-900" href="#">Get Flat 30% OFF on Payment Via RBL
Bank</a></h6>
<p className="text-gray-500"><i className="icofont-clock-time"></i> Ends in 18 days</p>
</div>
<div className="custom-card-footer d-flex align-items-center">
<span className="text-danger"><i className="icofont-sale-discount"></i> 50 % OFF</span><a className="btn btn-sm btn-white ml-auto" href="#">Get Offer</a>
</div>
</div>
</div>
</div>
<div className="col-xl-3 col-sm-6">
<div className="custom-card shadow-sm h-100">
<div className="custom-card-image">
<a href="#">
<div><iframe src="https://d1csarkz8obe9u.cloudfront.net/index.php/posterbuilder/view/7364e4be44a5782991fefbe06ad8e6f3/1" style={{height: '180px', width:'100%', border:'none'}}></iframe></div>
</a>
<div className="button-g-btn button-g-btn-up">
<img className="img-fluid" src="assets/Landing/images/brand/4.png"/>
<span>Myntra</span>
</div>
</div>
<div className="p-3 pt-4">
<div className="custom-card-body">
<h6 className="mb-3"><a className="text-gray-900" href="#">Special Offer: Get Up to 50% Off On
Web Hosting
</a>
</h6>
<p className="text-gray-500"><i className="icofont-clock-time"></i> Ends in 18 days</p>
</div>
<div className="custom-card-footer d-flex align-items-center">
<span className="text-danger"><i className="icofont-sale-discount"></i> 50 % OFF</span><a className="btn btn-sm btn-white ml-auto" href="#">Get Offer</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

            <section className="section-padding homepage-store-block">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h5 mb-0 text-gray-900">Top Stores</h1>
          <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            <i className="fas fa-eye fa-sm text-white-50"></i> View All
          </a>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12">
            <OwlCarousel ref={carouselRef} className="owl-theme owl-carousel-four homepage-coupon-carousel" {...carouselOptions}>
            <div className="item">
<div className="custom-card bg-white shadow-sm h-100 stor-card">
<div className="custom-card-image">
<div className="member-plan"><span className="badge badge-warning">Gold Member</span></div>
<a href="#">
<img className="img-fluid item-img" src="assets\Landing\images\Landing\Topstore\09.jpg"/>
</a>
<div className="shape shape-bottom shape-fluid-x svg-shim text-white">
<svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z" fill="currentColor"></path>
</svg>
</div>
<div className="store-star"><span className="badge badge-success"><i className="icofont-star"></i> 3.1</span></div>
</div>
<div className="p-3">
<div className="custom-card-body">
<h6 className="mb-0"><a className="text-gray-900" href="#">Rasi Furniture</a></h6>
<p className="text-gray-500 mb-2">Dindigul, Tamil Nadu</p>
<p className="text-gray-500 mb-0"><span className="text-gray-900">Furniture store</span>
</p>
</div>
</div>
<div className="p-3 border-top">
<div className="custom-card-badge">
<span className="badge badge-danger"><i className="icofont-sale-discount"></i>
OFFER</span> Flat 50% on all Stores
</div>
</div>
</div>
</div>
<div className="item">
<div className="custom-card bg-white shadow-sm h-100 stor-card">
<div className="custom-card-image">
<a href="#">
<img className="img-fluid item-img" src="assets\Landing\images\Landing\Topstore\02.png"/>
</a>
<div className="shape shape-bottom shape-fluid-x svg-shim text-white">
<svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z" fill="currentColor"></path>
</svg>
</div>
<div className="store-star"><span className="badge badge-success"><i className="icofont-star"></i> 3.1</span></div>
</div>
<div className="p-3">
<div className="custom-card-body">
<h6 className="mb-0"><a className="text-gray-900" href="#">Chennai Furniture</a></h6>
<p className="text-gray-500 mb-2">Dindigul, Tamil Nadu</p>
<p className="text-gray-500 mb-0"><span className="text-warning"><i className="icofont-clock-time"></i>Furniture store</span></p>
</div>
</div>
<div className="p-3 border-top">
<div className="custom-card-badge">
<span className="badge badge-danger"><i className="icofont-sale-discount"></i>
OFFER</span> Flat 50% on all Stores
</div>
</div>
</div>
</div>
<div className="item">
<div className="custom-card bg-white shadow-sm h-100 stor-card">
<div className="custom-card-image">
<div className="member-plan"><span className="badge badge-info">Silver Member</span></div>
<a href="#">
<img className="img-fluid item-img" src="assets\Landing\images\Landing\Topstore\08.jpg"/>
</a>
<div className="shape shape-bottom shape-fluid-x svg-shim text-white">
<svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z" fill="currentColor"></path>
</svg>
</div>
<div className="store-star"><span className="badge badge-success"><i className="icofont-star"></i> 3.1</span></div>
</div>
<div className="p-3">
<div className="custom-card-body">
<h6 className="mb-0"><a className="text-gray-900" href="#">Royaloak Furniture</a></h6>
<p className="text-gray-500 mb-2">Dindigul, Tamil Nadu</p>
<p className="text-gray-500 mb-0"><span className="text-gray-900">Furniture store</span>
</p>
</div>
</div>
<div className="p-3 border-top">
<div className="custom-card-badge">
<span className="badge badge-danger"><i className="icofont-sale-discount"></i>
OFFER</span> Flat 50% on all Stores
</div>
</div>
</div>
</div>
<div className="item">
<div className="custom-card bg-white shadow-sm h-100 stor-card">
<div className="custom-card-image">
<a href="#">
<img className="img-fluid item-img" src="assets\Landing\images\Landing\Topstore\06.jpg"/>
</a>
<div className="shape shape-bottom shape-fluid-x svg-shim text-white">
<svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z" fill="currentColor"></path>
</svg>
</div>
<div className="store-star"><span className="badge badge-success"><i className="icofont-star"></i> 3.1</span></div>
</div>
<div className="p-3">
<div className="custom-card-body">
<h6 className="mb-0"><a className="text-gray-900" href="#">Damro Furniture</a></h6>
<p className="text-gray-500 mb-2">Dindigul, Tamil Nadu</p>
<p className="text-gray-500 mb-0"><span className="text-warning"><i className="icofont-clock-time"></i> Furniture store</span></p>
</div>
</div>
<div className="p-3 border-top">
<div className="custom-card-badge">
<span className="badge badge-info"><i className="icofont-sale-discount"></i> OFFER</span>
Flat 50% on all Stores
</div>
</div>
</div>
</div>
<div className="item">
<div className="custom-card bg-white shadow-sm h-100 stor-card">
<div className="custom-card-image">
<div className="member-plan"><span className="badge badge-warning">Gold Member</span></div>
<a href="#">
<img className="img-fluid item-img" src="assets\Landing\images\Landing\Topstore\07.jpg"/>
</a>
<div className="shape shape-bottom shape-fluid-x svg-shim text-white">
<svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z" fill="currentColor"></path>
</svg>
</div>
<div className="store-star"><span className="badge badge-success"><i className="icofont-star"></i> 3.1</span></div>
</div>
<div className="p-3">
<div className="custom-card-body">
<h6 className="mb-0"><a className="text-gray-900" href="#">Mithra Furnitures</a></h6>
<p className="text-gray-500 mb-2">Dindigul, Tamil Nadu</p>
<p className="text-gray-500 mb-0"><span className="text-gray-900">Furniture store</span>
</p>
</div>
</div>
<div className="p-3 border-top">
<div className="custom-card-badge">
<span className="badge badge-danger"><i className="icofont-sale-discount"></i>
OFFER</span> Flat 50% on all Stores
</div>
</div>
</div>
</div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>

{/*top-store  row 2 */}
<section className="section-padding homepage-store-block">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h5 mb-0 text-gray-900">Top Stores</h1>
          <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            <i className="fas fa-eye fa-sm text-white-50"></i> View All
          </a>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12">
            <OwlCarousel ref={carouselRef} className="owl-theme owl-carousel-four homepage-coupon-carousel" {...carouselOptions}>
            <div className="item">
<div className="custom-card bg-white shadow-sm h-100 stor-card">
<div className="custom-card-image">
<div className="member-plan"><span className="badge badge-warning">Gold Member</span></div>
<a href="#">
<img className="img-fluid item-img" src="assets\Landing\images\Landing\Topstore\07.jpg"/>
</a>
<div className="shape shape-bottom shape-fluid-x svg-shim text-white">
<svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z" fill="currentColor"></path>
</svg>
</div>
<div className="store-star"><span className="badge badge-success"><i className="icofont-star"></i> 3.1</span></div>
</div>
<div className="p-3">
<div className="custom-card-body">
<h6 className="mb-0"><a className="text-gray-900" href="#">Mithra Furnitures</a></h6>
<p className="text-gray-500 mb-2">Dindigul, Tamil Nadu</p>
<p className="text-gray-500 mb-0"><span className="text-gray-900">Furniture store</span>
</p>
</div>
</div>
<div className="p-3 border-top">
<div className="custom-card-badge">
<span className="badge badge-danger"><i className="icofont-sale-discount"></i>
OFFER</span> Flat 50% on all Stores
</div>
</div>
</div>
</div>
           
<div className="item">
<div className="custom-card bg-white shadow-sm h-100 stor-card">
<div className="custom-card-image">
<div className="member-plan"><span className="badge badge-warning">Gold Member</span></div>
<a href="#">
<img className="img-fluid item-img" src="assets\Landing\images\Landing\Topstore\09.jpg"/>
</a>
<div className="shape shape-bottom shape-fluid-x svg-shim text-white">
<svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z" fill="currentColor"></path>
</svg>
</div>
<div className="store-star"><span className="badge badge-success"><i className="icofont-star"></i> 3.1</span></div>
</div>
<div className="p-3">
<div className="custom-card-body">
<h6 className="mb-0"><a className="text-gray-900" href="#">Rasi Furniture</a></h6>
<p className="text-gray-500 mb-2">Dindigul, Tamil Nadu</p>
<p className="text-gray-500 mb-0"><span className="text-gray-900">Furniture store</span>
</p>
</div>
</div>
<div className="p-3 border-top">
<div className="custom-card-badge">
<span className="badge badge-danger"><i className="icofont-sale-discount"></i>
OFFER</span> Flat 50% on all Stores
</div>
</div>
</div>
</div>

<div className="item">
<div className="custom-card bg-white shadow-sm h-100 stor-card">
<div className="custom-card-image">
<a href="#">
<img className="img-fluid item-img" src="assets\Landing\images\Landing\Topstore\02.png"/>
</a>
<div className="shape shape-bottom shape-fluid-x svg-shim text-white">
<svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z" fill="currentColor"></path>
</svg>
</div>
<div className="store-star"><span className="badge badge-success"><i className="icofont-star"></i> 3.1</span></div>
</div>
<div className="p-3">
<div className="custom-card-body">
<h6 className="mb-0"><a className="text-gray-900" href="#">Chennai Furniture</a></h6>
<p className="text-gray-500 mb-2">Dindigul, Tamil Nadu</p>
<p className="text-gray-500 mb-0"><span className="text-warning"><i className="icofont-clock-time"></i>Furniture store</span></p>
</div>
</div>
<div className="p-3 border-top">
<div className="custom-card-badge">
<span className="badge badge-danger"><i className="icofont-sale-discount"></i>
OFFER</span> Flat 50% on all Stores
</div>
</div>
</div>
</div>
<div className="item">
<div className="custom-card bg-white shadow-sm h-100 stor-card">
<div className="custom-card-image">
<div className="member-plan"><span className="badge badge-info">Silver Member</span></div>
<a href="#">
<img className="img-fluid item-img" src="assets\Landing\images\Landing\Topstore\08.jpg"/>
</a>
<div className="shape shape-bottom shape-fluid-x svg-shim text-white">
<svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z" fill="currentColor"></path>
</svg>
</div>
<div className="store-star"><span className="badge badge-success"><i className="icofont-star"></i> 3.1</span></div>
</div>
<div className="p-3">
<div className="custom-card-body">
<h6 className="mb-0"><a className="text-gray-900" href="#">Royaloak Furniture</a></h6>
<p className="text-gray-500 mb-2">Dindigul, Tamil Nadu</p>
<p className="text-gray-500 mb-0"><span className="text-gray-900">Furniture store</span>
</p>
</div>
</div>
<div className="p-3 border-top">
<div className="custom-card-badge">
<span className="badge badge-danger"><i className="icofont-sale-discount"></i>
OFFER</span> Flat 50% on all Stores
</div>
</div>
</div>
</div>
<div className="item">
<div className="custom-card bg-white shadow-sm h-100 stor-card">
<div className="custom-card-image">
<a href="#">
<img className="img-fluid item-img" src="assets\Landing\images\Landing\Topstore\06.jpg"/>
</a>
<div className="shape shape-bottom shape-fluid-x svg-shim text-white">
<svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0V480H2880V0H2160Z" fill="currentColor"></path>
</svg>
</div>
<div className="store-star"><span className="badge badge-success"><i className="icofont-star"></i> 3.1</span></div>
</div>
<div className="p-3">
<div className="custom-card-body">
<h6 className="mb-0"><a className="text-gray-900" href="#">Damro Furniture</a></h6>
<p className="text-gray-500 mb-2">Dindigul, Tamil Nadu</p>
<p className="text-gray-500 mb-0"><span className="text-warning"><i className="icofont-clock-time"></i> Furniture store</span></p>
</div>
</div>
<div className="p-3 border-top">
<div className="custom-card-badge">
<span className="badge badge-info"><i className="icofont-sale-discount"></i> OFFER</span>
Flat 50% on all Stores
</div>
</div>
</div>
</div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>


    {/* top - offers footer */}


{/* 
<!-- Add --> */}
<section className="section-padding homepage-view-offers">
<div className="container">
<div className="d-sm-flex align-items-center justify-content-between mb-4">
<h1 className="h5 mb-0 text-gray-900">Top Offers</h1>
<a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-eye fa-sm text-white-50"></i> View All</a>
</div>
<div className="row">
<div className="col-xl-3 col-sm-6">
<div className="custom-card shadow-sm h-100">
<div className="custom-card-image">
<a href="#">
 {/* <img className="img-fluid item-img" src="assets/Landing/images/custom-card/1.png">  */}
<div><iframe src="https://d1csarkz8obe9u.cloudfront.net/index.php/posterbuilder/view/ed34ce064900589fd0a9bcae297a67c4/1"style={{height: '180px', width:'100%', border:'none'}}></iframe></div>
</a>
<div className="button-g-btn button-g-btn-up">
<img className="img-fluid" src="assets/Landing/images/brand/1.png"/>
<span>MakeMyTrip</span>
</div>
</div>
<div className="p-3 pt-4">
<div className="custom-card-body">
<h6 className="mb-3"><a className="text-gray-900" href="#">Get Flat 30% OFF on Payment Via RBL
Bank</a></h6>
<p className="text-gray-500"><i className="icofont-clock-time"></i> Ends in 18 days</p>
</div>
<div className="custom-card-footer d-flex align-items-center">
<span className="text-danger"><i className="icofont-sale-discount"></i> 50 % OFF</span><a className="btn btn-sm btn-white ml-auto" href="#">Get Offer</a>
</div>
</div>
</div>
</div>
<div className="col-xl-3 col-sm-6">
<div className="custom-card shadow-sm h-100">
<div className="custom-card-image">
<a href="#">
<div><iframe src="https://d1csarkz8obe9u.cloudfront.net/index.php/posterbuilder/view/65fe04b9ce7be9c74a062cc4fe61d887/1" style={{height: '180px', width:'100%', border:'none'}}></iframe></div>
</a>
<div className="button-g-btn button-g-btn-up">
<img className="img-fluid" src="assets/Landing/images/brand/2.png"/>
<span>Dominos</span>
</div>
</div>
<div className="p-3 pt-4">
<div className="custom-card-body">
<h6 className="mb-3"><a className="text-gray-900" href="#">Special Offer: Get Up to 50% Off On
Web Hosting
</a>
</h6>
<p className="text-gray-500"><i className="icofont-clock-time"></i> Ends in 18 days</p>
</div>
<div className="custom-card-footer d-flex align-items-center">
<span className="text-danger"><i className="icofont-sale-discount"></i> 50 % OFF</span><a className="btn btn-sm btn-white ml-auto" href="#">Get Offer</a>
</div>
</div>
</div>
</div>
<div className="col-xl-3 col-sm-6">
<div className="custom-card shadow-sm bg-white h-100">
<div className="custom-card-image">
<a href="#">
<div><iframe src="https://d1csarkz8obe9u.cloudfront.net/index.php/posterbuilder/view/a3a3e9767babcfec1d24fd4c7396282b/1"style={{height: '180px', width:'100%', border:'none'}}></iframe></div>
</a>
<div className="button-g-btn button-g-btn-up">
<img className="img-fluid" src="assets/Landing/images/brand/3.png"/>
<span>Amazon</span>
</div>
</div>
<div className="p-3 pt-4">
<div className="custom-card-body">
<h6 className="mb-3"><a className="text-gray-900" href="#">Get Flat 30% OFF on Payment Via RBL
Bank</a></h6>
<p className="text-gray-500"><i className="icofont-clock-time"></i> Ends in 18 days</p>
</div>
<div className="custom-card-footer d-flex align-items-center">
<span className="text-danger"><i className="icofont-sale-discount"></i> 50 % OFF</span><a className="btn btn-sm btn-white ml-auto" href="#">Get Offer</a>
</div>
</div>
</div>
</div>
<div className="col-xl-3 col-sm-6">
<div className="custom-card shadow-sm h-100">
<div className="custom-card-image">
<a href="#">
<div><iframe src="https://d1csarkz8obe9u.cloudfront.net/index.php/posterbuilder/view/5fe9d3b7b13866ec7f734a16c41b097d/1" style={{height: '180px', width:'100%', border:'none'}}></iframe></div>
</a>
<div className="button-g-btn button-g-btn-up">
<img className="img-fluid" src="assets/Landing/images/brand/4.png"/>
<span>Myntra</span>
</div>
</div>
<div className="p-3 pt-4">
<div className="custom-card-body">
<h6 className="mb-3"><a className="text-gray-900" href="#">Special Offer: Get Up to 50% Off On
Web Hosting
</a>
</h6>
<p className="text-gray-500"><i className="icofont-clock-time"></i> Ends in 18 days</p>
</div>
<div className="custom-card-footer d-flex align-items-center">
<span className="text-danger"><i className="icofont-sale-discount"></i> 50 % OFF</span><a className="btn btn-sm btn-white ml-auto" href="#">Get Offer</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
            
        </>
    );
}

export default LandingBody;
