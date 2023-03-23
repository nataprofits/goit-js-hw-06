

const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // перешкоджаємо перезавантаженню сторінки при відправленні форми

  const { email, password } = form.elements;

  if (!email.value || !password.value) { // перевіряємо чи заповнені всі поля
    alert('All fields are required!');
  } else {
    const formData = { // створюємо об'єкт з введеними даними
      email: email.value,
      password: password.value
    };

    console.log(formData); // виводимо об'єкт з введеними даними в консоль

    form.reset(); // очищуємо значення полів форми
  }
});