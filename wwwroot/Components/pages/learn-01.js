let learn01=null;
define(["ko"], function (ko) {
    // 'use strict';
learn01={
  max:ko.observable(100),
  value:ko.observable(30),
  draw:ko.observable(0),

};
learn01.progressBs4=ko.pureComputed(()=>`
<div class="progress row">
<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="${learn01.value()}" aria-valuemin="0" aria-valuemax="${learn01.max()}" style="width: 75%"></div>
</div>
`);
    ko.learn01(learn01);


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
          componentName: "kit-cover",
          ar: "الشعار",
          en: "Logo",
          fn: "logo",
          value: ko.observable("/wwwroot/images/logo.png"),
          required: ko.observable(1),

        },
        {
          componentName: "kit-image",
          ar: "صورة عشوائية",
          en: "Random",
          fn: "random",
          value: ko.observable("https://picsum.photos/400/470/?random=4"),
          required: ko.observable(1),

        },
        {
          componentName: "kit-input-email",
          ar: " اسم المسنخدم",
          en: "user",
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
          componentName: "kit-button",
          fn: "btnNext",
          ar: "التالي",
          en: "Next",
          click:function(){
            
            let gItems= form1.data.KVGroups.group1.items();
            for(let i=0;i<gItems.length;i++){
                let erros=ko.validation.group(gItems[i]);
                erros.showAllMessages();
                if(erros().length>0)
                return;        
              }
              let KVItems=form1.data.KVItems;
            
            
            if(KVItems["email"].value()=="admin"&&KVItems["password"].value()=="123")
            {
              window.location.href=window.location.origin+"/index.html?page=products";

            }
            else{
              alert("Login Faild");
            }
            //form1.data.KVItems["email"].visible(0);
                //form1.data.KVItems[""].visible(0);
  
          },
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
  