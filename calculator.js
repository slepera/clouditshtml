		// Function that display value
		function dis(val) {
			document.getElementById("result").value += val
		}

/*
		function myFunction(event) {
			if (   event.key == '0' || event.key == '1'
				|| event.key == '2' || event.key == '3'
				|| event.key == '4' || event.key == '5'
				|| event.key == '6' || event.key == '7'
				|| event.key == '8' || event.key == '9'
				|| event.key == '+' || event.key == '-'
				|| event.key == '*' || event.key == '/')
				document.getElementById("result").value += event.key;
		}
*/
/*
		var cal = document.getElementById("calcu");
		cal.onkeyup = function (event) {
			if (event.keyCode === 13) {
				console.log("Enter");
				let x = document.getElementById("result").value
				console.log(x);
				solve();
			}
		}
*/
		// Function that evaluates the digit and return result
		function solve() {
			let x = document.getElementById("result").value
			let y = math.evaluate(x)
			document.getElementById("result").value = y
		}

		// Function that clear the display
		function clr() {
			document.getElementById("result").value = ""
		}
		
		function getOrbitFromBackEnd() {
			$.get("http://127.0.0.1:8080/orbit/0", (data, status) => {
			console.log(data);
			//console.log(data);
			});
		}

		const xValues = [];
		const tValues = [];
		const hValues = [];
		var x = 0;

		var myChart;
		


		function init() {
			myChart = new Chart("myChart", {
				type: "line",
				data: {
				labels: xValues,
				datasets: [
					{
						pointRadius: 4,
						pointBackgroundColor: "rgba(0,0,255,1)",
						data: tValues
					},
					{
						pointRadius: 4,
						pointBackgroundColor: "rgba(0,255,0,1)",
						data: hValues
					}
				]
				},
				options:{}
			});
		}

		function updateChart() {
			myChart.update();
		}

		

		function getWeatherStatusFromBackEnd() {
			$.get("http://localhost:8080/weather_status", (data, status) => {
			console.log(data);
			document.getElementById("weather_status").value = "temperature: " + data.temperature + " humidity: " +data.humidity;
			document.getElementById("temperature").innerHTML = "T: " + data.temperature;
			document.getElementById("humidity").innerHTML = "H: " + data.humidity;
			xValues.push(x);
			tValues.push(data.temperature);
			hValues.push(data.humidity);

			x+=1;
			//console.log(data);
			});
		}

			/*
			const xhr = new XMLHttpRequest();
			xhr.open("GET", "http://localhost:8080/orbit/0");
			xhr.send();
			xhr.responseType = "json";
			xhr.onload = () => {
			  if (xhr.readyState == 4 && xhr.status == 200) {
				console.log(xhr.response);
			  } else {
				console.log(`Error: ${xhr.status}`);
			  }
			};
			*/			

			function addRow() {

				var table = document.getElementById("myTable");
	
				var rowCount = table.rows.length;
				var row = table.insertRow(rowCount);
	
				var cell1 = row.insertCell(0);
				
				if(tValues.length>0)
				{
					cell1.innerHTML=tValues[tValues.length - 1]
				}
				
				if(tValues.length>0)
				{
					var cell2 = row.insertCell(1);
					cell2.innerHTML=hValues[hValues.length - 1]
				}
					
				


	
	
			}


		setInterval(function() {
		   if(x==0)
		   {
		 	init();
		   }
		  getWeatherStatusFromBackEnd();
		  updateChart();
		  addRow();
		}, 3000);