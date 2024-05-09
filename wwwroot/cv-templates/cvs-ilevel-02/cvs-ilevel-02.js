define(['ko', ...getKitItemTemplate('cvs-ilevel-02')], function (ko, template, css) {
    
    function Model(params) {
        let obj = params.data;
        let self ={
            width:ko.pureComputed(()=>{
                
                    return ((obj.val*100)/obj.max)+'%';
            }),
        }
        return self;
    }

    return { viewModel: Model, template: template};
});