import { run } from "@backroad/backroad";
import { filesPage } from "./pages/files";
import { sipPage } from "./pages/sip";
import { addSidebar } from "./pages/sidebar";
run(async (br) => {
  br.write({
    body: `# 🛣️ Welcome to Backroad
This is a quick start template to help you get started developing backroad apps. You can also checkout the examples on [stackblitz](https://stackblitz.com/@sudo-vaibhav/collections/backroad)`,
  });
  br.linkGroup({
    items: [
      {
        label: "Read the Docs",
        href: "https://backroad.sudomakes.art/docs/fundamentals/introduction/",
        target: "_blank",
      },
      {
        label: "Learn Backroad in 3 minutes",
        href: "https://backroad.sudomakes.art/docs/fundamentals/introduction/",
        target: "_blank",
      },
      {
        label: "Backroad Github",
        href: "https://github.com/sudomakes/backroad",
        target: "_blank",
      },
      {
        label: "Backroad Website",
        href: "https://backroad.sudomakes.art",
        target: "_blank",
      },
      {
        label: "Examples on Stackblitz",
        href: "https://stackblitz.com/@sudo-vaibhav/collections/backroad",
        target: "_blank",
      },
    ],
  });
  br.write({
    body: `Backroad presents an unconventional way of **making UI with Node.JS with very minimal code**. In the complexity-ridden world of web technology, **Backroad aims to offer a simpler alternative, a road less travelled**

---
Backroad is currently in beta-development phase. If you like the idea behind it and would like to see it develop further. Please [consider starring Backroad on Github](https://github.com/sudomakes/backroad), or tell your developer friends about it. Thanks for trying backroad 💖`,
  });

  addSidebar(br);
  filesPage(
    br.page({
      path: "/files",
    })
  );

  sipPage(br.page({ path: "/sip" }));
});
