// File: YourComponent.jsx

import React from 'react';

const HeroSection = () => {
  return (
    // 1. Container cha với position: relative
    // Điều chỉnh chiều cao h-[600px] hoặc h-screen nếu bạn muốn nó full màn hình
    <div className="relative w-full h-[600px] overflow-hidden">

      {/* 2. Spline Viewer làm nền */}
      {/* - `absolute inset-0` để nó chiếm toàn bộ không gian của thẻ cha.
          - `z-0` để nó nằm ở lớp dưới cùng. */}
      <div className="absolute inset-0 z-0">
        <spline-viewer url="https://prod.spline.design/gEbaEI5iEywCS3m9/scene.splinecode"></spline-viewer>
      </div>

      {/* 3. Nội dung đè lên trên */}
      {/* - `relative z-10` để đảm bảo nó nằm trên lớp z-0.
          - `flex` và các class khác để căn giữa nội dung.
          - `text-white` để chữ có màu tương phản với nền. */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">
          Framer Designer & Developer
        </h1>
        <p className="max-w-xl mb-8 animate-fade-in-up">
          I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition-colors">
            Contact me
          </button>
          <button className="border border-white text-white font-semibold py-2 px-6 rounded-lg hover:bg-white hover:text-black transition-colors">
            Download CV
          </button>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;