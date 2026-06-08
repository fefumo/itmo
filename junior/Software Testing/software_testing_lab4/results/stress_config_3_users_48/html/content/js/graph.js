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
        data: {"result": {"minY": 646.0, "minX": 0.0, "maxY": 1162.0, "series": [{"data": [[0.0, 646.0], [0.1, 646.0], [0.2, 652.0], [0.3, 652.0], [0.4, 656.0], [0.5, 657.0], [0.6, 660.0], [0.7, 665.0], [0.8, 669.0], [0.9, 671.0], [1.0, 671.0], [1.1, 672.0], [1.2, 674.0], [1.3, 674.0], [1.4, 676.0], [1.5, 681.0], [1.6, 684.0], [1.7, 685.0], [1.8, 688.0], [1.9, 690.0], [2.0, 696.0], [2.1, 700.0], [2.2, 700.0], [2.3, 700.0], [2.4, 700.0], [2.5, 701.0], [2.6, 702.0], [2.7, 703.0], [2.8, 712.0], [2.9, 713.0], [3.0, 713.0], [3.1, 713.0], [3.2, 715.0], [3.3, 715.0], [3.4, 718.0], [3.5, 721.0], [3.6, 724.0], [3.7, 724.0], [3.8, 726.0], [3.9, 726.0], [4.0, 729.0], [4.1, 731.0], [4.2, 733.0], [4.3, 735.0], [4.4, 738.0], [4.5, 738.0], [4.6, 742.0], [4.7, 743.0], [4.8, 743.0], [4.9, 744.0], [5.0, 750.0], [5.1, 751.0], [5.2, 756.0], [5.3, 757.0], [5.4, 759.0], [5.5, 762.0], [5.6, 764.0], [5.7, 765.0], [5.8, 768.0], [5.9, 770.0], [6.0, 771.0], [6.1, 774.0], [6.2, 780.0], [6.3, 781.0], [6.4, 781.0], [6.5, 782.0], [6.6, 783.0], [6.7, 783.0], [6.8, 783.0], [6.9, 783.0], [7.0, 784.0], [7.1, 784.0], [7.2, 785.0], [7.3, 786.0], [7.4, 786.0], [7.5, 786.0], [7.6, 786.0], [7.7, 786.0], [7.8, 787.0], [7.9, 787.0], [8.0, 787.0], [8.1, 787.0], [8.2, 788.0], [8.3, 789.0], [8.4, 789.0], [8.5, 789.0], [8.6, 789.0], [8.7, 789.0], [8.8, 790.0], [8.9, 790.0], [9.0, 790.0], [9.1, 790.0], [9.2, 790.0], [9.3, 790.0], [9.4, 790.0], [9.5, 791.0], [9.6, 791.0], [9.7, 791.0], [9.8, 791.0], [9.9, 792.0], [10.0, 792.0], [10.1, 792.0], [10.2, 792.0], [10.3, 792.0], [10.4, 793.0], [10.5, 793.0], [10.6, 793.0], [10.7, 794.0], [10.8, 794.0], [10.9, 794.0], [11.0, 794.0], [11.1, 794.0], [11.2, 794.0], [11.3, 795.0], [11.4, 795.0], [11.5, 795.0], [11.6, 795.0], [11.7, 795.0], [11.8, 796.0], [11.9, 796.0], [12.0, 796.0], [12.1, 796.0], [12.2, 796.0], [12.3, 797.0], [12.4, 797.0], [12.5, 797.0], [12.6, 797.0], [12.7, 797.0], [12.8, 797.0], [12.9, 797.0], [13.0, 798.0], [13.1, 798.0], [13.2, 798.0], [13.3, 798.0], [13.4, 799.0], [13.5, 799.0], [13.6, 799.0], [13.7, 799.0], [13.8, 799.0], [13.9, 800.0], [14.0, 800.0], [14.1, 800.0], [14.2, 800.0], [14.3, 800.0], [14.4, 800.0], [14.5, 801.0], [14.6, 801.0], [14.7, 801.0], [14.8, 801.0], [14.9, 801.0], [15.0, 801.0], [15.1, 801.0], [15.2, 801.0], [15.3, 802.0], [15.4, 802.0], [15.5, 802.0], [15.6, 802.0], [15.7, 802.0], [15.8, 803.0], [15.9, 803.0], [16.0, 803.0], [16.1, 803.0], [16.2, 803.0], [16.3, 804.0], [16.4, 804.0], [16.5, 804.0], [16.6, 804.0], [16.7, 804.0], [16.8, 804.0], [16.9, 804.0], [17.0, 804.0], [17.1, 805.0], [17.2, 805.0], [17.3, 805.0], [17.4, 805.0], [17.5, 805.0], [17.6, 805.0], [17.7, 805.0], [17.8, 805.0], [17.9, 806.0], [18.0, 806.0], [18.1, 806.0], [18.2, 806.0], [18.3, 807.0], [18.4, 807.0], [18.5, 807.0], [18.6, 807.0], [18.7, 807.0], [18.8, 808.0], [18.9, 808.0], [19.0, 808.0], [19.1, 808.0], [19.2, 808.0], [19.3, 809.0], [19.4, 809.0], [19.5, 809.0], [19.6, 809.0], [19.7, 809.0], [19.8, 810.0], [19.9, 810.0], [20.0, 810.0], [20.1, 810.0], [20.2, 810.0], [20.3, 811.0], [20.4, 811.0], [20.5, 811.0], [20.6, 811.0], [20.7, 811.0], [20.8, 811.0], [20.9, 811.0], [21.0, 811.0], [21.1, 812.0], [21.2, 812.0], [21.3, 812.0], [21.4, 812.0], [21.5, 812.0], [21.6, 812.0], [21.7, 812.0], [21.8, 812.0], [21.9, 812.0], [22.0, 812.0], [22.1, 812.0], [22.2, 812.0], [22.3, 812.0], [22.4, 812.0], [22.5, 813.0], [22.6, 813.0], [22.7, 813.0], [22.8, 813.0], [22.9, 814.0], [23.0, 814.0], [23.1, 814.0], [23.2, 814.0], [23.3, 814.0], [23.4, 814.0], [23.5, 814.0], [23.6, 814.0], [23.7, 815.0], [23.8, 815.0], [23.9, 815.0], [24.0, 815.0], [24.1, 815.0], [24.2, 815.0], [24.3, 815.0], [24.4, 815.0], [24.5, 815.0], [24.6, 815.0], [24.7, 815.0], [24.8, 815.0], [24.9, 815.0], [25.0, 815.0], [25.1, 816.0], [25.2, 816.0], [25.3, 816.0], [25.4, 816.0], [25.5, 816.0], [25.6, 816.0], [25.7, 816.0], [25.8, 816.0], [25.9, 816.0], [26.0, 816.0], [26.1, 816.0], [26.2, 816.0], [26.3, 817.0], [26.4, 817.0], [26.5, 817.0], [26.6, 817.0], [26.7, 817.0], [26.8, 817.0], [26.9, 817.0], [27.0, 817.0], [27.1, 818.0], [27.2, 818.0], [27.3, 818.0], [27.4, 818.0], [27.5, 818.0], [27.6, 818.0], [27.7, 818.0], [27.8, 818.0], [27.9, 818.0], [28.0, 818.0], [28.1, 818.0], [28.2, 818.0], [28.3, 818.0], [28.4, 818.0], [28.5, 818.0], [28.6, 819.0], [28.7, 819.0], [28.8, 819.0], [28.9, 819.0], [29.0, 819.0], [29.1, 819.0], [29.2, 819.0], [29.3, 819.0], [29.4, 819.0], [29.5, 820.0], [29.6, 820.0], [29.7, 820.0], [29.8, 820.0], [29.9, 820.0], [30.0, 820.0], [30.1, 820.0], [30.2, 820.0], [30.3, 820.0], [30.4, 820.0], [30.5, 820.0], [30.6, 820.0], [30.7, 820.0], [30.8, 821.0], [30.9, 821.0], [31.0, 821.0], [31.1, 821.0], [31.2, 821.0], [31.3, 821.0], [31.4, 821.0], [31.5, 821.0], [31.6, 821.0], [31.7, 821.0], [31.8, 821.0], [31.9, 821.0], [32.0, 821.0], [32.1, 821.0], [32.2, 821.0], [32.3, 821.0], [32.4, 821.0], [32.5, 821.0], [32.6, 821.0], [32.7, 821.0], [32.8, 822.0], [32.9, 822.0], [33.0, 822.0], [33.1, 822.0], [33.2, 822.0], [33.3, 822.0], [33.4, 822.0], [33.5, 822.0], [33.6, 822.0], [33.7, 822.0], [33.8, 822.0], [33.9, 822.0], [34.0, 822.0], [34.1, 822.0], [34.2, 822.0], [34.3, 822.0], [34.4, 822.0], [34.5, 823.0], [34.6, 823.0], [34.7, 823.0], [34.8, 823.0], [34.9, 823.0], [35.0, 823.0], [35.1, 823.0], [35.2, 823.0], [35.3, 823.0], [35.4, 823.0], [35.5, 823.0], [35.6, 823.0], [35.7, 823.0], [35.8, 823.0], [35.9, 823.0], [36.0, 823.0], [36.1, 823.0], [36.2, 823.0], [36.3, 823.0], [36.4, 823.0], [36.5, 823.0], [36.6, 823.0], [36.7, 823.0], [36.8, 823.0], [36.9, 823.0], [37.0, 824.0], [37.1, 824.0], [37.2, 824.0], [37.3, 824.0], [37.4, 824.0], [37.5, 824.0], [37.6, 824.0], [37.7, 824.0], [37.8, 824.0], [37.9, 824.0], [38.0, 824.0], [38.1, 824.0], [38.2, 824.0], [38.3, 824.0], [38.4, 824.0], [38.5, 824.0], [38.6, 824.0], [38.7, 824.0], [38.8, 824.0], [38.9, 824.0], [39.0, 824.0], [39.1, 824.0], [39.2, 824.0], [39.3, 825.0], [39.4, 825.0], [39.5, 825.0], [39.6, 825.0], [39.7, 825.0], [39.8, 825.0], [39.9, 825.0], [40.0, 825.0], [40.1, 825.0], [40.2, 825.0], [40.3, 825.0], [40.4, 825.0], [40.5, 825.0], [40.6, 825.0], [40.7, 825.0], [40.8, 825.0], [40.9, 825.0], [41.0, 825.0], [41.1, 825.0], [41.2, 825.0], [41.3, 825.0], [41.4, 825.0], [41.5, 825.0], [41.6, 825.0], [41.7, 825.0], [41.8, 826.0], [41.9, 826.0], [42.0, 826.0], [42.1, 826.0], [42.2, 826.0], [42.3, 826.0], [42.4, 826.0], [42.5, 826.0], [42.6, 826.0], [42.7, 826.0], [42.8, 826.0], [42.9, 826.0], [43.0, 826.0], [43.1, 826.0], [43.2, 826.0], [43.3, 826.0], [43.4, 826.0], [43.5, 827.0], [43.6, 827.0], [43.7, 827.0], [43.8, 827.0], [43.9, 827.0], [44.0, 827.0], [44.1, 827.0], [44.2, 827.0], [44.3, 827.0], [44.4, 827.0], [44.5, 827.0], [44.6, 827.0], [44.7, 827.0], [44.8, 827.0], [44.9, 827.0], [45.0, 827.0], [45.1, 828.0], [45.2, 828.0], [45.3, 828.0], [45.4, 828.0], [45.5, 828.0], [45.6, 828.0], [45.7, 828.0], [45.8, 828.0], [45.9, 828.0], [46.0, 828.0], [46.1, 828.0], [46.2, 828.0], [46.3, 829.0], [46.4, 829.0], [46.5, 829.0], [46.6, 829.0], [46.7, 829.0], [46.8, 829.0], [46.9, 829.0], [47.0, 829.0], [47.1, 829.0], [47.2, 829.0], [47.3, 829.0], [47.4, 829.0], [47.5, 829.0], [47.6, 829.0], [47.7, 829.0], [47.8, 830.0], [47.9, 830.0], [48.0, 830.0], [48.1, 830.0], [48.2, 830.0], [48.3, 830.0], [48.4, 830.0], [48.5, 830.0], [48.6, 830.0], [48.7, 830.0], [48.8, 830.0], [48.9, 830.0], [49.0, 830.0], [49.1, 830.0], [49.2, 830.0], [49.3, 830.0], [49.4, 830.0], [49.5, 831.0], [49.6, 831.0], [49.7, 831.0], [49.8, 831.0], [49.9, 831.0], [50.0, 831.0], [50.1, 831.0], [50.2, 832.0], [50.3, 832.0], [50.4, 832.0], [50.5, 832.0], [50.6, 832.0], [50.7, 832.0], [50.8, 832.0], [50.9, 832.0], [51.0, 832.0], [51.1, 832.0], [51.2, 832.0], [51.3, 832.0], [51.4, 832.0], [51.5, 832.0], [51.6, 833.0], [51.7, 833.0], [51.8, 833.0], [51.9, 833.0], [52.0, 833.0], [52.1, 833.0], [52.2, 833.0], [52.3, 834.0], [52.4, 834.0], [52.5, 834.0], [52.6, 834.0], [52.7, 834.0], [52.8, 834.0], [52.9, 835.0], [53.0, 835.0], [53.1, 835.0], [53.2, 835.0], [53.3, 835.0], [53.4, 835.0], [53.5, 835.0], [53.6, 836.0], [53.7, 836.0], [53.8, 836.0], [53.9, 836.0], [54.0, 836.0], [54.1, 836.0], [54.2, 836.0], [54.3, 836.0], [54.4, 836.0], [54.5, 836.0], [54.6, 836.0], [54.7, 837.0], [54.8, 837.0], [54.9, 837.0], [55.0, 837.0], [55.1, 837.0], [55.2, 837.0], [55.3, 837.0], [55.4, 837.0], [55.5, 837.0], [55.6, 837.0], [55.7, 837.0], [55.8, 837.0], [55.9, 838.0], [56.0, 838.0], [56.1, 838.0], [56.2, 838.0], [56.3, 838.0], [56.4, 838.0], [56.5, 838.0], [56.6, 839.0], [56.7, 839.0], [56.8, 839.0], [56.9, 839.0], [57.0, 840.0], [57.1, 840.0], [57.2, 840.0], [57.3, 840.0], [57.4, 841.0], [57.5, 841.0], [57.6, 841.0], [57.7, 841.0], [57.8, 841.0], [57.9, 842.0], [58.0, 842.0], [58.1, 842.0], [58.2, 842.0], [58.3, 842.0], [58.4, 842.0], [58.5, 843.0], [58.6, 843.0], [58.7, 843.0], [58.8, 843.0], [58.9, 843.0], [59.0, 843.0], [59.1, 843.0], [59.2, 843.0], [59.3, 843.0], [59.4, 843.0], [59.5, 844.0], [59.6, 844.0], [59.7, 844.0], [59.8, 844.0], [59.9, 844.0], [60.0, 844.0], [60.1, 844.0], [60.2, 844.0], [60.3, 844.0], [60.4, 844.0], [60.5, 844.0], [60.6, 845.0], [60.7, 845.0], [60.8, 845.0], [60.9, 845.0], [61.0, 845.0], [61.1, 845.0], [61.2, 845.0], [61.3, 845.0], [61.4, 845.0], [61.5, 845.0], [61.6, 845.0], [61.7, 845.0], [61.8, 846.0], [61.9, 846.0], [62.0, 846.0], [62.1, 846.0], [62.2, 846.0], [62.3, 846.0], [62.4, 846.0], [62.5, 846.0], [62.6, 846.0], [62.7, 846.0], [62.8, 846.0], [62.9, 846.0], [63.0, 846.0], [63.1, 847.0], [63.2, 847.0], [63.3, 847.0], [63.4, 847.0], [63.5, 847.0], [63.6, 847.0], [63.7, 847.0], [63.8, 847.0], [63.9, 847.0], [64.0, 847.0], [64.1, 847.0], [64.2, 847.0], [64.3, 848.0], [64.4, 848.0], [64.5, 848.0], [64.6, 848.0], [64.7, 848.0], [64.8, 848.0], [64.9, 848.0], [65.0, 848.0], [65.1, 848.0], [65.2, 848.0], [65.3, 848.0], [65.4, 848.0], [65.5, 848.0], [65.6, 848.0], [65.7, 848.0], [65.8, 849.0], [65.9, 849.0], [66.0, 849.0], [66.1, 849.0], [66.2, 849.0], [66.3, 849.0], [66.4, 849.0], [66.5, 849.0], [66.6, 850.0], [66.7, 850.0], [66.8, 850.0], [66.9, 850.0], [67.0, 850.0], [67.1, 850.0], [67.2, 850.0], [67.3, 850.0], [67.4, 850.0], [67.5, 850.0], [67.6, 850.0], [67.7, 851.0], [67.8, 851.0], [67.9, 851.0], [68.0, 851.0], [68.1, 851.0], [68.2, 851.0], [68.3, 851.0], [68.4, 851.0], [68.5, 851.0], [68.6, 851.0], [68.7, 852.0], [68.8, 852.0], [68.9, 852.0], [69.0, 852.0], [69.1, 852.0], [69.2, 852.0], [69.3, 852.0], [69.4, 852.0], [69.5, 853.0], [69.6, 853.0], [69.7, 853.0], [69.8, 853.0], [69.9, 853.0], [70.0, 854.0], [70.1, 854.0], [70.2, 854.0], [70.3, 854.0], [70.4, 854.0], [70.5, 854.0], [70.6, 854.0], [70.7, 854.0], [70.8, 854.0], [70.9, 855.0], [71.0, 855.0], [71.1, 855.0], [71.2, 855.0], [71.3, 855.0], [71.4, 855.0], [71.5, 855.0], [71.6, 855.0], [71.7, 855.0], [71.8, 855.0], [71.9, 855.0], [72.0, 856.0], [72.1, 856.0], [72.2, 856.0], [72.3, 856.0], [72.4, 856.0], [72.5, 856.0], [72.6, 857.0], [72.7, 857.0], [72.8, 857.0], [72.9, 857.0], [73.0, 857.0], [73.1, 858.0], [73.2, 858.0], [73.3, 858.0], [73.4, 858.0], [73.5, 858.0], [73.6, 858.0], [73.7, 859.0], [73.8, 859.0], [73.9, 859.0], [74.0, 859.0], [74.1, 859.0], [74.2, 859.0], [74.3, 859.0], [74.4, 859.0], [74.5, 860.0], [74.6, 860.0], [74.7, 860.0], [74.8, 860.0], [74.9, 860.0], [75.0, 860.0], [75.1, 860.0], [75.2, 860.0], [75.3, 860.0], [75.4, 860.0], [75.5, 861.0], [75.6, 861.0], [75.7, 861.0], [75.8, 861.0], [75.9, 861.0], [76.0, 861.0], [76.1, 861.0], [76.2, 862.0], [76.3, 862.0], [76.4, 862.0], [76.5, 862.0], [76.6, 862.0], [76.7, 862.0], [76.8, 862.0], [76.9, 862.0], [77.0, 862.0], [77.1, 863.0], [77.2, 863.0], [77.3, 863.0], [77.4, 863.0], [77.5, 864.0], [77.6, 864.0], [77.7, 864.0], [77.8, 864.0], [77.9, 864.0], [78.0, 864.0], [78.1, 865.0], [78.2, 865.0], [78.3, 865.0], [78.4, 866.0], [78.5, 866.0], [78.6, 866.0], [78.7, 866.0], [78.8, 866.0], [78.9, 867.0], [79.0, 868.0], [79.1, 868.0], [79.2, 869.0], [79.3, 869.0], [79.4, 869.0], [79.5, 869.0], [79.6, 870.0], [79.7, 870.0], [79.8, 870.0], [79.9, 870.0], [80.0, 870.0], [80.1, 870.0], [80.2, 870.0], [80.3, 871.0], [80.4, 871.0], [80.5, 871.0], [80.6, 871.0], [80.7, 871.0], [80.8, 872.0], [80.9, 872.0], [81.0, 872.0], [81.1, 872.0], [81.2, 873.0], [81.3, 873.0], [81.4, 873.0], [81.5, 873.0], [81.6, 873.0], [81.7, 873.0], [81.8, 873.0], [81.9, 874.0], [82.0, 874.0], [82.1, 874.0], [82.2, 874.0], [82.3, 875.0], [82.4, 875.0], [82.5, 875.0], [82.6, 876.0], [82.7, 876.0], [82.8, 876.0], [82.9, 877.0], [83.0, 877.0], [83.1, 877.0], [83.2, 877.0], [83.3, 878.0], [83.4, 878.0], [83.5, 878.0], [83.6, 879.0], [83.7, 879.0], [83.8, 879.0], [83.9, 880.0], [84.0, 880.0], [84.1, 880.0], [84.2, 880.0], [84.3, 880.0], [84.4, 881.0], [84.5, 881.0], [84.6, 881.0], [84.7, 882.0], [84.8, 882.0], [84.9, 882.0], [85.0, 882.0], [85.1, 882.0], [85.2, 883.0], [85.3, 883.0], [85.4, 883.0], [85.5, 883.0], [85.6, 884.0], [85.7, 884.0], [85.8, 884.0], [85.9, 884.0], [86.0, 884.0], [86.1, 884.0], [86.2, 884.0], [86.3, 885.0], [86.4, 885.0], [86.5, 885.0], [86.6, 885.0], [86.7, 886.0], [86.8, 886.0], [86.9, 886.0], [87.0, 886.0], [87.1, 886.0], [87.2, 886.0], [87.3, 886.0], [87.4, 886.0], [87.5, 887.0], [87.6, 887.0], [87.7, 887.0], [87.8, 887.0], [87.9, 887.0], [88.0, 888.0], [88.1, 888.0], [88.2, 888.0], [88.3, 889.0], [88.4, 889.0], [88.5, 889.0], [88.6, 889.0], [88.7, 890.0], [88.8, 890.0], [88.9, 891.0], [89.0, 891.0], [89.1, 892.0], [89.2, 892.0], [89.3, 892.0], [89.4, 893.0], [89.5, 894.0], [89.6, 894.0], [89.7, 895.0], [89.8, 895.0], [89.9, 895.0], [90.0, 895.0], [90.1, 896.0], [90.2, 896.0], [90.3, 896.0], [90.4, 896.0], [90.5, 897.0], [90.6, 898.0], [90.7, 899.0], [90.8, 899.0], [90.9, 900.0], [91.0, 900.0], [91.1, 901.0], [91.2, 901.0], [91.3, 902.0], [91.4, 902.0], [91.5, 903.0], [91.6, 903.0], [91.7, 903.0], [91.8, 904.0], [91.9, 905.0], [92.0, 906.0], [92.1, 907.0], [92.2, 907.0], [92.3, 907.0], [92.4, 908.0], [92.5, 908.0], [92.6, 908.0], [92.7, 909.0], [92.8, 909.0], [92.9, 910.0], [93.0, 911.0], [93.1, 911.0], [93.2, 912.0], [93.3, 912.0], [93.4, 913.0], [93.5, 913.0], [93.6, 914.0], [93.7, 914.0], [93.8, 915.0], [93.9, 916.0], [94.0, 917.0], [94.1, 920.0], [94.2, 923.0], [94.3, 924.0], [94.4, 925.0], [94.5, 928.0], [94.6, 929.0], [94.7, 929.0], [94.8, 930.0], [94.9, 933.0], [95.0, 938.0], [95.1, 940.0], [95.2, 944.0], [95.3, 947.0], [95.4, 948.0], [95.5, 949.0], [95.6, 952.0], [95.7, 956.0], [95.8, 957.0], [95.9, 957.0], [96.0, 962.0], [96.1, 963.0], [96.2, 967.0], [96.3, 968.0], [96.4, 969.0], [96.5, 971.0], [96.6, 971.0], [96.7, 972.0], [96.8, 974.0], [96.9, 978.0], [97.0, 980.0], [97.1, 982.0], [97.2, 984.0], [97.3, 985.0], [97.4, 986.0], [97.5, 991.0], [97.6, 993.0], [97.7, 1001.0], [97.8, 1004.0], [97.9, 1009.0], [98.0, 1012.0], [98.1, 1012.0], [98.2, 1013.0], [98.3, 1014.0], [98.4, 1017.0], [98.5, 1018.0], [98.6, 1020.0], [98.7, 1022.0], [98.8, 1025.0], [98.9, 1031.0], [99.0, 1031.0], [99.1, 1031.0], [99.2, 1035.0], [99.3, 1038.0], [99.4, 1041.0], [99.5, 1053.0], [99.6, 1061.0], [99.7, 1070.0], [99.8, 1075.0], [99.9, 1161.0], [100.0, 1162.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 600.0, "maxY": 1457.0, "series": [{"data": [[1100.0, 2.0], [600.0, 39.0], [700.0, 223.0], [800.0, 1457.0], [900.0, 130.0], [1000.0, 42.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1893.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1893.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1893.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 35.36557610241822, "minX": 1.77999516E12, "maxY": 48.0, "series": [{"data": [[1.77999522E12, 48.0], [1.77999516E12, 35.36557610241822], [1.77999528E12, 43.23043478260868]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999528E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 690.8181818181819, "minX": 2.0, "maxY": 888.5555555555555, "series": [{"data": [[2.0, 816.0], [32.0, 845.6923076923077], [33.0, 846.8000000000001], [34.0, 854.1538461538462], [35.0, 888.3571428571429], [36.0, 847.3333333333334], [37.0, 857.3076923076924], [38.0, 861.2727272727274], [39.0, 860.1818181818181], [40.0, 856.9999999999999], [41.0, 872.8461538461538], [42.0, 859.8], [43.0, 854.8181818181819], [44.0, 888.5555555555555], [45.0, 853.4666666666667], [46.0, 852.1], [47.0, 872.0], [3.0, 830.0], [48.0, 845.0683098591531], [4.0, 800.5], [5.0, 751.25], [6.0, 722.8], [7.0, 741.6], [8.0, 758.9000000000001], [9.0, 737.4285714285714], [10.0, 716.6363636363636], [11.0, 701.0], [12.0, 690.8181818181819], [13.0, 743.7692307692307], [14.0, 752.2222222222222], [15.0, 738.5833333333334], [16.0, 743.6666666666666], [17.0, 763.4999999999999], [18.0, 768.2727272727273], [19.0, 807.5], [20.0, 822.9090909090909], [21.0, 808.5454545454545], [22.0, 810.4615384615385], [23.0, 845.1], [24.0, 849.857142857143], [25.0, 847.4545454545454], [26.0, 883.6666666666667], [27.0, 856.8333333333333], [28.0, 840.3636363636364], [29.0, 857.3076923076923], [30.0, 855.5454545454546], [31.0, 867.5555555555555]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[42.728473322768195, 838.955625990493]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 48.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 613.3333333333334, "minX": 1.77999516E12, "maxY": 3696.0, "series": [{"data": [[1.77999522E12, 3696.0], [1.77999516E12, 2706.55], [1.77999528E12, 885.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77999522E12, 2560.0], [1.77999516E12, 1874.6666666666667], [1.77999528E12, 613.3333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999528E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 830.3684210526325, "minX": 1.77999516E12, "maxY": 844.7072916666671, "series": [{"data": [[1.77999522E12, 844.7072916666671], [1.77999516E12, 830.3684210526325], [1.77999528E12, 841.1956521739133]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999528E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 830.3229018492167, "minX": 1.77999516E12, "maxY": 844.6874999999998, "series": [{"data": [[1.77999522E12, 844.6874999999998], [1.77999516E12, 830.3229018492167], [1.77999528E12, 841.1956521739133]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999528E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.77999516E12, "maxY": 0.05547652916073972, "series": [{"data": [[1.77999522E12, 0.0302083333333333], [1.77999516E12, 0.05547652916073972], [1.77999528E12, 0.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999528E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 646.0, "minX": 1.77999516E12, "maxY": 1162.0, "series": [{"data": [[1.77999522E12, 1075.0], [1.77999516E12, 1162.0], [1.77999528E12, 940.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77999522E12, 781.0], [1.77999516E12, 646.0], [1.77999528E12, 783.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77999522E12, 891.9], [1.77999516E12, 902.6], [1.77999528E12, 890.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77999522E12, 1031.0], [1.77999516E12, 1039.92], [1.77999528E12, 932.0699999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77999522E12, 831.5], [1.77999516E12, 830.0], [1.77999528E12, 831.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77999522E12, 956.9499999999999], [1.77999516E12, 951.5999999999999], [1.77999528E12, 910.45]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999528E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 716.0, "minX": 3.0, "maxY": 856.0, "series": [{"data": [[8.0, 824.5], [9.0, 716.0], [10.0, 824.0], [3.0, 771.0], [13.0, 839.0], [14.0, 828.5], [15.0, 837.0], [16.0, 826.0], [17.0, 831.0], [18.0, 846.0], [19.0, 832.0], [20.0, 837.0], [21.0, 832.0], [22.0, 856.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 716.0, "minX": 3.0, "maxY": 856.0, "series": [{"data": [[8.0, 824.0], [9.0, 716.0], [10.0, 824.0], [3.0, 769.0], [13.0, 839.0], [14.0, 828.5], [15.0, 837.0], [16.0, 826.0], [17.0, 831.0], [18.0, 846.0], [19.0, 832.0], [20.0, 837.0], [21.0, 832.0], [22.0, 856.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.6166666666666667, "minX": 1.77999516E12, "maxY": 16.0, "series": [{"data": [[1.77999522E12, 16.0], [1.77999516E12, 11.933333333333334], [1.77999528E12, 3.6166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999528E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.8333333333333335, "minX": 1.77999516E12, "maxY": 16.0, "series": [{"data": [[1.77999522E12, 16.0], [1.77999516E12, 11.716666666666667], [1.77999528E12, 3.8333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999528E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.8333333333333335, "minX": 1.77999516E12, "maxY": 16.0, "series": [{"data": [[1.77999522E12, 16.0], [1.77999516E12, 11.716666666666667], [1.77999528E12, 3.8333333333333335]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999528E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.8333333333333335, "minX": 1.77999516E12, "maxY": 16.0, "series": [{"data": [[1.77999522E12, 16.0], [1.77999516E12, 11.716666666666667], [1.77999528E12, 3.8333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999528E12, "title": "Total Transactions Per Second"}},
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

