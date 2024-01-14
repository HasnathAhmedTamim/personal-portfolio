import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <div className="lg:px-12 px-4 my-32 bg-bgShade py-32">
      <div className="text-blue-900">
        <p className="text-xl font-semibold mb-5">Clients FeedBack </p>
        <h2 className="md:text-5xl text-4xl font-bold mb-5">
          Customer Testimonials
        </h2>
      </div>

      {/* swiper */}
      <ReviewCard></ReviewCard>
    </div>
  );
};

export default Reviews;
