# YouTube Audio Downloader

This Node.js script allows you to download a video from YouTube in MP4 format. ffmpeg doesn't have to be installed on your system, it will be installed with the node.js packages. See more in installation, step 2.

## Prerequisites

- Node.js installed on your computer
- `@ffmpeg-installer/ffmpeg` package

## Installation

1. Clone or download the script from the repository
2. Run `npm install` to install the required packages, including ffmpeg.

## Usage

1. Open a terminal and navigate to the directory where the script is located
2. Run `node index.js` to start the script
3. Enter the YouTube video URL when prompted
4. Enter the file name to save the audio when prompted (do not include the file extension, it will be automatically set to `.mp4`)
5. Wait for the audio to be downloaded and converted to MP4 format
6. Find the downloaded audio file in the same directory as the script

## Notes

- The script requires the `ffmpeg` library to be installed as a system library on your computer.
- On Windows, the script requires a special configuration to run `ffmpeg` due to Electron packaging.
- The temporary `video.mp4`or `audio.mp4` file used during the conversion process will be deleted automatically after the audio file is created.

## Credits

- [Perplexity](https://www.perplexity.ai/) (Script Creator)
- [ChatGPT](https://github.com/ChatGPT) (Script Helper) based on the original script by [Perplexity](https://www.youtube.com/channel/UC4JX40jDee_tINbkjycV4Sg). It is licensed under the [MIT License](https://github.com/ChatGPT/youtube-audio-downloader/blob/main/LICENSE).
- Me (Major Helper)

The following packages were used to create this script:

- [ytdl-core](https://www.npmjs.com/package/ytdl-core)
- [@ffmpeg-installer/ffmpeg](https://www.npmjs.com/package/@ffmpeg-installer/ffmpeg)
- [fluent-ffmpeg](https://www.npmjs.com/package/fluent-ffmpeg)
- [express](https://www.npmjs.com/package/express)
- [ffmpeg-static](https://www.npmjs.com/package/ffmpeg-static)