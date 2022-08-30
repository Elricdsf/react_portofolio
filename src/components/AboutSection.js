import home1 from '../img/home1.png';

const AboutSection = () =>{
    return(
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>
                            your <span>dreams</span> come
                        </h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>
                    Contact us for any Web design or UI design that you have. We provide professionals with amazing skills.
                </p>
                <button>Contact us</button>
            </div>
            <div className='image'>
                <img src={home1} alt="tech guy"></img>
            </div>
        </div>
    )
}

export default AboutSection;