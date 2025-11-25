export default function Footer() {
    return (
        <>
        
<footer id="contact" className="footer-area overflow-hidden w-100">
    <div className="container-lg">
        <div className="footer-links">
            <div className="row gy-sm-5">
                <div className="col-lg-3 col-sm-6 foot-menu foot-address">
                    <div className="insideBox pe-sm-3">
                        <h6 className="smallHeading text-secondary">Registered Office</h6>
                        <p className="mb-0">Property No. 000, <br/>Rohtak, Haryana</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 foot-menu foot-address">
                    <div className="insideBox pe-sm-3">
                        <h6 className="smallHeading text-secondary">Site Office</h6>
                        <p>Plot No.-000 <br/>Rohtak, Haryana</p>
                        <p className="mb-0">RERA No. - -----</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 foot-menu foot-address">
                    <div className="insideBox pe-sm-3">
                        <h6 className="smallHeading text-secondary">Contact Us</h6>
                        <ul className="list-unstyled">
                            <li><a href="#">Email: info@rohtaktownship.com</a></li>
                            <li><a href="tel:+918800285720">Phone: +91 9XXXX XXXXX</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 foot-menu foot-address">
                    <div className="insideBox pe-sm-3">
                        <h6 className="smallHeading text-secondary">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li><a href="#formModal" data-bs-toggle="modal" data-bs-type="brochure">Download Brochure</a></li>
                            <li><a href="javascript:;" className="text-nowrap" 
                    data-bs-toggle="popover" 
                    data-bs-custom-className="custom-popover"
                    data-bs-trigger="focus" 
                    data-bs-placement="top" 
                    data-bs-title="Disclaimer" 
                    data-bs-content="*Conditions apply. All buildings, information, specification, etc. are tentative and subject to variation and modification by the company or the competent authorities sanctioning such plans. Images are for representative purpose only.">Disclaimer</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <div className="container-lg">
            <ul className="list-inline footerSocial">
                <li><a href="#" target="_blank" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fab fa-facebook-f icon-circular"></i></a></li>
                <li><a href="#" target="_blank" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i className="fab fa-instagram icon-circular"></i></a></li>
                <li><a href="#" target="_blank" data-toggle="tooltip" data-placement="bottom" title="Youtube"><i className="fab fa-youtube icon-circular"></i></a></li>
                <li><a href="#" target="_blank" data-toggle="tooltip" data-placement="bottom" title="Linkedin"><i className="fab fa-linkedin-in icon-circular"></i></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=+&text=Hi I am interested in Rohtak Township, please share the details." target="_blank" data-toggle="tooltip" data-placement="bottom" title="WhatsApp"><i className="fab fa-whatsapp icon-circular"></i></a></li>
            </ul>
            <div className="copyrights">
                <p>© Craanford 2025 | Designed &amp; Developed by: <img src="/images/ecis.png"/></p>
            </div>
        </div>
    </div>
</footer>

<div className="button-top"><i className="fa fa-chevron-up"></i></div>

<div className="modal fade bd-example-modal-lg" id="formModal">
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
            <button type="button" className="close d-flex align-items-center justify-content-center" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true" className="ion-ios-close">×</span></button>
            <div className="modal-body">
                <h5 className="mb-3 text-midsun text-primary">Want to know more about the project?</h5>
                <div className="alert py-2 small d-none rounded-0 modalstatus"></div>
                <form className="modal_form" id="modalform">
                    <div className="input-group mb-3">
                        <div className="form-floating">
                            <input type="text" name="mname" id="mname" className="form-control" placeholder="Name*"/>
                            <label htmlFor="mname">Name*</label>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <div className="form-floating">
                            <input type="email" name="memail" id="memail" className="form-control" placeholder="Email*"/>
                            <label htmlFor="memail">Email*</label>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <div className="form-floating">
                            <input type="tel" name="mmobile" id="mmobile" className="form-control" placeholder="Mobile*"/>
                            <label htmlFor="mmobile">Mobile*</label>
                        </div>
                    </div>
                    <div className="formFooter">
                        <div className="readmore mt-0">
                            <input type="hidden" name="query_nature" value="modal"/>
                            <input type="hidden" name="mpagename" value="<?= $page_title?>"/>
                            <input type="hidden" name="msource" id="msource" value=""/>
                            <button type="submit" className="button mw-100 w-100 justify-content-center" id="modalsubmit">Submit<i className="fa-solid fa-paper-plane"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
        </>
    )
}