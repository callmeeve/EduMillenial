const Slider = () => {
    const toggleCarousel = (action) => {
        const { Carousel } = require("bootstrap");
        const carousel = new Carousel("#myCarousel");
        if (action === "next") {
          carousel.next();
        } else {
          carousel.prev();
        }
      };
    return (
        <>
            {""}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="lc-block">
                            <div id="myCarousel" className="carousel slide pt-5 pb-4" data-bs-ride="carousel">
                                <div className="carousel-inner px-5">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-6 col-lg-2 align-self-center">
                                                <img className="d-block w-100 px-3 mb-3" src="https://cdn.livecanvas.com/media/logos/11.png" alt />
                                            </div>
                                            <div className="col-6 col-lg-2  align-self-center">
                                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/2.png" alt />
                                            </div>
                                            <div className="col-6 col-lg-2  align-self-center">
                                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/3.png" alt />
                                            </div>
                                            <div className="col-6 col-lg-2  align-self-center">
                                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/12.png" alt />
                                            </div>
                                            <div className="col-6 col-lg-2  align-self-center">
                                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/5.png" alt />
                                            </div>
                                            <div className="col-6 col-lg-2  align-self-center">
                                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/6.png" alt />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-6 col-lg-2 align-self-center">
                                                <img className="d-block w-100 px-3 mb-3" src="https://cdn.livecanvas.com/media/logos/11.png" alt />
                                            </div>
                                            <div className="col-6 col-lg-2  align-self-center">
                                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/2.png" alt />
                                            </div>
                                            <div className="col-6 col-lg-2  align-self-center">
                                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/3.png" alt />
                                            </div>
                                            <div className="col-6 col-lg-2  align-self-center">
                                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/12.png" alt />
                                            </div>
                                            <div className="col-6 col-lg-2  align-self-center">
                                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/5.png" alt />
                                            </div>
                                            <div className="col-6 col-lg-2  align-self-center">
                                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/6.png" alt />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ol className="carousel-indicators position-relative mt-3">
                                    <li data-bs-target="#myCarousel" data-bs-slide-to={0} className="bg-dark" aria-current="true" onClick={() => toggleCarousel("prev") } />
                                    <li data-bs-target="#myCarousel" data-bs-slide-to={1} className="bg-dark" onClick={() => toggleCarousel("next")}/>
                                </ol>
                                <div className="w-100 px-3 text-center mt-4">
                                    <a className="carousel-control-prev position-relative d-inline me-4" href="#myCarousel" data-bs-slide="prev">
                                        <span className="visually-hidden">Previous</span>
                                    </a>
                                    <a className="carousel-control-next position-relative d-inline" href="#myCarousel" data-bs-slide="next">
                                        <span className="visually-hidden">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>{/* /lc-block */}
                    </div>{/* /col */}
                </div>
            </div>
        </>
    );
}

export default Slider;