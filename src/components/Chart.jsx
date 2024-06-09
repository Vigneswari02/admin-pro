
export const lineoptions = {
    options: {
        chart: {
            id: "basic-bar",
            toolbar: {
                show: false
            }
        },
        grid: {
            show: false,
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        yaxis: {
            show: false,
            labels: {
                show: false,
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        xaxis: {
            show: false,
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },

        stroke: {
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: [2, 0],
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#FDD835'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            },
        },
        theme: {
            mode: 'light',
            palette: 'palette1',
            monochrome: {
                enabled: false,
                color: '#255aee',
                shadeTo: 'light',
                shadeIntensity: 0.65
            },
        }
    },
}
export const lineseries = {

    series: [
        {
            name: "series-1",
            data: [40, 160, 45, 200, 49, 130, 70, 310]
        }
    ]
}
export const baroptions = {
    options: {
        chart: {
            type: 'bar'
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                borderRadius: 10,
            },
        },
        tooltip: {
            theme: 'dark',
        },
        legend: {
            // labels: {
            //     colors: '#fff',
            // },
            markers: {
                fillColors: ['#4686A3', '#EDaE41']
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            labels: {
                show: true,
                // style: {
                //     colors: '#fff',
                // },
            }
        },
        yaxis: {
            title: {
                text: '$ (thousands)',
                // style: {
                //     colors: '#fff',
                // },
            },
            labels: {
                show: true,
                // style: {
                //     colors: '#fff',
                // },
            }
        },
        fill: {
            colors: ['#4686A3', '#EDaE41']
        },

    },
}
export const barseries = {

    series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }],
}
export const radialoptions = {
    options: {
        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                            return 249
                        }
                    }
                }
            }
        },
        fill: {
            colors: ['#4686A3', '#4a99bd', '#bb8118', '#EDaE41' ]
        },
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    },
}
export const radialseries = {
    series: [44, 55, 67, 83],
}