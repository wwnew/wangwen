const content = document.querySelector('#resume-content');
const message = document.querySelector('#resume-message');
const status = document.querySelector('#resume-status');
const retry = document.querySelector('#retry-resume');
const printButton = document.querySelector('#print-resume');

function formatPersonalDetails(document) {
  const groups = [
    { labels: ['性别', '年龄', '民族'], className: 'resume-personal-details' },
    { labels: ['Tel', 'Email', '微信'], className: 'resume-contact-details' },
  ];
  const displayLabels = { Tel: '电话', Email: '邮箱' };
  const details = document.createElement('table');
  details.className = 'resume-details';
  details.setAttribute('aria-label', '基本信息与联系方式');
  const columns = document.createElement('colgroup');
  for (let index = 0; index < 6; index += 1) {
    const column = document.createElement('col');
    if (index % 2 === 0) column.className = 'detail-label-column';
    if (index === 3) column.className = 'detail-email-column';
    columns.append(column);
  }
  const body = document.createElement('tbody');
  details.append(columns, body);

  document.querySelectorAll('body > p').forEach((paragraph) => {
    const labels = [...paragraph.children].filter((element) => element.tagName === 'STRONG');
    const group = groups.find(({ labels: names }) => names.length === labels.length && names.every((name, index) => labels[index].textContent === name));
    if (!group) return;

    const row = document.createElement('tr');
    row.className = group.className;
    labels.forEach((label, index) => {
      const term = document.createElement('th');
      const value = document.createElement('td');
      term.id = `${group.className}-${index}`;
      value.setAttribute('headers', term.id);
      term.textContent = displayLabels[label.textContent] || label.textContent;
      for (let node = label.nextSibling; node && node !== labels[index + 1]; node = node.nextSibling) {
        const copy = node.cloneNode(true);
        if (copy.nodeType === Node.TEXT_NODE) {
          copy.textContent = copy.textContent.replace(/^[\s:：]+/, '').replace(/[\s|]+$/, '');
        }
        value.append(copy);
      }
      row.append(term, value);
    });
    body.append(row);
    if (details.isConnected) paragraph.remove();
    else paragraph.replaceWith(details);
  });
}

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
    formatPersonalDetails(parsed);
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
