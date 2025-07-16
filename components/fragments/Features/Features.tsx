import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function Features() {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between gap-10 px-5">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">
              Apa itu Eventku?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance text-base">
              <p>
                Eventku adalah platform online yang menyediakan berbagai acara
                khususnya dibidang teknologi dan kami menghadirkan acara-acara
                terbaik untuk meningkatkan skill dan membangun masa depan karier
                Anda di bidang teknologi.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl">
              Siapa saja yang boleh ikut?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance text-base">
              <p>
                Acara ini terbuka untuk umum, baik pelajar, mahasiswa,
                profesional, maupun siapa pun yang tertarik dengan dunia
                teknologi.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl">
              Apakah acara ini berbayar?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance text-base">
              <p>
                Sebagian besar acara gratis, namun ada juga sesi premium yang
                memerlukan registrasi berbayar.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl">
              Bagaimana cara mendaftar?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance text-base">
              <p>
                Anda bisa mendaftar melalui halaman event kami dengan mengisi
                formulir pendaftaran dan mengikuti petunjuk selanjutnya.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="relative w-[500px] h-[600px] flex-shrink-0 rounded-tl-[100px] rounded-tr-[100px] overflow-hidden">
          <Image
            src="/images/accordion-img.jpg"
            alt="features"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
