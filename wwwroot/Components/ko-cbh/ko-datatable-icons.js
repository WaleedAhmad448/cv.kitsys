define(['ko','datatables-bs4'], function (ko, template, css) {
    // $.fn.dataTable.ext.search.push(
    //     function( settings, data, dataIndex ) {
    //         if(settings.sTableId=='kit-offcanvas-icons-table'){
    //             if(ko.KitContext.KitIcons.searchInput()){
    //                 return data.join(',').indexOf(ko.KitContext.KitIcons.searchInput())>-1;
    //             }
    //         }
    //         // console.log('kit-offcanvas-icons-table', settings, data, dataIndex );
    //         // var min = parseInt( $('#min').val(), 10 );
    //         // var max = parseInt( $('#max').val(), 10 );
    //         // var age = parseFloat( data[3] ) || 0; // use data for the age column
    //         // if ( ( isNaN( min ) && isNaN( max ) ) ||
    //         //      ( isNaN( min ) && age <= max ) ||
    //         //      ( min <= age   && isNaN( max ) ) ||
    //         //      ( min <= age   && age <= max ) )
    //         // {
    //             return true;
    //         // }
    //         return false;
    //     }
    // );
    ko.bindingHandlers.datatable_icons = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            const data = valueAccessor();
            let dt=$(element).DataTable({
                columns:[
                    {data:null,title:'0',render:function(data,t,row){
                        return `<input type='radio' value='${row.value}' data-bind='checked:context.selectedIcon' />`
                    }},
                    {data:'value',title:'Symbole',render:(d)=>`<span class='${d}' style='font-size:2em'></span>`},
                    {data:'cat',title:'Family'},
                    {data:'value',title:'Icon Code'},
                ],
                paging:false,
                // searching:false,
                // "scrollY": 500,
                // "scrollY": true,
                "scrollX": true,
                data:ko.KitContext.KitIcons.getOptions(),
                fnCreatedRow:function(trElement,dataModel,index){
                    ko.applyBindings({context:ko.KitContext.KitIcons,data:dataModel},trElement);
                },
            });
           
            return { controlsDescendantBindings: true };
        }
    };
});