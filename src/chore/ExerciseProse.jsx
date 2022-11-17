import React, { useEffect, useRef } from "react";

export const ExerciseProse = ({ markdownElement, children }) => {
  return (
    <div className="exercise">
      <Prose>{markdownElement}</Prose>
      <div className="code">{children}</div>
    </div>
  );
};

const key = "prose-is-open-exercise";

const Prose = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(() => {
    try {
      return localStorage.getItem(key) === "true";
    } catch (e) {
      return false;
    }
  });

  const ref = useRef();

  useEffect(() => {
    if (!isOpen) return;
    const { current } = ref;
    if (!current) return;

    const codeElements = Array.from(current.querySelectorAll("code"));

    for (const code of codeElements) {
      const textContent = code.textContent;

      code.textContent = textContent
        .replaceAll("&gt;", ">")
        .replaceAll("&apos;", "'")
        .replaceAll("&quot;", '"')
        .replaceAll("&lt;", "<")
        .replaceAll("&amp;", "&")
        .replaceAll("&#xE9;", "é")
        .replaceAll("&#xE8;", "è")
        .replaceAll("&#xE0;", "à")
        .replaceAll("&#xE2;", "â")
        .replaceAll("&#xE7;", "ç")
        .replaceAll("&#xE9;", "é")
        .replaceAll("&#xE8;", "è")
        .replaceAll("&#xE0;", "à")
        .replaceAll("&#xE2;", "â")
        .replaceAll("&#xE7;", "ç");
    }

    const imgElements = Array.from(current.querySelectorAll("img"));
    for (const img of imgElements) {
      const src = img.getAttribute("src");
      if (src.startsWith("../../../public/")) {
        img.setAttribute("src", src.replace("../../../public/", "/"));
      }
    }

    const h2Elements = Array.from(current.querySelectorAll("h2"));

    Array.from(current.querySelectorAll("[solution-link]")).map((el) =>
      el.remove()
    );

    for (const h2 of h2Elements) {
      const exerciseNo = h2.textContent.match(/\d+/)?.[0] ?? 1;

      const link = document.createElement("a");
      const currentUrl = window.location.pathname.split("/")[1];
      link.href = `/${currentUrl}/solution/${exerciseNo}`;
      link.textContent = `Solution ${exerciseNo}`;
      link.setAttribute("solution-link", "true");

      current.children[1].insertBefore(link, h2.nextSibling);
    }
  }, [isOpen, children]);

  const handleClick = () => {
    setIsOpen((p) => {
      localStorage.setItem(key, !p);
      return !p;
    });
  };

  if (!isOpen) {
    return (
      <button className="absolute-open-button" onClick={() => handleClick()}>
        Open md
      </button>
    );
  }

  return (
    <div ref={ref} className="prose">
      <button className="absolute-open-button" onClick={() => handleClick()}>
        Close
      </button>
      {children}
    </div>
  );
};
