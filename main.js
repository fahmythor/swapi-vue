$.material.init();

var apiURL = "//swapi.co/api/people/?format=json";

new Vue({
	el: '#apps',
	data: {
		x:0,
		character: null,
		characters: []
	},
	ready: function() {
		this.fetchData();
		console.log(this.x);
	},
	methods: {		
		fetchData: function() {
			this.$http({
				url: apiURL,
				method: 'GET'
			}).then(function(response) {
				this.$set('characters', response.data.results);
				this.fetchDatas();				
			}, function(response) {
				console.log("Error fetchData");
			});						
		},

		fetchDatas:function() {
			for(var i=2;i<10;i++)
			{
				this.$http({
				url: apiURL.concat("&page=".concat(i)),
				method: 'GET'
			}).then(function(response) {
				for(var i = 0; i < response.data.results.length; i++) {
					var obj = response.data.results[i];
					this.characters.push(obj);					
				}
				this.x = this.characters.length;					
				//console.log(this.x);			
				// this.characters.push(response.data.results);
			}, function(response) {
				console.log("Error fetchData");
			});
			}

			console.log(this.x);
		},

		getHomeSpec: function(x) {
			console.log(x);
		}
	}
});