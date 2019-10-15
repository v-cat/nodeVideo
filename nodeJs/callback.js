

// try{
//     interView(function(){
//         console.log('smile')
//     })
// }catch(e){
//     console.log('cry',e)
// }


interView(function(res){
    if(res ){
        return console.log('cry')
    }
    console.log('smile')
})
function interView(callBack){
    setTimeout(()=>{
        if( Math.random() * 100<80){
            callBack(null,'success');
        }else{
           callBack(new Error('fail'))
        //    throw new Error('fail')
        }
       
    },500)
}