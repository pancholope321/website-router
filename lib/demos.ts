export type Demo = {
  slug: string;
  title: string;
  description: string;
  tag: string;
};

// Each demo is a self-contained static app living at /public/demos/<slug>/index.html.
// To add a new demo: drop a folder in public/demos/<slug>/ with its own index.html,
// then add an entry here.
export const demos: Demo[] = [
  {
    slug: "entre-cubiertas",
    title: "Entre Cubiertas",
    description:
      "Fabricante directo de cuarzo, mármol y granito. Sitio de presentación con cotización vía WhatsApp.",
    tag: "demos.website.cl",
  },
];
