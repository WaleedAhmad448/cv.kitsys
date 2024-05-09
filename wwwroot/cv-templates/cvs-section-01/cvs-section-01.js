define(['ko', ...getKitItemTemplate('cvs-section-01')], function (ko, template, css) {
    
    function Model(params) {
        let self =params;
        return self;
    }

    return { viewModel: Model, template: template};
});