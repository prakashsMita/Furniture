import React from "react"
 function Header(){
    return(
        <>
        <header className="section-header">
<section className="header-main shadow-sm bg-white">
<div className="container">
<div className="row align-items-center">
<div className="col-2 p-0 float-left m-0 ">
<a href="#" className="brand-wrap mb-0 me-1">
<img src="assets/img/Mita-img/Logo/Mita-logo.png" alt="logo" className="logo text-start h-75"/>
</a>

</div>
<div className="col-3 d-flex align-items-center m-none">
<div className="dropdown me-3">
<a className="text-dark dropdown-toggle d-flex align-items-center py-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<div><i className="feather-map-pin me-2 bg-light rounded-pill p-2 icofont-size"></i></div>
<div>
<p className="text-muted mb-0 small">Select Location</p>
Jawaddi Ludhiana...
</div>
</a>
<div className="dropdown-menu p-0 drop-loc border-0">
<div className="osahan-country">
<div className="search_location bg-primary p-3 text-end">
<div className="input-group bg-white rounded shadow-sm">
<span className="input-group-text bg-transparent border-0 rounded-0"><i className="feather-search"></i></span>
<input type="text" className="form-control bg-transparent border-0 rounded-0 px-0 shadow-none" placeholder="Enter Your Location" aria-label="Enter Your Location"/>
</div>
</div>
<div className="p-3 border-bottom">
<a href="#" className="text-decoration-none">
<p className="fw-bold text-primary m-0"><i className="feather-navigation"></i> New
York, USA</p>
</a>
</div>
<div className="filter">
<h6 className="p-3 bg-light m-0 border-bottom">Choose your country</h6>
<div className="border-bottom p-3">
<div className="form-check form-check-reverse m-0">
<input type="radio" id="customRadio1" name="location" className="form-check-input"/>
<label className="form-check-label text-start w-100" for="customRadio1">Afghanistan</label>
</div>
</div>
<div className="border-bottom p-3">
<div className="form-check form-check-reverse m-0">
<input type="radio" id="customRadio2" name="location" className="form-check-input" checked/>
<label className="form-check-label text-start w-100" for="customRadio2">India</label>
</div>
</div>
<div className="border-bottom p-3">
<div className="form-check form-check-reverse m-0">
<input type="radio" id="customRadio3" name="location" className="form-check-input"/>
<label className="form-check-label text-start w-100" for="customRadio3">USA</label>
</div>
</div>
<div className="border-bottom p-3">
<div className="form-check form-check-reverse m-0">
<input type="radio" id="customRadio4" name="location" className="form-check-input"/>
<label className="form-check-label text-start w-100" for="customRadio4">Australia</label>
</div>
</div>
<div className="border-bottom p-3">
<div className="form-check form-check-reverse m-0">
<input type="radio" id="customRadio5" name="location" className="form-check-input"/>
<label className="form-check-label text-start w-100" for="customRadio5">Japan</label>
</div>
</div>
<div className="p-3">
<div className="form-check form-check-reverse m-0">
<input type="radio" id="customRadio6" name="location" className="form-check-input"/>
<label className="form-check-label text-start w-100" for="customRadio6">China</label>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-7">
<div className="d-flex align-items-center justify-content-end pe-5">

<a href="search.html" className="widget-header me-4 text-dark">
<div className="icon d-flex align-items-center">
<i className="feather-search h6 me-2 mb-0"></i> <span>Search</span>
</div>
</a>

<a href="offers.html" className="widget-header me-4 text-white btn bg-primary m-none">
<div className="icon d-flex align-items-center">
<i className="feather-disc h6 me-2 mb-0"></i> <span>Offers</span>
</div>
</a>

<a href="login.html" className="widget-header me-4 text-dark m-none">
<div className="icon d-flex align-items-center">
<i className="feather-user h6 me-2 mb-0"></i> <span className="">Sign in</span>
</div>
</a>

<div className="dropdown me-4 m-none">
<a href="#" className="dropdown-toggle text-dark py-3 d-block" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<img alt="#" src="assets/img/user/1.jpg" className="img-fluid rounded-circle header-user me-2 header-user"/> Hi Osahan
</a>
<div className="dropdown-menu dropdown-menu-right">
<a className="dropdown-item" href="profile.html">My account</a>
<a className="dropdown-item" href="faq.html">Delivery support</a>
<a className="dropdown-item" href="contact-us.html">Contant us</a>
<a className="dropdown-item" href="terms.html">Term of use</a>
<a className="dropdown-item" href="privacy.html">Privacy policy</a>
<a className="dropdown-item" href="login.html">Logout</a>
</div>
</div>

<a href="checkout.html" className="widget-header me-4 text-dark">
<div className="icon d-flex align-items-center">
<i className="feather-shopping-cart h6 me-2 mb-0"></i> <span>Cart</span>
</div>
</a>
<a className="toggle" href="#">
<span></span>
</a>
</div>

</div>

</div>

</div>

</section>

</header>
        </>
    )
 }
 export default Header;