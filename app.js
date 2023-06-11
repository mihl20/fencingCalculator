function fenceSelection() {
  var fenceChoice = document.getElementById("fence").value;
  console.log(fenceChoice);
  if (fenceChoice === "3ft-picket") {
    document.getElementById("picket3").style.display = "block";
    document.getElementById("fence-selector").style.display = "none";
  }

}

const resetPicket = () => {
  document.getElementById("length").value = "";
  document.getElementById("pickets").value = "";
  document.getElementById("rails").innerHTML = "-";
  document.getElementById("posts").innerHTML = "-";
  document.getElementById("postcrete").innerHTML = "-";
  document.getElementById("btn").value = "calculate";
}

function goBack() {
  document.getElementById("picket3").style.display = "none";
  document.getElementById("fence-selector").style.display = "block";
  resetPicket();
}

function Calculate() {
  var buttonValue = document.getElementById('btn').value;
  if (document.getElementById("length").value === "") {
    document.getElementById("label-description").innerHTML = "Please enter a length";
    document.getElementById("label-description").style.color = "red";
    document.getElementById("label-description").style.fontWeight = "600";
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
    document.getElementById("label-description").style.color = "white";
    document.getElementById("pickets").value = pickets;
    document.getElementById("rails").innerHTML = rails;
    document.getElementById("posts").innerHTML = posts;
    document.getElementById("postcrete").innerHTML = postcrete;
    document.getElementById("btn").value = "reset";
  } else {
    resetPicket();
  }
}