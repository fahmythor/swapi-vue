$.material.init();

var apiURL = "//swapi.co/api/people/?format=json";

new Vue({
	el: '#apps',
	data: {
		character: null,
		characters: []
	},
	ready: function() {
		this.fetchData();
		alert("asdsd");
	},
	methods: {
		fetchData: function() {			
			this.$http({
				url: apiURL,
				method: 'GET'
			}).then(function(response) {
				this.$set('characters', response.data.results);
			}, function(response) {
				console.log("Error fetchData");
			});

			for(i=2;i<10;i++)
			{
				this.$http({
				url: apiURL.concat("&page=".concat(i)),
				method: 'GET'
			}).then(function(response) {
				this.$set('characters',response.data.results);
			}, function(response) {
				console.log("Error fetchData");
			});
			}
		}
	}
});