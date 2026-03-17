"use client";
import ProjectLayout from "@/components/ProjectLayout";
import { useI18n } from "@/lib/i18n-context";
import { translations, t } from "@/lib/translations";

export default function CertificatesProject() {
  const { locale } = useI18n();
  const tr = translations.projectPages.certificates;
  return (
    <ProjectLayout
      title={t(tr.title, locale)}
      subtitle={t(tr.subtitle, locale)}
      description={t(tr.description, locale)}
      tags={["IIoT", "Industry 4.0", "GMP", "GLP", "Life Sciences", locale === "de" ? "Digitalisierung" : locale === "fr" ? "Digitalisation" : "Digitalization"]}
      media={[
        { type: "pdf", src: "/certificates/CERTIFICATEIIOT.pdf", label: locale === "de" ? "IIoT-Minikurs Zertifikat" : locale === "fr" ? "Certificat mini-cours IIoT" : "IIoT Minicourse Certificate" },
        { type: "pdf", src: "/certificates/lifesciencesminicourse.pdf", label: locale === "de" ? "Life-Science-Minikurs Zertifikat" : locale === "fr" ? "Certificat mini-cours Life-Science" : "Life-Science Minicourse Certificate" },
      ]}
    />
  );
}
