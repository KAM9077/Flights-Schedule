var app = angular.module('app1.module',[]);
app.controller('myapp',function($scope){
$scope.val= $('#val').val();  
	$scope.data1=[
	{flightNumber:"001245",
	 date:"25/2/2017",
	 takeoffs:"12:25",
	 landing:"3:30",
	 from:"Qairo",
	 image:"Sydney.jpg",
	 to:"Sydney",
	 pilotsName:"Muhammad Masaid",
	 seats:215,
	 emptyseats:10,
	 flightcompany:"Roial airline"
	},
	{flightNumber:"001255",
	 date:"23/2/2017",
	 takeoffs:"22:10",
	 landing:"2:20",
	 from:"Qairo",
	 image:"Tokyo.jpg",
	 to:"Damascos",
	 pilotsName:"Abdul Al-azeez",
	 seats:310,
	 emptyseats:2,
	 flightcompany:"Turkish airline"
	},
	 {flightNumber:"001232",
	 date:"15/3/2017",
	 takeoffs:"4:50",
	 landing:"6:15",
	 from:"Newyork",
	 image:"New york.jpg",
	 to:"Madred",
	 pilotsName:"Ahmad Shamasneh",
	 seats:150,
	 emptyseats:0,
	 flightcompany:"Amarican airline"
	},
	 {flightNumber:"001134",
	 date:"1/9/2017",
	 takeoffs:"7:45",
	 landing:"10:45",
	 from:"Newyork",
	 image:"Paris.jpg",
	 to:"Paris",
	 pilotsName:"Abu Baker",
	 seats:350,
	 emptyseats:30,
	 flightcompany:"Frinsh airline"
	},
	{flightNumber:"001134",
	 date:"1/9/2017",
	 takeoffs:"7:45",
	 landing:"10:45",
	 from:"Newyork",
	 image:"Paris.jpg",
	 to:"Paris",
	 pilotsName:"Abu Baker",
	 seats:350,
	 emptyseats:30,
	 flightcompany:"Frinsh airline"
	},
	{flightNumber:"001134",
	 date:"1/9/2017",
	 takeoffs:"7:45",
	 landing:"10:45",
	 from:"Newyork",
	 image:"Paris.jpg",
	 to:"Paris",
	 pilotsName:"Abu Baker",
	 seats:350,
	 emptyseats:30,
	 flightcompany:"Frinsh airline"
	}
	];
	$scope.user = [
	{
		username:"Ahmad",
		Passworde:1234567
	},
	{
		username:"Maher",
		Passworde:12345
	},
	{
		username:"Mohammad",
		Passworde:123
	}
	]
	

console.log($scope.data1)


	$scope.ok=function(){
		$scope.val= $('#val').val();
		console.log($scope.val)
	}
	console.log($scope.val);
})