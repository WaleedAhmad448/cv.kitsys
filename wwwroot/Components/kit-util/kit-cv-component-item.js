// let vm;
define(['ko'], function(ko) {
    let objectsCounter=0, CIsLabel, CIsIcon;
    {
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
        CIsLabel=customableProps;
        CIsIcon=customableProps;
    }
    function KitMyCvComponentItem(data) {
        let self = {
            uniqueUiId:"kit-node-"+(objectsCounter++),
            
            fn:"kit-node-"+(objectsCounter),

            citype:"leaf-item",
            cn:ko.observable("kit-undefined"),
            
            grid:"col-md-12",
            ukSortableHandle:null,
            optional: ko.observable(0),
            visible: ko.observable(true),
            
            isStorable: ko.observable(true),
            enable: ko.observable(true),
            value: ko.observable(),
            valueUpdate:ko.observable('input'),
            required: ko.observable(false),

            "movable": false,
            "repeatable": false,
            
            "destroyable": false,
            canRemove:false,
            
            sLabel:new CIsLabel({isEditable:true},(data.label||data.ar),self),
            sIcon:new CIsIcon({isEditable:true},(data.icon||(icons.fe.hasOwnProperty(data.fn)?icons.fe[data.fn]:'fe-info')),self),
            // LoadData:ko.vm.PageLoadData,
            
            onRemove:[],
            onLoadData:[],
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
            // self.cihelper=new KitCvSectionHelper({container:self});
        //}
        return self;
    }
    return KitMyCvComponentItem;

});     