"use client";
import ProjectLayout from "@/components/ProjectLayout";
import { useI18n } from "@/lib/i18n-context";
import { translations, t } from "@/lib/translations";

export default function Print3DProject() {
  const { locale } = useI18n();
  const tr = translations.projectPages.print3d;
  return (
    <ProjectLayout
      title={t(tr.title, locale)}
      subtitle={t(tr.subtitle, locale)}
      description={t(tr.description, locale)}
      tags={["Additive Manufacturing", "5-Axis", "3D Printing", "Research", "RWTH Aachen"]}
      media={[{ type: "link", src: "https://www.wzl.rwth-aachen.de/cms/WZL/Das-WZL/Presse-und-Medien/Aktuelle-Meldungen/~oazih/Nachhaltiger-3D-Druck-durch-multiaxiale", label: "RWTH WZL Research Article" }]}
    />
  );
}
