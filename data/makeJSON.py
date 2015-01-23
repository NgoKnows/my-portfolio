__author__ = 'Alex'

import json

project_names = ["Everything Sports", "NBA Analysis and Web Crawler", "My Portfolio"]
project_descriptions = ["Fantasy Basketball tools to help users succeed!",
                        "NBA Statistics web crawler and analysis of statistics",
                        "My personal website, you're on it!"]
github_links = ["https://github.com/NgoKnows/Everything-Sports",
                "https://github.com/NgoKnows/NBA-Analysis",
                "https://github.com/NgoKnows/my-portfolio"]

#1: android, 2: java, 3: python, 4: html, 5: js, 6: css, 7: angular
technologies = [[3, 4, 5, 6, 7],[3],[3, 4, 5, 6, 7]]
project_list = []
for idx, project_name in enumerate(project_names):
    project = dict()
    project["name"] = project_name
    project["description"] = project_descriptions[idx]
    project["link"] = github_links[idx]
    project["technology"] = technologies[idx]
    project_list.append(project)

with open('projects.json', 'w') as outfile:
    json.dump(project_list, outfile)


