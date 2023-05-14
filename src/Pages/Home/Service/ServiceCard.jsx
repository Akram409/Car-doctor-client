import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ServiceCard = ({service}) => {
    const {img,title,price} = service
  return (
    <div className="card bg-base-100 shadow-2xl">
      <figure className="px-10 pt-10 h-1/2">
        <img  src={img} alt="Shoes" className="rounded-xl w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl text-orange-500">Price: ${price}</p>
        <div className="card-actions flex justify-between">
          <button className="btn btn-error text-white">Buy Now</button>
          <button className="btn btn-circle btn-outline btn-error "><HiOutlineArrowNarrowRight /></button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
