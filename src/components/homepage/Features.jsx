import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="relative">
      <div>
        <Image
          src="/features/features.png"
          width={1000}
          height={1000}
          className="lg:h-[500px] h-[1000px] w-full object-cover"
          alt="feature"
        />
      </div>
      <div className="lg:flex items-stretch absolute inset-0 lg:p-10 p-5 gap-10">
        {/* Expertise and Experience */}
        <div className="bg-white lg:m-10 lg:p-7 p-4 rounded-xl flex-1">
          <div className="font-bold text-2xl pb-3">
            Expertise and Experience
          </div>
          <p className="leading-relaxed">
            Dr. Sunil Prakash possesses a vast amount of experience in
            diagnosing and treating various kidney conditions. He has worked in
            renowned hospitals and medical centers, both nationally and
            internationally, where he has honed his skills and gained valuable
            expertise. Dr. Prakash has been instrumental in saving numerous
            lives through his accurate diagnosis and personalized treatment
            plans.
          </p>
        </div>

        <div className="bg-white lg:m-10 mt-4 p-4 lg:p-7 rounded-xl flex-1">
          <div className="font-bold text-2xl pb-3">
            The Importance of Choosing the Right Nephrologist in Delhi
          </div>
          <p className="leading-relaxed">
            When it comes to your health, choosing the right doctor is crucial.
            Nephrological conditions can have a significant impact on your
            overall well-being, making it essential to seek care from an expert
            in the field. Dr. Sunil Prakash&apos;s vast experience and in-depth
            knowledge of nephrology make him the perfect choice for your
            kidney-related concerns. His commitment to patient care and
            individualized treatment plans ensures the best possible outcomes
            for his patients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
