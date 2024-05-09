define(['ko', ...getKitItemTemplate('kit-input-text')], function (ko, template, css) {
    
    function Model(params) {
        let obj = params.data;
        
        if (obj.itemVM)
            return obj.itemVM;

        let self =obj;
        console.log(obj)
        if(obj.maxLength>0){
           self.value.extend({
               maxLength:obj.maxLength
            }) 
        }
        params.data.itemVM = self;
        return self;
    }

    return { viewModel: Model, template: template};
});