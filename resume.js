const content = document.querySelector('#resume-content');
const message = document.querySelector('#resume-message');
const status = document.querySelector('#resume-status');
const retry = document.querySelector('#retry-resume');
const printButton = document.querySelector('#print-resume');

async function loadResume() {
  retry.hidden = true;
  status.textContent = '正在加载简历…';
  try {
    // The repository-owned README is the only source; no remote Markdown or user input is rendered.
    const [{ marked }, response] = await Promise.all([
      import('./assets/vendor/marked.esm.js'),
      fetch('./README.md', { cache: 'no-cache' }),
    ]);
    if (!response.ok) throw new Error(`README request failed: ${response.status}`);
    const markdown = await response.text();
    const parsed = new DOMParser().parseFromString(marked.parse(markdown, { gfm: true }), 'text/html');

    // Reproduce the README's headings and right-aligned dates using scoped CSS.
    // Its global span/ins style must not affect the surrounding page controls.
    parsed.querySelectorAll('style').forEach((element) => element.remove());
    parsed.querySelectorAll('[style]').forEach((element) => element.removeAttribute('style'));
    parsed.querySelectorAll('a[href^="https://"]').forEach((link) => {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });
    content.replaceChildren(...parsed.body.childNodes);
    content.hidden = false;
    message.hidden = true;
    document.querySelector('#resume-footnote').hidden = false;
    printButton.disabled = false;
  } catch {
    status.textContent = '简历暂时未能加载。请重试，或通过上方入口查看、下载 Markdown 原文。';
    retry.hidden = false;
  }
}

retry.addEventListener('click', loadResume);
printButton.addEventListener('click', () => window.print());
loadResume();
