var sb = {
    song: null,
    init: function () {
      sb.song = new Audio();
      sb.listeners();
    },
    listeners: function () {
      $("button").click(sb.play);
    },
    play: function (e) {
      sb.song.src = e.target.value;
      sb.song.play();
    }
  };
  $(document).ready(sb.init);    