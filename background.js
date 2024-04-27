let timer = undefined;

chrome.action.onClicked.addListener(async (tab) => {
  clearTimeout(timer);
  chrome.action.setBadgeBackgroundColor({ color: 'white' });
  chrome.action.setBadgeText({ text: "🔄" });

  try {
    const res = await fetch("http://127.0.0.1:27123/vault/Read%20later.md", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer d86762e884fb277819706033fadd41fef1b8353258f570210993c25103fdf56c",
        Accept: "*/*",
        "Content-Type": "text/markdown",
      },
      body: `- [ ] #todo #read_later ${tab.url}`,
    });

    if (res.status !== 204) {
      throw new Error();
    }

    chrome.action.setBadgeText({ text: "✅" });
  } catch {
    chrome.action.setBadgeText({ text: "❌" });
  } finally {
    timer = setTimeout(() => {
      chrome.action.setBadgeText({ text: "" });
      timer = undefined;
    }, 1000);
  }
});
