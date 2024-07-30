//Variaveis
const url = `http://127.0.0.1:5000/get_total_ifood?token=`;

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
  loader.addEventListener("transitionend", () => {
    if (loader.classList.contains("loader-hidden")) {
      document.body.removeChild(loader);
    }
  });
});

//Funções
function fillScreenWithData(datas) {
  const total_spent = document.getElementById("balance");
  const period = document.getElementById("period");
  const itens_lista_1 = document.querySelectorAll("#restaurantes_spents li");
  const itens_lista_2 = document.querySelectorAll("#restaurantes_ordered li");
  const payment_spans = {
    PIX: document.getElementById("pix_balance"),
    CREDIT: document.getElementById("credit_balance"),
    DEBIT: document.getElementById("debit_balance"),
    DIGITAL_WALLET: document.getElementById("digital_wallet_balance"),
    CASH: document.getElementById("cash_balance"),
    BANK_PAY: document.getElementById("bank_pay_balance"),
    VOUCHER: document.getElementById("voucher_balance"),
  };

  let total = datas["total_spent"];
  let time_period = datas["time_period"];
  let top_rest_by_spend = datas["top_restaurants_by_spending"];
  let top_rest_by_orders = datas["top_restaurants_by_orders"];
  let pay_methods = datas["payment_methods"];
  let coin = datas["currency"];
  const { days, end_date, months, start_date, years } = time_period;

  total_spent.innerHTML = `${total} ${coin}`;
  period.innerHTML = `${years} ano(s), ${months} mes(es) e ${days} dia(s) (${start_date} - ${end_date})`;

  itens_lista_1.forEach((item, index) => {
    if (top_rest_by_spend[index]) {
      item.innerHTML = `${top_rest_by_spend[index].name}: ${top_rest_by_spend[index].orders} pedidos, totalizando ${top_rest_by_spend[index].total_spent} ${coin}`;
    }
  });

  itens_lista_2.forEach((item, index) => {
    if (top_rest_by_orders[index]) {
      item.innerHTML = `${top_rest_by_orders[index].name}: ${top_rest_by_orders[index].orders} pedidos, totalizando ${top_rest_by_orders[index].total_spent} ${coin}`;
    }
  });

  for (let key in payment_spans) {
    if (payment_spans[key]) {
      const value = pay_methods[key] !== undefined ? pay_methods[key] : 0.0;
      payment_spans[key].innerHTML = `${value} ${coin}`;
    }
  }
}

async function getDatas(token) {
  const loader = document.querySelector(".loader");
  try {
    loader.classList.remove("loader-hidden");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: token }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const ifoodData = await response.json();
    fillScreenWithData(ifoodData);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    loader.classList.add("loader-hidden"); // Esconder a tela de carregamento
  }
}

function buttonPressed() {
  const input = document.getElementById("token").value;
  getDatas(input);
}

//Bloco principal
const button = document.getElementById("calculate_total");
button.addEventListener("click", buttonPressed);
