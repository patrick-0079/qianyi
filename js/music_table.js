
				//歌名排序
				music_table1 = Object.values(music_table).sort((a,b)=>
					{
						return a['歌名'].localeCompare(b['歌名'])
					}
				)
				
	
				for (var i = 0; i < music_table1.length; i++) {//排序
					document.write('<tr>');
					document.write("<td onmousedown=\copyText('" +"点歌&nbsp;"+music_table1[i].歌名+"&nbsp;"+music_table1[i].歌手 +"')\>"+music_table1[i].歌名+"</td>");
					document.write("<td onmousedown=\copyText('"+"点歌&nbsp;"+music_table1[i].歌名+"&nbsp;"+music_table1[i].歌手 +"')\>"+music_table1[i].歌手+"</td>");
					document.write("<td onmousedown=\copyText('"+"点歌&nbsp;"+music_table1[i].歌名+"&nbsp;"+music_table1[i].歌手 +"')\>"+music_table1[i].语种+"</td>");
					document.write('</tr>');
				}
				
				
				
		
			