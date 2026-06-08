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
        data: {"result": {"minY": 649.0, "minX": 0.0, "maxY": 1447.0, "series": [{"data": [[0.0, 649.0], [0.1, 652.0], [0.2, 661.0], [0.3, 666.0], [0.4, 668.0], [0.5, 669.0], [0.6, 670.0], [0.7, 672.0], [0.8, 674.0], [0.9, 674.0], [1.0, 675.0], [1.1, 676.0], [1.2, 676.0], [1.3, 678.0], [1.4, 680.0], [1.5, 683.0], [1.6, 684.0], [1.7, 694.0], [1.8, 694.0], [1.9, 702.0], [2.0, 706.0], [2.1, 709.0], [2.2, 711.0], [2.3, 714.0], [2.4, 714.0], [2.5, 725.0], [2.6, 727.0], [2.7, 727.0], [2.8, 730.0], [2.9, 730.0], [3.0, 731.0], [3.1, 732.0], [3.2, 735.0], [3.3, 739.0], [3.4, 745.0], [3.5, 751.0], [3.6, 757.0], [3.7, 762.0], [3.8, 765.0], [3.9, 769.0], [4.0, 770.0], [4.1, 773.0], [4.2, 773.0], [4.3, 773.0], [4.4, 778.0], [4.5, 780.0], [4.6, 789.0], [4.7, 790.0], [4.8, 792.0], [4.9, 806.0], [5.0, 808.0], [5.1, 811.0], [5.2, 820.0], [5.3, 821.0], [5.4, 824.0], [5.5, 827.0], [5.6, 831.0], [5.7, 836.0], [5.8, 846.0], [5.9, 860.0], [6.0, 860.0], [6.1, 861.0], [6.2, 863.0], [6.3, 865.0], [6.4, 866.0], [6.5, 869.0], [6.6, 872.0], [6.7, 875.0], [6.8, 876.0], [6.9, 881.0], [7.0, 886.0], [7.1, 893.0], [7.2, 894.0], [7.3, 902.0], [7.4, 908.0], [7.5, 908.0], [7.6, 909.0], [7.7, 912.0], [7.8, 916.0], [7.9, 920.0], [8.0, 921.0], [8.1, 922.0], [8.2, 924.0], [8.3, 925.0], [8.4, 927.0], [8.5, 928.0], [8.6, 930.0], [8.7, 932.0], [8.8, 932.0], [8.9, 935.0], [9.0, 935.0], [9.1, 936.0], [9.2, 937.0], [9.3, 937.0], [9.4, 938.0], [9.5, 938.0], [9.6, 939.0], [9.7, 939.0], [9.8, 940.0], [9.9, 941.0], [10.0, 941.0], [10.1, 941.0], [10.2, 942.0], [10.3, 942.0], [10.4, 942.0], [10.5, 942.0], [10.6, 943.0], [10.7, 943.0], [10.8, 943.0], [10.9, 944.0], [11.0, 944.0], [11.1, 944.0], [11.2, 944.0], [11.3, 944.0], [11.4, 944.0], [11.5, 944.0], [11.6, 945.0], [11.7, 945.0], [11.8, 945.0], [11.9, 945.0], [12.0, 945.0], [12.1, 945.0], [12.2, 946.0], [12.3, 946.0], [12.4, 946.0], [12.5, 946.0], [12.6, 946.0], [12.7, 947.0], [12.8, 947.0], [12.9, 947.0], [13.0, 947.0], [13.1, 947.0], [13.2, 947.0], [13.3, 947.0], [13.4, 947.0], [13.5, 948.0], [13.6, 948.0], [13.7, 948.0], [13.8, 948.0], [13.9, 948.0], [14.0, 948.0], [14.1, 948.0], [14.2, 948.0], [14.3, 948.0], [14.4, 948.0], [14.5, 948.0], [14.6, 949.0], [14.7, 949.0], [14.8, 949.0], [14.9, 949.0], [15.0, 949.0], [15.1, 950.0], [15.2, 950.0], [15.3, 950.0], [15.4, 950.0], [15.5, 950.0], [15.6, 950.0], [15.7, 951.0], [15.8, 951.0], [15.9, 951.0], [16.0, 951.0], [16.1, 951.0], [16.2, 951.0], [16.3, 951.0], [16.4, 951.0], [16.5, 951.0], [16.6, 952.0], [16.7, 952.0], [16.8, 952.0], [16.9, 952.0], [17.0, 952.0], [17.1, 952.0], [17.2, 952.0], [17.3, 952.0], [17.4, 952.0], [17.5, 952.0], [17.6, 952.0], [17.7, 952.0], [17.8, 952.0], [17.9, 953.0], [18.0, 953.0], [18.1, 953.0], [18.2, 953.0], [18.3, 953.0], [18.4, 954.0], [18.5, 954.0], [18.6, 954.0], [18.7, 954.0], [18.8, 954.0], [18.9, 954.0], [19.0, 954.0], [19.1, 954.0], [19.2, 954.0], [19.3, 954.0], [19.4, 955.0], [19.5, 955.0], [19.6, 955.0], [19.7, 955.0], [19.8, 955.0], [19.9, 955.0], [20.0, 955.0], [20.1, 955.0], [20.2, 955.0], [20.3, 955.0], [20.4, 955.0], [20.5, 956.0], [20.6, 956.0], [20.7, 956.0], [20.8, 956.0], [20.9, 956.0], [21.0, 956.0], [21.1, 956.0], [21.2, 956.0], [21.3, 956.0], [21.4, 956.0], [21.5, 956.0], [21.6, 957.0], [21.7, 957.0], [21.8, 957.0], [21.9, 957.0], [22.0, 957.0], [22.1, 957.0], [22.2, 957.0], [22.3, 957.0], [22.4, 957.0], [22.5, 958.0], [22.6, 958.0], [22.7, 958.0], [22.8, 958.0], [22.9, 958.0], [23.0, 958.0], [23.1, 958.0], [23.2, 958.0], [23.3, 958.0], [23.4, 958.0], [23.5, 959.0], [23.6, 959.0], [23.7, 959.0], [23.8, 959.0], [23.9, 959.0], [24.0, 959.0], [24.1, 959.0], [24.2, 959.0], [24.3, 959.0], [24.4, 959.0], [24.5, 959.0], [24.6, 960.0], [24.7, 960.0], [24.8, 960.0], [24.9, 960.0], [25.0, 960.0], [25.1, 960.0], [25.2, 960.0], [25.3, 960.0], [25.4, 960.0], [25.5, 960.0], [25.6, 960.0], [25.7, 960.0], [25.8, 960.0], [25.9, 961.0], [26.0, 961.0], [26.1, 961.0], [26.2, 961.0], [26.3, 961.0], [26.4, 961.0], [26.5, 961.0], [26.6, 961.0], [26.7, 961.0], [26.8, 961.0], [26.9, 961.0], [27.0, 961.0], [27.1, 961.0], [27.2, 961.0], [27.3, 962.0], [27.4, 962.0], [27.5, 962.0], [27.6, 962.0], [27.7, 962.0], [27.8, 962.0], [27.9, 962.0], [28.0, 962.0], [28.1, 962.0], [28.2, 962.0], [28.3, 963.0], [28.4, 963.0], [28.5, 963.0], [28.6, 963.0], [28.7, 963.0], [28.8, 963.0], [28.9, 963.0], [29.0, 963.0], [29.1, 963.0], [29.2, 963.0], [29.3, 963.0], [29.4, 963.0], [29.5, 963.0], [29.6, 963.0], [29.7, 963.0], [29.8, 963.0], [29.9, 963.0], [30.0, 963.0], [30.1, 964.0], [30.2, 964.0], [30.3, 964.0], [30.4, 964.0], [30.5, 964.0], [30.6, 964.0], [30.7, 964.0], [30.8, 964.0], [30.9, 964.0], [31.0, 964.0], [31.1, 964.0], [31.2, 964.0], [31.3, 964.0], [31.4, 965.0], [31.5, 965.0], [31.6, 965.0], [31.7, 965.0], [31.8, 965.0], [31.9, 965.0], [32.0, 965.0], [32.1, 965.0], [32.2, 965.0], [32.3, 965.0], [32.4, 965.0], [32.5, 966.0], [32.6, 966.0], [32.7, 966.0], [32.8, 966.0], [32.9, 966.0], [33.0, 966.0], [33.1, 966.0], [33.2, 966.0], [33.3, 966.0], [33.4, 966.0], [33.5, 966.0], [33.6, 966.0], [33.7, 967.0], [33.8, 967.0], [33.9, 967.0], [34.0, 967.0], [34.1, 967.0], [34.2, 967.0], [34.3, 967.0], [34.4, 968.0], [34.5, 968.0], [34.6, 968.0], [34.7, 968.0], [34.8, 968.0], [34.9, 968.0], [35.0, 968.0], [35.1, 968.0], [35.2, 969.0], [35.3, 969.0], [35.4, 969.0], [35.5, 969.0], [35.6, 969.0], [35.7, 969.0], [35.8, 969.0], [35.9, 969.0], [36.0, 969.0], [36.1, 969.0], [36.2, 969.0], [36.3, 970.0], [36.4, 970.0], [36.5, 970.0], [36.6, 970.0], [36.7, 970.0], [36.8, 970.0], [36.9, 970.0], [37.0, 970.0], [37.1, 970.0], [37.2, 970.0], [37.3, 970.0], [37.4, 970.0], [37.5, 970.0], [37.6, 971.0], [37.7, 971.0], [37.8, 971.0], [37.9, 971.0], [38.0, 971.0], [38.1, 971.0], [38.2, 971.0], [38.3, 971.0], [38.4, 971.0], [38.5, 971.0], [38.6, 972.0], [38.7, 972.0], [38.8, 972.0], [38.9, 972.0], [39.0, 972.0], [39.1, 972.0], [39.2, 972.0], [39.3, 972.0], [39.4, 972.0], [39.5, 972.0], [39.6, 973.0], [39.7, 973.0], [39.8, 973.0], [39.9, 973.0], [40.0, 973.0], [40.1, 974.0], [40.2, 974.0], [40.3, 974.0], [40.4, 974.0], [40.5, 974.0], [40.6, 974.0], [40.7, 974.0], [40.8, 975.0], [40.9, 975.0], [41.0, 975.0], [41.1, 975.0], [41.2, 975.0], [41.3, 975.0], [41.4, 976.0], [41.5, 976.0], [41.6, 976.0], [41.7, 976.0], [41.8, 976.0], [41.9, 977.0], [42.0, 977.0], [42.1, 977.0], [42.2, 977.0], [42.3, 977.0], [42.4, 977.0], [42.5, 977.0], [42.6, 978.0], [42.7, 978.0], [42.8, 978.0], [42.9, 978.0], [43.0, 978.0], [43.1, 978.0], [43.2, 979.0], [43.3, 979.0], [43.4, 979.0], [43.5, 979.0], [43.6, 980.0], [43.7, 980.0], [43.8, 981.0], [43.9, 981.0], [44.0, 981.0], [44.1, 982.0], [44.2, 982.0], [44.3, 982.0], [44.4, 982.0], [44.5, 982.0], [44.6, 983.0], [44.7, 983.0], [44.8, 983.0], [44.9, 983.0], [45.0, 983.0], [45.1, 984.0], [45.2, 984.0], [45.3, 984.0], [45.4, 984.0], [45.5, 985.0], [45.6, 985.0], [45.7, 985.0], [45.8, 985.0], [45.9, 985.0], [46.0, 985.0], [46.1, 986.0], [46.2, 986.0], [46.3, 986.0], [46.4, 986.0], [46.5, 986.0], [46.6, 986.0], [46.7, 986.0], [46.8, 986.0], [46.9, 986.0], [47.0, 987.0], [47.1, 987.0], [47.2, 987.0], [47.3, 987.0], [47.4, 987.0], [47.5, 987.0], [47.6, 988.0], [47.7, 988.0], [47.8, 988.0], [47.9, 988.0], [48.0, 988.0], [48.1, 988.0], [48.2, 988.0], [48.3, 988.0], [48.4, 988.0], [48.5, 988.0], [48.6, 989.0], [48.7, 989.0], [48.8, 989.0], [48.9, 989.0], [49.0, 989.0], [49.1, 989.0], [49.2, 989.0], [49.3, 989.0], [49.4, 989.0], [49.5, 989.0], [49.6, 990.0], [49.7, 990.0], [49.8, 990.0], [49.9, 990.0], [50.0, 990.0], [50.1, 990.0], [50.2, 990.0], [50.3, 990.0], [50.4, 990.0], [50.5, 991.0], [50.6, 991.0], [50.7, 991.0], [50.8, 991.0], [50.9, 991.0], [51.0, 991.0], [51.1, 991.0], [51.2, 991.0], [51.3, 992.0], [51.4, 992.0], [51.5, 992.0], [51.6, 992.0], [51.7, 992.0], [51.8, 992.0], [51.9, 992.0], [52.0, 992.0], [52.1, 992.0], [52.2, 992.0], [52.3, 992.0], [52.4, 992.0], [52.5, 992.0], [52.6, 992.0], [52.7, 993.0], [52.8, 993.0], [52.9, 993.0], [53.0, 993.0], [53.1, 993.0], [53.2, 993.0], [53.3, 993.0], [53.4, 993.0], [53.5, 993.0], [53.6, 994.0], [53.7, 994.0], [53.8, 994.0], [53.9, 994.0], [54.0, 994.0], [54.1, 994.0], [54.2, 994.0], [54.3, 994.0], [54.4, 994.0], [54.5, 995.0], [54.6, 995.0], [54.7, 995.0], [54.8, 995.0], [54.9, 995.0], [55.0, 995.0], [55.1, 995.0], [55.2, 995.0], [55.3, 995.0], [55.4, 995.0], [55.5, 995.0], [55.6, 995.0], [55.7, 996.0], [55.8, 996.0], [55.9, 996.0], [56.0, 996.0], [56.1, 996.0], [56.2, 996.0], [56.3, 996.0], [56.4, 996.0], [56.5, 996.0], [56.6, 996.0], [56.7, 996.0], [56.8, 996.0], [56.9, 997.0], [57.0, 997.0], [57.1, 997.0], [57.2, 997.0], [57.3, 997.0], [57.4, 997.0], [57.5, 997.0], [57.6, 997.0], [57.7, 997.0], [57.8, 997.0], [57.9, 997.0], [58.0, 998.0], [58.1, 998.0], [58.2, 998.0], [58.3, 998.0], [58.4, 998.0], [58.5, 998.0], [58.6, 998.0], [58.7, 998.0], [58.8, 998.0], [58.9, 998.0], [59.0, 998.0], [59.1, 998.0], [59.2, 998.0], [59.3, 999.0], [59.4, 999.0], [59.5, 999.0], [59.6, 999.0], [59.7, 999.0], [59.8, 999.0], [59.9, 999.0], [60.0, 999.0], [60.1, 999.0], [60.2, 999.0], [60.3, 999.0], [60.4, 999.0], [60.5, 1000.0], [60.6, 1000.0], [60.7, 1000.0], [60.8, 1000.0], [60.9, 1000.0], [61.0, 1000.0], [61.1, 1000.0], [61.2, 1000.0], [61.3, 1000.0], [61.4, 1000.0], [61.5, 1000.0], [61.6, 1001.0], [61.7, 1001.0], [61.8, 1001.0], [61.9, 1001.0], [62.0, 1001.0], [62.1, 1001.0], [62.2, 1001.0], [62.3, 1001.0], [62.4, 1001.0], [62.5, 1001.0], [62.6, 1001.0], [62.7, 1002.0], [62.8, 1002.0], [62.9, 1002.0], [63.0, 1002.0], [63.1, 1002.0], [63.2, 1002.0], [63.3, 1002.0], [63.4, 1002.0], [63.5, 1002.0], [63.6, 1002.0], [63.7, 1002.0], [63.8, 1003.0], [63.9, 1003.0], [64.0, 1003.0], [64.1, 1003.0], [64.2, 1003.0], [64.3, 1003.0], [64.4, 1003.0], [64.5, 1003.0], [64.6, 1003.0], [64.7, 1003.0], [64.8, 1003.0], [64.9, 1003.0], [65.0, 1003.0], [65.1, 1004.0], [65.2, 1004.0], [65.3, 1004.0], [65.4, 1004.0], [65.5, 1004.0], [65.6, 1004.0], [65.7, 1004.0], [65.8, 1004.0], [65.9, 1004.0], [66.0, 1004.0], [66.1, 1004.0], [66.2, 1004.0], [66.3, 1004.0], [66.4, 1005.0], [66.5, 1005.0], [66.6, 1005.0], [66.7, 1005.0], [66.8, 1005.0], [66.9, 1005.0], [67.0, 1005.0], [67.1, 1005.0], [67.2, 1005.0], [67.3, 1005.0], [67.4, 1005.0], [67.5, 1006.0], [67.6, 1006.0], [67.7, 1006.0], [67.8, 1006.0], [67.9, 1006.0], [68.0, 1006.0], [68.1, 1006.0], [68.2, 1006.0], [68.3, 1006.0], [68.4, 1006.0], [68.5, 1006.0], [68.6, 1006.0], [68.7, 1007.0], [68.8, 1007.0], [68.9, 1007.0], [69.0, 1007.0], [69.1, 1007.0], [69.2, 1007.0], [69.3, 1007.0], [69.4, 1007.0], [69.5, 1007.0], [69.6, 1007.0], [69.7, 1007.0], [69.8, 1007.0], [69.9, 1007.0], [70.0, 1008.0], [70.1, 1008.0], [70.2, 1008.0], [70.3, 1008.0], [70.4, 1008.0], [70.5, 1008.0], [70.6, 1008.0], [70.7, 1008.0], [70.8, 1008.0], [70.9, 1009.0], [71.0, 1009.0], [71.1, 1009.0], [71.2, 1009.0], [71.3, 1009.0], [71.4, 1009.0], [71.5, 1009.0], [71.6, 1009.0], [71.7, 1009.0], [71.8, 1009.0], [71.9, 1009.0], [72.0, 1009.0], [72.1, 1009.0], [72.2, 1010.0], [72.3, 1010.0], [72.4, 1010.0], [72.5, 1010.0], [72.6, 1010.0], [72.7, 1010.0], [72.8, 1010.0], [72.9, 1010.0], [73.0, 1010.0], [73.1, 1010.0], [73.2, 1010.0], [73.3, 1011.0], [73.4, 1011.0], [73.5, 1011.0], [73.6, 1011.0], [73.7, 1011.0], [73.8, 1011.0], [73.9, 1011.0], [74.0, 1011.0], [74.1, 1011.0], [74.2, 1011.0], [74.3, 1011.0], [74.4, 1012.0], [74.5, 1012.0], [74.6, 1012.0], [74.7, 1012.0], [74.8, 1012.0], [74.9, 1013.0], [75.0, 1013.0], [75.1, 1013.0], [75.2, 1013.0], [75.3, 1013.0], [75.4, 1013.0], [75.5, 1013.0], [75.6, 1013.0], [75.7, 1014.0], [75.8, 1014.0], [75.9, 1014.0], [76.0, 1014.0], [76.1, 1014.0], [76.2, 1014.0], [76.3, 1014.0], [76.4, 1014.0], [76.5, 1014.0], [76.6, 1015.0], [76.7, 1015.0], [76.8, 1015.0], [76.9, 1016.0], [77.0, 1016.0], [77.1, 1016.0], [77.2, 1016.0], [77.3, 1016.0], [77.4, 1016.0], [77.5, 1017.0], [77.6, 1017.0], [77.7, 1017.0], [77.8, 1018.0], [77.9, 1018.0], [78.0, 1018.0], [78.1, 1018.0], [78.2, 1018.0], [78.3, 1018.0], [78.4, 1019.0], [78.5, 1019.0], [78.6, 1020.0], [78.7, 1020.0], [78.8, 1021.0], [78.9, 1021.0], [79.0, 1021.0], [79.1, 1022.0], [79.2, 1022.0], [79.3, 1022.0], [79.4, 1022.0], [79.5, 1023.0], [79.6, 1023.0], [79.7, 1024.0], [79.8, 1024.0], [79.9, 1025.0], [80.0, 1025.0], [80.1, 1026.0], [80.2, 1026.0], [80.3, 1027.0], [80.4, 1028.0], [80.5, 1029.0], [80.6, 1029.0], [80.7, 1030.0], [80.8, 1030.0], [80.9, 1030.0], [81.0, 1030.0], [81.1, 1031.0], [81.2, 1031.0], [81.3, 1032.0], [81.4, 1032.0], [81.5, 1033.0], [81.6, 1033.0], [81.7, 1033.0], [81.8, 1033.0], [81.9, 1033.0], [82.0, 1034.0], [82.1, 1034.0], [82.2, 1034.0], [82.3, 1034.0], [82.4, 1035.0], [82.5, 1035.0], [82.6, 1035.0], [82.7, 1035.0], [82.8, 1036.0], [82.9, 1036.0], [83.0, 1036.0], [83.1, 1037.0], [83.2, 1037.0], [83.3, 1037.0], [83.4, 1037.0], [83.5, 1038.0], [83.6, 1038.0], [83.7, 1038.0], [83.8, 1038.0], [83.9, 1039.0], [84.0, 1039.0], [84.1, 1039.0], [84.2, 1039.0], [84.3, 1039.0], [84.4, 1039.0], [84.5, 1040.0], [84.6, 1040.0], [84.7, 1040.0], [84.8, 1040.0], [84.9, 1040.0], [85.0, 1041.0], [85.1, 1041.0], [85.2, 1041.0], [85.3, 1041.0], [85.4, 1042.0], [85.5, 1042.0], [85.6, 1042.0], [85.7, 1042.0], [85.8, 1042.0], [85.9, 1042.0], [86.0, 1043.0], [86.1, 1043.0], [86.2, 1043.0], [86.3, 1043.0], [86.4, 1043.0], [86.5, 1044.0], [86.6, 1044.0], [86.7, 1044.0], [86.8, 1044.0], [86.9, 1044.0], [87.0, 1045.0], [87.1, 1045.0], [87.2, 1046.0], [87.3, 1046.0], [87.4, 1047.0], [87.5, 1047.0], [87.6, 1048.0], [87.7, 1048.0], [87.8, 1049.0], [87.9, 1049.0], [88.0, 1049.0], [88.1, 1050.0], [88.2, 1050.0], [88.3, 1051.0], [88.4, 1052.0], [88.5, 1052.0], [88.6, 1052.0], [88.7, 1053.0], [88.8, 1053.0], [88.9, 1054.0], [89.0, 1054.0], [89.1, 1054.0], [89.2, 1054.0], [89.3, 1055.0], [89.4, 1055.0], [89.5, 1055.0], [89.6, 1056.0], [89.7, 1056.0], [89.8, 1057.0], [89.9, 1057.0], [90.0, 1058.0], [90.1, 1059.0], [90.2, 1059.0], [90.3, 1061.0], [90.4, 1061.0], [90.5, 1062.0], [90.6, 1063.0], [90.7, 1064.0], [90.8, 1064.0], [90.9, 1065.0], [91.0, 1065.0], [91.1, 1066.0], [91.2, 1067.0], [91.3, 1068.0], [91.4, 1068.0], [91.5, 1069.0], [91.6, 1070.0], [91.7, 1071.0], [91.8, 1072.0], [91.9, 1072.0], [92.0, 1074.0], [92.1, 1075.0], [92.2, 1075.0], [92.3, 1076.0], [92.4, 1076.0], [92.5, 1078.0], [92.6, 1079.0], [92.7, 1080.0], [92.8, 1081.0], [92.9, 1082.0], [93.0, 1082.0], [93.1, 1084.0], [93.2, 1085.0], [93.3, 1085.0], [93.4, 1086.0], [93.5, 1087.0], [93.6, 1088.0], [93.7, 1088.0], [93.8, 1089.0], [93.9, 1090.0], [94.0, 1091.0], [94.1, 1093.0], [94.2, 1094.0], [94.3, 1096.0], [94.4, 1097.0], [94.5, 1097.0], [94.6, 1099.0], [94.7, 1102.0], [94.8, 1104.0], [94.9, 1107.0], [95.0, 1107.0], [95.1, 1107.0], [95.2, 1108.0], [95.3, 1110.0], [95.4, 1112.0], [95.5, 1113.0], [95.6, 1115.0], [95.7, 1120.0], [95.8, 1120.0], [95.9, 1123.0], [96.0, 1127.0], [96.1, 1128.0], [96.2, 1129.0], [96.3, 1132.0], [96.4, 1134.0], [96.5, 1135.0], [96.6, 1136.0], [96.7, 1136.0], [96.8, 1139.0], [96.9, 1140.0], [97.0, 1141.0], [97.1, 1143.0], [97.2, 1145.0], [97.3, 1146.0], [97.4, 1147.0], [97.5, 1148.0], [97.6, 1150.0], [97.7, 1154.0], [97.8, 1155.0], [97.9, 1163.0], [98.0, 1164.0], [98.1, 1170.0], [98.2, 1176.0], [98.3, 1178.0], [98.4, 1182.0], [98.5, 1184.0], [98.6, 1185.0], [98.7, 1187.0], [98.8, 1189.0], [98.9, 1193.0], [99.0, 1200.0], [99.1, 1201.0], [99.2, 1212.0], [99.3, 1219.0], [99.4, 1226.0], [99.5, 1232.0], [99.6, 1236.0], [99.7, 1283.0], [99.8, 1300.0], [99.9, 1332.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 1381.0, "series": [{"data": [[1100.0, 114.0], [600.0, 48.0], [1200.0, 20.0], [1300.0, 5.0], [700.0, 78.0], [1400.0, 1.0], [800.0, 63.0], [900.0, 1381.0], [1000.0, 887.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2597.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2597.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2597.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 42.357549857549905, "minX": 1.77999552E12, "maxY": 66.0, "series": [{"data": [[1.77999564E12, 62.32869565217393], [1.77999552E12, 42.357549857549905], [1.77999558E12, 66.0]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999564E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 698.4285714285714, "minX": 1.0, "maxY": 1059.5555555555557, "series": [{"data": [[2.0, 977.0], [3.0, 887.0], [4.0, 860.6666666666666], [5.0, 842.3333333333334], [6.0, 794.6666666666666], [7.0, 723.75], [8.0, 820.375], [9.0, 703.2], [10.0, 704.8], [11.0, 776.3636363636364], [12.0, 698.4285714285714], [13.0, 708.875], [14.0, 712.4444444444445], [15.0, 819.5], [16.0, 698.4615384615385], [17.0, 765.6666666666666], [18.0, 765.75], [19.0, 756.1538461538461], [20.0, 782.5714285714286], [21.0, 787.0], [22.0, 810.25], [23.0, 802.0], [24.0, 891.8333333333333], [25.0, 841.0], [26.0, 882.5333333333332], [27.0, 891.9090909090909], [28.0, 895.1666666666666], [29.0, 929.5454545454544], [30.0, 929.875], [31.0, 932.875], [32.0, 970.5294117647057], [33.0, 970.3], [34.0, 981.6666666666666], [35.0, 972.25], [36.0, 1034.3636363636363], [37.0, 986.9], [38.0, 1002.3749999999999], [39.0, 1036.3], [40.0, 1007.3], [41.0, 1027.7], [42.0, 1036.0714285714284], [43.0, 1034.5454545454545], [44.0, 1021.8181818181819], [45.0, 1052.111111111111], [46.0, 1008.9375], [47.0, 1041.1], [48.0, 1020.6666666666667], [49.0, 1016.4], [50.0, 1011.9166666666665], [51.0, 1013.6923076923076], [52.0, 1054.2307692307693], [53.0, 1048.5], [54.0, 1053.888888888889], [55.0, 1028.2727272727273], [56.0, 1022.7647058823529], [57.0, 1059.5555555555557], [58.0, 1028.153846153846], [59.0, 1015.909090909091], [60.0, 1024.2], [61.0, 1023.4999999999999], [62.0, 1028.8823529411766], [63.0, 1032.5], [64.0, 1049.3000000000002], [65.0, 1036.6], [66.0, 999.2247823860731], [1.0, 1015.0]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[58.796303427031226, 984.4081632653067]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 66.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1533.3333333333333, "minX": 1.77999552E12, "maxY": 5082.0, "series": [{"data": [[1.77999564E12, 2213.75], [1.77999552E12, 2702.7], [1.77999558E12, 5082.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77999564E12, 1533.3333333333333], [1.77999552E12, 1872.0], [1.77999558E12, 3520.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999564E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 949.3019943019939, "minX": 1.77999552E12, "maxY": 1000.6166666666666, "series": [{"data": [[1.77999564E12, 990.0591304347822], [1.77999552E12, 949.3019943019939], [1.77999558E12, 1000.6166666666666]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999564E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 949.2606837606843, "minX": 1.77999552E12, "maxY": 1000.5977272727266, "series": [{"data": [[1.77999564E12, 990.0365217391305], [1.77999552E12, 949.2606837606843], [1.77999558E12, 1000.5977272727266]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999564E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.77999552E12, "maxY": 0.07834757834757834, "series": [{"data": [[1.77999564E12, 0.0], [1.77999552E12, 0.07834757834757834], [1.77999558E12, 0.03939393939393942]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999564E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 649.0, "minX": 1.77999552E12, "maxY": 1447.0, "series": [{"data": [[1.77999564E12, 1232.0], [1.77999552E12, 1301.0], [1.77999558E12, 1447.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77999564E12, 921.0], [1.77999552E12, 649.0], [1.77999558E12, 921.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77999564E12, 1036.4], [1.77999552E12, 1067.7], [1.77999558E12, 1071.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77999564E12, 1135.4], [1.77999552E12, 1199.6700000000003], [1.77999558E12, 1221.37]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77999564E12, 986.0], [1.77999552E12, 994.0], [1.77999558E12, 990.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77999564E12, 1049.9999999999995], [1.77999552E12, 1112.25], [1.77999558E12, 1128.95]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999564E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 672.5, "minX": 1.0, "maxY": 1015.0, "series": [{"data": [[10.0, 672.5], [15.0, 689.0], [4.0, 842.0], [1.0, 1015.0], [17.0, 960.5], [18.0, 988.5], [19.0, 1001.0], [20.0, 961.0], [21.0, 987.0], [22.0, 1001.0], [23.0, 905.0], [24.0, 1001.5], [25.0, 1002.0], [26.0, 997.5], [27.0, 983.0], [7.0, 765.0], [28.0, 979.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 672.5, "minX": 1.0, "maxY": 1015.0, "series": [{"data": [[10.0, 672.5], [15.0, 689.0], [4.0, 840.0], [1.0, 1015.0], [17.0, 960.5], [18.0, 988.5], [19.0, 1001.0], [20.0, 961.0], [21.0, 987.0], [22.0, 1001.0], [23.0, 905.0], [24.0, 1001.5], [25.0, 1002.0], [26.0, 997.5], [27.0, 983.0], [7.0, 765.0], [28.0, 979.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 9.283333333333333, "minX": 1.77999552E12, "maxY": 22.0, "series": [{"data": [[1.77999564E12, 9.283333333333333], [1.77999552E12, 12.0], [1.77999558E12, 22.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999564E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.583333333333334, "minX": 1.77999552E12, "maxY": 22.0, "series": [{"data": [[1.77999564E12, 9.583333333333334], [1.77999552E12, 11.7], [1.77999558E12, 22.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999564E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.583333333333334, "minX": 1.77999552E12, "maxY": 22.0, "series": [{"data": [[1.77999564E12, 9.583333333333334], [1.77999552E12, 11.7], [1.77999558E12, 22.0]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999564E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.583333333333334, "minX": 1.77999552E12, "maxY": 22.0, "series": [{"data": [[1.77999564E12, 9.583333333333334], [1.77999552E12, 11.7], [1.77999558E12, 22.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999564E12, "title": "Total Transactions Per Second"}},
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

