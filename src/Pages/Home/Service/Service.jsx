import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services,setServices] = useState([])

  useEffect(() => {
    const loadData = async() => {
      const res = await fetch('/public/services.json')
      const data = await res.json()
      setServices(data)
    }
    loadData()
  },[])

  console.log(services)
  return (
    <div className="mt-4">
      <div className="text-center space-y-2 mb-5">
        <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
        <h2 className="text-5xl">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      
    </div>
  );
};

export default Service;
