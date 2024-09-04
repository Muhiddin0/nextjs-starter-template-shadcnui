import { z } from "zod";

interface PicField {
  size: number;
  type: ["jpeg" | "jpg" | "png" | "webp"];
}

const PIC: PicField = {
  size: 5,
  type: ["jpeg"],
};

export const ExampleSchema = z.object({
  pic: z.any().refine((files) => {
    const file = files?.[0];
    if (file) {
      const { size, type } = file;
      return (
        size <= PIC["size"] * 1024 * 1024 &&
        PIC["type"].includes(type.split("/")[1])
      );
    }
    return true;
  }, `Max image size is ${PIC["size"]}MB.`),
  text: z
    .string()
    .min(2, {
      message: "* kamida 2ta harifan ko'p bo'lshi kerak",
    })
    .max(20, {
      message: "*ni 20ta harifdan ko'p bo'lmasligi kerak",
    }),
  number: z
    .number()
    .min(2, {
      message: "* 2dan yuqori bo'lshi kerak",
    })
    .max(20, {
      message: "* 2dan yuqori bo'lmasligi kerak",
    }),
  description: z.string().optional(),
});

export type Example = z.infer<typeof ExampleSchema>;
