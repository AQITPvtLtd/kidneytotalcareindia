"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { form } from "@/services/user";

const Contact = () => {
  const router = useRouter();
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Corrected typo here
    const response = await form(formData);
    console.log(response);
    if (response.success) {
      Swal.fire({
        title: "Form Submitted Successfully",
        text: "You clicked the Button!",
        icon: "success",
      });
      router.push("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong",
      });
    }
  };

  return (
    <div className="p-5 lg:px-20">
      <div className="text-center mb-5">
        <div className="inline-block">
          <h1 className="text-3xl font-semibold text-primary">Contact Us</h1>
          <div className="border border-lightgreen w-full h-[2px]"></div>
        </div>
      </div>

      <p className="text-xl font-medium text-gray-700 mb-8 text-center lg:px-16">
        If you are looking for kidney treatment in India, you've come to the
        right place. Dr. Sunil Prakash is a leading nephrologist, providing
        top-notch treatment for kidney diseases and disorders. Call today for
        early diagnosis and treatment!
      </p>

      <div className="lg:grid grid-cols-12 gap-10">
        {/* Form section */}
        <div className="col-start-2 col-span-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-md font-medium mb-2 text-primary"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-md font-medium mb-2 text-primary"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter Your Phone Number"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-md font-medium mb-2 text-primary"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email Address"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-md font-medium mb-2 text-primary"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Write Your Message Here..."
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-primary py-3 rounded-lg transition duration-300 ease-in-out transform hover:bg-white hover:text-primary hover:border-2 hover:border-primary hover:shadow-lg hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact details section */}
        <div className="col-start-8 col-span-5 mt-8 lg:mt-0">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary underline underline-offset-4">
              Dr. Sunil Prakash
            </h2>
            <ul className="text-lg space-y-4 list-disc mx-3">
              <li>
                <strong>BLK Hospital (Nephrology Department):</strong> Pusa
                Road, Delhi 110005
              </li>
              <li>
                <strong>Residence:</strong> C-17, Hudco Place, Near Andrews
                Ganj, New Delhi
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <Link href="tel:+91-11-30403040" className="text-blue-500">
                  +91-11-30403040
                </Link>{" "}
                /{" "}
                <Link href="tel:+91-11-26253523" className="text-blue-500">
                  +91-11-26253523
                </Link>
              </li>
              <li>
                <strong>Mobile No.:</strong>{" "}
                <Link href="tel:+91-9873692675" className="text-blue-500">
                  +91-9873692675
                </Link>{" "}
                /{" "}
                <Link href="tel:+91-9999055675" className="text-blue-500">
                  +91-9999055675
                </Link>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <Link
                  href="mailto:sunil.neph@gmail.com"
                  className="text-blue-500"
                >
                  sunil.neph@gmail.com
                </Link>
              </li>
              <li>
                <strong>Timing:</strong> Mon-Sat (10am-4pm)
              </li>
            </ul>
          </div>

          {/* Uma Sanjivani Hospital Section */}
          <div className="mt-8 mx-2">
            <h2 className="text-2xl font-semibold mb-4 text-primary underline underline-offset-4">
              Uma Sanjivani Hospital
            </h2>
            <ul className="text-lg space-y-4 list-disc">
              <li>DLF Phase 2, Gurgaon</li>
              <li>
                <strong>Timing:</strong> 9am to 12pm (Wednesday)
              </li>
            </ul>

            <div className="mt-4">
              <h3 className="text-xl font-semibold">
                Online Payment Information
              </h3>
              <p className="text-lg mt-2">
                For online payment, please use the following details:
              </p>
              <p className="mt-2">
                Paytm: <strong>9873692675</strong>
              </p>
              <p>
                UPI/BHIM ID: <strong>9873692675@paytm</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
