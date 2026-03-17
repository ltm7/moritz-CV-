"use client";
import ProjectLayout from "@/components/ProjectLayout";
import { useI18n } from "@/lib/i18n-context";
import { translations, t } from "@/lib/translations";

export default function NXProject() {
  const { locale } = useI18n();
  const tr = translations.projectPages.nx;
  return (
    <ProjectLayout
      title={t(tr.title, locale)}
      subtitle={t(tr.subtitle, locale)}
      description={t(tr.description, locale)}
      tags={["NX Siemens", "CAD", "Mechanical Design", "Technical Drawing", "Assembly"]}
      media={[
        { type: "image", src: "/nx-images/Zapfanlagekomplett.png", label: locale === "de" ? "Komplette Zapfanlage" : locale === "fr" ? "Système complet" : "Complete Tap System" },
        { type: "image", src: "/nx-images/zwischenrohrfertig.jpg", label: locale === "de" ? "Zwischenrohr" : locale === "fr" ? "Tube intermédiaire" : "Intermediate Pipe" },
        { type: "image", src: "/nx-images/Griff.jpg", label: locale === "de" ? "Griff" : locale === "fr" ? "Poignée" : "Handle" },
        { type: "image", src: "/nx-images/Tropfplatte.png", label: locale === "de" ? "Tropfplatte" : locale === "fr" ? "Bac d'égouttement" : "Drip Tray" },
      ]}
    />
  );
}
