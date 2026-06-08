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
        data: {"result": {"minY": 669.0, "minX": 0.0, "maxY": 5821.0, "series": [{"data": [[0.0, 669.0], [0.1, 671.0], [0.2, 676.0], [0.3, 698.0], [0.4, 701.0], [0.5, 705.0], [0.6, 706.0], [0.7, 710.0], [0.8, 718.0], [0.9, 721.0], [1.0, 748.0], [1.1, 748.0], [1.2, 749.0], [1.3, 750.0], [1.4, 751.0], [1.5, 751.0], [1.6, 751.0], [1.7, 756.0], [1.8, 767.0], [1.9, 769.0], [2.0, 778.0], [2.1, 779.0], [2.2, 785.0], [2.3, 786.0], [2.4, 794.0], [2.5, 797.0], [2.6, 802.0], [2.7, 806.0], [2.8, 810.0], [2.9, 815.0], [3.0, 816.0], [3.1, 827.0], [3.2, 832.0], [3.3, 847.0], [3.4, 861.0], [3.5, 865.0], [3.6, 868.0], [3.7, 876.0], [3.8, 879.0], [3.9, 884.0], [4.0, 889.0], [4.1, 896.0], [4.2, 897.0], [4.3, 907.0], [4.4, 918.0], [4.5, 921.0], [4.6, 922.0], [4.7, 922.0], [4.8, 932.0], [4.9, 937.0], [5.0, 944.0], [5.1, 952.0], [5.2, 966.0], [5.3, 977.0], [5.4, 986.0], [5.5, 995.0], [5.6, 996.0], [5.7, 1002.0], [5.8, 1008.0], [5.9, 1011.0], [6.0, 1013.0], [6.1, 1016.0], [6.2, 1034.0], [6.3, 1041.0], [6.4, 1057.0], [6.5, 1061.0], [6.6, 1093.0], [6.7, 1109.0], [6.8, 1137.0], [6.9, 1209.0], [7.0, 1236.0], [7.1, 1243.0], [7.2, 1260.0], [7.3, 1268.0], [7.4, 1299.0], [7.5, 1301.0], [7.6, 1368.0], [7.7, 1368.0], [7.8, 1425.0], [7.9, 1467.0], [8.0, 1471.0], [8.1, 1483.0], [8.2, 1530.0], [8.3, 1556.0], [8.4, 1623.0], [8.5, 1663.0], [8.6, 1694.0], [8.7, 1706.0], [8.8, 1710.0], [8.9, 1725.0], [9.0, 1768.0], [9.1, 1769.0], [9.2, 1777.0], [9.3, 1804.0], [9.4, 1804.0], [9.5, 1810.0], [9.6, 1843.0], [9.7, 1844.0], [9.8, 1855.0], [9.9, 1882.0], [10.0, 1954.0], [10.1, 1958.0], [10.2, 1958.0], [10.3, 1995.0], [10.4, 2000.0], [10.5, 2002.0], [10.6, 2009.0], [10.7, 2031.0], [10.8, 2035.0], [10.9, 2116.0], [11.0, 2117.0], [11.1, 2152.0], [11.2, 2157.0], [11.3, 2157.0], [11.4, 2157.0], [11.5, 2178.0], [11.6, 2240.0], [11.7, 2247.0], [11.8, 2247.0], [11.9, 2253.0], [12.0, 2260.0], [12.1, 2262.0], [12.2, 2263.0], [12.3, 2267.0], [12.4, 2274.0], [12.5, 2275.0], [12.6, 2286.0], [12.7, 2288.0], [12.8, 2288.0], [12.9, 2314.0], [13.0, 2327.0], [13.1, 2333.0], [13.2, 2339.0], [13.3, 2342.0], [13.4, 2347.0], [13.5, 2348.0], [13.6, 2355.0], [13.7, 2373.0], [13.8, 2374.0], [13.9, 2375.0], [14.0, 2376.0], [14.1, 2382.0], [14.2, 2389.0], [14.3, 2409.0], [14.4, 2433.0], [14.5, 2457.0], [14.6, 2457.0], [14.7, 2462.0], [14.8, 2463.0], [14.9, 2464.0], [15.0, 2464.0], [15.1, 2483.0], [15.2, 2489.0], [15.3, 2503.0], [15.4, 2548.0], [15.5, 2548.0], [15.6, 2548.0], [15.7, 2549.0], [15.8, 2550.0], [15.9, 2557.0], [16.0, 2557.0], [16.1, 2558.0], [16.2, 2558.0], [16.3, 2558.0], [16.4, 2559.0], [16.5, 2559.0], [16.6, 2563.0], [16.7, 2579.0], [16.8, 2579.0], [16.9, 2583.0], [17.0, 2588.0], [17.1, 2589.0], [17.2, 2589.0], [17.3, 2592.0], [17.4, 2595.0], [17.5, 2609.0], [17.6, 2616.0], [17.7, 2636.0], [17.8, 2637.0], [17.9, 2637.0], [18.0, 2640.0], [18.1, 2641.0], [18.2, 2641.0], [18.3, 2656.0], [18.4, 2662.0], [18.5, 2662.0], [18.6, 2662.0], [18.7, 2663.0], [18.8, 2663.0], [18.9, 2666.0], [19.0, 2666.0], [19.1, 2670.0], [19.2, 2670.0], [19.3, 2671.0], [19.4, 2686.0], [19.5, 2693.0], [19.6, 2695.0], [19.7, 2695.0], [19.8, 2705.0], [19.9, 2705.0], [20.0, 2705.0], [20.1, 2710.0], [20.2, 2710.0], [20.3, 2714.0], [20.4, 2715.0], [20.5, 2716.0], [20.6, 2722.0], [20.7, 2730.0], [20.8, 2731.0], [20.9, 2734.0], [21.0, 2734.0], [21.1, 2736.0], [21.2, 2736.0], [21.3, 2736.0], [21.4, 2737.0], [21.5, 2738.0], [21.6, 2746.0], [21.7, 2751.0], [21.8, 2752.0], [21.9, 2759.0], [22.0, 2759.0], [22.1, 2760.0], [22.2, 2760.0], [22.3, 2762.0], [22.4, 2763.0], [22.5, 2763.0], [22.6, 2768.0], [22.7, 2769.0], [22.8, 2781.0], [22.9, 2784.0], [23.0, 2787.0], [23.1, 2787.0], [23.2, 2796.0], [23.3, 2796.0], [23.4, 2799.0], [23.5, 2799.0], [23.6, 2801.0], [23.7, 2801.0], [23.8, 2802.0], [23.9, 2803.0], [24.0, 2803.0], [24.1, 2804.0], [24.2, 2804.0], [24.3, 2805.0], [24.4, 2805.0], [24.5, 2809.0], [24.6, 2820.0], [24.7, 2828.0], [24.8, 2829.0], [24.9, 2832.0], [25.0, 2833.0], [25.1, 2833.0], [25.2, 2838.0], [25.3, 2844.0], [25.4, 2850.0], [25.5, 2860.0], [25.6, 2860.0], [25.7, 2860.0], [25.8, 2863.0], [25.9, 2868.0], [26.0, 2879.0], [26.1, 2883.0], [26.2, 2888.0], [26.3, 2890.0], [26.4, 2893.0], [26.5, 2894.0], [26.6, 2896.0], [26.7, 2896.0], [26.8, 2900.0], [26.9, 2903.0], [27.0, 2910.0], [27.1, 2910.0], [27.2, 2910.0], [27.3, 2918.0], [27.4, 2919.0], [27.5, 2919.0], [27.6, 2924.0], [27.7, 2925.0], [27.8, 2931.0], [27.9, 2932.0], [28.0, 2932.0], [28.1, 2932.0], [28.2, 2933.0], [28.3, 2934.0], [28.4, 2934.0], [28.5, 2934.0], [28.6, 2935.0], [28.7, 2935.0], [28.8, 2936.0], [28.9, 2936.0], [29.0, 2936.0], [29.1, 2937.0], [29.2, 2938.0], [29.3, 2939.0], [29.4, 2939.0], [29.5, 2940.0], [29.6, 2941.0], [29.7, 2941.0], [29.8, 2942.0], [29.9, 2943.0], [30.0, 2943.0], [30.1, 2943.0], [30.2, 2952.0], [30.3, 2952.0], [30.4, 2968.0], [30.5, 2969.0], [30.6, 2970.0], [30.7, 2972.0], [30.8, 2973.0], [30.9, 2974.0], [31.0, 2981.0], [31.1, 2984.0], [31.2, 2984.0], [31.3, 2984.0], [31.4, 2988.0], [31.5, 2988.0], [31.6, 2989.0], [31.7, 2991.0], [31.8, 2991.0], [31.9, 3012.0], [32.0, 3017.0], [32.1, 3027.0], [32.2, 3029.0], [32.3, 3030.0], [32.4, 3031.0], [32.5, 3031.0], [32.6, 3031.0], [32.7, 3031.0], [32.8, 3037.0], [32.9, 3038.0], [33.0, 3038.0], [33.1, 3038.0], [33.2, 3057.0], [33.3, 3057.0], [33.4, 3058.0], [33.5, 3059.0], [33.6, 3066.0], [33.7, 3068.0], [33.8, 3070.0], [33.9, 3071.0], [34.0, 3071.0], [34.1, 3072.0], [34.2, 3073.0], [34.3, 3073.0], [34.4, 3075.0], [34.5, 3078.0], [34.6, 3078.0], [34.7, 3079.0], [34.8, 3081.0], [34.9, 3088.0], [35.0, 3090.0], [35.1, 3090.0], [35.2, 3092.0], [35.3, 3092.0], [35.4, 3093.0], [35.5, 3094.0], [35.6, 3095.0], [35.7, 3101.0], [35.8, 3102.0], [35.9, 3103.0], [36.0, 3113.0], [36.1, 3116.0], [36.2, 3118.0], [36.3, 3120.0], [36.4, 3120.0], [36.5, 3121.0], [36.6, 3139.0], [36.7, 3139.0], [36.8, 3140.0], [36.9, 3141.0], [37.0, 3143.0], [37.1, 3143.0], [37.2, 3143.0], [37.3, 3150.0], [37.4, 3151.0], [37.5, 3155.0], [37.6, 3159.0], [37.7, 3164.0], [37.8, 3182.0], [37.9, 3211.0], [38.0, 3212.0], [38.1, 3213.0], [38.2, 3213.0], [38.3, 3214.0], [38.4, 3214.0], [38.5, 3215.0], [38.6, 3220.0], [38.7, 3225.0], [38.8, 3230.0], [38.9, 3239.0], [39.0, 3246.0], [39.1, 3249.0], [39.2, 3253.0], [39.3, 3286.0], [39.4, 3287.0], [39.5, 3287.0], [39.6, 3288.0], [39.7, 3290.0], [39.8, 3299.0], [39.9, 3316.0], [40.0, 3322.0], [40.1, 3322.0], [40.2, 3322.0], [40.3, 3326.0], [40.4, 3327.0], [40.5, 3328.0], [40.6, 3329.0], [40.7, 3332.0], [40.8, 3336.0], [40.9, 3346.0], [41.0, 3370.0], [41.1, 3380.0], [41.2, 3390.0], [41.3, 3391.0], [41.4, 3402.0], [41.5, 3402.0], [41.6, 3402.0], [41.7, 3403.0], [41.8, 3404.0], [41.9, 3405.0], [42.0, 3405.0], [42.1, 3405.0], [42.2, 3407.0], [42.3, 3408.0], [42.4, 3409.0], [42.5, 3445.0], [42.6, 3445.0], [42.7, 3445.0], [42.8, 3445.0], [42.9, 3446.0], [43.0, 3447.0], [43.1, 3477.0], [43.2, 3480.0], [43.3, 3497.0], [43.4, 3511.0], [43.5, 3512.0], [43.6, 3514.0], [43.7, 3583.0], [43.8, 3583.0], [43.9, 3584.0], [44.0, 3584.0], [44.1, 3584.0], [44.2, 3584.0], [44.3, 3584.0], [44.4, 3584.0], [44.5, 3584.0], [44.6, 3585.0], [44.7, 3586.0], [44.8, 3586.0], [44.9, 3586.0], [45.0, 3586.0], [45.1, 3587.0], [45.2, 3587.0], [45.3, 3599.0], [45.4, 3599.0], [45.5, 3611.0], [45.6, 3664.0], [45.7, 3683.0], [45.8, 3687.0], [45.9, 3687.0], [46.0, 3688.0], [46.1, 3688.0], [46.2, 3710.0], [46.3, 3718.0], [46.4, 3718.0], [46.5, 3718.0], [46.6, 3727.0], [46.7, 3735.0], [46.8, 3753.0], [46.9, 3754.0], [47.0, 3754.0], [47.1, 3754.0], [47.2, 3754.0], [47.3, 3755.0], [47.4, 3755.0], [47.5, 3755.0], [47.6, 3755.0], [47.7, 3755.0], [47.8, 3785.0], [47.9, 3785.0], [48.0, 3786.0], [48.1, 3787.0], [48.2, 3790.0], [48.3, 3790.0], [48.4, 3790.0], [48.5, 3791.0], [48.6, 3798.0], [48.7, 3798.0], [48.8, 3799.0], [48.9, 3811.0], [49.0, 3812.0], [49.1, 3815.0], [49.2, 3829.0], [49.3, 3829.0], [49.4, 3830.0], [49.5, 3840.0], [49.6, 3844.0], [49.7, 3845.0], [49.8, 3845.0], [49.9, 3846.0], [50.0, 3846.0], [50.1, 3846.0], [50.2, 3846.0], [50.3, 3847.0], [50.4, 3862.0], [50.5, 3864.0], [50.6, 3865.0], [50.7, 3865.0], [50.8, 3867.0], [50.9, 3872.0], [51.0, 3873.0], [51.1, 3873.0], [51.2, 3873.0], [51.3, 3873.0], [51.4, 3874.0], [51.5, 3874.0], [51.6, 3876.0], [51.7, 3877.0], [51.8, 3878.0], [51.9, 3881.0], [52.0, 3888.0], [52.1, 3889.0], [52.2, 3890.0], [52.3, 3891.0], [52.4, 3891.0], [52.5, 3892.0], [52.6, 3923.0], [52.7, 3923.0], [52.8, 3924.0], [52.9, 3934.0], [53.0, 3934.0], [53.1, 3935.0], [53.2, 3935.0], [53.3, 3935.0], [53.4, 3936.0], [53.5, 3936.0], [53.6, 3937.0], [53.7, 3937.0], [53.8, 3938.0], [53.9, 3942.0], [54.0, 3942.0], [54.1, 3942.0], [54.2, 3943.0], [54.3, 3943.0], [54.4, 3945.0], [54.5, 3945.0], [54.6, 3946.0], [54.7, 3953.0], [54.8, 3954.0], [54.9, 3954.0], [55.0, 3960.0], [55.1, 3961.0], [55.2, 3963.0], [55.3, 3964.0], [55.4, 3964.0], [55.5, 3964.0], [55.6, 3965.0], [55.7, 3967.0], [55.8, 3968.0], [55.9, 3968.0], [56.0, 3968.0], [56.1, 3969.0], [56.2, 3974.0], [56.3, 3982.0], [56.4, 3982.0], [56.5, 3982.0], [56.6, 3984.0], [56.7, 3985.0], [56.8, 3988.0], [56.9, 3988.0], [57.0, 3991.0], [57.1, 3991.0], [57.2, 3991.0], [57.3, 3991.0], [57.4, 3992.0], [57.5, 3992.0], [57.6, 3993.0], [57.7, 3994.0], [57.8, 3994.0], [57.9, 3994.0], [58.0, 3994.0], [58.1, 3994.0], [58.2, 3995.0], [58.3, 3995.0], [58.4, 3995.0], [58.5, 3995.0], [58.6, 3995.0], [58.7, 3995.0], [58.8, 3995.0], [58.9, 3996.0], [59.0, 3996.0], [59.1, 3996.0], [59.2, 3996.0], [59.3, 3997.0], [59.4, 4011.0], [59.5, 4011.0], [59.6, 4012.0], [59.7, 4012.0], [59.8, 4013.0], [59.9, 4013.0], [60.0, 4013.0], [60.1, 4016.0], [60.2, 4016.0], [60.3, 4017.0], [60.4, 4017.0], [60.5, 4017.0], [60.6, 4017.0], [60.7, 4018.0], [60.8, 4018.0], [60.9, 4018.0], [61.0, 4020.0], [61.1, 4022.0], [61.2, 4022.0], [61.3, 4023.0], [61.4, 4023.0], [61.5, 4031.0], [61.6, 4033.0], [61.7, 4036.0], [61.8, 4037.0], [61.9, 4037.0], [62.0, 4039.0], [62.1, 4039.0], [62.2, 4039.0], [62.3, 4040.0], [62.4, 4042.0], [62.5, 4042.0], [62.6, 4043.0], [62.7, 4043.0], [62.8, 4047.0], [62.9, 4050.0], [63.0, 4051.0], [63.1, 4052.0], [63.2, 4055.0], [63.3, 4056.0], [63.4, 4057.0], [63.5, 4066.0], [63.6, 4068.0], [63.7, 4069.0], [63.8, 4069.0], [63.9, 4078.0], [64.0, 4079.0], [64.1, 4079.0], [64.2, 4080.0], [64.3, 4080.0], [64.4, 4080.0], [64.5, 4081.0], [64.6, 4081.0], [64.7, 4081.0], [64.8, 4081.0], [64.9, 4082.0], [65.0, 4083.0], [65.1, 4083.0], [65.2, 4083.0], [65.3, 4084.0], [65.4, 4084.0], [65.5, 4084.0], [65.6, 4084.0], [65.7, 4084.0], [65.8, 4085.0], [65.9, 4086.0], [66.0, 4087.0], [66.1, 4089.0], [66.2, 4109.0], [66.3, 4127.0], [66.4, 4128.0], [66.5, 4128.0], [66.6, 4128.0], [66.7, 4128.0], [66.8, 4128.0], [66.9, 4131.0], [67.0, 4132.0], [67.1, 4132.0], [67.2, 4132.0], [67.3, 4132.0], [67.4, 4133.0], [67.5, 4133.0], [67.6, 4134.0], [67.7, 4136.0], [67.8, 4136.0], [67.9, 4138.0], [68.0, 4139.0], [68.1, 4139.0], [68.2, 4139.0], [68.3, 4140.0], [68.4, 4144.0], [68.5, 4144.0], [68.6, 4145.0], [68.7, 4145.0], [68.8, 4145.0], [68.9, 4145.0], [69.0, 4146.0], [69.1, 4146.0], [69.2, 4148.0], [69.3, 4148.0], [69.4, 4148.0], [69.5, 4149.0], [69.6, 4149.0], [69.7, 4150.0], [69.8, 4150.0], [69.9, 4151.0], [70.0, 4152.0], [70.1, 4155.0], [70.2, 4156.0], [70.3, 4157.0], [70.4, 4157.0], [70.5, 4158.0], [70.6, 4158.0], [70.7, 4164.0], [70.8, 4164.0], [70.9, 4166.0], [71.0, 4167.0], [71.1, 4167.0], [71.2, 4168.0], [71.3, 4176.0], [71.4, 4177.0], [71.5, 4177.0], [71.6, 4178.0], [71.7, 4185.0], [71.8, 4185.0], [71.9, 4185.0], [72.0, 4185.0], [72.1, 4194.0], [72.2, 4194.0], [72.3, 4195.0], [72.4, 4195.0], [72.5, 4195.0], [72.6, 4195.0], [72.7, 4195.0], [72.8, 4195.0], [72.9, 4196.0], [73.0, 4197.0], [73.1, 4198.0], [73.2, 4198.0], [73.3, 4198.0], [73.4, 4209.0], [73.5, 4212.0], [73.6, 4212.0], [73.7, 4213.0], [73.8, 4213.0], [73.9, 4214.0], [74.0, 4220.0], [74.1, 4221.0], [74.2, 4221.0], [74.3, 4226.0], [74.4, 4227.0], [74.5, 4227.0], [74.6, 4227.0], [74.7, 4227.0], [74.8, 4236.0], [74.9, 4236.0], [75.0, 4236.0], [75.1, 4237.0], [75.2, 4244.0], [75.3, 4245.0], [75.4, 4246.0], [75.5, 4246.0], [75.6, 4246.0], [75.7, 4261.0], [75.8, 4261.0], [75.9, 4262.0], [76.0, 4262.0], [76.1, 4262.0], [76.2, 4266.0], [76.3, 4266.0], [76.4, 4266.0], [76.5, 4267.0], [76.6, 4267.0], [76.7, 4267.0], [76.8, 4267.0], [76.9, 4268.0], [77.0, 4268.0], [77.1, 4268.0], [77.2, 4269.0], [77.3, 4270.0], [77.4, 4274.0], [77.5, 4275.0], [77.6, 4275.0], [77.7, 4275.0], [77.8, 4276.0], [77.9, 4277.0], [78.0, 4277.0], [78.1, 4295.0], [78.2, 4295.0], [78.3, 4295.0], [78.4, 4296.0], [78.5, 4296.0], [78.6, 4296.0], [78.7, 4296.0], [78.8, 4296.0], [78.9, 4297.0], [79.0, 4299.0], [79.1, 4299.0], [79.2, 4300.0], [79.3, 4300.0], [79.4, 4300.0], [79.5, 4301.0], [79.6, 4301.0], [79.7, 4301.0], [79.8, 4301.0], [79.9, 4302.0], [80.0, 4314.0], [80.1, 4317.0], [80.2, 4317.0], [80.3, 4319.0], [80.4, 4320.0], [80.5, 4320.0], [80.6, 4320.0], [80.7, 4320.0], [80.8, 4321.0], [80.9, 4327.0], [81.0, 4328.0], [81.1, 4328.0], [81.2, 4328.0], [81.3, 4328.0], [81.4, 4329.0], [81.5, 4338.0], [81.6, 4339.0], [81.7, 4339.0], [81.8, 4344.0], [81.9, 4344.0], [82.0, 4345.0], [82.1, 4345.0], [82.2, 4346.0], [82.3, 4347.0], [82.4, 4347.0], [82.5, 4360.0], [82.6, 4362.0], [82.7, 4380.0], [82.8, 4380.0], [82.9, 4380.0], [83.0, 4382.0], [83.1, 4388.0], [83.2, 4389.0], [83.3, 4389.0], [83.4, 4390.0], [83.5, 4390.0], [83.6, 4391.0], [83.7, 4391.0], [83.8, 4392.0], [83.9, 4400.0], [84.0, 4400.0], [84.1, 4400.0], [84.2, 4401.0], [84.3, 4401.0], [84.4, 4401.0], [84.5, 4401.0], [84.6, 4401.0], [84.7, 4402.0], [84.8, 4402.0], [84.9, 4402.0], [85.0, 4402.0], [85.1, 4402.0], [85.2, 4402.0], [85.3, 4402.0], [85.4, 4402.0], [85.5, 4402.0], [85.6, 4403.0], [85.7, 4403.0], [85.8, 4403.0], [85.9, 4403.0], [86.0, 4403.0], [86.1, 4403.0], [86.2, 4403.0], [86.3, 4403.0], [86.4, 4403.0], [86.5, 4403.0], [86.6, 4403.0], [86.7, 4404.0], [86.8, 4404.0], [86.9, 4404.0], [87.0, 4405.0], [87.1, 4405.0], [87.2, 4405.0], [87.3, 4406.0], [87.4, 4407.0], [87.5, 4429.0], [87.6, 4437.0], [87.7, 4438.0], [87.8, 4438.0], [87.9, 4438.0], [88.0, 4439.0], [88.1, 4439.0], [88.2, 4439.0], [88.3, 4440.0], [88.4, 4441.0], [88.5, 4441.0], [88.6, 4442.0], [88.7, 4443.0], [88.8, 4443.0], [88.9, 4443.0], [89.0, 4457.0], [89.1, 4458.0], [89.2, 4458.0], [89.3, 4458.0], [89.4, 4459.0], [89.5, 4459.0], [89.6, 4459.0], [89.7, 4462.0], [89.8, 4462.0], [89.9, 4463.0], [90.0, 4466.0], [90.1, 4479.0], [90.2, 4501.0], [90.3, 4502.0], [90.4, 4502.0], [90.5, 4502.0], [90.6, 4503.0], [90.7, 4503.0], [90.8, 4505.0], [90.9, 4505.0], [91.0, 4505.0], [91.1, 4505.0], [91.2, 4506.0], [91.3, 4506.0], [91.4, 4506.0], [91.5, 4506.0], [91.6, 4507.0], [91.7, 4507.0], [91.8, 4507.0], [91.9, 4508.0], [92.0, 4508.0], [92.1, 4511.0], [92.2, 4518.0], [92.3, 4518.0], [92.4, 4519.0], [92.5, 4519.0], [92.6, 4521.0], [92.7, 4534.0], [92.8, 4535.0], [92.9, 4535.0], [93.0, 4536.0], [93.1, 4536.0], [93.2, 4536.0], [93.3, 4536.0], [93.4, 4537.0], [93.5, 4537.0], [93.6, 4538.0], [93.7, 4538.0], [93.8, 4539.0], [93.9, 4539.0], [94.0, 4539.0], [94.1, 4539.0], [94.2, 4540.0], [94.3, 4540.0], [94.4, 4544.0], [94.5, 4545.0], [94.6, 4545.0], [94.7, 4573.0], [94.8, 4596.0], [94.9, 4598.0], [95.0, 4601.0], [95.1, 4611.0], [95.2, 4612.0], [95.3, 4613.0], [95.4, 4613.0], [95.5, 4614.0], [95.6, 4628.0], [95.7, 4628.0], [95.8, 4628.0], [95.9, 4629.0], [96.0, 4629.0], [96.1, 4629.0], [96.2, 4629.0], [96.3, 4629.0], [96.4, 4631.0], [96.5, 4631.0], [96.6, 4631.0], [96.7, 4633.0], [96.8, 4633.0], [96.9, 4633.0], [97.0, 4634.0], [97.1, 4638.0], [97.2, 4650.0], [97.3, 4650.0], [97.4, 4651.0], [97.5, 4651.0], [97.6, 4655.0], [97.7, 4656.0], [97.8, 4666.0], [97.9, 4666.0], [98.0, 4666.0], [98.1, 4666.0], [98.2, 4666.0], [98.3, 4687.0], [98.4, 4700.0], [98.5, 4812.0], [98.6, 4812.0], [98.7, 4812.0], [98.8, 4812.0], [98.9, 4812.0], [99.0, 4813.0], [99.1, 4820.0], [99.2, 4821.0], [99.3, 4821.0], [99.4, 4821.0], [99.5, 4821.0], [99.6, 4822.0], [99.7, 4830.0], [99.8, 5137.0], [99.9, 5533.0], [100.0, 5821.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 237.0, "series": [{"data": [[600.0, 11.0], [700.0, 74.0], [800.0, 54.0], [900.0, 47.0], [1000.0, 32.0], [1100.0, 8.0], [1200.0, 18.0], [1300.0, 12.0], [1400.0, 13.0], [1500.0, 7.0], [1600.0, 8.0], [1700.0, 21.0], [1800.0, 22.0], [1900.0, 13.0], [2000.0, 16.0], [2100.0, 23.0], [2300.0, 47.0], [2200.0, 44.0], [2400.0, 32.0], [2500.0, 73.0], [2600.0, 75.0], [2800.0, 105.0], [2700.0, 125.0], [2900.0, 170.0], [3000.0, 124.0], [3100.0, 71.0], [3200.0, 66.0], [3300.0, 52.0], [3400.0, 63.0], [3500.0, 71.0], [3600.0, 23.0], [3700.0, 89.0], [3800.0, 122.0], [3900.0, 223.0], [4000.0, 225.0], [4100.0, 237.0], [4200.0, 189.0], [4300.0, 157.0], [4400.0, 207.0], [4600.0, 114.0], [4500.0, 157.0], [4800.0, 43.0], [4700.0, 1.0], [5100.0, 4.0], [5500.0, 3.0], [5700.0, 1.0], [5800.0, 1.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3022.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 269.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3022.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 16.900000000000002, "minX": 1.78003854E12, "maxY": 104.05259822560203, "series": [{"data": [[1.7800386E12, 91.01723076923088], [1.78003866E12, 104.05259822560203], [1.78003854E12, 16.900000000000002]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003866E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 744.5, "minX": 2.0, "maxY": 3863.1402805611206, "series": [{"data": [[2.0, 3391.0], [5.0, 2763.75], [6.0, 1074.5], [7.0, 866.0], [8.0, 2016.8333333333333], [9.0, 810.3333333333334], [10.0, 998.0], [11.0, 846.5], [12.0, 2034.25], [13.0, 744.5], [14.0, 1569.8333333333335], [15.0, 747.6666666666667], [16.0, 762.0], [17.0, 749.6666666666667], [18.0, 1575.9090909090908], [19.0, 1058.0], [20.0, 748.5714285714286], [21.0, 1462.3333333333335], [22.0, 778.8571428571429], [23.0, 1113.090909090909], [24.0, 1183.8333333333333], [25.0, 945.9166666666667], [26.0, 855.4285714285714], [27.0, 1038.5], [28.0, 812.1538461538462], [29.0, 872.6666666666666], [30.0, 859.8181818181819], [31.0, 896.5555555555555], [32.0, 2051.6], [33.0, 979.6], [34.0, 915.6153846153845], [35.0, 940.6666666666666], [36.0, 954.25], [37.0, 979.6923076923077], [38.0, 1038.5], [39.0, 1101.2857142857144], [40.0, 1147.5], [41.0, 1323.0], [42.0, 1299.8333333333335], [44.0, 1553.25], [45.0, 1635.8888888888887], [46.0, 1356.5714285714287], [47.0, 1524.5], [48.0, 1789.25], [49.0, 1709.0], [50.0, 1474.2500000000002], [52.0, 1764.857142857143], [54.0, 2151.25], [55.0, 3446.0], [56.0, 1975.272727272727], [58.0, 2302.1333333333328], [59.0, 2231.2222222222217], [60.0, 2598.0], [61.0, 3293.6400000000003], [62.0, 2440.4], [63.0, 2083.25], [65.0, 2435.1249999999995], [67.0, 2404.9999999999995], [68.0, 2381.6666666666665], [70.0, 2540.642857142857], [71.0, 2372.75], [73.0, 2552.157894736842], [74.0, 2389.3333333333335], [77.0, 2833.869565217391], [80.0, 2784.571428571429], [84.0, 2928.041666666666], [86.0, 2832.0], [87.0, 2720.4999999999995], [90.0, 2880.724137931034], [91.0, 1976.0], [94.0, 2767.4375000000005], [98.0, 3031.8529411764707], [99.0, 2348.5], [97.0, 3024.5], [96.0, 3586.0], [102.0, 3109.9999999999995], [103.0, 2868.0], [100.0, 3356.548387096774], [107.0, 3863.1402805611206]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[95.23777710294556, 3435.3337382326176]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 107.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 240.0, "minX": 1.78003854E12, "maxY": 6256.25, "series": [{"data": [[1.7800386E12, 6256.25], [1.78003866E12, 6075.366666666667], [1.78003854E12, 346.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7800386E12, 4333.333333333333], [1.78003866E12, 4208.0], [1.78003854E12, 240.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003866E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 798.1444444444442, "minX": 1.78003854E12, "maxY": 3817.880228136882, "series": [{"data": [[1.7800386E12, 3209.9113846153855], [1.78003866E12, 3817.880228136882], [1.78003854E12, 798.1444444444442]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003866E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 798.0777777777777, "minX": 1.78003854E12, "maxY": 3817.8624841571564, "series": [{"data": [[1.7800386E12, 3209.894153846155], [1.78003866E12, 3817.8624841571564], [1.78003854E12, 798.0777777777777]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003866E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.04562737642585536, "minX": 1.78003854E12, "maxY": 0.5222222222222223, "series": [{"data": [[1.7800386E12, 0.05476923076923084], [1.78003866E12, 0.04562737642585536], [1.78003854E12, 0.5222222222222223]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003866E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 669.0, "minX": 1.78003854E12, "maxY": 5821.0, "series": [{"data": [[1.7800386E12, 5705.0], [1.78003866E12, 5821.0], [1.78003854E12, 1137.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7800386E12, 750.0], [1.78003866E12, 2178.0], [1.78003854E12, 669.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7800386E12, 4504.4], [1.78003866E12, 4501.0], [1.78003854E12, 999.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7800386E12, 4821.0], [1.78003866E12, 4812.0], [1.78003854E12, 1137.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7800386E12, 3164.0], [1.78003866E12, 3995.0], [1.78003854E12, 756.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7800386E12, 4539.0], [1.78003866E12, 4629.0], [1.78003854E12, 1017.8]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003866E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 751.0, "minX": 1.0, "maxY": 4607.5, "series": [{"data": [[32.0, 2939.0], [33.0, 4197.0], [2.0, 2822.0], [35.0, 4221.0], [37.0, 3965.0], [36.0, 4038.0], [39.0, 4227.0], [38.0, 3995.0], [40.0, 4014.5], [41.0, 3991.5], [43.0, 3525.5], [42.0, 3873.0], [44.0, 4043.0], [47.0, 4087.0], [46.0, 4389.0], [3.0, 3081.0], [66.0, 3846.0], [4.0, 3118.0], [73.0, 3935.0], [5.0, 3168.5], [7.0, 751.0], [13.0, 798.0], [14.0, 4437.0], [1.0, 2952.0], [18.0, 1824.0], [19.0, 3215.0], [21.0, 769.0], [22.0, 2262.0], [23.0, 2616.0], [24.0, 2935.5], [25.0, 779.0], [26.0, 1706.0], [28.0, 1709.5], [29.0, 1530.0], [30.0, 3403.5], [31.0, 2933.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[38.0, 4607.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 73.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 751.0, "minX": 1.0, "maxY": 4607.0, "series": [{"data": [[32.0, 2939.0], [33.0, 4197.0], [2.0, 2822.0], [35.0, 4221.0], [37.0, 3965.0], [36.0, 4038.0], [39.0, 4227.0], [38.0, 3995.0], [40.0, 4014.5], [41.0, 3991.5], [43.0, 3525.5], [42.0, 3872.5], [44.0, 4043.0], [47.0, 4087.0], [46.0, 4389.0], [3.0, 3081.0], [66.0, 3846.0], [4.0, 3118.0], [73.0, 3935.0], [5.0, 3168.5], [7.0, 751.0], [13.0, 798.0], [14.0, 4437.0], [1.0, 2952.0], [18.0, 1824.0], [19.0, 3215.0], [21.0, 769.0], [22.0, 2262.0], [23.0, 2616.0], [24.0, 2935.5], [25.0, 779.0], [26.0, 1706.0], [28.0, 1709.5], [29.0, 1530.0], [30.0, 3403.5], [31.0, 2933.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[38.0, 4607.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 73.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.9, "minX": 1.78003854E12, "maxY": 28.466666666666665, "series": [{"data": [[1.7800386E12, 28.466666666666665], [1.78003866E12, 24.516666666666666], [1.78003854E12, 1.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003866E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.78003854E12, "maxY": 27.083333333333332, "series": [{"data": [[1.7800386E12, 27.083333333333332], [1.78003866E12, 26.266666666666666], [1.78003854E12, 1.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.78003866E12, 0.03333333333333333]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003866E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.78003854E12, "maxY": 27.083333333333332, "series": [{"data": [[1.7800386E12, 27.083333333333332], [1.78003866E12, 26.266666666666666], [1.78003854E12, 1.5]], "isOverall": false, "label": "GET STLoad-success", "isController": false}, {"data": [[1.78003866E12, 0.03333333333333333]], "isOverall": false, "label": "GET STLoad-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003866E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.78003854E12, "maxY": 27.083333333333332, "series": [{"data": [[1.7800386E12, 27.083333333333332], [1.78003866E12, 26.266666666666666], [1.78003854E12, 1.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78003866E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003866E12, "title": "Total Transactions Per Second"}},
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

