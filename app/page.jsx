"use client"
import MyButton from "@/components/Button";
import { Logo } from "@/public/images";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="font-poppins text-secondary-heading">

        {/* Hero Section */}
        <div className="w-full h-full">

          {/* Shades */}
          <>
            <div className="w-[180px] h-[180px] rounded-full bg-second-secondary left-0 top-1/2 -translate-y-1/2 absolute blur-[130px] " />
            <div className="w-[180px] h-[180px] rounded-full bg-secondary absolute right-0 top-1/2 -translate-y-1/2  blur-[130px]" />
          </>

          {/* Hero Image */}
          <div className="w-full lg:h-[300px] h-[350px]  flex items-center justify-center">
            <div className="lg:w-[300px] lg:h-[300px] md:w-[200px] xs:h-[200px] h-[120px] bg-gradient-to-t to-second-secondary from-secondary from-30% absolute lg:blur-[150px] blur-[80px]" />
            <Image src={Logo} className="absolute blur-[30px] sm:w-80 w-60 z-10" />
            <Image src={Logo} className="absolute blur-[30px] sm:w-80 w-60 z-10" />
            <Image src={Logo} className="absolute sm:w-80 w-60 drop-shadow-xl z-30 left-1/2 -translate-x-1/2" />
          </div>

          {/* Hero Heading */}
          <div className="w-full flex flex-col text-center items-center justify-center">
            <h1 className="lg:text-hero-heading xs:text-primary-heading text-secondary-heading uppercase font-medium sm:w-3/5 px-4 drop-shadow-md">Successfull Business people outsource Everything</h1>
            <h1 className="lg:text-hero-heading-gradient xs:text-hero-heading text-primary-heading uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-l to-second-secondary to-80% from-secondary from-30% drop-shadow-lg sm:w-3/5 px-4">Work Smart, Not Hard</h1>
            <div className="flex md:flex-row flex-col items-center justify-center gap-4 my-4">
              <MyButton text="Get Started" />
              <MyButton text="Why Us?" />
              <MyButton text="Join the VA" />
            </div>
          </div>
        </div>

        {/* About Section */}
        <div></div>
      </div>
    </main>
  )
}

