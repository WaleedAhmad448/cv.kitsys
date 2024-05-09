define(["ko",'page/cv-09-00'], function (ko) {
  // 'use strict';
  let __GN__="achievements";
  function Model() {
    let createComponentItem1 =ko.vm.createComponentItem;
    let customCounter=0;
    let onLoadData=[];
    let onLoadDataV2=[];
    let group1; 
    group1= {
      componentName: "kit-accordion-v2",
      data: {
        ar: "الانجازات",
        optional: ko.observable(2),
        citype:"base-section",
        en: "Achievements",
        onLoadData:onLoadData,
        onLoadDataV2:onLoadDataV2,
        gn: __GN__,
        fn: "achievements",
        visible:ko.observable(1),
        citems: ko.observableArray([]),
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
                grid:"col-md-6",
                canRemove:1,
                isCustom:1,
              })
              );
          },
        },
      },
    };

    {

      let container = group1.data;
    /**/
        require(["page/cv-09-00"],(page)=>{
         
      [ {
        fn:'achievements',
        ar:'Achievements',
      gn:'achievements.achievements',
      
      },
      {
        
        fn:'custom',
      gn:'achievements.custom',
        ar: "Custom",
        en: "Custom",
        
      },
      
    ].map(d=>{
    
        container.config.customItems.push({...page,...d,
          createObject:function(){
            //this.visible(false);
            let PageModel=page.createModel;
            let pageObj=new PageModel();
            for(let k in d){
              pageObj[k]=d[k];
            }
            pageObj.parent=container;
            let f=new createComponentItem1({...pageObj,canRemove:true,componentName:pageObj.componentName});
            f.onRemove.push(()=>{
          this.visible(true);
        });
        container.citems.push(f);
        return f;
      },
      visible:ko.observable(1),
      label:d.fn,
      label:page.tag,
      gn:d.gn,
    }); 
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
      normalizedObj.achievements = self.data.getNormalizedObj = ko.pureComputed(()=>{
      
      
      return {
        "customLabel": "string",
        "fields": {
          "achievements":container.citems().filter(f=>f.gn=="achievements.achievements").map(obj=>({
            "orgName": obj.KVItems.orgName?.value,
            "majorName": obj.KVItems.majorName?.value,
            "description": obj.KVItems.description?.value
           
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
        console.log("self.onLoadData",10130,obj);
        let afterLoadSections=()=>{
          console.log("onLoadData",obj1,obj)
          console.log("self.onLoadData",1013,obj);
          let sections=[];
          (obj&&obj.__citemsGns||[]).map(citemGn=>{
            let citemTmp=(container.config.customItems()||[]).filter(f=>f.gn==citemGn);
            console.log("self.onLoadData",1014,container,(container.config),(container.config.customItems()||[]).map(f=>f.gn),citemGn,citemTmp);
            if(citemTmp.length==1){
              console.log("self.onLoadData",1015,citemTmp);
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
              console.log("self.onLoadData",1016,sectionsK,obj);
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
  return { createModel: Model,isCustom:true,gn: __GN__,tag:'achievements'};
  
});
