"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { form } from "@/services/user";
import { ClipLoader } from "react-spinners";

const Contact = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
    MedicalReport: null,
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        Swal.fire({
          icon: "warning",
          title: "File Too Large",
          text: "Please upload a file smaller than 10MB.",
        });
        e.target.value = "";
        return;
      }
      setformData({ ...formData, MedicalReport: file })
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Corrected typo here
    setLoading(true);
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("message", formData.message);

    if (formData.MedicalReport) {
      formDataToSend.append("MedicalReport", formData.MedicalReport);
    }

    try {
      const response = await form(formDataToSend);
      if (response.success) {
        Swal.fire({
          title: "Form Submitted Successfully",
          text: "You clicked the Button!",
          icon: "success",
        });
        setformData({
          name: "",
          email: "",
          phone: "",
          location: "",
          message: "",
          MedicalReport: null,
        });
        router.push("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to submit the form. Please check your network and try again.",
      });
    } finally {
      setLoading(false)
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
        If you are looking for kidney treatment in India, you&apos;ve come to
        the right place. Dr. Sunil Prakash is a leading nephrologist, providing
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
                htmlFor="location"
                className="block text-md font-medium mb-2 text-primary"
              >
                Location
              </label>
              <input
                type="location"
                id="location"
                name="location"
                placeholder="Enter Your Current location"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-md font-medium mb-2 text-primary"
              >
                Write Problem English / Hindi
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Describe Your Health Problem"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-6">
              <label
                htmlFor="MedicalReport"
                className="block text-md font-medium mb-2 text-primary"
              >
                Upload Medical Report (Optional)
              </label>
              <input
                type="file"
                id="MedicalReport"
                name="MedicalReport"
                accept=".pdf, .doc, .docx, .xls, .xlsx, .txt, .jpg, .png, .jpeg, .avif"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleFileChange}
              />
            </div>

            <div>
              {loading ? (<div className="flex justify-center items-center w-full h-full bg-gray-500 bg-opacity-50 rounded-md fixed top-0 left-0 z-50">
                <ClipLoader width="60" height="60" color="#092644" className="animate-spin" />
              </div>) : (<button
                type="submit"
                className="w-full text-white bg-primary py-3 rounded-lg transition duration-500 ease-in-out transform hover:bg-white hover:text-primary hover:border-2 hover:border-primary hover:shadow-lg hover:scale-105"
              >
                Submit
              </button>)}
            </div>

          </form>
        </div>

        {/* Contact details section */}
        <div className="col-start-7 col-span-7 mt-8 lg:mt-0">
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
                <strong>BLK-Max:</strong>{" "}
                <Link href="tel:+91-11-30403040" className="text-blue-500">
                  011-30403040
                </Link>
              </li>

              <li>
                <strong>Coordinator:</strong>{" "}
                <Link href="tel:+918130698126" className="text-blue-500">
                  +91 81306 98126
                </Link>
              </li>
              <li>
                <strong>Mobile No.:</strong>{" "}
                <Link href="tel:+91-9873692675" className="text-blue-500">
                  +91 98736 92675
                </Link>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <Link
                  href="mailto:sunil.neph@gmail.com"
                  className="text-blue-500"
                >
                  sunil.neph@gmail.com
                </Link>{" "}
                /{" "}
                <Link
                  href="mailto:drsunilprakash@gmail.com"
                  className="text-blue-500"
                >
                  drsunilprakash@gmail.com
                </Link>
              </li>
              <li>
                <strong>Timing:</strong> Mon-Sat (10am-4pm)
              </li>
            </ul>
          </div>
          {/* max hospital gurgaon section */}
          <div className="mt-8 mx-2">
            <h2 className="text-2xl font-semibold mb-4 text-primary underline underline-offset-4">
              Max Hospital
            </h2>
            <ul className="text-lg space-y-4 list-disc">
              <li>Sushant Lok Phase I, Sector 43, Gurugram, Haryana 122022</li>
              <li>
                <strong>Max Hospital Gurgaon:</strong>{" "}
                <Link href="tel:0124-6623000" className="text-blue-500">
                  0124-6623000
                </Link>
              </li>
              <li>
                <strong>Timing:</strong> 12am to 4pm (Wednesday)
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
      </div >

      <div className="lg:grid grid-cols-1 mt-10">
        <div className="lg:mx-10 mx-2 rounded-md">
          <div className="w-full h-0 lg:pb-96 pb-32 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5440389688865!2d77.17695471075952!3d28.64342468348502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d029630216f1b%3A0x45ed1a192a1f0f80!2sDr%20Sunil%20Prakash%20-%20Kidney%20Specialist%20in%20Delhi%20%7C%20Top%20Nephrologist%20in%20Delhi%20%7C%20Kidney%20Dialysis%20%7C%20Kidney%20Transplant%20in%20Delhi!5e0!3m2!1sen!2sin!4v1735551021423!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full lg:h-96 rounded-2xl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Contact;
