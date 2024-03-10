import React from "react";

export const DataComponent = () => {
  return (
    <div className="flex flex-col gap-3 max-w-[750px] mt-10 lg:mt-24">
      <h1 className="text-3xl font-semibold italic">
        Explore your <span className="text-[#0096C8]">hobby</span> or{" "}
        <span className="text-[#8064A2]">passion</span>
      </h1>
      <p className="mt-6 text-md text-pretty">
        Sign-in to interact with a community of fellow hobbyists and an
        eco-system of experts, teachers, suppliers, classes, workshops, and
        places to practice, participate or perform. Your hobby may be about
        visual or performing arts, sports, games, gardening, model making,
        cooking, indoor or outdoor activities…
      </p>
      <p className="hidden lg:block">
        If you are an expert or a seller, you can Add your Listing and promote
        yourself, your students, products, services or events. Hop on your
        hobbyhorse and enjoy the ride.
      </p>
    </div>
  );
};
