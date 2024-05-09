define(['ko', ...getKitItemTemplate('cvs-ilevel-01')], function (ko, template, css) {
    
    function Model(params) {
        let obj = params.data;
        let self ={
            levels:ko.pureComputed(()=>{
                let arr=[];
                for(let i=1;i<=obj.max;i++)
                    arr.push({e:(i>obj.val)});
                    return arr;
            }),
        }
        return self;
    }

    return { viewModel: Model, template: template};
});