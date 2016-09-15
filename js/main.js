window.onload = function(){
  document.getElementById('color-change').addEventListener('click',function(){
    /* In HTML colors are represented in a 6-digit hexadecimal string
    The values range from 0-9 and A-F*/
    var letters = '0123456789ABCDEF';
    //Colors in HTML are always prepended with a #
    var color = '#';
    //Loop 6 times and randomly select a character from the letters variable
    //Then concatanate to the color string
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    //set the background color of <body> to the random color
    document.body.style.backgroundColor = color;
  });
};
