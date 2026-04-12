export interface Resource {
  title: string;
  url: string;
  description: string;
}

export interface Section {
  id: string;
  title: string;
  resources: Resource[];
}

export const lastUpdated = "12 aprile 2026";

export const sections: Section[] = [
  {
    id: "piattaforme",
    title: "Piattaforme utili",
    resources: [
      {
        title: "Claude",
        url: "https://claude.ai",
        description:
          "Assistente AI di Anthropic, ideale per analisi, scrittura e ragionamento complesso.",
      },
      {
        title: "ChatGPT",
        url: "https://chatgpt.com",
        description:
          "Chatbot AI di OpenAI, uno degli strumenti più diffusi al mondo.",
      },
    ],
  },
  {
    id: "educativi",
    title: "Contenuti educativi",
    resources: [
      {
        title: "3Blue1Brown – Neural Networks",
        url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
        description:
          "Serie YouTube che spiega le reti neurali con animazioni intuitive.",
      },
    ],
  },
  {
    id: "lavoro",
    title: "Strumenti per il lavoro quotidiano",
    resources: [
      {
        title: "Claude per Excel",
        url: "https://claude.ai",
        description:
          "Usa Claude per analizzare fogli Excel, generare formule e automatizzare report.",
      },
    ],
  },
  {
    id: "letture",
    title: "Letture consigliate",
    resources: [],
    // Lascia questa sezione vuota per nasconderla automaticamente.
    // Aggiungi risorse qui quando sei pronto.
  },
  {
    id: "comunita",
    title: "Comunità e aggiornamenti",
    resources: [
      {
        title: "Hugging Face",
        url: "https://huggingface.co",
        description:
          "Hub per modelli open-source, dataset e discussioni sulla ricerca AI.",
      },
    ],
  },
];
