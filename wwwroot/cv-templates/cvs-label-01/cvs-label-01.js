define(['ko', ...getKitItemTemplate('cvs-label-01')], function (ko, template, css) {
    
    function Model(params) {
        let obj = params.data;
        console.log('cvs-label-01',params,params.data);
        let self =obj;
        return self;
    }

    return { viewModel: Model, template: template};
});