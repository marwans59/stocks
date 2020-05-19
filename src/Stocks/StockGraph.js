import React,{useState} from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import useFetch, { DEFAULT_OPTIONS } from '../shared/useFetch';

const StockGraph = (props) => {

   let activeStock= ('ACME')

   if (props.activeStock){
  activeStock= props.activeStock
   }
    //const activeStock = props.activeStock

    const string = "stocks/"
    const activeURL = string.concat(activeStock, "/price/today")
    console.log(activeURL)

    const [stocks, isLoading, error] = useFetch(activeURL, DEFAULT_OPTIONS);

    if (error) {
        return <div>`Error: {error}`</div>;
    } else if (isLoading) {
        return <div>Loading...</div>;
    } else if (stocks) {
        const detailed = stocks.detailed.map((item) => {
            return {
                
                x: new Date(item.date),
                y: item.price
            };
        });
        const aggregated = stocks.aggregated.map((item) => {
            return {
                x: new Date(item.date),
                y: item.price
            };
        });
        const options = {
            chart: {
                type: 'line'
            },
            title: {
                text: activeStock
            },
            subtitle: {
                text: ''
            },
            xAxis: { type: 'datetime' },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: false
                    },
                    enableMouseTracking: false
                }
            },
            series: [
                {
                    name: 'detailed',
                    data: detailed
                }
                ,
                {
                    name: 'aggregated',
                    data: aggregated
                }
            ]
        };
        console.log('graph-render', stocks)

        return (
            <section className='stock-graph'>
                <div id="stockGraphContainer" className="stock-graph__container">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                    />
                </div>
            </section>
        )

    }
    else {
        return null;
    }
}

export default StockGraph;