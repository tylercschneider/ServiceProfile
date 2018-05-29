'use strict';
{
	let formCom = {
		templateUrl: 'formCom.html',
		controller: function(ProfileService) {
			let vm = this;
			vm.profileData = ProfileService.getUser();
			vm.setData = function(){
				ProfileService.setUser(vm.profileData);
			};
		}
	}
	formCom.$inject = ["ProfileService"];


	angular
	.module("fala")
	.component('formCom',formCom);
}