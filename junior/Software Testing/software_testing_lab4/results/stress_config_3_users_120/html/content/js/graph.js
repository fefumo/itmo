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
        data: {"result": {"minY": 845.0, "minX": 0.0, "maxY": 7850.0, "series": [{"data": [[0.0, 845.0], [0.1, 888.0], [0.2, 896.0], [0.3, 902.0], [0.4, 921.0], [0.5, 921.0], [0.6, 923.0], [0.7, 929.0], [0.8, 943.0], [0.9, 943.0], [1.0, 971.0], [1.1, 972.0], [1.2, 985.0], [1.3, 1013.0], [1.4, 1027.0], [1.5, 1054.0], [1.6, 1078.0], [1.7, 1097.0], [1.8, 1099.0], [1.9, 1102.0], [2.0, 1103.0], [2.1, 1104.0], [2.2, 1105.0], [2.3, 1114.0], [2.4, 1114.0], [2.5, 1138.0], [2.6, 1146.0], [2.7, 1167.0], [2.8, 1181.0], [2.9, 1243.0], [3.0, 1243.0], [3.1, 1244.0], [3.2, 1255.0], [3.3, 1270.0], [3.4, 1285.0], [3.5, 1292.0], [3.6, 1307.0], [3.7, 1312.0], [3.8, 1326.0], [3.9, 1349.0], [4.0, 1368.0], [4.1, 1376.0], [4.2, 1410.0], [4.3, 1433.0], [4.4, 1452.0], [4.5, 1536.0], [4.6, 1553.0], [4.7, 1579.0], [4.8, 1619.0], [4.9, 1629.0], [5.0, 1636.0], [5.1, 1649.0], [5.2, 1649.0], [5.3, 1649.0], [5.4, 1655.0], [5.5, 1662.0], [5.6, 1686.0], [5.7, 1698.0], [5.8, 1708.0], [5.9, 1739.0], [6.0, 1745.0], [6.1, 1777.0], [6.2, 1787.0], [6.3, 1789.0], [6.4, 1796.0], [6.5, 1828.0], [6.6, 1838.0], [6.7, 1851.0], [6.8, 1864.0], [6.9, 1870.0], [7.0, 1881.0], [7.1, 1892.0], [7.2, 1895.0], [7.3, 1907.0], [7.4, 1907.0], [7.5, 1907.0], [7.6, 1912.0], [7.7, 1926.0], [7.8, 1936.0], [7.9, 1956.0], [8.0, 1977.0], [8.1, 1996.0], [8.2, 2009.0], [8.3, 2052.0], [8.4, 2093.0], [8.5, 2105.0], [8.6, 2106.0], [8.7, 2106.0], [8.8, 2106.0], [8.9, 2106.0], [9.0, 2107.0], [9.1, 2107.0], [9.2, 2109.0], [9.3, 2134.0], [9.4, 2177.0], [9.5, 2205.0], [9.6, 2216.0], [9.7, 2216.0], [9.8, 2218.0], [9.9, 2249.0], [10.0, 2259.0], [10.1, 2272.0], [10.2, 2290.0], [10.3, 2301.0], [10.4, 2303.0], [10.5, 2330.0], [10.6, 2342.0], [10.7, 2371.0], [10.8, 2385.0], [10.9, 2410.0], [11.0, 2426.0], [11.1, 2428.0], [11.2, 2452.0], [11.3, 2460.0], [11.4, 2460.0], [11.5, 2492.0], [11.6, 2492.0], [11.7, 2510.0], [11.8, 2534.0], [11.9, 2552.0], [12.0, 2554.0], [12.1, 2577.0], [12.2, 2593.0], [12.3, 2595.0], [12.4, 2610.0], [12.5, 2635.0], [12.6, 2636.0], [12.7, 2638.0], [12.8, 2673.0], [12.9, 2678.0], [13.0, 2702.0], [13.1, 2706.0], [13.2, 2706.0], [13.3, 2706.0], [13.4, 2706.0], [13.5, 2706.0], [13.6, 2706.0], [13.7, 2706.0], [13.8, 2706.0], [13.9, 2716.0], [14.0, 2718.0], [14.1, 2739.0], [14.2, 2740.0], [14.3, 2755.0], [14.4, 2761.0], [14.5, 2773.0], [14.6, 2773.0], [14.7, 2781.0], [14.8, 2797.0], [14.9, 2799.0], [15.0, 2822.0], [15.1, 2822.0], [15.2, 2837.0], [15.3, 2848.0], [15.4, 2854.0], [15.5, 2863.0], [15.6, 2865.0], [15.7, 2883.0], [15.8, 2893.0], [15.9, 2904.0], [16.0, 2921.0], [16.1, 2922.0], [16.2, 2922.0], [16.3, 2925.0], [16.4, 2931.0], [16.5, 2931.0], [16.6, 2935.0], [16.7, 2935.0], [16.8, 2937.0], [16.9, 2940.0], [17.0, 2940.0], [17.1, 2940.0], [17.2, 2940.0], [17.3, 2940.0], [17.4, 2940.0], [17.5, 2941.0], [17.6, 2941.0], [17.7, 2945.0], [17.8, 2957.0], [17.9, 2963.0], [18.0, 2967.0], [18.1, 2975.0], [18.2, 2997.0], [18.3, 3005.0], [18.4, 3006.0], [18.5, 3007.0], [18.6, 3008.0], [18.7, 3008.0], [18.8, 3013.0], [18.9, 3015.0], [19.0, 3017.0], [19.1, 3017.0], [19.2, 3017.0], [19.3, 3017.0], [19.4, 3018.0], [19.5, 3018.0], [19.6, 3018.0], [19.7, 3018.0], [19.8, 3018.0], [19.9, 3018.0], [20.0, 3018.0], [20.1, 3019.0], [20.2, 3021.0], [20.3, 3032.0], [20.4, 3034.0], [20.5, 3034.0], [20.6, 3038.0], [20.7, 3038.0], [20.8, 3038.0], [20.9, 3038.0], [21.0, 3038.0], [21.1, 3039.0], [21.2, 3039.0], [21.3, 3039.0], [21.4, 3040.0], [21.5, 3048.0], [21.6, 3060.0], [21.7, 3104.0], [21.8, 3110.0], [21.9, 3123.0], [22.0, 3123.0], [22.1, 3125.0], [22.2, 3125.0], [22.3, 3125.0], [22.4, 3125.0], [22.5, 3125.0], [22.6, 3125.0], [22.7, 3130.0], [22.8, 3130.0], [22.9, 3132.0], [23.0, 3170.0], [23.1, 3172.0], [23.2, 3172.0], [23.3, 3172.0], [23.4, 3172.0], [23.5, 3172.0], [23.6, 3173.0], [23.7, 3173.0], [23.8, 3174.0], [23.9, 3174.0], [24.0, 3175.0], [24.1, 3175.0], [24.2, 3175.0], [24.3, 3175.0], [24.4, 3175.0], [24.5, 3175.0], [24.6, 3175.0], [24.7, 3175.0], [24.8, 3175.0], [24.9, 3175.0], [25.0, 3175.0], [25.1, 3175.0], [25.2, 3176.0], [25.3, 3176.0], [25.4, 3176.0], [25.5, 3187.0], [25.6, 3215.0], [25.7, 3229.0], [25.8, 3298.0], [25.9, 3314.0], [26.0, 3323.0], [26.1, 3323.0], [26.2, 3355.0], [26.3, 3358.0], [26.4, 3359.0], [26.5, 3368.0], [26.6, 3369.0], [26.7, 3371.0], [26.8, 3371.0], [26.9, 3371.0], [27.0, 3374.0], [27.1, 3396.0], [27.2, 3399.0], [27.3, 3403.0], [27.4, 3405.0], [27.5, 3405.0], [27.6, 3405.0], [27.7, 3405.0], [27.8, 3405.0], [27.9, 3406.0], [28.0, 3406.0], [28.1, 3406.0], [28.2, 3407.0], [28.3, 3407.0], [28.4, 3407.0], [28.5, 3407.0], [28.6, 3409.0], [28.7, 3409.0], [28.8, 3409.0], [28.9, 3409.0], [29.0, 3409.0], [29.1, 3410.0], [29.2, 3411.0], [29.3, 3419.0], [29.4, 3419.0], [29.5, 3419.0], [29.6, 3419.0], [29.7, 3420.0], [29.8, 3422.0], [29.9, 3422.0], [30.0, 3422.0], [30.1, 3422.0], [30.2, 3422.0], [30.3, 3422.0], [30.4, 3422.0], [30.5, 3424.0], [30.6, 3434.0], [30.7, 3434.0], [30.8, 3435.0], [30.9, 3438.0], [31.0, 3438.0], [31.1, 3442.0], [31.2, 3480.0], [31.3, 3500.0], [31.4, 3500.0], [31.5, 3500.0], [31.6, 3500.0], [31.7, 3500.0], [31.8, 3501.0], [31.9, 3501.0], [32.0, 3504.0], [32.1, 3504.0], [32.2, 3504.0], [32.3, 3504.0], [32.4, 3512.0], [32.5, 3519.0], [32.6, 3519.0], [32.7, 3519.0], [32.8, 3519.0], [32.9, 3520.0], [33.0, 3520.0], [33.1, 3520.0], [33.2, 3520.0], [33.3, 3520.0], [33.4, 3520.0], [33.5, 3520.0], [33.6, 3520.0], [33.7, 3520.0], [33.8, 3521.0], [33.9, 3521.0], [34.0, 3521.0], [34.1, 3521.0], [34.2, 3522.0], [34.3, 3522.0], [34.4, 3524.0], [34.5, 3527.0], [34.6, 3530.0], [34.7, 3530.0], [34.8, 3530.0], [34.9, 3530.0], [35.0, 3530.0], [35.1, 3530.0], [35.2, 3531.0], [35.3, 3531.0], [35.4, 3531.0], [35.5, 3531.0], [35.6, 3532.0], [35.7, 3532.0], [35.8, 3551.0], [35.9, 3551.0], [36.0, 3551.0], [36.1, 3551.0], [36.2, 3551.0], [36.3, 3551.0], [36.4, 3552.0], [36.5, 3552.0], [36.6, 3594.0], [36.7, 3594.0], [36.8, 3594.0], [36.9, 3594.0], [37.0, 3595.0], [37.1, 3595.0], [37.2, 3595.0], [37.3, 3595.0], [37.4, 3595.0], [37.5, 3595.0], [37.6, 3596.0], [37.7, 3596.0], [37.8, 3602.0], [37.9, 3602.0], [38.0, 3602.0], [38.1, 3603.0], [38.2, 3603.0], [38.3, 3603.0], [38.4, 3603.0], [38.5, 3603.0], [38.6, 3603.0], [38.7, 3610.0], [38.8, 3610.0], [38.9, 3610.0], [39.0, 3610.0], [39.1, 3611.0], [39.2, 3626.0], [39.3, 3633.0], [39.4, 3633.0], [39.5, 3638.0], [39.6, 3639.0], [39.7, 3639.0], [39.8, 3639.0], [39.9, 3640.0], [40.0, 3640.0], [40.1, 3640.0], [40.2, 3640.0], [40.3, 3640.0], [40.4, 3640.0], [40.5, 3645.0], [40.6, 3645.0], [40.7, 3699.0], [40.8, 3699.0], [40.9, 3699.0], [41.0, 3699.0], [41.1, 3699.0], [41.2, 3699.0], [41.3, 3699.0], [41.4, 3699.0], [41.5, 3704.0], [41.6, 3704.0], [41.7, 3704.0], [41.8, 3704.0], [41.9, 3714.0], [42.0, 3752.0], [42.1, 3757.0], [42.2, 3757.0], [42.3, 3758.0], [42.4, 3758.0], [42.5, 3758.0], [42.6, 3758.0], [42.7, 3760.0], [42.8, 3761.0], [42.9, 3796.0], [43.0, 3819.0], [43.1, 3819.0], [43.2, 3819.0], [43.3, 3819.0], [43.4, 3819.0], [43.5, 3819.0], [43.6, 3838.0], [43.7, 3843.0], [43.8, 3847.0], [43.9, 3849.0], [44.0, 3849.0], [44.1, 3849.0], [44.2, 3849.0], [44.3, 3849.0], [44.4, 3849.0], [44.5, 3849.0], [44.6, 3849.0], [44.7, 3849.0], [44.8, 3849.0], [44.9, 3849.0], [45.0, 3850.0], [45.1, 3850.0], [45.2, 3850.0], [45.3, 3850.0], [45.4, 3850.0], [45.5, 3850.0], [45.6, 3850.0], [45.7, 3851.0], [45.8, 3851.0], [45.9, 3853.0], [46.0, 3853.0], [46.1, 3879.0], [46.2, 3908.0], [46.3, 3908.0], [46.4, 3908.0], [46.5, 3908.0], [46.6, 3908.0], [46.7, 3908.0], [46.8, 3909.0], [46.9, 3909.0], [47.0, 3909.0], [47.1, 3909.0], [47.2, 3910.0], [47.3, 3910.0], [47.4, 3910.0], [47.5, 3911.0], [47.6, 3914.0], [47.7, 3914.0], [47.8, 3920.0], [47.9, 3920.0], [48.0, 3921.0], [48.1, 3932.0], [48.2, 3932.0], [48.3, 3939.0], [48.4, 3939.0], [48.5, 3940.0], [48.6, 3940.0], [48.7, 3944.0], [48.8, 3945.0], [48.9, 3945.0], [49.0, 3962.0], [49.1, 3992.0], [49.2, 3992.0], [49.3, 3993.0], [49.4, 4008.0], [49.5, 4008.0], [49.6, 4008.0], [49.7, 4008.0], [49.8, 4008.0], [49.9, 4008.0], [50.0, 4008.0], [50.1, 4016.0], [50.2, 4016.0], [50.3, 4016.0], [50.4, 4016.0], [50.5, 4016.0], [50.6, 4016.0], [50.7, 4018.0], [50.8, 4022.0], [50.9, 4022.0], [51.0, 4022.0], [51.1, 4033.0], [51.2, 4034.0], [51.3, 4056.0], [51.4, 4056.0], [51.5, 4056.0], [51.6, 4056.0], [51.7, 4058.0], [51.8, 4075.0], [51.9, 4078.0], [52.0, 4095.0], [52.1, 4095.0], [52.2, 4095.0], [52.3, 4099.0], [52.4, 4099.0], [52.5, 4099.0], [52.6, 4100.0], [52.7, 4102.0], [52.8, 4102.0], [52.9, 4104.0], [53.0, 4118.0], [53.1, 4119.0], [53.2, 4143.0], [53.3, 4145.0], [53.4, 4159.0], [53.5, 4172.0], [53.6, 4186.0], [53.7, 4189.0], [53.8, 4190.0], [53.9, 4191.0], [54.0, 4191.0], [54.1, 4194.0], [54.2, 4202.0], [54.3, 4214.0], [54.4, 4227.0], [54.5, 4244.0], [54.6, 4250.0], [54.7, 4250.0], [54.8, 4255.0], [54.9, 4269.0], [55.0, 4284.0], [55.1, 4285.0], [55.2, 4285.0], [55.3, 4286.0], [55.4, 4287.0], [55.5, 4287.0], [55.6, 4287.0], [55.7, 4287.0], [55.8, 4288.0], [55.9, 4288.0], [56.0, 4288.0], [56.1, 4288.0], [56.2, 4288.0], [56.3, 4288.0], [56.4, 4289.0], [56.5, 4297.0], [56.6, 4307.0], [56.7, 4307.0], [56.8, 4307.0], [56.9, 4307.0], [57.0, 4307.0], [57.1, 4308.0], [57.2, 4308.0], [57.3, 4308.0], [57.4, 4308.0], [57.5, 4308.0], [57.6, 4308.0], [57.7, 4311.0], [57.8, 4315.0], [57.9, 4315.0], [58.0, 4324.0], [58.1, 4339.0], [58.2, 4341.0], [58.3, 4341.0], [58.4, 4341.0], [58.5, 4342.0], [58.6, 4348.0], [58.7, 4359.0], [58.8, 4365.0], [58.9, 4366.0], [59.0, 4381.0], [59.1, 4381.0], [59.2, 4381.0], [59.3, 4382.0], [59.4, 4382.0], [59.5, 4382.0], [59.6, 4383.0], [59.7, 4383.0], [59.8, 4385.0], [59.9, 4395.0], [60.0, 4395.0], [60.1, 4395.0], [60.2, 4396.0], [60.3, 4396.0], [60.4, 4396.0], [60.5, 4399.0], [60.6, 4402.0], [60.7, 4402.0], [60.8, 4407.0], [60.9, 4417.0], [61.0, 4417.0], [61.1, 4417.0], [61.2, 4417.0], [61.3, 4417.0], [61.4, 4418.0], [61.5, 4418.0], [61.6, 4418.0], [61.7, 4418.0], [61.8, 4418.0], [61.9, 4419.0], [62.0, 4432.0], [62.1, 4443.0], [62.2, 4452.0], [62.3, 4452.0], [62.4, 4452.0], [62.5, 4452.0], [62.6, 4453.0], [62.7, 4453.0], [62.8, 4454.0], [62.9, 4454.0], [63.0, 4454.0], [63.1, 4454.0], [63.2, 4454.0], [63.3, 4455.0], [63.4, 4455.0], [63.5, 4455.0], [63.6, 4455.0], [63.7, 4456.0], [63.8, 4456.0], [63.9, 4456.0], [64.0, 4456.0], [64.1, 4456.0], [64.2, 4456.0], [64.3, 4456.0], [64.4, 4456.0], [64.5, 4456.0], [64.6, 4474.0], [64.7, 4483.0], [64.8, 4483.0], [64.9, 4484.0], [65.0, 4486.0], [65.1, 4486.0], [65.2, 4487.0], [65.3, 4487.0], [65.4, 4487.0], [65.5, 4487.0], [65.6, 4488.0], [65.7, 4488.0], [65.8, 4488.0], [65.9, 4488.0], [66.0, 4490.0], [66.1, 4492.0], [66.2, 4492.0], [66.3, 4494.0], [66.4, 4495.0], [66.5, 4495.0], [66.6, 4495.0], [66.7, 4495.0], [66.8, 4495.0], [66.9, 4496.0], [67.0, 4496.0], [67.1, 4496.0], [67.2, 4496.0], [67.3, 4496.0], [67.4, 4496.0], [67.5, 4497.0], [67.6, 4505.0], [67.7, 4505.0], [67.8, 4510.0], [67.9, 4533.0], [68.0, 4536.0], [68.1, 4536.0], [68.2, 4536.0], [68.3, 4542.0], [68.4, 4543.0], [68.5, 4543.0], [68.6, 4543.0], [68.7, 4544.0], [68.8, 4545.0], [68.9, 4546.0], [69.0, 4546.0], [69.1, 4592.0], [69.2, 4595.0], [69.3, 4595.0], [69.4, 4597.0], [69.5, 4620.0], [69.6, 4622.0], [69.7, 4622.0], [69.8, 4623.0], [69.9, 4623.0], [70.0, 4623.0], [70.1, 4623.0], [70.2, 4687.0], [70.3, 4687.0], [70.4, 4687.0], [70.5, 4688.0], [70.6, 4688.0], [70.7, 4688.0], [70.8, 4688.0], [70.9, 4688.0], [71.0, 4688.0], [71.1, 4688.0], [71.2, 4688.0], [71.3, 4688.0], [71.4, 4688.0], [71.5, 4688.0], [71.6, 4688.0], [71.7, 4689.0], [71.8, 4689.0], [71.9, 4689.0], [72.0, 4689.0], [72.1, 4690.0], [72.2, 4690.0], [72.3, 4787.0], [72.4, 4787.0], [72.5, 4787.0], [72.6, 4787.0], [72.7, 4881.0], [72.8, 4881.0], [72.9, 4881.0], [73.0, 4881.0], [73.1, 4881.0], [73.2, 4882.0], [73.3, 4882.0], [73.4, 4882.0], [73.5, 4882.0], [73.6, 4882.0], [73.7, 4882.0], [73.8, 4882.0], [73.9, 4882.0], [74.0, 4882.0], [74.1, 4882.0], [74.2, 4882.0], [74.3, 4882.0], [74.4, 4882.0], [74.5, 4883.0], [74.6, 4985.0], [74.7, 4985.0], [74.8, 4985.0], [74.9, 4986.0], [75.0, 4996.0], [75.1, 5011.0], [75.2, 5011.0], [75.3, 5011.0], [75.4, 5035.0], [75.5, 5066.0], [75.6, 5066.0], [75.7, 5066.0], [75.8, 5068.0], [75.9, 5071.0], [76.0, 5071.0], [76.1, 5071.0], [76.2, 5072.0], [76.3, 5072.0], [76.4, 5073.0], [76.5, 5073.0], [76.6, 5073.0], [76.7, 5073.0], [76.8, 5073.0], [76.9, 5073.0], [77.0, 5074.0], [77.1, 5077.0], [77.2, 5078.0], [77.3, 5078.0], [77.4, 5079.0], [77.5, 5080.0], [77.6, 5080.0], [77.7, 5081.0], [77.8, 5081.0], [77.9, 5081.0], [78.0, 5082.0], [78.1, 5085.0], [78.2, 5085.0], [78.3, 5085.0], [78.4, 5086.0], [78.5, 5086.0], [78.6, 5086.0], [78.7, 5087.0], [78.8, 5087.0], [78.9, 5087.0], [79.0, 5087.0], [79.1, 5087.0], [79.2, 5087.0], [79.3, 5119.0], [79.4, 5133.0], [79.5, 5133.0], [79.6, 5134.0], [79.7, 5134.0], [79.8, 5134.0], [79.9, 5134.0], [80.0, 5134.0], [80.1, 5134.0], [80.2, 5134.0], [80.3, 5134.0], [80.4, 5134.0], [80.5, 5135.0], [80.6, 5155.0], [80.7, 5155.0], [80.8, 5156.0], [80.9, 5156.0], [81.0, 5156.0], [81.1, 5157.0], [81.2, 5157.0], [81.3, 5158.0], [81.4, 5191.0], [81.5, 5192.0], [81.6, 5254.0], [81.7, 5255.0], [81.8, 5255.0], [81.9, 5255.0], [82.0, 5276.0], [82.1, 5277.0], [82.2, 5293.0], [82.3, 5293.0], [82.4, 5294.0], [82.5, 5294.0], [82.6, 5294.0], [82.7, 5294.0], [82.8, 5294.0], [82.9, 5294.0], [83.0, 5294.0], [83.1, 5294.0], [83.2, 5315.0], [83.3, 5344.0], [83.4, 5359.0], [83.5, 5360.0], [83.6, 5360.0], [83.7, 5360.0], [83.8, 5360.0], [83.9, 5360.0], [84.0, 5360.0], [84.1, 5360.0], [84.2, 5361.0], [84.3, 5361.0], [84.4, 5361.0], [84.5, 5361.0], [84.6, 5361.0], [84.7, 5361.0], [84.8, 5361.0], [84.9, 5361.0], [85.0, 5361.0], [85.1, 5361.0], [85.2, 5361.0], [85.3, 5361.0], [85.4, 5402.0], [85.5, 5442.0], [85.6, 5497.0], [85.7, 5498.0], [85.8, 5498.0], [85.9, 5498.0], [86.0, 5499.0], [86.1, 5499.0], [86.2, 5499.0], [86.3, 5499.0], [86.4, 5499.0], [86.5, 5499.0], [86.6, 5499.0], [86.7, 5503.0], [86.8, 5503.0], [86.9, 5503.0], [87.0, 5510.0], [87.1, 5594.0], [87.2, 5594.0], [87.3, 5594.0], [87.4, 5595.0], [87.5, 5595.0], [87.6, 5595.0], [87.7, 5595.0], [87.8, 5596.0], [87.9, 5628.0], [88.0, 5628.0], [88.1, 5629.0], [88.2, 5730.0], [88.3, 5811.0], [88.4, 5845.0], [88.5, 5845.0], [88.6, 5893.0], [88.7, 5906.0], [88.8, 5919.0], [88.9, 5936.0], [89.0, 5951.0], [89.1, 5964.0], [89.2, 6006.0], [89.3, 6033.0], [89.4, 6047.0], [89.5, 6050.0], [89.6, 6050.0], [89.7, 6051.0], [89.8, 6068.0], [89.9, 6069.0], [90.0, 6069.0], [90.1, 6069.0], [90.2, 6070.0], [90.3, 6070.0], [90.4, 6091.0], [90.5, 6091.0], [90.6, 6091.0], [90.7, 6092.0], [90.8, 6101.0], [90.9, 6102.0], [91.0, 6102.0], [91.1, 6103.0], [91.2, 6103.0], [91.3, 6144.0], [91.4, 6144.0], [91.5, 6144.0], [91.6, 6145.0], [91.7, 6145.0], [91.8, 6145.0], [91.9, 6145.0], [92.0, 6145.0], [92.1, 6146.0], [92.2, 6146.0], [92.3, 6147.0], [92.4, 6147.0], [92.5, 6148.0], [92.6, 6193.0], [92.7, 6193.0], [92.8, 6193.0], [92.9, 6193.0], [93.0, 6193.0], [93.1, 6193.0], [93.2, 6193.0], [93.3, 6193.0], [93.4, 6195.0], [93.5, 6196.0], [93.6, 6196.0], [93.7, 6197.0], [93.8, 6365.0], [93.9, 6400.0], [94.0, 6401.0], [94.1, 6402.0], [94.2, 6440.0], [94.3, 6442.0], [94.4, 6480.0], [94.5, 6490.0], [94.6, 6490.0], [94.7, 6490.0], [94.8, 6490.0], [94.9, 6490.0], [95.0, 6490.0], [95.1, 6490.0], [95.2, 6490.0], [95.3, 6490.0], [95.4, 6490.0], [95.5, 6491.0], [95.6, 6491.0], [95.7, 6492.0], [95.8, 6492.0], [95.9, 6583.0], [96.0, 6736.0], [96.1, 6750.0], [96.2, 6750.0], [96.3, 6753.0], [96.4, 6753.0], [96.5, 6753.0], [96.6, 6753.0], [96.7, 6753.0], [96.8, 6755.0], [96.9, 6838.0], [97.0, 6838.0], [97.1, 6838.0], [97.2, 6838.0], [97.3, 6838.0], [97.4, 6838.0], [97.5, 6838.0], [97.6, 6838.0], [97.7, 6838.0], [97.8, 6838.0], [97.9, 6839.0], [98.0, 6839.0], [98.1, 6839.0], [98.2, 6839.0], [98.3, 6839.0], [98.4, 6839.0], [98.5, 7245.0], [98.6, 7340.0], [98.7, 7340.0], [98.8, 7340.0], [98.9, 7340.0], [99.0, 7340.0], [99.1, 7341.0], [99.2, 7341.0], [99.3, 7342.0], [99.4, 7342.0], [99.5, 7346.0], [99.6, 7849.0], [99.7, 7850.0], [99.8, 7850.0], [99.9, 7850.0], [100.0, 7850.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 800.0, "maxY": 93.0, "series": [{"data": [[800.0, 3.0], [900.0, 14.0], [1000.0, 7.0], [1100.0, 13.0], [1200.0, 10.0], [1300.0, 8.0], [1400.0, 4.0], [1500.0, 4.0], [1600.0, 12.0], [1700.0, 10.0], [1800.0, 10.0], [1900.0, 12.0], [2000.0, 4.0], [2100.0, 13.0], [2200.0, 11.0], [2300.0, 8.0], [2400.0, 10.0], [2500.0, 9.0], [2600.0, 8.0], [2700.0, 26.0], [2800.0, 12.0], [2900.0, 32.0], [3000.0, 45.0], [3100.0, 51.0], [3200.0, 4.0], [3300.0, 18.0], [3400.0, 53.0], [3500.0, 85.0], [3600.0, 48.0], [3700.0, 20.0], [3800.0, 43.0], [3900.0, 41.0], [4000.0, 43.0], [4300.0, 52.0], [4200.0, 31.0], [4100.0, 21.0], [4400.0, 93.0], [4500.0, 25.0], [4600.0, 36.0], [4800.0, 25.0], [4700.0, 5.0], [5100.0, 30.0], [5000.0, 55.0], [4900.0, 7.0], [5300.0, 29.0], [5200.0, 22.0], [5400.0, 17.0], [5600.0, 4.0], [5500.0, 15.0], [5800.0, 5.0], [5700.0, 2.0], [6000.0, 20.0], [5900.0, 7.0], [6100.0, 40.0], [6300.0, 1.0], [6500.0, 2.0], [6400.0, 26.0], [6700.0, 11.0], [6800.0, 22.0], [7300.0, 13.0], [7200.0, 1.0], [7800.0, 6.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 36.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1219.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 59.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1219.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 36.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 112.11567732115671, "minX": 1.77999996E12, "maxY": 112.11567732115671, "series": [{"data": [[1.77999996E12, 112.11567732115671]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999996E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 887.3333333333334, "minX": 1.0, "maxY": 5110.000000000001, "series": [{"data": [[2.0, 4251.0], [34.0, 1035.5], [38.0, 1025.0], [39.0, 896.0], [43.0, 985.0], [52.0, 1195.0], [53.0, 2017.5], [56.0, 1243.1111111111113], [57.0, 1048.25], [66.0, 1370.0], [67.0, 4690.0], [4.0, 4189.5], [71.0, 3702.6666666666665], [74.0, 3704.0], [79.0, 2957.0], [77.0, 4378.166666666667], [76.0, 4442.5], [83.0, 1616.764705882353], [5.0, 4145.0], [84.0, 1229.3333333333333], [6.0, 4104.0], [103.0, 1865.8333333333335], [107.0, 2706.0], [110.0, 3887.0], [109.0, 3589.125], [108.0, 2706.0], [114.0, 4303.0], [118.0, 5110.000000000001], [120.0, 4268.51633393829], [9.0, 4102.0], [14.0, 4056.0], [1.0, 4186.0], [21.0, 4016.0], [26.0, 921.5], [27.0, 887.3333333333334], [31.0, 3817.9090909090905]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[112.1149162861491, 4065.2305936073067]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 120.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3504.0, "minX": 1.77999996E12, "maxY": 5060.1, "series": [{"data": [[1.77999996E12, 5060.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77999996E12, 3504.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999996E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4065.2305936073067, "minX": 1.77999996E12, "maxY": 4065.2305936073067, "series": [{"data": [[1.77999996E12, 4065.2305936073067]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999996E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4065.1803652968033, "minX": 1.77999996E12, "maxY": 4065.1803652968033, "series": [{"data": [[1.77999996E12, 4065.1803652968033]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999996E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.13698630136986348, "minX": 1.77999996E12, "maxY": 0.13698630136986348, "series": [{"data": [[1.77999996E12, 0.13698630136986348]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999996E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 845.0, "minX": 1.77999996E12, "maxY": 7850.0, "series": [{"data": [[1.77999996E12, 7850.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77999996E12, 845.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77999996E12, 6072.100000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77999996E12, 7340.21]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77999996E12, 3953.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77999996E12, 6490.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999996E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 950.0, "minX": 1.0, "maxY": 6144.0, "series": [{"data": [[8.0, 950.0], [40.0, 2296.5], [41.0, 3292.5], [10.0, 3842.5], [42.0, 2758.0], [43.0, 5134.0], [11.0, 4019.0], [45.0, 3551.0], [47.0, 3173.0], [46.0, 3595.0], [49.0, 1777.0], [48.0, 3998.0], [14.0, 5156.0], [59.0, 6144.0], [58.0, 4833.0], [4.0, 1697.0], [1.0, 4092.0], [77.0, 4102.0], [83.0, 4381.0], [102.0, 6102.0], [29.0, 1114.0], [30.0, 4743.5], [31.0, 4378.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 4443.0], [83.0, 4536.0], [11.0, 3932.0], [45.0, 3638.0], [102.0, 4417.0], [30.0, 5191.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 102.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 950.0, "minX": 1.0, "maxY": 6143.0, "series": [{"data": [[8.0, 950.0], [40.0, 2296.0], [41.0, 3292.5], [10.0, 3842.5], [42.0, 2758.0], [43.0, 5134.0], [11.0, 4019.0], [45.0, 3551.0], [47.0, 3173.0], [46.0, 3595.0], [49.0, 1777.0], [48.0, 3997.5], [14.0, 5156.0], [59.0, 6143.0], [58.0, 4833.0], [4.0, 1697.0], [1.0, 4092.0], [77.0, 4102.0], [83.0, 4381.0], [102.0, 6102.0], [29.0, 1114.0], [30.0, 4743.5], [31.0, 4378.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 4443.0], [83.0, 4536.0], [11.0, 3932.0], [45.0, 3637.0], [102.0, 4417.0], [30.0, 5191.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 102.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 21.9, "minX": 1.77999996E12, "maxY": 21.9, "series": [{"data": [[1.77999996E12, 21.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999996E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.77999996E12, "maxY": 21.3, "series": [{"data": [[1.77999996E12, 21.3]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.77999996E12, 0.6]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999996E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.77999996E12, "maxY": 21.3, "series": [{"data": [[1.77999996E12, 21.3]], "isOverall": false, "label": "GET STLoad-success", "isController": false}, {"data": [[1.77999996E12, 0.6]], "isOverall": false, "label": "GET STLoad-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999996E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6, "minX": 1.77999996E12, "maxY": 21.3, "series": [{"data": [[1.77999996E12, 21.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.77999996E12, 0.6]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999996E12, "title": "Total Transactions Per Second"}},
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

