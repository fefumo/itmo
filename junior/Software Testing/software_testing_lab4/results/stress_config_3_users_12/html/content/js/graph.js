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
        data: {"result": {"minY": 604.0, "minX": 0.0, "maxY": 1642.0, "series": [{"data": [[0.0, 604.0], [0.1, 604.0], [0.2, 604.0], [0.3, 608.0], [0.4, 608.0], [0.5, 614.0], [0.6, 614.0], [0.7, 618.0], [0.8, 618.0], [0.9, 621.0], [1.0, 621.0], [1.1, 622.0], [1.2, 622.0], [1.3, 623.0], [1.4, 623.0], [1.5, 625.0], [1.6, 625.0], [1.7, 627.0], [1.8, 627.0], [1.9, 629.0], [2.0, 629.0], [2.1, 629.0], [2.2, 629.0], [2.3, 629.0], [2.4, 630.0], [2.5, 630.0], [2.6, 631.0], [2.7, 631.0], [2.8, 631.0], [2.9, 631.0], [3.0, 631.0], [3.1, 631.0], [3.2, 632.0], [3.3, 632.0], [3.4, 633.0], [3.5, 633.0], [3.6, 633.0], [3.7, 633.0], [3.8, 633.0], [3.9, 633.0], [4.0, 633.0], [4.1, 636.0], [4.2, 636.0], [4.3, 636.0], [4.4, 636.0], [4.5, 636.0], [4.6, 636.0], [4.7, 636.0], [4.8, 636.0], [4.9, 636.0], [5.0, 636.0], [5.1, 638.0], [5.2, 638.0], [5.3, 638.0], [5.4, 638.0], [5.5, 638.0], [5.6, 638.0], [5.7, 639.0], [5.8, 639.0], [5.9, 639.0], [6.0, 639.0], [6.1, 639.0], [6.2, 639.0], [6.3, 639.0], [6.4, 641.0], [6.5, 641.0], [6.6, 641.0], [6.7, 641.0], [6.8, 644.0], [6.9, 644.0], [7.0, 645.0], [7.1, 645.0], [7.2, 645.0], [7.3, 645.0], [7.4, 647.0], [7.5, 647.0], [7.6, 647.0], [7.7, 647.0], [7.8, 647.0], [7.9, 648.0], [8.0, 648.0], [8.1, 648.0], [8.2, 648.0], [8.3, 649.0], [8.4, 649.0], [8.5, 649.0], [8.6, 649.0], [8.7, 650.0], [8.8, 650.0], [8.9, 652.0], [9.0, 652.0], [9.1, 652.0], [9.2, 652.0], [9.3, 653.0], [9.4, 653.0], [9.5, 654.0], [9.6, 654.0], [9.7, 654.0], [9.8, 655.0], [9.9, 655.0], [10.0, 655.0], [10.1, 655.0], [10.2, 655.0], [10.3, 655.0], [10.4, 656.0], [10.5, 656.0], [10.6, 656.0], [10.7, 656.0], [10.8, 656.0], [10.9, 656.0], [11.0, 656.0], [11.1, 656.0], [11.2, 657.0], [11.3, 657.0], [11.4, 657.0], [11.5, 657.0], [11.6, 657.0], [11.7, 657.0], [11.8, 657.0], [11.9, 657.0], [12.0, 657.0], [12.1, 657.0], [12.2, 657.0], [12.3, 658.0], [12.4, 658.0], [12.5, 658.0], [12.6, 658.0], [12.7, 661.0], [12.8, 661.0], [12.9, 662.0], [13.0, 662.0], [13.1, 662.0], [13.2, 662.0], [13.3, 664.0], [13.4, 664.0], [13.5, 664.0], [13.6, 664.0], [13.7, 664.0], [13.8, 664.0], [13.9, 664.0], [14.0, 664.0], [14.1, 664.0], [14.2, 664.0], [14.3, 664.0], [14.4, 665.0], [14.5, 665.0], [14.6, 666.0], [14.7, 666.0], [14.8, 668.0], [14.9, 668.0], [15.0, 668.0], [15.1, 668.0], [15.2, 673.0], [15.3, 673.0], [15.4, 673.0], [15.5, 679.0], [15.6, 679.0], [15.7, 680.0], [15.8, 680.0], [15.9, 681.0], [16.0, 681.0], [16.1, 686.0], [16.2, 686.0], [16.3, 686.0], [16.4, 686.0], [16.5, 687.0], [16.6, 687.0], [16.7, 688.0], [16.8, 688.0], [16.9, 693.0], [17.0, 693.0], [17.1, 696.0], [17.2, 696.0], [17.3, 707.0], [17.4, 707.0], [17.5, 707.0], [17.6, 707.0], [17.7, 707.0], [17.8, 707.0], [17.9, 707.0], [18.0, 707.0], [18.1, 707.0], [18.2, 708.0], [18.3, 708.0], [18.4, 711.0], [18.5, 711.0], [18.6, 711.0], [18.7, 711.0], [18.8, 714.0], [18.9, 714.0], [19.0, 715.0], [19.1, 715.0], [19.2, 715.0], [19.3, 715.0], [19.4, 715.0], [19.5, 715.0], [19.6, 715.0], [19.7, 715.0], [19.8, 715.0], [19.9, 715.0], [20.0, 715.0], [20.1, 716.0], [20.2, 716.0], [20.3, 716.0], [20.4, 716.0], [20.5, 717.0], [20.6, 717.0], [20.7, 718.0], [20.8, 718.0], [20.9, 719.0], [21.0, 719.0], [21.1, 719.0], [21.2, 719.0], [21.3, 719.0], [21.4, 719.0], [21.5, 719.0], [21.6, 719.0], [21.7, 719.0], [21.8, 720.0], [21.9, 720.0], [22.0, 720.0], [22.1, 720.0], [22.2, 721.0], [22.3, 721.0], [22.4, 721.0], [22.5, 721.0], [22.6, 721.0], [22.7, 721.0], [22.8, 722.0], [22.9, 722.0], [23.0, 722.0], [23.1, 722.0], [23.2, 722.0], [23.3, 722.0], [23.4, 722.0], [23.5, 723.0], [23.6, 723.0], [23.7, 723.0], [23.8, 723.0], [23.9, 723.0], [24.0, 723.0], [24.1, 723.0], [24.2, 723.0], [24.3, 723.0], [24.4, 723.0], [24.5, 723.0], [24.6, 723.0], [24.7, 723.0], [24.8, 723.0], [24.9, 724.0], [25.0, 724.0], [25.1, 724.0], [25.2, 725.0], [25.3, 725.0], [25.4, 725.0], [25.5, 725.0], [25.6, 725.0], [25.7, 725.0], [25.8, 726.0], [25.9, 726.0], [26.0, 726.0], [26.1, 726.0], [26.2, 726.0], [26.3, 726.0], [26.4, 727.0], [26.5, 727.0], [26.6, 727.0], [26.7, 727.0], [26.8, 727.0], [26.9, 727.0], [27.0, 727.0], [27.1, 728.0], [27.2, 728.0], [27.3, 728.0], [27.4, 728.0], [27.5, 728.0], [27.6, 728.0], [27.7, 728.0], [27.8, 728.0], [27.9, 728.0], [28.0, 728.0], [28.1, 728.0], [28.2, 728.0], [28.3, 728.0], [28.4, 728.0], [28.5, 729.0], [28.6, 729.0], [28.7, 730.0], [28.8, 730.0], [28.9, 730.0], [29.0, 730.0], [29.1, 730.0], [29.2, 730.0], [29.3, 730.0], [29.4, 731.0], [29.5, 731.0], [29.6, 731.0], [29.7, 731.0], [29.8, 732.0], [29.9, 732.0], [30.0, 732.0], [30.1, 732.0], [30.2, 733.0], [30.3, 733.0], [30.4, 733.0], [30.5, 733.0], [30.6, 733.0], [30.7, 733.0], [30.8, 733.0], [30.9, 733.0], [31.0, 733.0], [31.1, 733.0], [31.2, 733.0], [31.3, 733.0], [31.4, 733.0], [31.5, 734.0], [31.6, 734.0], [31.7, 734.0], [31.8, 734.0], [31.9, 734.0], [32.0, 734.0], [32.1, 734.0], [32.2, 734.0], [32.3, 734.0], [32.4, 734.0], [32.5, 734.0], [32.6, 734.0], [32.7, 734.0], [32.8, 735.0], [32.9, 735.0], [33.0, 735.0], [33.1, 735.0], [33.2, 735.0], [33.3, 735.0], [33.4, 735.0], [33.5, 735.0], [33.6, 735.0], [33.7, 735.0], [33.8, 735.0], [33.9, 735.0], [34.0, 735.0], [34.1, 735.0], [34.2, 735.0], [34.3, 735.0], [34.4, 736.0], [34.5, 736.0], [34.6, 736.0], [34.7, 736.0], [34.8, 736.0], [34.9, 736.0], [35.0, 736.0], [35.1, 736.0], [35.2, 736.0], [35.3, 736.0], [35.4, 736.0], [35.5, 736.0], [35.6, 736.0], [35.7, 736.0], [35.8, 736.0], [35.9, 736.0], [36.0, 736.0], [36.1, 736.0], [36.2, 736.0], [36.3, 736.0], [36.4, 736.0], [36.5, 737.0], [36.6, 737.0], [36.7, 737.0], [36.8, 737.0], [36.9, 737.0], [37.0, 738.0], [37.1, 738.0], [37.2, 738.0], [37.3, 738.0], [37.4, 738.0], [37.5, 738.0], [37.6, 738.0], [37.7, 738.0], [37.8, 738.0], [37.9, 738.0], [38.0, 738.0], [38.1, 738.0], [38.2, 738.0], [38.3, 738.0], [38.4, 738.0], [38.5, 738.0], [38.6, 738.0], [38.7, 738.0], [38.8, 738.0], [38.9, 738.0], [39.0, 738.0], [39.1, 739.0], [39.2, 739.0], [39.3, 739.0], [39.4, 739.0], [39.5, 739.0], [39.6, 739.0], [39.7, 739.0], [39.8, 739.0], [39.9, 739.0], [40.0, 739.0], [40.1, 740.0], [40.2, 740.0], [40.3, 740.0], [40.4, 740.0], [40.5, 740.0], [40.6, 740.0], [40.7, 740.0], [40.8, 740.0], [40.9, 740.0], [41.0, 740.0], [41.1, 740.0], [41.2, 740.0], [41.3, 740.0], [41.4, 740.0], [41.5, 740.0], [41.6, 741.0], [41.7, 741.0], [41.8, 741.0], [41.9, 741.0], [42.0, 742.0], [42.1, 742.0], [42.2, 742.0], [42.3, 742.0], [42.4, 742.0], [42.5, 743.0], [42.6, 743.0], [42.7, 743.0], [42.8, 743.0], [42.9, 744.0], [43.0, 744.0], [43.1, 744.0], [43.2, 744.0], [43.3, 747.0], [43.4, 747.0], [43.5, 748.0], [43.6, 748.0], [43.7, 748.0], [43.8, 748.0], [43.9, 748.0], [44.0, 748.0], [44.1, 748.0], [44.2, 748.0], [44.3, 748.0], [44.4, 748.0], [44.5, 748.0], [44.6, 749.0], [44.7, 749.0], [44.8, 749.0], [44.9, 749.0], [45.0, 751.0], [45.1, 751.0], [45.2, 751.0], [45.3, 751.0], [45.4, 751.0], [45.5, 751.0], [45.6, 752.0], [45.7, 752.0], [45.8, 752.0], [45.9, 752.0], [46.0, 753.0], [46.1, 753.0], [46.2, 753.0], [46.3, 755.0], [46.4, 755.0], [46.5, 755.0], [46.6, 755.0], [46.7, 756.0], [46.8, 756.0], [46.9, 756.0], [47.0, 756.0], [47.1, 756.0], [47.2, 756.0], [47.3, 759.0], [47.4, 759.0], [47.5, 760.0], [47.6, 760.0], [47.7, 760.0], [47.8, 760.0], [47.9, 761.0], [48.0, 761.0], [48.1, 761.0], [48.2, 765.0], [48.3, 765.0], [48.4, 765.0], [48.5, 765.0], [48.6, 768.0], [48.7, 768.0], [48.8, 769.0], [48.9, 769.0], [49.0, 769.0], [49.1, 769.0], [49.2, 770.0], [49.3, 770.0], [49.4, 770.0], [49.5, 770.0], [49.6, 770.0], [49.7, 770.0], [49.8, 771.0], [49.9, 771.0], [50.0, 773.0], [50.1, 773.0], [50.2, 773.0], [50.3, 773.0], [50.4, 773.0], [50.5, 777.0], [50.6, 777.0], [50.7, 777.0], [50.8, 777.0], [50.9, 777.0], [51.0, 777.0], [51.1, 778.0], [51.2, 778.0], [51.3, 779.0], [51.4, 779.0], [51.5, 779.0], [51.6, 779.0], [51.7, 780.0], [51.8, 780.0], [51.9, 780.0], [52.0, 780.0], [52.1, 780.0], [52.2, 780.0], [52.3, 780.0], [52.4, 780.0], [52.5, 780.0], [52.6, 780.0], [52.7, 780.0], [52.8, 780.0], [52.9, 780.0], [53.0, 780.0], [53.1, 780.0], [53.2, 781.0], [53.3, 781.0], [53.4, 781.0], [53.5, 781.0], [53.6, 781.0], [53.7, 781.0], [53.8, 781.0], [53.9, 781.0], [54.0, 781.0], [54.1, 781.0], [54.2, 781.0], [54.3, 782.0], [54.4, 782.0], [54.5, 783.0], [54.6, 783.0], [54.7, 783.0], [54.8, 783.0], [54.9, 785.0], [55.0, 785.0], [55.1, 785.0], [55.2, 785.0], [55.3, 787.0], [55.4, 787.0], [55.5, 788.0], [55.6, 788.0], [55.7, 790.0], [55.8, 790.0], [55.9, 790.0], [56.0, 790.0], [56.1, 790.0], [56.2, 791.0], [56.3, 791.0], [56.4, 792.0], [56.5, 792.0], [56.6, 792.0], [56.7, 792.0], [56.8, 792.0], [56.9, 792.0], [57.0, 792.0], [57.1, 792.0], [57.2, 792.0], [57.3, 792.0], [57.4, 795.0], [57.5, 795.0], [57.6, 795.0], [57.7, 795.0], [57.8, 795.0], [57.9, 796.0], [58.0, 796.0], [58.1, 798.0], [58.2, 798.0], [58.3, 799.0], [58.4, 799.0], [58.5, 799.0], [58.6, 799.0], [58.7, 799.0], [58.8, 799.0], [58.9, 799.0], [59.0, 799.0], [59.1, 801.0], [59.2, 801.0], [59.3, 801.0], [59.4, 801.0], [59.5, 804.0], [59.6, 804.0], [59.7, 804.0], [59.8, 804.0], [59.9, 804.0], [60.0, 805.0], [60.1, 805.0], [60.2, 806.0], [60.3, 806.0], [60.4, 807.0], [60.5, 807.0], [60.6, 808.0], [60.7, 808.0], [60.8, 808.0], [60.9, 808.0], [61.0, 808.0], [61.1, 808.0], [61.2, 813.0], [61.3, 813.0], [61.4, 814.0], [61.5, 814.0], [61.6, 814.0], [61.7, 815.0], [61.8, 815.0], [61.9, 815.0], [62.0, 815.0], [62.1, 816.0], [62.2, 816.0], [62.3, 818.0], [62.4, 818.0], [62.5, 820.0], [62.6, 820.0], [62.7, 821.0], [62.8, 821.0], [62.9, 823.0], [63.0, 823.0], [63.1, 823.0], [63.2, 823.0], [63.3, 823.0], [63.4, 823.0], [63.5, 823.0], [63.6, 824.0], [63.7, 824.0], [63.8, 825.0], [63.9, 825.0], [64.0, 827.0], [64.1, 827.0], [64.2, 827.0], [64.3, 827.0], [64.4, 827.0], [64.5, 827.0], [64.6, 830.0], [64.7, 830.0], [64.8, 831.0], [64.9, 831.0], [65.0, 832.0], [65.1, 832.0], [65.2, 832.0], [65.3, 832.0], [65.4, 832.0], [65.5, 832.0], [65.6, 832.0], [65.7, 834.0], [65.8, 834.0], [65.9, 840.0], [66.0, 840.0], [66.1, 840.0], [66.2, 840.0], [66.3, 841.0], [66.4, 841.0], [66.5, 841.0], [66.6, 841.0], [66.7, 841.0], [66.8, 841.0], [66.9, 845.0], [67.0, 845.0], [67.1, 845.0], [67.2, 845.0], [67.3, 845.0], [67.4, 845.0], [67.5, 845.0], [67.6, 849.0], [67.7, 849.0], [67.8, 851.0], [67.9, 851.0], [68.0, 862.0], [68.1, 862.0], [68.2, 869.0], [68.3, 869.0], [68.4, 870.0], [68.5, 870.0], [68.6, 873.0], [68.7, 873.0], [68.8, 873.0], [68.9, 873.0], [69.0, 874.0], [69.1, 874.0], [69.2, 874.0], [69.3, 874.0], [69.4, 874.0], [69.5, 875.0], [69.6, 875.0], [69.7, 881.0], [69.8, 881.0], [69.9, 885.0], [70.0, 885.0], [70.1, 885.0], [70.2, 885.0], [70.3, 887.0], [70.4, 887.0], [70.5, 891.0], [70.6, 891.0], [70.7, 892.0], [70.8, 892.0], [70.9, 892.0], [71.0, 892.0], [71.1, 894.0], [71.2, 894.0], [71.3, 894.0], [71.4, 902.0], [71.5, 902.0], [71.6, 905.0], [71.7, 905.0], [71.8, 909.0], [71.9, 909.0], [72.0, 910.0], [72.1, 910.0], [72.2, 914.0], [72.3, 914.0], [72.4, 920.0], [72.5, 920.0], [72.6, 922.0], [72.7, 922.0], [72.8, 927.0], [72.9, 927.0], [73.0, 927.0], [73.1, 927.0], [73.2, 927.0], [73.3, 929.0], [73.4, 929.0], [73.5, 936.0], [73.6, 936.0], [73.7, 936.0], [73.8, 936.0], [73.9, 940.0], [74.0, 940.0], [74.1, 943.0], [74.2, 943.0], [74.3, 951.0], [74.4, 951.0], [74.5, 954.0], [74.6, 954.0], [74.7, 963.0], [74.8, 963.0], [74.9, 964.0], [75.0, 964.0], [75.1, 964.0], [75.2, 966.0], [75.3, 966.0], [75.4, 967.0], [75.5, 967.0], [75.6, 968.0], [75.7, 968.0], [75.8, 976.0], [75.9, 976.0], [76.0, 976.0], [76.1, 976.0], [76.2, 976.0], [76.3, 976.0], [76.4, 977.0], [76.5, 977.0], [76.6, 978.0], [76.7, 978.0], [76.8, 982.0], [76.9, 982.0], [77.0, 982.0], [77.1, 983.0], [77.2, 983.0], [77.3, 984.0], [77.4, 984.0], [77.5, 984.0], [77.6, 984.0], [77.7, 985.0], [77.8, 985.0], [77.9, 985.0], [78.0, 985.0], [78.1, 986.0], [78.2, 986.0], [78.3, 988.0], [78.4, 988.0], [78.5, 990.0], [78.6, 990.0], [78.7, 991.0], [78.8, 991.0], [78.9, 991.0], [79.0, 991.0], [79.1, 991.0], [79.2, 992.0], [79.3, 992.0], [79.4, 997.0], [79.5, 997.0], [79.6, 1007.0], [79.7, 1007.0], [79.8, 1011.0], [79.9, 1011.0], [80.0, 1014.0], [80.1, 1014.0], [80.2, 1030.0], [80.3, 1030.0], [80.4, 1031.0], [80.5, 1031.0], [80.6, 1031.0], [80.7, 1031.0], [80.8, 1031.0], [80.9, 1034.0], [81.0, 1034.0], [81.1, 1035.0], [81.2, 1035.0], [81.3, 1035.0], [81.4, 1035.0], [81.5, 1035.0], [81.6, 1035.0], [81.7, 1035.0], [81.8, 1035.0], [81.9, 1039.0], [82.0, 1039.0], [82.1, 1048.0], [82.2, 1048.0], [82.3, 1057.0], [82.4, 1057.0], [82.5, 1063.0], [82.6, 1063.0], [82.7, 1063.0], [82.8, 1066.0], [82.9, 1066.0], [83.0, 1067.0], [83.1, 1067.0], [83.2, 1069.0], [83.3, 1069.0], [83.4, 1070.0], [83.5, 1070.0], [83.6, 1070.0], [83.7, 1070.0], [83.8, 1071.0], [83.9, 1071.0], [84.0, 1075.0], [84.1, 1075.0], [84.2, 1079.0], [84.3, 1079.0], [84.4, 1079.0], [84.5, 1079.0], [84.6, 1080.0], [84.7, 1080.0], [84.8, 1080.0], [84.9, 1080.0], [85.0, 1080.0], [85.1, 1080.0], [85.2, 1080.0], [85.3, 1081.0], [85.4, 1081.0], [85.5, 1085.0], [85.6, 1085.0], [85.7, 1086.0], [85.8, 1086.0], [85.9, 1088.0], [86.0, 1088.0], [86.1, 1094.0], [86.2, 1094.0], [86.3, 1101.0], [86.4, 1101.0], [86.5, 1102.0], [86.6, 1102.0], [86.7, 1102.0], [86.8, 1102.0], [86.9, 1102.0], [87.0, 1107.0], [87.1, 1107.0], [87.2, 1113.0], [87.3, 1113.0], [87.4, 1114.0], [87.5, 1114.0], [87.6, 1118.0], [87.7, 1118.0], [87.8, 1119.0], [87.9, 1119.0], [88.0, 1122.0], [88.1, 1122.0], [88.2, 1123.0], [88.3, 1123.0], [88.4, 1123.0], [88.5, 1123.0], [88.6, 1123.0], [88.7, 1127.0], [88.8, 1127.0], [88.9, 1142.0], [89.0, 1142.0], [89.1, 1157.0], [89.2, 1157.0], [89.3, 1164.0], [89.4, 1164.0], [89.5, 1165.0], [89.6, 1165.0], [89.7, 1165.0], [89.8, 1165.0], [89.9, 1165.0], [90.0, 1165.0], [90.1, 1165.0], [90.2, 1165.0], [90.3, 1170.0], [90.4, 1170.0], [90.5, 1170.0], [90.6, 1171.0], [90.7, 1171.0], [90.8, 1177.0], [90.9, 1177.0], [91.0, 1186.0], [91.1, 1186.0], [91.2, 1194.0], [91.3, 1194.0], [91.4, 1200.0], [91.5, 1200.0], [91.6, 1216.0], [91.7, 1216.0], [91.8, 1216.0], [91.9, 1216.0], [92.0, 1219.0], [92.1, 1219.0], [92.2, 1220.0], [92.3, 1220.0], [92.4, 1220.0], [92.5, 1226.0], [92.6, 1226.0], [92.7, 1239.0], [92.8, 1239.0], [92.9, 1242.0], [93.0, 1242.0], [93.1, 1248.0], [93.2, 1248.0], [93.3, 1262.0], [93.4, 1262.0], [93.5, 1278.0], [93.6, 1278.0], [93.7, 1313.0], [93.8, 1313.0], [93.9, 1316.0], [94.0, 1316.0], [94.1, 1321.0], [94.2, 1321.0], [94.3, 1321.0], [94.4, 1322.0], [94.5, 1322.0], [94.6, 1328.0], [94.7, 1328.0], [94.8, 1330.0], [94.9, 1330.0], [95.0, 1356.0], [95.1, 1356.0], [95.2, 1363.0], [95.3, 1363.0], [95.4, 1363.0], [95.5, 1363.0], [95.6, 1371.0], [95.7, 1371.0], [95.8, 1389.0], [95.9, 1389.0], [96.0, 1420.0], [96.1, 1420.0], [96.2, 1420.0], [96.3, 1429.0], [96.4, 1429.0], [96.5, 1431.0], [96.6, 1431.0], [96.7, 1449.0], [96.8, 1449.0], [96.9, 1449.0], [97.0, 1449.0], [97.1, 1449.0], [97.2, 1449.0], [97.3, 1460.0], [97.4, 1460.0], [97.5, 1461.0], [97.6, 1461.0], [97.7, 1480.0], [97.8, 1480.0], [97.9, 1494.0], [98.0, 1494.0], [98.1, 1494.0], [98.2, 1494.0], [98.3, 1494.0], [98.4, 1494.0], [98.5, 1494.0], [98.6, 1521.0], [98.7, 1521.0], [98.8, 1521.0], [98.9, 1521.0], [99.0, 1521.0], [99.1, 1521.0], [99.2, 1546.0], [99.3, 1546.0], [99.4, 1592.0], [99.5, 1592.0], [99.6, 1601.0], [99.7, 1601.0], [99.8, 1642.0], [99.9, 1642.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 600.0, "maxY": 198.0, "series": [{"data": [[1100.0, 24.0], [600.0, 82.0], [1200.0, 11.0], [1300.0, 11.0], [700.0, 198.0], [1400.0, 12.0], [1500.0, 5.0], [1600.0, 2.0], [800.0, 58.0], [900.0, 39.0], [1000.0, 32.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 467.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 467.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 7.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.540540540540533, "minX": 1.77999372E12, "maxY": 12.0, "series": [{"data": [[1.77999378E12, 12.0], [1.77999372E12, 8.540540540540533], [1.77999384E12, 11.174418604651164]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999384E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 684.375, "minX": 1.0, "maxY": 1601.0, "series": [{"data": [[1.0, 1601.0], [2.0, 818.0], [4.0, 1002.375], [8.0, 852.1818181818182], [9.0, 762.1333333333333], [5.0, 1104.7692307692305], [10.0, 958.7272727272727], [11.0, 792.0833333333334], [3.0, 684.375], [6.0, 1111.5833333333333], [12.0, 843.1574585635359], [7.0, 736.4166666666667]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[10.770042194092838, 854.5886075949363]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 229.33333333333334, "minX": 1.77999372E12, "maxY": 924.0, "series": [{"data": [[1.77999378E12, 924.0], [1.77999372E12, 569.8], [1.77999384E12, 331.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77999378E12, 640.0], [1.77999372E12, 394.6666666666667], [1.77999384E12, 229.33333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999384E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 808.0697674418603, "minX": 1.77999372E12, "maxY": 866.9291666666667, "series": [{"data": [[1.77999378E12, 866.9291666666667], [1.77999372E12, 861.6081081081079], [1.77999384E12, 808.0697674418603]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999384E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 808.0348837209302, "minX": 1.77999372E12, "maxY": 866.8750000000002, "series": [{"data": [[1.77999378E12, 866.8750000000002], [1.77999372E12, 861.5675675675673], [1.77999384E12, 808.0348837209302]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999384E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.77999372E12, "maxY": 0.2702702702702701, "series": [{"data": [[1.77999378E12, 0.058333333333333376], [1.77999372E12, 0.2702702702702701], [1.77999384E12, 0.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999384E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 604.0, "minX": 1.77999372E12, "maxY": 1642.0, "series": [{"data": [[1.77999378E12, 1521.0], [1.77999372E12, 1642.0], [1.77999384E12, 1371.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77999378E12, 630.0], [1.77999372E12, 604.0], [1.77999384E12, 623.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77999378E12, 1176.4], [1.77999372E12, 1216.4], [1.77999384E12, 1089.1999999999998]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77999378E12, 1521.0], [1.77999372E12, 1621.9099999999996], [1.77999384E12, 1371.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77999378E12, 777.0], [1.77999372E12, 780.0], [1.77999384E12, 739.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77999378E12, 1329.6], [1.77999372E12, 1479.1499999999994], [1.77999384E12, 1213.3499999999988]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999384E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 742.0, "minX": 1.0, "maxY": 1494.0, "series": [{"data": [[2.0, 764.0], [4.0, 805.0], [1.0, 806.5], [5.0, 816.5], [11.0, 1494.0], [3.0, 910.0], [6.0, 803.5], [7.0, 742.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 742.0, "minX": 1.0, "maxY": 1494.0, "series": [{"data": [[2.0, 764.0], [4.0, 805.0], [1.0, 806.5], [5.0, 816.5], [11.0, 1494.0], [3.0, 910.0], [6.0, 803.5], [7.0, 742.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.4, "minX": 1.77999372E12, "maxY": 4.0, "series": [{"data": [[1.77999378E12, 4.0], [1.77999372E12, 2.5], [1.77999384E12, 1.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999384E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.4333333333333333, "minX": 1.77999372E12, "maxY": 4.0, "series": [{"data": [[1.77999378E12, 4.0], [1.77999372E12, 2.466666666666667], [1.77999384E12, 1.4333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999384E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.4333333333333333, "minX": 1.77999372E12, "maxY": 4.0, "series": [{"data": [[1.77999378E12, 4.0], [1.77999372E12, 2.466666666666667], [1.77999384E12, 1.4333333333333333]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999384E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.4333333333333333, "minX": 1.77999372E12, "maxY": 4.0, "series": [{"data": [[1.77999378E12, 4.0], [1.77999372E12, 2.466666666666667], [1.77999384E12, 1.4333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999384E12, "title": "Total Transactions Per Second"}},
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

