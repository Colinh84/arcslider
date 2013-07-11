/* ArcSlider v1.0
 * Created by: Colin Hunt
 * Email: Colin@arcsec.ca
 * Website: http://arcsec.ca
 * 
 * Copyright 2013 Colin Hunt.
 * 
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 */

function arcSlider ($scope, $timeout) {
	var timerID;
	//must set to number of slides in slider to work
	$scope.numSlides = 3;
	$scope.init = function () {
		//set which slide you want to start on
		$scope.setupSlide(1);
	}
	$scope.setupSlide = function (index) {
		if (typeof timerID !== "undefined") {
			$timeout.cancel(timerID);
		}
		if (index <= $scope.numSlides) {
			$scope.count = index;
		} else {
			$scope.count = 1;
		}
		$scope.changeSlide();
	}
	$scope.changeSlide = function() {
		$scope.slide = $scope.count;
		if ($scope.count < $scope.numSlides) {
			$scope.count++;
		} else {
			$scope.count = 1;
		}
		//timer sets how long each slide to display before changing, 8000 = 8 seconds
		timerID = $timeout($scope.changeSlide, 8000);
	}
	$scope.init();
}