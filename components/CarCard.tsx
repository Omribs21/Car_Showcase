"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CarProps } from "@/types";
import CustomButton from "./CustomButton";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import carImage from "../public/hero.png";
import CardDetails from "./CardDetails";
interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { city_mpg, year, make, model, transmission, drive, fuel_type } = car;
  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-medium">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain ">
        <Image alt="car" src='/hero.png' fill className="object-contain" />
      </div>
      <div className="realtive flex w-full mt-2">
        <div className="flex  w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              alt="steering wheel"
              src="/steering-wheel.svg"
              width={20}
              height={20}
            />
            <p>{transmission === "a" ? "Automatic" : "Manual"}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              alt="steering wheel"
              src="/tire.svg"
              width={20}
              height={20}
            />
            <p>{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image alt="steering wheel" src="/gas.svg" width={20} height={20} />
            <p>{city_mpg}MPG</p>
          </div>
        </div>
      </div>
      <div className="w-full mt-8">
        <CustomButton
        title="View More"
        containerStyles="bg-primary-blue
             w-full py-[16px] rounded-full"
        textStyles="text-white
             text-[14px] leading-[17px] font-bold"
        rightIcon="/right-arrow.svg"
        handleClick={() => setIsOpen(true)}
      />
      </div>
      <CardDetails isOpen={isOpen} closeModal={()=>setIsOpen(false)} car={car}/>
    </div>
  );
};

export default CarCard;
