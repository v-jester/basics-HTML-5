function validateForm() {
  const pibRegex = /^[А-ЯІЇЄҐ][а-яіїєґ]+ [А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/;
  const variantRegex = /^\d+$/;
  const groupRegex = /^[A-Za-zА-Яа-яІЇЄҐієї]{2}-\d{1,2}$/;
  const phoneRegex = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
  const idcardRegex = /^[А-ЯІЇЄҐ]{2} №\d{8}$/;

  const pibField = document.getElementById("pib");
  const variantField = document.getElementById("variant");
  const groupField = document.getElementById("group");
  const phoneField = document.getElementById("phone");
  const idcardField = document.getElementById("idcard");

  const fields = [pibField, variantField, groupField, phoneField, idcardField];
  fields.forEach((field) => {
    field.classList.remove("error");
    field.classList.remove("success");
  });

  let isValid = true;

  if (!pibRegex.test(pibField.value)) {
    pibField.classList.add("error");
    isValid = false;
  } else {
    pibField.classList.add("success");
  }

  if (!variantRegex.test(variantField.value)) {
    variantField.classList.add("error");
    isValid = false;
  } else {
    variantField.classList.add("success");
  }

  if (!groupRegex.test(groupField.value)) {
    groupField.classList.add("error");
    isValid = false;
  } else {
    groupField.classList.add("success");
  }

  if (!phoneRegex.test(phoneField.value)) {
    phoneField.classList.add("error");
    isValid = false;
  } else {
    phoneField.classList.add("success");
  }

  if (!idcardRegex.test(idcardField.value)) {
    idcardField.classList.add("error");
    isValid = false;
  } else {
    idcardField.classList.add("success");
  }

  const resultTable = document.getElementById("resultTable");
  const resPib = document.getElementById("resPib");
  const resVariant = document.getElementById("resVariant");
  const resGroup = document.getElementById("resGroup");
  const resPhone = document.getElementById("resPhone");
  const resIdcard = document.getElementById("resIdcard");

  if (isValid) {
    resPib.textContent = pibField.value;
    resVariant.textContent = variantField.value;
    resGroup.textContent = groupField.value;
    resPhone.textContent = phoneField.value;
    resIdcard.textContent = idcardField.value;
    resultTable.style.display = "table";
  } else {
    resultTable.style.display = "none";
  }
}

const variant = 1;
const table = document.getElementById("myTable");

let counter = 1;
for (let i = 0; i < 6; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < 6; j++) {
    const cell = document.createElement("td");
    cell.textContent = counter;
    cell.dataset.number = counter;
    counter++;

    cell.addEventListener("mouseover", function () {
      if (this.dataset.number === "1") {
        const randomColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
        this.style.backgroundColor = randomColor;
      }
    });

    cell.addEventListener("click", function () {
      const chosenColor = document.getElementById("colorPicker").value;
      this.style.backgroundColor = chosenColor;
    });

    cell.addEventListener("dblclick", function () {
      if (variant === 1) {
        const row = this.parentElement;
        const currentColor = this.style.backgroundColor;
        for (let c of row.children) {
          c.style.backgroundColor = currentColor;
        }
      }
    });

    row.appendChild(cell);
  }
  table.appendChild(row);
}

document.getElementById("checkBtn").addEventListener("click", validateForm);
