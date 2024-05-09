define(["ko",'page/cv-12-00'], function (ko) {
  // 'use strict';
    let __GN__="references";
  function Model() {
    let createComponentItem1 =ko.vm.createComponentItem;
    let customCounter=0;
    let onLoadData=[];
    let onLoadDataV2=[];
    let group1; 
    group1= {
      componentName: "kit-accordion-v2",
      data: {
        ar: "References",
        citype:"base-section",
        en: "References",
        fn:"references",
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
    require(["page/cv-12-00"],(page)=>{
     
  [ {
    fn:'References',
  gn:'references.references',
  
  },
  {
    
    fn:'Custom',
    ar: "Cusotm",
    en: "Cusotm",
    gn:'references.cusotm',
    
  },].map(d=>{

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
      // return f;

    });
    container.citems.push(f);
    return f;
  },
  visible:ko.observable(1),
  label:page.tag,
  label:d.fn,
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
  normalizedObj.references = self.data.getNormalizedObj = ko.pureComputed(()=>{
  
  
  return {
    "customLabel": "string",
    "fields": {
      "references":container.citems().filter(f=>f.gn=="references.references").map(obj=>({
        "orgName": obj.KVItems.orgName?.value,
        "majorName": obj.KVItems.majorName?.value,
        "fName": obj.KVItems.fName?.value,
        "lName": obj.KVItems.lName?.value,
        "mobile": obj.KVItems.mobile?.value,
        "email": obj.KVItems.email?.value,
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
    console.log("self.onLoadData",230,obj);
    let afterLoadSections=()=>{
      console.log("onLoadData",obj1,obj)
      console.log("self.onLoadData",23,obj);
      let sections=[];
      (obj&&obj.__citemsGns||[]).map(citemGn=>{
        let citemTmp=(container.config.customItems()||[]).filter(f=>f.gn==citemGn);
        console.log("self.onLoadData",24,container,(container.config),(container.config.customItems()||[]).map(f=>f.gn),citemGn,citemTmp);
        console.log("self.onLoadData",24,(container.config.customItems()||[]).map(f=>f.gn),citemGn,citemTmp);
        if(citemTmp.length==1){
          console.log("self.onLoadData",25,citemTmp);
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
          console.log("self.onLoadData",26,sectionsK,obj);
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
  return { createModel: Model,isCustom:true,gn: __GN__,tag:'References'};
  
});
