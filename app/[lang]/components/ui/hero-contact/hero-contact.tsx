"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function CourseHero() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { name, phone, agreed });
  };

  return (
    <section>
      <div className="">
        <div className="container flex w-full flex-col gap-8 p-8 md:flex-row">
          <Card className="flex-1 bg-sky-600/10">
            <CardContent className="p-6">
              <h2 className="mb-4 text-3xl font-bold">
                1 yil ichida talabgir va daromadli mutaxassis bo'ling!
              </h2>
              <p className="mb-6">
                "Najot Ta'lim"da dasturlash, dizayn va marketing yo'nalishlarini
                4 oydan 1 yilgacha bo'lgan muddatda o'rganib, bozorda talabgir
                kasb egasi bo'ling.
              </p>
            </CardContent>
          </Card>

          <Card className="flex-1">
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-bold">Bepul konsultatsiya</h2>
              <p className="mb-6 text-sm text-gray-600">
                Telefon raqamingizni yozib qoldiring, biz sizga qo'ng'iroq
                qilamiz va birorta ham savolingiz javobsiz qolmasligiga harakat
                qilamiz
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Ismingiz</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <PhoneInput
                    inputStyle={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      borderRadius: "20px",
                    }}
                    buttonStyle={{
                      border: "none",
                      background: "none",
                    }}
                    containerClass="normal-input"
                    country={"uz"}
                    onlyCountries={["uz"]}
                    onChange={(phone) => console.log(phone)}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={agreed}
                    onCheckedChange={() => setAgreed(!agreed)}
                  />
                  <Label htmlFor="terms" className="text-sm">
                    Shaxsiy ma'lumotlarni qayta ishlanishiga roziman
                  </Label>
                </div>
                <Button type="submit" className="w-full">
                  So'rov yuborish
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
