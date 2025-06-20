import { useEffect } from "react";

const SEO = ({ title, description, keywords, image }) => {
  useEffect(() => {
    // Update document title
    document.title = title
      ? `${title} | KPB Supports Solutions`
      : "KPB Supports Solutions";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        description ||
          "KPB Supports Solutions - Business Consultant & IT Services. Simplifying the way businesses work through our one-stop portal."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        description ||
        "KPB Supports Solutions - Business Consultant & IT Services. Simplifying the way businesses work through our one-stop portal.";
      document.head.appendChild(meta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        keywords ||
          "business consulting, IT services, digital transformation, BPM, technology solutions"
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content =
        keywords ||
        "business consulting, IT services, digital transformation, BPM, technology solutions";
      document.head.appendChild(meta);
    }

    // Update Open Graph meta tags
    const updateOpenGraphTag = (property, content) => {
      const existingTag = document.querySelector(
        `meta[property="${property}"]`
      );
      if (existingTag) {
        existingTag.setAttribute("content", content);
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute("property", property);
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    updateOpenGraphTag(
      "og:title",
      title ? `${title} | KPB Supports Solutions` : "KPB Supports Solutions"
    );
    updateOpenGraphTag(
      "og:description",
      description ||
        "Business Consultant & IT Services. Simplifying the way businesses work."
    );
    updateOpenGraphTag("og:image", image || "/logo.png");
    updateOpenGraphTag("og:type", "website");
    updateOpenGraphTag("og:url", window.location.href);

    // Update Twitter Card meta tags
    const updateTwitterTag = (name, content) => {
      const existingTag = document.querySelector(`meta[name="${name}"]`);
      if (existingTag) {
        existingTag.setAttribute("content", content);
      } else {
        const meta = document.createElement("meta");
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    updateTwitterTag("twitter:card", "summary_large_image");
    updateTwitterTag(
      "twitter:title",
      title ? `${title} | KPB Supports Solutions` : "KPB Supports Solutions"
    );
    updateTwitterTag(
      "twitter:description",
      description ||
        "Business Consultant & IT Services. Simplifying the way businesses work."
    );
    updateTwitterTag("twitter:image", image || "/logo.png");
  }, [title, description, keywords, image]);

  return null;
};

export default SEO;
