"use client";

import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const MySplide = () => {
  return (
    <div className="py-5">
      <Splide
        options={{
          type: "loop", // Cheksiz aylanish
          drag: "free", // Erkin surish
          focus: "center", // Markazdagi slaydga fokus
          gap: "1rem",
          perPage: 5, // Har bir sahifada 3 slayd
          autoScroll: {
            speed: 0.6, // O'tish tezligi
            pauseOnHover: true, // O'tishda kursor bilan ustiga bosganda to'xtamaslik
            pauseOnFocus: false, // Fokuslanganida to'xtamaslik
          },
          arrows: false, // O'ng va chap strelkalarni o'chirish (agar kerak bo'lmasa)
          pagination: false, // Pastki nuqtalarni o'chirish
        }}
        extensions={{ AutoScroll }}
      >
        <SplideSlide>
          <img
            className="rounded-lg"
            src="https://via.placeholder.com/300"
            alt="Slide 1"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="rounded-lg"
            src="https://via.placeholder.com/300"
            alt="Slide 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="rounded-lg"
            src="https://via.placeholder.com/300"
            alt="Slide 3"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="rounded-lg"
            src="https://via.placeholder.com/300"
            alt="Slide 4"
          />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default MySplide;
