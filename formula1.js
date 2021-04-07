// interpolacion

const interpolacion = () => {
  (x = document.getElementById("x").value),
    (fx0 = document.getElementById("fx0").value),
    (x0 = document.getElementById("x0").value),
    (fx1 = document.getElementById("fx1").value),
  (x1 = document.getElementById("x1").value);
  
  console.log(x, fx0, x0, fx1, x1);

  let fx =
    parseFloat(fx0) +
    ((parseFloat(fx1) - parseFloat(fx0)) / (parseFloat(x1) - parseFloat(x0))) 
      * (parseFloat(x) - parseFloat(x0));
  console.log(fx);
  document.getElementById("fx").innerHTML = fx;
};

interpolacion();


