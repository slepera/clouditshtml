
function generateRandomNumber() {
    let x = Math.floor((Math.random() * 100) + 1);
    document.getElementById("random_number").innerHTML = x;
}



function light(status) {
    var pic;
    if (status == 'off') {
      pic = "bulb_off.png"
    } else {
      pic = "bulb_on.png"
    }
    document.getElementById('myImage').src = pic;
  }