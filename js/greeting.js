// import getElementFromTemplate from './getElementFromTemplate';
// import select from './select';
// import rulesElement from './rules';

import AbstractView from './AbstractView';
import Application from './Application';

class GreetingView extends AbstractView {
  constructor() {
    super();
  }

  getMarkup() {
    return `<div class="greeting  central--blur">
      <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
      <h1 class="greeting__asterisk">*</h1>
      <div class="greeting__challenge">
        <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
        <p>Правила игры просты.<br>
          Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
          Задача кажется тривиальной, но не думай, что все так просто.<br>
          Фотореализм обманчив и коварен.<br>
          Помни, главное — смотреть очень внимательно.</p>
      </div>
      <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
    </div>`;
  }

  bindHandlers() {
    this.element.querySelector('.greeting__continue').addEventListener('click', () => {
      Application.showRules();
    });
  }
}

export default () => new GreetingView().element;

// const templateGreeting = `<div class="greeting  central--blur">
//   <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
//   <h1 class="greeting__asterisk">*</h1>
//   <div class="greeting__challenge">
//     <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
//     <p>Правила игры просты.<br>
//       Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
//       Задача кажется тривиальной, но не думай, что все так просто.<br>
//       Фотореализм обманчив и коварен.<br>
//       Помни, главное — смотреть очень внимательно.</p>
//   </div>
//   <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
// </div>`;
// const greetingElement = getElementFromTemplate(templateGreeting);
// greetingElement.querySelector('.greeting__continue').addEventListener('click', () => {
//   event.preventDefault();
//   select(rulesElement, greetingElement);
// });
// export default greetingElement;
