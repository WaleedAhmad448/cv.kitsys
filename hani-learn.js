let x=1;
let y=9;
for(var i=0;// [{ip:0,i:0}]
    i<=y;//[{ip:1,"i<=y":true},{ip:4,"i<=y":true},{ip:7,"i<=y":true}]
    i++)// [{ip:3,i:1},{ip:6,i:2}]
    console.log(y+x+i);//[{ip:2,"print":10},{ip:5,"print":11}]
console.log(y+x+i);

{
    var i=0;
    forLoop: if(i<=y){
        
        console.log(y+x+i);
        
        i++;
        goto:forLoop;
    }    
}

{
    let obg=[{ip:1,"i<=y":true},{ip:4,"i<=y":true},{ip:7,"i<=y":true}];
    for(let item in obg){
        console(item);
    }

    for(let i=0; i<obg.length;i++)
        console.log(obg[i]);
    
    for(let i=0; i<obg.length; i++){
        let item=obg[i];

        console(item);
    }

}
/*
10
11
12
13
14
15
16
17
18
19
20



*/
