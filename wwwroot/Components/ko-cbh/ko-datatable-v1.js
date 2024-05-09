define(['ko','datatables-bs4'], function (ko, template, css) {
    // http://stackoverflow.com/questions/12166982
    ko.observableArray.fn.subscribeArrayChanged = function(addCallback, deleteCallback) {
        var previousValue = undefined;
        this.subscribe(function(_previousValue) {
            previousValue = _previousValue.slice(0);
        }, undefined, 'beforeChange');
        this.subscribe(function(latestValue) {
            var editScript = ko.utils.compareArrays(previousValue, latestValue);
            for (var i = 0, j = editScript.length; i < j; i++) {
                switch (editScript[i].status) {
                    case "retained":
                        break;
                    case "deleted":
                        if (deleteCallback)
                            deleteCallback(editScript[i].value);
                        break;
                    case "added":
                        if (addCallback)
                            addCallback(editScript[i].value);
                        break;
                }
            }
            previousValue = undefined;
        });
    };
    ko.bindingHandlers.datatable_v1 = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            const data = valueAccessor();
            let dt=$(element).DataTable({
                columns:viewModel.columns(),
                data:data(),
                fnCreatedRow:function(trElement,dataModel,index){
                    ko.applyBindings({vm:viewModel,data:dataModel},trElement);
                },
            });
            data.subscribeArrayChanged(
                function ( addedItem ) {
                    dt.row.add( addedItem ).draw();
                },
                function ( deletedItem ) {
                    dt.row(dt.data().indexOf( deletedItem )).remove().draw();
                }
            );
            
            return { controlsDescendantBindings: true };
        }
    };
});