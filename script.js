const orderForm = document.querySelector("#order-form");
const formMessage = document.querySelector("#form-message");

orderForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.querySelector("#name").value;
    const burger = document.querySelector("#burger").value;

    formMessage.textContent =
        `Thanks, ${name}! Your ${burger} order has been received. 🍔`;

    orderForm.reset();
});