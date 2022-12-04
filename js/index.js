$('#myTabs a').click(function(e) {
			e.preventDefault()
			$(this).tab('show')
		})
		$('#searchText').change(function() {
			console.log("dd");
			var searchText = $(this).val();
			var searchSelect = $('#searchSelect').val();
			var $searchTr = "";
			if (searchText != "") {
				$('#search tbody').html("");
			
				if (searchSelect == "name") {
					$searchTr = $('#myTabContent').find('td:nth-child(1):contains(' + searchText + ')').parent();
		 	} else if (searchSelect == "singer") {
					$searchTr = $('#myTabContent').find('td:nth-child(2):contains(' + searchText + ')').parent();
				} else if (searchSelect == "language") {
					$searchTr = $('#myTabContent').find('td:nth-child(3	):contains(' + searchText + ')').parent();
				} else {
					$searchTr = $('#myTabContent').find('td:contains(' + searchText + ')').parent();
				}
				$searchTr.each(function(i, e) {
					$('#search tbody').append($(e).clone(true));
				});
			
				if ($searchTr.length <= 0) {
					$('#search tbody').html(
						'<td colspan = "7"><div class="alert alert-warning" role="alert">主包还不会这首歌捏</div></td>')
				}
				$('#search-tab').tab('show');
			} else {
				$('#first-tab').tab('show');

			}
		}).keyup(function() {
			$(this).change();
		})
		$('#searchBth').click(function() {
			$('#searchText').change();
		})

		function searchname(text) {
			var searchText = text;
			if (searchText != "") {
				$('#search tbody').html("");
			

				$searchTr = $('#myTabContent').find('td:nth-child(3	):contains(' + searchText + ')').parent();

				$searchTr.each(function(i, e) {
					$('#search tbody').append($(e).clone(true));
				});
		
				if ($searchTr.length <= 0) {
					$('#search tbody').html(
						'<td colspan = "7"><div class="alert alert-warning" role="alert">主包还不会这首歌捏</div></td>')
				}
				$('#search-tab').tab('show');
			} else {
				$('#first-tab').tab('show');

			}
		}

		function copyText(text) {
			var tex = "点歌 "+music_table1[text].歌名;
			var input = document.getElementById("cvin");
			input.value = tex;
			input.select(); 
			document.execCommand("copy"); 
			
			tc(tex)
		}


		function hdd() {
			$("html,body").animate({
				scrollTop: "0px"
			}, 100);
		}


		function dd() {
			var a = music_table.length;
			var b = Math.floor(Math.random() * a);
			copyText("点歌 " + music_table1[b].歌名 + " " + music_table1[b].歌手)
			tc("点歌 " + music_table1[b].歌名 + " " + music_table1[b].歌手)
		}

		function tc(data) {

			var lunbo = document.createElement("div");


			lunbo.id = "lunbo";
			lunbo.style.position = "fixed";
			lunbo.style.width = "60%";
			lunbo.style.height = "130px";
			lunbo.style.left = "20%";
			lunbo.style.top = "3%";
			lunbo.style.color = "black";
			lunbo.style.fontSize = "50px";
			lunbo.style.borderRadius = "20px";
			lunbo.style.textAlign = "center";
			lunbo.style.lineHeight = "60px";
			lunbo.style.backgroundColor = "#999999";

			if (document.getElementById("lunbo") == null) {
				document.body.appendChild(lunbo);
				lunbo.innerHTML = data + "<br />" + "复制成功";
				setTimeout(function() {
					document.body.removeChild(lunbo);
				}, 1000);
			} else {
				document.body.appendChild(lunbo);
				lunbo.innerHTML = data + "<br />" + "复制成功";
				setTimeout(function() {
					document.body.removeChild(lunbo);
				}, 1000);
			}
		}
