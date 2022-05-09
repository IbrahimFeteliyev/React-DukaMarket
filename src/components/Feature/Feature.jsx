import "../Feature/feature.scss"
import StarOutlineIcon from "@mui/icons-material/StarOutline";


function Feature() {
  return (
    <div className="myslider">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-8">
            <h2>Top Featured Products</h2>
          </div>
          <div className="col-lg-4">
            <ul className="d-flex justify-content-between general">
              <li className="color">Computer</li>
              <li>Samsung</li>
              <li>HTC</li>
              <li>Nokia</li>
              <li>Cell Phones</li>
            </ul>
          </div>
          <hr />
        </div>

        <div className="d-flex">
            <div className="col-lg-6 boxes">
                <div className="row">
                    <div className="col-lg-6">
                        <img width="100%" src="https://cdn.pixabay.com/photo/2016/10/30/18/01/apple-1783882_960_720.png" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <div className="text">
                            <h6>Samsang Galaxy A70 128GB Dual-SIM</h6>
                            <span className="star">
                            <StarOutlineIcon />
                            <StarOutlineIcon />
                            <StarOutlineIcon />
                            <StarOutlineIcon />
                            <StarOutlineIcon />
                            </span> <br />
                            <span>(01 review)</span> <br />
                            <span className="number">
                                <del className="del">$307.00</del>$110
                            </span> <br /> 
                            <span className="box22">Bass and Stereo Sound.</span> <br />
                            <span className="box22">Display with 3088 x 1440 pixels resolution.</span> <br />
                            <span className="box22"> Memory, Storage & SIM: 12GB RAM, 256GB.</span> <br />
                            <span className="box22">Androi v10.0 Operating system.</span>
                            <div className="button">
                                <button>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="d-flex">
                    <div className="col-lg-6 boxes">
                        <div className="row">
                            <div className="col-lg-6">
                                <img width="100%" src="https://cdn.pixabay.com/photo/2016/10/30/18/01/apple-1783882_960_720.png" alt="" />
                            </div>
                            <div className="col-lg-6">
                                <div className="text">
                                    <h6>Epple Watch SE Gold Aluminum</h6>
                                    <span className="star">
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                    </span> <br />
                                    <span>(01 review)</span> <br />
                                    <span className="number">
                                        <del className="del">$307.00</del>$110
                                    </span> <br /> 
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 boxes">
                        <div className="row">
                            <div className="col-lg-6">
                                <img width="100%" src="https://cdn.pixabay.com/photo/2016/10/30/18/01/apple-1783882_960_720.png" alt="" />
                            </div>
                            <div className="col-lg-6">
                                <div className="text">
                                    <h6>Epple Watch SE Gold Aluminum</h6>
                                    <span className="star">
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                    </span> <br />
                                    <span>(01 review)</span> <br />
                                    <span className="number">
                                        <del className="del">$307.00</del>$110
                                    </span> <br /> 
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="col-lg-6 boxes">
                        <div className="row">
                            <div className="col-lg-6">
                                <img width="100%" src="https://cdn.pixabay.com/photo/2016/10/30/18/01/apple-1783882_960_720.png" alt="" />
                            </div>
                            <div className="col-lg-6">
                                <div className="text">
                                    <h6>Epple Watch SE Gold Aluminum</h6>
                                    <span className="star">
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                    </span> <br />
                                    <span>(01 review)</span> <br />
                                    <span className="number">
                                        <del className="del">$307.00</del>$110
                                    </span> <br /> 
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 boxes">
                        <div className="row">
                            <div className="col-lg-6">
                                <img width="100%" src="https://cdn.pixabay.com/photo/2016/10/30/18/01/apple-1783882_960_720.png" alt="" />
                            </div>
                            <div className="col-lg-6">
                                <div className="text">
                                    <h6>Epple Watch SE Gold Aluminum</h6>
                                    <span className="star">
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                    </span> <br />
                                    <span>(01 review)</span> <br />
                                    <span className="number">
                                        <del className="del">$307.00</del>$110
                                    </span> <br /> 
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;