document.getElementById("contentForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var title = document.getElementById("titleInput").value;
  var content = document.getElementById("contentInput").value;

  if (title && content) {
    var contentItem = document.createElement("div");
    contentItem.className = "content-item";
    contentItem.innerHTML = "<h2>" + title + "</h2><p>" + content + "</p>";

    document.getElementById("contentList").appendChild(contentItem);

    document.getElementById("titleInput").value = "";
    document.getElementById("contentInput").value = "";
  }
});
