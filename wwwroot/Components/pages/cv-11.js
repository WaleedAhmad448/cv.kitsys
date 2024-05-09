define(["ko"], function (ko) {
  // 'use strict';
  let __GN__="talents";
  function Model() {
    let createComponentItem1 =ko.vm.createComponentItem;
    let customCounter=0;
    let group1; 
    group1= {
      componentName: "kit-accordion-v2",
      data: {
        ar: "Talents",
        citype:"leaf-section",
        en: "Talents",
        fn:"talents",
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
        ar: "Description",
        en: "description",
        fn: "description",
        value: ko.observable(),
     },
     {
      componentName: "kit-input-text",
      ar: "names",
      en: "names",
      fn: "names",
      value: ko.observable(),
    },
    ];

    group1.data.items(questions.map((q) => new createComponentItem1(q)));
    {
      let self=group1;
      let container=self.data= new createComponentItem1(group1.data);
      
    normalizedObj.talents = self.data.getNormalizedObj = ko.pureComputed(()=>{
      let fields=[
        "description",
        "names",
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
        ]
      }
    
  });
  self.data.getNormalizedContextObj = ko.pureComputed(()=>{
    let fields=[
      "description",
        "names",
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
  return { createModel: Model,gn: __GN__,isCustom:true,tag:'Talents'};
  
});
