import React from 'react'
import { Bookmark } from 'lucide-react'


export const jobs = [
  {
    id: 1,
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    brandName: "Google",
    posted: "2 days ago",
    designation: "Frontend Developer",
    jobType: "Full Time",
    level: "Junior Level",
    salary: "₹8–12 LPA",
    location: "Bangalore, India"
  },
  {
    id: 2,
    logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    brandName: "Microsoft",
    posted: "5 days ago",
    designation: "Software Engineer",
    jobType: "Full Time",
    level: "Junior Level",
    salary: "₹10–16 LPA",
    location: "Hyderabad, India"
  },
  {
    id: 3,
    logo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    brandName: "Amazon",
    posted: "1 day ago",
    designation: "Backend Developer",
    jobType: "Full Time",
    level: "Senior Level",
    salary: "₹18–25 LPA",
    location: "Bangalore, India"
  },
  {
    id: 4,
    logo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    brandName: "Netflix",
    posted: "10 days ago",
    designation: "UI/UX Designer",
    jobType: "Part Time",
    level: "Senior Level",
    salary: "₹12–18 LPA",
    location: "Remote"
  },
  {
    id: 5,
    logo: "https://www.google.com/s2/favicons?domain=infosys.com&sz=128",
    brandName: "Infosys",
    posted: "3 days ago",
    designation: "Java Developer",
    jobType: "Full Time",
    level: "Junior Level",
    salary: "₹5–8 LPA",
    location: "Pune, India"
  },
  {
    id: 6,
    logo: "https://www.google.com/s2/favicons?domain=tcs.com&sz=128",
    brandName: "TCS",
    posted: "7 days ago",
    designation: "Software Developer Intern",
    jobType: "Part Time",
    level: "Intern",
    salary: "₹20,000/month",
    location: "Noida, India"
  },
  {
    id: 7,
    logo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    brandName: "Adobe",
    posted: "4 days ago",
    designation: "React Developer",
    jobType: "Full Time",
    level: "Junior Level",
    salary: "₹9–14 LPA",
    location: "Noida, India"
  },
  {
    id: 8,
    logo: "https://www.google.com/s2/favicons?domain=spotify.com&sz=128",
    brandName: "Spotify",
    posted: "8 days ago",
    designation: "Frontend Engineer",
    jobType: "Remote",
    level: "Senior Level",
    salary: "₹20–30 LPA",
    location: "Remote"
  },
  {
    id: 9,
    logo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128",
    brandName: "IBM",
    posted: "6 days ago",
    designation: "Cloud Engineer",
    jobType: "Full Time",
    level: "Senior Level",
    salary: "₹15–22 LPA",
    location: "Bangalore, India"
  },
  {
    id: 10,
    logo: "https://www.google.com/s2/favicons?domain=flipkart.com&sz=128",
    brandName: "Flipkart",
    posted: "2 days ago",
    designation: "Software Engineer Intern",
    jobType: "Full Time",
    level: "Intern",
    salary: "₹35,000/month",
    location: "Bangalore, India"
  }
];

const card = (prop) => {
  

  return (
    
      <div className="card">

        <div className="top">
          <img src={prop.logo} alt="" />
          <button>Save <Bookmark /></button>
        </div>

        <div className="center">
          <h3>{prop.brandName} <span>{prop.posted}</span></h3>
          <h2>{prop.designation}</h2>
          <div className="tag">
            <h4>{prop.jobType}</h4>
            <h4>{prop.level}</h4>
          </div>

        </div>

        <div className="bottom">

          <div>
            <h2>{prop.salary}</h2>
            <p>{prop.location}</p>
          </div>
          <button>Apply Now</button>


        </div>
      </div>
    
  )
}

export default card