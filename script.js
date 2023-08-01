
const produto = {
    item: "Celular",
    marca: "Samsung",
    preço: 1500.00,
    descrição: "Smartphone com câmera de alta resolução",
    categoria: "Eletrônicos"
};

const botaoExibir = document.querySelector("#exibir");
botaoExibir.addEventListener("click", () => {
    const resultadoElement = document.querySelector("#resultado");
    for (const propriedade in produto) {
        const paragrafo = document.createElement("p");
        paragrafo.textContent = `${propriedade}: ${produto[propriedade]}`;
        resultadoElement.appendChild(paragrafo);
    }
});
