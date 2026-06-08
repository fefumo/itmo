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
        data: {"result": {"minY": 633.0, "minX": 0.0, "maxY": 1514.0, "series": [{"data": [[0.0, 633.0], [0.1, 633.0], [0.2, 633.0], [0.3, 639.0], [0.4, 641.0], [0.5, 641.0], [0.6, 641.0], [0.7, 646.0], [0.8, 649.0], [0.9, 653.0], [1.0, 657.0], [1.1, 657.0], [1.2, 661.0], [1.3, 664.0], [1.4, 665.0], [1.5, 667.0], [1.6, 667.0], [1.7, 668.0], [1.8, 668.0], [1.9, 668.0], [2.0, 672.0], [2.1, 672.0], [2.2, 672.0], [2.3, 673.0], [2.4, 674.0], [2.5, 674.0], [2.6, 674.0], [2.7, 674.0], [2.8, 675.0], [2.9, 675.0], [3.0, 675.0], [3.1, 675.0], [3.2, 676.0], [3.3, 676.0], [3.4, 676.0], [3.5, 676.0], [3.6, 676.0], [3.7, 677.0], [3.8, 678.0], [3.9, 678.0], [4.0, 678.0], [4.1, 678.0], [4.2, 678.0], [4.3, 678.0], [4.4, 679.0], [4.5, 679.0], [4.6, 680.0], [4.7, 680.0], [4.8, 680.0], [4.9, 680.0], [5.0, 680.0], [5.1, 680.0], [5.2, 680.0], [5.3, 681.0], [5.4, 681.0], [5.5, 681.0], [5.6, 681.0], [5.7, 681.0], [5.8, 681.0], [5.9, 681.0], [6.0, 681.0], [6.1, 681.0], [6.2, 682.0], [6.3, 682.0], [6.4, 682.0], [6.5, 682.0], [6.6, 682.0], [6.7, 682.0], [6.8, 683.0], [6.9, 683.0], [7.0, 683.0], [7.1, 683.0], [7.2, 684.0], [7.3, 684.0], [7.4, 684.0], [7.5, 684.0], [7.6, 684.0], [7.7, 684.0], [7.8, 684.0], [7.9, 684.0], [8.0, 684.0], [8.1, 685.0], [8.2, 685.0], [8.3, 685.0], [8.4, 685.0], [8.5, 685.0], [8.6, 685.0], [8.7, 685.0], [8.8, 686.0], [8.9, 686.0], [9.0, 686.0], [9.1, 686.0], [9.2, 686.0], [9.3, 686.0], [9.4, 686.0], [9.5, 686.0], [9.6, 686.0], [9.7, 687.0], [9.8, 687.0], [9.9, 687.0], [10.0, 687.0], [10.1, 687.0], [10.2, 687.0], [10.3, 688.0], [10.4, 688.0], [10.5, 688.0], [10.6, 688.0], [10.7, 688.0], [10.8, 688.0], [10.9, 688.0], [11.0, 688.0], [11.1, 688.0], [11.2, 688.0], [11.3, 689.0], [11.4, 689.0], [11.5, 689.0], [11.6, 689.0], [11.7, 689.0], [11.8, 689.0], [11.9, 689.0], [12.0, 689.0], [12.1, 689.0], [12.2, 689.0], [12.3, 689.0], [12.4, 689.0], [12.5, 690.0], [12.6, 690.0], [12.7, 690.0], [12.8, 690.0], [12.9, 690.0], [13.0, 690.0], [13.1, 690.0], [13.2, 690.0], [13.3, 690.0], [13.4, 690.0], [13.5, 690.0], [13.6, 690.0], [13.7, 690.0], [13.8, 690.0], [13.9, 690.0], [14.0, 691.0], [14.1, 691.0], [14.2, 691.0], [14.3, 691.0], [14.4, 691.0], [14.5, 691.0], [14.6, 691.0], [14.7, 691.0], [14.8, 691.0], [14.9, 691.0], [15.0, 691.0], [15.1, 691.0], [15.2, 692.0], [15.3, 692.0], [15.4, 692.0], [15.5, 692.0], [15.6, 692.0], [15.7, 692.0], [15.8, 692.0], [15.9, 692.0], [16.0, 692.0], [16.1, 692.0], [16.2, 692.0], [16.3, 693.0], [16.4, 693.0], [16.5, 693.0], [16.6, 693.0], [16.7, 693.0], [16.8, 693.0], [16.9, 693.0], [17.0, 693.0], [17.1, 693.0], [17.2, 693.0], [17.3, 693.0], [17.4, 693.0], [17.5, 693.0], [17.6, 693.0], [17.7, 693.0], [17.8, 693.0], [17.9, 694.0], [18.0, 694.0], [18.1, 694.0], [18.2, 694.0], [18.3, 694.0], [18.4, 694.0], [18.5, 694.0], [18.6, 694.0], [18.7, 694.0], [18.8, 694.0], [18.9, 694.0], [19.0, 695.0], [19.1, 695.0], [19.2, 695.0], [19.3, 695.0], [19.4, 695.0], [19.5, 695.0], [19.6, 695.0], [19.7, 695.0], [19.8, 695.0], [19.9, 695.0], [20.0, 695.0], [20.1, 695.0], [20.2, 695.0], [20.3, 696.0], [20.4, 696.0], [20.5, 696.0], [20.6, 696.0], [20.7, 696.0], [20.8, 696.0], [20.9, 696.0], [21.0, 696.0], [21.1, 696.0], [21.2, 696.0], [21.3, 697.0], [21.4, 697.0], [21.5, 697.0], [21.6, 697.0], [21.7, 697.0], [21.8, 697.0], [21.9, 698.0], [22.0, 698.0], [22.1, 698.0], [22.2, 698.0], [22.3, 698.0], [22.4, 698.0], [22.5, 698.0], [22.6, 698.0], [22.7, 698.0], [22.8, 699.0], [22.9, 699.0], [23.0, 699.0], [23.1, 699.0], [23.2, 699.0], [23.3, 699.0], [23.4, 699.0], [23.5, 699.0], [23.6, 699.0], [23.7, 700.0], [23.8, 700.0], [23.9, 700.0], [24.0, 700.0], [24.1, 700.0], [24.2, 701.0], [24.3, 701.0], [24.4, 701.0], [24.5, 701.0], [24.6, 701.0], [24.7, 702.0], [24.8, 702.0], [24.9, 702.0], [25.0, 702.0], [25.1, 702.0], [25.2, 702.0], [25.3, 703.0], [25.4, 703.0], [25.5, 703.0], [25.6, 703.0], [25.7, 703.0], [25.8, 703.0], [25.9, 703.0], [26.0, 703.0], [26.1, 703.0], [26.2, 704.0], [26.3, 704.0], [26.4, 704.0], [26.5, 704.0], [26.6, 704.0], [26.7, 704.0], [26.8, 704.0], [26.9, 704.0], [27.0, 704.0], [27.1, 704.0], [27.2, 704.0], [27.3, 705.0], [27.4, 705.0], [27.5, 705.0], [27.6, 705.0], [27.7, 705.0], [27.8, 705.0], [27.9, 705.0], [28.0, 705.0], [28.1, 705.0], [28.2, 705.0], [28.3, 705.0], [28.4, 706.0], [28.5, 706.0], [28.6, 706.0], [28.7, 706.0], [28.8, 706.0], [28.9, 706.0], [29.0, 706.0], [29.1, 707.0], [29.2, 707.0], [29.3, 707.0], [29.4, 707.0], [29.5, 707.0], [29.6, 707.0], [29.7, 707.0], [29.8, 708.0], [29.9, 708.0], [30.0, 708.0], [30.1, 708.0], [30.2, 708.0], [30.3, 709.0], [30.4, 709.0], [30.5, 710.0], [30.6, 710.0], [30.7, 711.0], [30.8, 712.0], [30.9, 712.0], [31.0, 712.0], [31.1, 712.0], [31.2, 712.0], [31.3, 713.0], [31.4, 713.0], [31.5, 713.0], [31.6, 713.0], [31.7, 713.0], [31.8, 714.0], [31.9, 714.0], [32.0, 714.0], [32.1, 714.0], [32.2, 714.0], [32.3, 715.0], [32.4, 715.0], [32.5, 715.0], [32.6, 715.0], [32.7, 715.0], [32.8, 716.0], [32.9, 716.0], [33.0, 716.0], [33.1, 716.0], [33.2, 716.0], [33.3, 716.0], [33.4, 716.0], [33.5, 717.0], [33.6, 717.0], [33.7, 717.0], [33.8, 717.0], [33.9, 717.0], [34.0, 717.0], [34.1, 717.0], [34.2, 718.0], [34.3, 718.0], [34.4, 718.0], [34.5, 718.0], [34.6, 718.0], [34.7, 719.0], [34.8, 719.0], [34.9, 719.0], [35.0, 719.0], [35.1, 719.0], [35.2, 719.0], [35.3, 720.0], [35.4, 720.0], [35.5, 720.0], [35.6, 720.0], [35.7, 721.0], [35.8, 721.0], [35.9, 721.0], [36.0, 721.0], [36.1, 721.0], [36.2, 722.0], [36.3, 722.0], [36.4, 722.0], [36.5, 722.0], [36.6, 722.0], [36.7, 722.0], [36.8, 722.0], [36.9, 723.0], [37.0, 723.0], [37.1, 723.0], [37.2, 723.0], [37.3, 723.0], [37.4, 723.0], [37.5, 723.0], [37.6, 723.0], [37.7, 724.0], [37.8, 724.0], [37.9, 724.0], [38.0, 724.0], [38.1, 724.0], [38.2, 724.0], [38.3, 724.0], [38.4, 724.0], [38.5, 725.0], [38.6, 725.0], [38.7, 725.0], [38.8, 725.0], [38.9, 725.0], [39.0, 725.0], [39.1, 725.0], [39.2, 725.0], [39.3, 725.0], [39.4, 725.0], [39.5, 725.0], [39.6, 726.0], [39.7, 726.0], [39.8, 726.0], [39.9, 726.0], [40.0, 726.0], [40.1, 726.0], [40.2, 726.0], [40.3, 726.0], [40.4, 727.0], [40.5, 727.0], [40.6, 728.0], [40.7, 728.0], [40.8, 728.0], [40.9, 728.0], [41.0, 728.0], [41.1, 728.0], [41.2, 729.0], [41.3, 730.0], [41.4, 730.0], [41.5, 730.0], [41.6, 730.0], [41.7, 730.0], [41.8, 731.0], [41.9, 731.0], [42.0, 731.0], [42.1, 731.0], [42.2, 731.0], [42.3, 731.0], [42.4, 731.0], [42.5, 731.0], [42.6, 731.0], [42.7, 732.0], [42.8, 732.0], [42.9, 733.0], [43.0, 733.0], [43.1, 733.0], [43.2, 733.0], [43.3, 733.0], [43.4, 733.0], [43.5, 733.0], [43.6, 734.0], [43.7, 734.0], [43.8, 734.0], [43.9, 734.0], [44.0, 734.0], [44.1, 735.0], [44.2, 735.0], [44.3, 735.0], [44.4, 735.0], [44.5, 735.0], [44.6, 735.0], [44.7, 735.0], [44.8, 735.0], [44.9, 735.0], [45.0, 736.0], [45.1, 736.0], [45.2, 736.0], [45.3, 736.0], [45.4, 736.0], [45.5, 737.0], [45.6, 737.0], [45.7, 737.0], [45.8, 737.0], [45.9, 737.0], [46.0, 737.0], [46.1, 737.0], [46.2, 738.0], [46.3, 738.0], [46.4, 738.0], [46.5, 738.0], [46.6, 738.0], [46.7, 738.0], [46.8, 740.0], [46.9, 740.0], [47.0, 740.0], [47.1, 740.0], [47.2, 740.0], [47.3, 741.0], [47.4, 741.0], [47.5, 741.0], [47.6, 741.0], [47.7, 742.0], [47.8, 742.0], [47.9, 742.0], [48.0, 742.0], [48.1, 742.0], [48.2, 742.0], [48.3, 743.0], [48.4, 743.0], [48.5, 743.0], [48.6, 743.0], [48.7, 743.0], [48.8, 743.0], [48.9, 743.0], [49.0, 743.0], [49.1, 743.0], [49.2, 744.0], [49.3, 744.0], [49.4, 744.0], [49.5, 745.0], [49.6, 745.0], [49.7, 746.0], [49.8, 746.0], [49.9, 746.0], [50.0, 746.0], [50.1, 746.0], [50.2, 746.0], [50.3, 747.0], [50.4, 747.0], [50.5, 748.0], [50.6, 748.0], [50.7, 748.0], [50.8, 749.0], [50.9, 750.0], [51.0, 750.0], [51.1, 750.0], [51.2, 750.0], [51.3, 750.0], [51.4, 750.0], [51.5, 751.0], [51.6, 751.0], [51.7, 752.0], [51.8, 752.0], [51.9, 752.0], [52.0, 752.0], [52.1, 753.0], [52.2, 753.0], [52.3, 753.0], [52.4, 753.0], [52.5, 753.0], [52.6, 753.0], [52.7, 753.0], [52.8, 754.0], [52.9, 754.0], [53.0, 754.0], [53.1, 755.0], [53.2, 755.0], [53.3, 755.0], [53.4, 755.0], [53.5, 755.0], [53.6, 755.0], [53.7, 755.0], [53.8, 756.0], [53.9, 756.0], [54.0, 757.0], [54.1, 757.0], [54.2, 757.0], [54.3, 757.0], [54.4, 757.0], [54.5, 758.0], [54.6, 758.0], [54.7, 759.0], [54.8, 759.0], [54.9, 760.0], [55.0, 760.0], [55.1, 760.0], [55.2, 760.0], [55.3, 760.0], [55.4, 760.0], [55.5, 761.0], [55.6, 761.0], [55.7, 761.0], [55.8, 761.0], [55.9, 761.0], [56.0, 761.0], [56.1, 762.0], [56.2, 762.0], [56.3, 762.0], [56.4, 762.0], [56.5, 764.0], [56.6, 764.0], [56.7, 765.0], [56.8, 765.0], [56.9, 765.0], [57.0, 766.0], [57.1, 766.0], [57.2, 767.0], [57.3, 767.0], [57.4, 768.0], [57.5, 768.0], [57.6, 769.0], [57.7, 769.0], [57.8, 769.0], [57.9, 769.0], [58.0, 769.0], [58.1, 769.0], [58.2, 769.0], [58.3, 770.0], [58.4, 770.0], [58.5, 770.0], [58.6, 770.0], [58.7, 770.0], [58.8, 770.0], [58.9, 771.0], [59.0, 771.0], [59.1, 772.0], [59.2, 772.0], [59.3, 772.0], [59.4, 773.0], [59.5, 773.0], [59.6, 773.0], [59.7, 773.0], [59.8, 773.0], [59.9, 774.0], [60.0, 774.0], [60.1, 775.0], [60.2, 775.0], [60.3, 775.0], [60.4, 775.0], [60.5, 775.0], [60.6, 775.0], [60.7, 775.0], [60.8, 776.0], [60.9, 776.0], [61.0, 776.0], [61.1, 776.0], [61.2, 776.0], [61.3, 777.0], [61.4, 777.0], [61.5, 777.0], [61.6, 777.0], [61.7, 777.0], [61.8, 777.0], [61.9, 777.0], [62.0, 778.0], [62.1, 778.0], [62.2, 778.0], [62.3, 778.0], [62.4, 778.0], [62.5, 779.0], [62.6, 780.0], [62.7, 780.0], [62.8, 780.0], [62.9, 780.0], [63.0, 780.0], [63.1, 780.0], [63.2, 781.0], [63.3, 781.0], [63.4, 781.0], [63.5, 781.0], [63.6, 782.0], [63.7, 782.0], [63.8, 782.0], [63.9, 782.0], [64.0, 782.0], [64.1, 783.0], [64.2, 783.0], [64.3, 783.0], [64.4, 783.0], [64.5, 784.0], [64.6, 784.0], [64.7, 784.0], [64.8, 784.0], [64.9, 784.0], [65.0, 784.0], [65.1, 784.0], [65.2, 785.0], [65.3, 785.0], [65.4, 785.0], [65.5, 785.0], [65.6, 785.0], [65.7, 785.0], [65.8, 785.0], [65.9, 786.0], [66.0, 786.0], [66.1, 786.0], [66.2, 786.0], [66.3, 786.0], [66.4, 786.0], [66.5, 786.0], [66.6, 786.0], [66.7, 787.0], [66.8, 787.0], [66.9, 787.0], [67.0, 787.0], [67.1, 787.0], [67.2, 787.0], [67.3, 787.0], [67.4, 787.0], [67.5, 788.0], [67.6, 788.0], [67.7, 789.0], [67.8, 789.0], [67.9, 789.0], [68.0, 789.0], [68.1, 789.0], [68.2, 789.0], [68.3, 789.0], [68.4, 789.0], [68.5, 790.0], [68.6, 790.0], [68.7, 790.0], [68.8, 791.0], [68.9, 791.0], [69.0, 791.0], [69.1, 791.0], [69.2, 791.0], [69.3, 791.0], [69.4, 792.0], [69.5, 792.0], [69.6, 792.0], [69.7, 792.0], [69.8, 794.0], [69.9, 794.0], [70.0, 794.0], [70.1, 794.0], [70.2, 794.0], [70.3, 794.0], [70.4, 795.0], [70.5, 796.0], [70.6, 797.0], [70.7, 799.0], [70.8, 799.0], [70.9, 799.0], [71.0, 800.0], [71.1, 800.0], [71.2, 801.0], [71.3, 801.0], [71.4, 802.0], [71.5, 802.0], [71.6, 802.0], [71.7, 802.0], [71.8, 802.0], [71.9, 803.0], [72.0, 804.0], [72.1, 804.0], [72.2, 804.0], [72.3, 804.0], [72.4, 804.0], [72.5, 805.0], [72.6, 805.0], [72.7, 805.0], [72.8, 805.0], [72.9, 806.0], [73.0, 807.0], [73.1, 808.0], [73.2, 809.0], [73.3, 809.0], [73.4, 809.0], [73.5, 810.0], [73.6, 810.0], [73.7, 811.0], [73.8, 812.0], [73.9, 812.0], [74.0, 812.0], [74.1, 812.0], [74.2, 812.0], [74.3, 812.0], [74.4, 813.0], [74.5, 813.0], [74.6, 815.0], [74.7, 815.0], [74.8, 815.0], [74.9, 815.0], [75.0, 815.0], [75.1, 815.0], [75.2, 816.0], [75.3, 817.0], [75.4, 817.0], [75.5, 817.0], [75.6, 817.0], [75.7, 817.0], [75.8, 818.0], [75.9, 819.0], [76.0, 819.0], [76.1, 819.0], [76.2, 819.0], [76.3, 819.0], [76.4, 819.0], [76.5, 821.0], [76.6, 822.0], [76.7, 822.0], [76.8, 822.0], [76.9, 824.0], [77.0, 824.0], [77.1, 825.0], [77.2, 825.0], [77.3, 825.0], [77.4, 826.0], [77.5, 826.0], [77.6, 826.0], [77.7, 826.0], [77.8, 826.0], [77.9, 826.0], [78.0, 826.0], [78.1, 826.0], [78.2, 826.0], [78.3, 827.0], [78.4, 827.0], [78.5, 827.0], [78.6, 827.0], [78.7, 828.0], [78.8, 828.0], [78.9, 828.0], [79.0, 828.0], [79.1, 829.0], [79.2, 830.0], [79.3, 830.0], [79.4, 831.0], [79.5, 831.0], [79.6, 831.0], [79.7, 831.0], [79.8, 831.0], [79.9, 831.0], [80.0, 831.0], [80.1, 832.0], [80.2, 833.0], [80.3, 833.0], [80.4, 833.0], [80.5, 833.0], [80.6, 833.0], [80.7, 834.0], [80.8, 834.0], [80.9, 835.0], [81.0, 837.0], [81.1, 837.0], [81.2, 837.0], [81.3, 838.0], [81.4, 838.0], [81.5, 838.0], [81.6, 839.0], [81.7, 839.0], [81.8, 839.0], [81.9, 840.0], [82.0, 841.0], [82.1, 841.0], [82.2, 841.0], [82.3, 846.0], [82.4, 846.0], [82.5, 846.0], [82.6, 849.0], [82.7, 849.0], [82.8, 849.0], [82.9, 850.0], [83.0, 850.0], [83.1, 851.0], [83.2, 851.0], [83.3, 851.0], [83.4, 852.0], [83.5, 853.0], [83.6, 855.0], [83.7, 855.0], [83.8, 856.0], [83.9, 859.0], [84.0, 859.0], [84.1, 860.0], [84.2, 861.0], [84.3, 862.0], [84.4, 862.0], [84.5, 865.0], [84.6, 865.0], [84.7, 866.0], [84.8, 867.0], [84.9, 867.0], [85.0, 868.0], [85.1, 868.0], [85.2, 869.0], [85.3, 869.0], [85.4, 871.0], [85.5, 872.0], [85.6, 873.0], [85.7, 875.0], [85.8, 875.0], [85.9, 875.0], [86.0, 877.0], [86.1, 879.0], [86.2, 880.0], [86.3, 881.0], [86.4, 881.0], [86.5, 881.0], [86.6, 882.0], [86.7, 882.0], [86.8, 882.0], [86.9, 885.0], [87.0, 885.0], [87.1, 886.0], [87.2, 887.0], [87.3, 887.0], [87.4, 888.0], [87.5, 889.0], [87.6, 890.0], [87.7, 892.0], [87.8, 893.0], [87.9, 893.0], [88.0, 894.0], [88.1, 895.0], [88.2, 895.0], [88.3, 896.0], [88.4, 896.0], [88.5, 896.0], [88.6, 896.0], [88.7, 898.0], [88.8, 898.0], [88.9, 901.0], [89.0, 901.0], [89.1, 903.0], [89.2, 903.0], [89.3, 903.0], [89.4, 906.0], [89.5, 908.0], [89.6, 910.0], [89.7, 910.0], [89.8, 910.0], [89.9, 911.0], [90.0, 913.0], [90.1, 915.0], [90.2, 915.0], [90.3, 918.0], [90.4, 920.0], [90.5, 931.0], [90.6, 932.0], [90.7, 933.0], [90.8, 934.0], [90.9, 935.0], [91.0, 935.0], [91.1, 935.0], [91.2, 935.0], [91.3, 936.0], [91.4, 936.0], [91.5, 936.0], [91.6, 938.0], [91.7, 939.0], [91.8, 939.0], [91.9, 939.0], [92.0, 941.0], [92.1, 941.0], [92.2, 942.0], [92.3, 942.0], [92.4, 942.0], [92.5, 944.0], [92.6, 947.0], [92.7, 947.0], [92.8, 947.0], [92.9, 952.0], [93.0, 952.0], [93.1, 955.0], [93.2, 955.0], [93.3, 955.0], [93.4, 956.0], [93.5, 961.0], [93.6, 962.0], [93.7, 964.0], [93.8, 971.0], [93.9, 972.0], [94.0, 973.0], [94.1, 974.0], [94.2, 974.0], [94.3, 975.0], [94.4, 976.0], [94.5, 977.0], [94.6, 978.0], [94.7, 980.0], [94.8, 981.0], [94.9, 982.0], [95.0, 982.0], [95.1, 982.0], [95.2, 986.0], [95.3, 989.0], [95.4, 991.0], [95.5, 992.0], [95.6, 994.0], [95.7, 997.0], [95.8, 999.0], [95.9, 1000.0], [96.0, 1000.0], [96.1, 1000.0], [96.2, 1002.0], [96.3, 1014.0], [96.4, 1014.0], [96.5, 1015.0], [96.6, 1018.0], [96.7, 1019.0], [96.8, 1029.0], [96.9, 1030.0], [97.0, 1031.0], [97.1, 1031.0], [97.2, 1040.0], [97.3, 1061.0], [97.4, 1061.0], [97.5, 1084.0], [97.6, 1115.0], [97.7, 1115.0], [97.8, 1115.0], [97.9, 1115.0], [98.0, 1117.0], [98.1, 1134.0], [98.2, 1136.0], [98.3, 1152.0], [98.4, 1177.0], [98.5, 1187.0], [98.6, 1197.0], [98.7, 1237.0], [98.8, 1240.0], [98.9, 1240.0], [99.0, 1241.0], [99.1, 1249.0], [99.2, 1250.0], [99.3, 1250.0], [99.4, 1324.0], [99.5, 1325.0], [99.6, 1325.0], [99.7, 1325.0], [99.8, 1348.0], [99.9, 1437.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 503.0, "series": [{"data": [[1100.0, 12.0], [600.0, 251.0], [1200.0, 7.0], [1300.0, 5.0], [700.0, 503.0], [1400.0, 1.0], [1500.0, 1.0], [800.0, 190.0], [900.0, 74.0], [1000.0, 18.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1061.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1061.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.128712871287128, "minX": 1.77999432E12, "maxY": 26.10922330097087, "series": [{"data": [[1.77999444E12, 26.10922330097087], [1.77999438E12, 25.4462659380692], [1.77999432E12, 9.128712871287128]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999444E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 708.8333333333334, "minX": 1.0, "maxY": 1293.375, "series": [{"data": [[2.0, 853.5], [3.0, 1048.0], [4.0, 888.8571428571429], [5.0, 747.3333333333334], [6.0, 731.125], [7.0, 778.0714285714286], [9.0, 1293.375], [10.0, 881.0500000000001], [11.0, 714.0000000000001], [12.0, 708.8333333333334], [13.0, 753.4], [14.0, 744.2307692307693], [15.0, 719.9166666666667], [1.0, 804.0], [16.0, 743.0769230769231], [17.0, 754.4], [18.0, 785.4166666666666], [19.0, 829.2857142857143], [20.0, 781.0588235294117], [21.0, 742.1428571428571], [22.0, 757.8666666666667], [23.0, 810.6249999999999], [24.0, 767.8421052631579], [25.0, 800.5714285714286], [26.0, 769.0], [27.0, 774.0911360798993]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[24.151600753295632, 778.5028248587575]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 27.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 269.3333333333333, "minX": 1.77999432E12, "maxY": 2113.65, "series": [{"data": [[1.77999444E12, 1586.2], [1.77999438E12, 2113.65], [1.77999432E12, 388.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77999444E12, 1098.6666666666667], [1.77999438E12, 1464.0], [1.77999432E12, 269.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999444E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 754.9150485436883, "minX": 1.77999432E12, "maxY": 838.3564356435644, "series": [{"data": [[1.77999444E12, 754.9150485436883], [1.77999438E12, 785.1930783242262], [1.77999432E12, 838.3564356435644]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999444E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 754.9029126213596, "minX": 1.77999432E12, "maxY": 838.2079207920793, "series": [{"data": [[1.77999444E12, 754.9029126213596], [1.77999438E12, 785.1402550091076], [1.77999432E12, 838.2079207920793]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999444E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.03155339805825242, "minX": 1.77999432E12, "maxY": 0.44554455445544555, "series": [{"data": [[1.77999444E12, 0.03155339805825242], [1.77999438E12, 0.04371584699453552], [1.77999432E12, 0.44554455445544555]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999444E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 633.0, "minX": 1.77999432E12, "maxY": 1514.0, "series": [{"data": [[1.77999444E12, 1197.0], [1.77999438E12, 1325.0], [1.77999432E12, 1514.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77999444E12, 672.0], [1.77999438E12, 672.0], [1.77999432E12, 633.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77999444E12, 853.8], [1.77999438E12, 939.0], [1.77999432E12, 1172.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77999444E12, 995.0500000000001], [1.77999438E12, 1249.5], [1.77999432E12, 1512.4600000000003]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77999444E12, 734.0], [1.77999438E12, 755.0], [1.77999432E12, 769.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77999444E12, 908.6999999999999], [1.77999438E12, 984.0], [1.77999432E12, 1240.9]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999444E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 725.0, "minX": 1.0, "maxY": 1097.5, "series": [{"data": [[2.0, 853.5], [8.0, 849.5], [9.0, 817.0], [10.0, 739.0], [11.0, 744.0], [3.0, 1097.5], [12.0, 725.0], [13.0, 726.0], [14.0, 753.0], [15.0, 772.0], [1.0, 804.0], [4.0, 770.0], [16.0, 743.0], [5.0, 771.0], [6.0, 773.0], [7.0, 734.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 725.0, "minX": 1.0, "maxY": 1097.5, "series": [{"data": [[2.0, 853.5], [8.0, 849.5], [9.0, 817.0], [10.0, 739.0], [11.0, 744.0], [3.0, 1097.5], [12.0, 725.0], [13.0, 726.0], [14.0, 753.0], [15.0, 772.0], [1.0, 798.0], [4.0, 770.0], [16.0, 743.0], [5.0, 770.0], [6.0, 773.0], [7.0, 734.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.8333333333333333, "minX": 1.77999432E12, "maxY": 9.066666666666666, "series": [{"data": [[1.77999444E12, 6.8], [1.77999438E12, 9.066666666666666], [1.77999432E12, 1.8333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999444E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6833333333333333, "minX": 1.77999432E12, "maxY": 9.15, "series": [{"data": [[1.77999444E12, 6.866666666666666], [1.77999438E12, 9.15], [1.77999432E12, 1.6833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999444E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6833333333333333, "minX": 1.77999432E12, "maxY": 9.15, "series": [{"data": [[1.77999444E12, 6.866666666666666], [1.77999438E12, 9.15], [1.77999432E12, 1.6833333333333333]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999444E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6833333333333333, "minX": 1.77999432E12, "maxY": 9.15, "series": [{"data": [[1.77999444E12, 6.866666666666666], [1.77999438E12, 9.15], [1.77999432E12, 1.6833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999444E12, "title": "Total Transactions Per Second"}},
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

