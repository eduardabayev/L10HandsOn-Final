$(document).ready(function(){
    $("social").hover(function(){
        $(this).addClass("a.social:hover");
    });
});

let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let gitObject = JSON.parse(this.responseText);
    document.getElementById("gitRepo").innerHTML = gitObject[1].name;
  }
};
gitHubRequest.open("GET", "https://api.github.com/users/eduardabayev/repos", true);
gitHubRequest.send();
