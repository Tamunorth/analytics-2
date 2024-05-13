import React from "react";

const ServiceComponent = ({ icon, name }) => {
  return (
    <div>
      <p className="flex px-4 py-2  text-slate-500">
        {icon} {name}
      </p>
    </div>
  );
};

export default ServiceComponent;
