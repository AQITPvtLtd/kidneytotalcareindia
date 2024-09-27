import React from "react";

const PublicNotice = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-md">
      <div className="text-center mb-4">
        <div className="inline-block">
          <h1 className="text-3xl font-semibold text-primary">
            Public Notice
          </h1>
          <div className="border-t-2 border-lightgreen w-full"></div>
        </div>
      </div>

      <h2 className="text-center text-lg font-medium mb-2">
        By Dr. B.L. Kapur Memorial Hospital <br />
        <span className="italic">(A unit of Lahore Hospital Society)</span>
      </h2>

      <div className="space-y-4 text-justify">
        <p>
          It has recently come to our knowledge that certain individuals
          claiming to be connected with or posing as employees or doctors of Dr.
          B.L. Kapur Memorial Hospital have approached various individuals
          attempting to solicit kidney donations in lieu of money. These
          individuals, often posing as Dr. Sunil Prakash of Dr. B.L. Kapur
          Memorial Hospital, are sending e-mails purporting to be from Dr. B.L.
          Kapur Memorial Hospital, offering huge sums of money to individuals
          for kidney donations.
        </p>

        <p>
          This is to inform the general public that these miscreants are in no
          way connected with or are employees of Dr. B.L. Kapur Memorial
          Hospital, and neither Dr. Sunil Prakash nor Dr. B.L. Kapur Memorial
          Hospital has any association with the imposters carrying out these
          illegal activities in the name of Dr. Sunil Prakash & Dr. B.L. Kapur
          Memorial Hospital. It is further informed that we have already
          approached the concerned local police regarding the illegal actions
          mentioned here.
        </p>

        <p>
          Dr. B.L. Kapur Memorial Hospital urges the general public to be
          vigilant and protect themselves from being misled by individuals
          committing these unlawful activities. In the event of being approached
          by any such individual for kidney donation in lieu of money, you are
          requested to immediately report the case to the local police
          authorities and to the Hospital.
        </p>
      </div>
    </div>
  );
};

export default PublicNotice;
