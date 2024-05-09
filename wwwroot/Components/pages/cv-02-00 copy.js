define(["ko"], function (ko) {
  // 'use strict';
    function EducationItem(data){
      
    let customCounter=0;
    let createComponentItem1 =ko.vm.createComponentItem;
      let group1= {
        citype:"leaf-section",
        componentName: "kit-accordion-v2",
        fn:'MiddleSchool',
        gn:'educations',
        ar: "مرحلة التعليم الأساسي",
        en: "Middle School Information",
        visible:ko.observable(1),
        canRemove:true,
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
          fn: "majorName",
          value: ko.observable(),
        //  grid:"col-md-6",
        },
        {
          componentName: "kit-input-text",
          ar: "المنشأه التعليمية",
          en: "School",
          fn: "orgName",
          value: ko.observable(),
       //   grid:"col-md-6",
        },
        {
          componentName: "kit-input-select",
          ar: "الدوله",
          en: "Country",
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
          grid:"col-md-6",
        },
     
      ];
 
  
      group1.items(questions.map((q) => new createComponentItem1(q)));
      {
        /*
        
        */
      //  let container=group1=new createComponentItem1(group1);
       let container=group1;//=new createComponentItem1(group1);
       let self=group1;
       //let container=group1;
    
       self.getNormalizedContextObj = ko.pureComputed(()=>{
        let fields=[
        "country",
        "city",
        "orgName",
        "majorName",
        "description",
        "sdate",
        "edate",
        "isPresent",].filter(f=>container.KVItems[f].optional()<2).reduce((a,b)=>{ 
          if(container.KVItems[b]?.getCustomItemContext())
            a[b]=container.KVItems[b]?.getCustomItemContext;
          return a
        },{});
    
        return {
          ...(container.getCustomItemContext&&container.getCustomItemContext()||{}),
              "fields": fields,
          };
      });
    
    
    }
      return group1;
    }
  return { createModel: EducationItem,isCustom:true,tag:'education'};
});
