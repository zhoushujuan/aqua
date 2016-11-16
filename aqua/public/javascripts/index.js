/**
 * Created by lanou on 16/11/14.
 */
var lis = document.querySelectorAll(".nav li");
lis[0].className = 'active';
for(var i = 0;i<lis.length;i++){
    lis[i].index = i;
    lis[i].onclick = function () {
        for(var j = 0;j<lis.length;j++){
            lis[j].className = '';
        }
        lis[this.index].className = 'active';
    }
}