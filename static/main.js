$(document).ready(function(){function a(a){return a.json()}function b(a){var b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return 0===a&&(a=12),b[a-1]}var c=new URLSearchParams(location.search),d=c.get("waybill"),e=c.get("cp_id"),f=c.get("key"),g=c.get("username"),h="https://www.clickpost.in/api/v2/track-order/?cp_id="+e+"&format=json&key="+f+"&username="+g+"&waybill="+d;fetch(h,{method:"get"}).then(a).then(function(a){function c(a){$(".point-circle div").css("border-color","transparent"),$("#"+a+" div").css("border-color","#fff"),$(".tracking-status").html(""),$.each(g,function(c,d){if(g[c].clickpost_status_description===a){var e=g[c].timestamp.substr(8,2),f=b(parseInt(g[c].timestamp.substr(5,2))),h="",i=g[c].timestamp.substr(11,5);h="None"!=g[c].location?"<label>Location: <span>"+g[c].location+"</span></label>":"<label><span>Payment Approved</span></label>";var j='<div class="data-point"><div class="dp-date"><label><span class="day">'+e+'</span><span class="month">'+f+'</span></label></div><div class="dp-location">'+h+'<span class="area">('+i+')</span></div><div class="dp-remark">'+g[c].remark+"</div></div>";$(".tracking-status").prepend(j)}})}if(a.result[d].valid){var e=0,f=a.result,g=f[d].scans||[],h=["PickedUp","InTransit","OutForDelivery","Delivered"],i=["Picked Up","Shipped","Near You","Delivered"],k=[0,33,66,100],l=[1,4,5,6,8],m=[0,0,1,2,3],n=0,o=h.length,p="",q="";for($("#container").html('<div class="order-status"><div class="delivery"><div class="state-label"></div><div class="order-status-timeline"><div class="order-status-timeline-completion"></div></div><div class="state-point"></div></div></div><div class="tracking-status"></div>'),n=0;n<o;n++)p+='<div id="'+h[n]+'" class="point-circle"><div class="point"></div></div>',q+='<div class="point-label">'+i[n]+"</div>";$(".state-label").html(q),$(".state-point").html(p);var r=g.length-1;for(r;r>=0;r--)if(l.indexOf(g[r].clickpost_status_code)>=0){var t=m[l.indexOf(g[r].clickpost_status_code)];$("#"+h[t]).css("background-color","#2196F3"),e<t&&(e=t)}$(".order-status-timeline-completion").css("width",k[e]+"%"),$(".point-circle").click(function(){c($(this).attr("id"))}),c(h[e]),$(".loader").hide()}})});