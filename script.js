let count = 0;
function changeCount(num) {
  count += num;
  document.getElementById("count").innerHTML = count;
}
function Reset() {
  count = 0;
  document.getElementById("count").innerHTML = count;
}
