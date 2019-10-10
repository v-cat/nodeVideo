// console.log(process.argv[2]);
var playerAction=process.argv[2];
if(playerAction!='rock'&&playerAction!='paper'&&playerAction!='scissor'){
    console.log('请输入rock或者paper或者scissor')
}else{
    var computerActon;
    var random=Math.random()*3
    if(random<1){
        computerActon='rock'
        console.log('电脑出了石头')
    }else if(random>2){
        computerActon="scissor"
        console.log('电脑出了剪刀')
    }else{
        computerActon='paper'
    }

    if(computerActon==playerAction){
        console.log('平局')
    }else if(computerActon=='rock'&&playerAction=='scissor'||
    computerActon=='scissor'&&playerAction=='paper'||
    computerActon=='paper'&&playerAction=='rock'
    ){
        console.log('你输了')
    }else{
       console.log('你赢了') 
    }
}