define(["ko"], function (ko) {
  // 'use strict';
  function Model() {
    let group1 = {
      componentName: "kit-array-group",
      data: {
        ar: "بيانات الشخص",
        en: "General Information 3",
        visible:ko.observable(1),
        add:function(){},
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
        ...data,
        enable: ko.observable(1),
        required: ko.observable(0),
        visible: ko.observable(1),
        value: ko.observable(),
      };
      if(!data.grid){
        data.grid="col-md-12"
      }
      return new_ques;
    };
    let addSubGroup=(group1)=>{
    

      let questions;
      questions= [
        
        {
          componentName: "kit-input-image",
        ar: "الاسم الأول",
        en: "phone",
        fn: "phone",
        value: ko.observable(),
        grid:"col-md-5",

      },
      {
        componentName: "kit-input-tel",
        ar: "الاسم الأول",
        en: "phone",
        fn: "phone",
        value: ko.observable(),
        grid:"col-md-5",

      },
      {
        componentName: "kit-input-textp",
        ar:"اسم العائلة",
        en:"natioality",
        fn:"natioality",
        value: ko.observable(),
        grid:"col-md-5",

      },
      {
        componentName: "kit-input-textp",
        ar:"عنوان تعريفي",
        en:"natioality",
        fn:"natioality",
        value: ko.observable(),
        grid:"col-md-5",

      }, {
        componentName: "kit-input-textp",
        ar:"رقم الهاتف",
        en:"natioality",
        fn:"natioality",
        value: ko.observable(),
        grid:"col-md-5",

      }, {
        componentName: "kit-input-textp",
        ar:"العنوان ",
        en:"natioality",
        fn:"natioality",
        value: ko.observable(),
        grid:"col-md-5",

      }, {
        componentName: "kit-input-textp",
        ar:"المدينة",
        en:"natioality",
        fn:"natioality",
        value: ko.observable(),
        grid:"col-md-5",

      }, {
        componentName: "kit-input-textp",
        ar:"المؤهلات الدراسية",
        en:"natioality",
        fn:"natioality",
        value: ko.observable(),
        grid:"col-md-5",

      }, {
        componentName: "kit-input-textp",
        ar:"المنشأة التعليمية",
        en:"natioality",
        fn:"natioality",
        value: ko.observable(),
        grid:"col-md-5",

      }, {
        componentName: "kit-input-textp",
        ar:" المدينة",
        en:"natioality",
        fn:"natioality",
        value: ko.observable(),
        grid:"col-md-5",

      }, {
        componentName: "kit-input-date",
        ar: "تاريخ بدء الدراسة",
        en: "Birth date",
        fn: "Birth date",
        value: ko.observable(),
        grid:"col-md-5",
      },
      {
        componentName: "kit-input-date",
        ar: "تاريخ انتهاء الدراسة  ",
        en: "Birth date",
        fn: "Birth date",
        value: ko.observable(),
        grid:"col-md-5",
      }, {
        componentName: "kit-input-checkbox",
        ar: " الوقت الحاضر",
        en: "Agree",
        fn: "Agree",
        value: ko.observable(),
      }, {
        componentName: "kit-textarea",
        ar: "الوصف",
        en: "Notes",
        fn: "Notes",
        value: ko.observable(),
      },
      
      {
        componentName: "kit-input-textp",
        ar:"المركز الوظيفي",
        en:"natioality",
        fn:"natioality",
        value: ko.observable(),
        grid:"col-md-5",

      }, {
        componentName: "kit-input-textp",
        ar:"جهة صاحب العمل",
        en:"natioality",
        fn:"natioality",
        value: ko.observable(),
        grid:"col-md-5",

      }, {
        componentName: "kit-input-textp",
        ar:"المدينة",
        en:"natioality",
        fn:"natioality",
        value: ko.observable(),
        grid:"col-md-5",

      }, {
        componentName: "kit-input-date",
        ar:"تاريخ بدءالعمل",
        en:"natioality",
        fn:"natioality",
        value: ko.observable(),
        grid:"col-md-4",

      }, {
        componentName: "kit-input-date",
        ar:"تاريخ انتهاء العمل",
        en:"natioality",
        fn:"natioality",
        value: ko.observable(),
        grid:"col-md-5",

      }, {
        componentName: "kit-input-checkbox",
        ar: " الوقت الحاضر",
        en: "Agree",
        fn: "Agree",
        value: ko.observable(),
        grid:"col-md-5",
      },
      {
        componentName: "kit-input-range",
        grid:"col-md-12",

        ar:"المهارات " ,
        en:"skile",
        fn:"skile",
        value: ko.observable(),
        min:1,
        max:10,
        grid:"col-md-5",
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
            group1.data.KVItems["natioality"].enable(0);
            
        }
      },
    ];

    group1.items(questions.map((q) => new createComponentItem1(q)));
    return group1;
    }
    group1.data.add=function(){
    group1.data.items.push(addSubGroup(new createComponentItem1({
      componentName: "kit-group",
      ar: "بيانات الشخص",
      en: "General Information 3",
      items: ko.observableArray(),
      visible:ko.observable(1),
    })));
  }
  group1.data.add();
  return group1;
  }
  return Model;
});
