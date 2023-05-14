import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="my-4">
      <div className="carousel w-full h-[600px] rounded-lg">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full object-fill" />
          <div className="absolute flex items-center h-full gap-5 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="space-y-7 pl-12 w-1/2">
              <h1 className="text-6xl font-bold text-white ">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className="text-white font-bold">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="btn btn-active btn-primary text-white">
                  Discover More
                </button>
                <button className="btn btn-outline btn-info font-bold">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide6" className="btn btn-circle btn-warning">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle btn-warning">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full object-fill" />
          <div className="absolute flex items-center h-full gap-5 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="space-y-7 pl-12 w-1/2">
              <h1 className="text-6xl font-bold text-white ">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className="text-white font-bold">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="btn btn-active btn-primary text-white">
                  Discover More
                </button>
                <button className="btn btn-outline btn-info font-bold">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle btn-warning">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle btn-warning">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full object-fill" />
          <div className="absolute flex items-center h-full gap-5 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="space-y-7 pl-12 w-1/2">
              <h1 className="text-6xl font-bold text-white ">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className="text-white font-bold">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="btn btn-active btn-primary text-white">
                  Discover More
                </button>
                <button className="btn btn-outline btn-info font-bold">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle btn-warning">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle btn-warning">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full object-fill" />
          <div className="absolute flex items-center h-full gap-5 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="space-y-7 pl-12 w-1/2">
              <h1 className="text-6xl font-bold text-white ">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className="text-white font-bold">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="btn btn-active btn-primary text-white">
                  Discover More
                </button>
                <button className="btn btn-outline btn-info font-bold">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle btn-warning">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle btn-warning">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full object-fill" />
          <div className="absolute flex items-center h-full gap-5 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="space-y-7 pl-12 w-1/2">
              <h1 className="text-6xl font-bold text-white ">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className="text-white font-bold">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="btn btn-active btn-primary text-white">
                  Discover More
                </button>
                <button className="btn btn-outline btn-info font-bold">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle btn-warning">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle btn-warning">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full object-fill" />
          <div className="absolute flex items-center h-full gap-5 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="space-y-7 pl-12 w-1/2">
              <h1 className="text-6xl font-bold text-white ">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <p className="text-white font-bold">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="btn btn-active btn-primary text-white">
                  Discover More
                </button>
                <button className="btn btn-outline btn-info font-bold">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide5" className="btn btn-circle btn-warning">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle btn-warning">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
