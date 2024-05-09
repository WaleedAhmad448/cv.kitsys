define(["ko","page/cv-00-timeline-items","page/cv-00-name-and-level"], function (ko,_MyCVTimelineItems,_NameAndLevel) {
  // 'use strict';

    function MyCVTimelineItem(data, oldData){
      // console.error('MyCVTimelineItem');
    let customCounter=0;
    let createComponentItem1 =ko.vm.createComponentItem;
      let self= new createComponentItem1({
        citype:"leaf-section",
        componentName: "kit-accordion-v2",
        visible:ko.observable(1),
        optional:ko.observable(0),
        items: ko.observableArray(),
        citems: ko.observableArray(),
        ...data,
        config:{
          canAdd:ko.observable(0),
          ...(data&&data.config||{})
        },
      });
      let ItemsFunc=null;
      {
        switch((data.gn||"").split('.')[0]){
          case 'educations':
          case 'experiences':
            ItemsFunc=_MyCVTimelineItems;
            break;
          case 'languages':
          case 'skills':
            ItemsFunc=_NameAndLevel;
            break;
        }
       
      }
      
      if(ItemsFunc){  
          
        let questions;
        questions= (new ItemsFunc()).map(q=>({...q,parent:self,
          ar: q.fn,
          en: q.fn}));
        self.items(questions.map((q) => new createComponentItem1(q)));
      }
      else {
        console.warn('MyCVTimelineItem',(data.gn||"foo.foo").split('.')[0],ItemsFunc,data.fn,data.gn);
      }
      {
        self.getNormalizedContextObj = ko.pureComputed(()=>{});
      }
      return self;
    }
  return MyCVTimelineItem;
});
