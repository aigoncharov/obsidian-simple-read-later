# obsidian-simple-read-later

Save URLs to your Obsidian vault with a click of a button to read them later!

![](./pics/ext_res.png)

> *Requires Obsidian running in background!*

[![](https://img.shields.io/chrome-web-store/v/fnahmopebdcdngkmejdodljgccofeigl
)](https://chromewebstore.google.com/detail/obsidian-simple-read-late/fnahmopebdcdngkmejdodljgccofeigl)

[![](https://img.shields.io/badge/firefox-1.0.0-blue)](https://addons.mozilla.org/en-US/firefox/addon/obsidian-simple-read-later/)

## Installation

1. Install and enable [Obsidian Local REST API](https://github.com/coddingtonbear/obsidian-local-rest-api) extension.
2. Enable non-encrypted HTTP server for Obsidian Local REST API.
    ![](./pics/ext_local_rest_config.png)
3. Copy the API key
4. When you first try to save any link, the extension is going to open its settings. Insert the API key there and click "Save".
5. Enjoy!

## Config

### Path in Obsidian

By default the extension saves your URLs to "Read Later" note at the root of your vault. 

You can set it to any note you want in a fomat: `DIRECTORY/FILE_NAME.md`

Example: `TODO/Read later.md`
