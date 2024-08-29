import React from 'react'


// Description: This function replicates the query section as given in the main website.
function QueryBox() {
    return (
        <>
            <div className="col-12 shadow-box bg-qna-pink pb-0 rounded-bottom-0 mx-0 mb-0 bg-orange-100">
                <div className="row p-5">
                    <div className="col-sm-6 col-9 askQuestion text-left">
                        <h2 className="fw-bold mb-1 text-black">Have a question about Tyres?</h2>
                        <p className="mt-2 text-muted mb-2">Get an answer in 24 hours from our experts.</p>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-sm-8">
                                    <p className="invalid-question text-danger-custom d-none">Please Enter Valid Question.</p>
                                    <div className="d-none question_thank">
                                        <p className="mb-0">Thankyou for asking question, we will review and provide you an expert answer.</p>
                                    </div>
                                </div>
                                <div className="col-auto px-0"></div>
                            </div>
                        </div>
                        <div className="col-12">
                            <form action="submit" target="_top" className="col-12" autoComplete="nope">
                                <input type="hidden" name="askQuestion_id" id="askQuestion_id" autoComplete="nope" />
                                <div className="row align-items-center d-flex">
                                    <div className="col-sm-10 col-12">
                                        <input placeholder="Ask or search your question" name="askQuestion_des" className="form-control scrollbar-near-moon askQuestion_des mb-2" data-capture="event" data-cat="Ask a Question" data-act="Click" data-lbl="Question Description" autoComplete="nope" spellCheck="false" id="askquestions" />
                                    </div>
                                    <div className="col-sm-auto px-0 col-12 mt-1 mt-sm-0 text-sm-start text-center">
                                        <button type="submit" className="btn theme-btn question_submit_btn py-2 my-0 border-0 d-none" data-capture="event" data-cat="Ask a Question" data-act="Click" data-lbl="Submit button">Ask</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-4 col-3 px-sm-0 d-flex align-items-center justify-center ml-auto">
                        <span className="question-banner">
                            <img className="img-fluid lazy" width="100" height="100" data-original="https://cdn.tyreplex.net/themes/moonlight/images/haveQuestion-bg.png?v=600&amp;tr=q-60" src="https://cdn.tyreplex.net/themes/moonlight/images/haveQuestion-bg.png?v=600&amp;tr=q-60" alt="Have a Question" data-pagespeed-url-hash="2334455169" />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}


// Description: This is the replicated footer frame of the website.
function FooterFrame() {
    return (
        <footer className="container root-footer p-0 m-0" style={{ minWidth: '100%' }}><div className="row mx-sm-0 bg-white pt-3">
            <div className="col-12 social-link"><div className="row">
                <div className="footer-left col-md-2 col-12 col-sm-3">
                    <img className="img-fluid footer-logo lazy" width="92" height="22" data-original="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo-mbl.png?tr=w-150,q-77&amp;v=512" src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo-mbl.png?tr=w-150,q-77&amp;v=512" title="TyrePlex" alt="TyrePlex" data-pagespeed-url-hash="2334455169" />
                    <ul className="nav social-icons">
                        <li className='m-1'>
                            <a href='https://www.facebook.com/tyreplex'>
                            <button type="button" title="Facebook" className="border-0 bg-transparent p-0">
                                <img className="img-fluid lazy" width="15" height="22" data-original="https://cdn.tyreplex.net/themes/moonlight/images/fb-icon.png?v=526&amp;tr=w-24,q-40" alt="" src="https://cdn.tyreplex.net/themes/moonlight/images/fb-icon.png?v=526&amp;tr=w-24,q-40" data-pagespeed-url-hash="2334455169" />
                            </button>
                            </a>
                        </li>
                        <li className='m-1'>
                            <a href='https://www.instagram.com/ontyreplex'>
                            <button type="button" title="Instagram" className="border-0 bg-transparent p-0">
                                <img className="img-fluid lazy" width="23" height="22" data-original="https://cdn.tyreplex.net/themes/moonlight/images/insta-icon.png?v=526&amp;tr=w-24,q-40" alt="" src="https://cdn.tyreplex.net/themes/moonlight/images/insta-icon.png?v=526&amp;tr=w-24,q-40" data-pagespeed-url-hash="2334455169" />
                            </button>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-links footer-widget footer-right col-md-8 col-12 col-sm-9 ms-md-auto ms-sm-auto">
                    <div className="row">
                        <div className="col-sm-4 col-12">
                            <ul className="flex-column mb-0">
                                <li className="nav-item">
                                    <a  data-url="//www.tyreplex.com/about-us" className="footer-link redirectonclick"> Who We Are </a>
                                </li>
                                <li className="nav-item"><a data-url="//www.tyreplex.com/dealer-details" className="footer-link redirectonclick"> Are you a Tyre Dealer? </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-12">
                            <ul className="flex-column mb-0"><li className="nav-item">
                                <a  data-url="//www.tyreplex.com/privacy-policy" className="footer-link redirectonclick"> Privacy Policy </a>
                            </li>
                                <li className="nav-item">
                                    <a  data-url="//www.tyreplex.com/terms-of-use" className="footer-link redirectonclick"> Terms of use </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-12">
                            <ul className="flex-column mb-0">
                                <li>
                                    <a href="//www.tyreplex.com/contact" title=""> Contact Us</a>
                                </li>
                                <li className="nav-item"><a data-url="//www.tyreplex.com/career" className="footer-link redirectonclick"> Career </a>
                                </li>
                                <li className="nav-item"><a data-url="//www.tyreplex.com/shipping-return-policy" className="footer-link redirectonclick"> Shipping &amp; Return Policy </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="d-sm-flex col-12 border-top py-3 align-items-center">
                <div className="text-center footer-widget copyright-text order-sm-1 order-2 col-sm-12">
                    <p className="mb-0">©2024 TyrePlex Technologies &amp; Commerce Pvt. Ltd. All Rights Reserved.</p>
                </div>
            </div>
            <div className="col-12 d-md-none d-block">
                <div className="share-group socialShare">
                    <ul className="share-dropdown">
                        <li className="d-sm-none d-flex">
                            <h2 className="fw-bold me-auto">Share this product</h2>
                            <button type="button" className="close ms-auto share-close">×</button>
                        </li
                        ><li>
                            <a data-original-title="whatsapp" target="_blank" className="btn btn-whatsapp m-0" href="https://wa.me/?l=en&amp;phone=&amp;text=SHREE%20HEMKUNT%20TYRES%20AND%20SERVICES%2C%20Tyre%20dealer%20situated%20in%20Ghaziabad%0Ahttps%3A%2F%2Fwww.tyreplex.com%2Ftyre-dealers-in-india%2Fshree-hemkunt-tyres-and-services">
                                <i className="fa fa-whatsapp">
                                </i><span className="d-sm-none ms-2">Whatsapp</span></a>
                        </li>
                        <li>
                            <a data-original-title="Facebook" target="_blank" href="https://www.facebook.com/sharer/sharer.php?_encoding=UTF8&amp;display=popup&amp;u=https%3A%2F%2Fwww.tyreplex.com%2Ftyre-dealers-in-india%2Fshree-hemkunt-tyres-and-services" className="btn btn-facebook m-0"><i className="fa fa-facebook"></i><span className="d-sm-none ms-2">Facebook</span></a>
                        </li>
                        <li>
                            <a data-original-title="twitter" target="_blank" href="https://twitter.com/intent/tweet?text=SHREE%20HEMKUNT%20TYRES%20AND%20SERVICES%2C%20Tyre%20dealer%20situated%20in%20Ghaziabad%0Ahttps%3A%2F%2Fwww.tyreplex.com%2Ftyre-dealers-in-india%2Fshree-hemkunt-tyres-and-services" className="btn btn-twitter m-0"><i className="fa fa-twitter"></i><span className="d-sm-none ms-2">Twitter</span></a>
                        </li>
                        <li>
                            <a data-original-title="copy" className="btn btn-copy m-0"><i className="fa fa-copy"></i><span className="d-sm-none ms-2">Copy</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </footer>
    )
}

const Footer = () => {
    return (
        <>
            <QueryBox />
            <FooterFrame />
        </>
    )
}

export default Footer