import home1 from '../img/home1.png';
import {StyledBasicLayout,StyledDescription,StyledImage,StyledHide} from '../styles.js';

const AboutSection = () =>{
    return(
        <StyledBasicLayout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h2>We work to make</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>
                            your <span>dreams</span> come
                        </h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>true.</h2>
                    </StyledHide>
                </div>
                <p>
                    Contact us for any Web design or UI design that you have. We provide professionals with amazing skills.
                </p>
                <button>Contact us</button>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt="tech guy"></img>
            </StyledImage>
        </StyledBasicLayout>
    )
}



export default AboutSection;