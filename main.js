document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

function saveIssue(e) {
    var issueDesc = document.getElementById('issueDescInput').value;
    var issueSeverity = document.getElementById('issueSeverityInput').value;
    var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
    var issueId = chance.guid();
    var issueStatus = 'Open';

    var issue = {
        id: issueId,
        description: issueDesc,
        severity: issueSeverity,
        assignedTo: issueAssignedTo,
        status: issueStatus
    }

    console.log(e);

    if (localStorage.getItem('issues') == null) {
        var issues = [];
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    } else {
        var issues = JSON.parse(localStorage.getItem('issues'));
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    }

    $('issueInputForm').reset();

    fetchIssues();

    e.preventDefault();
}

function deleteIssue(id) {     //need to fix this!
    var issues = JSON.parse(localStorage.getItem('issues'));

    for (var i = 0; i < issues.length; i++) {
        if (issues[i].id == id) {
            var removeItems = JSON.parse(localStorage.removeItem('issues'));
            issues[i].removeItems;
        }
    }

    localStorage.setItem('issues', JSON.stringify(issues));

    fetchIssues();
}

function setStatusClosed(id) {
    var issues = JSON.parse(localStorage.getItem('issues'));

    for (var i = 0; i < issues.length; i++) {
        if (issues[i].id == id) {
            issues[i].status = 'Closed';
        }
    }

    localStorage.setItem('issues', JSON.stringify(issues));

    fetchIssues();

}


function fetchIssues() {
    var issues = JSON.parse(localStorage.getItem('issues'))  //convert 'issues' into a JSON object
    var issuesList = document.getElementById('issuesList')

    issuesList.innerHTML = '';

    for (var i = 0; i < issues.length; i++) {  //loop through each object item and assign variable
        var id = issues[i].id;
        var desc = issues[i].description;
        var severity = issues[i].severity;
        var assignedTo = issues[i].assignedTo;
        var status = issues[i].status;

        issuesList.innerHTML += '<div class="well">' +
            '<h6>Issue ID: ' + id + '<h6>' +
            '<p><span class="label label-info">' + status + '</span></p>' +
            '<h3>' + desc + '</h3>' +
            '<p><span class="glyphicon glyphicon-time"></span>' + severity + '</p>' +
            '<p><span class="glyphicon glyphicon-user"></span>' + assignedTo + '</p>' +
            '<a href="#" onclick="setStatusClosed(\'' +id+'\')" class="btn btn-warning">Close</a>' +
            '<a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn-danger">Delete</a>' +
            '</div>';
    }

}



