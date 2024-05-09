/*
https://tbbs.turkiyeburslari.gov.tr/
waleed.3amer@hotmail.com
Waleed770333505
*/
let normalizedObj={};
let _getNormalizedObj=null;
define(["ko",'kit-context-resumes'], function (ko) {
  // 'use strict';
  _getNormalizedObj=()=>ko.toJS(normalizedObj);
  function Model(Query) {
    let createComponentItem1 =ko.vm.createComponentItem;
    let customCounter=0;
    let self; 
    self= {
      componentName: "page-mycv-container",
      data: {
        ar: "بيانات السيرة الذاتية2",
        en: "بيانات السيرة الذاتية2",
        visible:ko.observable(1),
        items: ko.observableArray(),
        citems: ko.observableArray(),
        get KVItems(){
            return (this.items()||[]).reduce((a,b)=>{ 
                a[b.fn]=b;  
                return a;
            },{});
        },
        config:{
          canAdd:ko.observable(1),
          createCustom:()=>{
            customCounter++;
            self.data.items.push(
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
    
    
   
    let includePages=['cv-01','cv-02','cv-03','cv-04','cv-05','cv-06','cv-07','cv-08','cv-09',
    'cv-10','cv-11','cv-12','cv-13','cv-14'
  ];
    let container= {
      fn:"container",
      componentName: "kit-accordion-v2",
      header:{
        show:false,
      },
      ar: "بيانات السيرة الذاتية",
      en: "بيانات السيرة الذاتية",
      grid:'uk-width-expand',
      visible:ko.observable(1),
      items: ko.observableArray(),
      citems: ko.observableArray(),
      get KVItems(){
          return (this.items()||[]).reduce((a,b)=>{ 
              a[b.fn]=b;  
              return a;
          },{});
      },
      config:{
        canAdd:ko.observable(0),
        customItems:ko.observableArray([]),
        customItemsOptions:ko.pureComputed(function(){
          let config=this;
          console.log(config,container);
          
        }),
        createCustom:()=>{
          customCounter++;
          container.items.push(
            new createComponentItem1( {
              componentName: "kit-input-custom",
              ar: "sمخصص "+customCounter,
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
    };
    let preview=self.data;
    require([...includePages.map(p=>'page/'+p)],(...pages)=>{
      let objData=ko.KitContext.Resumes.getObjectOrDefault(Query.id);
      
      (pages||[]).map(page=>{

        if(page.isCustom){
          // let PageModel=page.createModel;
          // let pageObj=new PageModel();
          // let section=new createComponentItem1({...pageObj.data,componentName:pageObj.componentName});
          // if(section.LoadData)
          // section.LoadData(objData);
          //container.citems.push(section); 
          container.config.customItems.push({...page,
          createObject:function(){
            this.visible(false);
             let PageModel=page.createModel;
          let pageObj=new PageModel();
          pageObj.data.parent=container;
          let f=new createComponentItem1({...pageObj.data,componentName:pageObj.componentName});
          f.onRemove.push(()=>{
            this.visible(true);
          });
          container.citems.push(f);
          return f;
          },
          visible:ko.observable(1),
          label:page.tag,
          gn:page.gn,
          }); 
        }
        else {
          let PageModel=page.createModel;
          let pageObj=new PageModel();
          let section=new createComponentItem1({...pageObj.data,componentName:pageObj.componentName});
          if(section.LoadData)
            section.LoadData(objData);
          container.items.push(section);    
        }
      });
      (objData.__citemsGns||[]).map(citemGn=>{
        let citemTmp=(container.config.customItems()||[]).find(f=>f.gn==citemGn);
          if(citemTmp){
            let section=citemTmp.createObject();
            console.log("self.onLoadData",1,section,objData);
            if(section.LoadData){

              section.LoadData(objData);
            }
          }
      });
      // container.items.push(new createComponentItem1({
      //   ar: "حفظ البيانات",
      //   en: "Save Data",
      //   componentName: "kit-button",
      //   click:()=>{
      //   },
      // }));
      preview.items.push(new createComponentItem1({
        label: "معاينة",
        grid:'uk-width-1-2',
        componentName: "kit-print-preview",
        getNormalizedObj:self.data.getNormalizedObj,
        visible:ko.observable(1),
        tmpPreviewName:ko.observable("cv-template-06"),
        tmpName:ko.observable(),
      }));
      });
      self.data.getNormalizedObj = ko.pureComputed(()=>{
        return {
          personalInfo:container.KVItems.personalInfo?.getNormalizedObj(),
          contacts:(container.citems()||[]).find(f=>f.fn=='contacts')?.getNormalizedObj(),
          educations:(container.citems()||[]).find(f=>f.gn=='educations')?.getNormalizedObj(),
          profile:(container.citems()||[]).find(f=>f.gn=='profile')?.getNormalizedObj(),
          experiences:(container.citems()||[]).find(f=>f.gn=='experiences')?.getNormalizedObj(),
          languages:(container.citems()||[]).find(f=>f.gn=='languages')?.getNormalizedObj(),
          skills:(container.citems()||[]).find(f=>f.gn=='skills')?.getNormalizedObj(),
          hobbies:(container.citems()||[]).find(f=>f.gn=='hobbies')?.getNormalizedObj(),
          talents:(container.citems()||[]).find(f=>f.gn=='talents')?.getNormalizedObj(),
          references:(container.citems()||[]).find(f=>f.gn=='references')?.getNormalizedObj(),
          events:(container.citems()||[]).find(f=>f.gn=='events')?.getNormalizedObj(),
          achievements:(container.citems()||[]).find(f=>f.gn=='achievements')?.getNormalizedObj(),
          voluntaries:(container.citems()||[]).find(f=>f.gn=='voluntaries')?.getNormalizedObj(),
          __citemsGns:(container.citems()||[]).map(f=>f.gn),
        };
      });
    // self.data.items(questions.map((q) => new createComponentItem1(q)));
    self.data.items.push(new createComponentItem1(container));

    // self.data.items.push(new createComponentItem1({
    //   ar: "بيانات السيرة الذاتية",
    //   en: "بيانات السيرة الذاتية",
    //   componentName: "cv-template-06",
    //   visible:ko.observable(1),
    // }));
    {
      window.onkeydown = function(event)
      {
        if (event.ctrlKey && event.keyCode==83)
        {
          event.preventDefault();

          setTimeout(function()
          {
          if (typeof power_keys_form_save=='function') {power_keys_form_save(event);}
          },1);
        }
      }

      function power_keys_form_save(event)
      {
        ko.KitContext.Resumes.saveObject(Query.id,self.data.getNormalizedObj())
        console.log("save",self.data.documentId);
      }
    }
    return self;
  }
  return Model;
});
