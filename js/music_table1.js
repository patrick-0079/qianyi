
				music_table1 = music_table

				for (var i = music_table1.length-1 ; i >=0 ; i--) {//排序
					document.write('<tr>');
					document.write("<td onmousedown=\copyText('"+i+"')\>"+music_table1[i].歌名+"</td>");
					document.write("<td onmousedown=\copyText('"+i+"')\>"+music_table1[i].歌手+"</td>");
					document.write("<td onmousedown=\copyText('"+i+"')\>"+music_table1[i].语种+"</td>");
					document.write('</tr>');
				}
				
				
				
		

						
						
						
				
					