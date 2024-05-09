define(['ko', ...getKitItemTemplate('kit-sortable-group'),'ko-uksortable'], function (ko, template, css) {
    let objectsCounter=0;
    function Model(params) {
        let obj = params.data;
        if (obj.itemVM)
            return obj.itemVM;

        objectsCounter++;
        let self =obj;
        self.uniqueUiId="kit-sortable-group-"+objectsCounter;  
        
         params.data.itemVM = self;
        return self;
    }

    return { viewModel: Model, template: template};
});