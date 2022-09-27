// React Slick Carousel Settings
export const settings = {
    dots: false, //( ... )
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: false,
          dots: false,
          autoplay: false,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          autoplay: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          autoplay: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
        },
      },
    ],
  };
  