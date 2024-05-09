define(["ko"], function (ko) {
  // 'use strict';
  function Model() {
    let customCounter=0;
    let createComponentItem1 =ko.vm.createComponentItem;
    function EducationItem(data){
      let group1= {
        componentName: "kit-accordion-v2",
        fn:'educations',
        ar: " المؤهلات الدراسية",
        en: "Education",
        visible:ko.observable(1),
        items: ko.observableArray(),
        ...data,
        get KVItems(){
            return (this.items()||[]).reduce((a,b)=>{ 
                a[b.fn]=b;  
                return a;
            },{});
        },
        config:{
          canAdd:ko.observable(0),
          createCustom:()=>{
            customCounter++;
            group1.items.push(
              new createComponentItem1( {
                componentName: "kit-input-custom",
                ar: "مخصص "+customCounter,
                en: "Custom "+ customCounter,
                label:"مخصص",
                fn: "custom"+customCounter,
                value: ko.observable(),
                grid:"col-md-6",
                canRemove:1,
                isCustom:1,
              })
              );
          },
          ...(data&&data.config||[])
        },
      };
      let questions;
      questions= [
        {
          componentName: "kit-input-text",
          ar: " المؤهلات الدراسية",
          en: "Education",
          fn: "majorTag",
          value: ko.observable(),
        //  grid:"col-md-6",
        },
        {
          componentName: "kit-input-text",
          ar: "المنشأه التعليمية",
          en: "School",
          fn: "school",
          value: ko.observable(),
       //   grid:"col-md-6",
        },
        {
          componentName: "kit-input-select",
          ar: "الدوله",
          en: "contery",
          fn: "contery",
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
        componentName: "kit-input-date",
        ar: "تاريخ البديه",
        en: "start date",
        fn: "sdate",
        value: ko.observable(),
      }, {
        componentName: "kit-input-date",
        ar: "تاريخ النهايه",
        en: "end date",
        fn: "edate",
        value: ko.observable(),
      },
      {
        componentName: "kit-input-checkbox",
        ar: " الوقت الحاضر",
        en: "Present",
        fn: "present",
        db:1,
        value: ko.observable(),
       
      },
        {
          componentName: "kit-textarea",
          ar: " الوصف ",
          en: "description",
          fn: "description",
          value: ko.observable(),
          grid:"col-md-6",
        },
     
      ];
  
      group1.items(questions.map((q) => new createComponentItem1(q)));
      return group1;
    }
    // let container=new createComponentItem1({
    //   componentName: "kit-sortable-group",
    //   ar: " المؤهلات الدراسية",
    //   en: "Education",
    //   visible:ko.observable(1),
    //   items: ko.observableArray(),
    // });
    let group1 = {
      componentName: "kit-accordion-v2",
      
      data: {
        ar: " المؤهلات الدراسية",
        en: "Education",
        fn: "education",
        movable:true,
        visible:ko.observable(1),
        optional: ko.observable(2),
        items: ko.observableArray([]),
        citems: ko.observableArray([]),
        get KVItems(){
            // return (this.items()||[]).reduce((a,b)=>{ 
            //     a[b.fn]=b;  
            //     return a;
            // },{});
        },
        config:{
          canAdd:ko.observable(1),
          isSortable:ko.observable(1),
          createCustom:()=>{
            customCounter++;
            group1.data.items.push(new createComponentItem1(new  EducationItem({
              ar: "أخرى",
                en: "أخرى",
                canRemove:1,
                isCustom:1,
            })));
          },
        },
      },
    };

    
   
    group1.data.items.push(new createComponentItem1(new  EducationItem({
      ar: "الشهادة الأساسية",
        en: "الشهادة الأساسية",
        optional: ko.observable(2),
    })));
    
    group1.data.items.push(new createComponentItem1(new  EducationItem({
      ar: "الشهادة الثانوية",
        en: "الشهادة الثانوية",
        optional: ko.observable(2),
    })));
    
    group1.data.items.push(new createComponentItem1(new  EducationItem({
      ar: "الشهادة البكلريوس",
        en: "الشهادة البكلريوس",
        optional: ko.observable(2),
    })));
    return group1;
  }
  return { createModel: Model,isCustom:true,tag:'education'};
});
