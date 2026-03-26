"use client";
import ProjectLayout from "@/components/ProjectLayout";
import { useI18n } from "@/lib/i18n-context";
import { translations, t } from "@/lib/translations";

export default function ProduktionsplanungProject() {
  const { locale } = useI18n();
  const tr = translations.projectPages.produktionsplanung;
  return (
    <ProjectLayout
      title={t(tr.title, locale)}
      subtitle={t(tr.subtitle, locale)}
      description={t(tr.description, locale)}
      tags={["Excel", "VBA", "Production Planning", "OEE", "Capacity Planning", "KPI"]}
      media={[{ type: "pdf", src: "/docs/CAF.xlsm", label: t(tr.fileLabel, locale) }]}
    />
  );
}
