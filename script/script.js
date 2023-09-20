let items = [
  {
    elemento: document.getElementById("item1"),
    estado: false,
    value: 1,
  },

  {
    elemento: document.getElementById("item2"),
    estado: false,
    value: 2,
  },

  {
    elemento: document.getElementById("item3"),
    estado: false,
    value: 3,
  },

  {
    elemento: document.getElementById("item4"),
    estado: false,
    value: 4,
  },

  {
    elemento: document.getElementById("item5"),
    estado: false,
    value: 5,
  },
];

console.log(items);

items[0].elemento.addEventListener("click", () => {
  seleccionarElemento(items, items[0]);
});
items[1].elemento.addEventListener("click", () => {
  seleccionarElemento(items, items[1]);
});
items[2].elemento.addEventListener("click", () => {
  seleccionarElemento(items, items[2]);
});
items[3].elemento.addEventListener("click", () => {
  seleccionarElemento(items, items[3]);
});
items[4].elemento.addEventListener("click", () => {
  seleccionarElemento(items, items[4]);
});

const seleccionarElemento = (listaItems, item) => {
  if (item.estado == false) {
    contraerElemento();
    desplegarElemento(item.value);
    listaItems = falsearElementos(listaItems);
    item.estado = true;
  } else {
    contraerElemento();
    item.estado = false;
  }
};

const desplegarElemento = (nElement) => {
  let questionText = document.getElementById(`question${nElement}`);
  questionText.style.fontWeight = 700;

  let arrowElement = document.getElementById(`arrow${nElement}`);
  arrowElement.style.transform = "rotate(180deg)";

  let answerText = document.getElementById(`answer${nElement}`);
  answerText.style.display = "block";
};

const contraerElemento = () => {
  for (let i = 1; i <= 5; i++) {
    let questionText = document.getElementById(`question${i}`);
    questionText.style.fontWeight = 500;

    let arrowElement = document.getElementById(`arrow${i}`);
    arrowElement.style.transform = "rotate(0deg)";

    let answerText = document.getElementById(`answer${i}`);
    answerText.style.display = "none";
  }
};

const falsearElementos = (listaItems) => {
    listaItems.forEach(item => {
        item.estado = false;
    });
    return listaItems;
}
