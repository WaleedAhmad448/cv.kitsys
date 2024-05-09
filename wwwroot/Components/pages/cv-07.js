define(["ko"], function (ko) {
  // 'use strict';
  let __GN__="exactivities";
  function Model() {
    let createComponentItem1 =ko.vm.createComponentItem;
    let customCounter=0;
    let group1; 
    group1= {
      componentName: "kit-accordion-v2",
      data: {
        ar: "التاهيل الاكاديمي",
        en: "Extracurricular activities",
        citype:"leaf-section",
        gn: __GN__,
        fn:"exactivities",
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
      },
    };

    let qv={
      "Extracurricularactivities":ko.observable(),
    };
    let questions;
    questions= [
      {
        componentName: "kit-input-select",
        ar: "نوع الامتحان ",
        en: "exem",
        fn: "exem",
        value: ko.observable(),
        getOptions: function () {
          return [
            {
              value: "1",
              ar: "التوفل",
              en: "twfl",
            },
            
          ];
         }
     },
     {
      componentName: "kit-input-date",
      ar: " تاريخ الامتحان",
      en: "exem date",
      fn: "exemdate",
      value: ko.observable(),
    },
      {
        componentName: "kit-input-text",
        ar: "جهة الامتحان",
        en: "exam source",
        fn: "examsource",
        value: ko.observable(),
      //  grid:"col-md-6",
      },
     
      
    ];

    group1.data.items(questions.map((q) => new createComponentItem1(q)));
    return group1;
  }
  return { createModel: Model,isCustom:true,gn: __GN__,tag:'Exactivities'};
  
});
