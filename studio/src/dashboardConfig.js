export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "620e6e524ae0b623944e26f1",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-t7x9p5xy",
                  apiId: "bb9ffbef-5e54-417b-9f12-165537e2cf95",
                },
                {
                  buildHookId: "620e6e521826761d7d43579c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-w65h2jec",
                  apiId: "f1af6b93-9641-463e-9f2b-52c08cc29889",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/HenryAmm/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-w65h2jec.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
