define(['ko', ...getKitItemTemplate('kit-item-node')], function (ko, template, css) {
    
    function Model(params) {
        console.log(params)
        let obj = params.data;
        let self =obj; 
        return self;
    }

    return { viewModel: Model, template: template};
});