import './Home.scss'
import Dining from '../../assets/card-image1.png'
import Living from '../../assets/card-image2.png'
import Bedroom from '../../assets/card-image3.png'
import ProductList from '../../components/ProductList/ProductList'

const Home = () => {

    const imageList = [
        { src: Dining, width: '100px', height: '100px' },
        { src: Living, width: '150px', height: '150px' },
        { src: Bedroom, width: '120px', height: '120px' },
        { src: Living, width: '180px', height: '180px' },
        { src: Bedroom, width: '90px', height: '90px' },
        { src: Dining, width: '130px', height: '130px' },
        { src: Bedroom, width: '160px', height: '160px' },
        { src: Living, width: '110px', height: '110px' },
        { src: Dining, width: '140px', height: '140px' },
        { src: Bedroom, width: '170px', height: '170px' },
        { src: Dining, width: '200px', height: '200px' },
        { src: Living, width: '200px', height: '200px' },
        { src: Bedroom, width: '140px', height: '100px' },
        { src: Bedroom, width: '140px', height: '100px' },


    ];

    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const shuffledImages = shuffleArray(imageList);

    return (
        <div className='Home'>
            <div className="Home__block">
                <div className="Hero__block">
                    <div></div>
                    <div className='hero__card'>
                        <p>New Arrival</p>
                        <h2>Discover Our New Collection</h2>
                        <p className='hero__title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                        <button>BUY Now</button>
                    </div>
                </div>
                <div className='Hero__img-card'>
                    <h4>Browse The Range</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="card-flex">
                        <div>
                            <img src={Dining} alt="dining" />
                            <p>Dining</p>
                        </div>
                        <div>
                            <img src={Living} alt="Living" />
                            <p>Living</p>
                        </div>
                        <div>
                            <img src={Bedroom} alt="Bedroom" />
                            <p>Bedroom</p>
                        </div>
                    </div>
                </div>
                <div className="product__list-block">
                    <ProductList />
                </div>
                <div class="carouselImg__block">
                    <div class="carousel__title">
                        <h3>50+ Beautiful rooms inspiration</h3>
                        <p>Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
                        <button>Explore More</button>
                    </div>
                    <div class="carousel__img">
                        <div class="carouselImg1">
                        </div>
                        <div class="carouselImg1"></div>
                        <div class="carouselImg1"></div>
                        <div class="carouselImg1"></div>
                        <div class="carouselImg1"></div>
                    </div>
                </div>

                <div className="furniture__block">
                    <div className="fur__title">
                        <p>Share your setup with</p>
                        <h3>#FuniroFurniture</h3>
                    </div>
                    <div className="FuniroFurniture__block">
                        {shuffledImages.map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                alt=""
                                style={{ width: image.width, height: image.height }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home