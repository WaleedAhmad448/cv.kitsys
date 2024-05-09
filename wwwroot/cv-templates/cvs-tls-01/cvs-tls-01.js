define(['ko', ...getKitItemTemplate('cvs-tls-01')], function (ko, template, css) {
    
    function Model(params) {
        let obj = params.data;
        let self =obj;
        if(obj.isDemo){
            self.items=ko.observableArray([{},{},{}])
        }
        return self;
    }

    return { viewModel: Model, template: template};
});