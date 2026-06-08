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
        data: {"result": {"minY": 673.0, "minX": 0.0, "maxY": 5636.0, "series": [{"data": [[0.0, 673.0], [0.1, 678.0], [0.2, 693.0], [0.3, 700.0], [0.4, 704.0], [0.5, 711.0], [0.6, 711.0], [0.7, 714.0], [0.8, 719.0], [0.9, 719.0], [1.0, 720.0], [1.1, 723.0], [1.2, 733.0], [1.3, 737.0], [1.4, 743.0], [1.5, 746.0], [1.6, 750.0], [1.7, 752.0], [1.8, 754.0], [1.9, 764.0], [2.0, 764.0], [2.1, 783.0], [2.2, 786.0], [2.3, 793.0], [2.4, 798.0], [2.5, 801.0], [2.6, 807.0], [2.7, 810.0], [2.8, 813.0], [2.9, 813.0], [3.0, 822.0], [3.1, 822.0], [3.2, 825.0], [3.3, 825.0], [3.4, 830.0], [3.5, 843.0], [3.6, 853.0], [3.7, 855.0], [3.8, 858.0], [3.9, 861.0], [4.0, 870.0], [4.1, 872.0], [4.2, 875.0], [4.3, 882.0], [4.4, 882.0], [4.5, 892.0], [4.6, 903.0], [4.7, 905.0], [4.8, 919.0], [4.9, 925.0], [5.0, 933.0], [5.1, 945.0], [5.2, 962.0], [5.3, 986.0], [5.4, 1003.0], [5.5, 1011.0], [5.6, 1011.0], [5.7, 1022.0], [5.8, 1023.0], [5.9, 1076.0], [6.0, 1100.0], [6.1, 1104.0], [6.2, 1113.0], [6.3, 1125.0], [6.4, 1131.0], [6.5, 1153.0], [6.6, 1156.0], [6.7, 1165.0], [6.8, 1195.0], [6.9, 1233.0], [7.0, 1253.0], [7.1, 1269.0], [7.2, 1281.0], [7.3, 1295.0], [7.4, 1298.0], [7.5, 1305.0], [7.6, 1321.0], [7.7, 1348.0], [7.8, 1358.0], [7.9, 1368.0], [8.0, 1384.0], [8.1, 1396.0], [8.2, 1418.0], [8.3, 1481.0], [8.4, 1516.0], [8.5, 1563.0], [8.6, 1563.0], [8.7, 1588.0], [8.8, 1604.0], [8.9, 1711.0], [9.0, 1819.0], [9.1, 1828.0], [9.2, 1828.0], [9.3, 1834.0], [9.4, 1847.0], [9.5, 1879.0], [9.6, 1881.0], [9.7, 1884.0], [9.8, 1884.0], [9.9, 1895.0], [10.0, 1905.0], [10.1, 1905.0], [10.2, 1905.0], [10.3, 1924.0], [10.4, 1964.0], [10.5, 1977.0], [10.6, 1989.0], [10.7, 1999.0], [10.8, 2098.0], [10.9, 2099.0], [11.0, 2121.0], [11.1, 2121.0], [11.2, 2122.0], [11.3, 2129.0], [11.4, 2130.0], [11.5, 2130.0], [11.6, 2149.0], [11.7, 2176.0], [11.8, 2176.0], [11.9, 2176.0], [12.0, 2186.0], [12.1, 2188.0], [12.2, 2199.0], [12.3, 2218.0], [12.4, 2224.0], [12.5, 2225.0], [12.6, 2226.0], [12.7, 2236.0], [12.8, 2245.0], [12.9, 2246.0], [13.0, 2248.0], [13.1, 2250.0], [13.2, 2262.0], [13.3, 2289.0], [13.4, 2308.0], [13.5, 2316.0], [13.6, 2344.0], [13.7, 2355.0], [13.8, 2355.0], [13.9, 2356.0], [14.0, 2356.0], [14.1, 2369.0], [14.2, 2372.0], [14.3, 2374.0], [14.4, 2377.0], [14.5, 2377.0], [14.6, 2384.0], [14.7, 2394.0], [14.8, 2409.0], [14.9, 2409.0], [15.0, 2409.0], [15.1, 2410.0], [15.2, 2410.0], [15.3, 2411.0], [15.4, 2430.0], [15.5, 2453.0], [15.6, 2454.0], [15.7, 2454.0], [15.8, 2456.0], [15.9, 2457.0], [16.0, 2457.0], [16.1, 2458.0], [16.2, 2459.0], [16.3, 2468.0], [16.4, 2469.0], [16.5, 2470.0], [16.6, 2473.0], [16.7, 2481.0], [16.8, 2481.0], [16.9, 2516.0], [17.0, 2529.0], [17.1, 2549.0], [17.2, 2558.0], [17.3, 2559.0], [17.4, 2559.0], [17.5, 2559.0], [17.6, 2564.0], [17.7, 2588.0], [17.8, 2589.0], [17.9, 2590.0], [18.0, 2591.0], [18.1, 2593.0], [18.2, 2605.0], [18.3, 2614.0], [18.4, 2617.0], [18.5, 2617.0], [18.6, 2617.0], [18.7, 2619.0], [18.8, 2622.0], [18.9, 2622.0], [19.0, 2623.0], [19.1, 2628.0], [19.2, 2637.0], [19.3, 2649.0], [19.4, 2657.0], [19.5, 2662.0], [19.6, 2670.0], [19.7, 2671.0], [19.8, 2684.0], [19.9, 2684.0], [20.0, 2685.0], [20.1, 2685.0], [20.2, 2685.0], [20.3, 2692.0], [20.4, 2704.0], [20.5, 2705.0], [20.6, 2726.0], [20.7, 2727.0], [20.8, 2727.0], [20.9, 2728.0], [21.0, 2731.0], [21.1, 2738.0], [21.2, 2739.0], [21.3, 2744.0], [21.4, 2746.0], [21.5, 2747.0], [21.6, 2753.0], [21.7, 2755.0], [21.8, 2762.0], [21.9, 2764.0], [22.0, 2764.0], [22.1, 2764.0], [22.2, 2765.0], [22.3, 2765.0], [22.4, 2767.0], [22.5, 2774.0], [22.6, 2785.0], [22.7, 2785.0], [22.8, 2786.0], [22.9, 2787.0], [23.0, 2789.0], [23.1, 2792.0], [23.2, 2792.0], [23.3, 2792.0], [23.4, 2793.0], [23.5, 2794.0], [23.6, 2795.0], [23.7, 2796.0], [23.8, 2806.0], [23.9, 2807.0], [24.0, 2812.0], [24.1, 2815.0], [24.2, 2828.0], [24.3, 2836.0], [24.4, 2859.0], [24.5, 2862.0], [24.6, 2863.0], [24.7, 2864.0], [24.8, 2866.0], [24.9, 2866.0], [25.0, 2867.0], [25.1, 2867.0], [25.2, 2867.0], [25.3, 2867.0], [25.4, 2867.0], [25.5, 2868.0], [25.6, 2868.0], [25.7, 2868.0], [25.8, 2868.0], [25.9, 2868.0], [26.0, 2868.0], [26.1, 2869.0], [26.2, 2869.0], [26.3, 2869.0], [26.4, 2869.0], [26.5, 2869.0], [26.6, 2870.0], [26.7, 2870.0], [26.8, 2871.0], [26.9, 2871.0], [27.0, 2875.0], [27.1, 2879.0], [27.2, 2883.0], [27.3, 2884.0], [27.4, 2888.0], [27.5, 2891.0], [27.6, 2892.0], [27.7, 2898.0], [27.8, 2898.0], [27.9, 2898.0], [28.0, 2899.0], [28.1, 2915.0], [28.2, 2922.0], [28.3, 2931.0], [28.4, 2931.0], [28.5, 2933.0], [28.6, 2935.0], [28.7, 2936.0], [28.8, 2936.0], [28.9, 2937.0], [29.0, 2937.0], [29.1, 2938.0], [29.2, 2940.0], [29.3, 2940.0], [29.4, 2944.0], [29.5, 2945.0], [29.6, 2946.0], [29.7, 2946.0], [29.8, 2946.0], [29.9, 2957.0], [30.0, 2963.0], [30.1, 2969.0], [30.2, 2969.0], [30.3, 2969.0], [30.4, 2969.0], [30.5, 2969.0], [30.6, 2969.0], [30.7, 2969.0], [30.8, 2970.0], [30.9, 2970.0], [31.0, 2970.0], [31.1, 2971.0], [31.2, 2971.0], [31.3, 2976.0], [31.4, 2977.0], [31.5, 2981.0], [31.6, 2992.0], [31.7, 2993.0], [31.8, 2995.0], [31.9, 3002.0], [32.0, 3004.0], [32.1, 3004.0], [32.2, 3005.0], [32.3, 3031.0], [32.4, 3032.0], [32.5, 3036.0], [32.6, 3036.0], [32.7, 3037.0], [32.8, 3039.0], [32.9, 3046.0], [33.0, 3057.0], [33.1, 3065.0], [33.2, 3067.0], [33.3, 3071.0], [33.4, 3072.0], [33.5, 3072.0], [33.6, 3072.0], [33.7, 3077.0], [33.8, 3083.0], [33.9, 3083.0], [34.0, 3083.0], [34.1, 3085.0], [34.2, 3089.0], [34.3, 3099.0], [34.4, 3102.0], [34.5, 3111.0], [34.6, 3123.0], [34.7, 3124.0], [34.8, 3125.0], [34.9, 3150.0], [35.0, 3150.0], [35.1, 3151.0], [35.2, 3153.0], [35.3, 3158.0], [35.4, 3166.0], [35.5, 3167.0], [35.6, 3167.0], [35.7, 3168.0], [35.8, 3168.0], [35.9, 3169.0], [36.0, 3169.0], [36.1, 3169.0], [36.2, 3169.0], [36.3, 3170.0], [36.4, 3170.0], [36.5, 3170.0], [36.6, 3173.0], [36.7, 3173.0], [36.8, 3174.0], [36.9, 3175.0], [37.0, 3184.0], [37.1, 3184.0], [37.2, 3186.0], [37.3, 3186.0], [37.4, 3186.0], [37.5, 3187.0], [37.6, 3188.0], [37.7, 3190.0], [37.8, 3201.0], [37.9, 3202.0], [38.0, 3203.0], [38.1, 3219.0], [38.2, 3220.0], [38.3, 3220.0], [38.4, 3224.0], [38.5, 3224.0], [38.6, 3225.0], [38.7, 3225.0], [38.8, 3230.0], [38.9, 3231.0], [39.0, 3235.0], [39.1, 3246.0], [39.2, 3246.0], [39.3, 3257.0], [39.4, 3258.0], [39.5, 3280.0], [39.6, 3282.0], [39.7, 3293.0], [39.8, 3298.0], [39.9, 3299.0], [40.0, 3301.0], [40.1, 3302.0], [40.2, 3302.0], [40.3, 3309.0], [40.4, 3312.0], [40.5, 3314.0], [40.6, 3317.0], [40.7, 3318.0], [40.8, 3324.0], [40.9, 3378.0], [41.0, 3385.0], [41.1, 3386.0], [41.2, 3386.0], [41.3, 3386.0], [41.4, 3386.0], [41.5, 3386.0], [41.6, 3401.0], [41.7, 3420.0], [41.8, 3436.0], [41.9, 3453.0], [42.0, 3455.0], [42.1, 3457.0], [42.2, 3458.0], [42.3, 3459.0], [42.4, 3460.0], [42.5, 3522.0], [42.6, 3523.0], [42.7, 3535.0], [42.8, 3536.0], [42.9, 3536.0], [43.0, 3537.0], [43.1, 3537.0], [43.2, 3552.0], [43.3, 3552.0], [43.4, 3553.0], [43.5, 3554.0], [43.6, 3558.0], [43.7, 3582.0], [43.8, 3624.0], [43.9, 3651.0], [44.0, 3652.0], [44.1, 3653.0], [44.2, 3656.0], [44.3, 3656.0], [44.4, 3666.0], [44.5, 3668.0], [44.6, 3668.0], [44.7, 3669.0], [44.8, 3669.0], [44.9, 3669.0], [45.0, 3669.0], [45.1, 3669.0], [45.2, 3670.0], [45.3, 3670.0], [45.4, 3671.0], [45.5, 3671.0], [45.6, 3671.0], [45.7, 3682.0], [45.8, 3682.0], [45.9, 3683.0], [46.0, 3685.0], [46.1, 3685.0], [46.2, 3686.0], [46.3, 3686.0], [46.4, 3686.0], [46.5, 3686.0], [46.6, 3687.0], [46.7, 3687.0], [46.8, 3687.0], [46.9, 3687.0], [47.0, 3688.0], [47.1, 3688.0], [47.2, 3689.0], [47.3, 3691.0], [47.4, 3703.0], [47.5, 3708.0], [47.6, 3747.0], [47.7, 3761.0], [47.8, 3761.0], [47.9, 3761.0], [48.0, 3763.0], [48.1, 3764.0], [48.2, 3764.0], [48.3, 3765.0], [48.4, 3766.0], [48.5, 3769.0], [48.6, 3771.0], [48.7, 3774.0], [48.8, 3783.0], [48.9, 3788.0], [49.0, 3788.0], [49.1, 3788.0], [49.2, 3788.0], [49.3, 3788.0], [49.4, 3789.0], [49.5, 3799.0], [49.6, 3799.0], [49.7, 3799.0], [49.8, 3800.0], [49.9, 3800.0], [50.0, 3800.0], [50.1, 3800.0], [50.2, 3800.0], [50.3, 3801.0], [50.4, 3802.0], [50.5, 3804.0], [50.6, 3805.0], [50.7, 3805.0], [50.8, 3808.0], [50.9, 3809.0], [51.0, 3809.0], [51.1, 3811.0], [51.2, 3812.0], [51.3, 3812.0], [51.4, 3822.0], [51.5, 3822.0], [51.6, 3824.0], [51.7, 3826.0], [51.8, 3845.0], [51.9, 3846.0], [52.0, 3850.0], [52.1, 3851.0], [52.2, 3852.0], [52.3, 3852.0], [52.4, 3852.0], [52.5, 3854.0], [52.6, 3854.0], [52.7, 3854.0], [52.8, 3855.0], [52.9, 3855.0], [53.0, 3856.0], [53.1, 3856.0], [53.2, 3858.0], [53.3, 3858.0], [53.4, 3859.0], [53.5, 3859.0], [53.6, 3859.0], [53.7, 3860.0], [53.8, 3860.0], [53.9, 3860.0], [54.0, 3861.0], [54.1, 3861.0], [54.2, 3861.0], [54.3, 3861.0], [54.4, 3861.0], [54.5, 3862.0], [54.6, 3862.0], [54.7, 3863.0], [54.8, 3864.0], [54.9, 3869.0], [55.0, 3882.0], [55.1, 3883.0], [55.2, 3884.0], [55.3, 3890.0], [55.4, 3891.0], [55.5, 3891.0], [55.6, 3891.0], [55.7, 3891.0], [55.8, 3891.0], [55.9, 3891.0], [56.0, 3891.0], [56.1, 3893.0], [56.2, 3900.0], [56.3, 3916.0], [56.4, 3920.0], [56.5, 3922.0], [56.6, 3928.0], [56.7, 3940.0], [56.8, 3941.0], [56.9, 3942.0], [57.0, 3944.0], [57.1, 3955.0], [57.2, 3957.0], [57.3, 3961.0], [57.4, 3969.0], [57.5, 3969.0], [57.6, 3970.0], [57.7, 3970.0], [57.8, 3971.0], [57.9, 3971.0], [58.0, 3972.0], [58.1, 3972.0], [58.2, 3972.0], [58.3, 3972.0], [58.4, 3973.0], [58.5, 3973.0], [58.6, 3973.0], [58.7, 3973.0], [58.8, 3973.0], [58.9, 3974.0], [59.0, 3976.0], [59.1, 3980.0], [59.2, 3981.0], [59.3, 3981.0], [59.4, 3984.0], [59.5, 3984.0], [59.6, 3984.0], [59.7, 3984.0], [59.8, 3984.0], [59.9, 3985.0], [60.0, 3985.0], [60.1, 3986.0], [60.2, 3991.0], [60.3, 3991.0], [60.4, 3992.0], [60.5, 3993.0], [60.6, 3993.0], [60.7, 3993.0], [60.8, 3993.0], [60.9, 3993.0], [61.0, 3993.0], [61.1, 3994.0], [61.2, 3994.0], [61.3, 3994.0], [61.4, 3994.0], [61.5, 3996.0], [61.6, 3996.0], [61.7, 3996.0], [61.8, 3996.0], [61.9, 3996.0], [62.0, 3996.0], [62.1, 3997.0], [62.2, 3997.0], [62.3, 3997.0], [62.4, 3997.0], [62.5, 3999.0], [62.6, 4000.0], [62.7, 4000.0], [62.8, 4001.0], [62.9, 4001.0], [63.0, 4002.0], [63.1, 4006.0], [63.2, 4012.0], [63.3, 4026.0], [63.4, 4026.0], [63.5, 4027.0], [63.6, 4044.0], [63.7, 4046.0], [63.8, 4061.0], [63.9, 4063.0], [64.0, 4064.0], [64.1, 4064.0], [64.2, 4065.0], [64.3, 4065.0], [64.4, 4066.0], [64.5, 4067.0], [64.6, 4067.0], [64.7, 4067.0], [64.8, 4068.0], [64.9, 4068.0], [65.0, 4068.0], [65.1, 4068.0], [65.2, 4070.0], [65.3, 4074.0], [65.4, 4092.0], [65.5, 4092.0], [65.6, 4093.0], [65.7, 4093.0], [65.8, 4093.0], [65.9, 4094.0], [66.0, 4094.0], [66.1, 4094.0], [66.2, 4094.0], [66.3, 4094.0], [66.4, 4094.0], [66.5, 4095.0], [66.6, 4095.0], [66.7, 4095.0], [66.8, 4096.0], [66.9, 4096.0], [67.0, 4096.0], [67.1, 4098.0], [67.2, 4104.0], [67.3, 4104.0], [67.4, 4105.0], [67.5, 4105.0], [67.6, 4105.0], [67.7, 4105.0], [67.8, 4107.0], [67.9, 4118.0], [68.0, 4119.0], [68.1, 4126.0], [68.2, 4127.0], [68.3, 4128.0], [68.4, 4128.0], [68.5, 4128.0], [68.6, 4149.0], [68.7, 4149.0], [68.8, 4155.0], [68.9, 4163.0], [69.0, 4164.0], [69.1, 4164.0], [69.2, 4164.0], [69.3, 4166.0], [69.4, 4168.0], [69.5, 4168.0], [69.6, 4169.0], [69.7, 4169.0], [69.8, 4181.0], [69.9, 4182.0], [70.0, 4184.0], [70.1, 4188.0], [70.2, 4188.0], [70.3, 4191.0], [70.4, 4191.0], [70.5, 4191.0], [70.6, 4191.0], [70.7, 4192.0], [70.8, 4193.0], [70.9, 4193.0], [71.0, 4194.0], [71.1, 4194.0], [71.2, 4195.0], [71.3, 4195.0], [71.4, 4195.0], [71.5, 4195.0], [71.6, 4195.0], [71.7, 4196.0], [71.8, 4196.0], [71.9, 4197.0], [72.0, 4197.0], [72.1, 4197.0], [72.2, 4197.0], [72.3, 4197.0], [72.4, 4198.0], [72.5, 4198.0], [72.6, 4198.0], [72.7, 4198.0], [72.8, 4198.0], [72.9, 4198.0], [73.0, 4198.0], [73.1, 4199.0], [73.2, 4199.0], [73.3, 4199.0], [73.4, 4199.0], [73.5, 4199.0], [73.6, 4199.0], [73.7, 4199.0], [73.8, 4199.0], [73.9, 4200.0], [74.0, 4200.0], [74.1, 4202.0], [74.2, 4203.0], [74.3, 4203.0], [74.4, 4203.0], [74.5, 4204.0], [74.6, 4204.0], [74.7, 4204.0], [74.8, 4204.0], [74.9, 4206.0], [75.0, 4217.0], [75.1, 4218.0], [75.2, 4219.0], [75.3, 4219.0], [75.4, 4222.0], [75.5, 4234.0], [75.6, 4255.0], [75.7, 4265.0], [75.8, 4266.0], [75.9, 4266.0], [76.0, 4267.0], [76.1, 4268.0], [76.2, 4269.0], [76.3, 4270.0], [76.4, 4270.0], [76.5, 4270.0], [76.6, 4271.0], [76.7, 4271.0], [76.8, 4271.0], [76.9, 4272.0], [77.0, 4277.0], [77.1, 4278.0], [77.2, 4290.0], [77.3, 4290.0], [77.4, 4290.0], [77.5, 4291.0], [77.6, 4292.0], [77.7, 4293.0], [77.8, 4297.0], [77.9, 4298.0], [78.0, 4298.0], [78.1, 4298.0], [78.2, 4299.0], [78.3, 4299.0], [78.4, 4299.0], [78.5, 4299.0], [78.6, 4299.0], [78.7, 4299.0], [78.8, 4299.0], [78.9, 4299.0], [79.0, 4299.0], [79.1, 4299.0], [79.2, 4299.0], [79.3, 4299.0], [79.4, 4300.0], [79.5, 4300.0], [79.6, 4300.0], [79.7, 4300.0], [79.8, 4300.0], [79.9, 4300.0], [80.0, 4300.0], [80.1, 4300.0], [80.2, 4300.0], [80.3, 4300.0], [80.4, 4300.0], [80.5, 4300.0], [80.6, 4300.0], [80.7, 4301.0], [80.8, 4301.0], [80.9, 4301.0], [81.0, 4301.0], [81.1, 4301.0], [81.2, 4301.0], [81.3, 4301.0], [81.4, 4301.0], [81.5, 4302.0], [81.6, 4302.0], [81.7, 4318.0], [81.8, 4318.0], [81.9, 4318.0], [82.0, 4318.0], [82.1, 4319.0], [82.2, 4319.0], [82.3, 4319.0], [82.4, 4319.0], [82.5, 4319.0], [82.6, 4319.0], [82.7, 4319.0], [82.8, 4320.0], [82.9, 4347.0], [83.0, 4348.0], [83.1, 4351.0], [83.2, 4352.0], [83.3, 4352.0], [83.4, 4352.0], [83.5, 4352.0], [83.6, 4352.0], [83.7, 4352.0], [83.8, 4353.0], [83.9, 4366.0], [84.0, 4367.0], [84.1, 4372.0], [84.2, 4372.0], [84.3, 4372.0], [84.4, 4378.0], [84.5, 4378.0], [84.6, 4380.0], [84.7, 4380.0], [84.8, 4381.0], [84.9, 4381.0], [85.0, 4381.0], [85.1, 4392.0], [85.2, 4392.0], [85.3, 4392.0], [85.4, 4393.0], [85.5, 4393.0], [85.6, 4393.0], [85.7, 4394.0], [85.8, 4394.0], [85.9, 4395.0], [86.0, 4396.0], [86.1, 4398.0], [86.2, 4399.0], [86.3, 4399.0], [86.4, 4401.0], [86.5, 4401.0], [86.6, 4401.0], [86.7, 4402.0], [86.8, 4402.0], [86.9, 4403.0], [87.0, 4403.0], [87.1, 4403.0], [87.2, 4404.0], [87.3, 4404.0], [87.4, 4405.0], [87.5, 4405.0], [87.6, 4406.0], [87.7, 4406.0], [87.8, 4406.0], [87.9, 4407.0], [88.0, 4407.0], [88.1, 4407.0], [88.2, 4407.0], [88.3, 4407.0], [88.4, 4408.0], [88.5, 4416.0], [88.6, 4417.0], [88.7, 4417.0], [88.8, 4418.0], [88.9, 4422.0], [89.0, 4424.0], [89.1, 4426.0], [89.2, 4426.0], [89.3, 4427.0], [89.4, 4427.0], [89.5, 4427.0], [89.6, 4428.0], [89.7, 4428.0], [89.8, 4428.0], [89.9, 4428.0], [90.0, 4429.0], [90.1, 4429.0], [90.2, 4429.0], [90.3, 4429.0], [90.4, 4430.0], [90.5, 4430.0], [90.6, 4431.0], [90.7, 4436.0], [90.8, 4436.0], [90.9, 4442.0], [91.0, 4442.0], [91.1, 4443.0], [91.2, 4466.0], [91.3, 4467.0], [91.4, 4468.0], [91.5, 4468.0], [91.6, 4468.0], [91.7, 4469.0], [91.8, 4479.0], [91.9, 4479.0], [92.0, 4480.0], [92.1, 4480.0], [92.2, 4480.0], [92.3, 4481.0], [92.4, 4487.0], [92.5, 4487.0], [92.6, 4488.0], [92.7, 4488.0], [92.8, 4488.0], [92.9, 4488.0], [93.0, 4504.0], [93.1, 4505.0], [93.2, 4505.0], [93.3, 4506.0], [93.4, 4508.0], [93.5, 4519.0], [93.6, 4524.0], [93.7, 4524.0], [93.8, 4527.0], [93.9, 4528.0], [94.0, 4531.0], [94.1, 4567.0], [94.2, 4568.0], [94.3, 4568.0], [94.4, 4569.0], [94.5, 4572.0], [94.6, 4573.0], [94.7, 4573.0], [94.8, 4573.0], [94.9, 4573.0], [95.0, 4573.0], [95.1, 4573.0], [95.2, 4574.0], [95.3, 4574.0], [95.4, 4574.0], [95.5, 4576.0], [95.6, 4576.0], [95.7, 4577.0], [95.8, 4577.0], [95.9, 4577.0], [96.0, 4578.0], [96.1, 4585.0], [96.2, 4586.0], [96.3, 4587.0], [96.4, 4587.0], [96.5, 4588.0], [96.6, 4588.0], [96.7, 4605.0], [96.8, 4605.0], [96.9, 4606.0], [97.0, 4606.0], [97.1, 4606.0], [97.2, 4606.0], [97.3, 4607.0], [97.4, 4639.0], [97.5, 4639.0], [97.6, 4639.0], [97.7, 4640.0], [97.8, 4640.0], [97.9, 4640.0], [98.0, 4681.0], [98.1, 4707.0], [98.2, 4707.0], [98.3, 4707.0], [98.4, 4708.0], [98.5, 4812.0], [98.6, 4812.0], [98.7, 4814.0], [98.8, 4814.0], [98.9, 4873.0], [99.0, 4874.0], [99.1, 4875.0], [99.2, 5135.0], [99.3, 5135.0], [99.4, 5136.0], [99.5, 5136.0], [99.6, 5136.0], [99.7, 5136.0], [99.8, 5137.0], [99.9, 5519.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 228.0, "series": [{"data": [[600.0, 9.0], [700.0, 70.0], [800.0, 71.0], [900.0, 26.0], [1000.0, 19.0], [1100.0, 29.0], [1200.0, 18.0], [1300.0, 24.0], [1400.0, 8.0], [1500.0, 13.0], [1600.0, 3.0], [1700.0, 2.0], [1800.0, 32.0], [1900.0, 26.0], [2000.0, 7.0], [2100.0, 42.0], [2200.0, 36.0], [2300.0, 47.0], [2400.0, 68.0], [2500.0, 44.0], [2600.0, 70.0], [2700.0, 112.0], [2800.0, 139.0], [2900.0, 127.0], [3000.0, 80.0], [3100.0, 111.0], [3200.0, 71.0], [3300.0, 54.0], [3400.0, 29.0], [3500.0, 42.0], [3700.0, 77.0], [3600.0, 119.0], [3800.0, 211.0], [3900.0, 207.0], [4000.0, 152.0], [4300.0, 228.0], [4200.0, 180.0], [4100.0, 217.0], [4400.0, 216.0], [4500.0, 123.0], [4600.0, 43.0], [4800.0, 25.0], [4700.0, 13.0], [5100.0, 22.0], [5500.0, 1.0], [5400.0, 1.0], [5600.0, 3.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 274.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2993.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 274.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2993.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 30.212837837837828, "minX": 1.78003842E12, "maxY": 102.66816143497758, "series": [{"data": [[1.78003842E12, 30.212837837837828], [1.78003848E12, 99.04225352112695], [1.78003854E12, 102.66816143497758]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003854E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 749.0, "minX": 3.0, "maxY": 4429.0, "series": [{"data": [[3.0, 3954.3333333333335], [5.0, 2835.6666666666665], [6.0, 1012.5], [7.0, 2739.6666666666665], [8.0, 879.5], [9.0, 845.75], [10.0, 858.5], [11.0, 2056.0], [12.0, 789.6666666666666], [13.0, 779.75], [14.0, 752.6], [15.0, 2512.9999999999995], [16.0, 755.0], [17.0, 785.5], [18.0, 1630.8], [19.0, 1004.1], [20.0, 1268.6666666666667], [21.0, 1006.6666666666666], [22.0, 1267.6], [23.0, 749.0], [24.0, 1103.0], [25.0, 817.6], [26.0, 1199.909090909091], [27.0, 785.6], [28.0, 878.0], [29.0, 825.9], [30.0, 840.6363636363635], [31.0, 1814.7272727272727], [32.0, 907.1666666666666], [33.0, 909.4166666666667], [34.0, 968.0], [35.0, 986.3333333333334], [36.0, 1072.0], [37.0, 1112.7142857142858], [38.0, 1113.0], [39.0, 1240.2727272727273], [40.0, 1267.0], [41.0, 1256.6153846153843], [42.0, 1316.0], [43.0, 1416.75], [44.0, 1329.3333333333335], [45.0, 1369.2222222222222], [46.0, 1475.272727272727], [47.0, 1311.0], [49.0, 1668.5833333333335], [50.0, 1884.75], [51.0, 1855.0], [52.0, 2043.0], [53.0, 1961.6666666666667], [54.0, 2015.0], [55.0, 2067.090909090909], [57.0, 2099.0], [59.0, 2147.9411764705883], [58.0, 4429.0], [61.0, 3748.4687500000005], [62.0, 2192.583333333333], [64.0, 2414.785714285714], [65.0, 2218.5], [67.0, 2335.7857142857138], [66.0, 3122.5714285714284], [69.0, 2717.285714285714], [70.0, 2309.0], [72.0, 2532.304347826087], [74.0, 2504.1578947368425], [75.0, 2409.0], [78.0, 2570.391304347826], [81.0, 2674.5600000000004], [82.0, 3125.5], [85.0, 2871.548387096774], [86.0, 3125.5], [88.0, 2930.7916666666665], [89.0, 2276.0], [92.0, 3023.7241379310335], [93.0, 2503.0], [96.0, 3027.766666666667], [100.0, 3118.3823529411766], [101.0, 2318.0], [103.0, 4353.0], [105.0, 3580.2463768115936], [106.0, 3836.9425994259955]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[94.29109274563814, 3422.6737067646145]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 106.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 789.3333333333334, "minX": 1.78003842E12, "maxY": 6287.05, "series": [{"data": [[1.78003842E12, 1139.6], [1.78003848E12, 6287.05], [1.78003854E12, 5151.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78003842E12, 789.3333333333334], [1.78003848E12, 4354.666666666667], [1.78003854E12, 3568.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003854E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1006.5709459459466, "minX": 1.78003842E12, "maxY": 3834.704035874441, "series": [{"data": [[1.78003842E12, 1006.5709459459466], [1.78003848E12, 3523.0226576852438], [1.78003854E12, 3834.704035874441]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003854E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1006.5236486486492, "minX": 1.78003842E12, "maxY": 3834.6875934230156, "series": [{"data": [[1.78003842E12, 1006.5236486486492], [1.78003848E12, 3522.997550520513], [1.78003854E12, 3834.6875934230156]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003854E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.040358744394618846, "minX": 1.78003842E12, "maxY": 0.22972972972972946, "series": [{"data": [[1.78003842E12, 0.22972972972972946], [1.78003848E12, 0.053888548683404806], [1.78003854E12, 0.040358744394618846]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003854E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 673.0, "minX": 1.78003842E12, "maxY": 5636.0, "series": [{"data": [[1.78003842E12, 1847.0], [1.78003848E12, 5519.0], [1.78003854E12, 5636.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78003842E12, 673.0], [1.78003848E12, 1819.0], [1.78003854E12, 2129.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78003842E12, 1408.2000000000003], [1.78003848E12, 4405.0], [1.78003854E12, 4566.1]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78003842E12, 1847.0], [1.78003848E12, 4639.0], [1.78003854E12, 5136.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78003842E12, 893.5], [1.78003848E12, 3769.0], [1.78003854E12, 3971.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78003842E12, 1581.3], [1.78003848E12, 4481.0], [1.78003854E12, 4607.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003854E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 758.0, "minX": 1.0, "maxY": 4524.0, "series": [{"data": [[32.0, 4094.0], [2.0, 3443.0], [33.0, 3943.0], [34.0, 3004.5], [35.0, 3970.5], [37.0, 3822.0], [36.0, 3689.0], [38.0, 4372.0], [39.0, 3994.0], [41.0, 4067.5], [40.0, 4000.0], [42.0, 4063.5], [43.0, 3762.0], [45.0, 4270.0], [44.0, 4169.0], [3.0, 3453.0], [4.0, 3047.5], [5.0, 2962.5], [12.0, 758.0], [13.0, 1588.0], [16.0, 2369.0], [1.0, 3313.0], [18.0, 2828.0], [21.0, 1405.0], [22.0, 2185.5], [23.0, 3666.0], [24.0, 783.5], [25.0, 1921.5], [26.0, 2410.0], [28.0, 1023.0], [29.0, 1623.0], [30.0, 3223.5], [31.0, 4524.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 45.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 758.0, "minX": 1.0, "maxY": 4524.0, "series": [{"data": [[32.0, 4094.0], [2.0, 3443.0], [33.0, 3943.0], [34.0, 3004.5], [35.0, 3970.5], [37.0, 3822.0], [36.0, 3689.0], [38.0, 4372.0], [39.0, 3994.0], [41.0, 4067.5], [40.0, 4000.0], [42.0, 4063.5], [43.0, 3762.0], [45.0, 4270.0], [44.0, 4169.0], [3.0, 3453.0], [4.0, 3047.5], [5.0, 2962.0], [12.0, 758.0], [13.0, 1588.0], [16.0, 2369.0], [1.0, 3313.0], [18.0, 2828.0], [21.0, 1405.0], [22.0, 2185.5], [23.0, 3666.0], [24.0, 783.5], [25.0, 1921.5], [26.0, 2409.5], [28.0, 1023.0], [29.0, 1623.0], [30.0, 3223.5], [31.0, 4524.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 45.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.766666666666667, "minX": 1.78003842E12, "maxY": 28.15, "series": [{"data": [[1.78003842E12, 5.766666666666667], [1.78003848E12, 28.15], [1.78003854E12, 20.533333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003854E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.933333333333334, "minX": 1.78003842E12, "maxY": 27.216666666666665, "series": [{"data": [[1.78003842E12, 4.933333333333334], [1.78003848E12, 27.216666666666665], [1.78003854E12, 22.3]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003854E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.933333333333334, "minX": 1.78003842E12, "maxY": 27.216666666666665, "series": [{"data": [[1.78003842E12, 4.933333333333334], [1.78003848E12, 27.216666666666665], [1.78003854E12, 22.3]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003854E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.933333333333334, "minX": 1.78003842E12, "maxY": 27.216666666666665, "series": [{"data": [[1.78003842E12, 4.933333333333334], [1.78003848E12, 27.216666666666665], [1.78003854E12, 22.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003854E12, "title": "Total Transactions Per Second"}},
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

