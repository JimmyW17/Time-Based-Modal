// setTimeout(function(){alert("Hello")}, 3000)

var modal = document.getElementById("modal_email");

// var loading = document.getElementsByClassName("loading");
// for (x = 0; x < loading.length; x++) {
//   var ld = loading
//   setTimeout(function() {
//     loading[x].style.visibility = 'visible';
//   },(x+1)*750);
// }
// console.log(loading.length);

setTimeout(function() {
  modal.style.opacity = "1";
},3000)

var cancel = document.getElementById('cancel');
cancel.addEventListener('click', function() {
  modal.style.display = 'none';
})
