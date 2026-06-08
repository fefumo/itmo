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
        data: {"result": {"minY": 818.0, "minX": 0.0, "maxY": 9833.0, "series": [{"data": [[0.0, 818.0], [0.1, 819.0], [0.2, 827.0], [0.3, 901.0], [0.4, 904.0], [0.5, 906.0], [0.6, 908.0], [0.7, 925.0], [0.8, 930.0], [0.9, 930.0], [1.0, 936.0], [1.1, 941.0], [1.2, 950.0], [1.3, 960.0], [1.4, 963.0], [1.5, 965.0], [1.6, 976.0], [1.7, 979.0], [1.8, 982.0], [1.9, 995.0], [2.0, 999.0], [2.1, 1012.0], [2.2, 1018.0], [2.3, 1035.0], [2.4, 1037.0], [2.5, 1040.0], [2.6, 1046.0], [2.7, 1047.0], [2.8, 1059.0], [2.9, 1068.0], [3.0, 1070.0], [3.1, 1075.0], [3.2, 1082.0], [3.3, 1082.0], [3.4, 1091.0], [3.5, 1091.0], [3.6, 1092.0], [3.7, 1092.0], [3.8, 1096.0], [3.9, 1104.0], [4.0, 1106.0], [4.1, 1117.0], [4.2, 1124.0], [4.3, 1125.0], [4.4, 1144.0], [4.5, 1144.0], [4.6, 1152.0], [4.7, 1158.0], [4.8, 1168.0], [4.9, 1172.0], [5.0, 1187.0], [5.1, 1188.0], [5.2, 1193.0], [5.3, 1213.0], [5.4, 1215.0], [5.5, 1216.0], [5.6, 1228.0], [5.7, 1234.0], [5.8, 1239.0], [5.9, 1247.0], [6.0, 1250.0], [6.1, 1260.0], [6.2, 1268.0], [6.3, 1277.0], [6.4, 1294.0], [6.5, 1302.0], [6.6, 1307.0], [6.7, 1310.0], [6.8, 1323.0], [6.9, 1330.0], [7.0, 1334.0], [7.1, 1345.0], [7.2, 1346.0], [7.3, 1365.0], [7.4, 1378.0], [7.5, 1378.0], [7.6, 1379.0], [7.7, 1399.0], [7.8, 1400.0], [7.9, 1416.0], [8.0, 1435.0], [8.1, 1451.0], [8.2, 1459.0], [8.3, 1470.0], [8.4, 1471.0], [8.5, 1486.0], [8.6, 1506.0], [8.7, 1521.0], [8.8, 1528.0], [8.9, 1544.0], [9.0, 1553.0], [9.1, 1555.0], [9.2, 1562.0], [9.3, 1590.0], [9.4, 1598.0], [9.5, 1610.0], [9.6, 1645.0], [9.7, 1664.0], [9.8, 1664.0], [9.9, 1667.0], [10.0, 1680.0], [10.1, 1703.0], [10.2, 1773.0], [10.3, 1808.0], [10.4, 1860.0], [10.5, 1888.0], [10.6, 1892.0], [10.7, 1913.0], [10.8, 1949.0], [10.9, 1976.0], [11.0, 1979.0], [11.1, 1994.0], [11.2, 1994.0], [11.3, 1994.0], [11.4, 1994.0], [11.5, 1994.0], [11.6, 1994.0], [11.7, 1994.0], [11.8, 1994.0], [11.9, 1994.0], [12.0, 1994.0], [12.1, 1994.0], [12.2, 1995.0], [12.3, 1995.0], [12.4, 1995.0], [12.5, 1995.0], [12.6, 1996.0], [12.7, 2009.0], [12.8, 2014.0], [12.9, 2048.0], [13.0, 2079.0], [13.1, 2087.0], [13.2, 2087.0], [13.3, 2099.0], [13.4, 2113.0], [13.5, 2121.0], [13.6, 2147.0], [13.7, 2158.0], [13.8, 2159.0], [13.9, 2195.0], [14.0, 2217.0], [14.1, 2254.0], [14.2, 2316.0], [14.3, 2382.0], [14.4, 2387.0], [14.5, 2406.0], [14.6, 2422.0], [14.7, 2437.0], [14.8, 2440.0], [14.9, 2456.0], [15.0, 2471.0], [15.1, 2475.0], [15.2, 2492.0], [15.3, 2500.0], [15.4, 2528.0], [15.5, 2535.0], [15.6, 2552.0], [15.7, 2571.0], [15.8, 2586.0], [15.9, 2596.0], [16.0, 2656.0], [16.1, 2692.0], [16.2, 2701.0], [16.3, 2701.0], [16.4, 2701.0], [16.5, 2701.0], [16.6, 2701.0], [16.7, 2701.0], [16.8, 2702.0], [16.9, 2760.0], [17.0, 2778.0], [17.1, 2796.0], [17.2, 2801.0], [17.3, 2801.0], [17.4, 2813.0], [17.5, 2866.0], [17.6, 2900.0], [17.7, 2921.0], [17.8, 2952.0], [17.9, 2952.0], [18.0, 2952.0], [18.1, 2952.0], [18.2, 2952.0], [18.3, 2952.0], [18.4, 2952.0], [18.5, 2952.0], [18.6, 2952.0], [18.7, 2952.0], [18.8, 2952.0], [18.9, 2952.0], [19.0, 2952.0], [19.1, 2952.0], [19.2, 2952.0], [19.3, 2952.0], [19.4, 2952.0], [19.5, 2952.0], [19.6, 2952.0], [19.7, 2953.0], [19.8, 2953.0], [19.9, 2953.0], [20.0, 2953.0], [20.1, 2953.0], [20.2, 2953.0], [20.3, 2953.0], [20.4, 2953.0], [20.5, 2957.0], [20.6, 2993.0], [20.7, 3004.0], [20.8, 3026.0], [20.9, 3041.0], [21.0, 3048.0], [21.1, 3048.0], [21.2, 3048.0], [21.3, 3048.0], [21.4, 3061.0], [21.5, 3075.0], [21.6, 3084.0], [21.7, 3094.0], [21.8, 3110.0], [21.9, 3130.0], [22.0, 3145.0], [22.1, 3200.0], [22.2, 3213.0], [22.3, 3251.0], [22.4, 3318.0], [22.5, 3422.0], [22.6, 3425.0], [22.7, 3500.0], [22.8, 3502.0], [22.9, 3509.0], [23.0, 3515.0], [23.1, 3515.0], [23.2, 3515.0], [23.3, 3516.0], [23.4, 3516.0], [23.5, 3516.0], [23.6, 3516.0], [23.7, 3516.0], [23.8, 3516.0], [23.9, 3516.0], [24.0, 3518.0], [24.1, 3519.0], [24.2, 3519.0], [24.3, 3519.0], [24.4, 3529.0], [24.5, 3539.0], [24.6, 3571.0], [24.7, 3571.0], [24.8, 3571.0], [24.9, 3571.0], [25.0, 3571.0], [25.1, 3571.0], [25.2, 3571.0], [25.3, 3591.0], [25.4, 3592.0], [25.5, 3595.0], [25.6, 3610.0], [25.7, 3611.0], [25.8, 3612.0], [25.9, 3612.0], [26.0, 3612.0], [26.1, 3613.0], [26.2, 3613.0], [26.3, 3614.0], [26.4, 3614.0], [26.5, 3614.0], [26.6, 3615.0], [26.7, 3616.0], [26.8, 3616.0], [26.9, 3626.0], [27.0, 3650.0], [27.1, 3665.0], [27.2, 3666.0], [27.3, 3674.0], [27.4, 3677.0], [27.5, 3677.0], [27.6, 3677.0], [27.7, 3714.0], [27.8, 3719.0], [27.9, 3748.0], [28.0, 3783.0], [28.1, 3787.0], [28.2, 3787.0], [28.3, 3788.0], [28.4, 3811.0], [28.5, 3811.0], [28.6, 3811.0], [28.7, 3811.0], [28.8, 3811.0], [28.9, 3811.0], [29.0, 3819.0], [29.1, 3823.0], [29.2, 3860.0], [29.3, 3871.0], [29.4, 3871.0], [29.5, 3872.0], [29.6, 3872.0], [29.7, 3872.0], [29.8, 3872.0], [29.9, 3872.0], [30.0, 3872.0], [30.1, 3872.0], [30.2, 3872.0], [30.3, 3872.0], [30.4, 3872.0], [30.5, 3872.0], [30.6, 3872.0], [30.7, 3873.0], [30.8, 3873.0], [30.9, 3889.0], [31.0, 3908.0], [31.1, 3908.0], [31.2, 3908.0], [31.3, 3910.0], [31.4, 3910.0], [31.5, 3910.0], [31.6, 3913.0], [31.7, 3913.0], [31.8, 3913.0], [31.9, 3913.0], [32.0, 3913.0], [32.1, 3913.0], [32.2, 3914.0], [32.3, 3914.0], [32.4, 3914.0], [32.5, 3914.0], [32.6, 3914.0], [32.7, 3914.0], [32.8, 3924.0], [32.9, 3950.0], [33.0, 3950.0], [33.1, 3950.0], [33.2, 3950.0], [33.3, 3950.0], [33.4, 3950.0], [33.5, 3958.0], [33.6, 3958.0], [33.7, 3958.0], [33.8, 3958.0], [33.9, 3958.0], [34.0, 3958.0], [34.1, 3983.0], [34.2, 3989.0], [34.3, 3994.0], [34.4, 4011.0], [34.5, 4011.0], [34.6, 4011.0], [34.7, 4011.0], [34.8, 4011.0], [34.9, 4011.0], [35.0, 4012.0], [35.1, 4012.0], [35.2, 4012.0], [35.3, 4029.0], [35.4, 4063.0], [35.5, 4099.0], [35.6, 4166.0], [35.7, 4167.0], [35.8, 4167.0], [35.9, 4173.0], [36.0, 4181.0], [36.1, 4193.0], [36.2, 4204.0], [36.3, 4209.0], [36.4, 4209.0], [36.5, 4209.0], [36.6, 4209.0], [36.7, 4209.0], [36.8, 4209.0], [36.9, 4209.0], [37.0, 4209.0], [37.1, 4237.0], [37.2, 4249.0], [37.3, 4260.0], [37.4, 4260.0], [37.5, 4260.0], [37.6, 4260.0], [37.7, 4270.0], [37.8, 4275.0], [37.9, 4275.0], [38.0, 4275.0], [38.1, 4276.0], [38.2, 4278.0], [38.3, 4279.0], [38.4, 4283.0], [38.5, 4293.0], [38.6, 4293.0], [38.7, 4293.0], [38.8, 4295.0], [38.9, 4296.0], [39.0, 4296.0], [39.1, 4296.0], [39.2, 4296.0], [39.3, 4296.0], [39.4, 4296.0], [39.5, 4300.0], [39.6, 4301.0], [39.7, 4301.0], [39.8, 4301.0], [39.9, 4301.0], [40.0, 4301.0], [40.1, 4302.0], [40.2, 4302.0], [40.3, 4302.0], [40.4, 4304.0], [40.5, 4305.0], [40.6, 4305.0], [40.7, 4306.0], [40.8, 4307.0], [40.9, 4307.0], [41.0, 4308.0], [41.1, 4315.0], [41.2, 4318.0], [41.3, 4321.0], [41.4, 4321.0], [41.5, 4321.0], [41.6, 4321.0], [41.7, 4321.0], [41.8, 4321.0], [41.9, 4321.0], [42.0, 4324.0], [42.1, 4334.0], [42.2, 4335.0], [42.3, 4335.0], [42.4, 4336.0], [42.5, 4336.0], [42.6, 4336.0], [42.7, 4336.0], [42.8, 4339.0], [42.9, 4339.0], [43.0, 4344.0], [43.1, 4345.0], [43.2, 4345.0], [43.3, 4345.0], [43.4, 4345.0], [43.5, 4345.0], [43.6, 4345.0], [43.7, 4345.0], [43.8, 4345.0], [43.9, 4345.0], [44.0, 4345.0], [44.1, 4345.0], [44.2, 4346.0], [44.3, 4346.0], [44.4, 4346.0], [44.5, 4346.0], [44.6, 4347.0], [44.7, 4347.0], [44.8, 4347.0], [44.9, 4347.0], [45.0, 4347.0], [45.1, 4347.0], [45.2, 4347.0], [45.3, 4349.0], [45.4, 4352.0], [45.5, 4352.0], [45.6, 4352.0], [45.7, 4352.0], [45.8, 4352.0], [45.9, 4353.0], [46.0, 4353.0], [46.1, 4353.0], [46.2, 4353.0], [46.3, 4353.0], [46.4, 4354.0], [46.5, 4354.0], [46.6, 4354.0], [46.7, 4354.0], [46.8, 4354.0], [46.9, 4377.0], [47.0, 4382.0], [47.1, 4382.0], [47.2, 4382.0], [47.3, 4382.0], [47.4, 4383.0], [47.5, 4383.0], [47.6, 4383.0], [47.7, 4383.0], [47.8, 4383.0], [47.9, 4391.0], [48.0, 4391.0], [48.1, 4392.0], [48.2, 4394.0], [48.3, 4394.0], [48.4, 4394.0], [48.5, 4399.0], [48.6, 4400.0], [48.7, 4400.0], [48.8, 4400.0], [48.9, 4400.0], [49.0, 4400.0], [49.1, 4400.0], [49.2, 4400.0], [49.3, 4411.0], [49.4, 4412.0], [49.5, 4449.0], [49.6, 4471.0], [49.7, 4479.0], [49.8, 4479.0], [49.9, 4479.0], [50.0, 4479.0], [50.1, 4479.0], [50.2, 4479.0], [50.3, 4480.0], [50.4, 4480.0], [50.5, 4480.0], [50.6, 4480.0], [50.7, 4480.0], [50.8, 4480.0], [50.9, 4481.0], [51.0, 4482.0], [51.1, 4482.0], [51.2, 4482.0], [51.3, 4487.0], [51.4, 4487.0], [51.5, 4487.0], [51.6, 4487.0], [51.7, 4487.0], [51.8, 4487.0], [51.9, 4487.0], [52.0, 4487.0], [52.1, 4487.0], [52.2, 4487.0], [52.3, 4487.0], [52.4, 4487.0], [52.5, 4488.0], [52.6, 4488.0], [52.7, 4488.0], [52.8, 4504.0], [52.9, 4504.0], [53.0, 4504.0], [53.1, 4505.0], [53.2, 4505.0], [53.3, 4505.0], [53.4, 4506.0], [53.5, 4506.0], [53.6, 4506.0], [53.7, 4512.0], [53.8, 4541.0], [53.9, 4575.0], [54.0, 4588.0], [54.1, 4649.0], [54.2, 4649.0], [54.3, 4649.0], [54.4, 4649.0], [54.5, 4649.0], [54.6, 4649.0], [54.7, 4649.0], [54.8, 4649.0], [54.9, 4663.0], [55.0, 4673.0], [55.1, 4673.0], [55.2, 4677.0], [55.3, 4677.0], [55.4, 4684.0], [55.5, 4684.0], [55.6, 4685.0], [55.7, 4685.0], [55.8, 4685.0], [55.9, 4685.0], [56.0, 4685.0], [56.1, 4685.0], [56.2, 4685.0], [56.3, 4686.0], [56.4, 4686.0], [56.5, 4686.0], [56.6, 4686.0], [56.7, 4696.0], [56.8, 4761.0], [56.9, 4763.0], [57.0, 4768.0], [57.1, 4768.0], [57.2, 4768.0], [57.3, 4768.0], [57.4, 4768.0], [57.5, 4788.0], [57.6, 4788.0], [57.7, 4788.0], [57.8, 4789.0], [57.9, 4789.0], [58.0, 4789.0], [58.1, 4789.0], [58.2, 4789.0], [58.3, 4790.0], [58.4, 4796.0], [58.5, 4809.0], [58.6, 4809.0], [58.7, 4809.0], [58.8, 4833.0], [58.9, 4868.0], [59.0, 4874.0], [59.1, 4903.0], [59.2, 4909.0], [59.3, 4931.0], [59.4, 4935.0], [59.5, 4935.0], [59.6, 4935.0], [59.7, 4935.0], [59.8, 4935.0], [59.9, 4935.0], [60.0, 4935.0], [60.1, 4937.0], [60.2, 4937.0], [60.3, 4938.0], [60.4, 4939.0], [60.5, 4977.0], [60.6, 4999.0], [60.7, 5010.0], [60.8, 5020.0], [60.9, 5043.0], [61.0, 5061.0], [61.1, 5097.0], [61.2, 5113.0], [61.3, 5134.0], [61.4, 5134.0], [61.5, 5134.0], [61.6, 5134.0], [61.7, 5134.0], [61.8, 5134.0], [61.9, 5134.0], [62.0, 5135.0], [62.1, 5135.0], [62.2, 5135.0], [62.3, 5135.0], [62.4, 5135.0], [62.5, 5135.0], [62.6, 5135.0], [62.7, 5135.0], [62.8, 5135.0], [62.9, 5135.0], [63.0, 5135.0], [63.1, 5135.0], [63.2, 5135.0], [63.3, 5135.0], [63.4, 5135.0], [63.5, 5135.0], [63.6, 5135.0], [63.7, 5135.0], [63.8, 5135.0], [63.9, 5135.0], [64.0, 5135.0], [64.1, 5136.0], [64.2, 5136.0], [64.3, 5136.0], [64.4, 5136.0], [64.5, 5136.0], [64.6, 5136.0], [64.7, 5136.0], [64.8, 5136.0], [64.9, 5137.0], [65.0, 5137.0], [65.1, 5137.0], [65.2, 5137.0], [65.3, 5137.0], [65.4, 5137.0], [65.5, 5137.0], [65.6, 5137.0], [65.7, 5137.0], [65.8, 5137.0], [65.9, 5137.0], [66.0, 5137.0], [66.1, 5138.0], [66.2, 5138.0], [66.3, 5138.0], [66.4, 5138.0], [66.5, 5138.0], [66.6, 5138.0], [66.7, 5138.0], [66.8, 5138.0], [66.9, 5138.0], [67.0, 5138.0], [67.1, 5139.0], [67.2, 5146.0], [67.3, 5146.0], [67.4, 5146.0], [67.5, 5149.0], [67.6, 5183.0], [67.7, 5228.0], [67.8, 5230.0], [67.9, 5231.0], [68.0, 5232.0], [68.1, 5233.0], [68.2, 5233.0], [68.3, 5238.0], [68.4, 5238.0], [68.5, 5238.0], [68.6, 5238.0], [68.7, 5249.0], [68.8, 5249.0], [68.9, 5249.0], [69.0, 5254.0], [69.1, 5255.0], [69.2, 5255.0], [69.3, 5255.0], [69.4, 5255.0], [69.5, 5255.0], [69.6, 5255.0], [69.7, 5255.0], [69.8, 5255.0], [69.9, 5255.0], [70.0, 5255.0], [70.1, 5256.0], [70.2, 5256.0], [70.3, 5256.0], [70.4, 5256.0], [70.5, 5256.0], [70.6, 5259.0], [70.7, 5259.0], [70.8, 5260.0], [70.9, 5281.0], [71.0, 5281.0], [71.1, 5311.0], [71.2, 5311.0], [71.3, 5312.0], [71.4, 5326.0], [71.5, 5327.0], [71.6, 5327.0], [71.7, 5372.0], [71.8, 5373.0], [71.9, 5373.0], [72.0, 5373.0], [72.1, 5373.0], [72.2, 5374.0], [72.3, 5374.0], [72.4, 5374.0], [72.5, 5374.0], [72.6, 5374.0], [72.7, 5374.0], [72.8, 5374.0], [72.9, 5375.0], [73.0, 5376.0], [73.1, 5377.0], [73.2, 5377.0], [73.3, 5377.0], [73.4, 5378.0], [73.5, 5378.0], [73.6, 5428.0], [73.7, 5645.0], [73.8, 5645.0], [73.9, 5646.0], [74.0, 5743.0], [74.1, 5743.0], [74.2, 5743.0], [74.3, 5743.0], [74.4, 5743.0], [74.5, 5743.0], [74.6, 5743.0], [74.7, 5744.0], [74.8, 5744.0], [74.9, 5744.0], [75.0, 5744.0], [75.1, 5744.0], [75.2, 5744.0], [75.3, 5744.0], [75.4, 5744.0], [75.5, 5744.0], [75.6, 5745.0], [75.7, 5746.0], [75.8, 5747.0], [75.9, 5747.0], [76.0, 5946.0], [76.1, 5947.0], [76.2, 5947.0], [76.3, 5947.0], [76.4, 5947.0], [76.5, 5947.0], [76.6, 5947.0], [76.7, 5947.0], [76.8, 6046.0], [76.9, 6063.0], [77.0, 6063.0], [77.1, 6063.0], [77.2, 6063.0], [77.3, 6068.0], [77.4, 6068.0], [77.5, 6068.0], [77.6, 6068.0], [77.7, 6070.0], [77.8, 6152.0], [77.9, 6153.0], [78.0, 6153.0], [78.1, 6153.0], [78.2, 6154.0], [78.3, 6154.0], [78.4, 6154.0], [78.5, 6154.0], [78.6, 6154.0], [78.7, 6155.0], [78.8, 6155.0], [78.9, 6155.0], [79.0, 6155.0], [79.1, 6155.0], [79.2, 6155.0], [79.3, 6155.0], [79.4, 6155.0], [79.5, 6155.0], [79.6, 6155.0], [79.7, 6155.0], [79.8, 6156.0], [79.9, 6156.0], [80.0, 6156.0], [80.1, 6156.0], [80.2, 6156.0], [80.3, 6156.0], [80.4, 6157.0], [80.5, 6157.0], [80.6, 6171.0], [80.7, 6172.0], [80.8, 6172.0], [80.9, 6214.0], [81.0, 6215.0], [81.1, 6215.0], [81.2, 6215.0], [81.3, 6215.0], [81.4, 6216.0], [81.5, 6243.0], [81.6, 6244.0], [81.7, 6244.0], [81.8, 6245.0], [81.9, 6245.0], [82.0, 6246.0], [82.1, 6253.0], [82.2, 6253.0], [82.3, 6253.0], [82.4, 6254.0], [82.5, 6254.0], [82.6, 6254.0], [82.7, 6254.0], [82.8, 6254.0], [82.9, 6255.0], [83.0, 6255.0], [83.1, 6255.0], [83.2, 6255.0], [83.3, 6255.0], [83.4, 6255.0], [83.5, 6255.0], [83.6, 6255.0], [83.7, 6255.0], [83.8, 6255.0], [83.9, 6256.0], [84.0, 6256.0], [84.1, 6256.0], [84.2, 6256.0], [84.3, 6256.0], [84.4, 6256.0], [84.5, 6256.0], [84.6, 6257.0], [84.7, 6259.0], [84.8, 6347.0], [84.9, 6348.0], [85.0, 6360.0], [85.1, 6360.0], [85.2, 6360.0], [85.3, 6360.0], [85.4, 6360.0], [85.5, 6360.0], [85.6, 6360.0], [85.7, 6360.0], [85.8, 6361.0], [85.9, 6484.0], [86.0, 6487.0], [86.1, 6487.0], [86.2, 6487.0], [86.3, 6488.0], [86.4, 6488.0], [86.5, 6516.0], [86.6, 6516.0], [86.7, 6516.0], [86.8, 6516.0], [86.9, 6576.0], [87.0, 6576.0], [87.1, 6613.0], [87.2, 6617.0], [87.3, 6617.0], [87.4, 7102.0], [87.5, 7712.0], [87.6, 7713.0], [87.7, 7713.0], [87.8, 7720.0], [87.9, 7746.0], [88.0, 7755.0], [88.1, 7780.0], [88.2, 7790.0], [88.3, 7814.0], [88.4, 7817.0], [88.5, 7818.0], [88.6, 7818.0], [88.7, 7818.0], [88.8, 7818.0], [88.9, 7818.0], [89.0, 7818.0], [89.1, 7818.0], [89.2, 7818.0], [89.3, 7819.0], [89.4, 7819.0], [89.5, 7819.0], [89.6, 7820.0], [89.7, 7820.0], [89.8, 7822.0], [89.9, 7842.0], [90.0, 7843.0], [90.1, 7843.0], [90.2, 7844.0], [90.3, 7844.0], [90.4, 7844.0], [90.5, 7845.0], [90.6, 7845.0], [90.7, 7846.0], [90.8, 7846.0], [90.9, 7847.0], [91.0, 7847.0], [91.1, 7847.0], [91.2, 7847.0], [91.3, 7847.0], [91.4, 7847.0], [91.5, 7848.0], [91.6, 7848.0], [91.7, 7848.0], [91.8, 7848.0], [91.9, 7851.0], [92.0, 7860.0], [92.1, 7861.0], [92.2, 7886.0], [92.3, 7920.0], [92.4, 7941.0], [92.5, 7941.0], [92.6, 7942.0], [92.7, 7942.0], [92.8, 7943.0], [92.9, 7943.0], [93.0, 7952.0], [93.1, 7952.0], [93.2, 7952.0], [93.3, 7958.0], [93.4, 7959.0], [93.5, 7959.0], [93.6, 7959.0], [93.7, 7961.0], [93.8, 7962.0], [93.9, 8007.0], [94.0, 8025.0], [94.1, 8037.0], [94.2, 8040.0], [94.3, 8041.0], [94.4, 8060.0], [94.5, 8383.0], [94.6, 8473.0], [94.7, 8473.0], [94.8, 8473.0], [94.9, 8473.0], [95.0, 8473.0], [95.1, 8473.0], [95.2, 8474.0], [95.3, 8474.0], [95.4, 8474.0], [95.5, 8476.0], [95.6, 8489.0], [95.7, 8489.0], [95.8, 8489.0], [95.9, 8489.0], [96.0, 8493.0], [96.1, 8501.0], [96.2, 8501.0], [96.3, 8502.0], [96.4, 8566.0], [96.5, 8566.0], [96.6, 8566.0], [96.7, 8581.0], [96.8, 8581.0], [96.9, 8581.0], [97.0, 8582.0], [97.1, 8630.0], [97.2, 8630.0], [97.3, 8630.0], [97.4, 8630.0], [97.5, 8630.0], [97.6, 8630.0], [97.7, 8630.0], [97.8, 8631.0], [97.9, 8631.0], [98.0, 8631.0], [98.1, 8633.0], [98.2, 9431.0], [98.3, 9431.0], [98.4, 9432.0], [98.5, 9432.0], [98.6, 9432.0], [98.7, 9432.0], [98.8, 9432.0], [98.9, 9434.0], [99.0, 9643.0], [99.1, 9673.0], [99.2, 9677.0], [99.3, 9708.0], [99.4, 9715.0], [99.5, 9742.0], [99.6, 9746.0], [99.7, 9782.0], [99.8, 9798.0], [99.9, 9807.0], [100.0, 9833.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 800.0, "maxY": 121.0, "series": [{"data": [[800.0, 3.0], [900.0, 24.0], [1000.0, 24.0], [1100.0, 18.0], [1200.0, 17.0], [1300.0, 17.0], [1400.0, 11.0], [1500.0, 11.0], [1600.0, 8.0], [1700.0, 3.0], [1800.0, 5.0], [1900.0, 27.0], [2000.0, 9.0], [2100.0, 8.0], [2300.0, 3.0], [2200.0, 3.0], [2400.0, 11.0], [2500.0, 9.0], [2600.0, 3.0], [2800.0, 6.0], [2700.0, 13.0], [2900.0, 41.0], [3000.0, 14.0], [3100.0, 5.0], [3300.0, 1.0], [3200.0, 4.0], [3400.0, 2.0], [3500.0, 39.0], [3700.0, 9.0], [3600.0, 28.0], [3800.0, 34.0], [3900.0, 45.0], [4000.0, 16.0], [4100.0, 8.0], [4200.0, 44.0], [4300.0, 121.0], [4400.0, 56.0], [4500.0, 17.0], [4600.0, 35.0], [4800.0, 8.0], [4700.0, 23.0], [4900.0, 21.0], [5000.0, 7.0], [5100.0, 86.0], [5200.0, 45.0], [5300.0, 33.0], [5600.0, 4.0], [5400.0, 1.0], [5700.0, 27.0], [6100.0, 41.0], [6000.0, 13.0], [5900.0, 11.0], [6200.0, 52.0], [6300.0, 15.0], [6500.0, 8.0], [6400.0, 7.0], [6600.0, 4.0], [7100.0, 2.0], [7900.0, 22.0], [7800.0, 53.0], [7700.0, 10.0], [8000.0, 7.0], [8200.0, 1.0], [8300.0, 1.0], [8400.0, 20.0], [8500.0, 13.0], [8600.0, 14.0], [9700.0, 8.0], [9600.0, 4.0], [9400.0, 11.0], [9800.0, 2.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 17.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1195.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 114.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1195.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 17.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 130.78883861236815, "minX": 1.78000002E12, "maxY": 130.78883861236815, "series": [{"data": [[1.78000002E12, 130.78883861236815]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78000002E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 895.3, "minX": 3.0, "maxY": 8038.333333333333, "series": [{"data": [[33.0, 4790.0], [34.0, 1065.3333333333333], [35.0, 1082.6666666666667], [38.0, 1033.0], [39.0, 963.0], [40.0, 942.5], [42.0, 936.0], [46.0, 960.0], [48.0, 4789.0], [3.0, 3902.0], [50.0, 984.0], [51.0, 4515.434782608695], [52.0, 3983.0], [58.0, 1064.3], [61.0, 895.3], [67.0, 3953.2000000000003], [70.0, 1133.25], [69.0, 3914.0], [72.0, 1120.25], [73.0, 1135.0], [77.0, 1149.857142857143], [83.0, 3913.5], [82.0, 3913.0], [80.0, 3913.0], [87.0, 4435.454545454545], [86.0, 3913.0], [85.0, 3913.0], [88.0, 1253.875], [97.0, 4717.599999999999], [102.0, 1320.9599999999998], [119.0, 1521.625], [117.0, 5096.470588235294], [116.0, 3908.0], [120.0, 1334.0], [121.0, 6254.75], [124.0, 8038.333333333333], [134.0, 7957.299999999999], [140.0, 2158.0], [144.0, 5038.426415094337], [12.0, 3872.6], [23.0, 3931.266666666667], [26.0, 3811.0]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[130.78883861236815, 4628.933634992462]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 144.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3536.0, "minX": 1.78000002E12, "maxY": 5105.666666666667, "series": [{"data": [[1.78000002E12, 5105.666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78000002E12, 3536.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78000002E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4628.933634992462, "minX": 1.78000002E12, "maxY": 4628.933634992462, "series": [{"data": [[1.78000002E12, 4628.933634992462]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78000002E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4628.904977375568, "minX": 1.78000002E12, "maxY": 4628.904977375568, "series": [{"data": [[1.78000002E12, 4628.904977375568]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78000002E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.14328808446455515, "minX": 1.78000002E12, "maxY": 0.14328808446455515, "series": [{"data": [[1.78000002E12, 0.14328808446455515]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78000002E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 818.0, "minX": 1.78000002E12, "maxY": 9833.0, "series": [{"data": [[1.78000002E12, 9833.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78000002E12, 818.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78000002E12, 7844.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78000002E12, 9656.500000000002]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78000002E12, 4411.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78000002E12, 8473.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78000002E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 950.0, "minX": 5.0, "maxY": 7844.0, "series": [{"data": [[33.0, 2014.0], [9.0, 5238.0], [38.0, 1173.5], [39.0, 4209.0], [43.0, 7844.0], [42.0, 5373.0], [44.0, 5546.0], [45.0, 6256.0], [46.0, 4487.0], [12.0, 1058.0], [50.0, 1407.5], [56.0, 3797.5], [57.0, 3823.0], [61.0, 4347.0], [70.0, 4768.0], [72.0, 4383.0], [19.0, 6516.0], [5.0, 5249.0], [22.0, 4324.0], [23.0, 3872.0], [93.0, 5255.0], [28.0, 4649.0], [31.0, 950.0], [125.0, 5138.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[19.0, 6613.0], [125.0, 5137.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 125.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 950.0, "minX": 5.0, "maxY": 7844.0, "series": [{"data": [[33.0, 2014.0], [9.0, 5238.0], [38.0, 1173.5], [39.0, 4209.0], [43.0, 7844.0], [42.0, 5373.0], [44.0, 5546.0], [45.0, 6256.0], [46.0, 4487.0], [12.0, 1056.0], [50.0, 1407.5], [56.0, 3797.5], [57.0, 3823.0], [61.0, 4347.0], [70.0, 4768.0], [72.0, 4383.0], [19.0, 6516.0], [5.0, 5249.0], [22.0, 4324.0], [23.0, 3872.0], [93.0, 5255.0], [28.0, 4649.0], [31.0, 950.0], [125.0, 5138.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[19.0, 6612.0], [125.0, 5137.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 125.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 22.1, "minX": 1.78000002E12, "maxY": 22.1, "series": [{"data": [[1.78000002E12, 22.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78000002E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.2833333333333333, "minX": 1.78000002E12, "maxY": 21.816666666666666, "series": [{"data": [[1.78000002E12, 21.816666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.78000002E12, 0.2833333333333333]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78000002E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.2833333333333333, "minX": 1.78000002E12, "maxY": 21.816666666666666, "series": [{"data": [[1.78000002E12, 21.816666666666666]], "isOverall": false, "label": "GET STLoad-success", "isController": false}, {"data": [[1.78000002E12, 0.2833333333333333]], "isOverall": false, "label": "GET STLoad-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78000002E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.2833333333333333, "minX": 1.78000002E12, "maxY": 21.816666666666666, "series": [{"data": [[1.78000002E12, 21.816666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78000002E12, 0.2833333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78000002E12, "title": "Total Transactions Per Second"}},
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

