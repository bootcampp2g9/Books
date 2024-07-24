const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);

//First attempt at creating a Logon and SignUp
// $(document).ready(function () {
//     $('ul').hide();
  
//     var loginForm = $("form.login");
//     var emailInput = $("input#email-input");
//     var passwordInput = $("input#password-input");
  
//     loginForm.on("submit", function (event) {
//       console.log('in click');
//       event.preventDefault();
//       var userData = {
//         email: emailInput.val().trim(),
//         password: passwordInput.val().trim()
//       };
  
//       if (!userData.email || !userData.password) {
//         return;
//       }

//       loginUser(userData.email, userData.password);
//       emailInput.val("");
//       passwordInput.val("");
//     });
  
//     function loginUser(email, password) {
//       $.post("/api/login", {
//         email: email,
//         password: password
//       })
//         .then(function() {
//           window.location.replace("/home");
//         })
//         .catch(function(err) {
//           console.log(err);
//         });
//     }
//   });


//   var signUpForm = $("form.signup");
//   var emailInput = $("input#email-input");
//   var passwordInput = $("input#password-input");

//   signUpForm.on("submit", function(event) {
//     event.preventDefault();
//     var userData = {
//       email: emailInput.val().trim(),
//       password: passwordInput.val().trim()
//     };

//     if (!userData.email || !userData.password) {
//       return;
//     }
//     signUpUser(userData.email, userData.password);
//     emailInput.val("");
//     passwordInput.val("");
//   });

//   function signUpUser(email, password) {
//     $.post("/api/signup", {
//       email: email,
//       password: password
//     })
//       .then(function(data) {
//         window.location.replace("/home");
//       })
//       .catch(handleLoginErr);
//   }

//   function handleLoginErr(err) {
//     $("#alert .msg").text(err.responseJSON);
//     $("#alert").fadeIn(500);
//   }
// });