# YouTube Playlist Reverser

A Chrome extension that makes YouTube playlists play in reverse.


## Installation

The easiest method of installing the extension is by loading it unpacked. This
can be achieved by following these steps:

 1. Download the source as a ZIP and unzip it.
 2. Open Chrome's extensions page.

    ![Accessing the extensions page.](Documentation/extensions.png?raw=true)

 3. Enable the developer mode.

    ![Enabling the developer mode.](Documentation/developer-mode.png?raw=true)

 4. Load the `Source` folder as an unpacked extension.

    ![Loading the unpacked extension.](Documentation/load-unpacked.png?raw=true)

Alternatively, you can load the extension as a CRX, but that requires its ID to
be whitelisted, which won't be detailed here.

Once the extension is installed, make sure every tab where you want to use it is
reloaded, so it can inject its functionality.


## Usage

It's suggested to pin the extension for identifying whether the playlist
reversing is enabled or not.

![Pinning the extension.](Documentation/pinning.png?raw=true)

While the extension's icon is greyed out, the reversing functionality is
dormant. Pressing the extension's icon at this point will make it bright red and
activate its functionality, which can be turned off by pressing it again.

![Enabling the reverser.](Documentation/enabling.png?raw=true)

The extension works globally and will affect every tab and window of every
profile where it's active.


## Known Issues and Limitations

- The extension operates by navigating to the previous video before the end of
  the current one. Due to this, up to a second can be cut off from the end of
  the currently running video.
- Fast forwarding beyond the end of the currently running video will cause the
  default logic to take precedence, causing it to navigate to the next video
  instead of the previous one.
- Despite what YouTube's user interface would suggest, you can't navigate from
  the first video to the last one by going backwards. This causes the 1st and
  the 2nd video in a playlist to continuously repeat once the beginning of the
  playlist is reached.
- The extension was configured to operate exclusively on the youtube.com domain.
  It won't work on localized or alternative domains.


## License

The extension's source code and assets are released under the Unlicense, making
it essentially public domain.


## Credits

The extension was developed by Gabor Soos.


## Version History

- Version 0.1.0, December 5th, 2021
  - The initial release.
