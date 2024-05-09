define(['ko', ...getKitItemTemplate('kit-item-label')], function (ko, template, css) {
    
    function Model(params) {
        let obj = params.data;
        let self =obj;
        if(params.parent?.ukSortableHandle)
        self.ukSortableHandle=params.parent.ukSortableHandle; 
        return self;
    }

    return { viewModel: Model, template: template};
});