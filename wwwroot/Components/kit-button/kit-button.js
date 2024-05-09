define(['ko', ...getKitItemTemplate('kit-button')], function (ko, template, css) {
    
    function Model(params) {
        let obj = params.data;
        
        if (obj.itemVM)
            return obj.itemVM;

        let self =obj;
        if(!obj.btnClass)
        {
            self.isPrimary=true;
        }
        else{
            switch(obj.btnClass){
                case'primary':self.isPrimary=true; break;
                case'secondary':self.isSecondary=true; break;
                case'danger':self.isDanger=true; break;
                case'warning':self.isWarning=true; break;
                default:
                    self.isDefault=true;
                    break;
            }
        }
        params.data.itemVM = self;
        return self;
    }

    return { viewModel: Model, template: template};
});