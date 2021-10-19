import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" class="Container carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://thumbs.dreamstime.com/b/female-doctor-talking-phone-diagnostic-center-female-doctor-talking-phone-diagnostic-center-194861260.jpg" className="img-fluid d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block text-dark">
                    </div>
                </div>

                <div class="carousel-item">
                    <img src="https://whitetouchdc.com/wp-content/uploads/2017/07/cropped-slider1.jpg" class="d-block img-fluid w-100" alt="..." />

                </div>

                <div class="carousel-item">
                    <img src="https://pathologylabchemicals.com/wp-content/uploads/2019/10/s10.jpg" class="d-block img-fluid w-100" alt="..." />

                </div>


            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;