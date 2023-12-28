const excerpt = (content, maxLength = 160) => {
  const startPosition = content.toLowerCase().indexOf("<p>") + 3;
  const endPosition = Math.min(content.toLowerCase().indexOf("</p>"));

  const excerpt = content
    .substring(startPosition, endPosition)
    .replace(/<[^>]+>/g, "");

  if (excerpt <= maxLength) return excerpt;
  return excerpt.substring(0, excerpt.lastIndexOf(" ", maxLength)) + "…";
};

const authorLine = (data) => {
  const author = data.authors?.join(", ") ?? data.author;
  return author ? `<span>by ${author}</span>` : "";
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

module.exports = { excerpt, authorLine, formatDate };
