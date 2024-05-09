define(["ko"], function (ko) {
  // 'use strict';
  let __GN__="contacts";
  function Model() {
    let createComponentItem1 =ko.vm.createComponentItem;
    let customCounter=0;
    let group1; 
    group1= {
      componentName: "kit-accordion-v2",
      data: {
        ar: "معلومات الاتصال",
        en: "communication",
        citype:"leaf-section",
        fn: "contacts",
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
      "communication":ko.observable(),
    };
    let questions;
    questions= [
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
      componentName: "kit-input-select",
      ar: "المدينة",
      en: "city",
      fn: "city",
      value: ko.observable(),
      getOptions: function () {
        return [
          {
            value: "1",
            ar: "صنعاء",
            en: "sanaa",
          },
          
        ];
       }
   },
      {
        componentName: "kit-input-email",
        ar: "البريد الالكتروني",
        en: "email",
        fn: "email",
        value: ko.observable(),
      },
      {
        componentName: "kit-input-tel",
        ar: "هاتف المنزل",
        en: "home phone",
        fn: "tel",
        value: ko.observable(),
      },
      {
        componentName: "kit-input-tel",
        isMultiVal:true,
        ar: "الجوال",
        en: "mobiles",
        fn: "mobiles",
        value: ko.observable(),
        values: ko.observableArray([{val:ko.observable()}]),
      },
      
      {
        componentName: "kit-input-text",
        ar: "العنوان",
        en: "Address",
        fn: "address",
        value: ko.observable(),
      //  grid:"col-md-6",
      },
      // {
      //   componentName: "kit-input-text",
      //   ar: "الشارع",
      //   en: "street",
      //   fn: "street",
      //   value: ko.observable(),
      // //  grid:"col-md-6",
      // },{
      //   componentName: "kit-input-text",
      //   ar: "الحي",
      //   en: "Neighborhood",
      //   fn: "nhood",
      //   value: ko.observable(),
      //  // grid:"col-md-6",
      // },
      {
        componentName: "kit-input-text",
        ar: "فيسبوك",
        en: "facebook",
        fn: "fb",
        value: ko.observable(),
        optional: ko.observable(2),
       // grid:"col-md-6",
      },{
        componentName: "kit-input-text",
        ar: "تويتر",
        en: "twitter",
        fn: "twitter",
        optional: ko.observable(2),
        value: ko.observable(),
       // grid:"col-md-6",
      },{
        componentName: "kit-input-text",
        ar: "linkedIn",
        en: "linkedIn",
        fn: "linkedIn",
        value: ko.observable(),
        optional: ko.observable(2),
       // grid:"col-md-6",
      },
      {
        componentName: "kit-input-text",
        ar: "github",
        en: "github",
        fn: "github",
        value: ko.observable(),
        optional: ko.observable(2),
       // grid:"col-md-6",
      },
      {
        componentName: "kit-input-text",
        ar: "instagram",
        en: "instagram",
        fn: "instagram",
        value: ko.observable(),
        optional: ko.observable(2),
       // grid:"col-md-6",
      },{
        componentName: "kit-input-text",
        ar: "موقع الويب",
        en: "website",
        fn: "website",
        value: ko.observable(),
        optional: ko.observable(2),
       // grid:"col-md-6",
      },
      
    ];

    group1.data.items(questions.map((q) => new createComponentItem1(q)));
    
    {
        let self=group1;
        let container=self.data=new createComponentItem1(self.data);
      normalizedObj.communications = self.data.getNormalizedObj = ko.pureComputed(()=>{
        let fields=[
          "country",
          "city",
          "email",
          "tel",
          "address",
          "website",
          "fb",
          "twitter",
          "instagram",
          "github",
          "linkedIn",
          
          "mobiles",
        ].reduce((a,b)=>{ 
          if(container.KVItems[b])
          a[b]=container.KVItems[b].isMultiVal?container.KVItems[b].values: container.KVItems[b].value;
          return a
        },{});
        
        return {
          "customLabel": "string",
          "fields": fields,
          "fieldsKeys":container.items().filter(f=>f.optional()<2).map(f=>f.fn),

          "customFields": [
            {
              "fn": "string"
            }
          ],
          props:[
            {k:'optional',v:container.optional()},
          ],
          uiGetSocialMedia:()=>{
            
            let list=[];
            let cn=null;
            if(container.optional()<2)
            {
              list=[
                {k:'fb',ic:'fe-facebook',link:'https://fb.com/',},
                {k:'twitter',ic:'fe-twitter',link:'https://twitter.com/',},
                {k:'github',ic:'fe-github',link:'https://github.com/',},
                {k:'linkedIn',ic:'fe-linkedin',link:'https://lnked.in/',},
                {k:'instagram',ic:'fe-instagram',link:'https://instagram.com/',},
              ].filter(f=>container.KVItems[f.k]&&container.KVItems[f.k].optional()<2&&container.KVItems[f.k].value()).map(o=>{
                  return {
                    fn:o.k,
                    ic:o.ic,
                    href:o.link+container.KVItems[o.k].value(),
                    text:container.KVItems[o.k].value(),
                  };
              });

            }
            console.log('social-media',list)
            return{
              contentEditable:ko.observable(false),
              cn: cn,
              list: list,
            }
          },
        }
      
    });
    self.data.getNormalizedContextObj = ko.pureComputed(()=>{
      let fields=[
        "country",
        "city",
        "email",
        "tel",
        "address",
        "website",
        "fb",
        "twitter",
        "instagram",
        "github",
        "linkedIn",
        
        "mobiles",
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
  return { createModel: Model,isCustom:false,tag:'contacts',gn:__GN__};
  
});
