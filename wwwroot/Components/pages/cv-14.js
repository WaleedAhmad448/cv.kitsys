define(["ko"], function (ko) {
  // 'use strict';
    let __GN__="profile";
    function Model() {
    let createComponentItem1 =ko.vm.createComponentItem;
    let customCounter=0;
    let group1; 
    group1= {
      componentName: "kit-accordion-v2",
      data: {
        ar: "Profile",
        en: "Profile",
        citype:"leaf-section",
        fn:"profile",
        gn: __GN__,
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
      },
    };

    
    let questions;
    questions= [
      {
        componentName: "kit-input-text",
        ar: "Cover Letter",
        en: "Cover Letter",
        fn: "coverLetter",
        value: ko.observable(),
     },
    ];

    group1.data.items(questions.map((q) => new createComponentItem1(q)));
    {
      let self=group1;
      let container=self.data= new createComponentItem1(self.data);
    normalizedObj.profile = self.data.getNormalizedObj = ko.pureComputed(()=>{
      let fields=[
        "coverLetter",
      ].reduce((a,b)=>{ 
        a[b]=container.KVItems[b]?.value;
        return a
      },{});
      
      return {
        "customLabel": "string",
        "fields": fields,
        "customFields": [
          {
            "fn": "string"
          }
        ],
        props:[
          {k:'optional',v:container.optional()},
        ],
      }
    
  });
  self.data.getNormalizedContextObj = ko.pureComputed(()=>{
    let fields=[
      "coverLetter",
     ].filter(f=>container.KVItems[f].optional()<2).reduce((a,b)=>{ 
      if(container.KVItems[b]?.getCustomItemContext())
        a[b]=container.KVItems[b]?.getCustomItemContext;
      return a
    },{});
    
    return {
      ...(container.getCustomItemContext&&container.getCustomItemContext()||{}),
      "fields": fields,
      
    }
  
});
}
    return group1;
  }
  return { createModel: Model,isCustom:false,gn: __GN__,tag:'profile'};
  
});
