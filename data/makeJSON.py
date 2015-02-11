__author__ = 'Alex'

import json

project_names = ["Everything Sports",
                 "Zillow HackHousing Hackathon | Hood Scout",
                 "NBA Analysis and Web Crawler",
                 "My Portfolio"]
project_descriptions = ["Fantasy Basketball tools to help users succeed!",
                        "Helping people find their perfect neighborhood",
                        "NBA Statistics web crawler and analysis of statistics",
                        "My personal website, you're on it!"]
github_links = ["https://github.com/NgoKnows/Everything-Sports",
                'https://github.com/ZillowHackathonTeamHeat/HeatMap',
                "https://github.com/NgoKnows/NBA-Analysis",
                "https://github.com/NgoKnows/my-portfolio"]


#1: android, 2: java, 3: python, 4: html, 5: js, 6: css, 7: angular, 8: googlemaps
technologies = [[3, 4, 5, 6, 7, 8], [4, 5, 6, 9], [3],[3, 4, 5, 6, 7]]
pictureURLS = ["../../img/projects/fantasy.png",
               "../../img/projects/2015-02-10 20_43_54-Heatmaps.png",
               "../../img/projects/scatter.png",
               "../../img/projects/portfolio.png"]
project_list = []
for idx, project_name in enumerate(project_names):
    project = dict()
    project["name"] = project_name
    project["description"] = project_descriptions[idx]
    project["link"] = github_links[idx]
    project["technology"] = technologies[idx]
    project["picture"] = pictureURLS[idx]
    project_list.append(project)

with open('projects.json', 'w') as outfile:
    json.dump(project_list, outfile)


