window.MathJax = {
  tex: {
    inlineMath: [["$", "$"], ["\\(", "\\)"]],
    displayMath: [["$$", "$$"], ["\\[", "\\]"]],
  },
  options: {
    skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code"],
  },
};

document.addEventListener("DOMContentLoaded", async () => {
  const diagrams = document.querySelectorAll("pre > code.language-mermaid");
  diagrams.forEach((code) => {
    const container = document.createElement("div");
    container.className = "mermaid";
    container.textContent = code.textContent;
    code.parentElement.replaceWith(container);
  });

  if (diagrams.length > 0 && window.mermaid) {
    window.mermaid.initialize({
      startOnLoad: false,
      theme: "neutral",
      securityLevel: "strict",
    });
    await window.mermaid.run({ querySelector: ".mermaid" });
  }
});
