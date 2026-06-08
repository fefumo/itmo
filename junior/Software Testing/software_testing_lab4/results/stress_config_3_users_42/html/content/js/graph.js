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
        data: {"result": {"minY": 597.0, "minX": 0.0, "maxY": 1274.0, "series": [{"data": [[0.0, 597.0], [0.1, 602.0], [0.2, 616.0], [0.3, 616.0], [0.4, 618.0], [0.5, 622.0], [0.6, 626.0], [0.7, 627.0], [0.8, 627.0], [0.9, 628.0], [1.0, 630.0], [1.1, 632.0], [1.2, 634.0], [1.3, 635.0], [1.4, 638.0], [1.5, 639.0], [1.6, 643.0], [1.7, 648.0], [1.8, 650.0], [1.9, 653.0], [2.0, 658.0], [2.1, 660.0], [2.2, 671.0], [2.3, 679.0], [2.4, 679.0], [2.5, 680.0], [2.6, 681.0], [2.7, 681.0], [2.8, 683.0], [2.9, 683.0], [3.0, 684.0], [3.1, 687.0], [3.2, 695.0], [3.3, 696.0], [3.4, 698.0], [3.5, 701.0], [3.6, 703.0], [3.7, 710.0], [3.8, 710.0], [3.9, 711.0], [4.0, 713.0], [4.1, 714.0], [4.2, 718.0], [4.3, 719.0], [4.4, 721.0], [4.5, 722.0], [4.6, 726.0], [4.7, 728.0], [4.8, 731.0], [4.9, 733.0], [5.0, 733.0], [5.1, 735.0], [5.2, 740.0], [5.3, 742.0], [5.4, 745.0], [5.5, 748.0], [5.6, 748.0], [5.7, 748.0], [5.8, 749.0], [5.9, 750.0], [6.0, 750.0], [6.1, 750.0], [6.2, 750.0], [6.3, 751.0], [6.4, 751.0], [6.5, 751.0], [6.6, 752.0], [6.7, 753.0], [6.8, 753.0], [6.9, 753.0], [7.0, 753.0], [7.1, 753.0], [7.2, 753.0], [7.3, 754.0], [7.4, 754.0], [7.5, 754.0], [7.6, 754.0], [7.7, 755.0], [7.8, 755.0], [7.9, 755.0], [8.0, 755.0], [8.1, 755.0], [8.2, 755.0], [8.3, 755.0], [8.4, 755.0], [8.5, 756.0], [8.6, 756.0], [8.7, 756.0], [8.8, 756.0], [8.9, 756.0], [9.0, 756.0], [9.1, 756.0], [9.2, 757.0], [9.3, 757.0], [9.4, 757.0], [9.5, 757.0], [9.6, 757.0], [9.7, 758.0], [9.8, 758.0], [9.9, 758.0], [10.0, 758.0], [10.1, 758.0], [10.2, 758.0], [10.3, 758.0], [10.4, 758.0], [10.5, 758.0], [10.6, 758.0], [10.7, 758.0], [10.8, 758.0], [10.9, 758.0], [11.0, 759.0], [11.1, 759.0], [11.2, 759.0], [11.3, 759.0], [11.4, 759.0], [11.5, 759.0], [11.6, 759.0], [11.7, 759.0], [11.8, 759.0], [11.9, 759.0], [12.0, 760.0], [12.1, 760.0], [12.2, 760.0], [12.3, 760.0], [12.4, 760.0], [12.5, 760.0], [12.6, 760.0], [12.7, 760.0], [12.8, 760.0], [12.9, 760.0], [13.0, 760.0], [13.1, 760.0], [13.2, 761.0], [13.3, 761.0], [13.4, 761.0], [13.5, 761.0], [13.6, 761.0], [13.7, 761.0], [13.8, 762.0], [13.9, 762.0], [14.0, 762.0], [14.1, 762.0], [14.2, 762.0], [14.3, 762.0], [14.4, 762.0], [14.5, 762.0], [14.6, 762.0], [14.7, 762.0], [14.8, 763.0], [14.9, 763.0], [15.0, 763.0], [15.1, 763.0], [15.2, 763.0], [15.3, 763.0], [15.4, 763.0], [15.5, 763.0], [15.6, 763.0], [15.7, 763.0], [15.8, 763.0], [15.9, 763.0], [16.0, 764.0], [16.1, 764.0], [16.2, 764.0], [16.3, 764.0], [16.4, 764.0], [16.5, 764.0], [16.6, 764.0], [16.7, 764.0], [16.8, 765.0], [16.9, 765.0], [17.0, 765.0], [17.1, 765.0], [17.2, 765.0], [17.3, 765.0], [17.4, 765.0], [17.5, 765.0], [17.6, 765.0], [17.7, 765.0], [17.8, 766.0], [17.9, 766.0], [18.0, 766.0], [18.1, 766.0], [18.2, 766.0], [18.3, 766.0], [18.4, 766.0], [18.5, 767.0], [18.6, 767.0], [18.7, 767.0], [18.8, 767.0], [18.9, 767.0], [19.0, 767.0], [19.1, 767.0], [19.2, 767.0], [19.3, 768.0], [19.4, 768.0], [19.5, 768.0], [19.6, 768.0], [19.7, 768.0], [19.8, 768.0], [19.9, 768.0], [20.0, 769.0], [20.1, 769.0], [20.2, 769.0], [20.3, 769.0], [20.4, 769.0], [20.5, 769.0], [20.6, 769.0], [20.7, 769.0], [20.8, 769.0], [20.9, 769.0], [21.0, 769.0], [21.1, 770.0], [21.2, 770.0], [21.3, 770.0], [21.4, 770.0], [21.5, 770.0], [21.6, 770.0], [21.7, 770.0], [21.8, 770.0], [21.9, 770.0], [22.0, 770.0], [22.1, 770.0], [22.2, 770.0], [22.3, 770.0], [22.4, 771.0], [22.5, 771.0], [22.6, 771.0], [22.7, 771.0], [22.8, 771.0], [22.9, 771.0], [23.0, 771.0], [23.1, 771.0], [23.2, 771.0], [23.3, 771.0], [23.4, 771.0], [23.5, 771.0], [23.6, 771.0], [23.7, 771.0], [23.8, 771.0], [23.9, 772.0], [24.0, 772.0], [24.1, 772.0], [24.2, 772.0], [24.3, 772.0], [24.4, 772.0], [24.5, 772.0], [24.6, 772.0], [24.7, 772.0], [24.8, 772.0], [24.9, 772.0], [25.0, 773.0], [25.1, 773.0], [25.2, 773.0], [25.3, 773.0], [25.4, 773.0], [25.5, 773.0], [25.6, 773.0], [25.7, 773.0], [25.8, 773.0], [25.9, 773.0], [26.0, 773.0], [26.1, 773.0], [26.2, 773.0], [26.3, 773.0], [26.4, 773.0], [26.5, 773.0], [26.6, 774.0], [26.7, 774.0], [26.8, 774.0], [26.9, 774.0], [27.0, 774.0], [27.1, 774.0], [27.2, 774.0], [27.3, 774.0], [27.4, 774.0], [27.5, 774.0], [27.6, 774.0], [27.7, 775.0], [27.8, 775.0], [27.9, 775.0], [28.0, 775.0], [28.1, 775.0], [28.2, 775.0], [28.3, 775.0], [28.4, 775.0], [28.5, 775.0], [28.6, 775.0], [28.7, 775.0], [28.8, 775.0], [28.9, 775.0], [29.0, 775.0], [29.1, 775.0], [29.2, 775.0], [29.3, 775.0], [29.4, 775.0], [29.5, 776.0], [29.6, 776.0], [29.7, 776.0], [29.8, 776.0], [29.9, 776.0], [30.0, 776.0], [30.1, 776.0], [30.2, 776.0], [30.3, 776.0], [30.4, 776.0], [30.5, 776.0], [30.6, 776.0], [30.7, 776.0], [30.8, 776.0], [30.9, 776.0], [31.0, 777.0], [31.1, 777.0], [31.2, 777.0], [31.3, 777.0], [31.4, 777.0], [31.5, 777.0], [31.6, 777.0], [31.7, 777.0], [31.8, 777.0], [31.9, 777.0], [32.0, 777.0], [32.1, 777.0], [32.2, 777.0], [32.3, 777.0], [32.4, 777.0], [32.5, 777.0], [32.6, 777.0], [32.7, 778.0], [32.8, 778.0], [32.9, 778.0], [33.0, 778.0], [33.1, 778.0], [33.2, 778.0], [33.3, 778.0], [33.4, 778.0], [33.5, 778.0], [33.6, 778.0], [33.7, 778.0], [33.8, 778.0], [33.9, 779.0], [34.0, 779.0], [34.1, 779.0], [34.2, 779.0], [34.3, 779.0], [34.4, 779.0], [34.5, 779.0], [34.6, 779.0], [34.7, 779.0], [34.8, 779.0], [34.9, 779.0], [35.0, 779.0], [35.1, 779.0], [35.2, 779.0], [35.3, 779.0], [35.4, 780.0], [35.5, 780.0], [35.6, 780.0], [35.7, 780.0], [35.8, 780.0], [35.9, 780.0], [36.0, 780.0], [36.1, 780.0], [36.2, 780.0], [36.3, 780.0], [36.4, 780.0], [36.5, 780.0], [36.6, 781.0], [36.7, 781.0], [36.8, 781.0], [36.9, 781.0], [37.0, 781.0], [37.1, 781.0], [37.2, 781.0], [37.3, 781.0], [37.4, 781.0], [37.5, 781.0], [37.6, 781.0], [37.7, 781.0], [37.8, 781.0], [37.9, 781.0], [38.0, 781.0], [38.1, 782.0], [38.2, 782.0], [38.3, 782.0], [38.4, 782.0], [38.5, 782.0], [38.6, 782.0], [38.7, 782.0], [38.8, 782.0], [38.9, 782.0], [39.0, 782.0], [39.1, 782.0], [39.2, 782.0], [39.3, 782.0], [39.4, 782.0], [39.5, 782.0], [39.6, 782.0], [39.7, 783.0], [39.8, 783.0], [39.9, 783.0], [40.0, 783.0], [40.1, 783.0], [40.2, 783.0], [40.3, 783.0], [40.4, 783.0], [40.5, 783.0], [40.6, 783.0], [40.7, 783.0], [40.8, 783.0], [40.9, 783.0], [41.0, 783.0], [41.1, 783.0], [41.2, 783.0], [41.3, 784.0], [41.4, 784.0], [41.5, 784.0], [41.6, 784.0], [41.7, 784.0], [41.8, 784.0], [41.9, 784.0], [42.0, 784.0], [42.1, 784.0], [42.2, 784.0], [42.3, 784.0], [42.4, 784.0], [42.5, 785.0], [42.6, 785.0], [42.7, 785.0], [42.8, 785.0], [42.9, 785.0], [43.0, 785.0], [43.1, 785.0], [43.2, 785.0], [43.3, 785.0], [43.4, 785.0], [43.5, 785.0], [43.6, 785.0], [43.7, 785.0], [43.8, 785.0], [43.9, 785.0], [44.0, 786.0], [44.1, 786.0], [44.2, 786.0], [44.3, 786.0], [44.4, 786.0], [44.5, 786.0], [44.6, 786.0], [44.7, 786.0], [44.8, 786.0], [44.9, 786.0], [45.0, 786.0], [45.1, 786.0], [45.2, 786.0], [45.3, 786.0], [45.4, 787.0], [45.5, 787.0], [45.6, 787.0], [45.7, 787.0], [45.8, 787.0], [45.9, 787.0], [46.0, 787.0], [46.1, 787.0], [46.2, 787.0], [46.3, 787.0], [46.4, 787.0], [46.5, 787.0], [46.6, 788.0], [46.7, 788.0], [46.8, 788.0], [46.9, 788.0], [47.0, 788.0], [47.1, 788.0], [47.2, 788.0], [47.3, 788.0], [47.4, 788.0], [47.5, 788.0], [47.6, 788.0], [47.7, 788.0], [47.8, 788.0], [47.9, 788.0], [48.0, 788.0], [48.1, 788.0], [48.2, 789.0], [48.3, 789.0], [48.4, 789.0], [48.5, 789.0], [48.6, 789.0], [48.7, 789.0], [48.8, 789.0], [48.9, 789.0], [49.0, 789.0], [49.1, 789.0], [49.2, 790.0], [49.3, 790.0], [49.4, 790.0], [49.5, 790.0], [49.6, 790.0], [49.7, 790.0], [49.8, 790.0], [49.9, 790.0], [50.0, 790.0], [50.1, 790.0], [50.2, 790.0], [50.3, 791.0], [50.4, 791.0], [50.5, 791.0], [50.6, 791.0], [50.7, 791.0], [50.8, 791.0], [50.9, 791.0], [51.0, 791.0], [51.1, 792.0], [51.2, 792.0], [51.3, 792.0], [51.4, 792.0], [51.5, 792.0], [51.6, 792.0], [51.7, 792.0], [51.8, 793.0], [51.9, 793.0], [52.0, 793.0], [52.1, 793.0], [52.2, 794.0], [52.3, 794.0], [52.4, 794.0], [52.5, 794.0], [52.6, 794.0], [52.7, 795.0], [52.8, 795.0], [52.9, 795.0], [53.0, 795.0], [53.1, 795.0], [53.2, 795.0], [53.3, 796.0], [53.4, 796.0], [53.5, 796.0], [53.6, 796.0], [53.7, 796.0], [53.8, 796.0], [53.9, 797.0], [54.0, 797.0], [54.1, 797.0], [54.2, 797.0], [54.3, 797.0], [54.4, 797.0], [54.5, 798.0], [54.6, 798.0], [54.7, 798.0], [54.8, 798.0], [54.9, 798.0], [55.0, 798.0], [55.1, 799.0], [55.2, 799.0], [55.3, 799.0], [55.4, 799.0], [55.5, 799.0], [55.6, 799.0], [55.7, 800.0], [55.8, 800.0], [55.9, 800.0], [56.0, 800.0], [56.1, 800.0], [56.2, 800.0], [56.3, 800.0], [56.4, 801.0], [56.5, 801.0], [56.6, 801.0], [56.7, 801.0], [56.8, 801.0], [56.9, 801.0], [57.0, 801.0], [57.1, 802.0], [57.2, 802.0], [57.3, 802.0], [57.4, 802.0], [57.5, 802.0], [57.6, 803.0], [57.7, 803.0], [57.8, 803.0], [57.9, 803.0], [58.0, 803.0], [58.1, 803.0], [58.2, 803.0], [58.3, 803.0], [58.4, 803.0], [58.5, 803.0], [58.6, 803.0], [58.7, 803.0], [58.8, 804.0], [58.9, 804.0], [59.0, 804.0], [59.1, 804.0], [59.2, 804.0], [59.3, 804.0], [59.4, 805.0], [59.5, 805.0], [59.6, 805.0], [59.7, 805.0], [59.8, 805.0], [59.9, 805.0], [60.0, 806.0], [60.1, 806.0], [60.2, 806.0], [60.3, 806.0], [60.4, 806.0], [60.5, 806.0], [60.6, 806.0], [60.7, 806.0], [60.8, 806.0], [60.9, 806.0], [61.0, 806.0], [61.1, 806.0], [61.2, 807.0], [61.3, 807.0], [61.4, 807.0], [61.5, 807.0], [61.6, 807.0], [61.7, 807.0], [61.8, 807.0], [61.9, 807.0], [62.0, 807.0], [62.1, 807.0], [62.2, 807.0], [62.3, 807.0], [62.4, 808.0], [62.5, 808.0], [62.6, 808.0], [62.7, 808.0], [62.8, 808.0], [62.9, 808.0], [63.0, 808.0], [63.1, 809.0], [63.2, 809.0], [63.3, 809.0], [63.4, 809.0], [63.5, 809.0], [63.6, 809.0], [63.7, 809.0], [63.8, 809.0], [63.9, 809.0], [64.0, 809.0], [64.1, 809.0], [64.2, 809.0], [64.3, 809.0], [64.4, 810.0], [64.5, 810.0], [64.6, 810.0], [64.7, 810.0], [64.8, 810.0], [64.9, 810.0], [65.0, 810.0], [65.1, 810.0], [65.2, 810.0], [65.3, 810.0], [65.4, 810.0], [65.5, 810.0], [65.6, 810.0], [65.7, 811.0], [65.8, 811.0], [65.9, 811.0], [66.0, 811.0], [66.1, 811.0], [66.2, 811.0], [66.3, 811.0], [66.4, 811.0], [66.5, 811.0], [66.6, 811.0], [66.7, 811.0], [66.8, 811.0], [66.9, 812.0], [67.0, 812.0], [67.1, 812.0], [67.2, 812.0], [67.3, 812.0], [67.4, 812.0], [67.5, 812.0], [67.6, 812.0], [67.7, 812.0], [67.8, 812.0], [67.9, 812.0], [68.0, 813.0], [68.1, 813.0], [68.2, 813.0], [68.3, 813.0], [68.4, 813.0], [68.5, 813.0], [68.6, 814.0], [68.7, 814.0], [68.8, 814.0], [68.9, 814.0], [69.0, 814.0], [69.1, 814.0], [69.2, 814.0], [69.3, 815.0], [69.4, 815.0], [69.5, 815.0], [69.6, 815.0], [69.7, 815.0], [69.8, 815.0], [69.9, 815.0], [70.0, 816.0], [70.1, 816.0], [70.2, 816.0], [70.3, 816.0], [70.4, 816.0], [70.5, 816.0], [70.6, 816.0], [70.7, 817.0], [70.8, 817.0], [70.9, 817.0], [71.0, 817.0], [71.1, 817.0], [71.2, 817.0], [71.3, 817.0], [71.4, 818.0], [71.5, 818.0], [71.6, 818.0], [71.7, 818.0], [71.8, 818.0], [71.9, 818.0], [72.0, 818.0], [72.1, 819.0], [72.2, 819.0], [72.3, 819.0], [72.4, 819.0], [72.5, 819.0], [72.6, 819.0], [72.7, 819.0], [72.8, 819.0], [72.9, 819.0], [73.0, 820.0], [73.1, 821.0], [73.2, 821.0], [73.3, 821.0], [73.4, 821.0], [73.5, 822.0], [73.6, 822.0], [73.7, 822.0], [73.8, 822.0], [73.9, 823.0], [74.0, 823.0], [74.1, 823.0], [74.2, 824.0], [74.3, 824.0], [74.4, 824.0], [74.5, 825.0], [74.6, 825.0], [74.7, 825.0], [74.8, 825.0], [74.9, 826.0], [75.0, 826.0], [75.1, 826.0], [75.2, 826.0], [75.3, 827.0], [75.4, 827.0], [75.5, 827.0], [75.6, 827.0], [75.7, 828.0], [75.8, 828.0], [75.9, 828.0], [76.0, 828.0], [76.1, 829.0], [76.2, 829.0], [76.3, 830.0], [76.4, 830.0], [76.5, 830.0], [76.6, 830.0], [76.7, 831.0], [76.8, 832.0], [76.9, 832.0], [77.0, 833.0], [77.1, 833.0], [77.2, 833.0], [77.3, 834.0], [77.4, 834.0], [77.5, 835.0], [77.6, 836.0], [77.7, 836.0], [77.8, 836.0], [77.9, 837.0], [78.0, 837.0], [78.1, 837.0], [78.2, 838.0], [78.3, 838.0], [78.4, 838.0], [78.5, 838.0], [78.6, 838.0], [78.7, 839.0], [78.8, 839.0], [78.9, 839.0], [79.0, 839.0], [79.1, 840.0], [79.2, 840.0], [79.3, 840.0], [79.4, 841.0], [79.5, 842.0], [79.6, 842.0], [79.7, 842.0], [79.8, 842.0], [79.9, 843.0], [80.0, 843.0], [80.1, 843.0], [80.2, 843.0], [80.3, 844.0], [80.4, 844.0], [80.5, 844.0], [80.6, 845.0], [80.7, 845.0], [80.8, 845.0], [80.9, 845.0], [81.0, 845.0], [81.1, 845.0], [81.2, 846.0], [81.3, 846.0], [81.4, 846.0], [81.5, 846.0], [81.6, 846.0], [81.7, 847.0], [81.8, 848.0], [81.9, 848.0], [82.0, 848.0], [82.1, 848.0], [82.2, 848.0], [82.3, 849.0], [82.4, 849.0], [82.5, 849.0], [82.6, 849.0], [82.7, 849.0], [82.8, 849.0], [82.9, 850.0], [83.0, 850.0], [83.1, 850.0], [83.2, 850.0], [83.3, 850.0], [83.4, 851.0], [83.5, 851.0], [83.6, 851.0], [83.7, 851.0], [83.8, 851.0], [83.9, 851.0], [84.0, 851.0], [84.1, 852.0], [84.2, 852.0], [84.3, 853.0], [84.4, 853.0], [84.5, 853.0], [84.6, 853.0], [84.7, 853.0], [84.8, 853.0], [84.9, 854.0], [85.0, 854.0], [85.1, 854.0], [85.2, 854.0], [85.3, 854.0], [85.4, 854.0], [85.5, 855.0], [85.6, 856.0], [85.7, 856.0], [85.8, 856.0], [85.9, 856.0], [86.0, 856.0], [86.1, 857.0], [86.2, 857.0], [86.3, 857.0], [86.4, 857.0], [86.5, 857.0], [86.6, 857.0], [86.7, 858.0], [86.8, 859.0], [86.9, 859.0], [87.0, 860.0], [87.1, 861.0], [87.2, 861.0], [87.3, 862.0], [87.4, 862.0], [87.5, 862.0], [87.6, 863.0], [87.7, 863.0], [87.8, 863.0], [87.9, 864.0], [88.0, 865.0], [88.1, 865.0], [88.2, 868.0], [88.3, 868.0], [88.4, 869.0], [88.5, 869.0], [88.6, 869.0], [88.7, 870.0], [88.8, 870.0], [88.9, 870.0], [89.0, 871.0], [89.1, 872.0], [89.2, 872.0], [89.3, 873.0], [89.4, 874.0], [89.5, 874.0], [89.6, 874.0], [89.7, 875.0], [89.8, 876.0], [89.9, 877.0], [90.0, 878.0], [90.1, 878.0], [90.2, 879.0], [90.3, 879.0], [90.4, 879.0], [90.5, 880.0], [90.6, 880.0], [90.7, 881.0], [90.8, 882.0], [90.9, 882.0], [91.0, 882.0], [91.1, 883.0], [91.2, 883.0], [91.3, 883.0], [91.4, 884.0], [91.5, 884.0], [91.6, 884.0], [91.7, 886.0], [91.8, 886.0], [91.9, 886.0], [92.0, 887.0], [92.1, 887.0], [92.2, 888.0], [92.3, 889.0], [92.4, 889.0], [92.5, 890.0], [92.6, 892.0], [92.7, 895.0], [92.8, 897.0], [92.9, 898.0], [93.0, 898.0], [93.1, 899.0], [93.2, 900.0], [93.3, 901.0], [93.4, 903.0], [93.5, 906.0], [93.6, 908.0], [93.7, 911.0], [93.8, 911.0], [93.9, 914.0], [94.0, 916.0], [94.1, 918.0], [94.2, 919.0], [94.3, 921.0], [94.4, 922.0], [94.5, 923.0], [94.6, 923.0], [94.7, 924.0], [94.8, 925.0], [94.9, 927.0], [95.0, 930.0], [95.1, 933.0], [95.2, 934.0], [95.3, 938.0], [95.4, 939.0], [95.5, 939.0], [95.6, 941.0], [95.7, 941.0], [95.8, 943.0], [95.9, 946.0], [96.0, 948.0], [96.1, 949.0], [96.2, 949.0], [96.3, 950.0], [96.4, 950.0], [96.5, 950.0], [96.6, 952.0], [96.7, 954.0], [96.8, 956.0], [96.9, 960.0], [97.0, 967.0], [97.1, 967.0], [97.2, 969.0], [97.3, 976.0], [97.4, 983.0], [97.5, 986.0], [97.6, 992.0], [97.7, 994.0], [97.8, 995.0], [97.9, 996.0], [98.0, 997.0], [98.1, 1009.0], [98.2, 1012.0], [98.3, 1013.0], [98.4, 1014.0], [98.5, 1015.0], [98.6, 1015.0], [98.7, 1026.0], [98.8, 1032.0], [98.9, 1033.0], [99.0, 1042.0], [99.1, 1045.0], [99.2, 1060.0], [99.3, 1065.0], [99.4, 1072.0], [99.5, 1120.0], [99.6, 1139.0], [99.7, 1150.0], [99.8, 1162.0], [99.9, 1258.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 866.0, "series": [{"data": [[1100.0, 6.0], [600.0, 57.0], [1200.0, 3.0], [700.0, 866.0], [800.0, 622.0], [900.0, 80.0], [500.0, 1.0], [1000.0, 24.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1659.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1659.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1659.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 31.78539493293589, "minX": 1.77999504E12, "maxY": 42.0, "series": [{"data": [[1.7799951E12, 42.0], [1.77999504E12, 31.78539493293589], [1.77999516E12, 36.174496644295296]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999516E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 668.8, "minX": 2.0, "maxY": 853.9999999999999, "series": [{"data": [[2.0, 763.0], [32.0, 815.4], [33.0, 806.1999999999999], [34.0, 813.3846153846155], [35.0, 814.2], [36.0, 832.1111111111111], [37.0, 831.2], [38.0, 806.8333333333334], [39.0, 837.1], [40.0, 840.9333333333333], [41.0, 828.5833333333333], [42.0, 811.150806451612], [3.0, 725.5], [4.0, 836.0], [5.0, 761.0], [6.0, 675.6666666666666], [7.0, 699.8181818181818], [8.0, 689.875], [9.0, 668.8], [10.0, 701.4166666666666], [11.0, 694.1999999999999], [12.0, 714.4], [13.0, 722.7272727272727], [14.0, 730.0], [15.0, 749.8], [16.0, 853.9999999999999], [17.0, 764.0714285714286], [18.0, 759.4444444444445], [19.0, 789.0], [20.0, 797.875], [21.0, 840.2857142857142], [22.0, 799.9], [23.0, 792.5000000000001], [24.0, 797.0], [25.0, 812.7857142857144], [26.0, 837.8], [27.0, 797.9999999999999], [28.0, 829.8181818181816], [29.0, 834.1111111111111], [30.0, 812.3333333333334], [31.0, 812.9]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[37.34538878842684, 805.4954792043399]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 42.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 397.3333333333333, "minX": 1.77999504E12, "maxY": 3230.15, "series": [{"data": [[1.7799951E12, 3230.15], [1.77999504E12, 2583.35], [1.77999516E12, 573.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7799951E12, 2237.3333333333335], [1.77999504E12, 1789.3333333333333], [1.77999516E12, 397.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999516E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 798.6542473919528, "minX": 1.77999504E12, "maxY": 811.107270560191, "series": [{"data": [[1.7799951E12, 811.107270560191], [1.77999504E12, 798.6542473919528], [1.77999516E12, 804.7046979865775]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999516E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 798.5961251862894, "minX": 1.77999504E12, "maxY": 811.081048867699, "series": [{"data": [[1.7799951E12, 811.081048867699], [1.77999504E12, 798.5961251862894], [1.77999516E12, 804.6778523489937]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999516E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.77999504E12, "maxY": 0.0640834575260806, "series": [{"data": [[1.7799951E12, 0.03933253873659118], [1.77999504E12, 0.0640834575260806], [1.77999516E12, 0.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999516E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 597.0, "minX": 1.77999504E12, "maxY": 1274.0, "series": [{"data": [[1.7799951E12, 1274.0], [1.77999504E12, 1258.0], [1.77999516E12, 950.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7799951E12, 747.0], [1.77999504E12, 597.0], [1.77999516E12, 748.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7799951E12, 870.0], [1.77999504E12, 882.0], [1.77999516E12, 873.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7799951E12, 1062.4], [1.77999504E12, 1041.28], [1.77999516E12, 949.5]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7799951E12, 790.0], [1.77999504E12, 790.0], [1.77999516E12, 793.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7799951E12, 949.0], [1.77999504E12, 926.4], [1.77999516E12, 883.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999516E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 655.0, "minX": 1.0, "maxY": 889.0, "series": [{"data": [[8.0, 655.0], [9.0, 792.0], [10.0, 794.5], [11.0, 782.0], [3.0, 711.0], [12.0, 786.5], [13.0, 790.0], [14.0, 797.5], [15.0, 790.5], [1.0, 763.0], [16.0, 791.0], [17.0, 781.0], [18.0, 833.5], [19.0, 889.0], [6.0, 744.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 655.0, "minX": 1.0, "maxY": 889.0, "series": [{"data": [[8.0, 655.0], [9.0, 792.0], [10.0, 794.5], [11.0, 782.0], [3.0, 711.0], [12.0, 786.5], [13.0, 790.0], [14.0, 797.5], [15.0, 790.5], [1.0, 759.0], [16.0, 791.0], [17.0, 781.0], [18.0, 833.5], [19.0, 889.0], [6.0, 744.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.283333333333333, "minX": 1.77999504E12, "maxY": 14.0, "series": [{"data": [[1.7799951E12, 14.0], [1.77999504E12, 11.366666666666667], [1.77999516E12, 2.283333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999516E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.77999504E12, "maxY": 13.983333333333333, "series": [{"data": [[1.7799951E12, 13.983333333333333], [1.77999504E12, 11.183333333333334], [1.77999516E12, 2.4833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999516E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.77999504E12, "maxY": 13.983333333333333, "series": [{"data": [[1.7799951E12, 13.983333333333333], [1.77999504E12, 11.183333333333334], [1.77999516E12, 2.4833333333333334]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999516E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.77999504E12, "maxY": 13.983333333333333, "series": [{"data": [[1.7799951E12, 13.983333333333333], [1.77999504E12, 11.183333333333334], [1.77999516E12, 2.4833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999516E12, "title": "Total Transactions Per Second"}},
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

