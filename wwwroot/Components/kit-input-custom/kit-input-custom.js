define(['ko', ...getKitItemTemplate('kit-input-custom')], function (ko, template, css) {
    
    function Model(params) {
        let obj = params.data;
        
        if (obj.itemVM)
            return obj.itemVM;

        let self =obj;
        if(obj.maxLength>0){
           self.value.extend({
               maxLength:obj.maxLength
            }) 
        }
        if(!self.editLabel)
            self.editLabel=ko.observable(0);
        params.data.itemVM = self;
        return self;
    }

    return { viewModel: Model, template: template};
});