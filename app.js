function fenceSelection() {
  var fenceChoice = document.getElementById("fence").value;
  console.log(fenceChoice);
  if (fenceChoice === "3ft-picket") {
    document.getElementById("picket3").style.display = "block";
    document.getElementById("fence-selector").style.display = "none";
  }

}

function goBack() {
  document.getElementById("picket3").style.display = "none";
  document.getElementById("fence-selector").style.display = "block";
}

function Calculate() {
  var buttonValue = document.getElementById('btn').value;
  if (document.getElementById("length").value === "") {
    document.getElementById("label-description").innerHTML = "Please enter a length";
    document.getElementById("label-description").style.color = "red";
    return;
  }
  if (buttonValue === "calculate") {
    var length = document.getElementById("length").value;
    var lengthInFeet = length * 3.28084;
    var rails = Math.ceil((length / 3.6) * 2);
    var posts = Math.ceil((length / 1.8) + 1);
    var postcrete = Math.ceil(posts * 2);
    var pickets = Math.ceil(length / 0.125);
    document.getElementById("label-description").innerHTML = "Fence Length (Meters)";
    document.getElementById("label-description").style.color = "black";
    document.getElementById("pickets").innerHTML = pickets;
    document.getElementById("rails").innerHTML = rails;
    document.getElementById("posts").innerHTML = posts;
    document.getElementById("postcrete").innerHTML = postcrete;
    document.getElementById("btn").value = "reset";
  } else {
    document.getElementById("length").value = "";
    document.getElementById("pickets").innerHTML = "-";
    document.getElementById("rails").innerHTML = "-";
    document.getElementById("posts").innerHTML = "-";
    document.getElementById("postcrete").innerHTML = "-";
    document.getElementById("btn").value = "calculate";
  }
}