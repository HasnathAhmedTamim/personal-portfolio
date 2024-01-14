// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// create ary  obj reviews
const reviews = [
  {
    id: 1,
    name: "Monim Hossain",
    company: "Microsoft",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
    photo: "/src/assets/Avatar4.jpg",
  },
  {
    id: 2,
    name: "Limon Hassan",
    company: "AWS",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
    photo: "/src/assets/Avatar5.jpg",
  },
  {
    id: 3,
    name: "Sagor Hossain",
    company: "Google",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
    photo: "/src/assets/Avatar6.jpg",
  },
  {
    id: 4,
    name: "Dianne Russell",
    company: "Starbucks",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
    photo: "/src/assets/Avatar1.png",
  },
  {
    id: 5,
    name: "Kristin Watson",
    company: "Louis Vuitton",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
    photo: "/src/assets/Avatar2.png",
  },
  {
    id: 6,
    name: "Kathryn Murphy",
    company: "McDonald's",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
    photo: "/src/assets/Avatar3.png",
  },
];

// import required modules
// import { Pagination } from "swiper/modules";

const ReviewCard = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      className="mySwiper"
    >
      {reviews.map((review) => (
        <SwiperSlide
          key={review.id}
          className="border border-[#006B6A] p-8 rounded"
        >
          <div>
            <img src="/src/assets/starts.png" alt="" className="h-4" />
            <p className="my-5">{review.comment}</p>
            <div className="flex gap-4 items-center">
              <img src={review.photo} alt="" className="h-10" />
              <div>
                <p>{review.name}</p>
                <p className="text-sm">{review.company}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewCard;
