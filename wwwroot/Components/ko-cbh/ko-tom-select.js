define(['ko', "tom-select", 'css!tom-select-css'], function (ko, TomSelect) {
    
    ko.bindingHandlers.tomselect = {
        init: function (element, valueAccessor, allBindingsAccessor) {
            let value, result;
            let select;
            value = valueAccessor();
            let disposables = [];
            let isActive = true;
            let change = () => {
                if (isActive) {
                    let tmpVal = $(element).val();
                    value.data((tmpVal == null || tmpVal.lenght == 0 || ((tmpVal.lenght == 1 && tmpVal[0] == "")) ? null : (value.options().reduce((a, b) => { if (tmpVal.indexOf(b[value.optionsValue] + "") > -1) a.push((b[value.optionsValue] + "")); return a; }, []))));
                }
                
            };
            $(element).on('change', function () { change(); });
          
            $(element).val(value.data());
            let valueSubscription;
            let allBindings = allBindingsAccessor();
            select = new TomSelect($(element), {
                ...value, options: value.options(),maxOptions:null
            });
            disposables.push( value.options.subscribe((arr) => {
                isActive = false;
                let tmpVal = $(element).val();
                select.clear();
                select.clearOptions();
                select.addOptions(arr);
                isActive = 1;
                console.log("tmpVal", tmpVal)
                $(element).val(tmpVal);
                change();
                (value.data() || []).map(o => {
                    select.addItem(o);
                })
            }));
            ko.utils.domNodeDisposal.addDisposeCallback(element, (el) => {
                select.destroy();
                disposables.forEach(s => {
                    s.dispose();
                });
            });
            
        },
        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            //element.sumo.reload();
        }
    };
});