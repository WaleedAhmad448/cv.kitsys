define(["ko"], function (ko) {
  // 'use strict';
    function MyCVTimelineItems(only,except){
      
      let self=[
        {
          componentName: "kit-input-text",
          ar: "الاسم",
          en: "Name",
          fn: "name",
          value: ko.observable(),
         // grid:"col-md-6",
        },
        {
          componentName: "kit-input-range",
         // grid:"col-md-12",
  
          ar:" المستوى" ,
          en:"Level",
          fn:"level",
          value: ko.observable(),
          min:1,
          max:10,
         // grid:"col-md-5",
        },
       
        
      ].filter(f=>(only? only.indexOf(f.fn)>-1:except? except.indexOf(f.fn)==-1:true));
      
      return self;
    }
  return MyCVTimelineItems;
});
