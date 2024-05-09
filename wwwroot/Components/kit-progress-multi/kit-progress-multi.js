define(['ko', ...getKitItemTemplate('kit-progress-multi')], function (ko, template, css) {
    
    function Model(params) {
        let obj = params.data;
        
        if (obj.itemVM)
            return obj.itemVM;

        let self =obj;
       self.val100= ko.pureComputed(()=>((self.value()/self.max())*100));
       self.values100=ko.pureComputed(()=>(self.values().map(o=>{
        o.val100=()=>((o.value()/self.max())*100);
        return o;
       })));
        params.data.itemVM = self;
        return self;
    }

    return { viewModel: Model, template: template};
});