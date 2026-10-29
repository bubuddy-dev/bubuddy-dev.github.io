// 내려받기 버튼을 누르면 접속한 OS에 맞는 최신 릴리스 파일을 바로 받습니다
const installers = {
  mac: { label: 'Mac용 내려받기', suffix: '-mac-arm64.dmg' },
  windows: { label: 'Windows용 내려받기', suffix: '-windows-setup.exe' },
};

function detectOs() {
  const platform = navigator.userAgentData?.platform || navigator.userAgent;
  // iPad도 Macintosh로 보이므로 터치 기기는 제외합니다
  if (/mac/i.test(platform) && navigator.maxTouchPoints <= 1) return 'mac';
  if (/win/i.test(platform)) return 'windows';
  return null;
}

const installer = installers[detectOs()];

document.querySelectorAll('[data-download]').forEach((button) => {
  const note = button.parentElement.querySelector('.download-note');
  const fail = () => {
    note.hidden = false;
  };

  if (installer) button.textContent = installer.label;

  button.addEventListener('click', async () => {
    note.hidden = true;
    if (!installer) return fail();
    try {
      const res = await fetch(`https://api.github.com/repos/${button.dataset.download}/releases/latest`);
      if (!res.ok) return fail();
      const { assets } = await res.json();
      const asset = assets.find((a) => a.name.endsWith(installer.suffix));
      if (!asset) return fail();
      location.href = asset.browser_download_url;
    } catch {
      fail();
    }
  });
});
