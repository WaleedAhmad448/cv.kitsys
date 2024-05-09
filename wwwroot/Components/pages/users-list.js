define(["ko"], function (ko) {
    // 'use strict';
    function Model() {
      let form1 = {
        componentName: "kit-datatable-v1",
        data: {
          componentName: "kit-datatable-v1",
          ar: "المستخدمين",
          en: "Users List",
          columns:  ko.observableArray([
            {data:'Age',title:'Age',},
            {data:'Agree',title:'Agree',},
            {data:'Name',title:'Name',},
            {data:'email',title:'email',},
            {data:'password',title:'password',},
            //{data:'gender',title:'Gender',render:function(data,type,row){ return data==1?"Male":"Female"}},
            {data:null,title:'Actions',render:function(data,type,row){
             return `<button type="button" data-bind="click:()=>vm.delete(data)">X</button><button type="button" data-bind="click:()=>vm.view(data)">View</button>` 
            }},
          ]),
          id:1,
          rows:  ko.observableArray([]),
          delete: function (data) {
            this.rows.remove(data);
            let key=data.email;
            let tableData= JSON.parse(localStorage.getItem("JsDb-t-"+this.id)||"{}");
            delete tableData[key];
            localStorage.setItem("JsDb-t-"+this.id,JSON.stringify(tableData));
          },
          view: function (data) {
            ko.vm.pushPage(this.id,data.email);
          },
          loadRows:function(){
            this.rows(Object.values(JSON.parse(localStorage.getItem("JsDb-t-"+this.id)||"{}")));
          },
          addNew:function(){
            ko.vm.pushPage(this.id);
            
        
          },
          
          
        },
    };

    return form1;
  }
    return Model;
});
  