module.exports = (about) => {
  return /*html*/ `
    <section id="about" style="--color: ${about["--color"]}; --backgroundColor: ${about["--backgroundColor"]}">
        <h1>About</h1>
        <h2>${about.title}</h2>
        <p>${about.subtitle}</p>
    </section>
    `;
};
