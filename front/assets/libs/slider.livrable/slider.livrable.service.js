'use strict'

function SliderLivrableServiceImp() {
        const DAY_TYPE = "JOURS",
        MONTH_TYPE = "MOIS",
        YEAR_TYPE = "ANNEES";

    var dateValue;
    var dateType = DAY_TYPE;
    var salary;
    this .isDisabled = false;

    this.toString = function() {
        console.log(dateValue, dateType, salary);
    }

    this.init = function(d, s, t) {
        if (d && t === undefined) {
            if (d < 30) {
                dateType = DAY_TYPE;
                t = DAY_TYPE;
            } else if (d < 365) {
                dateValue = d / 12;
                dateType = MONTH_TYPE;
                t = MONTH_TYPE;
            } else {
                dateValue = d / 365;
                dateType = YEAR_TYPE;
                t = YEAR_TYPE;
            }
        }
        dateValue = (d) ? d : 0;
        dateType = (t) ? t : 0;
        salary = (s) ? s : 0;
    };

    this.getDateValue = function() {
        return dateValue;
    }

    this.setDateValue = function(dateValueSetter) {
        dateValue = dateValueSetter;
    }

    this.getDateType = function() {
        return dateType;
    }

    this.setDateType = function(dateTypeSetter) {
        this.dateType = dateTypeSetter;
    }

    this.getSalary = function() {
        return salary;
    }

    this.setSalaryValue = function(salarySetter) {
        salary = salarySetter;
    }

    this.setData = function(salarySetter, date, dateTypeSetter) {
        dateValue = date;
        salary = salarySetter;
        dateType = dateTypeSetter;
    }

    this.init();
}

angular.module('alBargasyApp').service('SliderLivrableService', SliderLivrableServiceImp);