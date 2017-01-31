var apiCall = function(){
var input = $("#input").val();
var searchTerm = "&gsrsearch=" + input;
 $.ajax({
  url: "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=search&exsentences=1&exlimit=max&exintro=1&explaintext=1&gsrlimit=10&gsrprop=snippet%7Ctitlesnippet" + searchTerm,
  jsonp: "callback",
  dataType: "jsonp",
  data: {
    q: "select title,abstract,url from search.news where query=\"cat\"",
    format: "json"
  },
  success: function(response) {
    //  $("#test").html(pagez[x].extract);
    // console.log(response[0]);
    $("#results").html('')
    var page = response.query.pages
    for (var x in page){
      $("#results").prepend("<li>"+ page[x].title + "<br>" + page[x].extract + "</li>");
      // result += page[x];
      // console.log(page[x].title);
      };
     }
  });
}

$("#sub-btn").click(function() {
  return apiCall();
});

$("#input").on('keyup', function (e) {
  if (e.keyCode == 13){
  return apiCall();
   }
});
