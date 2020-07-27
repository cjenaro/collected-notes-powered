module.exports = (hero) => {
    return /*html*/`
    <section id="hero" style="--color: ${hero["--color"]}; --backgroundColor: ${hero["--backgroundColor"]}">
        <h1>Home</h1>
        <h2>${hero.title}</h2>
        <p>${hero.subtitle}</p>
    </section>
    `
}