document.addEventListener("DOMContentLoaded", () => {
  ['header', 'footer', 'contact-form'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      const url = `../components/${id}.html`;
      fetch(url)
        .then((resp) => resp.text())
        .then((html) => { el.innerHTML = html; })
        .catch((err) => { console.error(`Error loading ${id}:`, err); });
    }
  });
});