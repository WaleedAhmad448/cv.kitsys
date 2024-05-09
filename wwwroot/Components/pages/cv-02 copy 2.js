define(["ko",'page/cv-02-00'], function (ko) {
  // 'use strict';
  let __GN__="educations";

  function Model() {
    let customCounter=0;
    let createComponentItem1 =ko.vm.createComponentItem;
    let onLoadData=[];
    let onLoadDataV2=[];
    let group1 = {
      componentName: "kit-accordion-v2",
      
      data: {
        ar: " المؤهلات الدراسية",
        en: "Education",
        fn: "educations",
        citype:"base-section",
        gn: __GN__,
        onLoadData:onLoadData,
        onLoadDataV2:onLoadDataV2,
        movable:true,
        visible:ko.observable(1),
        optional: ko.observable(2),
        items: ko.observableArray([]),
        citems: ko.observableArray([]),
        get KVItems(){
            // return (this.items()||[]).reduce((a,b)=>{ 
            //     a[b.fn]=b;  
            //     return a;
            // },{});
        },
        config:{
          canAdd:ko.observable(0),
          isSortable:ko.observable(1),
          customItems:ko.observableArray([]),
          createCustom:()=>{
            customCounter++;
            group1.data.items.push(new createComponentItem1(new  EducationItem({
              ar: "أخرى",
                en: "أخرى",
                canRemove:1,
                isCustom:1,
            })));
          },
        },
      },
    };
let container = group1.data;
/**/
    require(["page/cv-02-00"],(page)=>{
      let eduList=[
        {
          fn:'MiddleSchool',
          gn:'educations.schools',
          ar: "مرحلة التعليم الأساسي",
          en: "Middle School Information",
        },
        {
          fn:'HighSchool',
          gn:'educations.schools',
          ar: "مرحلة التعليم الثانوي",
          en: "High School Information",
        },
       
      ];
      eduList.map(d=>{

        container.config.customItems.push({...page,...d,
          createObject:function(){
            this.visible(false);
            let PageModel=page.createModel;
            let pageObj=new PageModel();
            for(let k in d){
              pageObj[k]=d[k];
            }
            pageObj.parent=container;
            let f=new createComponentItem1({...pageObj,remove:null,canRemove:true,componentName:pageObj.componentName});
            
            f.onRemove.push(()=>{
          this.visible(true);
        });

        container.citems.push(f);
        return f;
      },
      visible:ko.observable(1),
      label:page.tag,
      label:d.fn,
    }); 
  });
  [
     {
    fn:'AssociateDegree',
  gn:'educations.associates',
  ar: "Associate Degree Information",
  en: "Associate Degree Information",
  
  },
  {
    fn:'Courses',
  gn:'educations.courses',
  ar: "Course Information",
  en: "Course Information",
  
  },
  {
    fn:'BachelorsDegree',
  gn:'educations.bachelors',
  ar: "Bachelor’s Degree Information",
  en: "Bachelor’s Degree Information",
  
  },
  {
    fn:'MastersDegree',
    gn:'educations.masters',
    ar: "Master's Degree Information",
    en: "Master's Degree Information",
    
  },
  {
    fn:'PhD',
    gn:'educations.phds',
    ar: "PhD Information",
    en: "PhD",
    
  },
  {
    fn:'Cusotm',
    gn:'educations.cusotm',
    ar: "Cusotm",
    en: "Cusotm",
    
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
  label:page.tag,
  label:d.fn,
}); 
});
group1.SectionsLoaded=true;
if(group1.afterLoadSections){
  group1.afterLoadSections();
}
    onLoadDataV2.map(o=>o());
  });
  
  /**/
    // group1.data.items.push(new createComponentItem1(new  EducationItem({
    //   ar: "الشهادة الأساسية",
    //     en: "الشهادة الأساسية",
    //     optional: ko.observable(2),
    // })));
    
    // group1.data.items.push(new createComponentItem1(new  EducationItem({
    //   ar: "الشهادة الثانوية",
    //     en: "الشهادة الثانوية",
    //     optional: ko.observable(2),
    // })));
    
    // group1.data.items.push(new createComponentItem1(new  EducationItem({
    //   ar: "الشهادة البكلريوس",
    //     en: "الشهادة البكلريوس",
    //     optional: ko.observable(2),
    // })));
    {
      /*
      
      */
      let self=group1;
      let container=self.data=new createComponentItem1(self.data);
      normalizedObj.eductions = self.data.getNormalizedObj = ko.pureComputed(()=>{
        let fields=[].reduce((a,b)=>{ 
        a[b]=container.KVItems[b]?.value;
        return a
      },{});
      
      return {
        "customLabel": "string",
        "fields": {
          // "schools": [
          //   {
          //     "contry": "string",
          //     "city": "string",
          //     "orgName": "string",
          //     "majorName": "string",
          //     "sdate": "string",
          //     "description": "string",
          //     "edate": "string",
          //     "isPresent": true
          //   }
          // ],
          "bachelors":container.citems().filter(f=>f.gn=="educations.bachelors").map(obj=>({
            "country": obj.KVItems.country?.value,
            "city": obj.KVItems.city?.value,
            "orgName": obj.KVItems.orgName?.value,
            "majorName": obj.KVItems.majorName?.value,
            "sdate": obj.KVItems.sdate?.value,
            "description": obj.KVItems.description?.value,
            "edate": obj.KVItems.edate?.value,
            "isPresent": obj.KVItems.isPresent?.value
        })),
        "masters":container.citems().filter(f=>f.gn=="educations.masters").map(obj=>({
          "fn": obj.fn,
          "country": obj.KVItems.country?.value,
          "city": obj.KVItems.city?.value,
          "orgName": obj.KVItems.orgName?.value,
          "majorName": obj.KVItems.majorName?.value,
          "sdate": obj.KVItems.sdate?.value,
          "description": obj.KVItems.description?.value,
          "edate": obj.KVItems.edate?.value,
          "isPresent": obj.KVItems.isPresent?.value
      })),
      "courses":container.citems().filter(f=>f.gn=="educations.courses").map(obj=>({
        "fn": obj.fn,
        "country": obj.KVItems.country?.value,
        "city": obj.KVItems.city?.value,
        "orgName": obj.KVItems.orgName?.value,
        "majorName": obj.KVItems.majorName?.value,
        "sdate": obj.KVItems.sdate?.value,
        "description": obj.KVItems.description?.value,
        "edate": obj.KVItems.edate?.value,
        "isPresent": obj.KVItems.isPresent?.value
      })),
      "phds":container.citems().filter(f=>f.gn=="educations.phds").map(obj=>({
        "fn": obj.fn,
        "country": obj.KVItems.country?.value,
        "city": obj.KVItems.city?.value,
        "orgName": obj.KVItems.orgName?.value,
        "majorName": obj.KVItems.majorName?.value,
        "sdate": obj.KVItems.sdate?.value,
        "description": obj.KVItems.description?.value,
        "edate": obj.KVItems.edate?.value,
        "isPresent": obj.KVItems.isPresent?.value
    })),
    "associates":container.citems().filter(f=>f.gn=="educations.associates").map(obj=>({
      "fn": obj.fn,
      "country": obj.KVItems.country?.value,
      "city": obj.KVItems.city?.value,
      "orgName": obj.KVItems.orgName?.value,
      "majorName": obj.KVItems.majorName?.value,
      "sdate": obj.KVItems.sdate?.value,
      "description": obj.KVItems.description?.value,
      "edate": obj.KVItems.edate?.value,
      "isPresent": obj.KVItems.isPresent?.value
  })),
  "schools":container.citems().filter(f=>f.gn=="educations.schools").map(obj=>({
    "fn": obj.fn,
    "country": obj.KVItems.country?.value,
    "city": obj.KVItems.city?.value,
    "orgName": obj.KVItems.orgName?.value,
    "majorName": obj.KVItems.majorName?.value,
    "sdate": obj.KVItems.sdate?.value,
    "description": obj.KVItems.description?.value,
    "edate": obj.KVItems.edate?.value,
    "isPresent": obj.KVItems.isPresent?.value
})),
          // "institutes": [
          //   {
          //     "contry": "string",
          //     "city": "string",
          //     "orgName": "string",
          //     "majorName": "string",
          //     "sdate": "string",
          //     "description": "string",
          //     "edate": "string",
          //     "isPresent": true
          //   }
          // ],
          // "courses": [
          //   {
          //     "contry": "string",
          //     "city": "string",
          //     "orgName": "string",
          //     "majorName": "string",
          //     "sdate": "string",
          //     "description": "string",
          //     "edate": "string",
          //     "isPresent": true
          //   }
          //]
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
      console.log("self.onLoadData",30,obj1,obj);
      let afterLoadSections=()=>{
        console.log("onLoadData",obj1,obj)
        console.log("self.onLoadData",3,obj);
        let sections=[];
        (obj&&obj.__citemsGns||[]).map((citemGn,i)=>{
          let citemTmp=(container.config.customItems()||[]).filter(f=>f.gn==citemGn);
          console.log("self.onLoadData",4,sections,container,(container.config),(container.config.customItems()||[]).map(f=>f.gn),citemGn,citemTmp);
          if(citemTmp.length==1){
            console.log("self.onLoadData",5,citemTmp);
            citemTmp=citemTmp[0];
            sections.push(citemTmp.createObject());
          }
          else if(citemTmp.length>1){
            console.log("self.onLoadData",5.5,obj,citemGn.split('.')[1],i,citemTmp);
            let _ii=obj.fields[citemGn.split('.')[1]][obj.__citemsGns.filter((ff,fi)=>fi<i&&ff==citemGn).length];
            citemTmp=citemTmp.find(f=>f.fn==_ii.fn);
            console.log("self.onLoadData",5.51,citemTmp,obj,citemGn.split('.')[1],i,citemTmp);

            if(citemTmp)
              sections.push(citemTmp.createObject());
            // citemTmp=citemTmp.find(f=>f.fn==);
            //  sections.push(citemTmp.createObject());
          }
        });
        console.log("self.onLoadData",5.51001,sections);
        
        sections=sections.reduce((a,b)=>{
          console.log('sections=sections',b);
          if(!a[b.gn])a[b.gn]=[];
            a[b.gn].push(b);
          return a},{});
          for(let k in sections){
            let sectionsK=sections[k]
            console.log("self.onLoadData",6,sectionsK,obj);
            // if(k=="eductaions.schools"){
            //   sectionsK.map((section,i)=>{
            //     if(section.LoadData){

            //       console.log("self.onLoadData",section.gn,7.5,section,obj.fields[k.slice(k.indexOf('.')+1)][i]);
            //       let _d={};
            //       _d[section.fn]={fn:section.fn, fields:obj.fields[k.slice(k.indexOf('.')+1)][i]};
            //       section.LoadData(_d);
            //     }
            //   });
            // }
            // else
            {
              sectionsK.map((section,i)=>{
                if(section.LoadData){

                  console.log("self.onLoadData",section.gn,7,section,obj.fields[k.slice(k.indexOf('.')+1)][i]);
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
  return { createModel: Model,isCustom:true,tag:'education',gn:__GN__};
});
