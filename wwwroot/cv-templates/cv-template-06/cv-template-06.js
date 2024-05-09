define(['ko', ...getKitItemTemplate('cv-template-06')], function (ko, template, css) {
    
    function Model(params) {
        let obj = params.data;
        console.log("cv-template-06",obj)
        let self =obj;
        return self;
    }

    return { viewModel: Model, template: template};
});