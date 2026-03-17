"use client";
import ProjectLayout from "@/components/ProjectLayout";
import { useI18n } from "@/lib/i18n-context";
import { translations, t } from "@/lib/translations";

export default function FahrzeugProject() {
  const { locale } = useI18n();
  const tr = translations.projectPages.fahrzeug;
  return (
    <ProjectLayout
      title={t(tr.title, locale)}
      subtitle={t(tr.subtitle, locale)}
      description={t(tr.description, locale)}
      tags={["SolidWorks", "3D Printing", "FDM", "Prototype", "FH Dortmund", locale === "de" ? "Getriebe" : locale === "fr" ? "Engrenages" : "Gears"]}
      media={[
        { type: "image", src: "/images/explosion.png", label: locale === "de" ? "Explosionsansicht des Fahrzeugs" : locale === "fr" ? "Vue éclatée du véhicule" : "Vehicle Exploded View" },
        { type: "pdf", src: "/docs/Bedienungsanleitung_GummibandAuto_v2.pdf", label: locale === "de" ? "Bedienungsanleitung (PDF)" : locale === "fr" ? "Manuel d'utilisation (PDF)" : "User Manual (PDF)" },
        { type: "video", src: "/videos/assembla6.mp4", label: locale === "de" ? "Montage-Animation (Video)" : locale === "fr" ? "Animation d'assemblage (Vidéo)" : "Assembly Animation (Video)" },
        { type: "link", src: "https://onedrive.live.com/?id=B45775CAB147B101%21s928c85f0666943d69b5f243f6897c716&cid=B45775CAB147B101", label: locale === "de" ? "SolidWorks / eDrawings Dateien (OneDrive)" : locale === "fr" ? "Fichiers SolidWorks / eDrawings (OneDrive)" : "SolidWorks / eDrawings Files (OneDrive)" },
      ]}
    />
  );
}
