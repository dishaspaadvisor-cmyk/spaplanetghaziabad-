const BASE_URL = "https://spaplanetghaziyabad.co.in/";

export default function sitemap() {
  const pages = [
    {
      url: "",
      priority: 1.0,
      changeFrequency: "daily",
    },
    {
      url: "/about",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: "/services",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: "/body-massage",
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: "/deep-tissue-massage",
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: "/swedish-massage",
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: "/thai-massage",
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: "/aromatherapy-massage",
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: "/hot-stone-massage",
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: "/couple-spa",
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: "/facial",
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: "/gallery",
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: "/offers",
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: "/blog",
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: "/faq",
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: "/contact",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: "/privacy-policy",
      priority: 0.5,
      changeFrequency: "yearly",
    },
    {
      url: "/terms-and-conditions",
      priority: 0.5,
      changeFrequency: "yearly",
    },
  ];

  return pages.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}