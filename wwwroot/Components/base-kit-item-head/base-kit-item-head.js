define(['ko', ...getKitItemTemplate('base-kit-item-head')], function (ko, template, css) {
    
    function Model(params) {
        let self =params.data;
        console.log("head",params)
        return self;
    }

    return { viewModel: Model, template: template};
});