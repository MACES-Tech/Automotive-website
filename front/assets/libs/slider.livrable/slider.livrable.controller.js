'use strict'

function SliderLivrableControllerImp($scope, $timeout, SliderLivrableService , $element) {

    const DAY_TYPE = "JOURS",
            MONTH_TYPE = "MOIS",
            YEAR_TYPE = "ANNEES";
    var dateType = DAY_TYPE;
    $scope.isDisabled = SliderLivrableService.isDisabled;

    var verticalAndHorizontalSliderOnChange = function() {
        updateDotPosition();
        var totalDay = $scope.dateSlider.value;
        if(dateType === MONTH_TYPE) 
         totalDay *= 30;
         else if (dateType === YEAR_TYPE)
         totalDay *= 365;
        SliderLivrableService.setData($scope.currencySlider.value , totalDay , dateType);
    }

    var init = function (isDisabled){
        $scope.dateSlider = {
            value: getValueAccordingType(),
            options: {
                floor: 1,
                ceil: getCeilAccordingType(),
                disabled:isDisabled,
                vertical: true,
                onChange: verticalAndHorizontalSliderOnChange,
                onEnd: dateOnEnd,
                translate: function(value) {
                    return value + dateType[0];
                },
            }
        };

        $scope.currencySlider = {
            value: SliderLivrableService.getSalary(),
            options: {
                floor: 1,
                ceil: 1000,
                disabled:isDisabled,
                onChange: verticalAndHorizontalSliderOnChange,
                onEnd: currencyOnEnd,
                translate: function(value) {
                    return '€' + value;
                }
            }
        };

        $timeout(function(){
            updateDotPosition();
        });
    }

    var dateOnEnd = function() {
        var cVal = $scope.dateSlider.value;
        var cCeil = $scope.dateSlider.options.ceil;

        if (cVal === cCeil) {
            switch (dateType) {

                case DAY_TYPE:
                    dateType = MONTH_TYPE;
                    $scope.dateSlider.value = 1;
                    $scope.dateSlider.options.ceil = 12;
                    setOnNewPositionAfterChangeBoundary('DATE_CHANGE');
                    break;

                case MONTH_TYPE:
                    dateType = YEAR_TYPE;
                    $scope.dateSlider.value = 1;
                    $scope.dateSlider.options.ceil = 100;
                    setOnNewPositionAfterChangeBoundary('DATE_CHANGE');
                    break;
            }
        } else if (cVal === 1) {
            switch (dateType) {

                case YEAR_TYPE:
                    dateType = MONTH_TYPE;
                    $scope.dateSlider.value = 11;
                    $scope.dateSlider.options.ceil = 12;
                    setOnNewPositionAfterChangeBoundary('DATE_CHANGE');
                    break;

                case MONTH_TYPE:
                    dateType = DAY_TYPE;
                    $scope.dateSlider.value = 29;
                    $scope.dateSlider.options.ceil = 30;
                    setOnNewPositionAfterChangeBoundary('DATE_CHANGE');
                    break;
            }
        }
    }

    var currencyOnEnd = function() {
        var hVal = $scope.currencySlider.value;
        var hCeil = $scope.currencySlider.options.ceil;

        if (hVal === 1 && hCeil > 1000) {

            $scope.currencySlider.options.ceil /= 10;
            $scope.currencySlider.value = $scope.currencySlider.options.ceil;
            setOnNewPositionAfterChangeBoundary('CURRENCY_CHANGE', false);

        } else if (hCeil < 10000000000 && hVal === hCeil) {

            $scope.currencySlider.value = hCeil;
            $scope.currencySlider.options.ceil *= 10;
            setOnNewPositionAfterChangeBoundary('CURRENCY_CHANGE', true);

        }
    }

    var getCeilAccordingType = function() {
        dateType = SliderLivrableService.getDateType();
        if(dateType === 0) dateType = DAY_TYPE;

        switch (SliderLivrableService.getDateType()) {
            case DAY_TYPE:
                return 30;
            case MONTH_TYPE:
                return 12;
            case YEAR_TYPE:
                return 100;
        }
        return 30;
    }

    var getValueAccordingType = function() {

        var val = SliderLivrableService.getDateValue();
        switch (SliderLivrableService.getDateType()) {
            case DAY_TYPE:
                return val;
            case MONTH_TYPE:
                return val / 30;
            case YEAR_TYPE:
                return val / 365;
        }
        return 0;
    }

    var updateDotPosition = function() {
        var datePos = $element.find('.vertical .rz-pointer.rz-pointer-min').position();
        var currencyPos = $element.find('.horizontal .rz-pointer.rz-pointer-min').position();

        var setMapBallPosition = function (valueOne , valueTwo){
            $scope.mapBall = {
                "top" : valueOne,
                "left": valueTwo
            }
        }

        if($scope.dateSlider.value === 0 && $scope.currencySlider.value === 0){
            $scope.mapBall = { "left" : "15px", "bottom": "-3px" } // init
        }else {
            if(datePos === undefined && currencyPos === undefined){
                datePos = $scope.dateSlider.value / $scope.dateSlider.options.ceil;

                currencyPos = $scope.currencySlider.value / $scope.currencySlider.options.ceil;
                datePos *= 100 , currencyPos *= 100;
                datePos = 100 - datePos ;

                setMapBallPosition(datePos + "%" , currencyPos + "%");
            }else  {

                if(datePos === undefined) datePos = {} , datePos.top = 0;
                if(currencyPos === undefined) currencyPos = {} , currencyPos.top = 0;

                setMapBallPosition((datePos.top - 4) + "px" , (currencyPos.left + 16) + "px")
            }
        }
        SliderLivrableService.setData($scope.currencySlider.value,
            $scope.dateSlider.value, dateType);
    }

    var setOnNewPositionAfterChangeBoundary = function(sliderType, increaseType) {

        switch (sliderType) {
            case 'DATE_CHANGE':
                var percentageValue;
                switch (dateType) {
                    case MONTH_TYPE:
                        percentageValue = 100
                        break;

                    case YEAR_TYPE:
                        percentageValue = 91.8;
                        break;

                    default:
                        percentageValue = 100
                }

                var botVal = $scope.dateSlider.value / $scope.dateSlider.options.ceil;
                var botPerc = botVal * 100;
                $element.find('#canvas').css({ top: (percentageValue - botPerc) + '%' });
                break;
            case 'CURRENCY_CHANGE':
                var val = 0,
                    rigVal, rigPerc;

                if (increaseType) {

                    val = $scope.currencySlider.value;
                    rigVal = val / $scope.currencySlider.options.ceil;
                    rigPerc = rigVal * 100 + 4;

                } else {
                    rigPerc = 80;
                }

                $element.find('#canvas').css({ left: (rigPerc) + "%" });
                break;
        }

    }
    
    init($scope.isDisabled);

}

angular.module('alBargasyApp').controller('SliderLivrableController', SliderLivrableControllerImp);