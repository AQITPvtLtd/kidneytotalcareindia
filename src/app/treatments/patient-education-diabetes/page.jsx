import React from 'react'
import Patient from './Patient'

export const metadata = {
  title: "Understanding Diabetes – Symptoms, Causes & Treatment Options",
  description:
    "Learn everything about diabetes – its types, symptoms, causes, diagnosis & treatment options. Stay informed and manage your blood sugar levels effectively.",
  keywords: [
    "diabetes education",
    "what is diabetes",
    "type 1 and type 2 diabetes",
    "diabetes diagnosis",
    "insulin function",
    "blood sugar control",
    "diabetes treatment options",
    "symptoms of diabetes",
    "gestational diabetes",
    "diabetes management",
  ],
};

const page = () => {
  return (
    <div>
      <Patient />
    </div>
  )
}

export default page
