define(['ko', 'html-to-image',...getKitItemTemplate('kit-print-preview')], function (ko,htmlToImage, template, css) {
    //https://developer.mozilla.org/en-US/docs/Web/Guide/Printing
    function Model(params) {
        console.log('kit-print-preview',params)
        let obj = params.data;
        let self =obj; 
        let _op=obj.previewOptions||{colorPalette:{},colorPalette:{},typeContext:{} };
        self.previewZoom=ko.observable(_op.previewZoom || 30);
        self.printMode=ko.observable(0);
        self.colorPalette={
        current:ko.observable(_op.colorPalette.current),

        }
        self.colorPalette.getStyle=ko.pureComputed(()=>{
            let palette=ko.vm.colorPalette.all().find(f=>f.name==self.colorPalette.current()) 
            if(palette){
                return `--tcv-current-color-01-bg: ${palette.primary()};--tcv-current-color-02-fg: ${palette.secondary()};`;
            }
        });
        
        self.tmpPreviewName(_op.tmpName||'cv-template-08');
        self.tmpName((self.tmpPreviewName()));
        self.tmpOptions=[
            {value:'cv-template-01',text:'cv-template-01'},
            {value:'cv-template-02',text:'cv-template-02'},
            {value:'cv-template-03',text:'cv-template-03'},
            {value:'cv-template-04',text:'cv-template-04'},
            {value:'cv-template-05',text:'cv-template-05'},
            {value:'cv-template-06',text:'cv-template-06'},
            {value:'cv-template-07',text:'cv-template-07'},
            {value:'cv-template-08',text:'cv-template-08'},
        ]
        self.typeContext={
            ff:ko.observable(_op.typeContext?.ff),
            customs:ko.observableArray([]),
            ffOptions:[
                {value:'Garamond',text:'Garamond'},
                {value:'Gill Sans',text:'Gill Sans'},
                {value:'Cambria',text:'Cambria'},
                {value:'Calibri',text:'Calibri'},
                {value:'Constantia',text:'Constantia'},
                {value:'Lato',text:'Lato'},
                {value:'Didot',text:'Didot'},
                {value:'Helvetica',text:'Helvetica'},
                {value:'Georgia',text:'Georgia'},
                {value:'Avenir',text:'Avenir'},
                {value:'Times new roman',text:'Times new roman'},
                {value:'Futura',text:'Futura'},
                {value:'Arial',text:'Arial'},
                {value:'Courier',text:'Courier'},
                {value:'Brush script',text:'Brush script'},
                {value:'Comic sans',text:'Comic sans'},
                {value:'Century gothic',text:'Century gothic'},
                {value:'Papyrus',text:'Papyrus'},
                {value:'Impact',text:'Impact'},
                {value:'Trajan pro',text:'Trajan pro'},
                {value:'cursive',text:'cursive'},
                {value:'emoji',text:'emoji'},
                {value:'fangsong',text:'fangsong'},
                {value:'fantasy',text:'fantasy'},
                {value:'math',text:'math'},
                {value:'monospace',text:'monospace'},
                {value:'math',text:'math'},
                {value:'sans-serif',text:'sans-serif'},
                {value:'serif',text:'serif'},
                {value:'system-ui',text:'system-ui'},
                {value:'math',text:'math'},
            ],
        }
        self.tmpName.subscribe(()=>{
            self.tmpPreviewName(self.tmpName());
        });
        function PrintElem(elem,isPdf)
        {
            // var mywindow = window.open('', 'PRINT', 'height=400,width=600');
            // var mywindow = window.open('', 'MY', 'height=400,width=600');
            var mywindow = window.open('', 'PRINT', 'height=700,width=1200');

            mywindow.document.write('<html><head><style>body{padding:0;margin: 0;} @page {padding:0;margin: 0;}</style><title>' + document.title  + '</title>');
            mywindow.document.write('</head><body >');
            mywindow.document.write(elem);
            mywindow.document.write('</body></html>');

            mywindow.document.close(); // necessary for IE >= 10
            mywindow.focus(); // necessary for IE >= 10*/

            mywindow.print();
            // mywindow.close();

            return true;
        }
        self.print=()=>{
            // window.print();
            /*
            self.printMode(1);
            setTimeout(()=>{
                
                console.log("html2canvas",html2canvas);
                // html2canvas(document.getElementById('kit-print-preview-1')).then(function(canvas) {
                    // html2canvas(document.querySelector('#kit-print-preview-1 > div')).then(function(canvas) {
                        html2canvas(document.querySelector('#kit-print-preview-2')).then(function(canvas) {
                            // html2canvas($('#kit-print-preview-1 > div')).then(function(canvas) {
                                document.body.appendChild(canvas);
                            });
                            html2canvas(document.querySelector('#kit-print-preview-1 > div')).then(function(canvas) {
                                // html2canvas(document.querySelector('#kit-print-preview-2')).then(function(canvas) {
                                    // html2canvas($('#kit-print-preview-1 > div')).then(function(canvas) {
                                        document.body.appendChild(canvas);
                                    });
                                },1000);
                                */
        var node = document.getElementById('kit-print-container');
        // var node = document.getElementById('kit-print-preview-1');
        // var node = document.getElementById('kit-print-preview-1');

        htmlToImage.toSvg(node)//,{width:2551,height:3579})
            .then(function (dataUrl) {
            //var img = new Image();
            //img.src = dataUrl;
            let str=dataUrl.slice(dataUrl.indexOf(",")+1);
            // console.log("dataUrl",decodeURI(str));
            // console.log("dataUrl",decodeURIComponent(str));
            // console.log(str.match(/%[A-z0-9]+/g))
            console.log("dataUrl",decodeURIComponent(str));
            let _print = decodeURIComponent(str);
            PrintElem(_print);
            //document.body.appendChild(img);
            // document.body.appendChild(dataUrl);
            })
            .catch(function (error) {
            console.error('oops, something went wrong!', error);
            });

        }
        self.currentPng=ko.observable();
        self.downloadPDFFile=()=>{

        }
        self.downloadFile=()=>{
            var node = document.getElementById('kit-print-container');

        htmlToImage.toPng(node)//,{width:2551,height:3579})
            .then(function (dataUrl) {
            self.currentPng(dataUrl);
           
            })
            .catch(function (error) {
            console.error('oops, something went wrong!', error);
            });


        }
        self.previewObj=ko.pureComputed(()=>{
            if(self.tmpPreviewName()){
            return{
                componentName:self.tmpPreviewName(),
            };
            }
            return null;
        });
        self.getPreviewOptions=()=>{
            return {
                tmpName:self.tmpName,
                previewZoom:self.previewZoom,
                colorPalette:{
                    current:self.colorPalette.current,
                },
                typeContext:{
                    ff:self.typeContext.ff,
                },
            };
        };
        return self;
    }

    return { viewModel: Model, template: template};
});