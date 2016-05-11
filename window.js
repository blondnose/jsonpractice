/**
 * Created by admin on 2016/2/22.
 */
var isshow=0;//0С����û����ʾ��1С��������
function delWinD()
{
    $(".bgDiv").each(function(){this.style.display="none";})
    $(".msgDiv").each(function(){this.style.display="none";})
    isshow=0;
}
function creatediv(i)
{
    var msgw,msgh,bordercolor;
    msgw=400;//��ʾ���ڵĿ��
    msgh=450;//��ʾ���ڵĸ߶�
    var sWidth,sHeight;
    if( top.location == self.location )
        doc = document;
    var docElement = doc.documentElement;
    sWidth=docElement.clientWidth;
    sHeight = docElement.clientHeight;
    if( docElement.scrollHeight > sHeight )
        sHeight = docElement.scrollHeight;
    var bgObj=document.createElement("div");
    bgObj.setAttribute('class','bgDiv');
    bgObj.style.position="absolute";
    bgObj.style.top= "0";
    bgObj.style.left="0";
    bgObj.style.background="#777";
    bgObj.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75";
    bgObj.style.opacity="0.6";
    bgObj.style.width=sWidth + "px";
    bgObj.style.height=sHeight + "px";
    bgObj.style.zIndex = "10000";
    document.body.appendChild(bgObj);

    var msgObj=document.createElement("div");
    msgObj.setAttribute("class","msgDiv");
    msgObj.setAttribute("align","center");
    msgObj.style.position = "absolute";
    msgObj.style.left = "50%";
    msgObj.style.background="#fff";
    msgObj.style.marginLeft = "-200px" ;
    msgObj.style.top = (document.documentElement.clientHeight/2+document.documentElement.scrollTop-252)+"px";
    msgObj.style.width = msgw + "px";
    msgObj.style.height =msgh + "px";
    msgObj.style.zIndex = "10001";
        msgObj.innerHTML = "<a href=javascript:void(0); onclick='delWinD();return false;'>关闭窗口</a><br />";

    document.body.appendChild(msgObj);
}

function show()
{
    isshow=1;
    if($(".msgDiv").length<1)//С���ڲ�����
    creatediv();
else
    {
        document.getElementsByClassName("bgDiv")[0].style.display="";
        document.getElementsByClassName("msgDiv")[0].style.display="";
        document.getElementsByClassName("msgDiv")[0].style.top=(document.documentElement.clientHeight/2+document.documentElement.scrollTop-252)+"px";
    }
}