import React from "react";
import Weblayout from "../Layout/Weblayout";
function Contact(){
    return(
        <Weblayout>
        <div className="modal fade" id="searchModal" tabindex="-1">
        <div className="modal-dialog modal-fullscreen">
            <div className="modal-content" style={{background: 'rgba(9, 30, 62, .7)'}}>
                <div className="modal-header border-0">
                    <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body d-flex align-items-center justify-content-center">
                    <div className="input-group" style={{maxWidth: '600px'}}>
                        <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword"/>
                        <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  

    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
                <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
                <h1 className="mb-0">If You Have Any Query, Feel Free To Contact Us</h1>
            </div>
            <div className="row g-5 mb-5">
                <div className="col-lg-4">
                    <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.1s">
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-phone-alt text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="mb-2">Call to ask any question</h5>
                            <h4 className="text-primary mb-0">+012 345 6789</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.4s">
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-envelope-open text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="mb-2">Email to get free quote</h5>
                            <h4 className="text-primary mb-0">info@example.com</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-map-marker-alt text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="mb-2">Visit our office</h5>
                            <h4 className="text-primary mb-0">123 Street, NY, USA</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-5">
                <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <input type="text" className="form-control border-0 bg-light px-4" placeholder="Your Name" style={{height: '55px'}}/>
                            </div>
                            <div className="col-md-6">
                                <input type="email" className="form-control border-0 bg-light px-4" placeholder="Your Email" style={{height: '55px'}}/>
                            </div>
                            <div className="col-12">
                                <input type="text" className="form-control border-0 bg-light px-4" placeholder="Subject" style={{height: '55px'}}/>
                            </div>
                            <div className="col-12">
                                <textarea className="form-control border-0 bg-light px-4 py-3" rows="4" placeholder="Message"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
                    <iframe className="position-relative rounded w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                        frameborder="0" style={{minHeight: '350px', border:'0'}} allowfullscreen="" aria-hidden="false"
                        tabindex="0"></iframe>
                </div>
            </div>
        </div>
    </div>
  
  
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5 mb-5">
            <div className="bg-white">
                <div className="owl-carousel vendor-carousel">
                    <img src="/assets/img/vendor-1.jpg" alt=""/>
                    <img src="/assets/img/vendor-2.jpg" alt=""/>
                    <img src="/assets/img/vendor-3.jpg" alt=""/>
                    <img src="/assets/img/vendor-4.jpg" alt=""/>
                    <img src="/assets/img/vendor-5.jpg" alt=""/>
                    <img src="/assets/img/vendor-6.jpg" alt=""/>
                    <img src="/assets/img/vendor-7.jpg" alt=""/>
                    <img src="/assets/img/vendor-8.jpg" alt=""/>
                    <img src="/assets/img/vendor-9.jpg" alt=""/>
                </div>
            </div>
        </div>
    </div>
        </Weblayout>
    )
}
export default Contact;