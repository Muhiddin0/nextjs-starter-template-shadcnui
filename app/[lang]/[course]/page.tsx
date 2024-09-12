import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { COURSES } from "@/data/courses";

interface Props {
  params: {
    lang: keyof typeof COURSES;
    course: keyof (typeof COURSES)[keyof typeof COURSES];
  };
}

export default function CourseDetailsPage({ params: { lang, course } }: Props) {
  const currentCourse = COURSES[lang][course];

  return (
    <div>
      <section className="relative flex h-[80vh] items-center justify-center bg-gray-900 text-white">
        <div
          style={{
            backgroundImage: `url("${currentCourse.background}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 opacity-50"
        ></div>
        <div className="relative z-10 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">BOOTCAMP</h1>
          <h2 className="text-2xl md:text-4xl">GRAFIK DIZAYN</h2>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-emerald-600">
              {currentCourse.dates.month}
            </h3>
            <p>Davomiyligi</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-emerald-600">
              {currentCourse.dates.day}
            </h3>
            <p>Haftada</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-emerald-600">
              {currentCourse.dates.hourse}
            </h3>{" "}
            <p>Dars vaqti</p>
          </div>
        </div>

        <div className="mt-12 rounded-lg border-2 border-emerald-600 p-6">
          <h3 className="mb-4 text-xl font-bold">
            Bootcamp Grafik dizayn kursi haqida
            <span className="markl">mark</span>
          </h3>
          <p>{currentCourse.about}</p>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Kursda nimalarni o'rganasiz?
          </h2>
          <div className="space-y-6">
            {currentCourse.teaches.map((item, index) => (
              <div key={index} className="rounded-lg bg-white p-4 shadow">
                <h3 className="mb-2 font-bold">{item.title}</h3>
                {item.description}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Bootcamp Grafik dizayn kursi uchun ro'yxatdan o'ting
        </h2>
        <form className="mx-auto max-w-md space-y-4">
          <input className="w-full rounded border p-2" placeholder="Ismingiz" />
          <input
            className="w-full rounded border p-2"
            placeholder="Telefon raqamingiz"
          />
          <textarea
            className="w-full rounded border p-2"
            placeholder="Xabar"
          ></textarea>
          <button className="w-full rounded bg-emerald-600 p-2 text-white hover:bg-emerald-700">
            Ro'yxatdan o'tish
          </button>
        </form>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Ko'p so'raladigan savollar
          </h2>
          <Accordion type="single" collapsible className="mx-auto max-w-2xl">
            {currentCourse.faqs.map((question, index) => (
              <AccordionItem
                value={"accordion-" + index}
                key={index}
                className="mb-4 rounded-lg bg-white px-4 text-left shadow"
              >
                <AccordionTrigger className="w-full">
                  {question.title}
                </AccordionTrigger>
                <AccordionContent>{question.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
