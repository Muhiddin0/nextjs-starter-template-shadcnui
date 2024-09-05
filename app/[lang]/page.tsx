"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowUpZA,
  Check,
  ChevronsUpDown,
  ClipboardCopy,
  Copy,
  Languages,
  Monitor,
  MonitorSmartphone,
  MoonStar,
  PlugZap,
  Sun,
  SunMoon,
} from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import { copyClipBoard } from "@/lib/clipboard";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

interface Props {
  params: {
    lang: string;
  };
}

export default function HomePage({ params: { lang } }: Props) {
  const route = useRouter();
  const { toast } = useToast();
  const { setTheme } = useTheme();

  const t = useTranslations("HomePage");

  const languages = [
    { label: "O'zbekcha", value: "uz" },
    { label: "English", value: "en" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
    { label: "Spanish", value: "es" },
    { label: "Portuguese", value: "pt" },
    { label: "Russian", value: "ru" },
    { label: "Japanese", value: "ja" },
    { label: "Korean", value: "ko" },
    { label: "Chinese", value: "zh" },
  ] as const;

  async function handleCopy(text: string) {
    const res = await copyClipBoard({
      text: text,
    });

    const date = new Date().toLocaleString();

    if (res.text?.status) {
      toast({
        title: res.text?.message,
        description: date,
        action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
      });
    } else {
      toast({
        title: res.text?.message,
        description: date,
        action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
      });
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="mb-4 text-3xl font-bold">{t("title")}</h2>
      <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
        {t("description")}
      </p>
      <div className="mx-auto mb-12 h-1 w-16 bg-primary"></div>

      <div className="my-5 flex flex-wrap items-center justify-center gap-2">
        {/* npm */}
        <Button
          className="flex gap-2"
          onClick={() =>
            handleCopy(
              "npx create-next-app@latest --example https://github.com/Muhiddin0/nextjs-starter-template-shadcnui.git",
            )
          }
        >
          <Copy size={15} />
          npm
        </Button>

        {/* yarn */}
        <Button
          className="flex gap-2"
          onClick={() =>
            handleCopy(
              "yarn create next-app --example https://github.com/Muhiddin0/nextjs-starter-template-shadcnui.git",
            )
          }
        >
          <Copy size={15} />
          yarn
        </Button>

        {/* pnpm */}
        <Button
          className="flex gap-2"
          onClick={() =>
            handleCopy(
              "pnpm create next-app --example https://github.com/Muhiddin0/nextjs-starter-template-shadcnui.git",
            )
          }
        >
          <Copy size={15} />
          pnpm
        </Button>
      </div>

      <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 p-3">
              <Languages />
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              {t("moduls.lang.title")}
            </h3>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-[200px] justify-between",
                    !lang && "text-muted-foreground",
                  )}
                >
                  {lang
                    ? languages.find((language) => language.value === lang)
                        ?.label
                    : "Select language"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="max-w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search language..." />
                  <CommandList>
                    <CommandEmpty>No language found.</CommandEmpty>
                    <CommandGroup>
                      {languages.map((language) => (
                        <CommandItem
                          value={language.label}
                          key={language.value}
                          onSelect={() => {
                            route.push(language.value);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              language.value === lang
                                ? "opacity-100"
                                : "opacity-0",
                            )}
                          />
                          {language.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <p className="my-4 text-sm text-muted-foreground">
              {t("moduls.lang.description")}
            </p>
            <Link href={"#"} className="text-primary">
              Learn More →
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 p-3">
              <SunMoon />
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              {t("moduls.theme.title")}
            </h3>

            <Tabs defaultValue="system" className="w-[400px]">
              <TabsList>
                <TabsTrigger onClick={() => setTheme("system")} value="system">
                  <Monitor size={18} />
                </TabsTrigger>
                <TabsTrigger onClick={() => setTheme("light")} value="light">
                  <Sun size={18} />
                </TabsTrigger>
                <TabsTrigger onClick={() => setTheme("dark")} value="dark">
                  <MoonStar size={18} />
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <p className="my-4 text-sm text-muted-foreground">
              {t("moduls.theme.description")}
            </p>
            <Button variant="link" className="text-primary">
              Learn More →
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 p-3">
              <MonitorSmartphone />
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              {t("moduls.screen.title")}
            </h3>

            <div className="flex items-center justify-center">
              <div
                className={cn(
                  "flex gap-2 rounded-lg bg-black p-3 text-sm text-white",
                )}
              >
                <span>screen:</span>
                <span className="block sm:hidden">full</span>
                <span className="hidden sm:block md:hidden">sm</span>
                <span className="hidden md:block lg:hidden">md</span>
                <span className="hidden lg:block xl:hidden">lg</span>
                <span className="hidden xl:block 2xl:hidden">xl</span>
                <span className="hidden 2xl:block">2xl</span>
              </div>
            </div>

            <p className="my-4 text-sm text-muted-foreground">
              {t("moduls.screen.description")}
            </p>
            <Button variant="link" className="text-primary">
              Learn More →
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 p-3">
              <ArrowUpZA />
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              {t("moduls.class.title")}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              {t("moduls.class.description")}
            </p>
            <Button variant="link" className="text-primary">
              Learn More →
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 p-3">
              <ClipboardCopy />
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              {t("moduls.copy.title")}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              {t("moduls.copy.description")}
            </p>
            <Button variant="link" className="text-primary">
              Learn More →
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 p-3">
              <PlugZap />
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              {t("moduls.api.title")}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              {t("moduls.api.description")}
            </p>
            <Button variant="link" className="text-primary">
              Learn More →
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
