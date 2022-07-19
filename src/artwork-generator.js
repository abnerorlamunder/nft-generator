import FfmpegCommand from "fluent-ffmpeg";

export default function artworkGenerator() {
  console.log('Artwork generator WIP')
}

async function generateOne({ border, background, icon, type }) {
  return new Promise((resolve, reject) => {
    const start_time = new Date();
    var command = new FfmpegCommand();
    command
      .input(`input/traits/type/${type}.mp4`)
      .input(`input/traits/border/${border}.png`)
      .input(`input/traits/background/${background}.png`)
      .input(`input/traits/icon/${icon}.png`)
      .complexFilter(
        [
          '[1:v]scale=1080:1080[z];[0:v][z]overlay[tmp]',
          '[2:v]scale=1080:1080[z2];[tmp][z2]overlay[tmp]',
          '[3:v]scale=267:30[z3];[tmp][z3]overlay=(main_w-overlay_w)/2:(main_h-overlay_h - 45)[tmp]',
        ], 'tmp')
      .saveToFile(`output/video.mp4`)
      .on('end', () => {
        const end_time = new Date();
        console.log('Generated mp4 within ' + ((end_time.getTime() - start_time.getTime()) / 1000).toString());
        resolve()
      })
      .on('error', (err) => {
        return reject(new Error(err))
      })
  })
}