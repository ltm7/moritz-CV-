"use client";
import ProjectLayout from "@/components/ProjectLayout";
import { useI18n } from "@/lib/i18n-context";
import { translations, t } from "@/lib/translations";

export default function PHPProject() {
  const { locale } = useI18n();
  const tr = translations.projectPages.php;
  return (
    <ProjectLayout
      title={t(tr.title, locale)}
      subtitle={t(tr.subtitle, locale)}
      description={t(tr.description, locale)}
      tags={["PHP", "MySQL", "CSS", "Bootstrap", "E-Commerce", "CRUD"]}
      media={[
        { type: "video", src: "/videos/mechashopmoritz1.mp4", label: locale === "de" ? "MechaShop Vorstellung Teil 1" : locale === "fr" ? "Présentation MechaShop Partie 1" : "MechaShop Presentation Part 1" },
        { type: "video", src: "/videos/mechashopmoritz2.mp4", label: locale === "de" ? "MechaShop Vorstellung Teil 2" : locale === "fr" ? "Présentation MechaShop Partie 2" : "MechaShop Presentation Part 2" },
      ]}
    />
  );
}
