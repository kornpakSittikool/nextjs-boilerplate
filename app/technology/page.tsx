"use client";
import Image from "next/image";
import Navbar from "../components/navbar";
import { technology } from "../shared/datas/technology";

export default function Technology() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] kanit-regular text-gray-900">
      <Navbar />

      <div className="max-w-2xl mx-auto p-4 space-y-10">
        {technology.map((news, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden p-6"
          >
            {/* หัวข้อข่าว */}
            <h1
              className="kanit-bold 
             text-center 
             text-lg md:text-2xl 
             text-gray-900 
             leading-snug 
             hover:text-[#1a237e] 
             transition-colors duration-200 
             cursor-pointer 
             bg-[#9fa8da] 
             py-2.5 
             rounded-lg 
             shadow-sm 
             tracking-wide"
            >
              {news.category}
            </h1>

            {news.writerBy && (
              <h2
                className="kanit-bold 
                  text-left 
                  text-sm md:text-base 
                  text-gray-600 
                  mb-3
                  italic
                  font-bold"
              >
                Writer by {news.writerBy}
              </h2>
            )}

            {/* ภาพหลัก */}
            <div className="flex justify-center mb-4">
              <Image
                src={news.img}
                alt={news.title}
                width={news.imgWidth || 1080}
                height={news.imgHeight || 600}
                className="rounded-lg shadow-sm hover:scale-[1.02] transition-transform duration-300 w-full h-auto"
                sizes="(max-width: 768px) 100vw, 700px"
              />
            </div>

            {/* Caption */}
            <span className="kanit-light-italic text-gray-500 text-xs block mb-3">
              {news.caption}
            </span>

            {/* เนื้อหาหลัก */}
            <p className="kanit-regular text-gray-800 text-sm md:text-base mb-5 leading-relaxed whitespace-pre-line">
              {news.content}
            </p>

            {/* เนื้อหาต่อ */}
            {news.content2 && (
              <p className="kanit-regular text-gray-800 text-sm md:text-base leading-relaxed whitespace-pre-line mb-3">
                {news.content2}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
