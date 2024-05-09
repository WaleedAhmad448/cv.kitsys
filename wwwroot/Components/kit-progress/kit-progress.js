define(['ko', ...getKitItemTemplate('kit-progress')], function (ko, template, css) {
    
    function Model(params) {
        let obj = params.data;
        
        if (obj.itemVM)
            return obj.itemVM;

        let self =obj;
       self.val100= ko.pureComputed(()=>((self.value()/self.max())*100));
        params.data.itemVM = self;
        return self;
    }

    return { viewModel: Model, template: template};
});