define(["ko"], function (ko) {
  // 'use strict';
    function EducationItem(data, oldData){
      let self= new ko.CVHelpers.MyCVTimelineItem(data, oldData);
      return self;
    }
  return { createModel: EducationItem,isCustom:true,tag:'education'};
});
