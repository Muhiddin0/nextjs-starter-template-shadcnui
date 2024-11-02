import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";

export default function LocationPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 flex flex-wrap items-center justify-between">
        <h1 className="text-2xl font-bold">Bizning manzillar</h1>
        <div className="mt-3 flex flex-wrap items-center space-x-4">
          <span className="text-sm">Filialni tanlang</span>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Chilonzor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="chilonzor">Chilonzor</SelectItem>
              <SelectItem value="other">Other Locations</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <iframe
              className="h-[400px] w-full"
              width={"100%"}
              height={"100%"}
              loading="lazy"
              src="https://yandex.com/map-widget/v1/?ll=69.203892%2C41.285765&amp;mode=search&amp;oid=94800077397&amp;ol=biz&amp;sctx=ZAAAAAgBEAAaKAoSCccpOpLLTVFAEYNorWhzrERAEhIJh%2FnyAuyjcz8RKjbmdcQhaz8iBgABAgMEBSgAOABAoZ8GSAFqAnJ1nQHNzEw9oAEAqAEAvQHbYMORwgEG1cSZlOECggIaTmFqb3QgVGEnbGltIFhhZHJhIGZpbGlhbGmKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&amp;sll=69.203892%2C41.285765&amp;sspn=0.006111%2C0.004225&amp;text=Najot%20Ta%27lim%20Xadra%20filiali&amp;utm_campaign=desktop&amp;utm_medium=search&amp;utm_source=maps&amp;z=17.75"
            ></iframe>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-xl font-semibold">Toshkent</h2>
            <img
              src="https://najottalim.uz/_next/image?url=%2Fimages%2Fchilonzor.png&w=384&q=75"
              alt="Najot Ta'lim Chilonzor Branch"
              className="mb-4 h-48 w-full rounded-lg object-cover"
            />
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="mt-1 h-5 w-5 text-gray-500" />
                <p>Chilonzor tumani Qatortol ko'chasi, 1 uy</p>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="mt-1 h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-semibold">Ish vaqti</p>
                  <p>09:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gray-500" />
                <p>+998 78 888 9888</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
