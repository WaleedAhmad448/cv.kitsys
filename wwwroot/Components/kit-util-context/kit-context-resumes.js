define(["ko"], function (ko) {
  if(!ko.KitContext)
    ko.KitContext={};
  if(!ko.KitContext.Resumes){
    let fakeData={
      'waleed':{
          
        "normalizedObj": {
            "items": {
                "personalInfo": {
                    "sLabel": "Personal Information",
                    "items": {
                        "photo": {
                            "fn": "photo"
                        },
                        "fName": {
                            "value": "Waleed",
                            "fn": "fName"
                        },
                        "sName": {
                            "fn": "sName"
                        },
                        "tName": {
                            "fn": "tName"
                        },
                        "lName": {
                            "value": "Amer",
                            "fn": "lName"
                        },
                        "country": {
                            "value": "1",
                            "fn": "country"
                        },
                        "bdate": {
                            "fn": "bdate"
                        },
                        "natioality": {
                            "fn": "natioality"
                        },
                        "gender": {
                            "value": "1",
                            "fn": "gender"
                        },
                        "mStatus": {
                            "value": "1",
                            "fn": "mStatus"
                        },
                        "headline": {
                            "value": "Web Developer",
                            "optional": 1,
                            "fn": "headline"
                        },
                        "coverLetter": {
                            "fn": "coverLetter"
                        }
                    },
                    "fn": "personalInfo"
                },
                "contacts": {
                    "sLabel": "Contact Me",
                    "items": {
                        "country": {
                            "value": "1",
                            "fn": "country"
                        },
                        "city": {
                            "value": "1",
                            "fn": "city"
                        },
                        "email": {
                            "value": "waleed.3amer@hotmail.com",
                            "fn": "email"
                        },
                        "tel": {
                            "value": "+967 770 333 505",
                            "fn": "tel"
                        },
                        "mobiles": {
                            "values": [
                                {}
                            ],
                            "fn": "mobiles"
                        },
                        "address": {
                            "value": "صنعاء مذبح",
                            "fn": "address"
                        },
                        "fb": {
                            "value": "waleed.3amer",
                            "optional": 1,
                            "fn": "fb"
                        },
                        "twitter": {
                            "value": "waleed_3amer1",
                            "optional": 1,
                            "fn": "twitter"
                        },
                        "linkedIn": {
                            "fn": "linkedIn"
                        },
                        "github": {
                            "value": "waleed3amer",
                            "optional": 1,
                            "fn": "github"
                        },
                        "instagram": {
                            "value": "waleed3amer",
                            "optional": 1,
                            "fn": "instagram"
                        },
                        "website": {
                            "value": "https://kitsys.co",
                            "optional": 1,
                            "fn": "website"
                        }
                    },
                    "optional": 1,
                    "fn": "contacts",
                    "gn": "contacts"
                },
                "profile": {
                    "items": {
                        "coverLetter": {
                            "fn": "coverLetter"
                        }
                    },
                    "optional": 1,
                    "fn": "profile",
                    "gn": "profile"
                }
            },
            "citems": [
                {
                    "sLabel": "Education",
                    "sIcon": "fas fa-graduation-cap",
                    "citems": [
                        {
                            "sLabel": "1Bachelor’s Degree Information",
                            "items": {
                                "majorName": {
                                    "sLabel": " المؤهلات الدراسية1",
                                    "value": "IT",
                                    "fn": "majorName"
                                },
                                "orgName": {
                                    "value": "FCIT, Sana'a University",
                                    "fn": "orgName"
                                },
                                "country": {
                                    "value": "1",
                                    "fn": "country"
                                },
                                "city": {
                                    "value": "Sana'a",
                                    "fn": "city"
                                },
                                "sdate": {
                                    "value": "2014-01-01",
                                    "fn": "sdate"
                                },
                                "edate": {
                                    "value": "2018-01-01",
                                    "fn": "edate"
                                },
                                "isPresent": {
                                    "fn": "isPresent"
                                },
                                "description": {
                                    "fn": "description"
                                }
                            },
                            "fn": "BachelorsDegree",
                            "gn": "educations.bachelors"
                        },
                        {
                            "items": {
                                "majorName": {
                                    "value": "English Language",
                                    "fn": "majorName"
                                },
                                "orgName": {
                                    "value": "A2Z School of English ",
                                    "fn": "orgName"
                                },
                                "country": {
                                    "value": "1",
                                    "fn": "country"
                                },
                                "city": {
                                    "value": "Sana'a",
                                    "fn": "city"
                                },
                                "sdate": {
                                    "value": "2021-01-01",
                                    "fn": "sdate"
                                },
                                "edate": {
                                    "value": "2016-01-01",
                                    "fn": "edate"
                                },
                                "isPresent": {
                                    "fn": "isPresent"
                                },
                                "description": {
                                    "fn": "description"
                                }
                            },
                            "fn": "AssociateDegree",
                            "gn": "educations.associates"
                        },
                        {
                            "items": {
                                "majorName": {
                                    "value": "Android Course",
                                    "fn": "majorName"
                                },
                                "orgName": {
                                    "value": "Computer Center, Sana'a University",
                                    "fn": "orgName"
                                },
                                "country": {
                                    "value": "1",
                                    "fn": "country"
                                },
                                "city": {
                                    "value": "Sana'a",
                                    "fn": "city"
                                },
                                "sdate": {
                                    "value": "2016-01-01",
                                    "fn": "sdate"
                                },
                                "edate": {
                                    "value": "2016-01-01",
                                    "fn": "edate"
                                },
                                "isPresent": {
                                    "fn": "isPresent"
                                },
                                "description": {
                                    "fn": "description"
                                }
                            },
                            "fn": "Courses",
                            "gn": "educations.courses"
                        },
                        {
                            "items": {
                                "majorName": {
                                    "fn": "majorName"
                                },
                                "orgName": {
                                    "fn": "orgName"
                                },
                                "country": {
                                    "value": "1",
                                    "fn": "country"
                                },
                                "city": {
                                    "fn": "city"
                                },
                                "sdate": {
                                    "fn": "sdate"
                                },
                                "edate": {
                                    "fn": "edate"
                                },
                                "isPresent": {
                                    "fn": "isPresent"
                                },
                                "description": {
                                    "fn": "description"
                                }
                            },
                            "fn": "MiddleSchool",
                            "gn": "educations.schools"
                        }
                    ],
                    "fn": "educations",
                    "gn": "educations"
                },
                {
                    "items": {
                        "native": {
                            "value": "العربية",
                            "fn": "native"
                        }
                    },
                    "fn": "languages",
                    "gn": "languages"
                },
                {
                    "fn": "skills",
                    "gn": "skills"
                },
                {
                    "fn": "voluntaries",
                    "gn": "voluntaries"
                },
                {
                    "fn": "events",
                    "gn": "events"
                },
                {
                    "fn": "references",
                    "gn": "references"
                },
                {
                    "fn": "achievements",
                    "gn": "achievements"
                },
                {
                    "sLabel": "Hobbies1",
                    "items": {
                        "description": {
                            "sLabel": "Description1",
                            "fn": "description"
                        },
                        "names": {
                            "fn": "names"
                        }
                    },
                    "fn": "hobbies",
                    "gn": "hobbies"
                },
                {
                    "sLabel": "Talents1",
                    "items": {
                        "description": {
                            "sLabel": "Description1",
                            "value": "1",
                            "fn": "description"
                        },
                        "names": {
                            "fn": "names"
                        }
                    },
                    "fn": "talents",
                    "gn": "talents"
                },
                {
                    "citems": [
                        {
                            "items": {
                                "majorName": {
                                    "value": "مختص المتابعة والتقييم",
                                    "fn": "majorName"
                                },
                                "orgName": {
                                    "value": "وزارة الأشغال العامة والطرق",
                                    "fn": "orgName"
                                },
                                "country": {
                                    "value": "1",
                                    "fn": "country"
                                },
                                "city": {
                                    "value": "صنعاء",
                                    "fn": "city"
                                },
                                "sdate": {
                                    "value": "2019-04-01",
                                    "fn": "sdate"
                                },
                                "edate": {
                                    "value": "2019-01-12",
                                    "fn": "edate"
                                },
                                "isPresent": {
                                    "fn": "isPresent"
                                },
                                "description": {
                                    "fn": "description"
                                }
                            },
                            "fn": "Employments",
                            "gn": "experiences.experiences"
                        },
                        {
                            "items": {
                                "majorName": {
                                    "value": "Software Developer",
                                    "fn": "majorName"
                                },
                                "orgName": {
                                    "value": "Blumen consulting",
                                    "fn": "orgName"
                                },
                                "country": {
                                    "value": "1",
                                    "fn": "country"
                                },
                                "city": {
                                    "value": "Sana'a",
                                    "fn": "city"
                                },
                                "sdate": {
                                    "value": "2020-01-04",
                                    "fn": "sdate"
                                },
                                "edate": {
                                    "value": "2022-01-12",
                                    "fn": "edate"
                                },
                                "isPresent": {
                                    "fn": "isPresent"
                                },
                                "description": {
                                    "fn": "description"
                                }
                            },
                            "fn": "Employments",
                            "gn": "experiences.experiences"
                        }
                    ],
                    "fn": "experiences",
                    "gn": "experiences"
                }
            ],
            "fn": "container"
        },
        "local": "ar",
        "personalInfo": {
            "fullName": "Waleed Amer",
            "fields": {
                "fName": "Waleed",
                "lName": "Amer",
                "headline": "Web Developer",
                "country": "1",
                "gender": "1",
                "mStatus": "1"
            },
            "customFields": [
                {
                    "fn": "string"
                }
            ],
            "fieldsKeys": [
                "photo",
                "fName",
                "lName",
                "country",
                "bdate",
                "natioality",
                "gender",
                "mStatus",
                "headline"
            ]
        },
        "contacts": {
            "customLabel": "string",
            "fields": {
                "country": "1",
                "city": "1",
                "email": "waleed.3amer@hotmail.com",
                "tel": "+967 770 333 505",
                "address": "صنعاء مذبح",
                "website": "https://kitsys.co",
                "fb": "waleed.3amer",
                "twitter": "waleed_3amer1",
                "instagram": "waleed3amer",
                "github": "waleed3amer",
                "mobiles": [
                    {
                        "val": "+967 770 333 505"
                    }
                ]
            },
            "fieldsKeys": [
                "country",
                "city",
                "email",
                "tel",
                "mobiles",
                "address",
                "fb",
                "twitter",
                "github",
                "instagram",
                "website"
            ],
            "customFields": [
                {
                    "fn": "string"
                }
            ],
            "props": [
                {
                    "k": "optional",
                    "v": 1
                }
            ]
        },
        "profile": {
            "customLabel": "string",
            "fields": {},
            "customFields": [
                {
                    "fn": "string"
                }
            ],
            "props": [
                {
                    "k": "optional",
                    "v": 1
                }
            ]
        },
        "educations": {
            "customLabel": "string",
            "fields": {
                "bachelors": [
                    {
                        "country": "1",
                        "city": "Sana'a",
                        "orgName": "FCIT, Sana'a University",
                        "majorName": "IT",
                        "sdate": "2014-01-01",
                        "edate": "2018-01-01"
                    }
                ],
                "masters": [],
                "courses": [
                    {
                        "fn": "Courses",
                        "country": "1",
                        "city": "Sana'a",
                        "orgName": "Computer Center, Sana'a University",
                        "majorName": "Android Course",
                        "sdate": "2016-01-01",
                        "edate": "2016-01-01"
                    }
                ],
                "phds": [],
                "associates": [
                    {
                        "fn": "AssociateDegree",
                        "country": "1",
                        "city": "Sana'a",
                        "orgName": "A2Z School of English ",
                        "majorName": "English Language",
                        "sdate": "2021-01-01",
                        "edate": "2016-01-01",
                        "isPresent": true
                    }
                ],
                "schools": [
                    {
                        "fn": "HighSchool",
                        "country": "1",
                        "city": "صنعاء، شملان",
                        "orgName": "مدرسة علي بن أبي طالب ",
                        "majorName": "الثانوية العامة (القسم العلمي)",
                        "sdate": "2011-01-01",
                        "edate": "2012-01-01"
                    }
                ]
            },
            "customFields": [
                {
                    "fn": "string"
                }
            ],
            "__citemsGns": [
                "educations.bachelors",
                "educations.associates",
                "educations.courses",
                "educations.schools"
            ]
        },
        "experiences": {
            "customLabel": "string",
            "fields": {
                "experiences": [
                    {
                        "country": "1",
                        "orgName": "ads",
                        "majorName": "asdfasdf"
                    }
                ],
                "trainings": []
            },
            "customFields": [
                {
                    "fn": "string"
                }
            ],
            "__citemsGns": [
                "experiences.experiences"
            ]
        },
        "languages": {
            "customLabel": "string",
            "fields": {
                "native": "العربية",
                "others": [
                    {
                        "name": "English",
                        "level": "7"
                    }
                ]
            },
            "customFields": [
                {
                    "fn": "string"
                }
            ],
            "__citemsGns": [
                "languages.others"
            ]
        },
        "skills": {
            "customLabel": "string",
            "fields": {
                "skills": []
            },
            "customFields": [
                {
                    "fn": "string"
                }
            ],
            "__citemsGns": []
        },
        "hobbies": {
            "customLabel": "string",
            "fields": {},
            "customFields": [
                {
                    "fn": "string"
                }
            ]
        },
        "talents": {
            "customLabel": "string",
            "fields": {
                "description": "1"
            },
            "customFields": [
                {
                    "fn": "string"
                }
            ]
        },
        "references": {
            "customLabel": "string",
            "fields": {
                "references": []
            },
            "customFields": [
                {
                    "fn": "string"
                }
            ],
            "__citemsGns": []
        },
        "events": {
            "customLabel": "string",
            "fields": {
                "events": []
            },
            "customFields": [
                {
                    "fn": "string"
                }
            ],
            "__citemsGns": []
        },
        "achievements": {
            "customLabel": "string",
            "fields": {
                "achievements": [
                    {
                        "majorName": "asfd"
                    }
                ]
            },
            "customFields": [
                {
                    "fn": "string"
                }
            ],
            "__citemsGns": [
                "achievements.achievements"
            ]
        },
        "voluntaries": {
            "customLabel": "string",
            "fields": {
                "voluntaries": []
            },
            "customFields": [
                {
                    "fn": "string"
                }
            ],
            "__citemsGns": []
        },
        "previewOptions": {
            "tmpName": "cv-template-08",
            "previewZoom": "60",
            "colorPalette": {},
            "typeContext": {
                "ff": "Garamond"
            }
        },
        "__citemsGns": [
            "educations",
            "languages",
            "skills",
            "voluntaries",
            "events",
            "references",
            "achievements",
            "hobbies",
            "talents",
            "experiences",
            "exactivities"
        ],
        "customContext": {
            "personalInfo": {
                "sLabel": "Personal Information",
                "fields": {}
            },
            "contacts": {
                "sLabel": "Contact Me",
                "fields": {}
            },
            "profile": {
                "fields": {}
            },
            "educations": {
                "sLabel": "Education",
                "sIcon": "fas fa-graduation-cap",
                "citems": [
                    {
                        "fields": {}
                    },
                    {
                        "fields": {}
                    },
                    {
                        "fields": {}
                    },
                    {
                        "fields": {}
                    }
                ]
            },
            "hobbies": {
                "sLabel": "Hobbies1",
                "fields": {
                    "description": {
                        "sLabel": "Description1"
                    }
                }
            },
            "talents": {
                "sLabel": "Talents1",
                "fields": {
                    "description": {
                        "sLabel": "Description1"
                    }
                }
            }
        }
    },

    };
    let section={
      "cutstomLabel":null,
      "fields":{},
      "customFields":[],
      
      "movable": false,
      "repeatable": false,
      "destroyable": false,
      "additionalFields": true,
    }
    let tryFetchObject=()=>{
      //TODO
      return null;
    };
    const TBL_NAME='KitContext.Resumes.';
    let createDefaultObject=(data)=>{
      
      return localStorage.getItem(TBL_NAME+data.id)&&JSON.parse(localStorage.getItem(TBL_NAME+data.id)) ||
      fakeData.waleed || {
        id:data.id,
        local:'ar',//TODO USER LANGUAGE
        "personalInfo":{

          fields:{
            "fName":"Wadeea",
            "mName":"Saeed",
            "lName":"Mahdee",
            "country":null,
            "bdate":null,
            "natioality":null,
            "gender":null,
            "mStatus":null,
            "headlin":null,
            "notes":null,




          },
          customFields:[],
          "cutstomLabel":null,
          "movable": false,
          "repeatable": false,
          "destroyable": false,
          "additionalFields": true,
        },
        'educations':{
          "cutstomLabel":null,
          "fields":{
            "majorTag":null,
            "School":null,
            "contery":null,
            "sdate":null,
            "edate":null,
            "Present":null,
            "description":null,

          },
          "customFields":[],
          
          "movable": false,
          "repeatable": false,
          "destroyable": false,
          "additionalFields": true,
        },
        'Employment':{
          "cutstomLabel":null,
          "fields":{
            "Position":null,
            "Employer":null,
            "contery":null,
            "sdate":null,
            "edate":null,
            "Present":null,
            "description":null,

          },
          "customFields":[],
          
          "movable": false,
          "repeatable": false,
          "destroyable": false,
          "additionalFields": true,
        },
       'Languages':{
        "cutstomLabel":null,
        "fields":{
          "Language":null,
          "level":null,
         
        },
        "customFields":[],
        
        "movable": false,
        "repeatable": false,
        "destroyable": false,
        "additionalFields": true,
       }, 
       'skills':{
        "cutstomLabel":null,
        "fields":{
          "Skill":null,
          "slevel":null,
         
        },
        "customFields":[],
        
        "movable": false,
        "repeatable": false,
        "destroyable": false,
        "additionalFields": true,
       },
       'communication':{
        "cutstomLabel":null,
        "fields":{
          "contery":null,
          "city":null,
          "email":null,
          "homephone":null,
          "phone":null,
          "addphone":null,
          "citAddressy":null,
          "street":null,
          "Nhood":null,
          "facebook":null,
          "twitter":null,
        },
        "customFields":[],
        
        "movable": false,
        "repeatable": false,
        "destroyable": false,
        "additionalFields": true,
       },
       'Exactivities':{
        "cutstomLabel":null,
        "fields":{
          "exem":null,
          "exemdate":null,
          "examsource":null,

        },
        "customFields":[],
        
        "movable": false,
        "repeatable": false,
        "destroyable": false,
        "additionalFields": true,
       },
       'soactivities':{
        "cutstomLabel":null,
        "fields":{
          "activities":null,
          "Dactivitie":null,
         
        },
        "customFields":[],
        
        "movable": false,
        "repeatable": false,
        "destroyable": false,
        "additionalFields": true,
       },
       'Achievements':{
        "cutstomLabel":null,
        "fields":{
          "Achievement":null,
          
         
        },
        "customFields":[],
        
        "movable": false,
        "repeatable": false,
        "destroyable": false,
        "additionalFields": true,
       },
       
       
       

      };
    };

    let DbSet=ko.observableArray([]);
    ko.KitContext.Resumes={
      getObjectOrDefault:(id)=>{
        
          let obj=(DbSet()||[]).find(f=>f.id==id);
          if(obj==null){
              obj=createDefaultObject({id:id});
          } 
          else{
            //TODO CHECK IS UPTODATE
          }
          return obj;
      },
      saveObject:(id,obj)=>{
        localStorage.setItem(TBL_NAME+id,ko.toJSON(obj));
      }
    }
  }
  
});
