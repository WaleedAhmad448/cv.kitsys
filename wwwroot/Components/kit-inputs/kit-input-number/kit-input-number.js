define(['ko', ...getKitItemTemplate('kit-input-number')], function (ko, template, css) {
    
    function Model(params) {
        let obj = params.data;
        
        if (obj.itemVM)
            return obj.itemVM;

        let self =obj;
        if(obj.max>0){
            self.value.extend({
                min:obj.min,
                max:obj.max,
             }) 
         }
        params.data.itemVM = self;
        return self;
    }

    return { viewModel: Model, template: template};
});