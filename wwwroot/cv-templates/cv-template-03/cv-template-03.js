define(['ko', ...getKitItemTemplate('cv-template-03')], function (ko, template, css) {
    
    function Model(params) {
        let obj = params.data;
        let self =obj;
        return self;
    }

    return { viewModel: Model, template: template};
});