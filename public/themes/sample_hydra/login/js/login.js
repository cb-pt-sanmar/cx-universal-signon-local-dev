async function bootstrap() {
  
  const logoUrl = 'https://d2r9epyceweg5n.cloudfront.net/stores/001/597/593/products/estampa-hydra-logo-e0652ec7b4ecc660a016160371118511-640-0.png';
  
  document.querySelector('.logo>img').src = logoUrl;
  
  setHeaderBackground();
  window.onresize = (event) => setHeaderBackground();
  
  document.querySelector('#kc-content').classList.add('hydra');
  document.querySelector('.logo').classList.add('hydra');
  
  document.querySelector('.custom-activate').classList.remove('hidden');

  const passwordShowHide = document.querySelector('.show-hide-password');
  const passwordInput = document.querySelector('#password');
  const eyeOpen = document.querySelector('.eye-open');
  const eyeClosed = document.querySelector('.eye-closed');

  if(passwordShowHide){
    passwordShowHide.addEventListener('click', () => {
      if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeClosed.classList.remove('hidden');
      eyeOpen.classList.add('hidden');
      } else {
      passwordInput.type = 'password';
      eyeClosed.classList.add('hidden');
      eyeOpen.classList.remove('hidden');
      }
    });
  }

  const closeError = document.querySelector('.pficon-error-circle-o');

  if (closeError) {
    closeError.addEventListener('click', () => {
      document.querySelector('.alert-error').classList.add('hidden');
    });
  }

  function setHeaderBackground() {
    var windowSize =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (windowSize > 770) {
      document.querySelector('#kc-header').style.backgroundImage = logoUrl;
    } else {
      document.querySelector('#kc-header').style.backgroundImage = 'none';
    }
  }

  
  // Finally show the master div
  document.getElementById('topLevelMasterDiv').style.display = '';
  
};

bootstrap();
