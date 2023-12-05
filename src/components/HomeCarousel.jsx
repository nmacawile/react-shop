import { Carousel, Button } from "flowbite-react";
import Slide from "./Slide.jsx";
import electronicsImage from "../assets/images/pexels-jess-bailey-designs-788946.jpg";
import clothesImage from "../assets/images/pexels-tim-douglas-6567607.jpg";
import furnitureImage from "../assets/images/pexels-martin-péchy-1866149.jpg";
import shoesImage from "../assets/images/pexels-web-donut-19090.jpg";
import miscImage from "../assets/images/pexels-andrea-piacquadio-1050244.jpg";

const slides = [
  {
    heading: "Fashion Finds",
    text: "Explore style essentials in our Clothes collection. 👗✨ #FashionFinds",
    image: clothesImage,
  },
  {
    heading: "Tech Revolution",
    text: "Discover the latest Electronics for a connected life. 📱🔌 #TechRevolution",
    image: electronicsImage,
  },
  {
    heading: "Home Luxuries",
    text: "Transform with our Furniture collection. 🛋️🏡 #HomeLuxuries",
    image: furnitureImage,
  },
  {
    heading: "Step in Style",
    text: "Find your perfect pair in our Shoes collection. 👠👟 #StepInStyle",
    image: shoesImage,
  },
  {
    heading: "Hidden Gems",
    text: "Explore unique finds in our Miscellaneous category. 🎁✨ #HiddenGems",
    image: miscImage,
  },
];

export function HomeCarousel() {
  return (
    <div className="h-[28rem] sm:h-64 xl:h-80 2xl:h-96 drop-shadow-md">
      <Carousel slideInterval="5000">
        {slides.map((slide, i) => {
          const { heading, text, image } = slide;
          return (
            <Slide
              key={`slide-${i}`}
              heading={heading}
              text={text}
              image={image}
            ></Slide>
          );
        })}
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
