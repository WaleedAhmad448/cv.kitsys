define(["ko"], function (ko) {
    // 'use strict';
    function Model() {
      let form1 = {
        componentName: "kit-form",
        data: {
          ar: "بيانات الشخص",
          en: "General Information 3",
          items: ko.observableArray(),
          get KVItems(){
            return (this.items()||[]).reduce((a,b)=>{ 
                //a[b.fn]=b;
                b.items().forEach(q=>{
                  a[q.fn]=q;
                });  
                return a;
            },{});
        },
        get KVGroups(){
          return (this.items()||[]).reduce((a,b)=>{ 
              a[b.fn]=b;
              return a;
          },{});
      },
    },
  };
  
      let createComponentItem1 = function (data) {
        let new_ques = {
            enable: ko.observable(1),
            required: ko.observable(0),
            visible: ko.observable(1),
            //value: ko.observable(),
            ...data,
        };
        if(!data.grid){
          data.grid="col-md-12"
        }
        return new_ques;
      };
      {
  
        let group1={
          componentName: "kit-group",
          ar: "المجموعة الأولى",
          en: "firstGroup",
          fn: "group1",
          items: ko.observableArray(),
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
          required: ko.observable(1),
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
          required: ko.observable(1),
        },
        {
          componentName: "kit-input-email",
          ar: "البريد الالكتروني",
          en: "email",
          fn: "email",
          value: ko.observable(),
          required: ko.observable(1),

        },
        {
          componentName: "kit-input-password",
          ar: "كلمه المرور",
          en: "password",
          fn: "password",
          value: ko.observable(),
          required: ko.observable(1),
        },
        
        {
          componentName: "kit-input-checkbox",
          ar: "اوافق على الشروط",
          en: "Agree",
          fn: "Agree",
          value: ko.observable(),
          onChange:function(){
            form1.data.KVItems["btnNext"].visible(form1.data.KVItems["Agree"].value());
          },
        },
        {
          componentName: "kit-button",
          fn: "btnNext",
          ar: "التالي",
          en: "Next",
          click:function(){
            //   let KVItems=form1.data.KVItems;
            // KVItems["Name"].required(1);

            let gItems= form1.data.KVGroups.group1.items();
            for(let i=0;i<gItems.length;i++){
                let erros=ko.validation.group(gItems[i]);
                erros.showAllMessages();
                if(erros().length>0)
                    return;        
            }
            
            
            form1.data.KVGroups["group1"].visible(0);    
            form1.data.KVGroups["group2"].visible(1);    
            //form1.data.KVItems["email"].visible(0);
                //form1.data.KVItems[""].visible(0);
  
          },
        },
        {
          componentName: "kit-button",
          fn: "btnBack",
          ar: "رجوع",
          btnClass: "default",
          en: "Back",
          click:function(){
              window.location.href=window.location.origin+"/index.html?page=2";
          }
        },
      ];
  
      group1.items(questions.map((q) =>{ 
        let tq=new createComponentItem1(q);
        if(tq.value)
            tq.value.extend({required:{onlyIf:ko.pureComputed(()=>tq.visible()&&tq.required())}})
        return tq;
      
    }));
      form1.data.items.push(new createComponentItem1(group1));
      
      }
      {
  
        let group2={
          componentName: "kit-group",
          ar: "المجموعة الأولى",
          en: "firstGroup",
          fn: "group2",
          items: ko.observableArray(),
        };
        let questions;
      questions= [
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
          fn: "btnNext2",
          ar: "التالي",
          en: "Next",
          click:function(){
                form1.data.KVItems["email"].visible(0);
                //form1.data.KVItems[""].visible(0);
  
          },
        },
        {
          componentName: "kit-button",
          fn: "btnBack2",
          ar: "رجوع",
          btnClass: "default",
          en: "Back",
          click:function(){
          
            form1.data.KVGroups["group1"].visible(1);    
            form1.data.KVGroups["group2"].visible(0);    
          }
        },
      ];
      group2=new createComponentItem1(group2);
      group2.visible(0);
      group2.items(questions.map((q) =>{ 
          let tq=new createComponentItem1(q);
          if(tq.value)
            tq.value.extend({required:{onlyIf:ko.pureComputed(()=>tq.visible()&&tq.required())}})
        return tq;
        }));
      form1.data.items.push(group2);
      
      }
      form1.data.items().forEach(g=>{
        g.items().forEach(q=>{
          if(q.onChange){
            q.value.subscribe(val=>{
              q.onChange();
            });
          }
        })
      });
      
      return form1;
    }
    return Model;
  });
  
  