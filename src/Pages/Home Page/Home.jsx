// import PropTypes from 'prop-types';

import Banner from "./Banner";
import Category from "./Category";
import NewsLetter from "./NewsLetter";
import Stats from "./Stats";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Stats/>
            <Testimonials/>
            <WhyChooseUs/>
            <Category/>
            <NewsLetter/>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;