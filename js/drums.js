$(document).ready(function(){


  function Drum(id, color, sound){
    this.id = id;
    this.color = color;
    this.sound = sound;
  }

  function makeSquares(){
    var sounds = ['cymbals.mp3', 'Floor_Tom_Extra_Hard.mp3', 'Kick_Hard.mp3', 'kick_inside_hard.mp3', 'Rack_Tom_Extra_Hard.mp3', 'rack_tom_nosnares_extra_hard.mp3','ride_middle_hard.mp3','ride_near_bell.mp3', 'Snare_Hard.mp3','Snare_Hard_Rimshot.mp3', 'ride_edge_crash.mp3','Floor_Tom_Soft.mp3', 'Snare_Med.mp3', 'Kick_Soft.mp3', 'ride_bell.mp3', 'Kick_Med.mp3']
    var drums = []
    var colors = ['#ef435e', '#f79f99', '#fdcfaf', '#ced2af', '#86b2a3']
    var $machine = $('.machine');
    var currentColor
    for(var i = 0; i < 16; i++){
      var color = colors[Math.floor(Math.random()*colors.length)];
      var id = 'pad' + i
      var drum = new Drum(id, color, sounds[i])
      drums.push(drum)
      var $audio = $('<audio src="audio/' + drum.sound + '"id=' + drum.id + '>')
      var $pad = $('<div class="pad" id=' + id + '>').on('click', function(){
        this.firstChild.play()
        drums.forEach(function(drum){
          if(drum.id === $(this).attr('id')){
            currentColor = drum.color
          }
        }.bind(this))
        $(this).css({background: '-webkit-radial-gradient(center,white,' + currentColor + ')'})
        setTimeout(function(){ $(this).css('background', '');}.bind(this), 500)})
        $machine.append($pad)
        $pad.append($audio)
        document.styleSheets[0].insertRule('#' + id + ':hover {  background:' + color + '}', 0)
    }
  }

  makeSquares();

});

