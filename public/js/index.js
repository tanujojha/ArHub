//
// $("#floatingPassword").keypress(function() {
//   $(".showbtn").css("display", "block");
// });
//
// if ($("#floatingPassword").val().length == 0){
//   $(".showbtn").css("display", "none");
// }else{
//   $(".showbtn").css("display", "block");
// }



//
// $("#floatingPassword").focus(function(){
//   if ($("#floatingPassword").val().length == 0){
//     console.log("first " + $("#floatingPassword").val().length)
//     $(".showbtn").css("display", "none");
//   }else{
//     console.log("else " + $("#floatingPassword").val().length)
//     $(".showbtn").css("display", "block");
//   }
// })


//signup page

$("#floatingPassword").keydown(function() {              // signup page password show btn display toggle
  $(".showbtn").css("display", "block");
});



$(".showbtn").click(function() {                              // create account password visibility toggle
  if ($("#floatingPassword").attr("type") === "password") {
    $("#floatingPassword").attr("type", "text");
    $(".showbtn").text("Hide");
  } else {
    $("#floatingPassword").attr("type", "password");
    $(".showbtn").text("Show");
  }
});



// signup page create account popup

$(".creaccpaswd").keydown(function() {            // create account password show btn display toggle
  $(".creaccshowbtn").css("display", "block");
});


$(".creaccshowbtn").click(function() {                    // create account password visibility toggle
  if ($(".creaccpaswd").attr("type") === "password") {
    $(".creaccpaswd").attr("type", "text");
    $(".creaccshowbtn").text("Hide");
  } else {
    $(".creaccpaswd").attr("type", "password");
    $(".creaccshowbtn").text("Show");
  }
});


$(".fpa").click(function(){                   //display forgot password form
  $(".fopofo").css("display", "block");
})


$(".caa").click(function(){                 //display create account form
  $(".createacc").css("display", "block");
})

$(".bi").click(function(){                              //cross button of create account and forgot password form
  $(".createacc, .fopofo").css("display", "none");
});


// ************************************************************************

//log forgot password email

$(".fopabtn").click(function(){
  var foemdata = $(".fopaem").val();
  console.log(foemdata);
});


//Log create account email

$(".creaccbtn").click(function(){
  var creaccdata = $(".creaccfn, .creaccln, .creaccem, .creaccpaswd").val();
  console.log(creaccdata);
});
