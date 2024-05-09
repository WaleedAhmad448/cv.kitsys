define(['ko'], function (ko) {
   
    ko.bindingHandlers.uksortable = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var _helper = ko.utils.unwrapObservable(valueAccessor());
            var _allBindings = ko.utils.unwrapObservable(allBindings());
            let s = {}, a = {}, p = {};
            UIkit.util.on(element, "start", function (e, sortable) {
                if(sortable.$el.id==_helper.uniqueUiId){
                s.g = sortable.$el.id.slice(-4).toLowerCase();
                s.i = sortable.items.indexOf(e.detail[1]);
                }
            });

            // UIkit.util.on(element, "added", function (e, sortable) {
            //     a.g = sortable.$el.id.slice(-4).toLowerCase();
            //     a.i = sortable.items.indexOf(e.detail[1]);
            // });
            UIkit.util.on(element, "stop", function (e, sortable) {
                if(sortable.$el.id==_helper.uniqueUiId){

                    p.g = sortable.$el.id.slice(-4).toLowerCase();
                    p.i = sortable.items.indexOf(e.detail[1]);
                    
                    console.log('UIkit.util.on(element, "stop"',s,p,sortable.$el.id);
                    if (p.i > -1) {
                        if (p.i !== s.i) {
                            let arr = _helper.items();
                            _helper.items([...arr.filter((f, i) => i !== s.i).slice(0, p.i), arr[s.i], ...arr.filter((f, i) => i !== s.i).slice(p.i)]);
                            // let arr = _helper.pivot[s.g];
                            // _helper.pivot[s.g] = [...arr.filter((f, i) => i !== s.i).slice(0, p.i), arr[s.i], ...arr.filter((f, i) => i !== s.i).slice(p.i)];
                            // _helper.pivot.notify();
                        }
                    }
                    else {
                        // let arr = _helper.pivot[s.g];
                        // let arr2 = _helper.pivot[a.g];
                        // _helper.pivot[s.g] = arr.filter((f, i) => i !== s.i);
                        // _helper.pivot[a.g] = [...arr2.slice(0, a.i), arr[s.i], ...arr2.slice(a.i)];
                        // _helper.pivot.notify();
                    }
                }
                });
                
        },
        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {

            
            // This will be called once when the binding is first applied to an element,
            // and again whenever any observables/computeds that are accessed change
            // Update the DOM element based on the supplied values here.
            //var options = ko.utils.unwrapObservable(valueAccessor());

            //var chart = new ApexCharts(element, options);
            //element.destroy();
            ////chart.updateOptions(options);
            ////console.log("ko-apexcharts update");
            ////if (chart)
            ////    chart.destroy();
            //chart.updateSeries([{ type: 'area' }])
            //chart.render();
        }
    };
    //return ApexCharts;
    //});
});