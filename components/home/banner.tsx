export default function Banner() {
    return (
        <div id="banner" className="banner w-100 carousel slide carousel-fade" data-bs-pause="false" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner h-100">
                <div className="carousel-item active h-100">
                    <picture>
                        {/* <!-- <source media="(max-width: 500px)" srcset="./images/hero-sm.webp">
                        <source media="(max-width: 820px)" srcset="./images/hero-md.webp"> --> */}
                        <img src="/images/banner4.jpg" className="position-absolute top-0 start-0 h-100 object-cover" alt="Craanford"/>
                    </picture>
                    <div className="heroText position-absolute">
                        <div className="inner d-inline-block">
                            {/* <p className="heroText-subtitle">ESSENSTIAL ITEMS</p> */}
                            <h1 className="heroText-title">Loreum Dipsom by Dolor Sit</h1>
                            <p className="heroText-desc mb-0">Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
                            <div className="readmore"><a href="#" className="button">Shop Now</a></div>
                        </div>
                    </div>
                </div>
                {/* <div className="carousel-item active h-100">
                    <picture>
                        <img src="./images/hero-slider-01.webp" className="position-absolute top-0 start-0 h-100 object-cover" alt="Craanford"/>
                    </picture>
                    <div className="heroText position-absolute">
                        <div className="inner d-inline-block">
                            <h1 className="heroText-title">Loreum Dipsom by Dolor Sit</h1>
                            <p className="heroText-desc mb-0">Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
                            <div className="readmore"><a href="#" className="button">Shop Now</a></div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item  h-100">
                    <picture>
                        <img src="./images/hero-slider-02.webp" className="position-absolute top-0 start-0 h-100 object-cover" alt="Craanford"/>
                    </picture>
                    <div className="heroText position-absolute">
                        <div className="inner d-inline-block">
                            <p className="heroText-subtitle">ESSENSTIAL ITEMS</p>
                            <h1 className="heroText-title">Beauty Inspired by Real Life</h1>
                            <p className="heroText-desc mb-0">Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
                            <div className="readmore"><a href="#" className="button">Shop Now</a></div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item  h-100">
                    <picture>
                        <img src="./images/hero-slider-03.webp" className="position-absolute top-0 start-0 h-100 object-cover" alt="Craanford"/>
                    </picture>
                    <div className="heroText position-absolute">
                        <div className="inner d-inline-block">
                            <p className="heroText-subtitle">ESSENSTIAL ITEMS</p>
                            <h1 className="heroText-title">Beauty Inspired by Real Life</h1>
                            <p className="heroText-desc mb-0">Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
                            <div className="readmore"><a href="#" className="button">Shop Now</a></div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="scroll-indicator scrollDown">
                <div className="scroll-arrow"></div>
            </div>
        </div>
    )
}