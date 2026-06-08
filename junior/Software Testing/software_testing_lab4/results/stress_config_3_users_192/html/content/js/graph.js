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
        data: {"result": {"minY": 655.0, "minX": 0.0, "maxY": 10013.0, "series": [{"data": [[0.0, 655.0], [0.1, 674.0], [0.2, 679.0], [0.3, 679.0], [0.4, 681.0], [0.5, 708.0], [0.6, 711.0], [0.7, 718.0], [0.8, 727.0], [0.9, 738.0], [1.0, 748.0], [1.1, 750.0], [1.2, 753.0], [1.3, 756.0], [1.4, 769.0], [1.5, 769.0], [1.6, 787.0], [1.7, 790.0], [1.8, 794.0], [1.9, 817.0], [2.0, 817.0], [2.1, 837.0], [2.2, 837.0], [2.3, 843.0], [2.4, 851.0], [2.5, 853.0], [2.6, 865.0], [2.7, 873.0], [2.8, 904.0], [2.9, 913.0], [3.0, 917.0], [3.1, 933.0], [3.2, 938.0], [3.3, 950.0], [3.4, 955.0], [3.5, 956.0], [3.6, 968.0], [3.7, 997.0], [3.8, 1008.0], [3.9, 1028.0], [4.0, 1048.0], [4.1, 1056.0], [4.2, 1103.0], [4.3, 1129.0], [4.4, 1141.0], [4.5, 1143.0], [4.6, 1156.0], [4.7, 1192.0], [4.8, 1225.0], [4.9, 1232.0], [5.0, 1240.0], [5.1, 1283.0], [5.2, 1284.0], [5.3, 1319.0], [5.4, 1349.0], [5.5, 1374.0], [5.6, 1378.0], [5.7, 1378.0], [5.8, 1423.0], [5.9, 1448.0], [6.0, 1464.0], [6.1, 1525.0], [6.2, 1546.0], [6.3, 1546.0], [6.4, 1572.0], [6.5, 1621.0], [6.6, 1678.0], [6.7, 1778.0], [6.8, 1831.0], [6.9, 1913.0], [7.0, 1913.0], [7.1, 1915.0], [7.2, 1915.0], [7.3, 1959.0], [7.4, 2087.0], [7.5, 2095.0], [7.6, 2095.0], [7.7, 2302.0], [7.8, 2302.0], [7.9, 2302.0], [8.0, 2304.0], [8.1, 2304.0], [8.2, 2428.0], [8.3, 2489.0], [8.4, 2519.0], [8.5, 2627.0], [8.6, 2657.0], [8.7, 2657.0], [8.8, 2658.0], [8.9, 2660.0], [9.0, 2737.0], [9.1, 2858.0], [9.2, 2890.0], [9.3, 2909.0], [9.4, 2909.0], [9.5, 2909.0], [9.6, 2910.0], [9.7, 2910.0], [9.8, 3003.0], [9.9, 3031.0], [10.0, 3182.0], [10.1, 3207.0], [10.2, 3207.0], [10.3, 3208.0], [10.4, 3209.0], [10.5, 3217.0], [10.6, 3217.0], [10.7, 3217.0], [10.8, 3218.0], [10.9, 3234.0], [11.0, 3247.0], [11.1, 3278.0], [11.2, 3353.0], [11.3, 3353.0], [11.4, 3400.0], [11.5, 3410.0], [11.6, 3464.0], [11.7, 3512.0], [11.8, 3512.0], [11.9, 3513.0], [12.0, 3513.0], [12.1, 3513.0], [12.2, 3513.0], [12.3, 3530.0], [12.4, 3530.0], [12.5, 3531.0], [12.6, 3532.0], [12.7, 3532.0], [12.8, 3533.0], [12.9, 3542.0], [13.0, 3584.0], [13.1, 3615.0], [13.2, 3717.0], [13.3, 3792.0], [13.4, 3895.0], [13.5, 3949.0], [13.6, 4066.0], [13.7, 4073.0], [13.8, 4074.0], [13.9, 4075.0], [14.0, 4120.0], [14.1, 4120.0], [14.2, 4121.0], [14.3, 4184.0], [14.4, 4185.0], [14.5, 4186.0], [14.6, 4186.0], [14.7, 4186.0], [14.8, 4231.0], [14.9, 4258.0], [15.0, 4271.0], [15.1, 4280.0], [15.2, 4285.0], [15.3, 4289.0], [15.4, 4290.0], [15.5, 4291.0], [15.6, 4291.0], [15.7, 4292.0], [15.8, 4302.0], [15.9, 4303.0], [16.0, 4304.0], [16.1, 4325.0], [16.2, 4357.0], [16.3, 4379.0], [16.4, 4438.0], [16.5, 4439.0], [16.6, 4439.0], [16.7, 4461.0], [16.8, 4463.0], [16.9, 4463.0], [17.0, 4469.0], [17.1, 4489.0], [17.2, 4489.0], [17.3, 4489.0], [17.4, 4489.0], [17.5, 4490.0], [17.6, 4493.0], [17.7, 4508.0], [17.8, 4508.0], [17.9, 4535.0], [18.0, 4595.0], [18.1, 4675.0], [18.2, 4675.0], [18.3, 4697.0], [18.4, 4716.0], [18.5, 4754.0], [18.6, 4775.0], [18.7, 4775.0], [18.8, 4775.0], [18.9, 4775.0], [19.0, 4776.0], [19.1, 4776.0], [19.2, 4787.0], [19.3, 4798.0], [19.4, 4799.0], [19.5, 4799.0], [19.6, 4799.0], [19.7, 4804.0], [19.8, 4871.0], [19.9, 4951.0], [20.0, 4961.0], [20.1, 4961.0], [20.2, 4961.0], [20.3, 4961.0], [20.4, 4962.0], [20.5, 5009.0], [20.6, 5011.0], [20.7, 5011.0], [20.8, 5012.0], [20.9, 5012.0], [21.0, 5012.0], [21.1, 5013.0], [21.2, 5013.0], [21.3, 5014.0], [21.4, 5033.0], [21.5, 5055.0], [21.6, 5056.0], [21.7, 5074.0], [21.8, 5074.0], [21.9, 5078.0], [22.0, 5092.0], [22.1, 5092.0], [22.2, 5093.0], [22.3, 5111.0], [22.4, 5112.0], [22.5, 5116.0], [22.6, 5140.0], [22.7, 5141.0], [22.8, 5141.0], [22.9, 5141.0], [23.0, 5143.0], [23.1, 5145.0], [23.2, 5159.0], [23.3, 5161.0], [23.4, 5163.0], [23.5, 5191.0], [23.6, 5191.0], [23.7, 5191.0], [23.8, 5199.0], [23.9, 5200.0], [24.0, 5200.0], [24.1, 5202.0], [24.2, 5202.0], [24.3, 5203.0], [24.4, 5203.0], [24.5, 5203.0], [24.6, 5203.0], [24.7, 5204.0], [24.8, 5204.0], [24.9, 5205.0], [25.0, 5205.0], [25.1, 5205.0], [25.2, 5205.0], [25.3, 5214.0], [25.4, 5252.0], [25.5, 5253.0], [25.6, 5253.0], [25.7, 5254.0], [25.8, 5254.0], [25.9, 5255.0], [26.0, 5316.0], [26.1, 5317.0], [26.2, 5317.0], [26.3, 5318.0], [26.4, 5318.0], [26.5, 5318.0], [26.6, 5319.0], [26.7, 5332.0], [26.8, 5333.0], [26.9, 5334.0], [27.0, 5338.0], [27.1, 5338.0], [27.2, 5351.0], [27.3, 5385.0], [27.4, 5385.0], [27.5, 5386.0], [27.6, 5386.0], [27.7, 5388.0], [27.8, 5389.0], [27.9, 5396.0], [28.0, 5406.0], [28.1, 5406.0], [28.2, 5407.0], [28.3, 5408.0], [28.4, 5430.0], [28.5, 5430.0], [28.6, 5432.0], [28.7, 5432.0], [28.8, 5432.0], [28.9, 5434.0], [29.0, 5448.0], [29.1, 5450.0], [29.2, 5454.0], [29.3, 5455.0], [29.4, 5491.0], [29.5, 5494.0], [29.6, 5502.0], [29.7, 5525.0], [29.8, 5526.0], [29.9, 5528.0], [30.0, 5528.0], [30.1, 5528.0], [30.2, 5532.0], [30.3, 5536.0], [30.4, 5536.0], [30.5, 5536.0], [30.6, 5538.0], [30.7, 5538.0], [30.8, 5539.0], [30.9, 5539.0], [31.0, 5572.0], [31.1, 5572.0], [31.2, 5574.0], [31.3, 5574.0], [31.4, 5575.0], [31.5, 5576.0], [31.6, 5623.0], [31.7, 5630.0], [31.8, 5630.0], [31.9, 5630.0], [32.0, 5632.0], [32.1, 5633.0], [32.2, 5633.0], [32.3, 5633.0], [32.4, 5633.0], [32.5, 5633.0], [32.6, 5634.0], [32.7, 5635.0], [32.8, 5635.0], [32.9, 5635.0], [33.0, 5635.0], [33.1, 5636.0], [33.2, 5636.0], [33.3, 5636.0], [33.4, 5636.0], [33.5, 5636.0], [33.6, 5636.0], [33.7, 5636.0], [33.8, 5636.0], [33.9, 5637.0], [34.0, 5637.0], [34.1, 5637.0], [34.2, 5637.0], [34.3, 5637.0], [34.4, 5638.0], [34.5, 5638.0], [34.6, 5638.0], [34.7, 5641.0], [34.8, 5641.0], [34.9, 5642.0], [35.0, 5642.0], [35.1, 5642.0], [35.2, 5642.0], [35.3, 5644.0], [35.4, 5650.0], [35.5, 5650.0], [35.6, 5650.0], [35.7, 5676.0], [35.8, 5677.0], [35.9, 5697.0], [36.0, 5697.0], [36.1, 5698.0], [36.2, 5698.0], [36.3, 5698.0], [36.4, 5698.0], [36.5, 5698.0], [36.6, 5699.0], [36.7, 5714.0], [36.8, 5717.0], [36.9, 5718.0], [37.0, 5718.0], [37.1, 5718.0], [37.2, 5718.0], [37.3, 5718.0], [37.4, 5718.0], [37.5, 5718.0], [37.6, 5718.0], [37.7, 5719.0], [37.8, 5719.0], [37.9, 5720.0], [38.0, 5725.0], [38.1, 5725.0], [38.2, 5725.0], [38.3, 5726.0], [38.4, 5726.0], [38.5, 5727.0], [38.6, 5727.0], [38.7, 5727.0], [38.8, 5730.0], [38.9, 5730.0], [39.0, 5730.0], [39.1, 5730.0], [39.2, 5730.0], [39.3, 5730.0], [39.4, 5731.0], [39.5, 5731.0], [39.6, 5731.0], [39.7, 5731.0], [39.8, 5732.0], [39.9, 5732.0], [40.0, 5732.0], [40.1, 5732.0], [40.2, 5732.0], [40.3, 5732.0], [40.4, 5732.0], [40.5, 5732.0], [40.6, 5732.0], [40.7, 5733.0], [40.8, 5733.0], [40.9, 5733.0], [41.0, 5734.0], [41.1, 5734.0], [41.2, 5734.0], [41.3, 5734.0], [41.4, 5734.0], [41.5, 5734.0], [41.6, 5734.0], [41.7, 5735.0], [41.8, 5735.0], [41.9, 5736.0], [42.0, 5737.0], [42.1, 5738.0], [42.2, 5738.0], [42.3, 5738.0], [42.4, 5747.0], [42.5, 5747.0], [42.6, 5747.0], [42.7, 5748.0], [42.8, 5748.0], [42.9, 5748.0], [43.0, 5749.0], [43.1, 5754.0], [43.2, 5754.0], [43.3, 5754.0], [43.4, 5757.0], [43.5, 5757.0], [43.6, 5758.0], [43.7, 5758.0], [43.8, 5758.0], [43.9, 5758.0], [44.0, 5760.0], [44.1, 5761.0], [44.2, 5764.0], [44.3, 5766.0], [44.4, 5767.0], [44.5, 5768.0], [44.6, 5768.0], [44.7, 5768.0], [44.8, 5769.0], [44.9, 5771.0], [45.0, 5771.0], [45.1, 5772.0], [45.2, 5772.0], [45.3, 5772.0], [45.4, 5772.0], [45.5, 5779.0], [45.6, 5780.0], [45.7, 5794.0], [45.8, 5794.0], [45.9, 5794.0], [46.0, 5795.0], [46.1, 5796.0], [46.2, 5796.0], [46.3, 5796.0], [46.4, 5796.0], [46.5, 5796.0], [46.6, 5796.0], [46.7, 5796.0], [46.8, 5797.0], [46.9, 5797.0], [47.0, 5798.0], [47.1, 5812.0], [47.2, 5819.0], [47.3, 5820.0], [47.4, 5821.0], [47.5, 5821.0], [47.6, 5822.0], [47.7, 5822.0], [47.8, 5822.0], [47.9, 5824.0], [48.0, 5826.0], [48.1, 5828.0], [48.2, 5830.0], [48.3, 5830.0], [48.4, 5831.0], [48.5, 5831.0], [48.6, 5831.0], [48.7, 5831.0], [48.8, 5831.0], [48.9, 5832.0], [49.0, 5832.0], [49.1, 5832.0], [49.2, 5832.0], [49.3, 5832.0], [49.4, 5833.0], [49.5, 5833.0], [49.6, 5834.0], [49.7, 5837.0], [49.8, 5837.0], [49.9, 5837.0], [50.0, 5837.0], [50.1, 5837.0], [50.2, 5838.0], [50.3, 5845.0], [50.4, 5845.0], [50.5, 5845.0], [50.6, 5847.0], [50.7, 5847.0], [50.8, 5847.0], [50.9, 5849.0], [51.0, 5862.0], [51.1, 5881.0], [51.2, 5881.0], [51.3, 5882.0], [51.4, 5883.0], [51.5, 5883.0], [51.6, 5884.0], [51.7, 5895.0], [51.8, 5896.0], [51.9, 5897.0], [52.0, 5897.0], [52.1, 5899.0], [52.2, 5899.0], [52.3, 5900.0], [52.4, 5900.0], [52.5, 5901.0], [52.6, 5901.0], [52.7, 5902.0], [52.8, 5902.0], [52.9, 5902.0], [53.0, 5903.0], [53.1, 5905.0], [53.2, 5919.0], [53.3, 5919.0], [53.4, 5936.0], [53.5, 5936.0], [53.6, 5939.0], [53.7, 5939.0], [53.8, 5939.0], [53.9, 5940.0], [54.0, 5940.0], [54.1, 5940.0], [54.2, 5946.0], [54.3, 5947.0], [54.4, 5947.0], [54.5, 5947.0], [54.6, 5947.0], [54.7, 5948.0], [54.8, 5953.0], [54.9, 5954.0], [55.0, 5960.0], [55.1, 5960.0], [55.2, 5963.0], [55.3, 5967.0], [55.4, 5971.0], [55.5, 5973.0], [55.6, 5987.0], [55.7, 5988.0], [55.8, 5989.0], [55.9, 5989.0], [56.0, 5989.0], [56.1, 5990.0], [56.2, 5990.0], [56.3, 5992.0], [56.4, 5995.0], [56.5, 5995.0], [56.6, 5996.0], [56.7, 5999.0], [56.8, 5999.0], [56.9, 6000.0], [57.0, 6014.0], [57.1, 6021.0], [57.2, 6029.0], [57.3, 6030.0], [57.4, 6034.0], [57.5, 6038.0], [57.6, 6038.0], [57.7, 6040.0], [57.8, 6041.0], [57.9, 6044.0], [58.0, 6046.0], [58.1, 6046.0], [58.2, 6048.0], [58.3, 6049.0], [58.4, 6062.0], [58.5, 6062.0], [58.6, 6074.0], [58.7, 6074.0], [58.8, 6079.0], [58.9, 6079.0], [59.0, 6080.0], [59.1, 6081.0], [59.2, 6081.0], [59.3, 6084.0], [59.4, 6102.0], [59.5, 6103.0], [59.6, 6129.0], [59.7, 6130.0], [59.8, 6130.0], [59.9, 6131.0], [60.0, 6131.0], [60.1, 6134.0], [60.2, 6137.0], [60.3, 6137.0], [60.4, 6152.0], [60.5, 6152.0], [60.6, 6173.0], [60.7, 6174.0], [60.8, 6226.0], [60.9, 6262.0], [61.0, 6263.0], [61.1, 6263.0], [61.2, 6263.0], [61.3, 6264.0], [61.4, 6264.0], [61.5, 6264.0], [61.6, 6266.0], [61.7, 6278.0], [61.8, 6285.0], [61.9, 6287.0], [62.0, 6293.0], [62.1, 6293.0], [62.2, 6298.0], [62.3, 6299.0], [62.4, 6317.0], [62.5, 6317.0], [62.6, 6317.0], [62.7, 6317.0], [62.8, 6319.0], [62.9, 6320.0], [63.0, 6321.0], [63.1, 6322.0], [63.2, 6371.0], [63.3, 6404.0], [63.4, 6459.0], [63.5, 6459.0], [63.6, 6459.0], [63.7, 6460.0], [63.8, 6460.0], [63.9, 6460.0], [64.0, 6461.0], [64.1, 6467.0], [64.2, 6474.0], [64.3, 6475.0], [64.4, 6510.0], [64.5, 6510.0], [64.6, 6513.0], [64.7, 6514.0], [64.8, 6514.0], [64.9, 6514.0], [65.0, 6516.0], [65.1, 6519.0], [65.2, 6539.0], [65.3, 6540.0], [65.4, 6540.0], [65.5, 6544.0], [65.6, 6549.0], [65.7, 6569.0], [65.8, 6591.0], [65.9, 6603.0], [66.0, 6611.0], [66.1, 6621.0], [66.2, 6635.0], [66.3, 6642.0], [66.4, 6643.0], [66.5, 6643.0], [66.6, 6648.0], [66.7, 6648.0], [66.8, 6650.0], [66.9, 6650.0], [67.0, 6653.0], [67.1, 6653.0], [67.2, 6671.0], [67.3, 6688.0], [67.4, 6688.0], [67.5, 6689.0], [67.6, 6711.0], [67.7, 6724.0], [67.8, 6727.0], [67.9, 6728.0], [68.0, 6741.0], [68.1, 6742.0], [68.2, 6764.0], [68.3, 6764.0], [68.4, 6773.0], [68.5, 6776.0], [68.6, 6778.0], [68.7, 6779.0], [68.8, 6782.0], [68.9, 6801.0], [69.0, 6805.0], [69.1, 6805.0], [69.2, 6805.0], [69.3, 6805.0], [69.4, 6805.0], [69.5, 6806.0], [69.6, 6827.0], [69.7, 6827.0], [69.8, 6880.0], [69.9, 6882.0], [70.0, 6886.0], [70.1, 6889.0], [70.2, 6890.0], [70.3, 6890.0], [70.4, 6890.0], [70.5, 6898.0], [70.6, 6903.0], [70.7, 6904.0], [70.8, 6905.0], [70.9, 6906.0], [71.0, 6908.0], [71.1, 6908.0], [71.2, 6909.0], [71.3, 6919.0], [71.4, 6923.0], [71.5, 6932.0], [71.6, 6937.0], [71.7, 6937.0], [71.8, 6949.0], [71.9, 6952.0], [72.0, 6952.0], [72.1, 6954.0], [72.2, 6954.0], [72.3, 6954.0], [72.4, 6954.0], [72.5, 6955.0], [72.6, 6958.0], [72.7, 6963.0], [72.8, 6963.0], [72.9, 6963.0], [73.0, 6965.0], [73.1, 6965.0], [73.2, 6965.0], [73.3, 7000.0], [73.4, 7002.0], [73.5, 7004.0], [73.6, 7005.0], [73.7, 7020.0], [73.8, 7020.0], [73.9, 7024.0], [74.0, 7037.0], [74.1, 7037.0], [74.2, 7037.0], [74.3, 7038.0], [74.4, 7056.0], [74.5, 7066.0], [74.6, 7186.0], [74.7, 7186.0], [74.8, 7190.0], [74.9, 7191.0], [75.0, 7191.0], [75.1, 7199.0], [75.2, 7200.0], [75.3, 7201.0], [75.4, 7215.0], [75.5, 7215.0], [75.6, 7216.0], [75.7, 7216.0], [75.8, 7218.0], [75.9, 7327.0], [76.0, 7328.0], [76.1, 7340.0], [76.2, 7340.0], [76.3, 7341.0], [76.4, 7341.0], [76.5, 7341.0], [76.6, 7350.0], [76.7, 7358.0], [76.8, 7359.0], [76.9, 7359.0], [77.0, 7359.0], [77.1, 7361.0], [77.2, 7362.0], [77.3, 7362.0], [77.4, 7363.0], [77.5, 7396.0], [77.6, 7397.0], [77.7, 7399.0], [77.8, 7400.0], [77.9, 7404.0], [78.0, 7405.0], [78.1, 7405.0], [78.2, 7438.0], [78.3, 7441.0], [78.4, 7472.0], [78.5, 7475.0], [78.6, 7475.0], [78.7, 7506.0], [78.8, 7513.0], [78.9, 7514.0], [79.0, 7578.0], [79.1, 7590.0], [79.2, 7591.0], [79.3, 7591.0], [79.4, 7646.0], [79.5, 7672.0], [79.6, 7682.0], [79.7, 7699.0], [79.8, 7699.0], [79.9, 7700.0], [80.0, 7700.0], [80.1, 7701.0], [80.2, 7701.0], [80.3, 7722.0], [80.4, 7808.0], [80.5, 7808.0], [80.6, 7813.0], [80.7, 7911.0], [80.8, 7911.0], [80.9, 7939.0], [81.0, 7941.0], [81.1, 7941.0], [81.2, 7941.0], [81.3, 7941.0], [81.4, 7942.0], [81.5, 7945.0], [81.6, 7946.0], [81.7, 8087.0], [81.8, 8095.0], [81.9, 8095.0], [82.0, 8115.0], [82.1, 8116.0], [82.2, 8119.0], [82.3, 8142.0], [82.4, 8142.0], [82.5, 8144.0], [82.6, 8165.0], [82.7, 8170.0], [82.8, 8181.0], [82.9, 8183.0], [83.0, 8192.0], [83.1, 8193.0], [83.2, 8193.0], [83.3, 8194.0], [83.4, 8194.0], [83.5, 8195.0], [83.6, 8196.0], [83.7, 8217.0], [83.8, 8217.0], [83.9, 8219.0], [84.0, 8235.0], [84.1, 8253.0], [84.2, 8254.0], [84.3, 8257.0], [84.4, 8265.0], [84.5, 8267.0], [84.6, 8312.0], [84.7, 8313.0], [84.8, 8363.0], [84.9, 8371.0], [85.0, 8391.0], [85.1, 8391.0], [85.2, 8529.0], [85.3, 8543.0], [85.4, 8571.0], [85.5, 8571.0], [85.6, 8571.0], [85.7, 8571.0], [85.8, 8572.0], [85.9, 8573.0], [86.0, 8575.0], [86.1, 8585.0], [86.2, 8618.0], [86.3, 8618.0], [86.4, 8618.0], [86.5, 8621.0], [86.6, 8640.0], [86.7, 8641.0], [86.8, 8663.0], [86.9, 8664.0], [87.0, 8708.0], [87.1, 8741.0], [87.2, 8742.0], [87.3, 8743.0], [87.4, 8743.0], [87.5, 8744.0], [87.6, 8745.0], [87.7, 8746.0], [87.8, 8769.0], [87.9, 8819.0], [88.0, 8826.0], [88.1, 8850.0], [88.2, 8888.0], [88.3, 8888.0], [88.4, 8890.0], [88.5, 8890.0], [88.6, 9000.0], [88.7, 9006.0], [88.8, 9007.0], [88.9, 9017.0], [89.0, 9019.0], [89.1, 9019.0], [89.2, 9112.0], [89.3, 9143.0], [89.4, 9146.0], [89.5, 9148.0], [89.6, 9149.0], [89.7, 9209.0], [89.8, 9318.0], [89.9, 9375.0], [90.0, 9375.0], [90.1, 9375.0], [90.2, 9377.0], [90.3, 9377.0], [90.4, 9377.0], [90.5, 9401.0], [90.6, 9416.0], [90.7, 9424.0], [90.8, 9519.0], [90.9, 9611.0], [91.0, 9664.0], [91.1, 9664.0], [91.2, 9664.0], [91.3, 9664.0], [91.4, 9664.0], [91.5, 9664.0], [91.6, 9664.0], [91.7, 9665.0], [91.8, 9678.0], [91.9, 9686.0], [92.0, 9736.0], [92.1, 9772.0], [92.2, 9785.0], [92.3, 9785.0], [92.4, 9798.0], [92.5, 9807.0], [92.6, 9827.0], [92.7, 9827.0], [92.8, 9827.0], [92.9, 9827.0], [93.0, 9830.0], [93.1, 9831.0], [93.2, 9831.0], [93.3, 9831.0], [93.4, 9832.0], [93.5, 9835.0], [93.6, 9835.0], [93.7, 9835.0], [93.8, 9835.0], [93.9, 9835.0], [94.0, 9847.0], [94.1, 9854.0], [94.2, 9854.0], [94.3, 9854.0], [94.4, 9856.0], [94.5, 9858.0], [94.6, 9893.0], [94.7, 9919.0], [94.8, 9958.0], [94.9, 9964.0], [95.0, 9986.0], [95.1, 10001.0], [95.2, 10002.0], [95.3, 10004.0], [95.4, 10005.0], [95.5, 10007.0], [95.6, 10008.0], [95.7, 10009.0], [95.8, 10009.0], [95.9, 10010.0], [96.0, 10010.0], [96.1, 10010.0], [96.2, 10010.0], [96.3, 10010.0], [96.4, 10010.0], [96.5, 10010.0], [96.6, 10010.0], [96.7, 10010.0], [96.8, 10010.0], [96.9, 10010.0], [97.0, 10010.0], [97.1, 10010.0], [97.2, 10010.0], [97.3, 10010.0], [97.4, 10010.0], [97.5, 10010.0], [97.6, 10010.0], [97.7, 10010.0], [97.8, 10010.0], [97.9, 10010.0], [98.0, 10010.0], [98.1, 10010.0], [98.2, 10011.0], [98.3, 10011.0], [98.4, 10011.0], [98.5, 10011.0], [98.6, 10011.0], [98.7, 10011.0], [98.8, 10011.0], [98.9, 10011.0], [99.0, 10011.0], [99.1, 10011.0], [99.2, 10011.0], [99.3, 10011.0], [99.4, 10011.0], [99.5, 10012.0], [99.6, 10012.0], [99.7, 10012.0], [99.8, 10012.0], [99.9, 10012.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 361.0, "series": [{"data": [[600.0, 16.0], [700.0, 47.0], [800.0, 33.0], [900.0, 33.0], [1000.0, 16.0], [1100.0, 19.0], [1200.0, 18.0], [1300.0, 19.0], [1400.0, 9.0], [1500.0, 14.0], [1600.0, 6.0], [1700.0, 4.0], [1800.0, 5.0], [1900.0, 17.0], [2000.0, 8.0], [2300.0, 19.0], [2200.0, 1.0], [2400.0, 7.0], [2500.0, 2.0], [2600.0, 17.0], [2800.0, 8.0], [2700.0, 3.0], [2900.0, 19.0], [3000.0, 5.0], [3100.0, 4.0], [3200.0, 38.0], [3300.0, 8.0], [3400.0, 8.0], [3500.0, 49.0], [3700.0, 5.0], [3600.0, 5.0], [3800.0, 4.0], [3900.0, 4.0], [4000.0, 14.0], [4200.0, 36.0], [4300.0, 20.0], [4100.0, 27.0], [4400.0, 45.0], [4500.0, 13.0], [4600.0, 11.0], [4700.0, 46.0], [4800.0, 6.0], [4900.0, 23.0], [5100.0, 57.0], [5000.0, 60.0], [5300.0, 68.0], [5200.0, 73.0], [5500.0, 69.0], [5600.0, 177.0], [5400.0, 58.0], [5800.0, 181.0], [5700.0, 361.0], [6000.0, 86.0], [5900.0, 159.0], [6100.0, 50.0], [6200.0, 54.0], [6300.0, 33.0], [6500.0, 53.0], [6600.0, 58.0], [6400.0, 36.0], [6900.0, 93.0], [6800.0, 57.0], [6700.0, 47.0], [7000.0, 45.0], [7100.0, 24.0], [7400.0, 33.0], [7300.0, 65.0], [7200.0, 22.0], [7500.0, 25.0], [7600.0, 18.0], [7900.0, 35.0], [7800.0, 10.0], [7700.0, 16.0], [8100.0, 58.0], [8000.0, 11.0], [8600.0, 30.0], [8500.0, 33.0], [8300.0, 19.0], [8700.0, 31.0], [8400.0, 1.0], [8200.0, 33.0], [9200.0, 2.0], [9100.0, 17.0], [8800.0, 23.0], [8900.0, 2.0], [9000.0, 21.0], [9400.0, 11.0], [9600.0, 35.0], [9700.0, 19.0], [9300.0, 25.0], [9500.0, 4.0], [10000.0, 172.0], [9900.0, 15.0], [9800.0, 75.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 210.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2790.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 210.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2790.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 471.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 124.15252525252525, "minX": 1.78092864E12, "maxY": 192.0, "series": [{"data": [[1.78092864E12, 124.15252525252525], [1.7809287E12, 192.0], [1.78092876E12, 173.95513577331755]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78092876E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 727.5, "minX": 4.0, "maxY": 10011.333333333334, "series": [{"data": [[4.0, 5880.5], [8.0, 5823.5], [9.0, 1081.3333333333333], [10.0, 886.5], [12.0, 954.0], [13.0, 1050.0], [14.0, 800.7142857142857], [15.0, 843.0], [17.0, 5316.3], [18.0, 812.0000000000001], [19.0, 765.1666666666667], [21.0, 837.0], [22.0, 3297.5], [23.0, 727.5], [24.0, 3269.75], [26.0, 2769.8], [27.0, 804.5], [28.0, 767.1428571428571], [29.0, 904.0], [32.0, 860.9999999999999], [33.0, 814.4000000000001], [34.0, 873.0], [35.0, 1093.5], [36.0, 896.1666666666666], [37.0, 778.6], [38.0, 837.0], [39.0, 6348.230769230769], [40.0, 1170.111111111111], [41.0, 1010.4166666666667], [42.0, 897.875], [43.0, 1029.0], [46.0, 1172.8333333333333], [47.0, 956.1], [49.0, 1226.6666666666667], [50.0, 1292.583333333333], [52.0, 1386.0000000000002], [53.0, 1056.0], [55.0, 1357.4444444444443], [56.0, 1412.0], [58.0, 1644.2], [62.0, 1801.1052631578948], [63.0, 1621.0], [65.0, 1795.4666666666665], [72.0, 2363.8888888888882], [77.0, 2454.375], [78.0, 2467.0], [82.0, 2778.1052631578946], [83.0, 2813.6666666666665], [90.0, 3013.2962962962965], [91.0, 6619.857142857142], [89.0, 5735.0], [88.0, 7721.333333333333], [95.0, 6970.8], [94.0, 6191.0], [99.0, 3555.5517241379316], [98.0, 6993.0], [97.0, 8254.0], [100.0, 6470.333333333334], [103.0, 5732.0], [106.0, 9893.0], [104.0, 5937.868421052632], [111.0, 4246.333333333334], [116.0, 10011.333333333334], [121.0, 5335.450980392156], [123.0, 10010.5], [120.0, 10010.0], [125.0, 10001.0], [124.0, 10009.0], [131.0, 4290.704545454545], [132.0, 3271.0], [141.0, 4787.0], [142.0, 4038.918367346939], [150.0, 5834.0], [149.0, 5834.0], [147.0, 5834.0], [146.0, 5891.0], [154.0, 4302.42857142857], [169.0, 4993.046874999999], [170.0, 4379.0], [171.0, 5832.0], [179.0, 5830.0], [178.0, 5832.0], [176.0, 5832.0], [186.0, 6961.428571428572], [187.0, 5356.795454545455], [192.0, 6822.204800619442]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[168.24517430135433, 6029.150677038326]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 192.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2080.0, "minX": 1.78092864E12, "maxY": 9807.933333333332, "series": [{"data": [[1.78092864E12, 4586.7], [1.7809287E12, 9807.933333333332], [1.78092876E12, 5996.283333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78092864E12, 2589.3333333333335], [1.7809287E12, 4128.0], [1.78092876E12, 2080.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78092876E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4134.42323232323, "minX": 1.78092864E12, "maxY": 6806.090575275404, "series": [{"data": [[1.78092864E12, 4134.42323232323], [1.7809287E12, 6806.090575275404], [1.78092876E12, 6744.92443919717]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78092876E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3942.22323232323, "minX": 1.78092864E12, "maxY": 6279.222154222764, "series": [{"data": [[1.78092864E12, 3942.22323232323], [1.7809287E12, 6279.222154222764], [1.78092876E12, 5953.109799291614]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78092876E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.07319952774498234, "minX": 1.78092864E12, "maxY": 0.2343434343434346, "series": [{"data": [[1.78092864E12, 0.2343434343434346], [1.7809287E12, 0.13647490820073427], [1.78092876E12, 0.07319952774498234]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78092876E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 655.0, "minX": 1.78092864E12, "maxY": 9988.0, "series": [{"data": [[1.78092864E12, 9988.0], [1.7809287E12, 9986.0], [1.78092876E12, 9979.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78092864E12, 655.0], [1.7809287E12, 2280.0], [1.78092876E12, 4072.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78092864E12, 6611.0], [1.7809287E12, 9375.0], [1.78092876E12, 8744.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78092864E12, 9483.279999999999], [1.7809287E12, 9858.0], [1.78092876E12, 9847.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78092864E12, 4281.0], [1.7809287E12, 6317.0], [1.78092876E12, 5831.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78092864E12, 8640.0], [1.7809287E12, 9788.599999999999], [1.78092876E12, 9229.099999999982]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78092876E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 752.0, "minX": 2.0, "maxY": 10012.0, "series": [{"data": [[2.0, 3271.0], [3.0, 7722.0], [4.0, 1057.5], [5.0, 5837.0], [7.0, 9807.0], [9.0, 5492.0], [11.0, 815.0], [14.0, 8974.0], [17.0, 9235.5], [18.0, 2627.0], [20.0, 9835.0], [21.0, 3447.0], [22.0, 6278.0], [24.0, 1434.5], [25.0, 1706.5], [27.0, 2910.0], [28.0, 3707.0], [30.0, 4665.5], [31.0, 956.0], [35.0, 752.0], [36.0, 4489.0], [37.0, 5833.5], [39.0, 6038.0], [42.0, 2372.5], [43.0, 5013.0], [44.0, 4877.5], [45.0, 6905.0], [46.0, 5699.0], [47.0, 5730.0], [50.0, 5960.0], [52.0, 5391.0], [56.0, 4308.0], [58.0, 5152.0], [65.0, 5828.5], [67.0, 5834.0], [70.0, 5637.0], [68.0, 5639.0], [73.0, 5719.0], [78.0, 5758.0], [76.0, 5734.0], [77.0, 5737.0], [85.0, 6081.0], [88.0, 4303.0], [104.0, 5732.0], [112.0, 5536.0], [117.0, 5766.0], [116.0, 6805.0], [120.0, 6293.0], [121.0, 7359.0], [126.0, 6317.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[39.0, 10010.5], [45.0, 10010.0], [11.0, 10010.0], [46.0, 10011.5], [47.0, 10010.0], [12.0, 7667.5], [14.0, 5999.0], [17.0, 10011.0], [18.0, 10012.0], [78.0, 5758.0], [77.0, 10010.0], [21.0, 10010.0], [104.0, 5822.0], [112.0, 5253.0], [117.0, 5432.0], [116.0, 5454.0], [120.0, 6806.0], [121.0, 6932.0], [126.0, 6263.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 126.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 2.0, "maxY": 9835.0, "series": [{"data": [[2.0, 3271.0], [3.0, 7722.0], [4.0, 1044.5], [5.0, 5837.0], [7.0, 9807.0], [9.0, 5492.0], [11.0, 815.0], [14.0, 8974.0], [17.0, 9235.5], [18.0, 2627.0], [20.0, 9835.0], [21.0, 3447.0], [22.0, 6278.0], [24.0, 1434.5], [25.0, 1706.5], [27.0, 2909.0], [28.0, 3707.0], [30.0, 4665.5], [31.0, 956.0], [35.0, 752.0], [36.0, 4489.0], [37.0, 5833.5], [39.0, 6038.0], [42.0, 2372.5], [43.0, 5013.0], [44.0, 4877.5], [45.0, 6905.0], [46.0, 5699.0], [47.0, 5730.0], [50.0, 5960.0], [52.0, 5391.0], [56.0, 4308.0], [58.0, 5152.0], [65.0, 5828.5], [67.0, 5834.0], [70.0, 5637.0], [68.0, 5639.0], [73.0, 5719.0], [78.0, 5758.0], [76.0, 5734.0], [77.0, 5737.0], [85.0, 6081.0], [88.0, 4303.0], [104.0, 5732.0], [112.0, 5536.0], [117.0, 5766.0], [116.0, 6805.0], [120.0, 6293.0], [121.0, 7359.0], [126.0, 6317.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[39.0, 0.0], [45.0, 0.0], [11.0, 0.0], [46.0, 0.0], [47.0, 0.0], [12.0, 2666.0], [14.0, 5999.0], [17.0, 0.0], [18.0, 0.0], [78.0, 5638.0], [77.0, 0.0], [21.0, 0.0], [104.0, 5822.0], [112.0, 5253.0], [117.0, 5432.0], [116.0, 5350.0], [120.0, 5989.0], [121.0, 6932.0], [126.0, 6263.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 126.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.916666666666666, "minX": 1.78092864E12, "maxY": 27.233333333333334, "series": [{"data": [[1.78092864E12, 19.7], [1.7809287E12, 27.233333333333334], [1.78092876E12, 10.916666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78092876E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.78092864E12, "maxY": 21.683333333333334, "series": [{"data": [[1.78092864E12, 16.183333333333334], [1.7809287E12, 21.683333333333334], [1.78092876E12, 12.133333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.78092864E12, 0.31666666666666665], [1.7809287E12, 1.4333333333333333], [1.78092876E12, 1.1166666666666667]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketTimeoutException", "isController": false}, {"data": [[1.7809287E12, 4.116666666666666], [1.78092876E12, 0.8666666666666667]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78092876E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.78092864E12, "maxY": 21.683333333333334, "series": [{"data": [[1.78092864E12, 16.183333333333334], [1.7809287E12, 21.683333333333334], [1.78092876E12, 12.133333333333333]], "isOverall": false, "label": "GET STLoad-success", "isController": false}, {"data": [[1.78092864E12, 0.31666666666666665], [1.7809287E12, 5.55], [1.78092876E12, 1.9833333333333334]], "isOverall": false, "label": "GET STLoad-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78092876E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.78092864E12, "maxY": 21.683333333333334, "series": [{"data": [[1.78092864E12, 16.183333333333334], [1.7809287E12, 21.683333333333334], [1.78092876E12, 12.133333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78092864E12, 0.31666666666666665], [1.7809287E12, 5.55], [1.78092876E12, 1.9833333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78092876E12, "title": "Total Transactions Per Second"}},
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

