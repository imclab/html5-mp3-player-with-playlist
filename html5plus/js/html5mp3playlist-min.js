function html5mp3player(e){for(i=0;i<e.length;i++){if(typeof e[i].html5mp3playlistsize!="undefined"){html5size=e[i].html5mp3playlistsize}else{html5size="full"}if(typeof e[i].html5mp3playlisturl!="undefined"){html5url=e[i].html5mp3playlisturl;html5url+="html5"+html5size+".php?id="+e[i].html5mp3playlistid}else{html5url="http://html5player.svnlabs.com/v1/";html5url+="html5"+html5size+".html?id="+e[i].html5mp3playlistid}if(typeof e[i].html5mp3playlistspan!="undefined"){html5span=e[i].html5mp3playlistspan}else{html5span="html5span"}if(typeof e[i].html5mp3playlistid!="undefined"){}html5url+="&iframe=1";if(html5size=="full"){var t=227;var n=587}if(html5size=="big"){var t=450;var n=370}if(html5size=="small"){var t=227;var n=367}if(typeof e[i].html5mp3playlistid!="undefined"){var r="<ifr"+"ame src='"+html5url+"' frameborder='0' scrolling='no' height='"+t+"' width='"+n+"'></ifr"+"ame>";document.getElementById(html5span).innerHTML=r}else{document.getElementById(html5span).innerHTML="ID missing"}}}(function(){var e=window.location;if(typeof vars!="undefined")html5mp3player(vars);if(typeof varss!="undefined")html5mp3player(varss)})()