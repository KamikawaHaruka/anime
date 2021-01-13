document.getElementById('target1').addEventListener('click',function() {

  //移動アニメーション
  anime({
    targets: '#target1',
    translateX: 250
  });
  
});


document.getElementById('target2').addEventListener('click',function() {
  
    //回転アニメーション
  anime({
    targets: '#target2',
    rotate: 1800
  });
  
});


document.getElementById('target3').addEventListener('click',function() {
  
    //拡大縮小アニメーション
  anime({
    targets: '#target3',
    scale: 0.5
  });
  
});