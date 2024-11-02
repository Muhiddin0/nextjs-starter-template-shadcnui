import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Briefcase, DollarSign } from "lucide-react";

export default function Results() {
  return (
    <section id="results">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-2 text-3xl font-bold">
          "Najot Ta'lim" natijasi raqamlarda
        </h1>
        <p className="mb-8 text-gray-600">
          2018-yil oktyabr oyidan 2023-yil aprel oyigacha bo'lgan statistika
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Shu kungacha bitirgan o'quvchilar
              </CardTitle>
              <GraduationCap className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">6500+</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Shu kungacha o'quvchilarning ishga joylashishi
              </CardTitle>
              <Briefcase className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">85% - 95%</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                6 oylik tajribasi bor* bitiruvchilarning o'rtacha oyligi
              </CardTitle>
              <DollarSign className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Dasturlash</span>
                  <span className="font-bold">$321</span>
                </div>
                <div className="flex justify-between">
                  <span>Marketing</span>
                  <span className="font-bold">$301</span>
                </div>
                <div className="flex justify-between">
                  <span>Dizayn</span>
                  <span className="font-bold">$371</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          * Zamonaviy kasblarda tajriba oshgani sari oylik ham doimiy oshib
          boradi.
        </p>
      </div>
    </section>
  );
}
