'use strict';
{
	let profCom = {
		templateUrl: 'profCom.html',
		controller: function(ProfileService) {
			let vm = this;
			vm.profileData = ProfileService.getUser();
		}
	}
	profCom.$inject = ['ProfileService'];

	angular
	.module("fala")
	.component('profCom', profCom);
}