import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar, FaUser, FaUserGraduate } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const CourseCard = ({ image, title, rating, totalCourses, totalInstructors }) => (
  <div className="course-card bg-blue-200 mx-6 p-3 md:p-6 rounded-lg h-[400px]">
    <img src={image} alt={title} className="course-image rounded-lg h-[250px] w-full" />
    <div className="course-details flex flex-col  justify-center items-center gap-2">
      <h2 className='text-blue-800 font-bold text-2xl pt-3'>{title}</h2>
      <div className="rating text-blue-500">
        {Array.from({ length: rating }, (_, index) => (
          <FaStar key={index} className="star-icon" />
        ))}
      </div>
      <div className="footer flex flex-row justify-between">
        <div className="left flex flex-row items-center">
        <FaUserGraduate  className='text-blue-800 text-xl'/>
          <p>Total Courses: {totalCourses}</p>
        </div>
        <div className="right flex flex-row items-center">
        <FaUser className='text-blue-800 text-xl'/>
          <p>Total Instructors: {totalInstructors}</p>
        </div>
      </div>
    </div>
  </div>
);

const Category = () => {
  // Sample data for demonstration
  const courses = [
    {
      id: 1,
      image: 'https://i.ibb.co/tBWxqXD/react-js-banner.jpg',
      title: 'React Basics',
      rating: 4,
      totalCourses: 10,
      totalInstructors: 5,
    },
    {
      id: 2,
      image: 'https://i.ibb.co/4p78g3T/web-desining-banner-img.jpg',
      title: 'Web Design',
      rating: 4,
      totalCourses: 10,
      totalInstructors: 5,
    },
    {
      id: 3,
      image: 'https://i.ibb.co/377JrVN/maxresdefault.jpg',
      title: 'MERN Stack',
      rating: 4,
      totalCourses: 10,
      totalInstructors: 5,
    },
    {
      id: 4,
      image: 'https://i.ibb.co/F56kSQb/photoshop-banner-img.jpg',
      title: 'Photoshop Basics',
      rating: 4,
      totalCourses: 10,
      totalInstructors: 5,
    },
    {
      id: 5,
      image: 'https://www.excelptp.com/wp-content/uploads/2021/05/oop-banner-img.jpg',
      title: 'Object Oriented Programming',
      rating: 4,
      totalCourses: 10,
      totalInstructors: 5,
    },
    // Add more courses as needed
  ];

  // Slick settings
  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=' my-12 px-3 md:px-12 lg:px-[100px]'>
      <h1 className="text-blue-500 text-3xl font-bold text-center pb-6">Explore Category</h1>
      <Slider {...settings}>
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </Slider>
    </div>
  );
};

export default Category;
