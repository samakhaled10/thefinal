  import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useQuery } from "react-query";
import { Circles } from "react-loader-spinner";
import Loader from "../Loader/Loader"; // Assuming you have a Loader component
import useAllCategories from "../../CustomHooks/useAllCategories";

export default function CategorySlider() {

//   function getAllCategories() {
//     return axios.get('https://ecommerce.routemisr.com/api/v1/categories');
//   }

//   const { isError, isLoading, data } = useQuery({
//     queryKey: 'allCategories',
//     queryFn: getAllCategories
//   });
const { isError, isLoading, data } = useAllCategories();

  if (isLoading) {
    return (
      <> 
        <Loader />
      </>
    );
  }

  if (isError) {
    return (
      <>
        <h2>grb b3deeen</h2>
      </>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 5,
  };

  return (
    <>
      <Slider {...settings} arrows={false}>
        {data.data.data.map((category) => (
          <div key={category._id}>
            <img className="w-full h-36" src={category.image} alt={category.name} />
            <h6 className="text-sm text-center ">{category.name}</h6>
          </div>
        ))}
      </Slider>

       
    </>
  );
}
