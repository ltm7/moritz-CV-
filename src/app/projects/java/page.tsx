"use client";
import ProjectLayout from "@/components/ProjectLayout";
import { useI18n } from "@/lib/i18n-context";
import { translations, t } from "@/lib/translations";

export default function JavaProject() {
  const { locale } = useI18n();
  const tr = translations.projectPages.java;
  return (
    <ProjectLayout
      title={t(tr.title, locale)}
      subtitle={t(tr.subtitle, locale)}
      description={t(tr.description, locale)}
      tags={["Java", "Robotics", "Lego Mindstorms", "Automation", "Pick & Place"]}
      media={[{ type: "video", src: "/videos/java.mp4", label: t(tr.videoLabel, locale) }]}
    />
  );
}
