function calculateCost() {
  const usage = document.getElementById("usage").value;
  const cost = document.getElementById("cost").value;

  if (usage === "" || cost === "") {
    document.getElementById("result").innerText = "Please enter all values.";
    return;
  }

  const monthly = usage * cost;
  const yearly = monthly * 12;

  document.getElementById("result").innerText =
    `Estimated Monthly Cost: $${monthly.toFixed(2)}
     Estimated Yearly Cost: $${yearly.toFixed(2)}`;
}
