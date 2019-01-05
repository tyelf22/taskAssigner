function fetchIssues() {
    var issues = JSON.parse(localStorage.getItem('issues'))  //convert 'issues' into a JSON object
    var issuesList = document.getElementById('issuesList')

    issuesList.innerHTML = '';

    for (var i = 0; i < issues.length; i++) {  //loop through each object item and assign variable
        var id = issues[i].id;
        var desc = issues[i].description;
        var severity = issues[i].severity;
        var assignedTo = issues[i].assignedTo;
        var staus = issues[i].status;
    }
        issuesList.innerHTML += '<div class="well">' +
                                ''
    
}