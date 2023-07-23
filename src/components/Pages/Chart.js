import React from "react";
import Chart from 'react-apexcharts';

function Stackedbarchart() {

    return (
        <React.Fragment>
            <div className="container-fluid mb-3">
                <div className="card">
                    <div className="card-body">
                        <div className="chart-container">
                            <Chart
                                type="bar"
                                width={550} // Reduced the width of the chart
                                height={400} // Reduced the height of the chart
                                series={[
                                    {
                                        name: "Hydro-Electric",
                                        data: [345, 125, 355],
                                        color: "#1A237E",
                                    },
                                    {
                                        name: "Oil",
                                        data: [578, 178, 458],
                                        color: "#3F51B5",
                                    },
                                    {
                                        name: "Gas",
                                        data: [898, 338, 218],
                                        color: "#7986CB",
                                    },
                                    // {
                                    //     name: "Coal",
                                    //     data: [532, 587, 587],
                                    // },
                                    // {
                                    //     name: "Nuclear",
                                    //     data: [465, 276, 229],
                                    // }
                                ]}

                                options={{
                                    // title: {
                                    //     text: "Energy Consumption in Years"
                                    // },
                                    chart: {
                                        stacked: true,
                                    },
                                    plotOptions: {
                                        bar: {
                                            horizontal: false,
                                            columnWidth: '50%',
                                            endingShape: 'flat',
                                        }
                                    },
                                    stroke: {
                                        width: 1,
                                    },
                                    xaxis: {
                                        title: {
                                            text: "Energy Consumption in Year's"
                                        },
                                        categories: ['Hydro-Electric', 'Oil', 'Gas']
                                    },
                                    yaxis: {
                                        title: {
                                            text: "Data in (K)"
                                        },
                                    },
                                    legend: {
                                        position: 'top',
                                    },
                                    dataLabels: {
                                        enabled: true,
                                    },
                                    grid: {
                                        show: true,
                                        xaxis: {
                                            lines: {
                                                show: false
                                            }
                                        },
                                        yaxis: {
                                            lines: {
                                                show: false
                                            }
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Stackedbarchart;
