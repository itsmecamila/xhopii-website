const allProductImageEl = document.querySelectorAll(".product__image--all img");
const allModelsRadioEl = document.querySelectorAll(
  "#product-models-options label"
);
const allSizeRadioEl = document.querySelectorAll(
  "#product-sizes-options label"
);
const productImageSelectedEl = document.querySelector(".product__image--selected img");

const productNameElement = document.querySelector(".product__info--details h2");
const productPriceElement = document.querySelector(
  ".product__info--details strong"
);
const productTotalAvailableElement = document.querySelector(
  ".product__info--details small"
);
const productSelectedSizeEl = document.querySelector(
  "#product-sizes-options small span"
);

class ProductInfo {
  constructor(name, models, sizes) {
    this.name = name;
    this.models = models;
    this.sizes = sizes;
  }

  getModelFromElement(element) {
    return element.dataset.model;
  }

  getSizeFromElement(element) {
    return element.dataset.size;
  }

  getModel(model) {
    return this.models.find((_model) => _model.modelName === model);
  }

  formatTotalAvailable(totalAvailable) {
    return `${totalAvailable > 0 ? totalAvailable : "Nenhuma"} peça${
      totalAvailable > 1 ? "s" : ""
    } disponíve${totalAvailable > 1 ? "is" : "l"}`;
  }

  handleSelectModel(element) {
    const modelName = this.getModelFromElement(element);
    if (!modelName) return;

    const model = this.getModel(modelName);

    productPriceElement.innerHTML = model.price;
    productTotalAvailableElement.innerHTML = this.formatTotalAvailable(
      model.totalAvailable
    );

    document
      .querySelector(
        `.product__image--all img[class="product__image--highlight"]`
      )
      .classList.remove("product__image--highlight");

    document
      .querySelector(`.product__image--all img[data-model="${modelName}"]`)
      .classList.add("product__image--highlight");
    
    productImageSelectedEl.src = model.image;
  }

  handleSelectSize(element) {
    const size = this.getSizeFromElement(element);
    if (!size) return;

    productSelectedSizeEl.innerHTML = size;
  }
}
