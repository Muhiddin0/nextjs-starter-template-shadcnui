import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

interface Props {
  params: {
    lang: string;
  };
}

export default function HomePage({ params: { lang } }: Props) {
  const t = useTranslations("HomePage");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>{t("title")}</h1>
      {lang === "uz" ? <Link href="en">en</Link> : <Link href="uz">uz</Link>}
    </div>
  );
}
