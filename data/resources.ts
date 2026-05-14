// File at ./data/resources.ts
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

export const lastUpdated = "14 maggio 2026";

export const sections: Section[] = [
  {
    id: "piattaforme",
    title: "Piattaforme utili",
    resources: [
      {
        title: "ChatGPT",
        url: "https://chatgpt.com",
        description:
          "Assistente AI di OpenAI. Modello attualmente più intelligente e con forti capacità di ricerca.",
      },
      {
        title: "Claude",
        url: "https://claude.ai",
        description:
          "Assistente AI di Anthropic. Modelli utili per attività di ufficio e con intelligenza emotiva più alta.",
      },
      {
        title: "Gemini",
        url: "https://gemini.google.com",
        description:
          "Assistente AI di Google. Utile per ricerca, scrittura, brainstorming e integrazione con l’ecosistema Google.",
      },
      {
        title: "Perplexity",
        url: "https://www.perplexity.ai",
        description:
          "Motore di ricerca con AI che cita le fonti. Utile per fare ricerche rapide e confrontare informazioni. Funziona con modelli da diversi laboratori.",
      },
    ],
  },
  {
    id: "iniziare",
    title: "Da dove iniziare",
    resources: [
      {
        title: "AI Fluency: Framework & Foundations – Anthropic",
        url: "https://www.anthropic.com/learn/claude-for-you",
        description:
          "Corso introduttivo gratuito per imparare a collaborare con l’AI in modo efficace, sicuro ed etico.",
      },
      {
        title: "ChatGPT for Work – OpenAI Academy",
        url: "https://openai.com/academy/chatgpt-for-work/",
        description:
          "Raccolta ufficiale di esempi pratici per usare ChatGPT nel lavoro: scrittura, ricerca, analisi dati, coding e flussi operativi.",
      },
      {
        title: "Google Prompting Essentials",
        url: "https://www.skills.google/paths/2337/course_templates/1229",
        description:
          "Corso introduttivo di Google sul prompting. Utile per imparare a dare istruzioni chiare e costruire una piccola libreria di prompt riutilizzabili.",
      },
      {
        title: "Elements of AI",
        url: "https://www.elementsofai.com/",
        description:
          "Corso gratuito dell’Università di Helsinki pensato per non esperti. Spiega cos’è l’AI, cosa può fare e quali sono i suoi limiti.",
      },
      {
        title: "Generative AI for Everyone – DeepLearning.AI",
        url: "https://www.deeplearning.ai/courses/generative-ai-for-everyone/",
        description:
          "Corso di Andrew Ng per capire come funziona l’AI generativa, cosa può e non può fare, e come usarla nel lavoro quotidiano.",
      },
      {
        title: "AI Agent harness 1 - Codex",
        url: "https://developers.openai.com/codex/quickstart",
        description:
          "Documentazione per come scaricare ed iniziare a giocare con harness di agenti IA in locale come Codex",
      },
      {
        title: "AI Agent harness 2 - Claude Code",
        url: "https://code.claude.com/docs/en/quickstart",
        description:
          "Documentazione per come scaricare ed iniziare a giocare con harness di agenti IA in locale come Claude Code",
      },
      {
        title: "AI Agent harness 3 - Gemini Antigravity",
        url: "https://codelabs.developers.google.com/getting-started-google-antigravity#0",
        description:
          "Più facile per inziare. Guida per come scaricare ed iniziare ad utilizzare Antigravity, che unisce gli agenti in locale con un IDE come VS Code",
      },
    ],
  },
  {
    id: "prompting",
    title: "Imparare a scrivere prompt migliori",
    resources: [
      {
        title: "Prompt engineering best practices for ChatGPT – OpenAI",
        url: "https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt",
        description:
          "Guida ufficiale OpenAI con buone pratiche per ottenere risposte più utili da ChatGPT.",
      },
      {
        title: "Prompt engineering overview – Anthropic",
        url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview",
        description:
          "Guida ufficiale Anthropic sui principi del prompting: chiarezza, esempi, contesto, ruoli e strutturazione delle richieste.",
      },
      {
        title: "Prompting best practices – Claude Docs",
        url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices",
        description:
          "Guida più approfondita per chi vuole migliorare i prompt e imparare tecniche come esempi, struttura XML e catene di prompt.",
      },
      {
        title: "Learn Prompting",
        url: "https://learnprompting.org/",
        description:
          "Corso online molto ampio sul prompt engineering. Utile da consultare a pezzi, senza doverlo completare tutto.",
      },
      {
        title: "Prompting Guide – ChatGPT",
        url: "https://www.promptingguide.ai/it/models/chatgpt",
        description:
          "Risorsa in italiano sul prompting per ChatGPT, utile per iniziare con esempi e concetti base.",
      },
    ],
  },
  {
    id: "lavoro",
    title: "Strumenti per il lavoro quotidiano",
    resources: [
      {
        title: "NotebookLM",
        url: "https://notebooklm.google.com",
        description:
          "Oltre ai già citati ChatGPT e Claude, NotebookLM è uno strumento Google per studiare e interrogare documenti caricati dall’utente. Utile per manuali, procedure e materiali formativi.",
      },
      {
        title: "OpenAI Academy – Prompting",
        url: "https://academy.openai.com/public/clubs/work-users-ynjqu/resources/prompting",
        description:
          "Risorsa pratica con esempi di prompt per attività lavorative, utile per trasformare casi reali in richieste efficaci.",
      },
      {
        title: "OpenAI Academy – ChatGPT for any role",
        url: "https://academy.openai.com/public/clubs/work-users-ynjqu/resources/chatgpt-for-any-role",
        description:
          "Esempi di casi d’uso e prompt adattabili a diversi ruoli lavorativi.",
      },
    ],
  },
  {
    id: "capire-ai",
    title: "Capire meglio l’AI senza diventare tecnici",
    resources: [
      {
        title: "AI for Everyone – DeepLearning.AI",
        url: "https://www.deeplearning.ai/courses/ai-for-everyone/",
        description:
          "Corso non tecnico per capire termini come machine learning, reti neurali e data science, e riconoscere opportunità concrete in azienda.",
      },
      {
        title: "Elements of AI – Introduction to AI",
        url: "https://course.elementsofai.com/",
        description:
          "Percorso gratuito e accessibile su concetti base, machine learning, reti neurali e implicazioni dell’AI.",
      },
      {
        title: "3Blue1Brown – Neural Networks",
        url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
        description:
          "Serie video molto visuale sulle reti neurali. Più tecnica, ma ottima per chi vuole capire cosa c’è dietro.",
      },
      {
        title: "Crash Course AI",
        url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtN-vJ9va-USEW0q2jSgZ_QU",
        description:
          "Serie YouTube introduttiva sull’intelligenza artificiale, con spiegazioni accessibili e tanti esempi.",
      },
    ],
  },
  {
    id: "sicurezza",
    title: "Uso responsabile e controllo umano",
    resources: [
      {
        title: "AI Fluency – Anthropic",
        url: "https://anthropic.skilljar.com/ai-fluency-framework-foundations",
        description:
          "Corso gratuito su come usare l’AI in modo efficace, efficiente, etico e sicuro.",
      },
    ],
  },
  {
    id: "comunita",
    title: "Comunità e aggiornamenti",
    resources: [
      {
        title: "Hugging Face",
        url: "https://huggingface.co",
        description:
          "Hub per modelli open-source, dataset e demo. Più tecnico, ma utile per vedere cosa esiste nel mondo AI.",
      },
      {
        title: "The Batch – DeepLearning.AI",
        url: "https://www.deeplearning.ai/the-batch/",
        description:
          "Newsletter settimanale per seguire sviluppi importanti nel mondo AI senza dover leggere decine di fonti.",
      },
      {
        title: "The AI Advantage",
        url: "https://www.youtube.com/@aiadvantage",
        description:
          "Canale YouTube con tutorial pratici su strumenti AI, aggiornamenti e casi d’uso per utenti non necessariamente tecnici.",
      },
      {
        title: "OpenAI Blog",
        url: "https://openai.com/news/",
        description:
          "Aggiornamenti ufficiali su nuovi modelli, funzionalità e casi d’uso OpenAI.",
      },
      {
        title: "Anthropic News",
        url: "https://www.anthropic.com/news",
        description:
          "Aggiornamenti ufficiali su Claude, sicurezza AI, ricerca e nuovi strumenti Anthropic.",
      },
      {
        title: "Google AI Blog",
        url: "https://blog.google/technology/ai/",
        description:
          "Aggiornamenti Google su AI, prodotti, ricerca e applicazioni pratiche.",
      },
    ],
  },
];