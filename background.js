let timer = undefined;

chrome.action.onClicked.addListener(async (tab) => {
  clearTimeout(timer);
  chrome.action.setBadgeBackgroundColor({ color: "white" });
  chrome.action.setBadgeText({ text: "🔄" });

  try {
    const { url, token, path, tags } = await chrome.storage.sync.get({
      url: "http://127.0.0.1:27123",
      token: "",
      path: "Read%20later.md",
      tags: "#todo #read_later",
    });

    if (!token) {
      chrome.runtime.openOptionsPage();
      throw new Error();
    }

    let tagsFormatted = tags.trim();
    if (tagsFormatted.length !== 0) {
      tagsFormatted = `${tagsFormatted} `;
    }

    const res = await fetch(`${url}/vault/${path}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "*/*",
        "Content-Type": "text/markdown",
      },
      body: `- [ ] ${tagsFormatted}${tab.url}`,
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
