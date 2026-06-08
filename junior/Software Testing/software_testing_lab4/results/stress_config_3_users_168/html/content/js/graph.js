/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 872.0, "minX": 0.0, "maxY": 10011.0, "series": [{"data": [[0.0, 872.0], [0.1, 902.0], [0.2, 914.0], [0.3, 929.0], [0.4, 943.0], [0.5, 956.0], [0.6, 975.0], [0.7, 1004.0], [0.8, 1018.0], [0.9, 1019.0], [1.0, 1022.0], [1.1, 1036.0], [1.2, 1049.0], [1.3, 1061.0], [1.4, 1080.0], [1.5, 1081.0], [1.6, 1094.0], [1.7, 1117.0], [1.8, 1125.0], [1.9, 1128.0], [2.0, 1128.0], [2.1, 1139.0], [2.2, 1151.0], [2.3, 1155.0], [2.4, 1239.0], [2.5, 1275.0], [2.6, 1275.0], [2.7, 1275.0], [2.8, 1288.0], [2.9, 1289.0], [3.0, 1323.0], [3.1, 1330.0], [3.2, 1332.0], [3.3, 1334.0], [3.4, 1366.0], [3.5, 1425.0], [3.6, 1455.0], [3.7, 1482.0], [3.8, 1482.0], [3.9, 1484.0], [4.0, 1502.0], [4.1, 1502.0], [4.2, 1502.0], [4.3, 1503.0], [4.4, 1514.0], [4.5, 1543.0], [4.6, 1574.0], [4.7, 1634.0], [4.8, 1662.0], [4.9, 1694.0], [5.0, 1736.0], [5.1, 1742.0], [5.2, 1771.0], [5.3, 1802.0], [5.4, 1811.0], [5.5, 1832.0], [5.6, 1871.0], [5.7, 1881.0], [5.8, 1881.0], [5.9, 1881.0], [6.0, 1882.0], [6.1, 1882.0], [6.2, 1890.0], [6.3, 1900.0], [6.4, 1919.0], [6.5, 1930.0], [6.6, 1978.0], [6.7, 1978.0], [6.8, 1978.0], [6.9, 1990.0], [7.0, 2021.0], [7.1, 2033.0], [7.2, 2050.0], [7.3, 2080.0], [7.4, 2111.0], [7.5, 2170.0], [7.6, 2200.0], [7.7, 2284.0], [7.8, 2289.0], [7.9, 2317.0], [8.0, 2348.0], [8.1, 2403.0], [8.2, 2407.0], [8.3, 2407.0], [8.4, 2409.0], [8.5, 2427.0], [8.6, 2427.0], [8.7, 2427.0], [8.8, 2428.0], [8.9, 2428.0], [9.0, 2431.0], [9.1, 2438.0], [9.2, 2455.0], [9.3, 2455.0], [9.4, 2460.0], [9.5, 2463.0], [9.6, 2466.0], [9.7, 2466.0], [9.8, 2466.0], [9.9, 2468.0], [10.0, 2492.0], [10.1, 2522.0], [10.2, 2552.0], [10.3, 2574.0], [10.4, 2582.0], [10.5, 2590.0], [10.6, 2620.0], [10.7, 2649.0], [10.8, 2680.0], [10.9, 2738.0], [11.0, 2771.0], [11.1, 2799.0], [11.2, 2859.0], [11.3, 2888.0], [11.4, 2919.0], [11.5, 2977.0], [11.6, 3007.0], [11.7, 3035.0], [11.8, 3096.0], [11.9, 3126.0], [12.0, 3157.0], [12.1, 3182.0], [12.2, 3186.0], [12.3, 3216.0], [12.4, 3275.0], [12.5, 3305.0], [12.6, 3711.0], [12.7, 3757.0], [12.8, 3759.0], [12.9, 3773.0], [13.0, 3789.0], [13.1, 3818.0], [13.2, 3834.0], [13.3, 3843.0], [13.4, 3855.0], [13.5, 3874.0], [13.6, 3886.0], [13.7, 3915.0], [13.8, 3927.0], [13.9, 3927.0], [14.0, 3927.0], [14.1, 3927.0], [14.2, 3946.0], [14.3, 3982.0], [14.4, 3992.0], [14.5, 3992.0], [14.6, 3992.0], [14.7, 3992.0], [14.8, 3993.0], [14.9, 4006.0], [15.0, 4020.0], [15.1, 4020.0], [15.2, 4021.0], [15.3, 4021.0], [15.4, 4023.0], [15.5, 4024.0], [15.6, 4024.0], [15.7, 4024.0], [15.8, 4024.0], [15.9, 4024.0], [16.0, 4024.0], [16.1, 4024.0], [16.2, 4024.0], [16.3, 4034.0], [16.4, 4036.0], [16.5, 4049.0], [16.6, 4050.0], [16.7, 4050.0], [16.8, 4050.0], [16.9, 4050.0], [17.0, 4050.0], [17.1, 4067.0], [17.2, 4086.0], [17.3, 4096.0], [17.4, 4104.0], [17.5, 4111.0], [17.6, 4115.0], [17.7, 4125.0], [17.8, 4131.0], [17.9, 4134.0], [18.0, 4150.0], [18.1, 4155.0], [18.2, 4155.0], [18.3, 4164.0], [18.4, 4179.0], [18.5, 4180.0], [18.6, 4183.0], [18.7, 4187.0], [18.8, 4191.0], [18.9, 4194.0], [19.0, 4213.0], [19.1, 4214.0], [19.2, 4244.0], [19.3, 4245.0], [19.4, 4246.0], [19.5, 4250.0], [19.6, 4274.0], [19.7, 4282.0], [19.8, 4293.0], [19.9, 4295.0], [20.0, 4303.0], [20.1, 4304.0], [20.2, 4333.0], [20.3, 4362.0], [20.4, 4364.0], [20.5, 4373.0], [20.6, 4386.0], [20.7, 4386.0], [20.8, 4386.0], [20.9, 4386.0], [21.0, 4387.0], [21.1, 4387.0], [21.2, 4387.0], [21.3, 4394.0], [21.4, 4394.0], [21.5, 4415.0], [21.6, 4416.0], [21.7, 4416.0], [21.8, 4416.0], [21.9, 4422.0], [22.0, 4430.0], [22.1, 4430.0], [22.2, 4430.0], [22.3, 4441.0], [22.4, 4444.0], [22.5, 4444.0], [22.6, 4444.0], [22.7, 4453.0], [22.8, 4482.0], [22.9, 4483.0], [23.0, 4512.0], [23.1, 4513.0], [23.2, 4514.0], [23.3, 4543.0], [23.4, 4543.0], [23.5, 4567.0], [23.6, 4567.0], [23.7, 4567.0], [23.8, 4567.0], [23.9, 4573.0], [24.0, 4573.0], [24.1, 4575.0], [24.2, 4604.0], [24.3, 4605.0], [24.4, 4619.0], [24.5, 4634.0], [24.6, 4642.0], [24.7, 4655.0], [24.8, 4655.0], [24.9, 4655.0], [25.0, 4656.0], [25.1, 4656.0], [25.2, 4656.0], [25.3, 4656.0], [25.4, 4656.0], [25.5, 4656.0], [25.6, 4664.0], [25.7, 4664.0], [25.8, 4664.0], [25.9, 4664.0], [26.0, 4664.0], [26.1, 4667.0], [26.2, 4696.0], [26.3, 4710.0], [26.4, 4716.0], [26.5, 4716.0], [26.6, 4716.0], [26.7, 4740.0], [26.8, 4740.0], [26.9, 4740.0], [27.0, 4818.0], [27.1, 4818.0], [27.2, 4818.0], [27.3, 4818.0], [27.4, 4818.0], [27.5, 4818.0], [27.6, 4821.0], [27.7, 4821.0], [27.8, 4821.0], [27.9, 4821.0], [28.0, 4821.0], [28.1, 4821.0], [28.2, 4821.0], [28.3, 4833.0], [28.4, 4834.0], [28.5, 4834.0], [28.6, 4834.0], [28.7, 4834.0], [28.8, 4834.0], [28.9, 4834.0], [29.0, 4834.0], [29.1, 4834.0], [29.2, 4852.0], [29.3, 4909.0], [29.4, 4910.0], [29.5, 4910.0], [29.6, 4910.0], [29.7, 4910.0], [29.8, 4910.0], [29.9, 4910.0], [30.0, 4910.0], [30.1, 4910.0], [30.2, 4910.0], [30.3, 4910.0], [30.4, 4911.0], [30.5, 4911.0], [30.6, 4911.0], [30.7, 4911.0], [30.8, 4911.0], [30.9, 4934.0], [31.0, 4934.0], [31.1, 4934.0], [31.2, 5023.0], [31.3, 5081.0], [31.4, 5083.0], [31.5, 5084.0], [31.6, 5084.0], [31.7, 5084.0], [31.8, 5084.0], [31.9, 5084.0], [32.0, 5084.0], [32.1, 5084.0], [32.2, 5084.0], [32.3, 5084.0], [32.4, 5085.0], [32.5, 5095.0], [32.6, 5095.0], [32.7, 5112.0], [32.8, 5114.0], [32.9, 5141.0], [33.0, 5163.0], [33.1, 5166.0], [33.2, 5166.0], [33.3, 5166.0], [33.4, 5166.0], [33.5, 5166.0], [33.6, 5167.0], [33.7, 5167.0], [33.8, 5167.0], [33.9, 5167.0], [34.0, 5167.0], [34.1, 5167.0], [34.2, 5167.0], [34.3, 5167.0], [34.4, 5167.0], [34.5, 5167.0], [34.6, 5167.0], [34.7, 5168.0], [34.8, 5168.0], [34.9, 5169.0], [35.0, 5169.0], [35.1, 5169.0], [35.2, 5169.0], [35.3, 5169.0], [35.4, 5169.0], [35.5, 5169.0], [35.6, 5169.0], [35.7, 5169.0], [35.8, 5169.0], [35.9, 5169.0], [36.0, 5169.0], [36.1, 5169.0], [36.2, 5169.0], [36.3, 5169.0], [36.4, 5169.0], [36.5, 5169.0], [36.6, 5170.0], [36.7, 5170.0], [36.8, 5170.0], [36.9, 5171.0], [37.0, 5172.0], [37.1, 5177.0], [37.2, 5177.0], [37.3, 5177.0], [37.4, 5181.0], [37.5, 5184.0], [37.6, 5184.0], [37.7, 5185.0], [37.8, 5185.0], [37.9, 5185.0], [38.0, 5186.0], [38.1, 5186.0], [38.2, 5186.0], [38.3, 5203.0], [38.4, 5211.0], [38.5, 5212.0], [38.6, 5212.0], [38.7, 5212.0], [38.8, 5212.0], [38.9, 5212.0], [39.0, 5212.0], [39.1, 5212.0], [39.2, 5213.0], [39.3, 5223.0], [39.4, 5223.0], [39.5, 5233.0], [39.6, 5237.0], [39.7, 5250.0], [39.8, 5250.0], [39.9, 5250.0], [40.0, 5250.0], [40.1, 5250.0], [40.2, 5250.0], [40.3, 5251.0], [40.4, 5251.0], [40.5, 5251.0], [40.6, 5251.0], [40.7, 5251.0], [40.8, 5251.0], [40.9, 5251.0], [41.0, 5251.0], [41.1, 5251.0], [41.2, 5251.0], [41.3, 5251.0], [41.4, 5251.0], [41.5, 5251.0], [41.6, 5253.0], [41.7, 5253.0], [41.8, 5253.0], [41.9, 5256.0], [42.0, 5262.0], [42.1, 5291.0], [42.2, 5321.0], [42.3, 5326.0], [42.4, 5326.0], [42.5, 5326.0], [42.6, 5327.0], [42.7, 5328.0], [42.8, 5328.0], [42.9, 5329.0], [43.0, 5329.0], [43.1, 5340.0], [43.2, 5342.0], [43.3, 5348.0], [43.4, 5368.0], [43.5, 5368.0], [43.6, 5368.0], [43.7, 5368.0], [43.8, 5368.0], [43.9, 5368.0], [44.0, 5368.0], [44.1, 5368.0], [44.2, 5368.0], [44.3, 5368.0], [44.4, 5369.0], [44.5, 5378.0], [44.6, 5438.0], [44.7, 5468.0], [44.8, 5470.0], [44.9, 5492.0], [45.0, 5497.0], [45.1, 5519.0], [45.2, 5519.0], [45.3, 5527.0], [45.4, 5551.0], [45.5, 5558.0], [45.6, 5567.0], [45.7, 5583.0], [45.8, 5583.0], [45.9, 5583.0], [46.0, 5584.0], [46.1, 5584.0], [46.2, 5584.0], [46.3, 5584.0], [46.4, 5584.0], [46.5, 5586.0], [46.6, 5586.0], [46.7, 5586.0], [46.8, 5586.0], [46.9, 5586.0], [47.0, 5587.0], [47.1, 5587.0], [47.2, 5587.0], [47.3, 5587.0], [47.4, 5597.0], [47.5, 5597.0], [47.6, 5597.0], [47.7, 5597.0], [47.8, 5597.0], [47.9, 5597.0], [48.0, 5598.0], [48.1, 5601.0], [48.2, 5601.0], [48.3, 5602.0], [48.4, 5617.0], [48.5, 5619.0], [48.6, 5630.0], [48.7, 5635.0], [48.8, 5638.0], [48.9, 5639.0], [49.0, 5643.0], [49.1, 5643.0], [49.2, 5644.0], [49.3, 5649.0], [49.4, 5650.0], [49.5, 5651.0], [49.6, 5652.0], [49.7, 5652.0], [49.8, 5652.0], [49.9, 5652.0], [50.0, 5652.0], [50.1, 5652.0], [50.2, 5652.0], [50.3, 5653.0], [50.4, 5653.0], [50.5, 5654.0], [50.6, 5654.0], [50.7, 5654.0], [50.8, 5655.0], [50.9, 5655.0], [51.0, 5655.0], [51.1, 5655.0], [51.2, 5656.0], [51.3, 5656.0], [51.4, 5656.0], [51.5, 5656.0], [51.6, 5656.0], [51.7, 5656.0], [51.8, 5656.0], [51.9, 5656.0], [52.0, 5656.0], [52.1, 5656.0], [52.2, 5656.0], [52.3, 5656.0], [52.4, 5656.0], [52.5, 5656.0], [52.6, 5656.0], [52.7, 5657.0], [52.8, 5657.0], [52.9, 5657.0], [53.0, 5657.0], [53.1, 5657.0], [53.2, 5657.0], [53.3, 5657.0], [53.4, 5658.0], [53.5, 5658.0], [53.6, 5658.0], [53.7, 5658.0], [53.8, 5658.0], [53.9, 5658.0], [54.0, 5659.0], [54.1, 5659.0], [54.2, 5659.0], [54.3, 5659.0], [54.4, 5659.0], [54.5, 5674.0], [54.6, 5676.0], [54.7, 5679.0], [54.8, 5680.0], [54.9, 5680.0], [55.0, 5680.0], [55.1, 5680.0], [55.2, 5680.0], [55.3, 5680.0], [55.4, 5680.0], [55.5, 5680.0], [55.6, 5680.0], [55.7, 5683.0], [55.8, 5683.0], [55.9, 5683.0], [56.0, 5683.0], [56.1, 5687.0], [56.2, 5687.0], [56.3, 5687.0], [56.4, 5687.0], [56.5, 5687.0], [56.6, 5687.0], [56.7, 5688.0], [56.8, 5706.0], [56.9, 5706.0], [57.0, 5706.0], [57.1, 5737.0], [57.2, 5740.0], [57.3, 5740.0], [57.4, 5740.0], [57.5, 5740.0], [57.6, 5740.0], [57.7, 5740.0], [57.8, 5740.0], [57.9, 5741.0], [58.0, 5741.0], [58.1, 5741.0], [58.2, 5741.0], [58.3, 5741.0], [58.4, 5741.0], [58.5, 5768.0], [58.6, 5768.0], [58.7, 5768.0], [58.8, 5768.0], [58.9, 5776.0], [59.0, 5776.0], [59.1, 5776.0], [59.2, 5776.0], [59.3, 5776.0], [59.4, 5776.0], [59.5, 5776.0], [59.6, 5776.0], [59.7, 5776.0], [59.8, 5776.0], [59.9, 5776.0], [60.0, 5776.0], [60.1, 5776.0], [60.2, 5777.0], [60.3, 5777.0], [60.4, 5778.0], [60.5, 5778.0], [60.6, 5778.0], [60.7, 5778.0], [60.8, 5778.0], [60.9, 5778.0], [61.0, 5778.0], [61.1, 5778.0], [61.2, 5779.0], [61.3, 5779.0], [61.4, 5779.0], [61.5, 5805.0], [61.6, 5864.0], [61.7, 5864.0], [61.8, 5865.0], [61.9, 5873.0], [62.0, 5874.0], [62.1, 5874.0], [62.2, 5903.0], [62.3, 5957.0], [62.4, 5957.0], [62.5, 5957.0], [62.6, 5957.0], [62.7, 5957.0], [62.8, 5958.0], [62.9, 5958.0], [63.0, 5958.0], [63.1, 5958.0], [63.2, 5958.0], [63.3, 6040.0], [63.4, 6040.0], [63.5, 6041.0], [63.6, 6041.0], [63.7, 6041.0], [63.8, 6042.0], [63.9, 6042.0], [64.0, 6042.0], [64.1, 6043.0], [64.2, 6043.0], [64.3, 6043.0], [64.4, 6068.0], [64.5, 6068.0], [64.6, 6068.0], [64.7, 6068.0], [64.8, 6146.0], [64.9, 6146.0], [65.0, 6146.0], [65.1, 6170.0], [65.2, 6170.0], [65.3, 6171.0], [65.4, 6171.0], [65.5, 6171.0], [65.6, 6171.0], [65.7, 6171.0], [65.8, 6171.0], [65.9, 6171.0], [66.0, 6172.0], [66.1, 6172.0], [66.2, 6236.0], [66.3, 6353.0], [66.4, 6353.0], [66.5, 6380.0], [66.6, 6380.0], [66.7, 6380.0], [66.8, 6395.0], [66.9, 6411.0], [67.0, 6412.0], [67.1, 6412.0], [67.2, 6413.0], [67.3, 6413.0], [67.4, 6413.0], [67.5, 6413.0], [67.6, 6414.0], [67.7, 6438.0], [67.8, 6439.0], [67.9, 6439.0], [68.0, 6439.0], [68.1, 6439.0], [68.2, 6448.0], [68.3, 6448.0], [68.4, 6448.0], [68.5, 6449.0], [68.6, 6449.0], [68.7, 6449.0], [68.8, 6486.0], [68.9, 6486.0], [69.0, 6487.0], [69.1, 6487.0], [69.2, 6487.0], [69.3, 6487.0], [69.4, 6487.0], [69.5, 6488.0], [69.6, 6488.0], [69.7, 6489.0], [69.8, 6489.0], [69.9, 6489.0], [70.0, 6489.0], [70.1, 6489.0], [70.2, 6489.0], [70.3, 6490.0], [70.4, 6490.0], [70.5, 6494.0], [70.6, 6495.0], [70.7, 6497.0], [70.8, 6527.0], [70.9, 6527.0], [71.0, 6551.0], [71.1, 6574.0], [71.2, 6574.0], [71.3, 6575.0], [71.4, 6575.0], [71.5, 6575.0], [71.6, 6575.0], [71.7, 6575.0], [71.8, 6576.0], [71.9, 6576.0], [72.0, 6576.0], [72.1, 6576.0], [72.2, 6576.0], [72.3, 6576.0], [72.4, 6576.0], [72.5, 6577.0], [72.6, 6577.0], [72.7, 6577.0], [72.8, 6577.0], [72.9, 6577.0], [73.0, 6577.0], [73.1, 6578.0], [73.2, 6578.0], [73.3, 6578.0], [73.4, 6578.0], [73.5, 6578.0], [73.6, 6578.0], [73.7, 6578.0], [73.8, 6579.0], [73.9, 6579.0], [74.0, 6664.0], [74.1, 6665.0], [74.2, 6665.0], [74.3, 6665.0], [74.4, 6665.0], [74.5, 6665.0], [74.6, 6665.0], [74.7, 6665.0], [74.8, 6665.0], [74.9, 6665.0], [75.0, 6700.0], [75.1, 6719.0], [75.2, 6767.0], [75.3, 6807.0], [75.4, 6810.0], [75.5, 6810.0], [75.6, 6813.0], [75.7, 6813.0], [75.8, 6821.0], [75.9, 6822.0], [76.0, 6850.0], [76.1, 6850.0], [76.2, 6851.0], [76.3, 6915.0], [76.4, 6915.0], [76.5, 6919.0], [76.6, 6919.0], [76.7, 6919.0], [76.8, 6920.0], [76.9, 6920.0], [77.0, 6921.0], [77.1, 6936.0], [77.2, 6937.0], [77.3, 6937.0], [77.4, 6937.0], [77.5, 6937.0], [77.6, 6937.0], [77.7, 6937.0], [77.8, 6937.0], [77.9, 6992.0], [78.0, 6992.0], [78.1, 7027.0], [78.2, 7027.0], [78.3, 7033.0], [78.4, 7033.0], [78.5, 7042.0], [78.6, 7042.0], [78.7, 7042.0], [78.8, 7042.0], [78.9, 7042.0], [79.0, 7042.0], [79.1, 7042.0], [79.2, 7042.0], [79.3, 7042.0], [79.4, 7042.0], [79.5, 7042.0], [79.6, 7042.0], [79.7, 7042.0], [79.8, 7051.0], [79.9, 7051.0], [80.0, 7100.0], [80.1, 7129.0], [80.2, 7170.0], [80.3, 7170.0], [80.4, 7197.0], [80.5, 7197.0], [80.6, 7197.0], [80.7, 7197.0], [80.8, 7198.0], [80.9, 7198.0], [81.0, 7198.0], [81.1, 7198.0], [81.2, 7198.0], [81.3, 7198.0], [81.4, 7199.0], [81.5, 7199.0], [81.6, 7199.0], [81.7, 7200.0], [81.8, 7253.0], [81.9, 7253.0], [82.0, 7267.0], [82.1, 7471.0], [82.2, 7549.0], [82.3, 7550.0], [82.4, 7551.0], [82.5, 7691.0], [82.6, 7692.0], [82.7, 7692.0], [82.8, 7692.0], [82.9, 7699.0], [83.0, 7700.0], [83.1, 7700.0], [83.2, 7700.0], [83.3, 7704.0], [83.4, 7704.0], [83.5, 7704.0], [83.6, 7704.0], [83.7, 7704.0], [83.8, 7704.0], [83.9, 7705.0], [84.0, 7705.0], [84.1, 7705.0], [84.2, 7709.0], [84.3, 7739.0], [84.4, 7765.0], [84.5, 7770.0], [84.6, 7777.0], [84.7, 7777.0], [84.8, 7777.0], [84.9, 7777.0], [85.0, 7777.0], [85.1, 7777.0], [85.2, 7778.0], [85.3, 7778.0], [85.4, 7778.0], [85.5, 7778.0], [85.6, 7778.0], [85.7, 7778.0], [85.8, 7779.0], [85.9, 7780.0], [86.0, 7780.0], [86.1, 7781.0], [86.2, 7781.0], [86.3, 7782.0], [86.4, 7800.0], [86.5, 7821.0], [86.6, 7821.0], [86.7, 7821.0], [86.8, 7821.0], [86.9, 7821.0], [87.0, 7821.0], [87.1, 7823.0], [87.2, 7823.0], [87.3, 7824.0], [87.4, 7838.0], [87.5, 7838.0], [87.6, 7839.0], [87.7, 7901.0], [87.8, 7906.0], [87.9, 7906.0], [88.0, 7907.0], [88.1, 7907.0], [88.2, 7996.0], [88.3, 7997.0], [88.4, 7997.0], [88.5, 7997.0], [88.6, 7997.0], [88.7, 7997.0], [88.8, 7997.0], [88.9, 7997.0], [89.0, 7997.0], [89.1, 7998.0], [89.2, 7998.0], [89.3, 7998.0], [89.4, 7998.0], [89.5, 8133.0], [89.6, 8376.0], [89.7, 8470.0], [89.8, 8470.0], [89.9, 8511.0], [90.0, 8511.0], [90.1, 8512.0], [90.2, 8513.0], [90.3, 8513.0], [90.4, 8513.0], [90.5, 8513.0], [90.6, 8513.0], [90.7, 8513.0], [90.8, 8514.0], [90.9, 8514.0], [91.0, 8514.0], [91.1, 8514.0], [91.2, 8514.0], [91.3, 8514.0], [91.4, 8514.0], [91.5, 8515.0], [91.6, 8603.0], [91.7, 8664.0], [91.8, 8693.0], [91.9, 8706.0], [92.0, 8706.0], [92.1, 8706.0], [92.2, 8707.0], [92.3, 8707.0], [92.4, 8707.0], [92.5, 8707.0], [92.6, 8719.0], [92.7, 8720.0], [92.8, 8722.0], [92.9, 8812.0], [93.0, 8812.0], [93.1, 8813.0], [93.2, 8907.0], [93.3, 8907.0], [93.4, 8908.0], [93.5, 8921.0], [93.6, 8938.0], [93.7, 8938.0], [93.8, 8938.0], [93.9, 8938.0], [94.0, 8938.0], [94.1, 8938.0], [94.2, 8939.0], [94.3, 8939.0], [94.4, 8939.0], [94.5, 8966.0], [94.6, 8967.0], [94.7, 8967.0], [94.8, 8967.0], [94.9, 8968.0], [95.0, 8968.0], [95.1, 8968.0], [95.2, 8968.0], [95.3, 8981.0], [95.4, 9004.0], [95.5, 9095.0], [95.6, 9095.0], [95.7, 9096.0], [95.8, 9096.0], [95.9, 9096.0], [96.0, 9096.0], [96.1, 9096.0], [96.2, 9096.0], [96.3, 9097.0], [96.4, 9097.0], [96.5, 9097.0], [96.6, 9098.0], [96.7, 9099.0], [96.8, 9667.0], [96.9, 9667.0], [97.0, 9745.0], [97.1, 9745.0], [97.2, 9745.0], [97.3, 9745.0], [97.4, 9745.0], [97.5, 9745.0], [97.6, 9745.0], [97.7, 9746.0], [97.8, 9747.0], [97.9, 9747.0], [98.0, 9748.0], [98.1, 9748.0], [98.2, 9748.0], [98.3, 10001.0], [98.4, 10003.0], [98.5, 10003.0], [98.6, 10007.0], [98.7, 10010.0], [98.8, 10010.0], [98.9, 10010.0], [99.0, 10010.0], [99.1, 10010.0], [99.2, 10010.0], [99.3, 10011.0], [99.4, 10011.0], [99.5, 10011.0], [99.6, 10011.0], [99.7, 10011.0], [99.8, 10011.0], [99.9, 10011.0], [100.0, 10011.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 800.0, "maxY": 115.0, "series": [{"data": [[800.0, 1.0], [900.0, 8.0], [1000.0, 13.0], [1100.0, 9.0], [1200.0, 8.0], [1300.0, 7.0], [1400.0, 6.0], [1500.0, 9.0], [1600.0, 4.0], [1700.0, 5.0], [1800.0, 13.0], [1900.0, 9.0], [2000.0, 5.0], [2100.0, 3.0], [2200.0, 4.0], [2300.0, 3.0], [2400.0, 26.0], [2500.0, 6.0], [2600.0, 4.0], [2800.0, 3.0], [2700.0, 4.0], [2900.0, 3.0], [3000.0, 4.0], [3100.0, 5.0], [3200.0, 3.0], [3300.0, 1.0], [3700.0, 6.0], [3800.0, 9.0], [3900.0, 15.0], [4000.0, 34.0], [4300.0, 20.0], [4200.0, 13.0], [4100.0, 21.0], [4400.0, 20.0], [4500.0, 15.0], [4600.0, 28.0], [4800.0, 30.0], [4700.0, 10.0], [5100.0, 74.0], [5000.0, 20.0], [4900.0, 25.0], [5300.0, 32.0], [5200.0, 51.0], [5600.0, 115.0], [5500.0, 40.0], [5400.0, 7.0], [5700.0, 62.0], [5800.0, 9.0], [6000.0, 20.0], [6100.0, 18.0], [5900.0, 15.0], [6300.0, 8.0], [6200.0, 1.0], [6600.0, 14.0], [6400.0, 52.0], [6500.0, 42.0], [6700.0, 4.0], [6900.0, 23.0], [6800.0, 13.0], [7100.0, 22.0], [7000.0, 26.0], [7400.0, 1.0], [7200.0, 6.0], [7600.0, 6.0], [7500.0, 4.0], [7800.0, 16.0], [7700.0, 46.0], [7900.0, 25.0], [8100.0, 1.0], [8600.0, 4.0], [8700.0, 13.0], [8400.0, 3.0], [8500.0, 22.0], [8300.0, 1.0], [8900.0, 29.0], [9000.0, 18.0], [8800.0, 5.0], [9700.0, 17.0], [9600.0, 3.0], [10000.0, 23.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 52.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1104.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 52.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1104.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 167.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 134.85022026431722, "minX": 1.78000002E12, "maxY": 156.80474452554748, "series": [{"data": [[1.78000008E12, 156.80474452554748], [1.78000002E12, 134.85022026431722]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78000008E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 887.0, "minX": 3.0, "maxY": 8274.4, "series": [{"data": [[3.0, 4716.0], [5.0, 4667.0], [8.0, 4649.333333333333], [13.0, 4664.0], [18.0, 4567.0], [20.0, 7114.5], [41.0, 7038.9047619047615], [42.0, 1119.5], [43.0, 2889.4], [48.0, 1081.6666666666667], [49.0, 1025.0], [51.0, 934.0], [54.0, 959.0], [56.0, 887.0], [59.0, 5602.0], [58.0, 5685.133333333333], [63.0, 2603.333333333333], [64.0, 1037.0], [68.0, 5598.0], [79.0, 5657.0], [76.0, 5657.0], [91.0, 5659.0], [90.0, 5597.0], [92.0, 1673.3902439024387], [93.0, 4560.25], [95.0, 5626.5], [94.0, 5639.0], [99.0, 5656.0], [98.0, 5618.6], [97.0, 5626.5], [96.0, 5601.0], [101.0, 5639.0], [104.0, 5646.5], [109.0, 5657.0], [114.0, 5741.0], [119.0, 5655.0], [118.0, 5656.0], [117.0, 5715.0], [122.0, 4374.0], [123.0, 1971.7368421052631], [120.0, 5655.0], [125.0, 5656.0], [124.0, 7823.0], [128.0, 5656.0], [143.0, 5651.0], [151.0, 5653.0], [158.0, 6736.5], [156.0, 5652.8], [153.0, 5652.0], [167.0, 8274.4], [163.0, 6735.5], [161.0, 5652.0], [160.0, 5653.333333333333], [168.0, 5896.313615023472]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[153.0377928949355, 5616.902494331069]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 168.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 605.3333333333334, "minX": 1.78000002E12, "maxY": 5162.8, "series": [{"data": [[1.78000008E12, 5162.8], [1.78000002E12, 873.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78000008E12, 2861.3333333333335], [1.78000002E12, 605.3333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78000008E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 2637.074889867842, "minX": 1.78000002E12, "maxY": 6234.074817518253, "series": [{"data": [[1.78000008E12, 6234.074817518253], [1.78000002E12, 2637.074889867842]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78000008E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 2637.022026431717, "minX": 1.78000002E12, "maxY": 6024.000912408761, "series": [{"data": [[1.78000008E12, 6024.000912408761], [1.78000002E12, 2637.022026431717]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78000008E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0684306569343065, "minX": 1.78000002E12, "maxY": 0.8325991189427314, "series": [{"data": [[1.78000008E12, 0.0684306569343065], [1.78000002E12, 0.8325991189427314]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78000008E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 872.0, "minX": 1.78000002E12, "maxY": 9748.0, "series": [{"data": [[1.78000008E12, 9748.0], [1.78000002E12, 4603.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78000008E12, 1881.0], [1.78000002E12, 872.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78000008E12, 8514.0], [1.78000002E12, 4284.400000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78000008E12, 9745.0], [1.78000002E12, 4564.6]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78000008E12, 5777.0], [1.78000002E12, 2455.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78000008E12, 8967.0], [1.78000002E12, 4436.6]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78000008E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 989.5, "minX": 1.0, "maxY": 10010.5, "series": [{"data": [[35.0, 7996.0], [40.0, 1482.0], [45.0, 7550.0], [48.0, 7777.0], [53.0, 6448.0], [61.0, 4656.0], [65.0, 2522.0], [64.0, 4843.0], [70.0, 4144.5], [74.0, 5251.0], [83.0, 6171.0], [102.0, 6579.0], [111.0, 5777.0], [127.0, 5167.5], [126.0, 5657.0], [10.0, 989.5], [12.0, 5050.0], [13.0, 4664.0], [1.0, 7095.0], [18.0, 6937.0], [20.0, 1080.5], [21.0, 1985.0], [22.0, 7051.0], [28.0, 5958.0], [31.0, 4416.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[83.0, 5657.0], [12.0, 10010.5], [102.0, 6489.0], [53.0, 10010.0], [111.0, 5584.0], [127.0, 4024.0], [126.0, 5679.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 127.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 7996.0, "series": [{"data": [[35.0, 7996.0], [40.0, 1482.0], [45.0, 7550.0], [48.0, 7777.0], [53.0, 6448.0], [61.0, 4656.0], [65.0, 2522.0], [64.0, 4843.0], [70.0, 4144.5], [74.0, 5251.0], [83.0, 6171.0], [102.0, 6579.0], [111.0, 5777.0], [127.0, 5167.5], [126.0, 5657.0], [10.0, 989.5], [12.0, 5050.0], [13.0, 4664.0], [1.0, 7095.0], [18.0, 6937.0], [20.0, 1080.5], [21.0, 1985.0], [22.0, 7051.0], [28.0, 5958.0], [31.0, 4416.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[83.0, 5657.0], [12.0, 0.0], [102.0, 6489.0], [53.0, 0.0], [111.0, 5584.0], [127.0, 4024.0], [126.0, 5679.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 127.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 6.583333333333333, "minX": 1.78000002E12, "maxY": 15.466666666666667, "series": [{"data": [[1.78000008E12, 15.466666666666667], [1.78000002E12, 6.583333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78000008E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.38333333333333336, "minX": 1.78000002E12, "maxY": 15.483333333333333, "series": [{"data": [[1.78000008E12, 15.483333333333333], [1.78000002E12, 3.783333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.78000008E12, 0.38333333333333336]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketTimeoutException", "isController": false}, {"data": [[1.78000008E12, 2.4]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78000008E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 2.783333333333333, "minX": 1.78000002E12, "maxY": 15.483333333333333, "series": [{"data": [[1.78000008E12, 15.483333333333333], [1.78000002E12, 3.783333333333333]], "isOverall": false, "label": "GET STLoad-success", "isController": false}, {"data": [[1.78000008E12, 2.783333333333333]], "isOverall": false, "label": "GET STLoad-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78000008E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.783333333333333, "minX": 1.78000002E12, "maxY": 15.483333333333333, "series": [{"data": [[1.78000008E12, 15.483333333333333], [1.78000002E12, 3.783333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78000008E12, 2.783333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78000008E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

