define(['ko', ...getKitItemTemplate('kit-input-range-date')], function (ko, template, css) {
    
    function Model(params) {
        let obj = params.data;
        
        if (obj.itemVM)
            return obj.itemVM;

        let self =obj;
        if(!self.props){
            self.props={};
        }
        self.calc=self.calc||{};
        self.props.inputType = self.props.inputType || ko.observable();
        self.calc.inputType=ko.pureComputed({
            read:()=>self.props.inputType()||'date',
            write:(val)=>{self.props.inputType(val=='date'?undefined:val);},
        });
        self.props.sdate = self.props.sdate || ko.observable();
        self.props.edate = self.props.edate || ko.observable();
        self.props.isPresent = self.props.isPresent || ko.observable(false);
        
        params.data.itemVM = self;
        return self;
    }

    return { viewModel: Model, template: template};
});