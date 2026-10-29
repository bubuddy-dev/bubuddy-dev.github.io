// 탭을 누르면 해당 패널만 보여줍니다
const tabs = document.querySelectorAll('[role="tab"]');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((other) => {
      const selected = other === tab;
      other.setAttribute('aria-selected', String(selected));
      document.getElementById(other.getAttribute('aria-controls')).hidden = !selected;
    });
  });
});
