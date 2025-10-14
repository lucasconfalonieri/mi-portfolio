export type Lang = "es" | "en";

export type TranslatedString = Record<Lang, string>;

export type ModeKey = "remote" | "hybrid" | "onsite" | "part-time" | "full-time";

export type Category = "web" | "mobile" | "tv" | "ai" | "QA";

export type Project = {
  title: TranslatedString;
  description: TranslatedString;
  tags: string[];
  categories: Category[];
  media: string;
  demo?: string;
  deploy?: string;
  repo?: string;
  doc?: string;
  content?: string;
};

export type ExperienceItem = {
  role: TranslatedString;
  company: string;
  period: TranslatedString;
  location: string;
  mode?: ModeKey;
  bullets: TranslatedString[];
  platforms?: string[];
  tools?: string[];
  logo?: string;
};

export type EducationItem = {
  degree: TranslatedString;
  institution: string;
  period: TranslatedString;
  location?: string | TranslatedString;
  logo?: string;
  institutionUrl?: string;
  bullets?: TranslatedString[];
};

export type CertificateItem = {
  title: TranslatedString;
  issuer: string;
  date?: string;
  file: string;
  type: "image" | "pdf";
  thumbnail?: string;
  credentialUrl?: string;
};
