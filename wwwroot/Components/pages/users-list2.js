define(["ko"], function (ko) {
    // 'use strict';
    function Model() {
      let form1 = {
        componentName: "kit-datatable-v1",
        data: {
          componentName: "kit-datatable-v1",
          ar: "المستخدمين",
          en: "Users List",
          items: ko.observableArray(),
          columns:  ko.observableArray([
            {data:'unitName',title:'Unit Name',},
            // {data:'userFullName',title:'userFullName',},
            // {data:'emailAddress',title:'emailAddress',},
            // {data:'phoneNumber',title:'phoneNumber',},
            {data:'gender',title:'Gender',render:function(data,type,row){ return data==1?"Male":"Female"}},
            {data:'gender',title:'Gender',render:function(data,type,row){ return data==1?"Male":"Female"}},
            {data:null,title:'Actions',render:function(data,type,row){
             return `<button type="button" data-bind="click:()=>vm.delete(data)">X</button><button type="button" data-bind="click:()=>vm.view(data)">View</button>` 
            }},
          ]),
          rows:  ko.observableArray([]),
          delete: function (data) {
            this.rows.remove(data);
          },
          view: function (data) {
            
          },
          loadRows:function(){
            this.rows([
              { gender:1, unitName: "Unit 100", userFullName: "Gary Holt", phoneNumber: "+1 (516) 756-6689", emailAddress: "garyholtex@yahoo.com" },
              { gender:1, unitName: "Unit 102", userFullName: "Lucas Haneman", phoneNumber: "+1 (995) 135-4644", emailAddress: "haneman_express@gmail.com" },
              { gender:1, unitName: "Unit 103", userFullName: "Michael Patton", phoneNumber: "+1 (713) 442-7963", emailAddress: "faithnm@mail.com" },
              { gender:1, unitName: "Unit 104", userFullName: "Neil Fallon", phoneNumber: "+1 (913) 343-4683", emailAddress: "purefury@cmail.com" },
              { gender:1, unitName: "Unit 200", userFullName: "Eric Oblander", phoneNumber: "+1 (713) 763-9902", emailAddress: "fivehjohnson@mail.com" },
              { gender:1, unitName: "Unit 201", userFullName: "Jennifer Diehl", phoneNumber: "+1 (132) 223-9435", emailAddress: "firered@gmail.com" },
              { gender:1, unitName: "Unit 202", userFullName: "Anne DeMarinis", phoneNumber: "+1 (368) 693-1364", emailAddress: "anne_youth@mail.com" },
              { gender:2, unitName: "Unit 203", userFullName: "Colin Hay", phoneNumber: "+1 (697) 693-6967", emailAddress: "c0l1n_hayy@yahoo.com" },
              { gender:2, unitName: "Unit 204", userFullName: "Hyron Fenton", phoneNumber: "+1 (135) 185-4689", emailAddress: "hyrothehero@yahoo.com" },
              { gender:2, unitName: "Unit 100", userFullName: "Kerry King", phoneNumber: "+1 (516) 753-5648", emailAddress: "unit731@slail.com" },
              { gender:2, unitName: "Unit 301", userFullName: "Eugene Hütz", phoneNumber: "+1 (633) 564-9032", emailAddress: "eugene_h1@gogbor.com" },
              { gender:2, unitName: "Unit 302", userFullName: "Martin Friedman", phoneNumber: "+1 (523) 311-1312", emailAddress: "mfriedman@jmail.com" },
              { gender:2, unitName: "Unit 303", userFullName: "Scott Ian", phoneNumber: "+1 (612) 331-0021", emailAddress: "scott3133@mail.com" },
            ]);
          },
          addNew:function(){
            require(['page/'+1],(g1)=>{
              ko.vm.CurrentPage(g1());
              
          });
          },
        },
    };

    return form1;
  }
    return Model;
});
  