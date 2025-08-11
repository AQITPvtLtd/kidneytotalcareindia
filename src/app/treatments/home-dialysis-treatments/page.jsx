import React from 'react'
import HomeDialysis from './HomeDialysis'

export const metadata = {
  title: "Home Dialysis Treatments – Peritoneal Dialysis (CAPD & APD) Explained",
  description:
    "Explore home dialysis treatments including CAPD and APD. Learn how peritoneal dialysis works, its benefits, setup requirements, and how it supports independence and quality of life.",
  keywords: [
    "home dialysis treatments",
    "peritoneal dialysis",
    "CAPD dialysis",
    "APD dialysis",
    "dialysis at home",
    "automatic peritoneal dialysis",
    "continuous ambulatory peritoneal dialysis",
    "benefits of home dialysis",
    "peritoneal catheter care",
    "dialysis training at home",
  ],
};

const page = () => {
  return (
    <div>
      <HomeDialysis />
    </div>
  )
}

export default page
