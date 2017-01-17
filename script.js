$(function () {
  var result = 0;
  var operator = false;


  $('#equals').on('click', function () {
    isDone = true;
  });

  $('#plus').on('click', function () {
    operator = true;
  });

  $('#zero').on('click', function () {

    if (operator === false) {
      $('<h1>0</h1>').appendTo('#screen');
    } else {
      $('#screen').empty();
      $('<h1>0</h1>').appendTo('#screen');
      operator = false;
    }

  });

  $('#one').on('click', function () {
    $('<h1>1</h1>').appendTo('#screen');
  });

  $('#two').on('click', function () {
    $('<h1>2</h1>').appendTo('#screen');
  });

  $('#three').on('click', function () {
    $('<h1>3</h1>').appendTo('#screen');
  });

  $('#four').on('click', function () {
    $('<h1>4</h1>').appendTo('#screen');
  });

  $('#five').on('click', function () {
    $('<h1>5</h1>').appendTo('#screen');
  });
  $('#six').on('click', function () {
    $('<h1>6</h1>').appendTo('#screen');
  });

  $('#seven').on('click', function () {
    $('<h1>7</h1>').appendTo('#screen');
  });

  $('#eight').on('click', function () {
    $('<h1>8</h1>').appendTo('#screen');
  });

  $('#nine').on('click', function () {
    $('<h1>9</h1>').appendTo('#screen');
  });

  $('#allclear').on('click', function () {
    $('#screen').empty();
  });

});
