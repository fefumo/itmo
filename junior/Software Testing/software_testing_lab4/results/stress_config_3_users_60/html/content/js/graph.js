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
        data: {"result": {"minY": 654.0, "minX": 0.0, "maxY": 1651.0, "series": [{"data": [[0.0, 654.0], [0.1, 661.0], [0.2, 661.0], [0.3, 669.0], [0.4, 671.0], [0.5, 676.0], [0.6, 683.0], [0.7, 684.0], [0.8, 686.0], [0.9, 687.0], [1.0, 689.0], [1.1, 691.0], [1.2, 699.0], [1.3, 699.0], [1.4, 700.0], [1.5, 700.0], [1.6, 701.0], [1.7, 702.0], [1.8, 707.0], [1.9, 708.0], [2.0, 708.0], [2.1, 715.0], [2.2, 716.0], [2.3, 716.0], [2.4, 717.0], [2.5, 718.0], [2.6, 721.0], [2.7, 723.0], [2.8, 728.0], [2.9, 728.0], [3.0, 736.0], [3.1, 736.0], [3.2, 737.0], [3.3, 737.0], [3.4, 746.0], [3.5, 749.0], [3.6, 754.0], [3.7, 758.0], [3.8, 759.0], [3.9, 759.0], [4.0, 760.0], [4.1, 760.0], [4.2, 764.0], [4.3, 770.0], [4.4, 774.0], [4.5, 776.0], [4.6, 778.0], [4.7, 782.0], [4.8, 787.0], [4.9, 788.0], [5.0, 799.0], [5.1, 805.0], [5.2, 806.0], [5.3, 806.0], [5.4, 811.0], [5.5, 819.0], [5.6, 821.0], [5.7, 822.0], [5.8, 826.0], [5.9, 833.0], [6.0, 836.0], [6.1, 837.0], [6.2, 840.0], [6.3, 842.0], [6.4, 845.0], [6.5, 848.0], [6.6, 848.0], [6.7, 851.0], [6.8, 855.0], [6.9, 857.0], [7.0, 866.0], [7.1, 866.0], [7.2, 870.0], [7.3, 872.0], [7.4, 873.0], [7.5, 873.0], [7.6, 874.0], [7.7, 875.0], [7.8, 875.0], [7.9, 876.0], [8.0, 876.0], [8.1, 876.0], [8.2, 877.0], [8.3, 877.0], [8.4, 877.0], [8.5, 878.0], [8.6, 879.0], [8.7, 879.0], [8.8, 880.0], [8.9, 880.0], [9.0, 880.0], [9.1, 880.0], [9.2, 881.0], [9.3, 881.0], [9.4, 881.0], [9.5, 881.0], [9.6, 882.0], [9.7, 882.0], [9.8, 882.0], [9.9, 883.0], [10.0, 883.0], [10.1, 883.0], [10.2, 883.0], [10.3, 883.0], [10.4, 884.0], [10.5, 884.0], [10.6, 884.0], [10.7, 884.0], [10.8, 884.0], [10.9, 884.0], [11.0, 884.0], [11.1, 884.0], [11.2, 885.0], [11.3, 885.0], [11.4, 885.0], [11.5, 885.0], [11.6, 885.0], [11.7, 885.0], [11.8, 885.0], [11.9, 885.0], [12.0, 885.0], [12.1, 886.0], [12.2, 886.0], [12.3, 886.0], [12.4, 886.0], [12.5, 886.0], [12.6, 886.0], [12.7, 886.0], [12.8, 886.0], [12.9, 886.0], [13.0, 886.0], [13.1, 886.0], [13.2, 886.0], [13.3, 886.0], [13.4, 887.0], [13.5, 887.0], [13.6, 887.0], [13.7, 887.0], [13.8, 887.0], [13.9, 887.0], [14.0, 888.0], [14.1, 888.0], [14.2, 888.0], [14.3, 888.0], [14.4, 888.0], [14.5, 888.0], [14.6, 888.0], [14.7, 889.0], [14.8, 889.0], [14.9, 889.0], [15.0, 889.0], [15.1, 889.0], [15.2, 889.0], [15.3, 889.0], [15.4, 889.0], [15.5, 889.0], [15.6, 889.0], [15.7, 890.0], [15.8, 890.0], [15.9, 890.0], [16.0, 890.0], [16.1, 890.0], [16.2, 890.0], [16.3, 890.0], [16.4, 890.0], [16.5, 890.0], [16.6, 890.0], [16.7, 891.0], [16.8, 891.0], [16.9, 891.0], [17.0, 891.0], [17.1, 891.0], [17.2, 891.0], [17.3, 891.0], [17.4, 891.0], [17.5, 891.0], [17.6, 892.0], [17.7, 892.0], [17.8, 892.0], [17.9, 892.0], [18.0, 892.0], [18.1, 892.0], [18.2, 892.0], [18.3, 892.0], [18.4, 892.0], [18.5, 892.0], [18.6, 892.0], [18.7, 892.0], [18.8, 892.0], [18.9, 892.0], [19.0, 892.0], [19.1, 892.0], [19.2, 893.0], [19.3, 893.0], [19.4, 893.0], [19.5, 893.0], [19.6, 893.0], [19.7, 893.0], [19.8, 893.0], [19.9, 893.0], [20.0, 893.0], [20.1, 894.0], [20.2, 894.0], [20.3, 894.0], [20.4, 894.0], [20.5, 894.0], [20.6, 894.0], [20.7, 894.0], [20.8, 894.0], [20.9, 895.0], [21.0, 895.0], [21.1, 895.0], [21.2, 895.0], [21.3, 895.0], [21.4, 895.0], [21.5, 895.0], [21.6, 895.0], [21.7, 896.0], [21.8, 896.0], [21.9, 896.0], [22.0, 896.0], [22.1, 896.0], [22.2, 896.0], [22.3, 896.0], [22.4, 896.0], [22.5, 896.0], [22.6, 897.0], [22.7, 897.0], [22.8, 897.0], [22.9, 897.0], [23.0, 897.0], [23.1, 897.0], [23.2, 897.0], [23.3, 897.0], [23.4, 898.0], [23.5, 898.0], [23.6, 899.0], [23.7, 899.0], [23.8, 899.0], [23.9, 899.0], [24.0, 899.0], [24.1, 900.0], [24.2, 900.0], [24.3, 900.0], [24.4, 900.0], [24.5, 900.0], [24.6, 900.0], [24.7, 900.0], [24.8, 900.0], [24.9, 900.0], [25.0, 900.0], [25.1, 900.0], [25.2, 901.0], [25.3, 901.0], [25.4, 901.0], [25.5, 901.0], [25.6, 901.0], [25.7, 902.0], [25.8, 902.0], [25.9, 902.0], [26.0, 902.0], [26.1, 902.0], [26.2, 902.0], [26.3, 903.0], [26.4, 903.0], [26.5, 903.0], [26.6, 903.0], [26.7, 903.0], [26.8, 904.0], [26.9, 904.0], [27.0, 904.0], [27.1, 904.0], [27.2, 904.0], [27.3, 904.0], [27.4, 904.0], [27.5, 905.0], [27.6, 905.0], [27.7, 905.0], [27.8, 905.0], [27.9, 905.0], [28.0, 905.0], [28.1, 906.0], [28.2, 906.0], [28.3, 906.0], [28.4, 906.0], [28.5, 906.0], [28.6, 906.0], [28.7, 906.0], [28.8, 906.0], [28.9, 906.0], [29.0, 907.0], [29.1, 907.0], [29.2, 907.0], [29.3, 907.0], [29.4, 907.0], [29.5, 907.0], [29.6, 907.0], [29.7, 908.0], [29.8, 908.0], [29.9, 908.0], [30.0, 908.0], [30.1, 908.0], [30.2, 909.0], [30.3, 909.0], [30.4, 909.0], [30.5, 909.0], [30.6, 909.0], [30.7, 910.0], [30.8, 910.0], [30.9, 910.0], [31.0, 910.0], [31.1, 910.0], [31.2, 910.0], [31.3, 910.0], [31.4, 911.0], [31.5, 911.0], [31.6, 911.0], [31.7, 911.0], [31.8, 911.0], [31.9, 911.0], [32.0, 911.0], [32.1, 912.0], [32.2, 912.0], [32.3, 912.0], [32.4, 912.0], [32.5, 912.0], [32.6, 912.0], [32.7, 912.0], [32.8, 912.0], [32.9, 912.0], [33.0, 912.0], [33.1, 912.0], [33.2, 912.0], [33.3, 912.0], [33.4, 913.0], [33.5, 913.0], [33.6, 913.0], [33.7, 913.0], [33.8, 913.0], [33.9, 914.0], [34.0, 914.0], [34.1, 914.0], [34.2, 914.0], [34.3, 914.0], [34.4, 914.0], [34.5, 914.0], [34.6, 914.0], [34.7, 914.0], [34.8, 914.0], [34.9, 914.0], [35.0, 915.0], [35.1, 915.0], [35.2, 915.0], [35.3, 915.0], [35.4, 915.0], [35.5, 915.0], [35.6, 915.0], [35.7, 915.0], [35.8, 915.0], [35.9, 916.0], [36.0, 916.0], [36.1, 916.0], [36.2, 916.0], [36.3, 916.0], [36.4, 916.0], [36.5, 916.0], [36.6, 916.0], [36.7, 916.0], [36.8, 916.0], [36.9, 917.0], [37.0, 917.0], [37.1, 917.0], [37.2, 917.0], [37.3, 918.0], [37.4, 918.0], [37.5, 918.0], [37.6, 918.0], [37.7, 918.0], [37.8, 918.0], [37.9, 918.0], [38.0, 919.0], [38.1, 919.0], [38.2, 919.0], [38.3, 919.0], [38.4, 919.0], [38.5, 919.0], [38.6, 920.0], [38.7, 920.0], [38.8, 920.0], [38.9, 920.0], [39.0, 920.0], [39.1, 920.0], [39.2, 920.0], [39.3, 921.0], [39.4, 921.0], [39.5, 921.0], [39.6, 921.0], [39.7, 921.0], [39.8, 921.0], [39.9, 921.0], [40.0, 922.0], [40.1, 922.0], [40.2, 922.0], [40.3, 922.0], [40.4, 922.0], [40.5, 922.0], [40.6, 923.0], [40.7, 923.0], [40.8, 923.0], [40.9, 923.0], [41.0, 923.0], [41.1, 923.0], [41.2, 923.0], [41.3, 923.0], [41.4, 923.0], [41.5, 923.0], [41.6, 924.0], [41.7, 924.0], [41.8, 924.0], [41.9, 924.0], [42.0, 925.0], [42.1, 925.0], [42.2, 925.0], [42.3, 925.0], [42.4, 925.0], [42.5, 925.0], [42.6, 925.0], [42.7, 925.0], [42.8, 925.0], [42.9, 925.0], [43.0, 925.0], [43.1, 926.0], [43.2, 926.0], [43.3, 926.0], [43.4, 926.0], [43.5, 926.0], [43.6, 926.0], [43.7, 926.0], [43.8, 927.0], [43.9, 927.0], [44.0, 927.0], [44.1, 927.0], [44.2, 927.0], [44.3, 927.0], [44.4, 927.0], [44.5, 927.0], [44.6, 928.0], [44.7, 928.0], [44.8, 928.0], [44.9, 928.0], [45.0, 928.0], [45.1, 928.0], [45.2, 928.0], [45.3, 928.0], [45.4, 928.0], [45.5, 928.0], [45.6, 928.0], [45.7, 928.0], [45.8, 928.0], [45.9, 929.0], [46.0, 929.0], [46.1, 929.0], [46.2, 929.0], [46.3, 929.0], [46.4, 929.0], [46.5, 929.0], [46.6, 929.0], [46.7, 929.0], [46.8, 929.0], [46.9, 929.0], [47.0, 929.0], [47.1, 930.0], [47.2, 930.0], [47.3, 930.0], [47.4, 930.0], [47.5, 930.0], [47.6, 930.0], [47.7, 930.0], [47.8, 931.0], [47.9, 931.0], [48.0, 931.0], [48.1, 931.0], [48.2, 931.0], [48.3, 931.0], [48.4, 931.0], [48.5, 931.0], [48.6, 931.0], [48.7, 931.0], [48.8, 931.0], [48.9, 931.0], [49.0, 931.0], [49.1, 931.0], [49.2, 931.0], [49.3, 931.0], [49.4, 932.0], [49.5, 932.0], [49.6, 932.0], [49.7, 932.0], [49.8, 932.0], [49.9, 932.0], [50.0, 932.0], [50.1, 932.0], [50.2, 932.0], [50.3, 932.0], [50.4, 932.0], [50.5, 932.0], [50.6, 933.0], [50.7, 933.0], [50.8, 933.0], [50.9, 933.0], [51.0, 933.0], [51.1, 933.0], [51.2, 933.0], [51.3, 933.0], [51.4, 933.0], [51.5, 933.0], [51.6, 933.0], [51.7, 933.0], [51.8, 933.0], [51.9, 933.0], [52.0, 933.0], [52.1, 933.0], [52.2, 933.0], [52.3, 933.0], [52.4, 933.0], [52.5, 933.0], [52.6, 933.0], [52.7, 934.0], [52.8, 934.0], [52.9, 934.0], [53.0, 934.0], [53.1, 934.0], [53.2, 934.0], [53.3, 934.0], [53.4, 934.0], [53.5, 934.0], [53.6, 934.0], [53.7, 934.0], [53.8, 934.0], [53.9, 934.0], [54.0, 934.0], [54.1, 934.0], [54.2, 934.0], [54.3, 934.0], [54.4, 934.0], [54.5, 934.0], [54.6, 934.0], [54.7, 934.0], [54.8, 934.0], [54.9, 934.0], [55.0, 934.0], [55.1, 934.0], [55.2, 934.0], [55.3, 934.0], [55.4, 935.0], [55.5, 935.0], [55.6, 935.0], [55.7, 935.0], [55.8, 935.0], [55.9, 935.0], [56.0, 935.0], [56.1, 935.0], [56.2, 935.0], [56.3, 935.0], [56.4, 935.0], [56.5, 935.0], [56.6, 935.0], [56.7, 935.0], [56.8, 935.0], [56.9, 935.0], [57.0, 935.0], [57.1, 935.0], [57.2, 935.0], [57.3, 935.0], [57.4, 935.0], [57.5, 936.0], [57.6, 936.0], [57.7, 936.0], [57.8, 936.0], [57.9, 936.0], [58.0, 936.0], [58.1, 936.0], [58.2, 936.0], [58.3, 936.0], [58.4, 936.0], [58.5, 936.0], [58.6, 936.0], [58.7, 936.0], [58.8, 936.0], [58.9, 936.0], [59.0, 936.0], [59.1, 936.0], [59.2, 936.0], [59.3, 937.0], [59.4, 937.0], [59.5, 937.0], [59.6, 937.0], [59.7, 937.0], [59.8, 937.0], [59.9, 937.0], [60.0, 937.0], [60.1, 937.0], [60.2, 937.0], [60.3, 937.0], [60.4, 937.0], [60.5, 937.0], [60.6, 938.0], [60.7, 938.0], [60.8, 938.0], [60.9, 938.0], [61.0, 938.0], [61.1, 938.0], [61.2, 938.0], [61.3, 938.0], [61.4, 938.0], [61.5, 938.0], [61.6, 938.0], [61.7, 938.0], [61.8, 938.0], [61.9, 938.0], [62.0, 938.0], [62.1, 938.0], [62.2, 938.0], [62.3, 939.0], [62.4, 939.0], [62.5, 939.0], [62.6, 939.0], [62.7, 939.0], [62.8, 939.0], [62.9, 939.0], [63.0, 939.0], [63.1, 939.0], [63.2, 939.0], [63.3, 939.0], [63.4, 940.0], [63.5, 940.0], [63.6, 940.0], [63.7, 940.0], [63.8, 940.0], [63.9, 940.0], [64.0, 941.0], [64.1, 941.0], [64.2, 941.0], [64.3, 941.0], [64.4, 941.0], [64.5, 942.0], [64.6, 942.0], [64.7, 942.0], [64.8, 942.0], [64.9, 942.0], [65.0, 942.0], [65.1, 942.0], [65.2, 942.0], [65.3, 942.0], [65.4, 942.0], [65.5, 942.0], [65.6, 942.0], [65.7, 942.0], [65.8, 943.0], [65.9, 943.0], [66.0, 943.0], [66.1, 943.0], [66.2, 943.0], [66.3, 943.0], [66.4, 943.0], [66.5, 944.0], [66.6, 944.0], [66.7, 944.0], [66.8, 944.0], [66.9, 944.0], [67.0, 944.0], [67.1, 944.0], [67.2, 944.0], [67.3, 944.0], [67.4, 945.0], [67.5, 945.0], [67.6, 945.0], [67.7, 945.0], [67.8, 945.0], [67.9, 945.0], [68.0, 945.0], [68.1, 945.0], [68.2, 945.0], [68.3, 945.0], [68.4, 946.0], [68.5, 946.0], [68.6, 946.0], [68.7, 946.0], [68.8, 946.0], [68.9, 946.0], [69.0, 946.0], [69.1, 946.0], [69.2, 946.0], [69.3, 947.0], [69.4, 947.0], [69.5, 947.0], [69.6, 947.0], [69.7, 947.0], [69.8, 947.0], [69.9, 947.0], [70.0, 948.0], [70.1, 948.0], [70.2, 948.0], [70.3, 948.0], [70.4, 948.0], [70.5, 948.0], [70.6, 948.0], [70.7, 949.0], [70.8, 949.0], [70.9, 949.0], [71.0, 949.0], [71.1, 949.0], [71.2, 949.0], [71.3, 949.0], [71.4, 950.0], [71.5, 950.0], [71.6, 950.0], [71.7, 950.0], [71.8, 950.0], [71.9, 951.0], [72.0, 951.0], [72.1, 951.0], [72.2, 951.0], [72.3, 951.0], [72.4, 951.0], [72.5, 952.0], [72.6, 952.0], [72.7, 952.0], [72.8, 952.0], [72.9, 952.0], [73.0, 952.0], [73.1, 952.0], [73.2, 953.0], [73.3, 953.0], [73.4, 953.0], [73.5, 953.0], [73.6, 954.0], [73.7, 954.0], [73.8, 954.0], [73.9, 954.0], [74.0, 954.0], [74.1, 954.0], [74.2, 955.0], [74.3, 955.0], [74.4, 956.0], [74.5, 956.0], [74.6, 956.0], [74.7, 956.0], [74.8, 956.0], [74.9, 957.0], [75.0, 957.0], [75.1, 957.0], [75.2, 957.0], [75.3, 957.0], [75.4, 957.0], [75.5, 958.0], [75.6, 958.0], [75.7, 958.0], [75.8, 959.0], [75.9, 959.0], [76.0, 959.0], [76.1, 959.0], [76.2, 960.0], [76.3, 960.0], [76.4, 960.0], [76.5, 960.0], [76.6, 961.0], [76.7, 961.0], [76.8, 961.0], [76.9, 961.0], [77.0, 961.0], [77.1, 962.0], [77.2, 962.0], [77.3, 962.0], [77.4, 962.0], [77.5, 962.0], [77.6, 963.0], [77.7, 963.0], [77.8, 963.0], [77.9, 964.0], [78.0, 964.0], [78.1, 965.0], [78.2, 965.0], [78.3, 965.0], [78.4, 965.0], [78.5, 965.0], [78.6, 965.0], [78.7, 966.0], [78.8, 966.0], [78.9, 966.0], [79.0, 966.0], [79.1, 967.0], [79.2, 967.0], [79.3, 967.0], [79.4, 967.0], [79.5, 968.0], [79.6, 968.0], [79.7, 968.0], [79.8, 968.0], [79.9, 969.0], [80.0, 969.0], [80.1, 969.0], [80.2, 970.0], [80.3, 970.0], [80.4, 970.0], [80.5, 971.0], [80.6, 971.0], [80.7, 972.0], [80.8, 972.0], [80.9, 972.0], [81.0, 972.0], [81.1, 973.0], [81.2, 973.0], [81.3, 973.0], [81.4, 974.0], [81.5, 974.0], [81.6, 975.0], [81.7, 975.0], [81.8, 975.0], [81.9, 976.0], [82.0, 976.0], [82.1, 976.0], [82.2, 976.0], [82.3, 977.0], [82.4, 977.0], [82.5, 978.0], [82.6, 978.0], [82.7, 978.0], [82.8, 979.0], [82.9, 979.0], [83.0, 979.0], [83.1, 979.0], [83.2, 980.0], [83.3, 980.0], [83.4, 980.0], [83.5, 980.0], [83.6, 981.0], [83.7, 981.0], [83.8, 981.0], [83.9, 981.0], [84.0, 981.0], [84.1, 982.0], [84.2, 982.0], [84.3, 982.0], [84.4, 982.0], [84.5, 983.0], [84.6, 983.0], [84.7, 984.0], [84.8, 984.0], [84.9, 984.0], [85.0, 985.0], [85.1, 985.0], [85.2, 985.0], [85.3, 985.0], [85.4, 986.0], [85.5, 986.0], [85.6, 986.0], [85.7, 986.0], [85.8, 986.0], [85.9, 987.0], [86.0, 987.0], [86.1, 987.0], [86.2, 987.0], [86.3, 987.0], [86.4, 987.0], [86.5, 988.0], [86.6, 988.0], [86.7, 988.0], [86.8, 989.0], [86.9, 989.0], [87.0, 989.0], [87.1, 989.0], [87.2, 989.0], [87.3, 990.0], [87.4, 990.0], [87.5, 991.0], [87.6, 991.0], [87.7, 991.0], [87.8, 992.0], [87.9, 992.0], [88.0, 993.0], [88.1, 993.0], [88.2, 994.0], [88.3, 995.0], [88.4, 995.0], [88.5, 995.0], [88.6, 996.0], [88.7, 996.0], [88.8, 996.0], [88.9, 997.0], [89.0, 997.0], [89.1, 997.0], [89.2, 998.0], [89.3, 998.0], [89.4, 998.0], [89.5, 998.0], [89.6, 999.0], [89.7, 999.0], [89.8, 999.0], [89.9, 1000.0], [90.0, 1000.0], [90.1, 1001.0], [90.2, 1001.0], [90.3, 1002.0], [90.4, 1002.0], [90.5, 1003.0], [90.6, 1004.0], [90.7, 1005.0], [90.8, 1005.0], [90.9, 1007.0], [91.0, 1007.0], [91.1, 1008.0], [91.2, 1009.0], [91.3, 1011.0], [91.4, 1012.0], [91.5, 1015.0], [91.6, 1016.0], [91.7, 1019.0], [91.8, 1020.0], [91.9, 1022.0], [92.0, 1024.0], [92.1, 1026.0], [92.2, 1028.0], [92.3, 1030.0], [92.4, 1031.0], [92.5, 1032.0], [92.6, 1032.0], [92.7, 1033.0], [92.8, 1034.0], [92.9, 1035.0], [93.0, 1036.0], [93.1, 1037.0], [93.2, 1037.0], [93.3, 1039.0], [93.4, 1040.0], [93.5, 1040.0], [93.6, 1041.0], [93.7, 1041.0], [93.8, 1042.0], [93.9, 1045.0], [94.0, 1045.0], [94.1, 1046.0], [94.2, 1047.0], [94.3, 1048.0], [94.4, 1049.0], [94.5, 1050.0], [94.6, 1051.0], [94.7, 1053.0], [94.8, 1056.0], [94.9, 1057.0], [95.0, 1057.0], [95.1, 1058.0], [95.2, 1066.0], [95.3, 1075.0], [95.4, 1077.0], [95.5, 1077.0], [95.6, 1079.0], [95.7, 1080.0], [95.8, 1080.0], [95.9, 1082.0], [96.0, 1083.0], [96.1, 1086.0], [96.2, 1087.0], [96.3, 1089.0], [96.4, 1090.0], [96.5, 1092.0], [96.6, 1092.0], [96.7, 1094.0], [96.8, 1095.0], [96.9, 1096.0], [97.0, 1098.0], [97.1, 1098.0], [97.2, 1099.0], [97.3, 1103.0], [97.4, 1108.0], [97.5, 1115.0], [97.6, 1117.0], [97.7, 1121.0], [97.8, 1132.0], [97.9, 1134.0], [98.0, 1135.0], [98.1, 1137.0], [98.2, 1138.0], [98.3, 1139.0], [98.4, 1154.0], [98.5, 1170.0], [98.6, 1177.0], [98.7, 1189.0], [98.8, 1191.0], [98.9, 1202.0], [99.0, 1202.0], [99.1, 1218.0], [99.2, 1234.0], [99.3, 1240.0], [99.4, 1254.0], [99.5, 1290.0], [99.6, 1308.0], [99.7, 1371.0], [99.8, 1413.0], [99.9, 1541.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 1550.0, "series": [{"data": [[1100.0, 37.0], [600.0, 32.0], [1200.0, 18.0], [1300.0, 4.0], [700.0, 86.0], [1400.0, 3.0], [1500.0, 1.0], [800.0, 450.0], [1600.0, 2.0], [900.0, 1550.0], [1000.0, 175.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2355.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2355.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 41.128987517337094, "minX": 1.7799954E12, "maxY": 60.0, "series": [{"data": [[1.7799954E12, 41.128987517337094], [1.77999552E12, 55.95671981776766], [1.77999546E12, 60.0]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999552E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 704.625, "minX": 2.0, "maxY": 1236.2, "series": [{"data": [[2.0, 922.6666666666666], [4.0, 855.0], [5.0, 752.0], [6.0, 820.125], [7.0, 763.2], [8.0, 717.6], [9.0, 800.8571428571428], [10.0, 726.75], [11.0, 749.75], [12.0, 751.9], [13.0, 704.625], [14.0, 776.5], [15.0, 837.3333333333334], [16.0, 749.2], [17.0, 758.7692307692307], [18.0, 750.0833333333334], [19.0, 785.75], [20.0, 777.5999999999999], [21.0, 797.8571428571429], [22.0, 780.3333333333333], [23.0, 840.7272727272727], [24.0, 853.0], [25.0, 856.7499999999999], [26.0, 943.4444444444446], [27.0, 891.6666666666666], [28.0, 911.9090909090909], [29.0, 881.7], [30.0, 921.25], [31.0, 936.5999999999999], [32.0, 931.5], [33.0, 976.7272727272726], [34.0, 950.6666666666666], [35.0, 1236.2], [36.0, 923.0], [37.0, 1018.0769230769231], [38.0, 961.125], [39.0, 1002.4000000000001], [40.0, 986.9999999999999], [41.0, 989.5555555555555], [42.0, 956.6666666666665], [43.0, 937.8461538461538], [44.0, 966.7499999999999], [45.0, 972.6999999999999], [46.0, 955.2222222222222], [47.0, 962.5454545454545], [48.0, 965.6666666666666], [49.0, 982.5], [50.0, 953.5333333333333], [51.0, 975.6666666666666], [52.0, 962.0624999999999], [53.0, 956.5384615384614], [54.0, 973.3333333333335], [55.0, 981.0], [56.0, 971.5], [57.0, 944.2222222222221], [58.0, 977.8333333333334], [59.0, 961.0], [60.0, 941.79706048615]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[53.47709923664123, 933.2866836301943]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 60.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1170.6666666666667, "minX": 1.7799954E12, "maxY": 4612.3, "series": [{"data": [[1.7799954E12, 2775.85], [1.77999552E12, 1690.15], [1.77999546E12, 4612.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7799954E12, 1922.6666666666667], [1.77999552E12, 1170.6666666666667], [1.77999546E12, 3194.6666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999552E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 922.3065187239936, "minX": 1.7799954E12, "maxY": 941.0659432387305, "series": [{"data": [[1.7799954E12, 922.3065187239936], [1.77999552E12, 930.0911161731209], [1.77999546E12, 941.0659432387305]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999552E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 922.2538141470188, "minX": 1.7799954E12, "maxY": 941.0417362270458, "series": [{"data": [[1.7799954E12, 922.2538141470188], [1.77999552E12, 930.0706150341686], [1.77999546E12, 941.0417362270458]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999552E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7799954E12, "maxY": 0.07212205270457697, "series": [{"data": [[1.7799954E12, 0.07212205270457697], [1.77999552E12, 0.0], [1.77999546E12, 0.03338898163606009]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999552E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 654.0, "minX": 1.7799954E12, "maxY": 1651.0, "series": [{"data": [[1.7799954E12, 1651.0], [1.77999552E12, 1202.0], [1.77999546E12, 1541.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7799954E12, 654.0], [1.77999552E12, 874.0], [1.77999546E12, 870.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7799954E12, 1037.8000000000002], [1.77999552E12, 977.0], [1.77999546E12, 999.1000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7799954E12, 1353.3999999999978], [1.77999552E12, 1082.8000000000002], [1.77999546E12, 1145.3199999999997]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7799954E12, 935.0], [1.77999552E12, 927.0], [1.77999546E12, 932.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7799954E12, 1096.0], [1.77999552E12, 997.0], [1.77999546E12, 1051.1]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999552E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 691.0, "minX": 1.0, "maxY": 938.0, "series": [{"data": [[8.0, 708.5], [9.0, 691.0], [11.0, 700.0], [3.0, 803.0], [13.0, 903.0], [14.0, 935.0], [15.0, 912.0], [1.0, 843.0], [16.0, 934.5], [17.0, 919.5], [18.0, 937.0], [19.0, 932.5], [20.0, 933.0], [21.0, 910.0], [22.0, 918.0], [23.0, 938.0], [24.0, 935.0], [25.0, 933.0], [26.0, 931.0], [27.0, 936.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 691.0, "minX": 1.0, "maxY": 938.0, "series": [{"data": [[8.0, 708.5], [9.0, 691.0], [11.0, 700.0], [3.0, 803.0], [13.0, 903.0], [14.0, 935.0], [15.0, 912.0], [1.0, 839.0], [16.0, 934.5], [17.0, 919.5], [18.0, 937.0], [19.0, 932.5], [20.0, 933.0], [21.0, 910.0], [22.0, 918.0], [23.0, 938.0], [24.0, 935.0], [25.0, 933.0], [26.0, 931.0], [27.0, 936.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.033333333333333, "minX": 1.7799954E12, "maxY": 20.0, "series": [{"data": [[1.7799954E12, 12.266666666666667], [1.77999552E12, 7.033333333333333], [1.77999546E12, 20.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999552E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.316666666666666, "minX": 1.7799954E12, "maxY": 19.966666666666665, "series": [{"data": [[1.7799954E12, 12.016666666666667], [1.77999552E12, 7.316666666666666], [1.77999546E12, 19.966666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999552E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.316666666666666, "minX": 1.7799954E12, "maxY": 19.966666666666665, "series": [{"data": [[1.7799954E12, 12.016666666666667], [1.77999552E12, 7.316666666666666], [1.77999546E12, 19.966666666666665]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999552E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.316666666666666, "minX": 1.7799954E12, "maxY": 19.966666666666665, "series": [{"data": [[1.7799954E12, 12.016666666666667], [1.77999552E12, 7.316666666666666], [1.77999546E12, 19.966666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999552E12, "title": "Total Transactions Per Second"}},
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

