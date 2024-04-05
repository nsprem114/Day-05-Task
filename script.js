async function foo() {
  let res = await fetch("https://restcountries.com/v3.1/all");
  let data = await res.json();
  console.log(data);
  let container = document.createElement("div");
  container.className = "container";
  let row = document.createElement("row");
  row.className = "row";
  for (let i = 0; i < data.length; i++) {
    let col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `<div class="card mt-5" style="width: 18rem;">
        <img src="${data[i].flags.png}" class="card-img-top flag" alt="image">
        <div class="card-body">
          <h5 class="card-title">Country Name: ${data[i].name.common}</h5>
          <p class="card-text">Capital : ${data[i].capital[0]}</p>
          <p class="card-text">Region : ${data[i].region}</p>
          <p class="card-text">Population : ${data[i].population}</p>
          <a href="#" class="btn btn-primary">Click for Weather</a>
        </div>
      </div>`;
    row.append(col);
    container.append(row);
    document.body.append(container);
  }
}
foo();
