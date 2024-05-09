define(["ko"], function (ko) {
  // 'use strict';
  function Model(data, oldData){
    let self= new ko.CVHelpers.MyCVTimelineItem(data, oldData);
    return self;
  }
  return  { createModel: Model,isCustom:true,tag:'skills'};
});
