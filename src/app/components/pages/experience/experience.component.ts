import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  jobs:Job[] = [
    {
      companyName: "SQLink Group", 
      name: "Full Stack developer", 
      startDate: new Date(2020, 8), 
      finishDate: new Date(2022, 3),
      iconUrl: "/assets/images/SQLink-icon.png",
      description: ["•	Developing inner company application for purchase requests from scratch by myself (planning, designing, coding, building DB, uploading versions)", 
                    "•	The application includes various logic for approval loops purchase requests, authentication system,  constant interaction with Sap API where is all the data located, queue of scheduled tasks for updating the application DB on SQL Server and sending notifications, admin application management",
                    "•	The web application built using .NET 5 MVC, JQuery, Ajax, Bootstrap",
                    "•	Version management via Bitbucket and TortoiseGit"
                  ]
    },
    {
      companyName: "Matrix", 
      name: "Full Stack developer", 
      startDate: new Date(2019, 6), 
      finishDate: new Date(2020, 8),
      iconUrl: "/assets/images/matrix.jpg",

      description: ["•	Working on  ELAL company projects", 
                    "•	Creating a fully functioning responsive web pages using Angular 8",
                    "•	Server side developing with  ASP.NET Web Forms by creating layouts, managers, web parts for SharePoint and using its API",
                    "•	Building HTML/JavaScript pages using Bootstrap and JQuery and Ajax"
                  ]
    },
    {
      companyName: "Freelance", 
      name: "HTML/JavaScript and .NET developer", 
      startDate: new Date(2018, 3), 
      finishDate: new Date(2020, 8),
      iconUrl: "/assets/images/freelance.png",
      description: ["•	Developing responsive projects and OOP projects for students from  universities and  colleges."]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
