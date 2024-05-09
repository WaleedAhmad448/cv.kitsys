define(["ko"], function (ko) {
  // 'use strict';
  function Model() {
    let group1 = {
      componentName: "kit-group",
      data: {
        ar: "بيانات الشخص",
        en: "General Information 3",
        visible:ko.observable(1),
        items: ko.observableArray(),
        get KVItems(){
            return (this.items()||[]).reduce((a,b)=>{ 
                a[b.fn]=b;  
                return a;
            },{});
        },
      },
    };

    let createComponentItem1 = function (data) {
      let new_ques = {
        enable: ko.observable(1),
        required: ko.observable(0),
        visible: ko.observable(1),
        value: ko.observable(),
        ...data,
      };
      if(!data.grid){
        data.grid="col-md-12"
      }
      return new_ques;
    };
    let questions;
    questions= [
      {
        componentName: "kit-image",
        ar: "الصوره",
        en: "iamge",
        fn: "image",
        value: ko.observable("/wwwroot/images/logo.png"),
        required: ko.observable(1),
        grid:"col-md-6",
      },
      {
        componentName: "kit-image",
        ar: "الصوره",
        en: "iamge",
        fn: "image",
        value: ko.observable("/wwwroot/images/logo.png"),
        required: ko.observable(1),
        grid:"col-md-6",
      },
      {
        componentName: "kit-image",
        ar: "الصوره",
        en: "iamge",
        fn: "image",
        value: ko.observable("/wwwroot/images/logo.png"),
        required: ko.observable(1),
        grid:"col-md-6",
      },
      {
        componentName: "kit-image",
        ar: "الصوره",
        en: "iamge",
        fn: "image",
        value: ko.observable("/wwwroot/images/logo.png"),
        required: ko.observable(1),
        grid:"col-md-6",
      },
      {
        componentName: "kit-image",
        ar: "الصوره",
        en: "iamge",
        fn: "image",
        value: ko.observable("/wwwroot/images/logo.png"),
        required: ko.observable(1),
        grid:"col-md-6",
      },
      {
        componentName: "kit-image",
        ar: "الصوره",
        en: "iamge",
        fn: "image",
        value: ko.observable("/wwwroot/images/logo.png"),
        required: ko.observable(1),
        grid:"col-md-6",
      },
      {
        componentName: "kit-image",
        ar: "الصوره",
        en: "iamge",
        fn: "image",
        value: ko.observable("/wwwroot/images/logo.png"),
        required: ko.observable(1),
        grid:"col-md-6",
      },{
        componentName: "kit-image",
        ar: "الصوره",
        en: "iamge",
        fn: "image",
        value: ko.observable("/wwwroot/images/logo.png"),
        required: ko.observable(1),
        grid:"col-md-6",
      },
      {
        componentName: "kit-button",
        fn: "btnBack",
        ar: "رجوع",
        btnClass: "default",
        en: "Back",
        click:function(){
            console.log(group1.data.KVItems);
            group1.data.KVItems["email"].enable(0);
            group1.data.KVItems["password"].visible(!group1.data.KVItems["password"].visible());
            group1.data.KVItems["email"].enable(0);
            group1.data.KVItems["contery"].visible(0);
            
        }
      },
    ];

    group1.data.items(questions.map((q) => new createComponentItem1(q)));
    return group1;
  }
  return Model;
});
