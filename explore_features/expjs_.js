var app = angular.module('app', ['ngAnimate'])

app.controller('mainCtrl', function($scope) {
	$scope.boxes = [{
		name: 'user control',
		image: 'https://tse1.mm.bing.net/th?id=OIP.DuhKyz618Nz36EuG7OuMuQHaE8&pid=Api&P=0&h=180'
	},{
		name: 'effiecient collaboration',
		image: 'https://blogs.brighton.ac.uk/bbsblog/files/2019/02/Collaboration-21f1kz5.jpg'
	},{
		name: 'tokenization of skills',
		image: 'https://pixelplex.io/wp-content/uploads/2021/03/what-is-asset-tokenization-main-1600.jpg'
	}, {
		name: 'cross chain compatability',
		image: 'https://tse1.mm.bing.net/th?id=OIP.i00ybSIW10ZRmxH7-YlbDQHaEo&pid=Api&P=0&h=180'
	}, {
		name: 'decentralized governance',
		image: 'https://blog.dock.io/content/images/2020/07/governance.jpg'
	}, {
		name: 'integration',
		image: 'https://source.unsplash.com/Ixp4YhCKZkI/900x900'
	}, {
		name: 'achievements',
		image: 'https://tse1.mm.bing.net/th?id=OIP.viGZJbzDVUBCFPD5Qs5FgAHaE8&pid=Api&P=0&h=180'
	}, {
		name: 'decentralized dispute resolution',
		image: 'https://tse1.mm.bing.net/th?id=OIP.t4M2epuksLzH3Iasiy95FQHaE8&pid=Api&P=0&h=180'
	}, {
		name: 'sustainability',
		image: 'https://source.unsplash.com/zFnk_bTLApo/900x900'
	}, {
		name: 'social impact',
		image: 'https://source.unsplash.com/j4PaE7E2_Ws/900x900'
	}, {
		name: 'machine learning',
		image: 'https://tse2.mm.bing.net/th?id=OIP.EZeP9vSGOADD1MSdiDctcgHaE7&pid=Api&P=0&h=180'
	}, {
		name: 'talent matching',
		image: 'https://tse4.mm.bing.net/th?id=OIP.CEuIfW1E5CrgnSsL6XpxiwHaD4&pid=Api&P=0&h=180'
	}, ];

	$scope.selected = [];
	$scope.selectBox = function(item, position) {
		$scope.selected = [{
			item: item,
			position: position
		}];
		$scope.$apply();
	}
	$scope.clearSelection = function() {
		$scope.selected = [];
	}
})

app.directive('box', function() {
	return {
		restrict: 'E',
		scope: {},
		bindToController: {
			onSelect: "=",
			item: "="
		},
		controllerAs: 'box',
		controller: function() {
			var box = this;

			box.goFullscreen = function(e) {
				box.onSelect(box.item, e.target.getBoundingClientRect())
			}
		},
		link: function(scope, element) {
			element.bind('click', scope.box.goFullscreen)
			element.css({
				'background-image': 'url(' + scope.box.item.image + ')'
			})
		}
	}
})

app.directive('bigBox', function($timeout) {
	return {
		restrict: 'AE',
		scope: {},
		bindToController: {
			position: "=",
			selected: "=",
			onSelect: "="
		},
		controllerAs: 'box',
		controller: function() {
			var box = this;
		},
		link: function(scope, element) {
			var css = {}
			for (var key in scope.box.position) {
				css[key] = scope.box.position[key] + 'px';
			}
			
			element.css(css);

			$timeout(function() {
				element.css({
					top: '50%',
					left: '10%'
				})
				element.addClass('image-out');
			}, 200)

			$timeout(function() {
				element.css({
					width: '80%',
					height: '100%'
				})
			}, 500)
			
			$timeout(function(){
				element.addClass('show');
			}, 800)
		}
	}
})