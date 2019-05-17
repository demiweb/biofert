import { debounce } from 'throttle-debounce';
import { $DOC, $WIN, $BODY, ACTIVE, NOSCROLL } from '../constants';

class Menu {
  constructor() {
    this.$menu = $(`.${Menu.classNames.menu}`);   
  };

  init() {
    this._resetMenuHeight();
    
    $DOC.on('click', '.' + Menu.classNames.burger, this._toggleMenu.bind(this));
    $DOC.on('click', this._closeMenu.bind(this));
  };

  toggle($burger, $menu, $header) {
    if ($burger.hasClass(ACTIVE)) {
      $burger.removeClass(ACTIVE);
      $menu.removeClass(ACTIVE);
      $BODY.removeClass(NOSCROLL);
      if ($header.length > 0) {
        $header.removeClass(Menu.classNames.hasOpenMenu);
      };
    } else {
      $burger.addClass(ACTIVE);
      $menu.addClass(ACTIVE);
      if (!this.isShortScreen) {
        $BODY.addClass(NOSCROLL);
      };
      if (this.isShortScreen) {
        $menu.css({
          height: this.menuHeight + 'px' 
        });
      };      
      if ($header.length > 0) {
        $header.addClass(Menu.classNames.hasOpenMenu);
      };
    };
  };

  _toggleMenu(e) {
    e.preventDefault();

    const name = e.currentTarget.getAttribute('data-menu');
    const $menu = name ? $(`.${Menu.classNames.menu}[data-menu="${name}"]`) : $(`.${Menu.classNames.menu}`);
    const $header = $(e.currentTarget).closest(`.${Menu.classNames.header}`);

    this.menuHeight = $(`.${Menu.classNames.header}`).length > 0    
      ? document.documentElement.scrollHeight - parseInt($(`.${Menu.classNames.header}`).outerHeight(true))
      : document.documentElement.scrollHeight;
    

    this.toggle($(e.currentTarget), $menu, $header);
  };

  _closeMenu(e) {
    const $menu = $(`.${Menu.classNames.menu}`);
    const $burger = $(`.${Menu.classNames.burger}`);
    const $header = $burger.length > 0 ? $burger.closest(`.${Menu.classNames.header}`) : false;

    if ($(e.target).is($menu)) {
      $burger.removeClass(ACTIVE);
      $menu.removeClass(ACTIVE);
      $BODY.removeClass(NOSCROLL);
      if ($header) {
        $header.removeClass(Menu.classNames.hasOpenMenu);
      };
    };
  };

  _resetMenuHeight() {
    const reset = () => {
      this.isShortScreen = window.innerHeight <= 567 ? true : false;

      if (!this.$menu.length) return;
      if (!this.$menu.hasClass(ACTIVE)) return;

      if (this.isShortScreen) {
        this.$menu.css({
          height: this.menuHeight + 'px' 
        });
        $BODY.removeClass(NOSCROLL);
      } else {
        $BODY.addClass(NOSCROLL);
        this.$menu.css({
          height: ''
        });
      };
    };

    reset();

    const resetDebounced = debounce(66, reset);

    $WIN.on('resize', resetDebounced);    
  };
}

Menu.classNames = {
  burger: 'js-burger',
  menu: 'js-menu',
  header: 'header',
  hasOpenMenu: 'has-open-menu'
};

export default function toggleMenu() {
  const menu = new Menu();
  menu.init();
};
