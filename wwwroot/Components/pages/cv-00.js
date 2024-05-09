/*
https://tbbs.turkiyeburslari.gov.tr/
waleed.3amer@hotmail.com
Waleed770333505
*/
let normalizedObj={};
let _getNormalizedObj=null;
let includePages=['cv-01','cv-02','cv-03','cv-04','cv-05','cv-06','cv-07','cv-08','cv-09',
    'cv-10','cv-11','cv-12','cv-13','cv-14'
  ];
define(["ko",'kit-cv-section-helper','kit-context-resumes','kit-cv-helpers',...(includePages.map(o=>`page/`+o))], function (ko,KitCvSectionHelper) {
  // 'use strict';
 
  _getNormalizedObj=()=>ko.toJS(normalizedObj);
  function Model(Query) {
    let currentLocal =ko.observable('ar');
    let createComponentItem1 =ko.vm.createComponentItem;
    let customCounter=0;
    let self; 
    self= {
      componentName: "page-mycv-container",
      data: {
        componentName: "page-mycv-container",
        citype:"root",
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
    
    
   
    
    let container= new createComponentItem1({
      fn:"container",
      componentName: "kit-accordion-v2",
      citype:"root-section",
      header:{
        show:false,
      },
      ar: "بيانات السيرة الذاتية",
      en: "بيانات السيرة الذاتية",
      grid:'col-12',
      visible:ko.observable(1),
      items: ko.observableArray(),
      citems: ko.observableArray(),
      // get KVItems(){
      //     return (this.items()||[]).reduce((a,b)=>{ 
      //         a[b.fn]=b;  
      //         return a;
      //     },{});
      // },
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
    });
    let preview=self.data;
    require([...includePages.map(p=>'page/'+p)],(...pages)=>{
      let objData=ko.KitContext.Resumes.getObjectOrDefault(Query.id);
      console.log('OLD-DATA',objData);
      currentLocal(objData.local||'ar');
      (pages||[]).map(page=>{

        if(page.isCustom){
          // let PageModel=page.createModel;
          // let pageObj=new PageModel();
          // let section=new createComponentItem1({...pageObj.data,componentName:pageObj.componentName});
          // if(section.LoadData)
          // section.LoadData(objData);
          //container.citems.push(section); 
          container.config.customItems.push({...page,
          createObject:function(oldData){
            this.visible(false);
             let PageModel=page.createModel;
          let pageObj=new PageModel();
          pageObj.data.parent=container;
          let f=new createComponentItem1({...pageObj.data,canRemove:true,componentName:pageObj.componentName});
          // f.canRemove=true;
          f.optional(0);
          f.onRemove.push(()=>{
            this.visible(true);
            container.citems.remove(f);

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
          // if(section.LoadDataV2){
          //   section.LoadDataV2(objData.normalizedObj);
          // }
          container.items.push(section);    
        }
      });
      container.LoadDataV2(objData?.normalizedObj);
      container.onLoadDataV2.map(o=>o());

      if(objData?.normalizedObj&&objData.normalizedObj.citems){
        container.LoadDataV2(objData?.normalizedObj);  
        // (objData.normalizedObj.citems).map(citem=>{
          //   let citemGn=citem.gn;
          //   let citemTmp=(container.config.customItems()||[]).find(f=>f.gn==citemGn);
          //   if(citemTmp){
          //     let section=citemTmp.createObject();
          //     console.log("self.onLoadData",1,section,objData);
          //     if(section.LoadDataV2){
          //       section.LoadDataV2(citem);
          //     }
          //     // if(section.LoadData){
          //     //   section.LoadData(objData);
          //     // }
          //   }
          // });
      }
      else if(objData&&objData['a-v2']&&objData['a-v2'].citems){
        container.LoadDataV2(objData['a-v2']);
      }
      // (objData.__citemsGns||[]).map(citemGn=>{
      //   let citemTmp=(container.config.customItems()||[]).find(f=>f.gn==citemGn);
      //     if(citemTmp){
      //       let section=citemTmp.createObject();
      //       console.log("self.onLoadData",1,section,objData);
      //       if(section.LoadDataV2){
      //         section.LoadDataV2(objData.normalizedObj);
      //       }
      //       // if(section.LoadData){
      //       //   section.LoadData(objData);
      //       // }
      //     }
      // });
      // container.items.push(new createComponentItem1({
      //   ar: "حفظ البيانات",
      //   en: "Save Data",
      //   componentName: "kit-button",
      //   click:()=>{
      //   },
      // }));
      {

        let t=new createComponentItem1({
          label: "معاينة",
          grid:'uk-width-1-1',
          componentName: "kit-print-preview",
          getNormalizedObj:self.data.getNormalizedObj,
          visible:ko.observable(1),
          tmpPreviewName:ko.observable("cv-template-08"),
          tmpName:ko.observable(),
          _currentLocal:currentLocal,
        });
        t.previewOptions=objData?.previewOptions;
        
        preview.preview=(t);
      }
      });
      {
      // self.data.normalizedObj=container.cihelper.normalizedObj;
      self.data.getNormalizedObj = ko.pureComputed(()=>{
        console.log("OLD-container.",container);
        //let normalizedObj=container.cihelper.normalizedObj();
        return {
          "normalizedObj":container.cihelper.normalizedObj,
          local:currentLocal,
          personalInfo:container.KVItems.personalInfo?.getNormalizedObj(),
          contacts:container.KVItems.contacts?.getNormalizedObj(),
          // contacts:(container.citems()||[]).find(f=>f.fn=='contacts')?.getNormalizedObj(),
          profile:container.KVItems.profile?.getNormalizedObj(),
          // profile:(container.citems()||[]).find(f=>f.gn=='profile')?.getNormalizedObj(),
          educations:(container.citems()||[]).concat((container.items()||[])).find(f=>f.gn=='educations')?.getNormalizedObj(),
          experiences:(container.citems()||[]).concat((container.items()||[])).find(f=>f.gn=='experiences')?.getNormalizedObj(),
          languages:(container.citems()||[]).concat((container.items()||[])).find(f=>f.gn=='languages')?.getNormalizedObj(),
          skills:(container.citems()||[]).concat((container.items()||[])).find(f=>f.gn=='skills')?.getNormalizedObj(),
          hobbies:(container.citems()||[]).concat((container.items()||[])).find(f=>f.gn=='hobbies')?.getNormalizedObj(),
          talents:(container.citems()||[]).concat((container.items()||[])).find(f=>f.gn=='talents')?.getNormalizedObj(),
          references:(container.citems()||[]).concat((container.items()||[])).find(f=>f.gn=='references')?.getNormalizedObj(),
          events:(container.citems()||[]).concat((container.items()||[])).find(f=>f.gn=='events')?.getNormalizedObj(),
          achievements:(container.citems()||[]).concat((container.items()||[])).find(f=>f.gn=='achievements')?.getNormalizedObj(),
          voluntaries:(container.citems()||[]).concat((container.items()||[])).find(f=>f.gn=='voluntaries')?.getNormalizedObj(),
          previewOptions:preview.preview?(preview.preview.getPreviewOptions?preview.preview.getPreviewOptions():preview.preview.previewOptions):null,
          __citemsGns:(container.citems()||[]).map(f=>f.gn),
          __getCItemComponentObj:function(key,cat){
            let getInfo=obj=>{
              return {
                "country": obj.KVItems.country?.value,
                "city": obj.KVItems.city?.value,
                "orgName": obj.KVItems.orgName?.value,
                "majorName": obj.KVItems.majorName?.value,
                "sdate": obj.KVItems.sdate?.value,
                "description": obj.KVItems.description?.value,
                "edate": obj.KVItems.edate?.value,
                "isPresent": obj.KVItems.isPresent?.value,
            }
            };
            console.log('__getCItemComponentObj',key,cat);
            if(cat=='body'){
              let res={
                section:{name:'cvs-section-01',params:{data:{}}},
                //label:{name:'cvs-label-01',data:{label:'Education'}},
                //body:{name:'cvs-tls-01',data:{items:ko.pureComputed(()=>((container.citems()||[]).find(f=>f.gn=='educations')?.citems()||[]).map(getInfo))}},
              }
              if(key=='educations'){
                res.label={name:'cvs-label-01',data:{label:'Education'}};
                res.body={name:'cvs-tls-01',data:{items:ko.pureComputed(()=>((container.citems()||[]).find(f=>f.gn=='educations')?.citems()||[]).map(getInfo))}};
              }
              else if(key=='experiences'){
                res.label={name:'cvs-label-01',data:{label:'Experiences'}};
                res.body={name:'cvs-tls-01',data:{items:ko.pureComputed(()=>((container.citems()||[]).find(f=>f.gn=='experiences')?.citems()||[]).map(getInfo))}};
              }
              else if(key=='events'){
                res.label={name:'cvs-label-01',data:{label:'Events'}};
                res.body={name:'cvs-tls-01',data:{items:ko.pureComputed(()=>((container.citems()||[]).find(f=>f.gn=='events')?.citems()||[]).map(getInfo))}};
              }
              else if(key=='voluntaries'){
                res.label={name:'cvs-label-01',data:{label:'Voluntaries'}};
                res.body={name:'cvs-tls-01',data:{items:ko.pureComputed(()=>((container.citems()||[]).find(f=>f.gn=='voluntaries')?.citems()||[]).map(getInfo))}};
              }
              else if(key=='references'){
                res.label={name:'cvs-label-01',data:{label:'References'}};
                res.body={name:'cvs-tls-01',data:{items:ko.pureComputed(()=>((container.citems()||[]).find(f=>f.gn=='references')?.citems()||[]).map(getInfo))}};
              }
              else if(key=='profile'){
                // res.label={name:'cvs-label-01',data:{label:'Profile'}};
                // res.body={name:'cvs-tls-01',data:{items:ko.pureComputed(()=>((container.citems()||[]).find(f=>f.gn=='profile')?.citems()||[]).map(getInfo))}};
              }
              if(res.label)
                return res;
            }
            return null;
          },
          
          customContext:{
            personalInfo:container.KVItems.personalInfo?.getNormalizedContextObj(),
            contacts:container.KVItems.contacts?.getNormalizedContextObj(),
            profile:container.KVItems.profile?.getNormalizedContextObj(),

            educations:(container.citems()||[]).find(f=>f.gn=='educations')?.getNormalizedContextObj(),
            hobbies:(container.citems()||[]).find(f=>f.gn=='hobbies')?.getNormalizedContextObj(),
            talents:(container.citems()||[]).find(f=>f.gn=='talents')?.getNormalizedContextObj(),
          
            //experiences:(container.citems()||[]).find(f=>f.gn=='experiences')?.getNormalizedContextObj(),
            
            //educations:(container.citems()||[]).find(f=>f.gn=='educations')?.getNormalizedContextObj(),

            // items:container.items().map(f=>(f.getCustomItemContext())),
            // citems:container.citems?container.citems().map(f=>(f.getCustomItemContext())):[],
          },
        };
      });
    }
    // self.data.items(questions.map((q) => new createComponentItem1(q)));
    self.data.items.push(container);

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
        ko.KitContext.Resumes.saveObject(Query.id,self.data.getNormalizedObj());
        console.log("save",self.data.documentId);
      }
    }
    return self;
  }
  return Model;
});
