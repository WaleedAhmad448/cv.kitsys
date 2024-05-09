define(['ko', ...getKitItemTemplate('kit-array-group')], function (ko, template, css) {
    
    function Model(params) {
        let obj = params.data;
        
        if (obj.itemVM)
            return obj.itemVM;

        let self =obj;
        
        params.data.itemVM = self;
        return self;
    }

    return { viewModel: Model, template: template};
});