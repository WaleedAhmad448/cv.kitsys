define(["ko",'page/cv-05-00'], function (ko) {
  // 'use strict';
  let __GN__="skills";
  function Model() {
    let createComponentItem1 =ko.vm.createComponentItem;
    let customCounter=0;
    let group1;   
    let onLoadData=[];
    let onLoadDataV2=[];

    group1= {
      componentName: "kit-accordion-v2",
      data: {
        ar: "المهاره",
        citype:"base-section",
        en: "skills",
        onLoadData:onLoadData,
        onLoadDataV2:onLoadDataV2,
        gn: __GN__,
        fn:"skills",
        visible:ko.observable(1),
        optional: ko.observable(2),
        citems: ko.observableArray(),
        items: ko.observableArray(),
        get KVItems(){
            return (this.items()||[]).reduce((a,b)=>{ 
                a[b.fn]=b;  
                return a;
            },{});
        },
        config:{
          customItems:ko.observableArray([]),
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
              //  grid:"col-md-6",
                canRemove:1,
                isCustom:1,
              })
              );
          },
        },
      },
    };
    {
      let self=group1;
        let questions;
          questions= [
          ];
          let container=self.data;
          self.data.items(questions.map((q) => new createComponentItem1(q)));
          
      }
   
    {

      let container = group1.data;
    /**/
        require(["page/cv-05-00"],(page)=>{
         
      [ {
        fn:'skills',
      gn:'skills.skills',
      
      },
      {
        
        fn:'Custom',
      gn:'skills.cusotm',
        
      },].map(d=>{
  ko.CVHelpers.customItem.multiObject(container,page,d);
    });
    group1.SectionsLoaded=true;
if(group1.afterLoadSections){
  group1.afterLoadSections();
}
onLoadDataV2.map(o=>o());

      });
    }
    {
      /*
      
      */
      let self=group1;
      let container=self.data;
      normalizedObj.skills = self.data.getNormalizedObj = ko.pureComputed(()=>{
      
      
      return {
        "customLabel": "string",
        "fields": {
          "skills":container.citems().filter(f=>f.gn=="skills.skills").map(obj=>({
          "name":obj.KVItems.name?.value,
          "level":obj.KVItems.level?.value,
        })),
        },
        "customFields": [
          {
            "fn": "string"
          }
        ],
    __citemsGns:(container.citems()||[]).map(f=>f.gn),

      }
    });
    }
    {
    
      let self=group1;
      let container=self.data;
      //onLoadData
      self.OldData=null;
      onLoadData.push((obj1,obj)=>{
        console.log("self.onLoadData",130,obj);
        let afterLoadSections=()=>{
          console.log("onLoadData",obj1,obj)
          console.log("self.onLoadData",13,obj);
          let sections=[];
          (obj&&obj.__citemsGns||[]).map(citemGn=>{
            let citemTmp=(container.config.customItems()||[]).filter(f=>f.gn==citemGn);
            console.log("self.onLoadData",14,container,(container.config),(container.config.customItems()||[]).map(f=>f.gn),citemGn,citemTmp);
            if(citemTmp.length==1){
              console.log("self.onLoadData",15,citemTmp);
              citemTmp=citemTmp[0];
              sections.push(citemTmp.createObject());
            }
            else if(citemTmp.length>1){
              // citemTmp=citemTmp.find(f=>f.fn==);
              //  sections.push(citemTmp.createObject());
            }
          });
          sections=sections.reduce((a,b)=>{
            if(!a[b.gn])a[b.gn]=[];
            a[b.gn].push(b);
            return a},{});
            for(let k in sections){
              let sectionsK=sections[k]
              console.log("self.onLoadData",16,sectionsK,obj);
              if(k=="eductaions.schools"){
    
              }
              else{
                sectionsK.map((section,i)=>{
                  if(section.LoadData){
    
                    console.log("self.onLoadData",section.gn,17,section,obj.fields[k.slice(k.indexOf('.')+1)][i]);
                    let _d={};
                    _d[section.fn]={fn:section.fn, fields:obj.fields[k.slice(k.indexOf('.')+1)][i]};
                    section.LoadData(_d);
                  }
                });
              }
              
            }
          //   .map(section=>{
          //   console.log("self.onLoadData",6,section,obj);
          // });
        };
        if(self.SectionsLoaded){
          afterLoadSections();
        }
        else{
          self.afterLoadSections=afterLoadSections;
        }
        });
      }
    return group1;
  }
  return { createModel: Model,isCustom:true,gn: __GN__,tag:'skills'};

});
