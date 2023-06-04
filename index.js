const fs = require('fs');
const ytdl = require('ytdl-core');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(` 
    <form action="/download" method="post">
      <label for="videoUrl">Enter the YouTube video URL:</label>
      <input type="text" id="videoUrl" name="videoUrl" required>
      <br>
      <label for="fileName">Enter the video file name:</label>
      <input type="text" id="fileName" name="fileName" required>
      <br>
      <button type="submit">Download</button>
    </form>
  `);
});

app.post('/download', async (req, res) => {
  const videoUrl = req.body.videoUrl;
  const fileName = req.body.fileName;

  if (!ytdl.validateURL(videoUrl)) {
    res.status(400).send('Invalid YouTube video URL');
    return;
  }

  const outputFilename = fileName + '.mp4';

  // Delete the previous video file if it exists
  if (fs.existsSync(outputFilename)) {
    fs.unlinkSync(outputFilename);
  }

  const videoInfo = await ytdl.getInfo(videoUrl);
  const videoFormat = ytdl.chooseFormat(videoInfo.formats, { quality: 'highestaudio' });

  ytdl(videoUrl, { format: videoFormat })
    .pipe(fs.createWriteStream(outputFilename))
    .on('finish', () => {
      console.log('Video downloaded successfully');
      res.download(outputFilename);
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
