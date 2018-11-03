var fs = require('fs');
var youtubedl = require('youtube-dl');
var video = youtubedl('https://www.youtube.com/watch?v=IwLSrNu1ppI',
  ['--format=18'],
  { cwd: __dirname });

  video.on('info', function(info) {
    console.log('Nedlasting startet.');
    console.log('filnavn: ' + info._filename);
    console.log('størrelse: ' + info._size );
  } );

  video.pipe(fs.createWriteStream('youtube.mp4'));
