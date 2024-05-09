// let vm;
define(['ko',"page/cv-00-template-section"], function(ko,MyCVTimelineItem) {
    if(!ko.CVHelpers){
        ko.CVHelpers={
            customItem:{
                singleObject:function(container,page,d){
                    container.config.customItems.push({...page,...d,
                        createObject:function(oldData){
                            this.visible(false);
                            let PageModel=page.createModel;
                            let f=new PageModel({remove:null,canRemove:true,parent:container,...d},oldData);
                            f.onRemove.push(()=>{this.visible(true);});
                            container.citems.push(f);
                            return f;
                        },
                        visible:ko.observable(1),
                        label:page.tag,
                        label:d.fn,
                    });
                },
                multiObject:function(container,page,d){
                    container.config.customItems.push({...page,...d,
                        createObject:function(oldData){
                            //this.visible(false);
                            let PageModel=page.createModel;
                            console.log("multiObject",d);
                            let f=new PageModel({remove:null,canRemove:true,parent:container,...d},oldData);
                            //f.onRemove.push(()=>{this.visible(true);});
                            container.citems.push(f);
                            return f;
                        },
                        visible:ko.observable(1),
                        label:page.tag,
                        label:d.fn,
                    });
                },
            },
            MyCVTimelineItem:MyCVTimelineItem,
        };
    }

});     