define(['ko', ...getKitItemTemplate('kit-accordion-v2')], function (ko, template, css) {
    let objectsCounter=0;
    function Model(params) {
        let obj = params.data;
        if (obj.itemVM)
            return obj.itemVM;
        if (!obj.header)
            obj.header={
                show:true,
              };
        objectsCounter++;
        let self =obj;
         self.uniqueUiId="ui-id-kit-accordion-v2-"+objectsCounter;  
         self.editMode=ko.observable(0);  
        params.data.itemVM = self;
        return self;
    }
    return { viewModel: Model, template: template};
});