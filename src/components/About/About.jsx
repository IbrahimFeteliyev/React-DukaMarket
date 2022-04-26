import React from 'react'
import '../About/about.scss'
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';


export const About = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="row">
                    <div className="col-lg-3 col-12 col-md-6">
                        <div className="about-box d-flex align-items-center">
                            <div className="icon">
                                <HorizontalSplitIcon/>
                            </div>
                            <div className="text">
                                <h6>FREE DELIVERY</h6>
                                <p>For all orders over $120</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-12 col-md-6">
                        <div className="about-box d-flex align-items-center">
                            <div className="icon">
                                <HorizontalSplitIcon/>
                            </div>
                            <div className="text">
                                <h6>FREE DELIVERY</h6>
                                <p>For all orders over $120</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-12 col-md-6">
                        <div className="about-box d-flex align-items-center">
                            <div className="icon">
                                <HorizontalSplitIcon/>
                            </div>
                            <div className="text">
                                <h6>FREE DELIVERY</h6>
                                <p>For all orders over $120</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-12 col-md-6">
                        <div className="about-box d-flex align-items-center">
                            <div className="icon">
                                <HorizontalSplitIcon/>
                            </div>
                            <div className="text">
                                <h6>FREE DELIVERY</h6>
                                <p>For all orders over $120</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About