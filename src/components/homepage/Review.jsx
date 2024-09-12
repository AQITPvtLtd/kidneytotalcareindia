import React from "react";
import { MdRateReview } from "react-icons/md";

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: "Dr. Umang Rastogi",
      bgcolor: "blue",
      comment:
        "Would have given him 10/10 stars if there was an option. Dr.Sunil Prakash sir is the best nephrologist with a golden healing touch. My father has been taking CKD treatment from him since last 10 years and all is going well. To us, he is no less than god !",
    },
    {
      id: 2,
      name: "Saurabh Rai",
      bgcolor: "green",
      comment:
        "Dr Sunil Prakash sir is Highly experienced doctor. who is very polite and listens the patient carefully. He is caring and his diagnosis and treatment is excellent.",
    },
    {
      id: 3,
      name: "Mangilal Jat",
      bgcolor: "blue",
      comment:
        "My name Mangi lal Jat I live in Naples Italy in last 35 year .My successfully Kidney transplantation by Dr Sunil Parkash Ji sir in 2018 . After 6th year today in 2023 I live a normal Life. Dr Sunil Parkash Ji sir nature is very good and calm person.",
    },
  ];

  return (
    <div className="overflow-x-clip">
      <h3 className="text-center text-primary font-semibold text-lg">
        Happy Patients
      </h3>
      <h1 className="text-center text-3xl font-bold">
        Real Stories, Real Results
      </h1>
      <div className="flex justify-center mt-1">
        <div className="grid grid-cols-4 w-1/2">
          <div className="border-2 col-start-2 border-primary"></div>
          <div className="border border-lightgreen"></div>
        </div>
      </div>
      <p className="lg:mx-[200px] text-center mt-10 my-14">
        Don’t just take our word for it—read the stories and testimonials from
        our satisfied patients who have experienced firsthand the transformative
        impact of our services.
      </p>
      <div className="lg:grid grid-cols-3 gap-x-20 mx-5 relative">
        {reviews.map((r) => (
          <div key={r.id} className="relative mt-14">
            {/* Rotated green background */}
            <div
              className={`absolute inset-0 ${
                r.bgcolor === "blue" ? "bg-primary" : "bg-lightgreen"
              }  transform -z-10 -rotate-12 rounded-[20%]`}
            />
            {/* White card */}
            <div className=" bg-white p-10 shadow-lg rounded-[20%] z-10 h-[250px]">
              <div className="flex justify-center -translate-y-3/4">
                <div
                  className={`${
                    r.bgcolor === "blue" ? "bg-lightgreen" : "bg-primary"
                  } rounded-[100%] p-5`}
                >
                  <MdRateReview className="text-white" size={50} />
                </div>
              </div>
              <div className="-mt-14">
                <h1 className="text-xl text-center font-semibold mb-2 text-black">
                  {r.name}
                </h1>
                <p className="text-sm text-black">{r.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
