import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const courses = [
  {
    name: "Dasturlash foundation",
    duration: "5 oy",
    category: "Dasturlash",
    type: "Bootcamp",
    icon: "🟨",
  },
  {
    name: "React",
    duration: "8 oy",
    category: "Dasturlash",
    type: "Standard",
    icon: "🔵",
  },
  {
    name: "Grafik dizayn",
    duration: "7 oy",
    category: "Design",
    type: "Bootcamp",
    icon: "🟦",
  },
  {
    name: "Python",
    duration: "8 oy",
    category: "Dasturlash",
    type: "Standard",
    icon: "🐍",
  },
  {
    name: "Vue.js",
    duration: "8 oy",
    category: "Dasturlash",
    type: "Standard",
    icon: "🟩",
  },
  {
    name: "Grafik Dizayn",
    duration: "7 oy",
    category: "Design",
    type: "Standard",
    icon: "🖌️",
  },
  {
    name: "QA (Quality Assurance)",
    duration: "4 oy",
    category: "Dasturlash",
    type: "Standard",
    icon: "🧪",
  },
  {
    name: "Node.js",
    duration: "8 oy",
    category: "Dasturlash",
    type: "Standard",
    icon: "🟢",
  },
  {
    name: "Moushn grafika",
    duration: "6 oy",
    category: "Design",
    type: "Standard",
    icon: "🎬",
  },
];

export default function CourseList() {
  return (
    <div id="courses" className="container mx-auto p-4">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Kurslar</h1>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Barchasi" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Barchasi</SelectItem>
            <SelectItem value="programming">Dasturlash</SelectItem>
            <SelectItem value="design">Design</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{course.icon}</div>
                <div>
                  <h2 className="font-semibold">{course.name}</h2>
                  <p className="text-sm text-gray-500">{course.duration}</p>
                </div>
              </div>
              <div className="mt-4 flex space-x-2">
                <Badge variant="secondary">{course.category}</Badge>
                <Badge
                  variant={course.type === "Bootcamp" ? "default" : "outline"}
                >
                  {course.type}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
