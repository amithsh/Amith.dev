"use client";

import React from "react";
import {
  
  EffectCoverflow,
  Pagination,
 
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

import WorkCard from "@/components/card";

const Workpage = () => {
 
  const content = [
    {
      title: "Attendence app",
      description:
        "Empowering educational efficiency, our QR Attendance and Student-Teacher Management App seamlessly integrates cutting-edge technology with intuitive design. Developed using React Native for a cross-platform experience, backed by the robust MongoDB database, and powered by Node.js, this app offers a comprehensive solution for educational institutions.",
      src: "/attendenceapp.jpg",
    },
    {
      title: "virtual noticeboard",
      description:
        "Revolutionize communication within educational institutions with our Virtual Notice Board App. This dynamic platform enables real-time announcements, ensuring that schools and colleges can effortlessly disseminate information to students, teachers, and staff members.",
      src: "/virtualboardapp.png",
    },
    {
      title: "LMS(learning management system)",
      description:
        "Elevate the educational experience with our cutting-edge Learning Management System (LMS) App, developed using Next.js, Prisma, MySQL, and a suite of other powerful libraries. This comprehensive platform seamlessly integrates advanced technologies to provide educators and students with a robust, user-friendly, and feature-rich environment",
      src: "/lmsapp.png",
    },
    {
      title: "CMS(content management system)",
      description:
        "Transform content creation and management with our advanced Content Management System (CMS) App. Crafted with Next.js, Prisma, MySQL, and a suite of other powerful libraries, this platform provides a robust and scalable solution for businesses and organizations seeking an efficient and dynamic content workflow",
      src: "/cmsapp.png",
    },
  ];
  return (
    <>
      <div className="w-screen h-screen flex flex-col gap-y-28 sm:w-screen sm:h-screen">
        <div className="w-full flex items-center  text-center justify-center  ">
          <h1 className="text-4xl font-medium text-black underline  shadow-2xl">
            My works
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center relative">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            autoplay={{
              delay: 100,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 2,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {content.map((data) => (
              <SwiperSlide className="" key={data.title}>
                <div
                  // className="flex items-center justify-center shadow-lg "
                  key={data.title}
                >
                  <WorkCard data={data} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Workpage;
