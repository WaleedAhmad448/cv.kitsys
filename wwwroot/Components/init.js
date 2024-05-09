const getKitItemTemplate = (itemName) => ([`text!${itemName}.html`, `css!${itemName}.css`]);

(function () {

    const rconfig = {
        urlArgs: function (id, url) {
            //console.log(id, url);
            const compFixed = ['ko','html-to-image', 'knockout', 'kov', "jquery", 'bootstrap', 'animate'];
            if (compFixed.indexOf(id) > -1)
                return "";
            const compVersions = {
            };
            Object.keys(kitComponent).map(o => {
                compVersions[o] = kitComponent[o];
            });
            Object.keys(cvTemp).map(o => {
                compVersions[o] = cvTemp[o];
            });
            Object.keys(kitUtil).map(o => {
                compVersions[o] = kitUtil[o];
            });
            Object.keys(kitUtilContext).map(o => {
                compVersions[o] = kitUtilContext[o];
            });
            Object.keys(koCBH).map(o => {
                compVersions[o] = koCBH[o];
            });
            Object.keys(kitData).map(o => {
                compVersions[o] = kitData[o];
            });
           
            let args = "v=1";
            if (compVersions.hasOwnProperty(id)) args = compVersions[id];
            return (url.indexOf('?') === -1 ? '?' : '&') + "beta=2&" + args //+ Date.now();
        },
        waitSeconds: 120,
        baseUrl: URLLibs,
        paths: {
            page: "../Components/pages",
            ko: "knockout/knockout-latest.min",
            kov: "../js/kov",
            jquery: "jquery/dist/jquery.min",
            domReady: 'require-domReady/domReady.min',
            css: 'require-css/css.min',
            text: 'require-text/text.min',
            'animate': 'animate.css/animate.min',
            'html2canvas': 'html2canvas/html2canvas.min',
            'jquery': 'jquery/dist/jquery.min',
            'bootstrap': 'bootstrap/dist/js/bootstrap.bundle.min',
            'datatables-net': 'datatables.net/jquery.dataTables',
            'datatables.net': 'datatables.net/jquery.dataTables',
            'datatables-bs4': 'datatables.net-bs4/dataTables.bootstrap4',
            'tom-select':'tom-select/js/tom-select.complete.min',
            'tom-select-css':'tom-select/css/tom-select.bootstrap4.min',
            'html-to-image':'html-to-image/html-to-image.min',
            // kov: "../js/kov",
            //json: '../js/require-json.min',
        },
        
    };
    const kitComponent = {
        'kit-undefined': 'v=1.0.7',
        
        'kit-input-text': 'v=1.0.7',
        'kit-input-number': 'v=1.0.7',
        'kit-group': 'v=1.0.7',
        'kit-input-date': 'v=1.0.7',
        'kit-input-checkbox': 'v=1.0.7',
        'kit-input-radio': 'v=1.0.7',
        'kit-input-select': 'v=1.0.7',
        'kit-textarea': 'v=1.0.7',
        'kit-input-tel': 'v=1.0.7',
        'kit-input-email': 'v=1.0.7',
        'kit-input-password': 'v=1.0.7',
        'kit-button': 'v=1.0.7',
        'kit-form': 'v=1.0.7',
        'kit-input-textp': 'v=1.0.7',
        'kit-input-range': 'v=1.0.7',
        'kit-cover': 'v=1.0.7',
        'kit-image': 'v=1.0.7',
        'kit-array-group': 'v=1.0.7',
        'kit-input-image': 'v=1.0.7',
        'kit-image': 'v=1.0.7',
        'kit-datatable-v1': 'v=1.0.7',
        'kit-progress': 'v=1.0.7',
        'kit-progress-multi': 'v=1.0.7',
        'kit-accordion': 'v=1.0.7',
        'kit-input-custom': 'v=1.0.7',
        'kit-sortable-group': 'v=1.0.7',
        'kit-input-year': 'v=1.0.7',
        'kit-item-label': 'v=1.0.7',
        'kit-tom-select': 'v=1.0.7',
        'kit-item-icon': 'v=1.0.7',
        'kit-print-preview': 'v=1.0.7',
        'kit-accordion-v2': 'v=1.0.7',
        'kit-item-actions': 'v=1.0.7',
        'kit-item-head': 'v=1.0.7',
        'base-kit-item': 'v=1.0.7',
        'base-kit-item-multivalue': 'v=1.0.7',
        'base-kit-item-head': 'v=1.0.7',
        'kit-input-range-date': 'v=1.0.7',
        'page-mycv-container': 'v=1.0.7',
        
        
        
        
    };
    
    const kitUtil = {
        'kit-vm': 'v=1.0.7',
        'wadeea-group1': 'v=1.0.7',
        'wadeea-form1': 'v=1.0.7',
        'kit-cv-section-helper': 'v=1.0.7',
        'kit-cv-component-item': 'v=1.0.7',
        'kit-cv-helpers': 'v=1.0.7',
    };
    const cvTemp = {
        'cv-template-01': 'v=1.0.7',
        'cv-template-02': 'v=1.0.7',
        'cv-template-03': 'v=1.0.7',
        'cv-template-04': 'v=1.0.7',
        'cv-template-05': 'v=1.0.7',
        'cv-template-06': 'v=1.0.7',
        'cv-template-07': 'v=1.0.7',
        'cv-template-08': 'v=1.0.7',
        'cv-template-09': 'v=1.0.7',
        'cv-template-10': 'v=1.0.7',

        'cvs-tls-01': 'v=1.0.7',
        
        'cvs-label-01': 'v=1.0.7',
        
        'cvs-aside-01': 'v=1.0.7',
        
        'cvs-section-01': 'v=1.0.7',
        
        'cvs-ilevel-01': 'v=1.0.7',
        'cvs-ilevel-02': 'v=1.0.7',
        'cvs-ilevel-03': 'v=1.0.7',
        
        'cvs-body-01': 'v=1.0.7',
        
        'cvs-social-media-01': 'v=1.0.7',
    };
    const kitUtilContext = {
        'kit-context-kit-icons':'v=1',
        'kit-context-resumes':'v=1',
    };
    const koCBH = {
        'ko-datatable-v1': 'v=1.0.7',
        'ko-datatable-icons': 'v=1.0.7',
        'ko-tom-select': 'v=1.0.7',
        'ko-uksortable': 'v=1.0.7',
        
    };
    const kitData = {
    };

    Object.keys(kitComponent).map(o => {
        rconfig.paths[o] = URLLib2Component + `${o}/${o}`;
    });
    Object.keys(cvTemp).map(o => {
        rconfig.paths[o] = URLLib2CvTemplate + `${o}/${o}`;
    });
    Object.keys(kitUtil).map(o => {
        rconfig.paths[o] = URLLib2Component + `kit-util/${o}`;
    });
    Object.keys(kitUtilContext).map(o => {
        rconfig.paths[o] = URLLib2Component + `kit-util-context/${o}`;
    });
    Object.keys(koCBH).map(o => {
        rconfig.paths[o] = URLLib2Component + `ko-cbh/${o}`;
    });

    Object.keys(kitData).map(o => {
        rconfig.paths[o] = URLLib2Component + `kit-data/${o}`;
    });
    
    
    require.config(rconfig);
    require(['ko','kov', 'jquery', 'bootstrap', 'kit-vm', 'kit-context-kit-icons'], function (ko) {
        ko.BaseContentEditable=ko.observable(true);
        ko.bindingHandlers.htmlLazy = {
            update: function (element, valueAccessor) {
                var value = ko.unwrap(valueAccessor());
                
                if (!element.isContentEditable) {
                    element.innerHTML = value;
                }
            }
        };
        ko.bindingHandlers.contentEditable = {
            init: function (element, valueAccessor, allBindingsAccessor) {
                var value = ko.unwrap(valueAccessor()),
                    htmlLazy = allBindingsAccessor().htmlLazy;
                
                $(element).on("input", function () {
                    if (this.isContentEditable && ko.isWriteableObservable(htmlLazy)) {
                        htmlLazy(this.innerHTML);
                    }
                });
            },
            update: function (element, valueAccessor) {
                var value = ko.unwrap(valueAccessor());
                
                element.contentEditable = value;
                
                if (!element.isContentEditable) {
                    $(element).trigger("input");
                }
            }
        };
        Object.keys(kitComponent).map(o => {
            ko.components.register(o, { require: o });
        });
        Object.keys(cvTemp).map(o => {
            ko.components.register(o, { require: o });
        });
        ko.applyBindings(ko.vm, document.getElementById("html"));
        {
            var minHeight = 30; // Define a minimum height for the middle div

            var resizeMiddle = function(a,b,c) {
                var h =(typeof a=='object'&&(window.innerHeight
                    || document.documentElement.clientHeight
                    || document.body.clientHeight) || $('body').height()) - $('body > header').height() - $('body > footer').height();
                h = h > minHeight ? h : minHeight;
                $('#kit-current-page-container').height(h);
                // $('#kit-current-page-container').height(h);
            }
    
            $(document).ready(resizeMiddle);
            $(window).resize(resizeMiddle);
        }
    });
})();