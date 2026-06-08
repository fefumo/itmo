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
        data: {"result": {"minY": 757.0, "minX": 0.0, "maxY": 7424.0, "series": [{"data": [[0.0, 757.0], [0.1, 779.0], [0.2, 794.0], [0.3, 794.0], [0.4, 813.0], [0.5, 821.0], [0.6, 858.0], [0.7, 860.0], [0.8, 863.0], [0.9, 863.0], [1.0, 864.0], [1.1, 864.0], [1.2, 868.0], [1.3, 868.0], [1.4, 890.0], [1.5, 890.0], [1.6, 895.0], [1.7, 903.0], [1.8, 904.0], [1.9, 911.0], [2.0, 915.0], [2.1, 917.0], [2.2, 920.0], [2.3, 943.0], [2.4, 943.0], [2.5, 943.0], [2.6, 949.0], [2.7, 965.0], [2.8, 967.0], [2.9, 985.0], [3.0, 988.0], [3.1, 998.0], [3.2, 1001.0], [3.3, 1015.0], [3.4, 1015.0], [3.5, 1021.0], [3.6, 1046.0], [3.7, 1057.0], [3.8, 1068.0], [3.9, 1078.0], [4.0, 1098.0], [4.1, 1105.0], [4.2, 1109.0], [4.3, 1136.0], [4.4, 1136.0], [4.5, 1156.0], [4.6, 1169.0], [4.7, 1182.0], [4.8, 1184.0], [4.9, 1200.0], [5.0, 1200.0], [5.1, 1204.0], [5.2, 1218.0], [5.3, 1227.0], [5.4, 1230.0], [5.5, 1243.0], [5.6, 1261.0], [5.7, 1266.0], [5.8, 1268.0], [5.9, 1274.0], [6.0, 1277.0], [6.1, 1286.0], [6.2, 1288.0], [6.3, 1292.0], [6.4, 1307.0], [6.5, 1312.0], [6.6, 1331.0], [6.7, 1334.0], [6.8, 1335.0], [6.9, 1339.0], [7.0, 1347.0], [7.1, 1353.0], [7.2, 1363.0], [7.3, 1392.0], [7.4, 1398.0], [7.5, 1409.0], [7.6, 1436.0], [7.7, 1437.0], [7.8, 1440.0], [7.9, 1469.0], [8.0, 1481.0], [8.1, 1484.0], [8.2, 1520.0], [8.3, 1527.0], [8.4, 1537.0], [8.5, 1574.0], [8.6, 1584.0], [8.7, 1612.0], [8.8, 1668.0], [8.9, 1676.0], [9.0, 1685.0], [9.1, 1703.0], [9.2, 1721.0], [9.3, 1730.0], [9.4, 1731.0], [9.5, 1742.0], [9.6, 1745.0], [9.7, 1749.0], [9.8, 1753.0], [9.9, 1755.0], [10.0, 1758.0], [10.1, 1768.0], [10.2, 1770.0], [10.3, 1793.0], [10.4, 1795.0], [10.5, 1798.0], [10.6, 1799.0], [10.7, 1800.0], [10.8, 1804.0], [10.9, 1812.0], [11.0, 1814.0], [11.1, 1833.0], [11.2, 1843.0], [11.3, 1844.0], [11.4, 1847.0], [11.5, 1853.0], [11.6, 1858.0], [11.7, 1858.0], [11.8, 1878.0], [11.9, 1884.0], [12.0, 1887.0], [12.1, 1887.0], [12.2, 1889.0], [12.3, 1893.0], [12.4, 1907.0], [12.5, 1923.0], [12.6, 1932.0], [12.7, 1933.0], [12.8, 1935.0], [12.9, 1939.0], [13.0, 1941.0], [13.1, 1945.0], [13.2, 1977.0], [13.3, 1978.0], [13.4, 1979.0], [13.5, 1981.0], [13.6, 1982.0], [13.7, 1985.0], [13.8, 1990.0], [13.9, 2010.0], [14.0, 2016.0], [14.1, 2025.0], [14.2, 2027.0], [14.3, 2028.0], [14.4, 2031.0], [14.5, 2036.0], [14.6, 2047.0], [14.7, 2072.0], [14.8, 2074.0], [14.9, 2076.0], [15.0, 2082.0], [15.1, 2083.0], [15.2, 2096.0], [15.3, 2102.0], [15.4, 2118.0], [15.5, 2118.0], [15.6, 2123.0], [15.7, 2147.0], [15.8, 2163.0], [15.9, 2164.0], [16.0, 2174.0], [16.1, 2181.0], [16.2, 2193.0], [16.3, 2209.0], [16.4, 2209.0], [16.5, 2210.0], [16.6, 2215.0], [16.7, 2255.0], [16.8, 2256.0], [16.9, 2262.0], [17.0, 2307.0], [17.1, 2307.0], [17.2, 2331.0], [17.3, 2348.0], [17.4, 2351.0], [17.5, 2354.0], [17.6, 2375.0], [17.7, 2376.0], [17.8, 2378.0], [17.9, 2383.0], [18.0, 2383.0], [18.1, 2383.0], [18.2, 2383.0], [18.3, 2383.0], [18.4, 2383.0], [18.5, 2383.0], [18.6, 2383.0], [18.7, 2383.0], [18.8, 2383.0], [18.9, 2383.0], [19.0, 2395.0], [19.1, 2399.0], [19.2, 2402.0], [19.3, 2403.0], [19.4, 2403.0], [19.5, 2403.0], [19.6, 2403.0], [19.7, 2403.0], [19.8, 2403.0], [19.9, 2404.0], [20.0, 2404.0], [20.1, 2404.0], [20.2, 2404.0], [20.3, 2404.0], [20.4, 2404.0], [20.5, 2405.0], [20.6, 2411.0], [20.7, 2416.0], [20.8, 2418.0], [20.9, 2458.0], [21.0, 2464.0], [21.1, 2483.0], [21.2, 2487.0], [21.3, 2487.0], [21.4, 2488.0], [21.5, 2510.0], [21.6, 2514.0], [21.7, 2514.0], [21.8, 2515.0], [21.9, 2515.0], [22.0, 2515.0], [22.1, 2515.0], [22.2, 2515.0], [22.3, 2515.0], [22.4, 2515.0], [22.5, 2515.0], [22.6, 2516.0], [22.7, 2516.0], [22.8, 2561.0], [22.9, 2562.0], [23.0, 2563.0], [23.1, 2750.0], [23.2, 2781.0], [23.3, 2786.0], [23.4, 2797.0], [23.5, 2831.0], [23.6, 2831.0], [23.7, 2831.0], [23.8, 2831.0], [23.9, 2831.0], [24.0, 2835.0], [24.1, 2838.0], [24.2, 2859.0], [24.3, 2863.0], [24.4, 2863.0], [24.5, 2877.0], [24.6, 2877.0], [24.7, 2877.0], [24.8, 2877.0], [24.9, 2878.0], [25.0, 2896.0], [25.1, 2896.0], [25.2, 2897.0], [25.3, 2897.0], [25.4, 2918.0], [25.5, 2924.0], [25.6, 2944.0], [25.7, 2944.0], [25.8, 2959.0], [25.9, 2959.0], [26.0, 2959.0], [26.1, 2959.0], [26.2, 2959.0], [26.3, 2959.0], [26.4, 2960.0], [26.5, 2960.0], [26.6, 2969.0], [26.7, 2970.0], [26.8, 2970.0], [26.9, 2970.0], [27.0, 2970.0], [27.1, 2971.0], [27.2, 2971.0], [27.3, 2971.0], [27.4, 2971.0], [27.5, 2971.0], [27.6, 2971.0], [27.7, 2971.0], [27.8, 2971.0], [27.9, 2971.0], [28.0, 2971.0], [28.1, 2971.0], [28.2, 2971.0], [28.3, 2974.0], [28.4, 2974.0], [28.5, 2975.0], [28.6, 2975.0], [28.7, 2981.0], [28.8, 2982.0], [28.9, 2982.0], [29.0, 2983.0], [29.1, 2983.0], [29.2, 2983.0], [29.3, 2983.0], [29.4, 2984.0], [29.5, 2984.0], [29.6, 2984.0], [29.7, 2984.0], [29.8, 2984.0], [29.9, 2984.0], [30.0, 2984.0], [30.1, 2986.0], [30.2, 2986.0], [30.3, 2986.0], [30.4, 2986.0], [30.5, 2987.0], [30.6, 2987.0], [30.7, 2987.0], [30.8, 2987.0], [30.9, 2988.0], [31.0, 2988.0], [31.1, 2988.0], [31.2, 2988.0], [31.3, 2988.0], [31.4, 2993.0], [31.5, 3014.0], [31.6, 3020.0], [31.7, 3037.0], [31.8, 3050.0], [31.9, 3050.0], [32.0, 3050.0], [32.1, 3050.0], [32.2, 3053.0], [32.3, 3059.0], [32.4, 3059.0], [32.5, 3059.0], [32.6, 3062.0], [32.7, 3062.0], [32.8, 3062.0], [32.9, 3062.0], [33.0, 3062.0], [33.1, 3066.0], [33.2, 3071.0], [33.3, 3072.0], [33.4, 3072.0], [33.5, 3072.0], [33.6, 3083.0], [33.7, 3087.0], [33.8, 3087.0], [33.9, 3087.0], [34.0, 3087.0], [34.1, 3095.0], [34.2, 3096.0], [34.3, 3096.0], [34.4, 3106.0], [34.5, 3113.0], [34.6, 3124.0], [34.7, 3130.0], [34.8, 3130.0], [34.9, 3134.0], [35.0, 3134.0], [35.1, 3134.0], [35.2, 3135.0], [35.3, 3135.0], [35.4, 3135.0], [35.5, 3135.0], [35.6, 3136.0], [35.7, 3136.0], [35.8, 3136.0], [35.9, 3136.0], [36.0, 3139.0], [36.1, 3139.0], [36.2, 3139.0], [36.3, 3139.0], [36.4, 3139.0], [36.5, 3139.0], [36.6, 3140.0], [36.7, 3140.0], [36.8, 3140.0], [36.9, 3141.0], [37.0, 3141.0], [37.1, 3150.0], [37.2, 3150.0], [37.3, 3150.0], [37.4, 3150.0], [37.5, 3150.0], [37.6, 3150.0], [37.7, 3150.0], [37.8, 3151.0], [37.9, 3158.0], [38.0, 3164.0], [38.1, 3194.0], [38.2, 3195.0], [38.3, 3195.0], [38.4, 3195.0], [38.5, 3195.0], [38.6, 3195.0], [38.7, 3195.0], [38.8, 3195.0], [38.9, 3196.0], [39.0, 3197.0], [39.1, 3197.0], [39.2, 3197.0], [39.3, 3197.0], [39.4, 3197.0], [39.5, 3197.0], [39.6, 3197.0], [39.7, 3197.0], [39.8, 3199.0], [39.9, 3200.0], [40.0, 3200.0], [40.1, 3200.0], [40.2, 3200.0], [40.3, 3203.0], [40.4, 3217.0], [40.5, 3217.0], [40.6, 3217.0], [40.7, 3217.0], [40.8, 3217.0], [40.9, 3217.0], [41.0, 3218.0], [41.1, 3218.0], [41.2, 3218.0], [41.3, 3218.0], [41.4, 3219.0], [41.5, 3219.0], [41.6, 3219.0], [41.7, 3228.0], [41.8, 3228.0], [41.9, 3228.0], [42.0, 3229.0], [42.1, 3231.0], [42.2, 3231.0], [42.3, 3231.0], [42.4, 3231.0], [42.5, 3231.0], [42.6, 3231.0], [42.7, 3231.0], [42.8, 3231.0], [42.9, 3232.0], [43.0, 3233.0], [43.1, 3234.0], [43.2, 3243.0], [43.3, 3243.0], [43.4, 3252.0], [43.5, 3286.0], [43.6, 3286.0], [43.7, 3290.0], [43.8, 3290.0], [43.9, 3290.0], [44.0, 3293.0], [44.1, 3293.0], [44.2, 3294.0], [44.3, 3296.0], [44.4, 3296.0], [44.5, 3296.0], [44.6, 3296.0], [44.7, 3296.0], [44.8, 3296.0], [44.9, 3296.0], [45.0, 3303.0], [45.1, 3303.0], [45.2, 3303.0], [45.3, 3305.0], [45.4, 3305.0], [45.5, 3305.0], [45.6, 3305.0], [45.7, 3306.0], [45.8, 3306.0], [45.9, 3310.0], [46.0, 3319.0], [46.1, 3319.0], [46.2, 3319.0], [46.3, 3320.0], [46.4, 3336.0], [46.5, 3336.0], [46.6, 3337.0], [46.7, 3337.0], [46.8, 3337.0], [46.9, 3338.0], [47.0, 3338.0], [47.1, 3339.0], [47.2, 3340.0], [47.3, 3341.0], [47.4, 3341.0], [47.5, 3341.0], [47.6, 3341.0], [47.7, 3341.0], [47.8, 3341.0], [47.9, 3341.0], [48.0, 3341.0], [48.1, 3341.0], [48.2, 3341.0], [48.3, 3342.0], [48.4, 3342.0], [48.5, 3342.0], [48.6, 3343.0], [48.7, 3343.0], [48.8, 3343.0], [48.9, 3343.0], [49.0, 3343.0], [49.1, 3343.0], [49.2, 3343.0], [49.3, 3343.0], [49.4, 3343.0], [49.5, 3343.0], [49.6, 3344.0], [49.7, 3344.0], [49.8, 3344.0], [49.9, 3344.0], [50.0, 3344.0], [50.1, 3344.0], [50.2, 3344.0], [50.3, 3344.0], [50.4, 3345.0], [50.5, 3346.0], [50.6, 3380.0], [50.7, 3385.0], [50.8, 3387.0], [50.9, 3398.0], [51.0, 3398.0], [51.1, 3399.0], [51.2, 3399.0], [51.3, 3400.0], [51.4, 3400.0], [51.5, 3400.0], [51.6, 3400.0], [51.7, 3400.0], [51.8, 3400.0], [51.9, 3401.0], [52.0, 3402.0], [52.1, 3402.0], [52.2, 3402.0], [52.3, 3407.0], [52.4, 3428.0], [52.5, 3430.0], [52.6, 3430.0], [52.7, 3430.0], [52.8, 3430.0], [52.9, 3431.0], [53.0, 3431.0], [53.1, 3431.0], [53.2, 3432.0], [53.3, 3432.0], [53.4, 3432.0], [53.5, 3446.0], [53.6, 3449.0], [53.7, 3449.0], [53.8, 3468.0], [53.9, 3468.0], [54.0, 3471.0], [54.1, 3473.0], [54.2, 3473.0], [54.3, 3474.0], [54.4, 3529.0], [54.5, 3543.0], [54.6, 3545.0], [54.7, 3545.0], [54.8, 3546.0], [54.9, 3546.0], [55.0, 3546.0], [55.1, 3546.0], [55.2, 3546.0], [55.3, 3546.0], [55.4, 3546.0], [55.5, 3546.0], [55.6, 3546.0], [55.7, 3546.0], [55.8, 3546.0], [55.9, 3547.0], [56.0, 3547.0], [56.1, 3549.0], [56.2, 3549.0], [56.3, 3550.0], [56.4, 3550.0], [56.5, 3550.0], [56.6, 3550.0], [56.7, 3550.0], [56.8, 3551.0], [56.9, 3554.0], [57.0, 3554.0], [57.1, 3557.0], [57.2, 3560.0], [57.3, 3570.0], [57.4, 3572.0], [57.5, 3596.0], [57.6, 3596.0], [57.7, 3597.0], [57.8, 3597.0], [57.9, 3597.0], [58.0, 3602.0], [58.1, 3607.0], [58.2, 3611.0], [58.3, 3611.0], [58.4, 3615.0], [58.5, 3615.0], [58.6, 3616.0], [58.7, 3649.0], [58.8, 3649.0], [58.9, 3649.0], [59.0, 3649.0], [59.1, 3649.0], [59.2, 3657.0], [59.3, 3678.0], [59.4, 3678.0], [59.5, 3678.0], [59.6, 3679.0], [59.7, 3679.0], [59.8, 3679.0], [59.9, 3679.0], [60.0, 3679.0], [60.1, 3680.0], [60.2, 3680.0], [60.3, 3680.0], [60.4, 3680.0], [60.5, 3688.0], [60.6, 3702.0], [60.7, 3706.0], [60.8, 3724.0], [60.9, 3724.0], [61.0, 3724.0], [61.1, 3725.0], [61.2, 3726.0], [61.3, 3726.0], [61.4, 3727.0], [61.5, 3727.0], [61.6, 3728.0], [61.7, 3728.0], [61.8, 3741.0], [61.9, 3752.0], [62.0, 3766.0], [62.1, 3766.0], [62.2, 3766.0], [62.3, 3767.0], [62.4, 3767.0], [62.5, 3767.0], [62.6, 3767.0], [62.7, 3767.0], [62.8, 3768.0], [62.9, 3787.0], [63.0, 3832.0], [63.1, 3834.0], [63.2, 3835.0], [63.3, 3835.0], [63.4, 3835.0], [63.5, 3837.0], [63.6, 3838.0], [63.7, 3838.0], [63.8, 3843.0], [63.9, 3843.0], [64.0, 3843.0], [64.1, 3844.0], [64.2, 3844.0], [64.3, 3846.0], [64.4, 3847.0], [64.5, 3924.0], [64.6, 3924.0], [64.7, 3924.0], [64.8, 3925.0], [64.9, 3925.0], [65.0, 3925.0], [65.1, 3925.0], [65.2, 3925.0], [65.3, 3925.0], [65.4, 3925.0], [65.5, 3925.0], [65.6, 3926.0], [65.7, 3926.0], [65.8, 3926.0], [65.9, 3926.0], [66.0, 3926.0], [66.1, 3926.0], [66.2, 3926.0], [66.3, 3926.0], [66.4, 3926.0], [66.5, 3926.0], [66.6, 3927.0], [66.7, 3927.0], [66.8, 3927.0], [66.9, 3927.0], [67.0, 3927.0], [67.1, 3937.0], [67.2, 4031.0], [67.3, 4031.0], [67.4, 4034.0], [67.5, 4103.0], [67.6, 4104.0], [67.7, 4105.0], [67.8, 4105.0], [67.9, 4105.0], [68.0, 4105.0], [68.1, 4105.0], [68.2, 4105.0], [68.3, 4105.0], [68.4, 4105.0], [68.5, 4105.0], [68.6, 4105.0], [68.7, 4105.0], [68.8, 4105.0], [68.9, 4105.0], [69.0, 4105.0], [69.1, 4125.0], [69.2, 4148.0], [69.3, 4173.0], [69.4, 4182.0], [69.5, 4199.0], [69.6, 4212.0], [69.7, 4225.0], [69.8, 4241.0], [69.9, 4241.0], [70.0, 4241.0], [70.1, 4241.0], [70.2, 4241.0], [70.3, 4241.0], [70.4, 4242.0], [70.5, 4242.0], [70.6, 4242.0], [70.7, 4242.0], [70.8, 4242.0], [70.9, 4242.0], [71.0, 4243.0], [71.1, 4243.0], [71.2, 4243.0], [71.3, 4243.0], [71.4, 4244.0], [71.5, 4249.0], [71.6, 4249.0], [71.7, 4257.0], [71.8, 4259.0], [71.9, 4262.0], [72.0, 4270.0], [72.1, 4270.0], [72.2, 4277.0], [72.3, 4277.0], [72.4, 4278.0], [72.5, 4278.0], [72.6, 4278.0], [72.7, 4278.0], [72.8, 4278.0], [72.9, 4281.0], [73.0, 4300.0], [73.1, 4304.0], [73.2, 4308.0], [73.3, 4320.0], [73.4, 4322.0], [73.5, 4330.0], [73.6, 4338.0], [73.7, 4339.0], [73.8, 4339.0], [73.9, 4339.0], [74.0, 4339.0], [74.1, 4339.0], [74.2, 4339.0], [74.3, 4340.0], [74.4, 4340.0], [74.5, 4340.0], [74.6, 4341.0], [74.7, 4341.0], [74.8, 4341.0], [74.9, 4341.0], [75.0, 4341.0], [75.1, 4342.0], [75.2, 4343.0], [75.3, 4350.0], [75.4, 4353.0], [75.5, 4364.0], [75.6, 4398.0], [75.7, 4414.0], [75.8, 4443.0], [75.9, 4503.0], [76.0, 4550.0], [76.1, 4557.0], [76.2, 4596.0], [76.3, 4659.0], [76.4, 4688.0], [76.5, 4698.0], [76.6, 4706.0], [76.7, 4707.0], [76.8, 4707.0], [76.9, 4707.0], [77.0, 4707.0], [77.1, 4707.0], [77.2, 4708.0], [77.3, 4709.0], [77.4, 4709.0], [77.5, 4709.0], [77.6, 4709.0], [77.7, 4709.0], [77.8, 4709.0], [77.9, 4710.0], [78.0, 4710.0], [78.1, 4710.0], [78.2, 4734.0], [78.3, 4761.0], [78.4, 4761.0], [78.5, 4761.0], [78.6, 4761.0], [78.7, 4761.0], [78.8, 4761.0], [78.9, 4761.0], [79.0, 4761.0], [79.1, 4761.0], [79.2, 4761.0], [79.3, 4761.0], [79.4, 4762.0], [79.5, 4762.0], [79.6, 4762.0], [79.7, 4762.0], [79.8, 4763.0], [79.9, 4777.0], [80.0, 4778.0], [80.1, 4798.0], [80.2, 4814.0], [80.3, 4814.0], [80.4, 4814.0], [80.5, 4814.0], [80.6, 4814.0], [80.7, 4814.0], [80.8, 4815.0], [80.9, 4815.0], [81.0, 4815.0], [81.1, 4815.0], [81.2, 4815.0], [81.3, 4815.0], [81.4, 4815.0], [81.5, 4815.0], [81.6, 4815.0], [81.7, 4816.0], [81.8, 4823.0], [81.9, 4824.0], [82.0, 4841.0], [82.1, 4850.0], [82.2, 4850.0], [82.3, 4851.0], [82.4, 4851.0], [82.5, 4864.0], [82.6, 4864.0], [82.7, 4871.0], [82.8, 4890.0], [82.9, 4891.0], [83.0, 4907.0], [83.1, 4916.0], [83.2, 4917.0], [83.3, 4922.0], [83.4, 4945.0], [83.5, 4946.0], [83.6, 4946.0], [83.7, 4946.0], [83.8, 4946.0], [83.9, 4946.0], [84.0, 4946.0], [84.1, 4946.0], [84.2, 4947.0], [84.3, 4947.0], [84.4, 4947.0], [84.5, 4947.0], [84.6, 4948.0], [84.7, 4992.0], [84.8, 5007.0], [84.9, 5014.0], [85.0, 5014.0], [85.1, 5015.0], [85.2, 5015.0], [85.3, 5015.0], [85.4, 5015.0], [85.5, 5016.0], [85.6, 5016.0], [85.7, 5019.0], [85.8, 5019.0], [85.9, 5019.0], [86.0, 5019.0], [86.1, 5020.0], [86.2, 5020.0], [86.3, 5020.0], [86.4, 5022.0], [86.5, 5022.0], [86.6, 5023.0], [86.7, 5023.0], [86.8, 5023.0], [86.9, 5023.0], [87.0, 5034.0], [87.1, 5034.0], [87.2, 5034.0], [87.3, 5034.0], [87.4, 5036.0], [87.5, 5195.0], [87.6, 5195.0], [87.7, 5294.0], [87.8, 5299.0], [87.9, 5301.0], [88.0, 5301.0], [88.1, 5301.0], [88.2, 5301.0], [88.3, 5305.0], [88.4, 5306.0], [88.5, 5306.0], [88.6, 5306.0], [88.7, 5306.0], [88.8, 5306.0], [88.9, 5306.0], [89.0, 5307.0], [89.1, 5307.0], [89.2, 5307.0], [89.3, 5307.0], [89.4, 5307.0], [89.5, 5307.0], [89.6, 5307.0], [89.7, 5307.0], [89.8, 5308.0], [89.9, 5308.0], [90.0, 5348.0], [90.1, 5348.0], [90.2, 5348.0], [90.3, 5350.0], [90.4, 5361.0], [90.5, 5368.0], [90.6, 5389.0], [90.7, 5389.0], [90.8, 5392.0], [90.9, 5414.0], [91.0, 5414.0], [91.1, 5414.0], [91.2, 5414.0], [91.3, 5414.0], [91.4, 5416.0], [91.5, 5416.0], [91.6, 5464.0], [91.7, 5501.0], [91.8, 5506.0], [91.9, 5516.0], [92.0, 5517.0], [92.1, 5518.0], [92.2, 5533.0], [92.3, 5533.0], [92.4, 5533.0], [92.5, 5535.0], [92.6, 5560.0], [92.7, 5560.0], [92.8, 5560.0], [92.9, 5561.0], [93.0, 5621.0], [93.1, 5623.0], [93.2, 5655.0], [93.3, 5655.0], [93.4, 5655.0], [93.5, 5655.0], [93.6, 5655.0], [93.7, 5655.0], [93.8, 5656.0], [93.9, 5658.0], [94.0, 5658.0], [94.1, 5658.0], [94.2, 5816.0], [94.3, 5817.0], [94.4, 5818.0], [94.5, 5853.0], [94.6, 5860.0], [94.7, 5866.0], [94.8, 5866.0], [94.9, 5866.0], [95.0, 5866.0], [95.1, 5866.0], [95.2, 5867.0], [95.3, 5867.0], [95.4, 5868.0], [95.5, 5870.0], [95.6, 5872.0], [95.7, 5914.0], [95.8, 5922.0], [95.9, 5923.0], [96.0, 5923.0], [96.1, 5923.0], [96.2, 5924.0], [96.3, 5924.0], [96.4, 5924.0], [96.5, 5924.0], [96.6, 5924.0], [96.7, 5925.0], [96.8, 5927.0], [96.9, 5927.0], [97.0, 5929.0], [97.1, 5929.0], [97.2, 5930.0], [97.3, 5930.0], [97.4, 5930.0], [97.5, 5930.0], [97.6, 5931.0], [97.7, 5931.0], [97.8, 5931.0], [97.9, 5943.0], [98.0, 5961.0], [98.1, 5983.0], [98.2, 5983.0], [98.3, 5983.0], [98.4, 6071.0], [98.5, 6072.0], [98.6, 6072.0], [98.7, 6072.0], [98.8, 6072.0], [98.9, 6072.0], [99.0, 6073.0], [99.1, 6073.0], [99.2, 6073.0], [99.3, 6073.0], [99.4, 6074.0], [99.5, 6074.0], [99.6, 6074.0], [99.7, 6076.0], [99.8, 6925.0], [99.9, 7421.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 700.0, "maxY": 83.0, "series": [{"data": [[700.0, 4.0], [800.0, 18.0], [900.0, 19.0], [1000.0, 12.0], [1100.0, 11.0], [1200.0, 19.0], [1300.0, 14.0], [1400.0, 10.0], [1500.0, 6.0], [1600.0, 5.0], [1700.0, 21.0], [1800.0, 23.0], [1900.0, 19.0], [2000.0, 18.0], [2100.0, 13.0], [2300.0, 28.0], [2200.0, 10.0], [2400.0, 30.0], [2500.0, 21.0], [2800.0, 25.0], [2700.0, 5.0], [2900.0, 80.0], [3000.0, 38.0], [3100.0, 72.0], [3300.0, 83.0], [3200.0, 66.0], [3400.0, 40.0], [3500.0, 48.0], [3700.0, 31.0], [3600.0, 34.0], [3800.0, 20.0], [3900.0, 35.0], [4000.0, 4.0], [4300.0, 35.0], [4200.0, 45.0], [4100.0, 27.0], [4400.0, 3.0], [4500.0, 4.0], [4600.0, 4.0], [4700.0, 47.0], [4800.0, 37.0], [4900.0, 24.0], [5000.0, 35.0], [5100.0, 2.0], [5300.0, 39.0], [5200.0, 3.0], [5500.0, 17.0], [5400.0, 11.0], [5600.0, 16.0], [5800.0, 19.0], [5900.0, 36.0], [6000.0, 18.0], [6900.0, 1.0], [7400.0, 2.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1192.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 107.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1192.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 8.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 82.47513812154698, "minX": 1.7799999E12, "maxY": 103.5017761989344, "series": [{"data": [[1.77999996E12, 82.47513812154698], [1.7799999E12, 103.5017761989344]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999996E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 802.0, "minX": 3.0, "maxY": 5301.0, "series": [{"data": [[3.0, 3700.0], [7.0, 3710.25], [8.0, 3702.0], [11.0, 3420.0], [24.0, 923.3333333333333], [25.0, 863.0], [26.0, 860.0], [28.0, 881.0], [29.0, 871.0], [30.0, 3200.2000000000003], [31.0, 3571.0], [32.0, 887.5], [33.0, 3290.0], [34.0, 891.5], [40.0, 935.1666666666666], [41.0, 3195.0], [43.0, 889.3333333333335], [44.0, 802.0], [45.0, 1332.4], [46.0, 846.5], [47.0, 3679.0], [49.0, 3680.0], [48.0, 3680.0], [51.0, 3437.5], [55.0, 2044.142857142857], [54.0, 3195.0], [57.0, 3630.2999999999997], [56.0, 3195.0], [58.0, 1360.7272727272725], [59.0, 963.6666666666666], [61.0, 2974.0], [66.0, 1179.3333333333333], [71.0, 1208.4285714285713], [72.0, 1022.8], [75.0, 2897.0], [78.0, 1261.0], [79.0, 4762.0], [81.0, 1320.8461538461538], [90.0, 4762.0], [95.0, 1558.157894736842], [94.0, 3512.6666666666665], [96.0, 1280.0], [97.0, 2414.0], [99.0, 3505.0], [98.0, 2896.0], [103.0, 4761.0], [102.0, 5301.0], [101.0, 3619.75], [107.0, 4824.157894736842], [105.0, 5031.0], [104.0, 3055.0], [108.0, 3743.0331186752546]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[100.5899005355777, 3522.525631216531]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 108.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 482.6666666666667, "minX": 1.7799999E12, "maxY": 4335.366666666667, "series": [{"data": [[1.77999996E12, 696.85], [1.7799999E12, 4335.366666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77999996E12, 482.6666666666667], [1.7799999E12, 3002.6666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999996E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3513.3952042628794, "minX": 1.7799999E12, "maxY": 3579.3259668508285, "series": [{"data": [[1.77999996E12, 3579.3259668508285], [1.7799999E12, 3513.3952042628794]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999996E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3513.33303730018, "minX": 1.7799999E12, "maxY": 3579.3204419889526, "series": [{"data": [[1.77999996E12, 3579.3204419889526], [1.7799999E12, 3513.33303730018]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999996E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7799999E12, "maxY": 0.13143872113676755, "series": [{"data": [[1.77999996E12, 0.0], [1.7799999E12, 0.13143872113676755]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999996E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 757.0, "minX": 1.7799999E12, "maxY": 7424.0, "series": [{"data": [[1.77999996E12, 5392.0], [1.7799999E12, 7424.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77999996E12, 2514.0], [1.7799999E12, 757.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77999996E12, 4762.8], [1.7799999E12, 5420.500000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77999996E12, 5389.54], [1.7799999E12, 6073.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77999996E12, 3398.0], [1.7799999E12, 3343.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77999996E12, 5274.500000000002], [1.7799999E12, 5914.4]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999996E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 965.0, "minX": 1.0, "maxY": 5924.0, "series": [{"data": [[33.0, 965.0], [32.0, 3200.0], [2.0, 3449.0], [34.0, 4177.0], [36.0, 1235.0], [41.0, 5924.0], [42.0, 3707.5], [45.0, 4339.0], [48.0, 3925.0], [49.0, 4761.0], [50.0, 3217.5], [1.0, 3426.5], [77.0, 2984.0], [21.0, 1979.0], [22.0, 1162.5], [23.0, 3400.0], [102.0, 3345.0], [27.0, 3766.0], [28.0, 3678.0], [30.0, 3441.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[77.0, 3545.0], [102.0, 3550.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 102.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 965.0, "minX": 1.0, "maxY": 5924.0, "series": [{"data": [[33.0, 965.0], [32.0, 3200.0], [2.0, 3449.0], [34.0, 4176.5], [36.0, 1235.0], [41.0, 5924.0], [42.0, 3707.0], [45.0, 4339.0], [48.0, 3925.0], [49.0, 4761.0], [50.0, 3217.5], [1.0, 3426.5], [77.0, 2984.0], [21.0, 1979.0], [22.0, 1162.5], [23.0, 3400.0], [102.0, 3345.0], [27.0, 3766.0], [28.0, 3678.0], [30.0, 3441.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[77.0, 3545.0], [102.0, 3549.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 102.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.7799999E12, "maxY": 20.5, "series": [{"data": [[1.77999996E12, 1.2833333333333334], [1.7799999E12, 20.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999996E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.7799999E12, "maxY": 18.633333333333333, "series": [{"data": [[1.77999996E12, 3.0166666666666666], [1.7799999E12, 18.633333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7799999E12, 0.13333333333333333]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999996E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.7799999E12, "maxY": 18.633333333333333, "series": [{"data": [[1.77999996E12, 3.0166666666666666], [1.7799999E12, 18.633333333333333]], "isOverall": false, "label": "GET STLoad-success", "isController": false}, {"data": [[1.7799999E12, 0.13333333333333333]], "isOverall": false, "label": "GET STLoad-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999996E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.7799999E12, "maxY": 18.633333333333333, "series": [{"data": [[1.77999996E12, 3.0166666666666666], [1.7799999E12, 18.633333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7799999E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999996E12, "title": "Total Transactions Per Second"}},
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

