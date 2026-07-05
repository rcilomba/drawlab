export type ProjectCategory =
  | "Bolig"
  | "Erhverv"
  | "Renovering"
  | "Kultur";

export type GalleryProject = {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  images: readonly string[];
};

export const galleryProjects: readonly GalleryProject[] = [
  {
    slug: "3d-opstalt",
    title: "3D Opstalt",
    category: "Erhverv",
    description: "Rumligt koncept og visualisering af butiksindretning.",
    images: [
      "/gallery/3D opstalt_01 kopi.jpg",
      "/gallery/3D opstalt_02 kopi.jpg",
      "/gallery/3D opstalt_03 kopi.jpg",
      "/gallery/3D opstalt_Facade_04 kopi.jpg",
    ],
  },
  {
    slug: "bad-toilet",
    title: "Bad & toilet",
    category: "Renovering",
    description: "Før og efter en målrettet forandring af boligens rum.",
    images: [
      "/gallery/Bad-Toilet-Efter kopi.jpg",
      "/gallery/Bad-Toilet-Før kopi.jpg",
    ],
  },
  {
    slug: "carlsbergbyen",
    title: "CarlsbergByen",
    category: "Erhverv",
    description: "Indretning og rumlig tilpasning af erhvervslokaler.",
    images: [
      "/gallery/CarlsbergByen_01 kopi.jpg",
      "/gallery/CarlsbergByen_02 kopi.jpg",
      "/gallery/CarlsbergByen_04 kopi.jpg",
    ],
  },
  {
    slug: "dragoer",
    title: "Forslag i Dragør",
    category: "Bolig",
    description: "Visuelt forslag til bolig og facade.",
    images: [
      "/gallery/Foreslag_01_Dragør kopi.jpg",
      "/gallery/Foreslag_02_Dragør kopi.jpg",
    ],
  },
  {
    slug: "boligstudie",
    title: "Boligstudie",
    category: "Bolig",
    description: "Digitalt studie af boligform, facade og proportioner.",
    images: [
      "/gallery/House_01 kopi.jpg",
      "/gallery/House_02 kopi.jpg",
    ],
  },
  {
    slug: "kirke",
    title: "Kirke",
    category: "Kultur",
    description: "Arkitektonisk visualisering af eksisterende byggeri.",
    images: [
      "/gallery/Kirke_01 kopi.jpg",
      "/gallery/Kirke_02 kopi.jpg",
    ],
  },
  {
    slug: "penthouse",
    title: "Penthouse",
    category: "Bolig",
    description: "Visualisering af et boligprojekt med terrasser og uderum.",
    images: [
      "/gallery/pent1.jpg",
      "/gallery/pent2.jpg",
      "/gallery/pent3.jpg",
    ],
  },
  {
    slug: "sommerhus",
    title: "Sommerhus",
    category: "Bolig",
    description: "Et studie af lys, facade og udeliv i et moderne sommerhus.",
    images: [
      "/gallery/sommerhus1.jpg",
      "/gallery/sommerhus2.jpg",
    ],
  },
] as const;
