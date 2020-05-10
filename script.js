
     function playAudio(url) {
       new Audio(url).play();
     }




// (function(){
//   navigator.getMedia= (navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia);
//
//   navigator.getMedia(
//     //constraints
//     {video:true,audio:false},
//
//     function(stream){
//       var video = document.getElementsByTagName("video")[0];
//       video.src=window.URL.createObjectURL(stream);
//       video.play();
//     },
//     function(error){
//       console.log(error);
//     }
//
// })();
