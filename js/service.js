'use strict';
{
	let ProfileService = function() {
		let vm = this;

		vm.user = {
			name: "hank",
			contact: "here",
			bio: "asome stuff"
		};
		vm.getUser = function() {
			return vm.user;
		};
		vm.setUser = function(newUser) {
			vm.user = newUser;
		};
	};

	angular
	.module("fala")
	.service('ProfileService', ProfileService);
}