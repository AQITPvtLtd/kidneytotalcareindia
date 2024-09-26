"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert";
const Contact = () => {
  const router = useRouter();
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSumbit = async (e) => {
    e.prevantDefault();
    const response = awaitform(formData);
    console.log(response);
    if (response.success) {
      Swal.fire({
        title: "Form Submitted Successfully",
        text: "Your clicked the Button!",
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
    <div className="max-w-5xl mx-auto py-10">
      <div className="justify-center text-center mb-5">
        <div className="inline-block">
          <h1 className="text-3xl font-semibold text-primary">Contact Us</h1>
          <div className="border border-lightgreen w-full h-[2px]"></div>
        </div>
      </div>
      <p className="text-xl font-medium text-gray-700 px-5 mb-8 text-center">
        Welcome to Dr. Sunil Prakash's website! If you are looking for kidney
        treatment in India, you've come to the right place. Dr. Sunil Prakash is
        a leading nephrologist, providing top-notch treatment for kidney
        diseases and disorders. Call today for early diagnosis and treatment!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5">
        {/* Form sumbittion */}

        <form
          className="bg-blue-400 text-gray-800 p-8 rounded-lg w-full max-w-lg overflow-hidden"
          onSubmit={handleSumbit}
        >
          <div className="mb-6">
            <label
              htmlFor="Name"
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
              className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="Phone"
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
              htmlFor="Email"
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
              htmlFor=" Date"
              className="block text-md font-medium mb-2 text-primary"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.date}
              //   onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="Message"
              className="block text-md font-medium mb-2 text-primary"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Write Your Message Here.."
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full text-white bg-primary py-3 rounded-lg transition duration-300 ease-in-out transform hover:bg-white hover:text-primary hover:border-2 hover:border-primary hover:shadow-lg hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Contact Info Section */}
        <div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary underline underline-offset-4">
              Dr. Sunil Prakash
            </h2>
            <ul className="text-lg space-y-4 list-disc">
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
          <div className="mt-4">
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
