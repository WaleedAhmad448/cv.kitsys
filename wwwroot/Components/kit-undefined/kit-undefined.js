define(['ko', 'text!kit-undefined'], function (ko, template) {
    
    function Model(params) {
       return params;
    }
    return { viewModel: Model, template: template};
});