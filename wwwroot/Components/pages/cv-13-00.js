define(["ko"], function (ko) {
  // 'use strict';
  function Model() {
    let createComponentItem1 =ko.vm.createComponentItem;
    let customCounter=0;
    let group1; 
    group1= {
        componentName: "kit-accordion-v2",
        ar: "الاحداث",
        en: "Events",
        fn:"Events",
        citype:"leaf-section",
        gn:"events",
        optional: ko.observable(2),
        visible:ko.observable(1),
        items: ko.observableArray(),
        get KVItems(){
            return (this.items()||[]).reduce((a,b)=>{ 
                a[b.fn]=b;  
                return a;
            },{});
        },
        config:{
          canAdd:ko.observable(1),
          createCustom:()=>{
            customCounter++;
            group1.data.items.push(
              new createComponentItem1( {
                componentName: "kit-input-custom",
                ar: "مخصص "+customCounter,
                en: "Custom "+ customCounter,
                fn: "custom"+customCounter,
                value: ko.observable(),
                grid:"col-md-6",
                canRemove:1,
                isCustom:1,
              })
              );
          },
        },
     
    };

    let questions;
    questions= [
      {
        componentName: "kit-input-text",
        ar: " المركز الوظيفي",
        en: "Position",
        fn: "majorName",
        value: ko.observable(),
      //  grid:"col-md-6",
      },
      {
        componentName: "kit-input-text",
        ar: "جهة صاحب العمل",
        en: "Employer",
        fn: "orgName",
        value: ko.observable(),
       // grid:"col-md-6",
      },
      {
        componentName: "kit-input-select",
        ar: "الدوله",
        en: "country",
        fn: "country",
        value: ko.observable(),
        getOptions: function () {
          return [
            {
              value: "1",
              ar: "اليمن",
              en: "yemen",
            },
            
          ];
         }
     },
     {
      componentName: "kit-input-text",
      ar: "المدينة",
      en: "City",
      fn: "city",
      value: ko.observable(),
    },
     {
      componentName: "kit-input-date",
      ar: "تاريخ البديه",
      en: "start date",
      fn: "sdate",
      value: ko.observable(),
      grid:"col-md-6",
    }, {
      componentName: "kit-input-date",
      ar: "تاريخ النهايه",
      en: "end date",
      fn: "edate",
      value: ko.observable(),
      grid:"col-md-6",
    },
    {
      componentName: "kit-input-checkbox",
      ar: " الوقت الحاضر",
      en: "Present",
      fn: "isPresent",
      db:1,
      value: ko.observable(),
      
    },
      {
        componentName: "kit-textarea",
        ar: " الوصف ",
        en: "description",
        fn: "description",
        value: ko.observable(),
      //  grid:"col-md-6",
      },
     
      
    ];

    group1.items(questions.map((q) => new createComponentItem1(q)));
    return group1;
  }
  return { createModel: Model,isCustom:true,tag:'Events'};
  
});
