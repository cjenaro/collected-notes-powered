const axios = require("axios");

module.exports = async () => {
  // fetch markdown from collected notes
  const result = await axios.get(
    "https://collectednotes.com/jenaro/testing-frontmatter.md"
  );
  // split each section
  const sections = result.data.split("---");
  // parse sections and return them
  const sectionsData = sections
    .map(parseToObject)
    .reduce((acc, curr) => ({ ...acc, ...curr }), {});
  return sectionsData;
};

function parseToObject(section) {
  // split on newline and only keep non empty parts
  const parts = section.split("\n").filter((p) => !!p);
  let sectionName = "";
  // grab each key value pair for each section
  const sectionValues = parts.reduce((acc, curr, index) => {
    if (index === 0) {
      sectionName = curr;
    }
    const objParts = curr.split(": ");
    if (objParts.length === 2) {
      acc = { ...acc, [objParts[0]]: objParts[1] };
    }

    return acc;
  }, {});

  return { [sectionName]: sectionValues };
}
