"use client";

import React, { useState } from "react";
import Accordion from "../common/Accordian";
const FAQs = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "Who is Dr. Sunil Prakash?",
      data: `Dr. Sunil Prakash is a highly skilled nephrologist based in Delhi, India. He specializes in the diagnosis and treatment of kidney-related diseases and disorders. With years of experience, Dr. Prakash has earned a reputation as one of the best nephrologists in Delhi.`,
      isOpen: true,
    },
    {
      key: 2,
      title: "What does a nephrologist do?",
      data: `A nephrologist is a medical doctor who specializes in the study, diagnosis, and treatment of kidney diseases and conditions. They are experts in managing conditions such as chronic kidney disease, kidney stones, kidney infections, and kidney failure. Nephrologists also provide care for patients who require kidney transplantation or dialysis.`,
      isOpen: false,
    },
    {
      key: 3,
      title: "What conditions does Dr. Sunil Prakash treat?",
      data: `Dr. Sunil Prakash as the best kidney specialist in Delhi treats a wide range of kidney-related conditions, including chronic kidney disease (CKD), acute kidney injury (AKI), diabetes, high blood pressure, polycystic kidney disease (PKD), glomerulonephritis, nephrotic syndrome, hypertension, kidney stones, dialysis, and renal transplantation.`,
      isOpen: false,
    },
    {
      key: 4,
      title: "How can I schedule an appointment with Dr. Sunil Prakash?",
      data: `<p>To schedule an appointment with Dr. Sunil Prakash you can contact any of the numbers:</p>
<p><strong>Max Hospital Gurgaon:</strong><u> </u><a href="tel:+919268880303"><u><span style="color: rgb(41, 105, 176);">+91 9268880303</span></u></a></p>
<p><strong>BLK-Max:</strong> <a href="tel:011 30403040"><u><span style="color: rgb(41, 105, 176);">011 30403040</span></u></a></p>
<p><strong>Coordinator:</strong> <a href="tel:+918130698126"><u><span style="color: rgb(41, 105, 176);">+91 8130698126</span></u></a></p>
<p><strong>Dr. Sunil Prakash:</strong> <a href="tel:98736 92675"><u><span style="color: rgb(41, 105, 176);">+91 98736 92675</span></u></a></p><p>Dr. Sunil Prakash also takes video consultation after the appointment is fixed.</p>`,
      isOpen: false,
    },
    {
      key: 5,
      title: "What should I expect during my first visit to Dr. Sunil Prakash?",
      data: `During your first visit, Dr. Sunil Prakash will review your medical history and conduct a comprehensive physical examination. He may also order additional diagnostic tests, such as blood work or imaging studies, to further evaluate your condition. Based on the findings, Dr. Prakash will provide an accurate diagnosis and discuss the most suitable treatment options.`,
      isOpen: false,
    },
    {
      key: 6,
      title: "Does Dr. Sunil Prakash perform kidney transplants?",
      data: `Yes, Dr. Sunil Prakash is experienced in performing kidney transplants. He provides comprehensive care for patients in need of kidney transplantation, from the evaluation and preparation stage to post-transplant follow-up. If you require a kidney transplant, Dr. Prakash can guide you through the process and ensure the best possible outcomes.`,
      isOpen: false,
    },
    {
      key: 7,
      title: "What sets Dr. Sunil Prakash apart from other nephrologists?",
      data: `Dr. Sunil Prakash stands out from other nephrologists due to his exceptional clinical skills, extensive experience, and patient-centered approach to care. He believes in personalized treatment plans tailored to each patient's unique needs. Dr. Prakash combines his expertise with compassion, ensuring that his patients receive the best possible care and achieve improved health outcomes.`,
      isOpen: false,
    },
    {
      key: 8,
      title:
        "Is Dr. Sunil Prakash affiliated with any hospitals or medical centers?",
      data: `Yes, Dr. Sunil Prakash is affiliated with BLK-Max Super Speciality Hospital - Pusa Road, Max Hospital - Gurgaon, Uma Sanjeevani Health Centre - Gurgaon.`,
      isOpen: false,
    },
    {
      key: 10,
      title: "Is Dr. Sunil Prakash covered by insurance?",
      data: `Dr. Sunil Prakash's coverage by insurance may vary depending on the specific insurance provider and policy. It is recommended to contact your insurance company directly to inquire about the coverage and any associated requirements. Dr. Prakash's clinic can also assist in providing information about insurance coverage and reimbursement options.`,
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };
  return (
    <div className="lg:mx-10 mx-3 mt-20">
      <div className="lg:mt-14 mb-7">
        <h1 className="text-3xl font-bold text-center">
          Frequently Asked Questions About Dr. Sunil Prakash, Nephrologist in
          Delhi
        </h1>
        <p className="text-center text-xl">
          Dr. Sunil Prakash is a renowned nephrologist in Delhi, India, known
          for his expertise and compassionate care. If you have questions about
          Dr. Prakash and his practice, you&apos;ve come to the right place.
        </p>
      </div>
      <div className="overflow-x-clip">
        {/* accordian */}

        <div className="lg:mx-12 my-5">
          {accordions.map((accordion) => (
            <Accordion
              key={accordion.key}
              title={accordion.title}
              data={accordion.data}
              isOpen={accordion.isOpen}
              toggleAccordion={() => toggleAccordion(accordion.key)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
