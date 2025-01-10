import SimpleImageSlider from "react-simple-image-slider";


const images = [
    { url: "https://www.hamzastore.pk/images/banners/674d8653b1a6d.webp" },
    { url: "https://www.hamzastore.pk/images/banners/674d8653b3e61.webp" },
    { url: "https://www.hamzastore.pk/images/banners/674d8653b4213.webp" }
  ];

export default function Slider() {
    return (
        <div>
          <SimpleImageSlider
            width={896}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>
      );
}