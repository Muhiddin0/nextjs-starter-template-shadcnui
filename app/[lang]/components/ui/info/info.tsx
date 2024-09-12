import { Building2, Flame, Network } from "lucide-react";

const infoItems = [
  {
    icon: <Building2 className="h-12 w-12 text-emerald-500" />,
    text: "Dasturlash, dizayn va marketing kabi zamonaviy kasblar o'rgatiladigan markaz.",
  },
  {
    icon: <Flame className="h-12 w-12 text-emerald-500" />,
    text: "Zamonaviy kasblar yordamida insonlar hayotini yaxshilovchi va kelajakka bo'lgan ishonchni mustahkamlovchi maskan.",
  },
  {
    icon: <Network className="h-12 w-12 text-emerald-500" />,
    text: "Bir vaqtning o'zida 2500 dan ortiq o'quvchilar va 350 dan ortiq katta jamoani bir maskanga yig'a olgan ta'lim va innovatsiya markazi.",
  },
];

export default function CompanyInfo() {
  return (
    <section id="about" className="container mx-auto px-4 py-16">
      <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
        "Najot Ta'lim" bu -
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {infoItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-emerald-100 p-4">
              {item.icon}
            </div>
            <p className="text-sm text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
