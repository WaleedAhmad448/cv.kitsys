// let vm;
define(['ko'], function(ko) {
    function KitCvSectionHelper(data){
        let container=data.container;
        let self={
            level:data.level,

        };
        let withoutOptional=true;
        let getFields=((cond)=>(container.items && container.items() || []).filter(f=>cond?cond(f): f.isStorable()&& (withoutOptional||f.optional()<2)));
        let getCfields=((cond)=>((container.citems && container.citems()) || []).filter(f =>cond?cond(f): (withoutOptional||f.optional()<2) && f.gn && f.gn.indexOf('.')>-1));
        let getOfields=((cond)=>((container.citems && container.citems()) || []).filter(f => cond?cond(f):(withoutOptional||f.optional()<2) && f.gn && f.gn.indexOf('.')==-1));
        self.getNormalizedObj={
            v1:function(props){
         
                console.log("KitCvSectionHelper");
                
                console.log("OLD","container.citype",container.fn,getFields(),getCfields(),getOfields());
                if(container.citype=="leaf-item"){
                    //console.log("OLD-leaf-item",data,container);
                    return ko.pureComputed(()=>({ 
                        value:container.value,
                    }));
                }
                
                let fields,cfields,ofields;
                
                // if(container.citype=="root-section"){
                //     fields=getFields();
                //     cfields=getCfields(f=>true);
                //     ofields=getOfields(f=>false);
                // }
                // else
                {
                    fields=getFields();
                    cfields=getCfields();
                    ofields=getOfields();
                }
                return ko.pureComputed(()=>{
                    
                
                console.log("OLD","container.citype",container.fn,getFields(),getCfields(),getOfields());
                    let res={
                        fields:{},
                        ...props,
                    };
                    if(fields.length>0){
                        
                        fields.reduce((a,b)=>{a[b.fn]=b.cihelper?.normalizedObj || b.value; return a;},res.fields);
                        //TODO No Need?
                        //res.fieldsKeys=fields.map(f=>f.fn);
                    }
                    if(cfields.length>0){
                        res.cfields = {...cfields.reduce((a,b)=>{
                            a[((b.gn||b.fn)+"").split('.').pop()]=[...(a[((b.gn||b.fn)+"").split('.').pop()]||[]), b.cihelper?.normalizedObj||b.value]; return a;},{})};
                        //res.__citemsGns = cfields.map(f=> f.gn);
                    }
                    if(ofields.length>0){
                        ofields.reduce((a,b)=>{a[b.fn]=b.cihelper?.normalizedObj || b.value; return a;},res.fields);

                        // res.Ofields = ofields.map(f=>({
                        //     gn:f.gn,
                        //     nobj:f.normalizedObj || f.value,
                        //     cobj:f.getNormalizedContextObj,
                        // }));
                        //res.__citemsGns = cfields.map(f=> f.gn);
                    }

                    return res;
                });
            },
            v2:function(props){
         
                // console.log("KitCvSectionHelper");
                // console.log("OLD","container.citype",container.fn);
                // if(container.citype=="leaf-item"){
                //     return ko.pureComputed(()=>{
                //         return {
                //             gn:container.gn,
                //             fn:container.fn,
                //             optional:container.optional,
                //             value:container.value,
                //         };
                //     });
                // }
                return ko.pureComputed(()=>{
                    let res={
                        ...props,
                        ...container.getCustomItemContext(),
                    };
                    if(container.props){
                        res.props=container.props;
                    }
                    if((container.items&&container.items()||[]).length>0){
                        res.items=(container.items()||[]).reduce((a,b)=>{a[b.fn]=b.cihelper?.normalizedObj || b.value; return a;},{});
                    }
                    if((container.citems&&container.citems()||[]).length>0){
                        res.citems = (container.citems()||[]).map(o=>o.cihelper?.normalizedObj);
                    }
                    if((container.values&&container.values()||[]).length>0){
                        res.values = (container.values()||[]);
                    }
                    if((container.value&&container.value()||"").length>0){
                        res.value = container.value;
                    }
                    if((container.optional&&container.optional()||"0")=="1"){
                        res.optional = container.optional;
                    }
                    // if(!(res.value||res.items||res.citems||res.optional||container.isDestroyable()))
                    //     return null;
                    
                    if((container.fn)){
                        res.fn = container.fn;
                    }
                    if((container.gn)){
                        res.gn = container.gn;
                    }
                    return res;
                });
            },
        }
        self.getNormalizedObj.latest=self.getNormalizedObj.v2;
        self.normalizedObj=ko.pureComputed(()=> self.getNormalizedObj.v2()());
        
        
        return self;
    }
    return KitCvSectionHelper;

});     