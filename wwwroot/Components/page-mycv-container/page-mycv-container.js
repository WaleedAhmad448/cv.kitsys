define(['ko', ...getKitItemTemplate('page-mycv-container')], function (ko, template, css) {
    
    function Model(params) {
        let obj = params.data;
        let self =obj;    
        self.preview.expandPreveiw=ko.observable(0);
        return self;
    }

    return { viewModel: Model, template: template};
});