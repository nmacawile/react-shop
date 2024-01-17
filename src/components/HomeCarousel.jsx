import { Carousel, Button } from "flowbite-react";
import Slide from "./Slide.jsx";

import { categories } from "../data/categories";

export function HomeCarousel() {
  return (
    <section
      data-testid="home-carousel-component"
      className="h-[28rem] sm:h-64 xl:h-80 2xl:h-96 drop-shadow-md"
    >
      <Carousel slideInterval="5000">
        {categories.map((slide, i) => {
          const { carouselHeading, carouselText, carouselImage, slug } = slide;
          return (
            <Slide
              key={`slide-${i}`}
              heading={carouselHeading}
              text={carouselText}
              image={carouselImage}
              link={`category/${slug}`}
              testid={`${slug}-link`}
            ></Slide>
          );
        })}
      </Carousel>
    </section>
  );
}

export default HomeCarousel;
