mainApp.controller('repoSearch' , ['$http','gitService' , function($http , gitService){

	var repo = this;

	this.heading = "Enter The Repository Name Below";
    // this.query = ;
	//console.log(this.query)
	this.getRepository = function(){
        var q = repo.query;
        console.log(repo.query);
        gitService.search(q)
        .then(function successCallBack(response){
        	repo.array = response.data.items;
        	repo.total = response.data.total_count;
        	/*repo.name = response*/
        	console.log(response)
        }, function errorCallBack(response){
        	alert('Error!! check console');
        	console.log(response)
        });
       
	}
	
}]);