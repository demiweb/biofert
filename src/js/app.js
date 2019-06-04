import setTouchClassName from './components/setTouchClassName';
import setSliders from './components/setSliders';
import setLazy from './components/setLazy';
import truncateText from './components/truncateText';
import toggleMenu from './components/toggleMenu';
import setTabs from './components/setTabs';

$(function() {
  setTouchClassName();
  setSliders();
  setLazy();
  setTimeout(truncateText, 100);
  // truncateText();
  toggleMenu();
  setTabs();
});
