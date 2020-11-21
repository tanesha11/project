function touching(box1,box2) {
    if(box1.x-box2.x<box1.width/2+box2.width/2 && box2.x-box1.x<box2.width/2+box1.width/2 && box1.y-box2.y<box1.height/2+box2.height/2 && box2.y-box1.y<box2.height/2+box1.height/2) {
      return true;
    }
    else{
      return false;
    } 
  }
  
  function bounce(box1,box3) {
    if(box1.x-box3.x<box1.width/2+box3.width/2 && box3.x-box1.x<box3.width/2+box1.width/2 && box1.y-box3.y<box1.height/2+box3.height/2 && box3.y-box1.y<box3.height/2+box1.height/2) {
       box1.velocityX = box1.velocityX*-1;
       box1.velocityY = box1.velocityY*-1;
  
       box3.velocityX = box3.velocityX*-1;
       box3.velocityY = box3.velocityY*-1;
    }
  }