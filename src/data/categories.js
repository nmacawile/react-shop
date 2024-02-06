import mensClothingIcon from "../assets/svg/t-shirt-svgrepo-com.svg";
import womensClothingIcon from "../assets/svg/dress-svgrepo-com.svg";
import electronicsIcon from "../assets/svg/mobile-phone-svgrepo-com.svg";
import jeweleryIcon from "../assets/svg/gem-stone-svgrepo-com.svg";

import electronicsImage from "../assets/images/pexels-huy-phan-4225229.jpg";
import jeweleryImage from "../assets/images/pexels-the-glorious-studio-10976653.jpg";
import mensClothingImage from "../assets/images/pexels-mahmoud-abdelwahab-7083673.jpg";
import womensClothingImage from "../assets/images/pexels-polina-tankilevitch-4820226.jpg";

export const categories = [
  {
    name: "Electronics",
    slug: "electronics",
    carouselHeading: "Tech Wonderland",
    carouselText:
      "Explore cutting-edge gadgets and devices for a tech-savvy lifestyle.",
    carouselImage: electronicsImage,
    icon: electronicsIcon,
  },
  {
    name: "Jewelry",
    slug: "jewelery",
    carouselHeading: "Elegant Adornments",
    carouselText: "Discover exquisite jewelry pieces to complement your style.",
    carouselImage: jeweleryImage,
    icon: jeweleryIcon,
  },
  {
    name: "Men's Clothing",
    slug: "men's clothing",
    carouselHeading: "Dapper Styles for Men",
    carouselText:
      "Upgrade your wardrobe with the latest trends in men's fashion.",
    carouselImage: mensClothingImage,
    icon: mensClothingIcon,
  },
  {
    name: "Women's Clothing",
    slug: "women's clothing",
    carouselHeading: "Chic Fashion for Women",
    carouselText:
      "Indulge in the latest women's clothing to express your unique style.",
    carouselImage: womensClothingImage,
    icon: womensClothingIcon,
  },
];
