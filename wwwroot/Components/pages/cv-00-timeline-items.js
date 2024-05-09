define(["ko"], function (ko) {
  // 'use strict';
    function MyCVTimelineItems(only,except){
      let majorName, orgName, country, city, eventdates, sdate, isPresent, edate, description;
      {
        majorName={
          fn:'majorName',
          componentName: "kit-input-text",
          value: ko.observable(),
        };
        orgName={
          fn:'orgName',
          componentName: "kit-input-text",
          value: ko.observable(),
        };
        country={
          fn:'country',
          componentName: "kit-input-text",
          value: ko.observable(),
        };
        city={
          fn:'city',
          componentName: "kit-input-text",
          value: ko.observable(),
        };
        sdate= {
          fn:'sdate',
          componentName: "kit-input-date",
          grid: "col-4",
          value: ko.observable(),
        };
        eventdates= {
          fn:'eventdates',
          componentName: "kit-input-range-date",
          grid: "col-4",
          value: ko.observable(),
          props:{
            inputType: ko.observable(),
            sdate: ko.observable(),
            edate: ko.observable(),
            isPresent: ko.observable(),
          },
        };
        isPresent={
          fn:'isPresent',
          componentName: "kit-input-checkbox",
          grid: "col-4",
          value: ko.observable(),
        };
        edate= {
          fn:'edate',
          componentName: "kit-input-date",
          grid: "col-4",
          value: ko.observable(),
          visible:ko.pureComputed(()=>!isPresent.value()),
          enable:ko.pureComputed(()=>!isPresent.value()),
        };
        description={
          fn:'description',
          componentName: "kit-textarea",
          value: ko.observable(),
          optional: ko.observable(2),
        };
      }
      let self=[
        majorName,
        orgName,
        country,
        city,
        eventdates,
        sdate,
        isPresent,
        edate,
        description
      ].filter(f=>(only? only.indexOf(f.fn)>-1:except? except.indexOf(f.fn)==-1:true));
      
      return self;
    }
  return MyCVTimelineItems;
});
