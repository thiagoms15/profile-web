import { Button } from "@/app/components/button"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb"

const MOCK_CONTACTS = [
  {
      url: 'https://github.com/thiagoms15',
      icon: <TbBrandGithub/>
  },
  {
      url: 'https://www.linkedin.com/in/thiago-marques-95600283/',
      icon: <TbBrandLinkedin/>
  }
]

export const HeroSection = () => {
    return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Hello, my name is</p>
          <h2 className="text-4xl font-medium mt-2">Thiago</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
          Graduated in Electronic Engineering at the University of Brasília (UnB) in 2013. Master in Embedded Systems and Intelligent Systems, working with a System on a Chip (SoC), in the integration of a system that uses an ARM architecture with an FPGA.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 5 }).map((_, index) => (
            <TechBadge name="C++" />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button">
              Send me a message
              <HiArrowNarrowRight size={18}
              />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
              <a
              href={contact.url}
              key={`contact-${index}`}
              target="_blank"
              className="hover:text-gray-100 transition-colors"
              >
                {contact.icon}
              </a>
              ))}
            </div>
          </div>
        </div>

        <Image
        width={420}
        height={404}
        src="/images/profile-pic.png"
        alt=" Thiago's profile photo"
        className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />

      </div>
    </section>
    )
}
