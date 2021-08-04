async function bootstrap() {
  
//  <script
//  src="https://browser.sentry-cdn.com/5.18.0/bundle.min.js"
//  integrity="sha384-9M0M/t9hmfACAyfoyFXXyzRbljCren5OjRJhHwZHJzuzFt02ZB67XZO27O1tml6L"
//  crossorigin="anonymous"></script>
  
//  document.querySelector('.custom-activate').classList.add('hidden');
  
  const currentHost = window.location.hostname;
  const currentOrigin = window.location.origin;
  
  const umbracoUrl = new URL('https://we-cx-csplus-dev-headless-api.azurewebsites.net/api/headless/content');
  umbracoUrl.searchParams.append('url', 'https://csplus-russia.dev.cx-apps.io/gb');

  fetch(umbracoUrl, 
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
  )
    .then((response) => response.json())
    .then((dataResponse) => {
      data = dataResponse;
      if (
        data &&
        data.page &&
        data.page.content &&
        data.page.content.logo &&
        data.page.content.logo.url
      ) {
        document.querySelector('.logo>img').src = data.page.content.logo.url;
      } else {
        console.error('Logo not found');
      }

      if (
        data &&
        data.page &&
        data.page.content &&
        data.page.content.loginImage &&
        data.page.content.loginImage.url
      ) {
        setHeaderBackground(data);
        window.onresize = (event) => setHeaderBackground(data);
      } else {
        console.error('Login image not found');
      }

      let emailElement = document.querySelector(
        '.kc-feedback-text>div:nth-child(3)>span'
      );

      if (
        emailElement &&
        data &&
        data.page &&
        data.page.content &&
        data.page.content.supportEmail
      ) {
        emailElement.innerHTML = data.page.content.supportEmail;
      }
    })
    .catch((error) => {
      console.error(error);
    });

  setCountryStyle('russia');

  let prefixElement = document.querySelector(
    '.kc-feedback-text>div:nth-child(2)>span'
  );

  if (prefixElement) {
    prefixElement.innerHTML = '+351';
  }

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

  function setHeaderBackground(data) {
    var windowSize =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (data && windowSize > 770) {
      document.querySelector('#kc-header').style.backgroundImage =
        'url(' + data.page.content.loginImage.url + ')';
    } else {
      document.querySelector('#kc-header').style.backgroundImage = 'none';
    }
  }

  function setCountryStyle(country) {
    
    document.querySelector('#kc-content').classList.add(country);
    document.querySelector('.logo').classList.add(country);
    
//    document.querySelector('.custom-activate').classList.remove('hidden');
  }
   
//  document.querySelector('.login-subtitle').innerHTML = "Booo";
  
  
  // Finally show the master div
  document.getElementById('topLevelMasterDiv').style.display = '';
  
};

bootstrap();
