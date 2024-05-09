define(["ko"], function (ko) {
  // 'use strict';
  function Model() {
    let createComponentItem1 =ko.vm.createComponentItem;
    let customCounter=0;
    let self; 
    self= {
      componentName: "kit-accordion-v2",
      data: {
        fn:"personalInfo",
        citype:"leaf-section",
        ar: "بيانات الشخص",
        en: "General Information ",
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
            self.data.items.push(
              new createComponentItem1( {
                componentName: "kit-input-text",
                ar: "مخصص "+customCounter,
                en: "Custom "+ customCounter,
                fn: "custom"+customCounter,
                value: ko.observable(),
               // grid:"col-md-6",
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
        ar: "Photo",
        en: "Photo",
        fn: "photo",
        value: ko.observable(),
       // grid:"col-md-6",
      },
      {
        componentName: "kit-input-text",
        ar: "الاسم الأول",
        en: "Name",
        fn: "fName",
        value: ko.observable(),
        valueUpdate: ko.observable('afterkeydown'),
       // grid:"col-md-6",
      },
      
      {
        componentName: "kit-input-text",
        ar: "الأسم الثاني",
        en: "Middle Name",
        fn: "sName",
        maxLength:10,
        optional: ko.observable(2),
        value: ko.observable(),
      //  grid:"col-md-6",
      },
      {
        componentName: "kit-input-text",
        ar: "الاسم الثالث",
        en: " Name",
        fn: "tName",
        maxLength:10,
        optional: ko.observable(2),
        value: ko.observable(),
      //  grid:"col-md-6",
      },
      {
        componentName: "kit-input-text",
        ar: "الاسم العائله",
        en: "Family name ",
        fn: "lName",
        maxLength:10,
        value: ko.observable(),
       // grid:"col-md-6",
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
        componentName: "kit-input-date",
        ar: "تاريخ الميلاد",
        en: "Birth date",
        fn: "bdate",
        value: ko.observable(),
      },
      {
        componentName: "kit-input-text",
        ar:"الجنسية",
        en:"Natioality",
        fn:"natioality",
        value:ko.observable(),
      },
      {
        componentName: "kit-input-select",
        ar: "نوع الجنس",
        en: "Gender",
        fn: "gender",
        value: ko.observable(),
        getOptions: function () {
          return [
            {
              value: "1",
              ar: "ذكر",
              en: "Male",
            },
            {
              value: "2",
              ar: "أنثى",
              en: "Female",
            },
          ];
        },
      },
      {
        componentName: "kit-input-select",
        ar: "الحاله الاجتماعيه ",
        en: "Civil status",
        fn: "mStatus",
        value: ko.observable(),
        getOptions: function () {
          return [
            {
              value: "1",
              ar: "اعزب",
              en: "unmarried",
            },
            {
              value: "2",
              ar: "متزوج",
              en: "married",
            },
          ];
        },
      },
      {
        componentName: "kit-input-text",
        ar: "عنوان تعريفي",
        en: "Headlin",
        fn: "headline",
        value: ko.observable(),
        optional: ko.observable(2),

       // grid:"col-md-6",
      },
      {
        componentName: "kit-textarea",
        ar: "ملاحظات",
        en: "Notes",
        fn: "coverLetter",
        value: ko.observable(),
        optional: ko.observable(2),
      },
         
    ];
    self.data.items(questions.map((q) => new createComponentItem1(q)));
    self.data=new createComponentItem1(self.data);
    let container=self.data;
    
    
    normalizedObj.personalInfo = self.data.getNormalizedObj = ko.pureComputed(()=>{
      let fields=[ "fName",
      "sName",
      "tName",
      "lName",
      "photo",
      "headline",
      "country",
      "bdate",
      "natioality",
      "gender",
      "mStatus",
      "coverLetter",].filter(f=>container.KVItems[f].optional()<2).reduce((a,b)=>{ 
        a[b]=container.KVItems[b]?.value;
        return a
      },{});

      return {
            // "customLabel": "string",
            fullName:ko.pureComputed(()=>{
              return (
              container.KVItems.fName.value()+' '+
              (
                container.KVItems.sName.optional()<2&&container.KVItems.sName.value()?container.KVItems.sName.value()+' ':''
              )+
              (
                container.KVItems.tName.optional()<2&&container.KVItems.tName.value()?container.KVItems.tName.value()+' ':''
              )+
              container.KVItems.lName.value()

              );
            }),
            "fields": fields,
            "customFields": [
              {
                "fn": "string"
              }
            ],
            "fieldsKeys":container.items().filter(f=>f.optional()<2).map(f=>f.fn),
        }
    });
    
    self.data.getNormalizedContextObj = ko.pureComputed(()=>{
      let fields=[ "fName",
      "sName",
      "tName",
      "lName",
      "photo",
      "headline",
      "country",
      "bdate",
      "natioality",
      "gender",
      "mStatus",
      "coverLetter",].filter(f=>container.KVItems[f].optional()<2).reduce((a,b)=>{ 
        if(container.KVItems[b]?.getCustomItemContext())
          a[b]=container.KVItems[b]?.getCustomItemContext;
        return a
      },{});

      return {
            ...(container.getCustomItemContext&&container.getCustomItemContext()||{}),
            "fields": fields,
        }
    });
    
    return self
  }
  return { createModel: Model,isCustom:false,tag:'personalInfo',label:"البيانات الشخصية"};
});
