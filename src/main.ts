import { run } from "@backroad/backroad";
run(async (br) => {
  const repoData = br.getOrDefault(
    "repo-data",
    null as null | { stars: number; latestVersion: string }
  );
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
  if (repoData === null) {
    const [repo, tags] = await Promise.all(
      (
        await Promise.all([
          fetch("https://api.github.com/repos/sudomakes/backroad"),
          fetch("https://api.github.com/repos/sudomakes/backroad/tags"),
        ])
      ).map((resp) => resp.json())
    );

    br.setValue("repo-data", {
      stars: repo.stargazers_count,
      latestVersion: tags[0].name,
    });
  } else {
    br.stats({
      items: [
        { label: "Backroad Stars", value: repoData.stars },
        { label: "Latest Version", value: repoData.latestVersion },
      ],
    });
  }
});
