var projectList = []
$.getJSON('../../data/projects.json')
    .done(function (data) {
        data.forEach(function (project) {
            var projectDict = {};
            projectDict["name"] = project.name;
            projectDict["desc"] = project.description;
            projectDict["link"] = project.link;
            projectDict["technology"] = project.technology;
            projectDict["picture"] = project.picture;
            projectList.push(projectDict);
        })
    });
