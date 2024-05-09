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
    let questions;
    questions= [
      {
        componentName: "kit-input-text",
        ar: "الاسم",
        en: "Name",
        fn: "Name",
        maxLength:10,
        value: ko.observable(),
        grid:"col-md-6",
      },
      {
        componentName: "kit-input-number",
        ar: "العمر",
        en: "Age",
        fn: "Age",
        grid:"col-md-6",
        value: ko.observable(),
        min:18,
        max:99,
      },
      {
        componentName: "kit-input-email",
        ar: "البريد الالكتروني",
        en: "email",
        fn: "email",
        value: ko.observable(),
      },
      {
        componentName: "kit-input-password",
        ar: "كلمه المرور",
        en: "password",
        fn: "password",
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
        componentName: "kit-input-date",
        ar: "تاريخ الميلاد",
        en: "Birth date",
        fn: "Birth date",
        value: ko.observable(),
      },
      {
        componentName: "kit-input-checkbox",
        ar: "اوافق على الشروط",
        en: "Agree",
        fn: "Agree",
        value: ko.observable(),
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
     /* {
        componentName: "kit-input-select",
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
      }
      */
     {
         componentName: "kit-input-select",
         ar: "المحافظه",
         en: "contery",
         fn: "contery",
         value: ko.observable(),
         getOptions: function () {
           return [
             {
               value: "1",
               ar: "صنعاء",
               en: "sanaa",
             },
             {
               value: "2",
               ar: "عدن",
               en: "aden",
             },
             {
               value:"3",
               ar:"تعز",
               en:"taiz",
             },
             {
              value:"4",
              ar:"حضرموت",

             },
             {
              value:"5",
              ar:"الحديده",

             },
             {
              value:"6",
              ar:"ذمار",
             },
             {
              value:"7",
              ar:"صعده",

             }, 
            //  {
            //   value
            //  },
           ];
          }
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
            group1.data.KVItems["contery"].visible(0);
            
        }
      },
    ];

    group1.data.items(questions.map((q) => new createComponentItem1(q)));
    return group1;
  }
  return Model;
});
