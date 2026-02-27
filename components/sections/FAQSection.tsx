"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ScrollAnimate from "@/components/ui/scroll-animate"

const FAQ_ITEMS = [
  {
    question: "Why is a phone call required to book?",
    answer:
      "Every head of hair is unique. A brief phone consultation allows us to understand your hair's current health, length, texture, and your desired outcome. This ensures we allocate the right amount of time, select the proper techniques, and provide fair, transparent pricing tailored specifically to you. It's the foundation of our bespoke approach to artistry.",
  },
  {
    question: "How does pricing work if it's not listed online?",
    answer:
      "We must know the length of your hair and its current health to offer fair pricing for all of our customers. Rather than charge a flat rate that may over- or under-serve you, we personalize your investment based on the exact scope of work. This means you only pay for what your hair genuinely needs. Call us at 787-964-1826 for your personalized quote.",
  },
  {
    question: "Is my hair too damaged for treatment?",
    answer:
      "With 21+ years of experience, Triny has restored countless clients from severe damage, chemical burns, thinning, and breakage. Our clinical scalp restoration and deep conditioning treatments use specially imported products designed for the most challenging cases. During your consultation, we'll honestly assess your hair's condition and create a recovery plan.",
  },
  {
    question: "How long do appointments typically take?",
    answer:
      "Appointment duration varies based on the service. A standard blowout may take 1-2 hours, while complex color work or sew-ins can take 4-6 hours. We never rush your hair. Triny takes her time with perfection because quality results that last are worth the investment of time.",
  },
  {
    question: "Do you work with all hair types and textures?",
    answer:
      "Absolutely. From 2A waves to 4C coils, relaxed to natural, Triny is trained across all textures and ethnicities. Our Dominican techniques are renowned for their versatility, and we specialize in color, blowouts, keratin treatments, braiding, locs, and much more.",
  },
  {
    question: "What is the Consentidas guarantee?",
    answer:
      "\"Consentidas\" means we spoil our customers. If your results don't align with the vision we established together, Triny provides a complimentary refinement within 14 days. Your satisfaction and hair health are non-negotiable. Your hair is her reputation.",
  },
  {
    question: "Do you accept walk-ins?",
    answer:
      "We operate primarily by appointment to ensure every client receives dedicated, unrushed attention. However, if you're nearby, give us a call at 787-964-1826 and we'll do our best to accommodate you, just like Triny has done for many grateful walk-in clients.",
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="bg-off-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        {/* Section Header */}
        <ScrollAnimate className="text-center">
          <span className="font-mono text-xs tracking-[0.2em] text-champagne uppercase">
            Common Questions
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-zinc-950 text-balance sm:text-4xl lg:text-5xl">
            Frequently Asked
          </h2>
        </ScrollAnimate>

        {/* Accordion */}
        <ScrollAnimate className="mt-10" delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={`faq-${index}`}
                value={`faq-${index}`}
                className="border-light-gray"
              >
                <AccordionTrigger className="text-left font-serif text-base font-medium text-zinc-900 hover:text-champagne hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-zinc-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollAnimate>
      </div>
    </section>
  )
}
