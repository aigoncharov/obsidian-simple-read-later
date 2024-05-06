const saveOptions = ({ token, path, tags }) => {
  const status = document.getElementById("status");
  status.textContent = "Saving...";

  chrome.storage.sync.set({ token, path, tags }, () => {
    status.textContent = "Options saved.";
  });
};

const restoreOptions = () => {
  const status = document.getElementById("status");
  status.textContent = "Loading...";

  chrome.storage.sync.get(
    {
      token: "",
      path: "Read%20later.md",
      tags: "#todo #read_later",
    },
    (items) => {
      document.getElementById("token").value = items.token;
      document.getElementById("path").value = items.path;
      document.getElementById("tags").value = items.tags;

      status.textContent = "";
    }
  );
};

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("settings").addEventListener("submit", (e) => {
  e.preventDefault();
  saveOptions(Object.fromEntries(new FormData(e.target)));
});
