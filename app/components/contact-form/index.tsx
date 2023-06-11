'use client'

import { HiArrowNarrowRight } from "react-icons/hi"
import { Button } from "../button"
import { SectionTitle } from "../section-title"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const contactFormSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    message: z.string().min(1).max(500),
})

type contactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
    const { handleSubmit, register } = useForm<contactFormData>({
        resolver: zodResolver(contactFormSchema)
        });
    const onSubmit = (data: contactFormData) => {
    };

    return (
    <section id="contact" className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
        subtitle="contact"
        title="Let's work together"
        className="items-center text-center"
        />

        <form
        className="mt-12 w-full flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
        >
          <input
          placeholder="Name"
          className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          {...register('name')}
          />
          <input
          placeholder="Email"
          className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          {...register('email')}
          />
          <textarea
          placeholder="Message"
          className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          maxLength={500}
          {...register('message')}
          />

          <Button className="w-max mx-auto shadow-button mt-6">
            Send message
            <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
    )
}
