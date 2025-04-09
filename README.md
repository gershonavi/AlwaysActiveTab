# AlwaysActiveTab Chrome Extension

AlwaysActiveTab is a Chrome extension designed to prevent media from pausing when you switch tabs. This is particularly useful for users who want to listen to music or watch videos without keeping the tab active in the foreground. It works by overriding the Page Visibility API to make the current tab always appear active to the webpage.

## Features

- Keeps video and audio playing in background tabs.
- Simple one-click activation and deactivation.
- Works with most media sites, including YouTube, Facebook, and Spotify.

## How It Works

The extension manipulates the Page Visibility API so that, as far as any website is concerned, the tab with media playing is always in the foreground, even when it's not. This prevents the website from pausing media playback when the user switches to another tab.

## Installation Instructions

### Prerequisites

You need Google Chrome installed on your computer.

### Loading the Extension Locally

1. **Download the Extension**:
   - Navigate to the [Releases page](https://github.com/gershonavi/AlwaysActiveTab/releases) of the AlwaysActiveTab GitHub repository.
   - Download the latest release zip file.

2. **Unpack the Downloaded File**:
   - Extract the zip file to a folder on your computer.

3. **Load the Extension in Chrome**:
   - Open Google Chrome.
   - Enter `chrome://extensions/` in the address bar.
   - Enable Developer Mode by toggling the switch at the top-right corner.
   - Click `Load unpacked`.
   - Navigate to the folder where you extracted the extension files.
   - Select the folder and click `Open`.

### Usage

- Once installed, you will see the AlwaysActiveTab icon in the Chrome toolbar.
- Click the icon whenever you want to keep media playing in the background. A popup will appear with a button labeled "Activate". Click it to make the current tab always active.
- To deactivate, simply refresh the tab or close and reopen it.

## Contribution

Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
