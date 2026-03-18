"use client";
import ProjectLayout from "@/components/ProjectLayout";
import { useI18n } from "@/lib/i18n-context";
import { translations, t } from "@/lib/translations";

export default function ReportsProject() {
  const { locale } = useI18n();
  const tr = translations.projectPages.reports;
  return (
    <ProjectLayout
      title={t(tr.title, locale)}
      subtitle={t(tr.subtitle, locale)}
      description={t(tr.description, locale)}
      tags={["3M", locale === "de" ? "Praktikum" : locale === "fr" ? "Stage" : "Internship", locale === "de" ? "Werkstudent" : locale === "fr" ? "Étudiant salarié" : "Working Student", "Engineering", "Wuppertal"]}
      media={[{ type: "pdf", src: "/report/Reportwerkstudent.pdf", label: locale === "de" ? "3M Werkstudenten-Bericht" : locale === "fr" ? "Rapport étudiant salarié 3M" : "3M Working Student Report" }]}
    />
  );
}
