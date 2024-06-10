// document.addEventListener("DOMContentLoaded", function () {
//   function saveData(key, value) {
//     localStorage.setItem(key, value);
//   }

//   function loadData(key) {
//     return localStorage.getItem(key);
//   }

//   if (searchInput) {
//     searchInput.addEventListener("input", function () {
//       if (searchInput.value.length > 0) {
//         searchBar.style.display = "block";
//       } else {
//         searchBar.style.display = "none";
//       }
//     });

//     const searchForm = document.querySelector("form");
//     const searchButtons = document.querySelectorAll(".search-bar li");

//     searchButtons.forEach(function (button) {
//       button.addEventListener("click", function (event) {
//         event.preventDefault();
//         searchInput.value = button.textContent.trim();
//         searchForm.submit();
//       });
//     });

//     searchForm.addEventListener("submit", function (event) {
//       event.preventDefault();
//       const query = searchInput.value.trim().toLowerCase();

//       if (query.includes("cebolinha")) {
//         window.location.href = "cebolinha.html";
//       } else {
//         alert("Nenhum resultado encontrado para: " + query);
//       }
//     });
//   }

//   const subscribeButton = document.getElementById("botao-newsletter");
//   if (subscribeButton) {
//     subscribeButton.addEventListener("click", function () {
//       const nameInput = document.querySelector('input[name="nome_usuario"]');
//       const emailInput = document.querySelector('input[name="email_usuario"]');

//       const name = nameInput.value.trim();
//       const email = emailInput.value.trim();

//       if (name === "" || email === "") {
//         alert("Por favor, preencha todos os campos.");
//       } else if (!validateEmail(email)) {
//         alert("Por favor, insira um endereço de email válido.");
//       } else {
//         saveData("nome_usuario", name);
//         saveData("email_usuario", email);
//         alert("Obrigado por assinar nossa newsletter, " + name + "!");
//         nameInput.value = "";
//         emailInput.value = "";
//       }
//     });
//   }

//   // Função de validação de email
//   function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
//   }

//   // Carregar os dados do localStorage quando a página de newsletter for carregada
//   if (window.location.pathname.includes("newsletter.html")) {
//     const nameInput = document.querySelector('input[name="nome_usuario"]');
//     const emailInput = document.querySelector('input[name="email_usuario"]');

//     const savedName = loadData("nome_usuario");
//     const savedEmail = loadData("email_usuario");

//     if (savedName) {
//       nameInput.value = savedName;
//     }
//     if (savedEmail) {
//       emailInput.value = savedEmail;
//     }
//   }
// });

const seachBar = document.querySelector(".caixa_pesquisa");
const contents = document.querySelectorAll(".li-list span");

let input = "";
seachBar.addEventListener("input", (event) => {
  input = event.target.value;

  contents.forEach((content) => {
    const textContent = content.textContent;
    
    if (content.innerHTML.slice(0, input.length) !== input) {
      content.parentElement.style.display = 'none'
    } else {
      content.parentElement.style.display = 'flex'
    }
  });
});
