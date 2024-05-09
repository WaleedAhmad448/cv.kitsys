define(["ko",'page/cv-03-00'], function (ko) {
  // 'use strict';
  let __GN__="experiences";

  function Model() {
    let createComponentItem1 =ko.vm.createComponentItem;
    let customCounter=0;
    let group1;
    let onLoadData=[];
    let onLoadDataV2=[];

    group1= {
      componentName: "kit-accordion-v2",
      data: {
        ar: "الوظائف",
        en: "Employment",
        citype:"base-section",
        fn:"experiences",       
        onLoadData:onLoadData,
        onLoadDataV2:onLoadDataV2,
        gn: __GN__,
        optional: ko.observable(2),
        visible:ko.observable(1),
        items: ko.observableArray(),        
        citems: ko.observableArray([]),
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
    require(["page/cv-03-00"],(page)=>{
     
  [ {
    fn:'Employments',
    ar:'Employments',
    en:'Employments',
  gn:'experiences.experiences',
  
  },
  {
    
    fn:'trainings',
  gn:'experiences.trainings',
    ar: "Training Information",
    en: "Training Information",
    
  },
  {
    
    fn:'Custom',
  gn:'experiences.cusotm',
    ar: "Cusotm",
    en: "Cusotm",
    
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
 
  let container=self.data=new createComponentItem1( group1.data);
  normalizedObj.experiences = self.data.getNormalizedObj = ko.pureComputed(()=>{
  
  
  return {
    "customLabel": "string",
    "fields": {
      "experiences":container.citems().filter(f=>f.gn=="experiences.experiences").map(obj=>({
        "country": obj.KVItems.country?.value,
        "city": obj.KVItems.city?.value,
        "orgName": obj.KVItems.orgName?.value,
        "majorName": obj.KVItems.majorName?.value,
        "sdate": obj.KVItems.sdate?.value,
        "description": obj.KVItems.description?.value,
        "edate": obj.KVItems.edate?.value,
        "isPresent": obj.KVItems.isPresent?.value
    })),
    "trainings":container.citems().filter(f=>f.gn=="experiences.trainings").map(obj=>({
      "country": obj.KVItems.country?.value,
      "city": obj.KVItems.city?.value,
      "orgName": obj.KVItems.orgName?.value,
      "majorName": obj.KVItems.majorName?.value,
      "sdate": obj.KVItems.sdate?.value,
      "description": obj.KVItems.description?.value,
      "edate": obj.KVItems.edate?.value,
      "isPresent": obj.KVItems.isPresent?.value
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
{
  let container=self.data;
  self.data.getNormalizedContextObj = ko.pureComputed(()=>{
  return {
    ...(container.getCustomItemContext&&container.getCustomItemContext()||{}),
    citems:container.citems().map(o=>o.getNormalizedContextObj())
  }
});


}
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
  return { createModel: Model,isCustom:true,tag:'Experiences',gn: __GN__,};
  
});
