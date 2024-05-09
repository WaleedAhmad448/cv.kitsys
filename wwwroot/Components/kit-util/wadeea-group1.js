define(["ko"], function (ko) {
  // 'use strict';
  function Model() {
    let group1 = {
      componentName: "kit-group",
      data: {
        ar: "بيانات الشخص",
        en: "General Information 3",
        visible:ko.observable(1),
        items: ko.observableArray(),
        get KVItems(){
            return (this.items()||[]).reduce((a,b)=>{ 
                a[b.fn]=b;  
                return a;
            },{});
        },
      },
    };

    let createComponentItem1 = ko.vm.createComponentItem;
    let questions;
    questions= [
      {
        componentName: "kit-input-text",
        ar: " الاسم ",
        en: "Name",
        fn: " Name",
        value: ko.observable(),
        grid:"col-md-6",
      },
      {
        componentName: "kit-input-text",
        ar: "الاسم العائله",
        en: "Family name ",
        fn: "Family name",
        maxLength:10,
        value: ko.observable(),
        grid:"col-md-6",
      },
      {
        componentName: "kit-input-text",
        ar: "عنوان تعريفي",
        en: "Headlin",
        fn: "Headlin",
        value: ko.observable(),
        grid:"col-md-6",
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
        ar: "الهاتف",
        en: "phone",
        fn: "phone",
        value: ko.observable(),
      },
      {
        componentName: "kit-input-textp",
        ar: "العنوان",
        en: "Address",
        fn: "Address",
        value: ko.observable(),
        grid:"col-md-6",
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
        ar: "تاريخ الميلاد",
        en: "Birth date",
        fn: "Birth date",
        value: ko.observable(),
      },
      {
        componentName: "kit-input-text2",
        ar:"الجنسية",
        en:"natioality",
        fn:"natioality",
        value:ko.observable(),
      },
      {
        componentName: "kit-textarea",
        ar: "ملاحظات",
        en: "Notes",
        fn: "Notes",
        value: ko.observable(),
      },
      {
        componentName: "kit-input-radio",
        ar: "نوع الجنس",
        en: "Gender",
        fn: "Gender",
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
        componentName: "kit-input-radio",
        ar: "الحاله الاجتماعيه ",
        en: "Civil status",
        fn: "Civil status",
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
        componentName: "kit-button",
        fn: "btnNext",
        ar: "التالي",
        en: "Next",
        click:function(){
              group1.data.KVItems["email"].visible(0);
              //group1.data.KVItems[""].visible(0);

        },
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
        }
      },
    ];

    group1.data.items(questions.map((q) => new createComponentItem1(q)));
    return group1;
  }
  return Model;
});
