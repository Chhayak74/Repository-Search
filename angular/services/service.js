// using factory method

// Factory method uses the returned value of the function,
// it returns the values
//of the function returned after the execution
// 

mainApp.factory('gitService',function gitFactory($http){

	// this method first 
	var gitAPIS  =  {};
	var baseUrl = 'https://api.github.com/search/repositories';



	gitAPIS.search = function(query){

		return $http({
          
		  method: 'GET',
		  url: baseUrl+'?q='+query +'in:name'

		})	


	}// end search

	//issues https://api.github.com/repos/adamsb6/s3_file/issues

	
	return gitAPIS;



});//end git service 