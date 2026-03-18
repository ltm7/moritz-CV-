"use client";
import ProjectLayout from "@/components/ProjectLayout";
import { useI18n } from "@/lib/i18n-context";
import { translations, t } from "@/lib/translations";

export default function B2BProject() {
  const { locale } = useI18n();
  const tr = translations.projectPages.b2b;
  return (
    <ProjectLayout
      title={t(tr.title, locale)}
      subtitle={t(tr.subtitle, locale)}
      description={t(tr.description, locale)}
      tags={["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Design"]}
      media={[{ type: "video", src: "/videos/letersolutions.mp4", label: t(tr.videoLabel, locale) }]}
    />
  );
}
