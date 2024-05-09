// let vm;
define(['ko','kit-cv-section-helper'], function(ko,KitCvSectionHelper) {
    // 'use strict';
   
    ko.UiClassBaseKitItem=ko.observable('');
    if(!ko.vm){
        // vm=ko.vm ={
        let vm=ko.vm ={
            is_arabic:ko.observable(localStorage.getItem("KitSysIsArabic") === "true" || (localStorage.getItem("KitSysIsArabic") == null)),
            is_dark:ko.observable((localStorage.getItem("KitSysIsDark") === "true" || (localStorage.getItem("KitSysIsDark") == null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches))),   
            colorPalette:{
                current:ko.observable((localStorage.getItem("KitColorPalette") == null?'default':localStorage.getItem("KitColorPalette")) ),
            },
        }
        //LOCALS
        {
            vm.currentLocal=ko.observable('en');
            vm.localsOptions=[
                {
                    "value": "ISO Code",
                    "text": "Language",
                    "active": 0
                },
                {
                    "value": "ab",
                    "text": "Abkhazian",
                    "active": 0
                },
                {
                    "value": "aa",
                    "text": "Afar",
                    "active": 0
                },
                {
                    "value": "af",
                    "text": "Afrikaans",
                    "active": 0
                },
                {
                    "value": "ak",
                    "text": "Akan",
                    "active": 0
                },
                {
                    "value": "sq",
                    "text": "Albanian",
                    "active": 0
                },
                {
                    "value": "am",
                    "text": "Amharic",
                    "active": 0
                },
                {
                    "value": "ar",
                    "text": "Arabic",
                    "active": 1
                },
                {
                    "value": "an",
                    "text": "Aragonese",
                    "active": 0
                },
                {
                    "value": "hy",
                    "text": "Armenian",
                    "active": 0
                },
                {
                    "value": "as",
                    "text": "Assamese",
                    "active": 0
                },
                {
                    "value": "av",
                    "text": "Avaric",
                    "active": 0
                },
                {
                    "value": "ae",
                    "text": "Avestan",
                    "active": 0
                },
                {
                    "value": "ay",
                    "text": "Aymara",
                    "active": 0
                },
                {
                    "value": "az",
                    "text": "Azerbaijani",
                    "active": 0
                },
                {
                    "value": "bm",
                    "text": "Bambara",
                    "active": 0
                },
                {
                    "value": "ba",
                    "text": "Bashkir",
                    "active": 0
                },
                {
                    "value": "eu",
                    "text": "Basque",
                    "active": 0
                },
                {
                    "value": "be",
                    "text": "Belarusian",
                    "active": 0
                },
                {
                    "value": "bn",
                    "text": "Bengali (Bangla)",
                    "active": 0
                },
                {
                    "value": "bh",
                    "text": "Bihari",
                    "active": 0
                },
                {
                    "value": "bi",
                    "text": "Bislama",
                    "active": 0
                },
                {
                    "value": "bs",
                    "text": "Bosnian",
                    "active": 0
                },
                {
                    "value": "br",
                    "text": "Breton",
                    "active": 0
                },
                {
                    "value": "bg",
                    "text": "Bulgarian",
                    "active": 0
                },
                {
                    "value": "my",
                    "text": "Burmese",
                    "active": 0
                },
                {
                    "value": "ca",
                    "text": "Catalan",
                    "active": 0
                },
                {
                    "value": "ch",
                    "text": "Chamorro",
                    "active": 0
                },
                {
                    "value": "ce",
                    "text": "Chechen",
                    "active": 0
                },
                {
                    "value": "ny",
                    "text": "Chichewa, Chewa, Nyanja",
                    "active": 0
                },
                {
                    "value": "zh",
                    "text": "Chinese",
                    "active": 0
                },
                {
                    "value": "zh-Hans",
                    "text": "Chinese (Simplified)",
                    "active": 0
                },
                {
                    "value": "zh-Hant",
                    "text": "Chinese (Traditional)",
                    "active": 0
                },
                {
                    "value": "cv",
                    "text": "Chuvash",
                    "active": 0
                },
                {
                    "value": "kw",
                    "text": "Cornish",
                    "active": 0
                },
                {
                    "value": "co",
                    "text": "Corsican",
                    "active": 0
                },
                {
                    "value": "cr",
                    "text": "Cree",
                    "active": 0
                },
                {
                    "value": "hr",
                    "text": "Croatian",
                    "active": 0
                },
                {
                    "value": "cs",
                    "text": "Czech",
                    "active": 0
                },
                {
                    "value": "da",
                    "text": "Danish",
                    "active": 0
                },
                {
                    "value": "dv",
                    "text": "Divehi, Dhivehi, Maldivian",
                    "active": 0
                },
                {
                    "value": "nl",
                    "text": "Dutch",
                    "active": 0
                },
                {
                    "value": "dz",
                    "text": "Dzongkha",
                    "active": 0
                },
                {
                    "value": "en",
                    "text": "English",
                    "active": 1
                },
                {
                    "value": "eo",
                    "text": "Esperanto",
                    "active": 0
                },
                {
                    "value": "et",
                    "text": "Estonian",
                    "active": 0
                },
                {
                    "value": "ee",
                    "text": "Ewe",
                    "active": 0
                },
                {
                    "value": "fo",
                    "text": "Faroese",
                    "active": 0
                },
                {
                    "value": "fj",
                    "text": "Fijian",
                    "active": 0
                },
                {
                    "value": "fi",
                    "text": "Finnish",
                    "active": 0
                },
                {
                    "value": "fr",
                    "text": "French",
                    "active": 0
                },
                {
                    "value": "ff",
                    "text": "Fula, Fulah, Pulaar, Pular",
                    "active": 0
                },
                {
                    "value": "gl",
                    "text": "Galician",
                    "active": 0
                },
                {
                    "value": "gd",
                    "text": "Gaelic (Scottish)",
                    "active": 0
                },
                {
                    "value": "gv",
                    "text": "Gaelic (Manx)",
                    "active": 0
                },
                {
                    "value": "ka",
                    "text": "Georgian",
                    "active": 0
                },
                {
                    "value": "de",
                    "text": "German",
                    "active": 0
                },
                {
                    "value": "el",
                    "text": "Greek",
                    "active": 0
                },
                {
                    "value": "kl",
                    "text": "Greenlandic",
                    "active": 0
                },
                {
                    "value": "gn",
                    "text": "Guarani",
                    "active": 0
                },
                {
                    "value": "gu",
                    "text": "Gujarati",
                    "active": 0
                },
                {
                    "value": "ht",
                    "text": "Haitian Creole",
                    "active": 0
                },
                {
                    "value": "ha",
                    "text": "Hausa",
                    "active": 0
                },
                {
                    "value": "he",
                    "text": "Hebrew",
                    "active": 0
                },
                {
                    "value": "hz",
                    "text": "Herero",
                    "active": 0
                },
                {
                    "value": "hi",
                    "text": "Hindi",
                    "active": 0
                },
                {
                    "value": "ho",
                    "text": "Hiri Motu",
                    "active": 0
                },
                {
                    "value": "hu",
                    "text": "Hungarian",
                    "active": 0
                },
                {
                    "value": "is",
                    "text": "Icelandic",
                    "active": 0
                },
                {
                    "value": "io",
                    "text": "Ido",
                    "active": 0
                },
                {
                    "value": "ig",
                    "text": "Igbo",
                    "active": 0
                },
                {
                    "value": "id, in",
                    "text": "Indonesian",
                    "active": 0
                },
                {
                    "value": "ia",
                    "text": "Interlingua",
                    "active": 0
                },
                {
                    "value": "ie",
                    "text": "Interlingue",
                    "active": 0
                },
                {
                    "value": "iu",
                    "text": "Inuktitut",
                    "active": 0
                },
                {
                    "value": "ik",
                    "text": "Inupiak",
                    "active": 0
                },
                {
                    "value": "ga",
                    "text": "Irish",
                    "active": 0
                },
                {
                    "value": "it",
                    "text": "Italian",
                    "active": 0
                },
                {
                    "value": "ja",
                    "text": "Japanese",
                    "active": 0
                },
                {
                    "value": "jv",
                    "text": "Javanese",
                    "active": 0
                },
                {
                    "value": "kl",
                    "text": "Kalaallisut, Greenlandic",
                    "active": 0
                },
                {
                    "value": "kn",
                    "text": "Kannada",
                    "active": 0
                },
                {
                    "value": "kr",
                    "text": "Kanuri",
                    "active": 0
                },
                {
                    "value": "ks",
                    "text": "Kashmiri",
                    "active": 0
                },
                {
                    "value": "kk",
                    "text": "Kazakh",
                    "active": 0
                },
                {
                    "value": "km",
                    "text": "Khmer",
                    "active": 0
                },
                {
                    "value": "ki",
                    "text": "Kikuyu",
                    "active": 0
                },
                {
                    "value": "rw",
                    "text": "Kinyarwanda (Rwanda)",
                    "active": 0
                },
                {
                    "value": "rn",
                    "text": "Kirundi",
                    "active": 0
                },
                {
                    "value": "ky",
                    "text": "Kyrgyz",
                    "active": 0
                },
                {
                    "value": "kv",
                    "text": "Komi",
                    "active": 0
                },
                {
                    "value": "kg",
                    "text": "Kongo",
                    "active": 0
                },
                {
                    "value": "ko",
                    "text": "Korean",
                    "active": 0
                },
                {
                    "value": "ku",
                    "text": "Kurdish",
                    "active": 0
                },
                {
                    "value": "kj",
                    "text": "Kwanyama",
                    "active": 0
                },
                {
                    "value": "lo",
                    "text": "Lao",
                    "active": 0
                },
                {
                    "value": "la",
                    "text": "Latin",
                    "active": 0
                },
                {
                    "value": "lv",
                    "text": "Latvian (Lettish)",
                    "active": 0
                },
                {
                    "value": "li",
                    "text": "Limburgish ( Limburger)",
                    "active": 0
                },
                {
                    "value": "ln",
                    "text": "Lingala",
                    "active": 0
                },
                {
                    "value": "lt",
                    "text": "Lithuanian",
                    "active": 0
                },
                {
                    "value": "lu",
                    "text": "Luga-Katanga",
                    "active": 0
                },
                {
                    "value": "lg",
                    "text": "Luganda, Ganda",
                    "active": 0
                },
                {
                    "value": "lb",
                    "text": "Luxembourgish",
                    "active": 0
                },
                {
                    "value": "gv",
                    "text": "Manx",
                    "active": 0
                },
                {
                    "value": "mk",
                    "text": "Macedonian",
                    "active": 0
                },
                {
                    "value": "mg",
                    "text": "Malagasy",
                    "active": 0
                },
                {
                    "value": "ms",
                    "text": "Malay",
                    "active": 0
                },
                {
                    "value": "ml",
                    "text": "Malayalam",
                    "active": 0
                },
                {
                    "value": "mt",
                    "text": "Maltese",
                    "active": 0
                },
                {
                    "value": "mi",
                    "text": "Maori",
                    "active": 0
                },
                {
                    "value": "mr",
                    "text": "Marathi",
                    "active": 0
                },
                {
                    "value": "mh",
                    "text": "Marshallese",
                    "active": 0
                },
                {
                    "value": "mo",
                    "text": "Moldavian",
                    "active": 0
                },
                {
                    "value": "mn",
                    "text": "Mongolian",
                    "active": 0
                },
                {
                    "value": "na",
                    "text": "Nauru",
                    "active": 0
                },
                {
                    "value": "nv",
                    "text": "Navajo",
                    "active": 0
                },
                {
                    "value": "ng",
                    "text": "Ndonga",
                    "active": 0
                },
                {
                    "value": "nd",
                    "text": "Northern Ndebele",
                    "active": 0
                },
                {
                    "value": "ne",
                    "text": "Nepali",
                    "active": 0
                },
                {
                    "value": "no",
                    "text": "Norwegian",
                    "active": 0
                },
                {
                    "value": "nb",
                    "text": "Norwegian bokmål",
                    "active": 0
                },
                {
                    "value": "nn",
                    "text": "Norwegian nynorsk",
                    "active": 0
                },
                {
                    "value": "ii",
                    "text": "Nuosu",
                    "active": 0
                },
                {
                    "value": "oc",
                    "text": "Occitan",
                    "active": 0
                },
                {
                    "value": "oj",
                    "text": "Ojibwe",
                    "active": 0
                },
                {
                    "value": "cu",
                    "text": "Old Church Slavonic, Old Bulgarian",
                    "active": 0
                },
                {
                    "value": "or",
                    "text": "Oriya",
                    "active": 0
                },
                {
                    "value": "om",
                    "text": "Oromo (Afaan Oromo)",
                    "active": 0
                },
                {
                    "value": "os",
                    "text": "Ossetian",
                    "active": 0
                },
                {
                    "value": "pi",
                    "text": "Pāli",
                    "active": 0
                },
                {
                    "value": "ps",
                    "text": "Pashto, Pushto",
                    "active": 0
                },
                {
                    "value": "fa",
                    "text": "Persian (Farsi)",
                    "active": 0
                },
                {
                    "value": "pl",
                    "text": "Polish",
                    "active": 0
                },
                {
                    "value": "pt",
                    "text": "Portuguese",
                    "active": 0
                },
                {
                    "value": "pa",
                    "text": "Punjabi (Eastern)",
                    "active": 0
                },
                {
                    "value": "qu",
                    "text": "Quechua",
                    "active": 0
                },
                {
                    "value": "rm",
                    "text": "Romansh",
                    "active": 0
                },
                {
                    "value": "ro",
                    "text": "Romanian",
                    "active": 0
                },
                {
                    "value": "ru",
                    "text": "Russian",
                    "active": 0
                },
                {
                    "value": "se",
                    "text": "Sami",
                    "active": 0
                },
                {
                    "value": "sm",
                    "text": "Samoan",
                    "active": 0
                },
                {
                    "value": "sg",
                    "text": "Sango",
                    "active": 0
                },
                {
                    "value": "sa",
                    "text": "Sanskrit",
                    "active": 0
                },
                {
                    "value": "sr",
                    "text": "Serbian",
                    "active": 0
                },
                {
                    "value": "sh",
                    "text": "Serbo-Croatian",
                    "active": 0
                },
                {
                    "value": "st",
                    "text": "Sesotho",
                    "active": 0
                },
                {
                    "value": "tn",
                    "text": "Setswana",
                    "active": 0
                },
                {
                    "value": "sn",
                    "text": "Shona",
                    "active": 0
                },
                {
                    "value": "ii",
                    "text": "Sichuan Yi",
                    "active": 0
                },
                {
                    "value": "sd",
                    "text": "Sindhi",
                    "active": 0
                },
                {
                    "value": "si",
                    "text": "Sinhalese",
                    "active": 0
                },
                {
                    "value": "ss",
                    "text": "Siswati",
                    "active": 0
                },
                {
                    "value": "sk",
                    "text": "Slovak",
                    "active": 0
                },
                {
                    "value": "sl",
                    "text": "Slovenian",
                    "active": 0
                },
                {
                    "value": "so",
                    "text": "Somali",
                    "active": 0
                },
                {
                    "value": "nr",
                    "text": "Southern Ndebele",
                    "active": 0
                },
                {
                    "value": "es",
                    "text": "Spanish",
                    "active": 0
                },
                {
                    "value": "su",
                    "text": "Sundanese",
                    "active": 0
                },
                {
                    "value": "sw",
                    "text": "Swahili (Kiswahili)",
                    "active": 0
                },
                {
                    "value": "ss",
                    "text": "Swati",
                    "active": 0
                },
                {
                    "value": "sv",
                    "text": "Swedish",
                    "active": 0
                },
                {
                    "value": "tl",
                    "text": "Tagalog",
                    "active": 0
                },
                {
                    "value": "ty",
                    "text": "Tahitian",
                    "active": 0
                },
                {
                    "value": "tg",
                    "text": "Tajik",
                    "active": 0
                },
                {
                    "value": "ta",
                    "text": "Tamil",
                    "active": 0
                },
                {
                    "value": "tt",
                    "text": "Tatar",
                    "active": 0
                },
                {
                    "value": "te",
                    "text": "Telugu",
                    "active": 0
                },
                {
                    "value": "th",
                    "text": "Thai",
                    "active": 0
                },
                {
                    "value": "bo",
                    "text": "Tibetan",
                    "active": 0
                },
                {
                    "value": "ti",
                    "text": "Tigrinya",
                    "active": 0
                },
                {
                    "value": "to",
                    "text": "Tonga",
                    "active": 0
                },
                {
                    "value": "ts",
                    "text": "Tsonga",
                    "active": 0
                },
                {
                    "value": "tr",
                    "text": "Turkish",
                    "active": 0
                },
                {
                    "value": "tk",
                    "text": "Turkmen",
                    "active": 0
                },
                {
                    "value": "tw",
                    "text": "Twi",
                    "active": 0
                },
                {
                    "value": "ug",
                    "text": "Uyghur",
                    "active": 0
                },
                {
                    "value": "uk",
                    "text": "Ukrainian",
                    "active": 0
                },
                {
                    "value": "ur",
                    "text": "Urdu",
                    "active": 0
                },
                {
                    "value": "uz",
                    "text": "Uzbek",
                    "active": 0
                },
                {
                    "value": "ve",
                    "text": "Venda",
                    "active": 0
                },
                {
                    "value": "vi",
                    "text": "Vietnamese",
                    "active": 0
                },
                {
                    "value": "vo",
                    "text": "Volapük",
                    "active": 0
                },
                {
                    "value": "wa",
                    "text": "Wallon",
                    "active": 0
                },
                {
                    "value": "cy",
                    "text": "Welsh",
                    "active": 0
                },
                {
                    "value": "wo",
                    "text": "Wolof",
                    "active": 0
                },
                {
                    "value": "fy",
                    "text": "Western Frisian",
                    "active": 0
                },
                {
                    "value": "xh",
                    "text": "Xhosa",
                    "active": 0
                },
                {
                    "value": "yi, ji",
                    "text": "Yiddish",
                    "active": 0
                },
                {
                    "value": "yo",
                    "text": "Yoruba",
                    "active": 0
                },
                {
                    "value": "za",
                    "text": "Zhuang, Chuang",
                    "active": 0
                },
                {
                    "value": "zu",
                    "text": "Zulu",
                    "active": 0
                }
            ]
        }
        {

            /*
                --blue: #365280;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
            */
            let colorPalette={
                'default':{
                    primary:ko.observable('#365280'),
                    secondary:ko.observable('#6c757d'),
                },
                'palette01':{
                    primary:ko.observable('rgb(33, 150, 243)'),
                    secondary:ko.observable('rgb(103, 58, 183)'),
                },
                'palette02':{
                    primary:ko.observable('rgb(96, 125, 139)'),
                    secondary:ko.observable('rgb(0, 150, 136)'),
                },
                'palette03':{
                    primary:ko.observable('rgb(32, 52, 97)'),
                    secondary:ko.observable('rgb(236, 64, 122)'),
                },
                'palette04':{
                    primary:ko.observable('rgb(22, 89, 90)'),
                    secondary:ko.observable('rgb(199, 126, 35)'),
                },
                'palette05':{
                    primary:ko.observable('rgb(23, 62, 67)'),
                    secondary:ko.observable('rgb(63, 176, 172)'),
                },
                'custom':{
                    primary:ko.observable('rgb(23, 62, 67)'),
                    secondary:ko.observable('rgb(63, 176, 172)'),
                },
            };
            ko.vm.colorPalette.getStyle=ko.pureComputed(()=>{
                let p =colorPalette[ko.vm.colorPalette.current()];
                return `--primary:${p.primary()};`+
                `--secondary: ${p.secondary()};`+
                '';
            });
            ko.vm.colorPalette.all=ko.pureComputed(()=>Object.keys(colorPalette).map(o=>({...colorPalette[o],name:o})))

        }
        ko.vm.Save=function(){
          let form=this;
            console.log("save",form.KVItems);
            let cells=Object.values(form.KVItems).filter(f=>f.db);
            let row=cells.reduce((a,b)=>{a[b.fn]=b.value(); return a},{});
            let tableData= JSON.parse(localStorage.getItem("JsDb-t-"+form.id)||"{}");
            tableData[row[form.pk]]=row;
            localStorage.setItem("JsDb-t-"+form.id,JSON.stringify(tableData));
        };
        ko.vm.is_dark.subscribe((val)=>{
            localStorage.setItem("KitSysIsDark",val);
        });
        ko.vm.is_arabic.subscribe((val)=>{
            localStorage.setItem("KitSysIsArabic",val);
        });
        ko.vm.CurrentPage= ko.observable();
        let pagesStack=[];
        ko.vm.pushPage=function(pageName,rowKey){
            require(['page/'+pageName],(pageModel)=>{
                let p=new pageModel(rowKey);
                if(rowKey){
                    let tableData= JSON.parse(localStorage.getItem("JsDb-t-"+pageName)||"{}");
                    if(tableData[rowKey]){
                        let row=tableData[rowKey];
                        for(let key in row){
                            if(p.data.KVItems[key])
                                p.data.KVItems[key].value(row[key]);
                        }
                    }
                }
                pagesStack.push(p);
                ko.vm.CurrentPage(p);

            });
        }
        ko.vm.pushPage(page,Query);
        ko.vm.popPage=function(){
            if(pagesStack.length>1){
                pagesStack.pop();
                ko.vm.CurrentPage(pagesStack[pagesStack.length-1]);
            }
        }
        ko.vm.PageLoadDataOld=function(obj){
            
            let self = this;
            let _data; 
            if(!obj)
            {
                console.log("OLD-DATA",self.fn,obj);
                return null;
            }
            if(obj&&obj.fn==self.fn){
                _data=obj;
            }
            else if(obj.hasOwnProperty("items") && obj.items[self.fn]){
                // _data=(obj.items||[]).find(f=>f.fn==self.fn);
                _data = obj.items[self.fn];
            }
            if(_data){
                try{
                    if(_data.hasOwnProperty("props")){
                        for(let k in _data.props){
                            if(self.props?.hasOwnProperty(k)){
                                self.props[k](_data.props[k]);
                            }
                        }
                    }
                    if(_data.hasOwnProperty("value")){
                        self.value(_data.value);
                    }
                    if(_data.hasOwnProperty("optional")){
                        self.optional(_data.optional);
                    }
                    if(_data.hasOwnProperty("sLabel")){
                        self.sLabel.val(_data.sLabel);
                    }
                    if(_data.hasOwnProperty("sIcon")){
                        self.sIcon.val(_data.sIcon);
                    }
                }
                catch(e){
                    console.error(e);
                }
                
                try{
                    if(_data.hasOwnProperty("items")){
                        (self.items&&self.items()||[]).map(item=>{
                            item.LoadDataV2(_data);
                        });
                    }                   
                    if(_data.hasOwnProperty("citems")){
                        self.onLoadDataV2.push(()=>{

                        console.log("OLD-LoadDataV2-citems",self.fn,self);
                        (_data.citems).map(citem=>{
                            console.log("OLD-LoadDataV2-citems",citem,self);
                            let citemGn=citem.gn;
                            let citemTmp=(self.config?.customItems()||[]).find(f=>f.gn==citemGn);
                            if(citemTmp){
                              let section=citemTmp.createObject();
                              console.log("OLD-LoadDataV2-citems","self.onLoadData",1,section,citem);
                              if(section.LoadDataV2){
                                section.LoadDataV2(citem);
                              }
                              // if(section.LoadData){
                              //   section.LoadData(objData);
                              // }
                            }
                          });
                        });

                        // (self.citems&&self.citems()||[]).map(item=>{
                        //     item.LoadDataV2(_data);
                        // });
                    }
                }
                catch(e){
                    console.error(self,obj,e);
                }
            }
        };
        ko.vm.PageLoadData=function(obj){
            
            let self = this;
            let _data;
            let _context;
            if(obj.hasOwnProperty('customContext')&&obj.customContext.hasOwnProperty(self.fn)){
                _context=obj.customContext[self.fn];
            }
            if(obj.hasOwnProperty(self.fn)){
                _data=obj[self.fn];
            }
            else if(obj.hasOwnProperty("fields")&&(obj.fields||{})[self.fn]){
                _data=(obj.fields||{})[self.fn];
            }
            // console.log("LoadData",self.fn,self,obj,_data);
            if(_data){
                try{
                    if(typeof _data !='object'){
                        self.value(_data);
                    }
                    if(self.isMultiVal){
                        self.values(_data.map(o=>({val:ko.observable(o.val)})));
                    }
                }
                catch(e){
                    console.error(e);
                }
                
                try{
                    if(_data.hasOwnProperty("fields")){
                        (self.items&&self.items()||[]).map(item=>{
                            item.LoadData({..._data.fields,__fieldsKeys:_data.fieldsKeys,__citemsGns:_data.__citemsGns});
                        });
                    }
                }
                catch(e){
                    console.error(e);
                }
            }
            if(_context){
                console.log("DATA",self.fn,_context);
                try{
                    let tmp={};
                    tmp[self.fn]=_context;
                    self.LoadContext(tmp);
                    // if(typeof _context !='object'){
                    //     self.value(_context);
                    // }
                }
                catch(e){
                    console.error(e);
                }
                
                try{
                    if(_context.hasOwnProperty("fields")){
                        (self.items&&self.items()||[]).map(item=>{
                            item.LoadContext({..._context.fields});
                        });
                    }
                    
                    if(_context.hasOwnProperty("citems")){
                        console.log("citems",(self.citems&&self.citems()||[]));
                        (self.citems&&self.citems()||[]).map((item,i)=>{
                            console.log("citems",item,_context.citems[i]    );
                            item.LoadContext({..._context.citems[i].fields});
                        });
                    }
                }
                catch(e){
                    console.error(e);
                }
            }
            if(self.optional()==2){
                if(obj.__fieldsKeys?.indexOf(self.fn)>-1){
                    self.optional(1);
                }
                else if(_data&&_data.props&&_data.props.find(f=>f.k=='optional')){
                    self.optional(_data.props.find(f=>f.k=='optional').v);
                }
            }
            if(self.onLoadData&&self.onLoadData.length>0){
            // console.log("self.onLoadData",2,self);

                self.onLoadData.map(f=>{f(obj,_data)});
            }
        };
        ko.vm.PageSaveData=function(obj){
            let self =this;
            
        };
        {
            // let faCat="fa-regular ";
            let faCat="fa-solid ";
            let icons={
                fe:{
                    'email':'fe-mail',
                    'fb':'fe-facebook',
                    'twitter':'fe-twitter',
                    'linkedln':'fe-linkedin',
                    'website':'fe-globe',
                    'address':'fe-home',
                    'city':'fe-home',
                    'coverLetter':'fe-list',
                    'natioality':'fe-globe',
                    'mStatus':'fas fa-user-friends',
                    'tel':'fe-phone',
                    'majorName':'fe-user',
                    'fName':'fe-user',

                    'mobils':'fe-smartphone',
                    'photo':'fe-image',
                    'country':'fe-globe',
                    'bdate':'fas '+'fa-birthday-cake',
                    'gender':'fas '+'fa-transgender',
                },
                //<i class="fa-solid fa-mobile-screen-button"></i>
                fa:{
                    'email':'fe-email',
                    'twitter':'fe-twitter',
                    'fb':'fa-brands fa-facebook',
                    'home':faCat+'fa-home',
                    'mobils':faCat+'fa-mobile-screen-button',
                    'photo':faCat+'fa-image',
                    'country':faCat+'fa-globe',
                    'bdate':faCat+'fa-birthday-cake',
                    'gender':faCat+'fa-transgender',
                    'email':faCat+'fa-envelope',
                    'address':faCat+'fa-street-view',
                    'mStatus':faCat+'fa-user-friends',
                    'fName':faCat+'fa-id-card',
                },
            }
            let objectsCounter=0;
            let customableProps=function(obj,_default,parent){
                let customVal=ko.observable();
                obj.parent=parent;
                obj.default=ko.observable(_default);
                obj.val=ko.pureComputed({
                    read:function(){
                        //console.log(obj,_default);
                        return customVal()||obj.default();
                    },
                    write:function(val){
                        if(val==obj.default()) customVal(null);
                        else customVal(val);
                    },
                });
                obj.rest=function(){
                    customVal(null);
                }
                obj.isCustom=function(){
                    return (customVal()&&customVal()!=obj.default());
                }
                obj.customVal =ko.pureComputed(()=>(customVal()&&customVal()!=obj.default())?customVal():null); 
                obj.isEditMode=ko.observable();
                return obj;
            };
            ko.vm.createComponentItem = function (data) {
                let self;
                self = {
                    citype:"leaf-item",
                    "movable": false,
                    isStorable: ko.observable(true),
                    "repeatable": false,
                    "destroyable": false,
                    canRemove:false,
                    uniqueUiId:"kit-node-"+(objectsCounter++),
                    enable: ko.observable(1),
                    label: ko.observable(data.label||data.ar),
                    sLabel:new customableProps({isEditable:true},(data.label||data.ar),self),
                    sIcon:new customableProps({isEditable:true},(data.icon||(icons.fe.hasOwnProperty(data.fn)?icons.fe[data.fn]:'fe-info')),self),
                    required: ko.observable(0),
                    visible: ko.observable(1),
                    optional: ko.observable(0),
                    value: ko.observable(),
                    grid:"col-md-12",
                    ukSortableHandle:null,
                    valueUpdate:ko.observable('input'),
                    LoadData:ko.vm.PageLoadData,
                    LoadDataV2:ko.vm.PageLoadDataOld,
                    onRemove:[],
                    onLoadData:[],
                    onLoadDataV2:[],
                    get KVItems(){
                        return (this.items&&this.items()||[]).reduce((a,b)=>{ 
                            a[b.fn]=b;  
                            return a;
                        },{});
                    },
                    ...data,
                };

                if(!self.remove){
                    self.remove=function(parent){
                        
                        
                        if(self.optional&&self.optional()==1){
                            self.optional(2);
                        }
                        else if(self.canRemove){
                            // parent.items.remove(self);
                            // parent.citems.remove(self);
                            self.parent.items.remove(self);
                            self.parent.citems.remove(self);
                            
                            self.onRemove.map(f=>{f();});
                        }
                        else{
                            self.parent.items.remove(self);
                            self.parent.citems.remove(self);
                            self.onRemove.map(f=>{f();});
                            
                        }
                    };
                }
                else if(!data.hasOwnProperty("canRemove")){
                    self.canRemove=data.canRemove;
                }
                self.isDestroyable= ko.pureComputed(()=>self.optional()>0||self.canRemove);
                if(!data.grid){
                    data.grid="col-md-12"
                }
                self.getCustomItemContext =ko.pureComputed(()=>{
                    
                    if(self.sLabel.customVal()||self.sIcon.customVal()){
                        let o={};
                        if(self.sLabel.customVal())
                            o.sLabel=self.sLabel.customVal;
                        if(self.sIcon.customVal())
                            o.sIcon=self.sIcon.customVal;
                        return o;
                    }
                });
                let _oldContext=null;
                self.LoadContext=(fields)=>{
                    _oldContext=fields;
                    if(fields.hasOwnProperty(self.fn)){
                        // console.log("DATA",self.fn,fields);
                        let custom=fields[self.fn];
                        for(let k in custom){
                            self[k]?.val&&self[k]?.val(custom[k]);
                        }
                    }
                    // else{
                    //     let custom=fields;
                    //     for(let k in custom){
                    //         self[k]?.val&&self[k]?.val(custom[k]);
                    //     }
                    // }
                };
                
                if(data.fn=='experiences')
                    console.log('OLD-experiences',data,self);
                //if(self.citype.indexOf('section')>-1){
                    self.cihelper=new KitCvSectionHelper({container:self});
                //}
                return self;
            };
        }
    }

});     