// components/PopularTutors.tsx
import React from 'react';
import "./style.css"

const tutors = [
  {
    name: "Robert James",
    title: "UI/UX Designer",
    classes: "56 Classes",
    rating: 4.9,
    img: "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ramakrushna M",
    title: "Data Analyst",
    classes: "62 Classes",
    rating: 4.8,
    img: "https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Selena Mathew",
    title: "Full Stack Developer",
    classes: "37 Courses",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1516195851888-6f1a981a862e?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tom Henry",
    title: "SQL, Tableau",
    classes: "42 Courses",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const PopularTutors = () => {

  return (
   
    <div className="p-6 rounded-lg mb-10 mt-20">
      <div className="flex justify-between items-center mb-4">
        <h2 style={{fontFamily: 'Inria Sans',
            fontSize: '40px',
            fontWeight: 700,
            lineHeight: '47.96px',
            textAlign: 'left',
            color: "#CBACF9",
            }} className="text-3xl  text-purple-300">Popular Tutors</h2>
        <button className="custom-button">Find A Tutor</button>
      </div>
      <h3 style={{
          fontFamily: 'Istok Web',
          fontSize: '24px',
          fontWeight: 700,
          lineHeight: '34.55px',
          textAlign: 'left',
        }}className="text-xl text-white mb-6 mt-10">Meet Our Popular Tutors</h3>
      <div className="flex flex-wrap justify-between">
        {tutors.map((tutor, index) => (
          <div key={index} className="flex flex-col items-center w-1/4 p-4">
            <img
              src={tutor.img}
              alt={tutor.name}
              className="w-24 h-24 rounded-full mb-4 border-2 border-gray-300"
            />
            <h4 className="text-white text-lg">{tutor.name}</h4>
            <p className="text-gray-400">{tutor.title}</p>
            <p className="text-gray-400">{tutor.classes}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400 mr-1">★</span>
              <span className="text-white">{tutor.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default PopularTutors;
