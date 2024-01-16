import electronicsImage from "../assets/images/pexels-jess-bailey-designs-788946.jpg";
import apparelAndFashionImage from "../assets/images/pexels-tim-douglas-6567607.jpg";
import homeAndFurnitureImage from "../assets/images/pexels-martin-péchy-1866149.jpg";
import healthAndBeautyImage from "../assets/images/pexels-laryssa-suaid-4678953.jpg";
import sportsAndOutdoorsImage from "../assets/images/pexels-jd-danny-2385477.jpg";
import toysAndGamesImage from "../assets/images/pexels-pixabay-163696.jpg";
import apparelAndFashionIcon from "../assets/svg/clothes-14-svgrepo-com.svg";
import homeAndFurnitureIcon from "../assets/svg/furniture-14-svgrepo-com.svg";
import electronicsIcon from "../assets/svg/photo-14-svgrepo-com.svg";
import healthAndBeautyIcon from "../assets/svg/pharmacy-14-svgrepo-com.svg";
import toysAndGamesIcon from "../assets/svg/toys-14-svgrepo-com.svg";
import sportsAndOutdoorsIcon from "../assets/svg/bicycle-14-svgrepo-com.svg";

export const categories = [
  {
    name: "Electronics",
    slug: "electronics",
    carouselHeading: "Tech Wonderland",
    carouselText: "Explore cutting-edge gadgets and devices for a tech-savvy lifestyle.",
    carouselImage: electronicsImage,
    icon: electronicsIcon,
  },
  {
    name: "Apparel and Fashion",
    slug: "apparel-and-fashion",
    carouselHeading: "Fashion Forward",
    carouselText: "Elevate your style with trendy clothing and accessories for every occasion.",
    carouselImage: apparelAndFashionImage,
    icon: apparelAndFashionIcon,
  },
  {
    name: "Home and Furniture",
    slug: "home-and-furniture",
    carouselHeading: "Elegant Living",
    carouselText: "Transform your living space with elegant furniture and decor essentials.",
    carouselImage: homeAndFurnitureImage,
    icon: homeAndFurnitureIcon,
  },
  {
    name: "Health and Beauty",
    slug: "health-and-beauty",
    carouselHeading: "Radiant You",
    carouselText: "Embrace self-care with premium health and beauty products for a radiant you.",
    carouselImage: healthAndBeautyImage,
    icon: healthAndBeautyIcon,
  },
  {
    name: "Sports and Outdoors",
    slug: "sports-and-outdoors",
    carouselHeading: "Adventure Awaits",
    carouselText: "Fuel your passion for adventure with high-quality sports and outdoor gear.",
    carouselImage: sportsAndOutdoorsImage,
    icon: sportsAndOutdoorsIcon,
  },
  {
    name: "Toys and Games",
    slug: "toys-and-games",
    carouselHeading: "Playful Discoveries",
    carouselText: "Ignite imagination with playful toys and games for all ages. Joyful discoveries await!",
    carouselImage: toysAndGamesImage,
    icon: toysAndGamesIcon,
  },
];
