define(["ko"], function (ko) {
  // 'use strict';
  function Model() {
    let createComponentItem1 =ko.vm.createComponentItem;
    let customCounter=0;
    let group1; 
    group1= {
        componentName: "kit-accordion-v2",
        header:{show:false,},
        citype:"leaf-section",
        ar: "الغات",
        en: "Languages",
        fn:"languages",
        gn:"languages.languages",
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
          canAdd:ko.observable(0),
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
        ar: "الغه",
        en: "Language",
        fn: "name",
        value: ko.observable(),
       // grid:"col-md-6",
      },
      {
        componentName: "kit-input-range",
       // grid:"col-md-12",

        ar:" المستوى" ,
        en:"level",
        fn:"level",
        value: ko.observable(),
        min:1,
        max:10,
       // grid:"col-md-5",
      },
     
      
    ];

    group1.items(questions.map((q) => new createComponentItem1(q)));
    return group1;
  }
  return { createModel: Model,isCustom:true,tag:"Languages"};
});
