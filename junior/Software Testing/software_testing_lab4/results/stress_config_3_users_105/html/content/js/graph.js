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
        data: {"result": {"minY": 662.0, "minX": 0.0, "maxY": 5498.0, "series": [{"data": [[0.0, 662.0], [0.1, 669.0], [0.2, 680.0], [0.3, 685.0], [0.4, 695.0], [0.5, 697.0], [0.6, 700.0], [0.7, 705.0], [0.8, 708.0], [0.9, 715.0], [1.0, 717.0], [1.1, 730.0], [1.2, 743.0], [1.3, 747.0], [1.4, 747.0], [1.5, 752.0], [1.6, 752.0], [1.7, 754.0], [1.8, 759.0], [1.9, 762.0], [2.0, 766.0], [2.1, 769.0], [2.2, 774.0], [2.3, 781.0], [2.4, 787.0], [2.5, 789.0], [2.6, 790.0], [2.7, 794.0], [2.8, 795.0], [2.9, 798.0], [3.0, 807.0], [3.1, 808.0], [3.2, 813.0], [3.3, 818.0], [3.4, 822.0], [3.5, 823.0], [3.6, 851.0], [3.7, 853.0], [3.8, 854.0], [3.9, 862.0], [4.0, 864.0], [4.1, 875.0], [4.2, 878.0], [4.3, 889.0], [4.4, 896.0], [4.5, 903.0], [4.6, 904.0], [4.7, 905.0], [4.8, 912.0], [4.9, 918.0], [5.0, 925.0], [5.1, 932.0], [5.2, 936.0], [5.3, 944.0], [5.4, 946.0], [5.5, 955.0], [5.6, 967.0], [5.7, 982.0], [5.8, 995.0], [5.9, 1008.0], [6.0, 1010.0], [6.1, 1032.0], [6.2, 1057.0], [6.3, 1058.0], [6.4, 1060.0], [6.5, 1071.0], [6.6, 1092.0], [6.7, 1113.0], [6.8, 1136.0], [6.9, 1196.0], [7.0, 1225.0], [7.1, 1242.0], [7.2, 1265.0], [7.3, 1298.0], [7.4, 1309.0], [7.5, 1330.0], [7.6, 1336.0], [7.7, 1357.0], [7.8, 1363.0], [7.9, 1378.0], [8.0, 1386.0], [8.1, 1417.0], [8.2, 1437.0], [8.3, 1442.0], [8.4, 1481.0], [8.5, 1535.0], [8.6, 1571.0], [8.7, 1572.0], [8.8, 1614.0], [8.9, 1635.0], [9.0, 1636.0], [9.1, 1663.0], [9.2, 1706.0], [9.3, 1737.0], [9.4, 1793.0], [9.5, 1854.0], [9.6, 1854.0], [9.7, 1886.0], [9.8, 1917.0], [9.9, 1947.0], [10.0, 1970.0], [10.1, 1985.0], [10.2, 2004.0], [10.3, 2018.0], [10.4, 2073.0], [10.5, 2076.0], [10.6, 2095.0], [10.7, 2095.0], [10.8, 2095.0], [10.9, 2101.0], [11.0, 2108.0], [11.1, 2108.0], [11.2, 2108.0], [11.3, 2110.0], [11.4, 2132.0], [11.5, 2142.0], [11.6, 2143.0], [11.7, 2146.0], [11.8, 2148.0], [11.9, 2149.0], [12.0, 2149.0], [12.1, 2162.0], [12.2, 2179.0], [12.3, 2180.0], [12.4, 2214.0], [12.5, 2229.0], [12.6, 2241.0], [12.7, 2242.0], [12.8, 2243.0], [12.9, 2244.0], [13.0, 2244.0], [13.1, 2244.0], [13.2, 2251.0], [13.3, 2251.0], [13.4, 2263.0], [13.5, 2268.0], [13.6, 2274.0], [13.7, 2274.0], [13.8, 2275.0], [13.9, 2283.0], [14.0, 2288.0], [14.1, 2298.0], [14.2, 2308.0], [14.3, 2314.0], [14.4, 2315.0], [14.5, 2316.0], [14.6, 2317.0], [14.7, 2317.0], [14.8, 2341.0], [14.9, 2342.0], [15.0, 2351.0], [15.1, 2357.0], [15.2, 2376.0], [15.3, 2382.0], [15.4, 2383.0], [15.5, 2391.0], [15.6, 2403.0], [15.7, 2405.0], [15.8, 2412.0], [15.9, 2438.0], [16.0, 2457.0], [16.1, 2458.0], [16.2, 2462.0], [16.3, 2471.0], [16.4, 2476.0], [16.5, 2488.0], [16.6, 2502.0], [16.7, 2518.0], [16.8, 2522.0], [16.9, 2526.0], [17.0, 2526.0], [17.1, 2529.0], [17.2, 2529.0], [17.3, 2529.0], [17.4, 2530.0], [17.5, 2540.0], [17.6, 2541.0], [17.7, 2550.0], [17.8, 2553.0], [17.9, 2558.0], [18.0, 2559.0], [18.1, 2559.0], [18.2, 2560.0], [18.3, 2560.0], [18.4, 2560.0], [18.5, 2560.0], [18.6, 2560.0], [18.7, 2560.0], [18.8, 2560.0], [18.9, 2560.0], [19.0, 2561.0], [19.1, 2567.0], [19.2, 2589.0], [19.3, 2590.0], [19.4, 2591.0], [19.5, 2599.0], [19.6, 2599.0], [19.7, 2607.0], [19.8, 2633.0], [19.9, 2638.0], [20.0, 2653.0], [20.1, 2654.0], [20.2, 2655.0], [20.3, 2657.0], [20.4, 2658.0], [20.5, 2661.0], [20.6, 2662.0], [20.7, 2662.0], [20.8, 2663.0], [20.9, 2663.0], [21.0, 2664.0], [21.1, 2668.0], [21.2, 2671.0], [21.3, 2674.0], [21.4, 2684.0], [21.5, 2686.0], [21.6, 2694.0], [21.7, 2706.0], [21.8, 2710.0], [21.9, 2714.0], [22.0, 2721.0], [22.1, 2725.0], [22.2, 2726.0], [22.3, 2735.0], [22.4, 2736.0], [22.5, 2745.0], [22.6, 2748.0], [22.7, 2752.0], [22.8, 2756.0], [22.9, 2764.0], [23.0, 2764.0], [23.1, 2764.0], [23.2, 2764.0], [23.3, 2765.0], [23.4, 2765.0], [23.5, 2765.0], [23.6, 2766.0], [23.7, 2766.0], [23.8, 2766.0], [23.9, 2768.0], [24.0, 2768.0], [24.1, 2768.0], [24.2, 2771.0], [24.3, 2771.0], [24.4, 2775.0], [24.5, 2775.0], [24.6, 2776.0], [24.7, 2783.0], [24.8, 2787.0], [24.9, 2789.0], [25.0, 2793.0], [25.1, 2793.0], [25.2, 2794.0], [25.3, 2794.0], [25.4, 2800.0], [25.5, 2803.0], [25.6, 2817.0], [25.7, 2818.0], [25.8, 2827.0], [25.9, 2827.0], [26.0, 2828.0], [26.1, 2832.0], [26.2, 2850.0], [26.3, 2850.0], [26.4, 2856.0], [26.5, 2857.0], [26.6, 2857.0], [26.7, 2858.0], [26.8, 2859.0], [26.9, 2862.0], [27.0, 2865.0], [27.1, 2866.0], [27.2, 2866.0], [27.3, 2866.0], [27.4, 2866.0], [27.5, 2867.0], [27.6, 2867.0], [27.7, 2867.0], [27.8, 2868.0], [27.9, 2868.0], [28.0, 2876.0], [28.1, 2876.0], [28.2, 2877.0], [28.3, 2878.0], [28.4, 2886.0], [28.5, 2889.0], [28.6, 2904.0], [28.7, 2906.0], [28.8, 2907.0], [28.9, 2913.0], [29.0, 2914.0], [29.1, 2915.0], [29.2, 2915.0], [29.3, 2916.0], [29.4, 2917.0], [29.5, 2918.0], [29.6, 2918.0], [29.7, 2919.0], [29.8, 2920.0], [29.9, 2922.0], [30.0, 2922.0], [30.1, 2923.0], [30.2, 2926.0], [30.3, 2928.0], [30.4, 2929.0], [30.5, 2929.0], [30.6, 2930.0], [30.7, 2933.0], [30.8, 2933.0], [30.9, 2936.0], [31.0, 2937.0], [31.1, 2943.0], [31.2, 2943.0], [31.3, 2953.0], [31.4, 2954.0], [31.5, 2963.0], [31.6, 2963.0], [31.7, 2964.0], [31.8, 2965.0], [31.9, 2968.0], [32.0, 2969.0], [32.1, 2969.0], [32.2, 2992.0], [32.3, 2992.0], [32.4, 2992.0], [32.5, 2992.0], [32.6, 2993.0], [32.7, 2995.0], [32.8, 2995.0], [32.9, 2996.0], [33.0, 2997.0], [33.1, 3006.0], [33.2, 3007.0], [33.3, 3013.0], [33.4, 3016.0], [33.5, 3016.0], [33.6, 3026.0], [33.7, 3033.0], [33.8, 3033.0], [33.9, 3033.0], [34.0, 3034.0], [34.1, 3036.0], [34.2, 3036.0], [34.3, 3036.0], [34.4, 3037.0], [34.5, 3037.0], [34.6, 3038.0], [34.7, 3040.0], [34.8, 3041.0], [34.9, 3063.0], [35.0, 3063.0], [35.1, 3069.0], [35.2, 3070.0], [35.3, 3070.0], [35.4, 3071.0], [35.5, 3071.0], [35.6, 3071.0], [35.7, 3071.0], [35.8, 3072.0], [35.9, 3072.0], [36.0, 3072.0], [36.1, 3094.0], [36.2, 3111.0], [36.3, 3111.0], [36.4, 3142.0], [36.5, 3142.0], [36.6, 3147.0], [36.7, 3151.0], [36.8, 3152.0], [36.9, 3158.0], [37.0, 3167.0], [37.1, 3174.0], [37.2, 3175.0], [37.3, 3190.0], [37.4, 3190.0], [37.5, 3195.0], [37.6, 3196.0], [37.7, 3197.0], [37.8, 3199.0], [37.9, 3210.0], [38.0, 3227.0], [38.1, 3227.0], [38.2, 3232.0], [38.3, 3245.0], [38.4, 3245.0], [38.5, 3245.0], [38.6, 3246.0], [38.7, 3248.0], [38.8, 3250.0], [38.9, 3250.0], [39.0, 3260.0], [39.1, 3267.0], [39.2, 3267.0], [39.3, 3272.0], [39.4, 3273.0], [39.5, 3274.0], [39.6, 3274.0], [39.7, 3274.0], [39.8, 3278.0], [39.9, 3278.0], [40.0, 3278.0], [40.1, 3295.0], [40.2, 3322.0], [40.3, 3323.0], [40.4, 3325.0], [40.5, 3332.0], [40.6, 3332.0], [40.7, 3333.0], [40.8, 3333.0], [40.9, 3333.0], [41.0, 3333.0], [41.1, 3338.0], [41.2, 3348.0], [41.3, 3353.0], [41.4, 3356.0], [41.5, 3363.0], [41.6, 3363.0], [41.7, 3363.0], [41.8, 3364.0], [41.9, 3364.0], [42.0, 3366.0], [42.1, 3367.0], [42.2, 3368.0], [42.3, 3375.0], [42.4, 3378.0], [42.5, 3384.0], [42.6, 3388.0], [42.7, 3395.0], [42.8, 3411.0], [42.9, 3413.0], [43.0, 3422.0], [43.1, 3432.0], [43.2, 3433.0], [43.3, 3434.0], [43.4, 3435.0], [43.5, 3437.0], [43.6, 3437.0], [43.7, 3450.0], [43.8, 3461.0], [43.9, 3475.0], [44.0, 3477.0], [44.1, 3481.0], [44.2, 3481.0], [44.3, 3481.0], [44.4, 3495.0], [44.5, 3497.0], [44.6, 3512.0], [44.7, 3512.0], [44.8, 3512.0], [44.9, 3513.0], [45.0, 3513.0], [45.1, 3513.0], [45.2, 3514.0], [45.3, 3525.0], [45.4, 3531.0], [45.5, 3532.0], [45.6, 3533.0], [45.7, 3533.0], [45.8, 3533.0], [45.9, 3533.0], [46.0, 3533.0], [46.1, 3543.0], [46.2, 3548.0], [46.3, 3554.0], [46.4, 3563.0], [46.5, 3563.0], [46.6, 3564.0], [46.7, 3564.0], [46.8, 3565.0], [46.9, 3572.0], [47.0, 3588.0], [47.1, 3592.0], [47.2, 3604.0], [47.3, 3612.0], [47.4, 3612.0], [47.5, 3612.0], [47.6, 3613.0], [47.7, 3613.0], [47.8, 3613.0], [47.9, 3636.0], [48.0, 3645.0], [48.1, 3649.0], [48.2, 3652.0], [48.3, 3654.0], [48.4, 3654.0], [48.5, 3654.0], [48.6, 3654.0], [48.7, 3655.0], [48.8, 3655.0], [48.9, 3655.0], [49.0, 3658.0], [49.1, 3659.0], [49.2, 3659.0], [49.3, 3659.0], [49.4, 3660.0], [49.5, 3664.0], [49.6, 3666.0], [49.7, 3666.0], [49.8, 3667.0], [49.9, 3667.0], [50.0, 3667.0], [50.1, 3668.0], [50.2, 3669.0], [50.3, 3670.0], [50.4, 3681.0], [50.5, 3683.0], [50.6, 3684.0], [50.7, 3684.0], [50.8, 3684.0], [50.9, 3685.0], [51.0, 3685.0], [51.1, 3685.0], [51.2, 3685.0], [51.3, 3685.0], [51.4, 3685.0], [51.5, 3685.0], [51.6, 3685.0], [51.7, 3685.0], [51.8, 3685.0], [51.9, 3685.0], [52.0, 3685.0], [52.1, 3686.0], [52.2, 3686.0], [52.3, 3686.0], [52.4, 3686.0], [52.5, 3686.0], [52.6, 3686.0], [52.7, 3686.0], [52.8, 3686.0], [52.9, 3686.0], [53.0, 3687.0], [53.1, 3689.0], [53.2, 3690.0], [53.3, 3693.0], [53.4, 3694.0], [53.5, 3695.0], [53.6, 3695.0], [53.7, 3695.0], [53.8, 3695.0], [53.9, 3695.0], [54.0, 3695.0], [54.1, 3696.0], [54.2, 3707.0], [54.3, 3724.0], [54.4, 3728.0], [54.5, 3729.0], [54.6, 3729.0], [54.7, 3729.0], [54.8, 3731.0], [54.9, 3731.0], [55.0, 3732.0], [55.1, 3732.0], [55.2, 3732.0], [55.3, 3737.0], [55.4, 3740.0], [55.5, 3740.0], [55.6, 3740.0], [55.7, 3741.0], [55.8, 3742.0], [55.9, 3743.0], [56.0, 3743.0], [56.1, 3743.0], [56.2, 3751.0], [56.3, 3759.0], [56.4, 3766.0], [56.5, 3766.0], [56.6, 3774.0], [56.7, 3774.0], [56.8, 3781.0], [56.9, 3782.0], [57.0, 3782.0], [57.1, 3782.0], [57.2, 3782.0], [57.3, 3782.0], [57.4, 3782.0], [57.5, 3783.0], [57.6, 3783.0], [57.7, 3783.0], [57.8, 3783.0], [57.9, 3785.0], [58.0, 3786.0], [58.1, 3790.0], [58.2, 3791.0], [58.3, 3793.0], [58.4, 3808.0], [58.5, 3811.0], [58.6, 3811.0], [58.7, 3812.0], [58.8, 3813.0], [58.9, 3813.0], [59.0, 3813.0], [59.1, 3813.0], [59.2, 3814.0], [59.3, 3814.0], [59.4, 3815.0], [59.5, 3815.0], [59.6, 3816.0], [59.7, 3816.0], [59.8, 3817.0], [59.9, 3818.0], [60.0, 3819.0], [60.1, 3819.0], [60.2, 3819.0], [60.3, 3819.0], [60.4, 3819.0], [60.5, 3819.0], [60.6, 3821.0], [60.7, 3822.0], [60.8, 3822.0], [60.9, 3823.0], [61.0, 3824.0], [61.1, 3824.0], [61.2, 3836.0], [61.3, 3837.0], [61.4, 3837.0], [61.5, 3869.0], [61.6, 3869.0], [61.7, 3869.0], [61.8, 3869.0], [61.9, 3869.0], [62.0, 3873.0], [62.1, 3874.0], [62.2, 3883.0], [62.3, 3886.0], [62.4, 3886.0], [62.5, 3886.0], [62.6, 3890.0], [62.7, 3890.0], [62.8, 3890.0], [62.9, 3890.0], [63.0, 3890.0], [63.1, 3890.0], [63.2, 3890.0], [63.3, 3891.0], [63.4, 3891.0], [63.5, 3891.0], [63.6, 3891.0], [63.7, 3891.0], [63.8, 3891.0], [63.9, 3891.0], [64.0, 3892.0], [64.1, 3892.0], [64.2, 3892.0], [64.3, 3892.0], [64.4, 3893.0], [64.5, 3893.0], [64.6, 3893.0], [64.7, 3894.0], [64.8, 3897.0], [64.9, 3899.0], [65.0, 3899.0], [65.1, 3899.0], [65.2, 3900.0], [65.3, 3900.0], [65.4, 3901.0], [65.5, 3903.0], [65.6, 3905.0], [65.7, 3905.0], [65.8, 3905.0], [65.9, 3905.0], [66.0, 3906.0], [66.1, 3906.0], [66.2, 3907.0], [66.3, 3907.0], [66.4, 3907.0], [66.5, 3907.0], [66.6, 3908.0], [66.7, 3908.0], [66.8, 3908.0], [66.9, 3908.0], [67.0, 3928.0], [67.1, 3928.0], [67.2, 3928.0], [67.3, 3930.0], [67.4, 3931.0], [67.5, 3931.0], [67.6, 3932.0], [67.7, 3932.0], [67.8, 3932.0], [67.9, 3934.0], [68.0, 3938.0], [68.1, 3940.0], [68.2, 3940.0], [68.3, 3940.0], [68.4, 3941.0], [68.5, 3943.0], [68.6, 3954.0], [68.7, 3956.0], [68.8, 3957.0], [68.9, 3957.0], [69.0, 3958.0], [69.1, 3958.0], [69.2, 3960.0], [69.3, 3961.0], [69.4, 3961.0], [69.5, 3961.0], [69.6, 3961.0], [69.7, 3961.0], [69.8, 3962.0], [69.9, 3962.0], [70.0, 3962.0], [70.1, 3963.0], [70.2, 3963.0], [70.3, 3963.0], [70.4, 3963.0], [70.5, 3963.0], [70.6, 3963.0], [70.7, 3963.0], [70.8, 3963.0], [70.9, 3964.0], [71.0, 3964.0], [71.1, 3964.0], [71.2, 3966.0], [71.3, 3968.0], [71.4, 3980.0], [71.5, 3981.0], [71.6, 3992.0], [71.7, 3992.0], [71.8, 3992.0], [71.9, 3992.0], [72.0, 3992.0], [72.1, 3993.0], [72.2, 3993.0], [72.3, 3993.0], [72.4, 3995.0], [72.5, 4008.0], [72.6, 4012.0], [72.7, 4012.0], [72.8, 4013.0], [72.9, 4013.0], [73.0, 4013.0], [73.1, 4013.0], [73.2, 4013.0], [73.3, 4013.0], [73.4, 4013.0], [73.5, 4014.0], [73.6, 4014.0], [73.7, 4015.0], [73.8, 4021.0], [73.9, 4021.0], [74.0, 4021.0], [74.1, 4047.0], [74.2, 4048.0], [74.3, 4050.0], [74.4, 4051.0], [74.5, 4051.0], [74.6, 4051.0], [74.7, 4052.0], [74.8, 4052.0], [74.9, 4053.0], [75.0, 4065.0], [75.1, 4068.0], [75.2, 4083.0], [75.3, 4085.0], [75.4, 4090.0], [75.5, 4091.0], [75.6, 4092.0], [75.7, 4093.0], [75.8, 4093.0], [75.9, 4093.0], [76.0, 4094.0], [76.1, 4094.0], [76.2, 4094.0], [76.3, 4094.0], [76.4, 4094.0], [76.5, 4094.0], [76.6, 4094.0], [76.7, 4094.0], [76.8, 4095.0], [76.9, 4095.0], [77.0, 4095.0], [77.1, 4095.0], [77.2, 4095.0], [77.3, 4095.0], [77.4, 4095.0], [77.5, 4095.0], [77.6, 4095.0], [77.7, 4095.0], [77.8, 4095.0], [77.9, 4095.0], [78.0, 4095.0], [78.1, 4095.0], [78.2, 4095.0], [78.3, 4095.0], [78.4, 4095.0], [78.5, 4095.0], [78.6, 4095.0], [78.7, 4095.0], [78.8, 4096.0], [78.9, 4096.0], [79.0, 4096.0], [79.1, 4096.0], [79.2, 4096.0], [79.3, 4096.0], [79.4, 4096.0], [79.5, 4096.0], [79.6, 4096.0], [79.7, 4096.0], [79.8, 4096.0], [79.9, 4096.0], [80.0, 4096.0], [80.1, 4096.0], [80.2, 4096.0], [80.3, 4097.0], [80.4, 4097.0], [80.5, 4097.0], [80.6, 4097.0], [80.7, 4097.0], [80.8, 4097.0], [80.9, 4097.0], [81.0, 4099.0], [81.1, 4100.0], [81.2, 4100.0], [81.3, 4100.0], [81.4, 4100.0], [81.5, 4100.0], [81.6, 4100.0], [81.7, 4101.0], [81.8, 4101.0], [81.9, 4101.0], [82.0, 4102.0], [82.1, 4102.0], [82.2, 4107.0], [82.3, 4108.0], [82.4, 4108.0], [82.5, 4109.0], [82.6, 4112.0], [82.7, 4139.0], [82.8, 4139.0], [82.9, 4140.0], [83.0, 4140.0], [83.1, 4141.0], [83.2, 4141.0], [83.3, 4141.0], [83.4, 4163.0], [83.5, 4164.0], [83.6, 4167.0], [83.7, 4167.0], [83.8, 4167.0], [83.9, 4167.0], [84.0, 4167.0], [84.1, 4168.0], [84.2, 4168.0], [84.3, 4168.0], [84.4, 4168.0], [84.5, 4168.0], [84.6, 4168.0], [84.7, 4168.0], [84.8, 4168.0], [84.9, 4168.0], [85.0, 4169.0], [85.1, 4172.0], [85.2, 4185.0], [85.3, 4191.0], [85.4, 4191.0], [85.5, 4196.0], [85.6, 4197.0], [85.7, 4197.0], [85.8, 4197.0], [85.9, 4197.0], [86.0, 4197.0], [86.1, 4197.0], [86.2, 4198.0], [86.3, 4198.0], [86.4, 4198.0], [86.5, 4198.0], [86.6, 4198.0], [86.7, 4198.0], [86.8, 4198.0], [86.9, 4198.0], [87.0, 4198.0], [87.1, 4199.0], [87.2, 4215.0], [87.3, 4215.0], [87.4, 4216.0], [87.5, 4216.0], [87.6, 4217.0], [87.7, 4226.0], [87.8, 4227.0], [87.9, 4228.0], [88.0, 4228.0], [88.1, 4229.0], [88.2, 4229.0], [88.3, 4236.0], [88.4, 4236.0], [88.5, 4243.0], [88.6, 4256.0], [88.7, 4258.0], [88.8, 4263.0], [88.9, 4263.0], [89.0, 4267.0], [89.1, 4270.0], [89.2, 4280.0], [89.3, 4280.0], [89.4, 4299.0], [89.5, 4299.0], [89.6, 4300.0], [89.7, 4300.0], [89.8, 4301.0], [89.9, 4301.0], [90.0, 4302.0], [90.1, 4302.0], [90.2, 4302.0], [90.3, 4304.0], [90.4, 4304.0], [90.5, 4305.0], [90.6, 4305.0], [90.7, 4307.0], [90.8, 4307.0], [90.9, 4313.0], [91.0, 4314.0], [91.1, 4314.0], [91.2, 4314.0], [91.3, 4315.0], [91.4, 4315.0], [91.5, 4331.0], [91.6, 4337.0], [91.7, 4364.0], [91.8, 4364.0], [91.9, 4365.0], [92.0, 4367.0], [92.1, 4370.0], [92.2, 4372.0], [92.3, 4373.0], [92.4, 4379.0], [92.5, 4399.0], [92.6, 4399.0], [92.7, 4399.0], [92.8, 4400.0], [92.9, 4400.0], [93.0, 4401.0], [93.1, 4402.0], [93.2, 4403.0], [93.3, 4403.0], [93.4, 4403.0], [93.5, 4403.0], [93.6, 4403.0], [93.7, 4404.0], [93.8, 4404.0], [93.9, 4404.0], [94.0, 4404.0], [94.1, 4405.0], [94.2, 4424.0], [94.3, 4425.0], [94.4, 4426.0], [94.5, 4426.0], [94.6, 4426.0], [94.7, 4426.0], [94.8, 4427.0], [94.9, 4472.0], [95.0, 4472.0], [95.1, 4472.0], [95.2, 4473.0], [95.3, 4475.0], [95.4, 4476.0], [95.5, 4476.0], [95.6, 4492.0], [95.7, 4492.0], [95.8, 4493.0], [95.9, 4493.0], [96.0, 4493.0], [96.1, 4493.0], [96.2, 4501.0], [96.3, 4501.0], [96.4, 4501.0], [96.5, 4502.0], [96.6, 4503.0], [96.7, 4503.0], [96.8, 4506.0], [96.9, 4506.0], [97.0, 4506.0], [97.1, 4506.0], [97.2, 4506.0], [97.3, 4507.0], [97.4, 4511.0], [97.5, 4511.0], [97.6, 4512.0], [97.7, 4512.0], [97.8, 4516.0], [97.9, 4590.0], [98.0, 4590.0], [98.1, 4591.0], [98.2, 4591.0], [98.3, 4591.0], [98.4, 4591.0], [98.5, 4592.0], [98.6, 4593.0], [98.7, 4593.0], [98.8, 4594.0], [98.9, 4594.0], [99.0, 4595.0], [99.1, 4599.0], [99.2, 4599.0], [99.3, 4599.0], [99.4, 4599.0], [99.5, 4599.0], [99.6, 4600.0], [99.7, 4600.0], [99.8, 4680.0], [99.9, 5106.0], [100.0, 5498.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 287.0, "series": [{"data": [[600.0, 20.0], [700.0, 80.0], [800.0, 48.0], [900.0, 47.0], [1000.0, 26.0], [1100.0, 10.0], [1200.0, 13.0], [1300.0, 24.0], [1400.0, 15.0], [1500.0, 8.0], [1600.0, 16.0], [1700.0, 9.0], [1800.0, 11.0], [1900.0, 13.0], [2000.0, 23.0], [2100.0, 51.0], [2200.0, 58.0], [2300.0, 48.0], [2400.0, 32.0], [2500.0, 103.0], [2600.0, 67.0], [2700.0, 125.0], [2800.0, 106.0], [2900.0, 149.0], [3000.0, 106.0], [3100.0, 55.0], [3200.0, 76.0], [3300.0, 88.0], [3400.0, 59.0], [3500.0, 87.0], [3700.0, 139.0], [3600.0, 236.0], [3800.0, 228.0], [3900.0, 242.0], [4000.0, 287.0], [4300.0, 109.0], [4100.0, 204.0], [4200.0, 80.0], [4400.0, 112.0], [4500.0, 115.0], [4600.0, 9.0], [5000.0, 1.0], [5100.0, 1.0], [5300.0, 1.0], [5200.0, 1.0], [5400.0, 1.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 283.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3056.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 283.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3056.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 42.04999999999996, "minX": 1.7800383E12, "maxY": 102.85781710914428, "series": [{"data": [[1.78003842E12, 101.51288659793816], [1.7800383E12, 42.04999999999996], [1.78003836E12, 102.85781710914428]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003842E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 674.6666666666666, "minX": 1.0, "maxY": 4095.0, "series": [{"data": [[2.0, 3400.0], [5.0, 974.0], [6.0, 2884.4], [7.0, 816.6666666666666], [8.0, 2581.0], [9.0, 1452.75], [10.0, 777.6666666666666], [11.0, 760.8], [12.0, 2348.0], [13.0, 1078.125], [14.0, 674.6666666666666], [15.0, 723.4285714285714], [16.0, 753.4], [17.0, 1959.25], [18.0, 716.111111111111], [19.0, 788.0], [20.0, 749.125], [21.0, 1686.4545454545455], [22.0, 758.3750000000001], [23.0, 765.5555555555554], [24.0, 789.625], [25.0, 802.8], [26.0, 1471.6842105263158], [27.0, 883.8], [28.0, 810.1818181818182], [29.0, 823.1111111111111], [30.0, 868.2857142857143], [31.0, 891.5], [32.0, 868.875], [33.0, 1006.6250000000001], [34.0, 939.5454545454545], [35.0, 952.0], [36.0, 1006.0], [37.0, 1058.0], [38.0, 1079.7], [39.0, 1087.5], [40.0, 1361.75], [41.0, 1323.6], [42.0, 1277.1818181818182], [43.0, 1335.0000000000002], [45.0, 1544.3529411764705], [46.0, 1367.875], [47.0, 1568.0], [48.0, 1666.0], [49.0, 1742.7857142857142], [50.0, 1504.625], [51.0, 1711.6666666666667], [53.0, 2113.8571428571427], [54.0, 1891.125], [57.0, 2227.333333333333], [56.0, 4095.0], [58.0, 2183.5333333333333], [59.0, 2395.625], [61.0, 3310.9318181818176], [60.0, 4093.0], [62.0, 2229.0], [64.0, 2193.45], [66.0, 2516.6428571428573], [67.0, 2315.6666666666665], [65.0, 3196.25], [69.0, 2559.3571428571427], [70.0, 2403.25], [71.0, 2498.9285714285716], [72.0, 2179.6], [74.0, 2607.1333333333337], [75.0, 2308.0], [77.0, 2466.076923076923], [80.0, 2615.8260869565215], [84.0, 2876.6153846153843], [87.0, 2927.0000000000005], [90.0, 3012.7931034482754], [91.0, 2247.0], [94.0, 2863.3103448275865], [95.0, 2214.0], [98.0, 2985.617647058824], [99.0, 2342.0], [102.0, 3436.2000000000003], [103.0, 3089.4499999999994], [105.0, 3698.7149002737588], [1.0, 3494.0]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[93.64749925127279, 3313.787061994605]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 105.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1280.0, "minX": 1.7800383E12, "maxY": 6525.75, "series": [{"data": [[1.78003842E12, 4481.4], [1.7800383E12, 1848.0], [1.78003836E12, 6525.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78003842E12, 3104.0], [1.7800383E12, 1280.0], [1.78003836E12, 4520.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003842E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1457.6541666666662, "minX": 1.7800383E12, "maxY": 3832.2044673539476, "series": [{"data": [[1.78003842E12, 3832.2044673539476], [1.7800383E12, 1457.6541666666662], [1.78003836E12, 3483.407079646017]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003842E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1457.5395833333325, "minX": 1.7800383E12, "maxY": 3832.186426116834, "series": [{"data": [[1.78003842E12, 3832.186426116834], [1.7800383E12, 1457.5395833333325], [1.78003836E12, 3483.37404129794]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003842E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.040378006872852194, "minX": 1.7800383E12, "maxY": 0.18125000000000005, "series": [{"data": [[1.78003842E12, 0.040378006872852194], [1.7800383E12, 0.18125000000000005], [1.78003836E12, 0.04247787610619473]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003842E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 662.0, "minX": 1.7800383E12, "maxY": 5498.0, "series": [{"data": [[1.78003842E12, 5498.0], [1.7800383E12, 3050.0], [1.78003836E12, 5378.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78003842E12, 2243.0], [1.7800383E12, 662.0], [1.78003836E12, 1865.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78003842E12, 4427.0], [1.7800383E12, 2350.7000000000003], [1.78003836E12, 4141.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78003842E12, 4599.35], [1.7800383E12, 2907.0], [1.78003836E12, 4501.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78003842E12, 4016.0], [1.7800383E12, 1261.5], [1.78003836E12, 3654.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78003842E12, 4591.0], [1.7800383E12, 2752.0], [1.78003836E12, 4305.2]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003842E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 733.0, "minX": 2.0, "maxY": 4263.0, "series": [{"data": [[32.0, 939.5], [33.0, 4215.0], [2.0, 3451.5], [34.0, 3413.0], [35.0, 3908.0], [37.0, 3981.0], [36.0, 3824.0], [39.0, 4093.0], [38.0, 4013.0], [40.0, 3811.0], [41.0, 4263.0], [42.0, 3861.0], [43.0, 3893.0], [44.0, 3958.0], [4.0, 3106.0], [5.0, 3006.0], [6.0, 898.0], [10.0, 794.5], [14.0, 733.0], [17.0, 2315.0], [18.0, 2274.0], [21.0, 1997.0], [23.0, 1399.0], [25.0, 1330.0], [26.0, 2827.0], [28.0, 1455.5], [30.0, 3433.0], [31.0, 2791.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 44.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 732.5, "minX": 2.0, "maxY": 4263.0, "series": [{"data": [[32.0, 939.5], [33.0, 4215.0], [2.0, 3451.5], [34.0, 3412.5], [35.0, 3908.0], [37.0, 3981.0], [36.0, 3824.0], [39.0, 4093.0], [38.0, 4013.0], [40.0, 3811.0], [41.0, 4263.0], [42.0, 3861.0], [43.0, 3893.0], [44.0, 3958.0], [4.0, 3106.0], [5.0, 3006.0], [6.0, 897.0], [10.0, 794.5], [14.0, 732.5], [17.0, 2315.0], [18.0, 2274.0], [21.0, 1997.0], [23.0, 1399.0], [25.0, 1330.0], [26.0, 2827.0], [28.0, 1455.5], [30.0, 3433.0], [31.0, 2791.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 44.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 9.233333333333333, "minX": 1.7800383E12, "maxY": 28.766666666666666, "series": [{"data": [[1.78003842E12, 17.65], [1.7800383E12, 9.233333333333333], [1.78003836E12, 28.766666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003842E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.0, "minX": 1.7800383E12, "maxY": 28.25, "series": [{"data": [[1.78003842E12, 19.4], [1.7800383E12, 8.0], [1.78003836E12, 28.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78003842E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.0, "minX": 1.7800383E12, "maxY": 28.25, "series": [{"data": [[1.78003842E12, 19.4], [1.7800383E12, 8.0], [1.78003836E12, 28.25]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003842E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.0, "minX": 1.7800383E12, "maxY": 28.25, "series": [{"data": [[1.78003842E12, 19.4], [1.7800383E12, 8.0], [1.78003836E12, 28.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78003842E12, "title": "Total Transactions Per Second"}},
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

