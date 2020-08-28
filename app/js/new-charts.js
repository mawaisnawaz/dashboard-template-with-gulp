
$( document ).ready(function() {

Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Wind speed during two days'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        labels: {
            overflow: 'justify'
        }
    },
    yAxis: {
        title: {
            text: 'Wind speed (m/s)'
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null
    },
    tooltip: {
        valueSuffix: ' m/s'
    },
    credits: false,
    plotOptions: {
        spline: {
            lineWidth: 4,
            states: {
                hover: {
                    lineWidth: 5
                }
            },
            marker: {
                enabled: false
            },
            pointInterval: 3600000, // one hour
            pointStart: Date.UTC(2015, 4, 31, 0, 0, 0)
        }
    },
    series: [{
        name: 'Hestavollane',
        data: [0.2, 0.8, 0.8, 0.8, 1, 1.3, 1.5, 2.9, 1.9, 2.6, 1.6, 3, 4, 3.6, 4.5, 4.2, 4.5, 4.5, 4, 3.1, 2.7, 4, 2.7, 2.3, 2.3, 4.1, 7.7, 7.1, 5.6, 6.1, 5.8, 8.6, 7.2, 9, 10.9, 11.5, 11.6, 11.1, 12, 12.3, 10.7, 9.4, 9.8, 9.6, 9.8, 9.5, 8.5, 7.4, 7.6]

    }, {
        name: 'Vik',
        data: [0, 0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]
    }],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    }
});

Highcharts.chart('sample_chart_1', {
    chart: {
        type: 'spline'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        labels: {
           enabled: false
        },
       minorTickLength: 0,
       tickLength: 0
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
           enabled: false
        },
        gridLineWidth: 1,

    },
    tooltip: {
        valueSuffix: ' m/s',
        enabled: false
    },
    exporting: { enabled: false },
    legend : {enabled: false},
    credits: false,
    plotOptions: {
        spline: {
            lineWidth: 2,
            states: {
                hover: {
                    lineWidth: 2
                }
            },
            marker: {
                enabled: false
            }
        }
    },
    series: [{
        data: [0, 0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]
    }],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    }
});

Highcharts.chart('sample_chart_2', {
    chart: {
        type: 'spline'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        labels: {
           enabled: false
        },
       minorTickLength: 0,
       tickLength: 0
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
           enabled: false
        },
        gridLineWidth: 1,

    },
    tooltip: {
        valueSuffix: ' m/s',
        enabled: false
    },
    exporting: { enabled: false },
    legend : {enabled: false},
    credits: false,
    plotOptions: {
        spline: {
            lineWidth: 2,
            states: {
                hover: {
                    lineWidth: 2
                }
            },
            marker: {
                enabled: false
            }
        }
    },
    series: [{
        data: [0, 0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]
    }],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    }
});
Highcharts.chart('sample_chart_3', {
    chart: {
        type: 'spline'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        labels: {
           enabled: false
        },
       minorTickLength: 0,
       tickLength: 0
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
           enabled: false
        },
        gridLineWidth: 1,

    },
    tooltip: {
        valueSuffix: ' m/s',
        enabled: false
    },
    exporting: { enabled: false },
    legend : {enabled: false},
    credits: false,
    plotOptions: {
        spline: {
            lineWidth: 2,
            states: {
                hover: {
                    lineWidth: 2
                }
            },
            marker: {
                enabled: false
            }
        }
    },
    series: [{
        data: [0, 0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]
    }],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    }
});
Highcharts.chart('sample_chart_4', {
    chart: {
        type: 'spline'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        labels: {
           enabled: false
        },
       minorTickLength: 0,
       tickLength: 0
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
           enabled: false
        },
        gridLineWidth: 1,

    },
    tooltip: {
        valueSuffix: ' m/s',
        enabled: false
    },
    exporting: { enabled: false },
    legend : {enabled: false},
    credits: false,
    plotOptions: {
        spline: {
            lineWidth: 2,
            states: {
                hover: {
                    lineWidth: 2
                }
            },
            marker: {
                enabled: false
            }
        }
    },
    series: [{
        data: [0, 0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]
    }],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    }
});
Highcharts.chart('sample_chart_5', {
    chart: {
        type: 'spline'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        labels: {
           enabled: false
        },
       minorTickLength: 0,
       tickLength: 0
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
           enabled: false
        },
        gridLineWidth: 1,

    },
    tooltip: {
        valueSuffix: ' m/s',
        enabled: false
    },
    exporting: { enabled: false },
    legend : {enabled: false},
    credits: false,
    plotOptions: {
        spline: {
            lineWidth: 2,
            states: {
                hover: {
                    lineWidth: 2
                }
            },
            marker: {
                enabled: false
            }
        }
    },
    series: [{
        data: [0, 0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]
    }],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    }
});
Highcharts.chart('sample_chart_6', {
        chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
                enabled: false
            },
            credits: false,
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            exporting: { enabled: false },
    legend : {enabled: false},
    credits: false,
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'Microsoft Internet Explorer',
                    y: 56.33
                }, {
                    name: 'Chrome',
                    y: 24.03,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Firefox',
                    y: 10.38
                }]
            }]
        });
});