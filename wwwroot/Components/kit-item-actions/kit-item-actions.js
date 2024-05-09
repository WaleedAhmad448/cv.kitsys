define(['ko', ...getKitItemTemplate('kit-item-actions')], function (ko, template, css) {
    
    function Model(params) {
        let obj = params.data;
        let self =obj;
        self.parent=params.parent;
         
        return self;
    }

    return { viewModel: Model, template: template};
});