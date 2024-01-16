import electronicsImage from "../assets/images/pexels-jess-bailey-designs-788946.jpg";
import clothesImage from "../assets/images/pexels-tim-douglas-6567607.jpg";
import furnitureImage from "../assets/images/pexels-martin-péchy-1866149.jpg";
import shoesImage from "../assets/images/pexels-web-donut-19090.jpg";
import miscImage from "../assets/images/pexels-andrea-piacquadio-1050244.jpg";
import clothesIcon from "../assets/svg/clothes-14-svgrepo-com.svg";
import shoesIcon from "../assets/svg/shoes-14-svgrepo-com.svg";
import furnitureIcon from "../assets/svg/furniture-14-svgrepo-com.svg";
import miscellaneousIcon from "../assets/svg/gift-14-svgrepo-com.svg";
import electronicsIcon from "../assets/svg/photo-14-svgrepo-com.svg";

export const categories = [
  {
    name: "Clothes",
    slug: "clothes",
    carouselHeading: "Fashion Finds",
    carouselText: "Explore style essentials in our Clothes collection. 👗✨ #FashionFinds",
    carouselImage: clothesImage,
    icon: clothesIcon,
  },
  {
    name: "Electronics",
    slug: "electronics",
    carouselHeading: "Tech Revolution",
    carouselText: "Discover the latest Electronics for a connected life. 📱🔌 #TechRevolution",
    carouselImage: electronicsImage,
    icon: electronicsIcon,
  },
  {
    name: "Furniture",
    slug: "furniture",
    carouselHeading: "Home Luxuries",
    carouselText: "Transform with our Furniture collection. 🛋️🏡 #HomeLuxuries",
    carouselImage: furnitureImage,
    icon: furnitureIcon,
  },
  {
    name: "Shoes",
    slug: "shoes",
    carouselHeading: "Step in Style",
    carouselText: "Find your perfect pair in our Shoes collection. 👠👟 #StepInStyle",
    carouselImage: shoesImage,
    icon: shoesIcon,
  },
  {
    name: "Miscellaneous",
    slug: "miscellaneous",
    carouselHeading: "Hidden Gems",
    carouselText: "Explore unique finds in our Miscellaneous category. 🎁✨ #HiddenGems",
    carouselImage: miscImage,
    icon: miscellaneousIcon,
  },
];
