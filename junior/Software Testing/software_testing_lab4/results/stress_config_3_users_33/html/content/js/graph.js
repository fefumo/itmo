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
        data: {"result": {"minY": 616.0, "minX": 0.0, "maxY": 2274.0, "series": [{"data": [[0.0, 616.0], [0.1, 627.0], [0.2, 629.0], [0.3, 631.0], [0.4, 639.0], [0.5, 646.0], [0.6, 647.0], [0.7, 662.0], [0.8, 662.0], [0.9, 663.0], [1.0, 663.0], [1.1, 669.0], [1.2, 669.0], [1.3, 669.0], [1.4, 671.0], [1.5, 673.0], [1.6, 673.0], [1.7, 676.0], [1.8, 685.0], [1.9, 685.0], [2.0, 685.0], [2.1, 690.0], [2.2, 692.0], [2.3, 693.0], [2.4, 696.0], [2.5, 700.0], [2.6, 702.0], [2.7, 702.0], [2.8, 703.0], [2.9, 703.0], [3.0, 703.0], [3.1, 703.0], [3.2, 704.0], [3.3, 704.0], [3.4, 704.0], [3.5, 705.0], [3.6, 705.0], [3.7, 705.0], [3.8, 705.0], [3.9, 705.0], [4.0, 705.0], [4.1, 705.0], [4.2, 705.0], [4.3, 705.0], [4.4, 706.0], [4.5, 706.0], [4.6, 706.0], [4.7, 706.0], [4.8, 706.0], [4.9, 707.0], [5.0, 707.0], [5.1, 707.0], [5.2, 707.0], [5.3, 707.0], [5.4, 707.0], [5.5, 707.0], [5.6, 707.0], [5.7, 707.0], [5.8, 708.0], [5.9, 708.0], [6.0, 708.0], [6.1, 708.0], [6.2, 708.0], [6.3, 708.0], [6.4, 708.0], [6.5, 708.0], [6.6, 709.0], [6.7, 709.0], [6.8, 709.0], [6.9, 709.0], [7.0, 709.0], [7.1, 709.0], [7.2, 709.0], [7.3, 709.0], [7.4, 710.0], [7.5, 710.0], [7.6, 710.0], [7.7, 710.0], [7.8, 710.0], [7.9, 710.0], [8.0, 710.0], [8.1, 710.0], [8.2, 710.0], [8.3, 710.0], [8.4, 710.0], [8.5, 711.0], [8.6, 711.0], [8.7, 711.0], [8.8, 711.0], [8.9, 711.0], [9.0, 711.0], [9.1, 711.0], [9.2, 711.0], [9.3, 711.0], [9.4, 711.0], [9.5, 711.0], [9.6, 711.0], [9.7, 711.0], [9.8, 711.0], [9.9, 711.0], [10.0, 712.0], [10.1, 712.0], [10.2, 712.0], [10.3, 712.0], [10.4, 712.0], [10.5, 712.0], [10.6, 712.0], [10.7, 712.0], [10.8, 712.0], [10.9, 712.0], [11.0, 713.0], [11.1, 713.0], [11.2, 713.0], [11.3, 713.0], [11.4, 713.0], [11.5, 713.0], [11.6, 713.0], [11.7, 713.0], [11.8, 713.0], [11.9, 713.0], [12.0, 713.0], [12.1, 714.0], [12.2, 714.0], [12.3, 714.0], [12.4, 714.0], [12.5, 714.0], [12.6, 714.0], [12.7, 714.0], [12.8, 714.0], [12.9, 715.0], [13.0, 715.0], [13.1, 715.0], [13.2, 715.0], [13.3, 715.0], [13.4, 715.0], [13.5, 716.0], [13.6, 716.0], [13.7, 716.0], [13.8, 716.0], [13.9, 716.0], [14.0, 716.0], [14.1, 716.0], [14.2, 716.0], [14.3, 716.0], [14.4, 716.0], [14.5, 717.0], [14.6, 717.0], [14.7, 717.0], [14.8, 717.0], [14.9, 717.0], [15.0, 717.0], [15.1, 717.0], [15.2, 717.0], [15.3, 717.0], [15.4, 718.0], [15.5, 718.0], [15.6, 718.0], [15.7, 718.0], [15.8, 718.0], [15.9, 718.0], [16.0, 718.0], [16.1, 718.0], [16.2, 718.0], [16.3, 718.0], [16.4, 718.0], [16.5, 718.0], [16.6, 719.0], [16.7, 719.0], [16.8, 719.0], [16.9, 719.0], [17.0, 719.0], [17.1, 719.0], [17.2, 719.0], [17.3, 720.0], [17.4, 720.0], [17.5, 720.0], [17.6, 720.0], [17.7, 720.0], [17.8, 720.0], [17.9, 720.0], [18.0, 720.0], [18.1, 720.0], [18.2, 720.0], [18.3, 721.0], [18.4, 721.0], [18.5, 721.0], [18.6, 721.0], [18.7, 722.0], [18.8, 722.0], [18.9, 722.0], [19.0, 722.0], [19.1, 722.0], [19.2, 722.0], [19.3, 722.0], [19.4, 723.0], [19.5, 723.0], [19.6, 723.0], [19.7, 723.0], [19.8, 723.0], [19.9, 723.0], [20.0, 723.0], [20.1, 723.0], [20.2, 724.0], [20.3, 724.0], [20.4, 724.0], [20.5, 724.0], [20.6, 724.0], [20.7, 724.0], [20.8, 724.0], [20.9, 724.0], [21.0, 724.0], [21.1, 725.0], [21.2, 725.0], [21.3, 725.0], [21.4, 726.0], [21.5, 726.0], [21.6, 726.0], [21.7, 726.0], [21.8, 726.0], [21.9, 726.0], [22.0, 726.0], [22.1, 727.0], [22.2, 727.0], [22.3, 727.0], [22.4, 727.0], [22.5, 727.0], [22.6, 727.0], [22.7, 728.0], [22.8, 728.0], [22.9, 728.0], [23.0, 728.0], [23.1, 728.0], [23.2, 728.0], [23.3, 728.0], [23.4, 728.0], [23.5, 729.0], [23.6, 729.0], [23.7, 729.0], [23.8, 729.0], [23.9, 729.0], [24.0, 729.0], [24.1, 729.0], [24.2, 729.0], [24.3, 729.0], [24.4, 730.0], [24.5, 730.0], [24.6, 730.0], [24.7, 730.0], [24.8, 730.0], [24.9, 730.0], [25.0, 730.0], [25.1, 730.0], [25.2, 731.0], [25.3, 731.0], [25.4, 731.0], [25.5, 731.0], [25.6, 731.0], [25.7, 731.0], [25.8, 731.0], [25.9, 731.0], [26.0, 731.0], [26.1, 731.0], [26.2, 731.0], [26.3, 732.0], [26.4, 732.0], [26.5, 732.0], [26.6, 732.0], [26.7, 732.0], [26.8, 732.0], [26.9, 732.0], [27.0, 732.0], [27.1, 732.0], [27.2, 732.0], [27.3, 732.0], [27.4, 732.0], [27.5, 732.0], [27.6, 733.0], [27.7, 733.0], [27.8, 733.0], [27.9, 733.0], [28.0, 733.0], [28.1, 733.0], [28.2, 733.0], [28.3, 733.0], [28.4, 733.0], [28.5, 733.0], [28.6, 733.0], [28.7, 733.0], [28.8, 733.0], [28.9, 733.0], [29.0, 733.0], [29.1, 734.0], [29.2, 734.0], [29.3, 734.0], [29.4, 734.0], [29.5, 734.0], [29.6, 734.0], [29.7, 734.0], [29.8, 734.0], [29.9, 734.0], [30.0, 734.0], [30.1, 734.0], [30.2, 734.0], [30.3, 734.0], [30.4, 735.0], [30.5, 735.0], [30.6, 735.0], [30.7, 735.0], [30.8, 735.0], [30.9, 735.0], [31.0, 735.0], [31.1, 735.0], [31.2, 735.0], [31.3, 735.0], [31.4, 735.0], [31.5, 735.0], [31.6, 735.0], [31.7, 735.0], [31.8, 736.0], [31.9, 736.0], [32.0, 736.0], [32.1, 736.0], [32.2, 736.0], [32.3, 736.0], [32.4, 736.0], [32.5, 737.0], [32.6, 737.0], [32.7, 737.0], [32.8, 737.0], [32.9, 737.0], [33.0, 737.0], [33.1, 737.0], [33.2, 738.0], [33.3, 738.0], [33.4, 738.0], [33.5, 738.0], [33.6, 738.0], [33.7, 738.0], [33.8, 738.0], [33.9, 738.0], [34.0, 738.0], [34.1, 738.0], [34.2, 739.0], [34.3, 739.0], [34.4, 739.0], [34.5, 739.0], [34.6, 739.0], [34.7, 739.0], [34.8, 739.0], [34.9, 739.0], [35.0, 739.0], [35.1, 739.0], [35.2, 740.0], [35.3, 740.0], [35.4, 740.0], [35.5, 740.0], [35.6, 740.0], [35.7, 740.0], [35.8, 740.0], [35.9, 740.0], [36.0, 741.0], [36.1, 741.0], [36.2, 741.0], [36.3, 741.0], [36.4, 741.0], [36.5, 741.0], [36.6, 741.0], [36.7, 741.0], [36.8, 741.0], [36.9, 742.0], [37.0, 742.0], [37.1, 742.0], [37.2, 742.0], [37.3, 742.0], [37.4, 742.0], [37.5, 742.0], [37.6, 742.0], [37.7, 742.0], [37.8, 742.0], [37.9, 743.0], [38.0, 743.0], [38.1, 743.0], [38.2, 743.0], [38.3, 743.0], [38.4, 743.0], [38.5, 743.0], [38.6, 743.0], [38.7, 743.0], [38.8, 743.0], [38.9, 743.0], [39.0, 744.0], [39.1, 744.0], [39.2, 744.0], [39.3, 744.0], [39.4, 744.0], [39.5, 744.0], [39.6, 744.0], [39.7, 744.0], [39.8, 744.0], [39.9, 744.0], [40.0, 745.0], [40.1, 745.0], [40.2, 745.0], [40.3, 745.0], [40.4, 745.0], [40.5, 745.0], [40.6, 745.0], [40.7, 746.0], [40.8, 746.0], [40.9, 746.0], [41.0, 746.0], [41.1, 746.0], [41.2, 746.0], [41.3, 746.0], [41.4, 746.0], [41.5, 746.0], [41.6, 746.0], [41.7, 746.0], [41.8, 746.0], [41.9, 746.0], [42.0, 747.0], [42.1, 747.0], [42.2, 747.0], [42.3, 747.0], [42.4, 747.0], [42.5, 747.0], [42.6, 747.0], [42.7, 748.0], [42.8, 748.0], [42.9, 748.0], [43.0, 748.0], [43.1, 748.0], [43.2, 748.0], [43.3, 748.0], [43.4, 749.0], [43.5, 749.0], [43.6, 749.0], [43.7, 749.0], [43.8, 749.0], [43.9, 749.0], [44.0, 749.0], [44.1, 750.0], [44.2, 750.0], [44.3, 750.0], [44.4, 750.0], [44.5, 750.0], [44.6, 750.0], [44.7, 750.0], [44.8, 751.0], [44.9, 751.0], [45.0, 751.0], [45.1, 751.0], [45.2, 751.0], [45.3, 752.0], [45.4, 752.0], [45.5, 752.0], [45.6, 752.0], [45.7, 752.0], [45.8, 752.0], [45.9, 752.0], [46.0, 752.0], [46.1, 753.0], [46.2, 753.0], [46.3, 753.0], [46.4, 753.0], [46.5, 753.0], [46.6, 753.0], [46.7, 754.0], [46.8, 754.0], [46.9, 754.0], [47.0, 754.0], [47.1, 754.0], [47.2, 755.0], [47.3, 755.0], [47.4, 755.0], [47.5, 755.0], [47.6, 756.0], [47.7, 756.0], [47.8, 756.0], [47.9, 756.0], [48.0, 756.0], [48.1, 756.0], [48.2, 756.0], [48.3, 756.0], [48.4, 756.0], [48.5, 756.0], [48.6, 757.0], [48.7, 757.0], [48.8, 757.0], [48.9, 757.0], [49.0, 757.0], [49.1, 758.0], [49.2, 758.0], [49.3, 758.0], [49.4, 758.0], [49.5, 758.0], [49.6, 758.0], [49.7, 759.0], [49.8, 759.0], [49.9, 759.0], [50.0, 759.0], [50.1, 759.0], [50.2, 759.0], [50.3, 759.0], [50.4, 760.0], [50.5, 760.0], [50.6, 760.0], [50.7, 761.0], [50.8, 761.0], [50.9, 761.0], [51.0, 761.0], [51.1, 762.0], [51.2, 762.0], [51.3, 762.0], [51.4, 762.0], [51.5, 762.0], [51.6, 762.0], [51.7, 762.0], [51.8, 762.0], [51.9, 763.0], [52.0, 763.0], [52.1, 763.0], [52.2, 764.0], [52.3, 764.0], [52.4, 764.0], [52.5, 765.0], [52.6, 765.0], [52.7, 765.0], [52.8, 765.0], [52.9, 766.0], [53.0, 766.0], [53.1, 766.0], [53.2, 766.0], [53.3, 766.0], [53.4, 766.0], [53.5, 766.0], [53.6, 767.0], [53.7, 767.0], [53.8, 767.0], [53.9, 767.0], [54.0, 768.0], [54.1, 768.0], [54.2, 768.0], [54.3, 768.0], [54.4, 768.0], [54.5, 768.0], [54.6, 768.0], [54.7, 768.0], [54.8, 768.0], [54.9, 768.0], [55.0, 769.0], [55.1, 769.0], [55.2, 769.0], [55.3, 769.0], [55.4, 769.0], [55.5, 769.0], [55.6, 769.0], [55.7, 769.0], [55.8, 769.0], [55.9, 769.0], [56.0, 769.0], [56.1, 770.0], [56.2, 770.0], [56.3, 770.0], [56.4, 770.0], [56.5, 770.0], [56.6, 770.0], [56.7, 770.0], [56.8, 770.0], [56.9, 771.0], [57.0, 771.0], [57.1, 771.0], [57.2, 771.0], [57.3, 771.0], [57.4, 771.0], [57.5, 771.0], [57.6, 771.0], [57.7, 772.0], [57.8, 772.0], [57.9, 772.0], [58.0, 772.0], [58.1, 772.0], [58.2, 772.0], [58.3, 772.0], [58.4, 772.0], [58.5, 772.0], [58.6, 773.0], [58.7, 773.0], [58.8, 773.0], [58.9, 773.0], [59.0, 773.0], [59.1, 773.0], [59.2, 773.0], [59.3, 773.0], [59.4, 773.0], [59.5, 774.0], [59.6, 774.0], [59.7, 774.0], [59.8, 774.0], [59.9, 774.0], [60.0, 774.0], [60.1, 774.0], [60.2, 774.0], [60.3, 774.0], [60.4, 774.0], [60.5, 774.0], [60.6, 774.0], [60.7, 775.0], [60.8, 775.0], [60.9, 775.0], [61.0, 775.0], [61.1, 775.0], [61.2, 775.0], [61.3, 775.0], [61.4, 775.0], [61.5, 775.0], [61.6, 776.0], [61.7, 776.0], [61.8, 776.0], [61.9, 776.0], [62.0, 776.0], [62.1, 777.0], [62.2, 777.0], [62.3, 777.0], [62.4, 777.0], [62.5, 777.0], [62.6, 777.0], [62.7, 778.0], [62.8, 778.0], [62.9, 778.0], [63.0, 778.0], [63.1, 778.0], [63.2, 778.0], [63.3, 778.0], [63.4, 778.0], [63.5, 779.0], [63.6, 779.0], [63.7, 779.0], [63.8, 779.0], [63.9, 779.0], [64.0, 779.0], [64.1, 779.0], [64.2, 779.0], [64.3, 779.0], [64.4, 779.0], [64.5, 780.0], [64.6, 780.0], [64.7, 780.0], [64.8, 780.0], [64.9, 780.0], [65.0, 780.0], [65.1, 780.0], [65.2, 781.0], [65.3, 781.0], [65.4, 781.0], [65.5, 781.0], [65.6, 781.0], [65.7, 781.0], [65.8, 781.0], [65.9, 782.0], [66.0, 782.0], [66.1, 782.0], [66.2, 783.0], [66.3, 783.0], [66.4, 783.0], [66.5, 783.0], [66.6, 783.0], [66.7, 783.0], [66.8, 784.0], [66.9, 784.0], [67.0, 784.0], [67.1, 784.0], [67.2, 784.0], [67.3, 784.0], [67.4, 784.0], [67.5, 784.0], [67.6, 785.0], [67.7, 785.0], [67.8, 785.0], [67.9, 785.0], [68.0, 785.0], [68.1, 785.0], [68.2, 785.0], [68.3, 786.0], [68.4, 786.0], [68.5, 786.0], [68.6, 787.0], [68.7, 787.0], [68.8, 787.0], [68.9, 787.0], [69.0, 787.0], [69.1, 788.0], [69.2, 789.0], [69.3, 789.0], [69.4, 790.0], [69.5, 790.0], [69.6, 790.0], [69.7, 791.0], [69.8, 791.0], [69.9, 791.0], [70.0, 791.0], [70.1, 791.0], [70.2, 791.0], [70.3, 791.0], [70.4, 792.0], [70.5, 792.0], [70.6, 792.0], [70.7, 793.0], [70.8, 793.0], [70.9, 793.0], [71.0, 793.0], [71.1, 794.0], [71.2, 794.0], [71.3, 794.0], [71.4, 794.0], [71.5, 795.0], [71.6, 795.0], [71.7, 795.0], [71.8, 795.0], [71.9, 796.0], [72.0, 796.0], [72.1, 797.0], [72.2, 797.0], [72.3, 797.0], [72.4, 798.0], [72.5, 798.0], [72.6, 799.0], [72.7, 799.0], [72.8, 799.0], [72.9, 799.0], [73.0, 800.0], [73.1, 800.0], [73.2, 800.0], [73.3, 800.0], [73.4, 800.0], [73.5, 801.0], [73.6, 801.0], [73.7, 801.0], [73.8, 801.0], [73.9, 801.0], [74.0, 801.0], [74.1, 801.0], [74.2, 802.0], [74.3, 802.0], [74.4, 802.0], [74.5, 802.0], [74.6, 803.0], [74.7, 803.0], [74.8, 803.0], [74.9, 803.0], [75.0, 803.0], [75.1, 803.0], [75.2, 804.0], [75.3, 805.0], [75.4, 805.0], [75.5, 806.0], [75.6, 806.0], [75.7, 806.0], [75.8, 806.0], [75.9, 807.0], [76.0, 807.0], [76.1, 807.0], [76.2, 807.0], [76.3, 807.0], [76.4, 808.0], [76.5, 808.0], [76.6, 808.0], [76.7, 808.0], [76.8, 809.0], [76.9, 809.0], [77.0, 809.0], [77.1, 810.0], [77.2, 811.0], [77.3, 811.0], [77.4, 811.0], [77.5, 811.0], [77.6, 813.0], [77.7, 813.0], [77.8, 813.0], [77.9, 814.0], [78.0, 814.0], [78.1, 814.0], [78.2, 814.0], [78.3, 817.0], [78.4, 817.0], [78.5, 818.0], [78.6, 818.0], [78.7, 818.0], [78.8, 819.0], [78.9, 820.0], [79.0, 820.0], [79.1, 821.0], [79.2, 822.0], [79.3, 822.0], [79.4, 823.0], [79.5, 823.0], [79.6, 823.0], [79.7, 823.0], [79.8, 824.0], [79.9, 824.0], [80.0, 825.0], [80.1, 826.0], [80.2, 826.0], [80.3, 826.0], [80.4, 826.0], [80.5, 827.0], [80.6, 827.0], [80.7, 827.0], [80.8, 827.0], [80.9, 828.0], [81.0, 828.0], [81.1, 828.0], [81.2, 828.0], [81.3, 828.0], [81.4, 828.0], [81.5, 828.0], [81.6, 829.0], [81.7, 829.0], [81.8, 829.0], [81.9, 829.0], [82.0, 829.0], [82.1, 830.0], [82.2, 830.0], [82.3, 830.0], [82.4, 831.0], [82.5, 831.0], [82.6, 831.0], [82.7, 831.0], [82.8, 831.0], [82.9, 831.0], [83.0, 831.0], [83.1, 832.0], [83.2, 832.0], [83.3, 833.0], [83.4, 833.0], [83.5, 833.0], [83.6, 833.0], [83.7, 833.0], [83.8, 834.0], [83.9, 834.0], [84.0, 834.0], [84.1, 834.0], [84.2, 834.0], [84.3, 835.0], [84.4, 835.0], [84.5, 836.0], [84.6, 836.0], [84.7, 836.0], [84.8, 836.0], [84.9, 836.0], [85.0, 836.0], [85.1, 836.0], [85.2, 837.0], [85.3, 837.0], [85.4, 837.0], [85.5, 838.0], [85.6, 839.0], [85.7, 840.0], [85.8, 842.0], [85.9, 843.0], [86.0, 845.0], [86.1, 845.0], [86.2, 845.0], [86.3, 847.0], [86.4, 849.0], [86.5, 850.0], [86.6, 851.0], [86.7, 853.0], [86.8, 853.0], [86.9, 855.0], [87.0, 855.0], [87.1, 855.0], [87.2, 856.0], [87.3, 856.0], [87.4, 856.0], [87.5, 858.0], [87.6, 859.0], [87.7, 860.0], [87.8, 862.0], [87.9, 863.0], [88.0, 867.0], [88.1, 869.0], [88.2, 873.0], [88.3, 874.0], [88.4, 875.0], [88.5, 876.0], [88.6, 876.0], [88.7, 876.0], [88.8, 877.0], [88.9, 877.0], [89.0, 880.0], [89.1, 881.0], [89.2, 883.0], [89.3, 885.0], [89.4, 891.0], [89.5, 894.0], [89.6, 896.0], [89.7, 898.0], [89.8, 898.0], [89.9, 899.0], [90.0, 900.0], [90.1, 901.0], [90.2, 903.0], [90.3, 909.0], [90.4, 909.0], [90.5, 911.0], [90.6, 911.0], [90.7, 914.0], [90.8, 914.0], [90.9, 918.0], [91.0, 920.0], [91.1, 920.0], [91.2, 921.0], [91.3, 923.0], [91.4, 924.0], [91.5, 925.0], [91.6, 925.0], [91.7, 925.0], [91.8, 925.0], [91.9, 925.0], [92.0, 925.0], [92.1, 926.0], [92.2, 927.0], [92.3, 928.0], [92.4, 929.0], [92.5, 929.0], [92.6, 932.0], [92.7, 932.0], [92.8, 935.0], [92.9, 937.0], [93.0, 938.0], [93.1, 940.0], [93.2, 941.0], [93.3, 942.0], [93.4, 943.0], [93.5, 949.0], [93.6, 951.0], [93.7, 952.0], [93.8, 958.0], [93.9, 959.0], [94.0, 959.0], [94.1, 960.0], [94.2, 968.0], [94.3, 975.0], [94.4, 976.0], [94.5, 980.0], [94.6, 981.0], [94.7, 981.0], [94.8, 983.0], [94.9, 989.0], [95.0, 991.0], [95.1, 991.0], [95.2, 997.0], [95.3, 1000.0], [95.4, 1001.0], [95.5, 1002.0], [95.6, 1007.0], [95.7, 1013.0], [95.8, 1013.0], [95.9, 1015.0], [96.0, 1017.0], [96.1, 1017.0], [96.2, 1020.0], [96.3, 1032.0], [96.4, 1033.0], [96.5, 1037.0], [96.6, 1048.0], [96.7, 1049.0], [96.8, 1049.0], [96.9, 1054.0], [97.0, 1062.0], [97.1, 1066.0], [97.2, 1066.0], [97.3, 1066.0], [97.4, 1070.0], [97.5, 1071.0], [97.6, 1072.0], [97.7, 1077.0], [97.8, 1091.0], [97.9, 1092.0], [98.0, 1104.0], [98.1, 1105.0], [98.2, 1124.0], [98.3, 1144.0], [98.4, 1159.0], [98.5, 1160.0], [98.6, 1161.0], [98.7, 1182.0], [98.8, 1190.0], [98.9, 1217.0], [99.0, 1243.0], [99.1, 1243.0], [99.2, 1246.0], [99.3, 1325.0], [99.4, 1331.0], [99.5, 1364.0], [99.6, 1384.0], [99.7, 1469.0], [99.8, 1491.0], [99.9, 1667.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 909.0, "series": [{"data": [[1100.0, 11.0], [2200.0, 1.0], [600.0, 32.0], [1200.0, 5.0], [1300.0, 5.0], [700.0, 909.0], [1400.0, 3.0], [1600.0, 1.0], [800.0, 219.0], [900.0, 69.0], [1000.0, 35.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1288.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1288.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.769230769230769, "minX": 1.77999456E12, "maxY": 32.15522875816992, "series": [{"data": [[1.77999462E12, 27.760902255639106], [1.77999456E12, 4.769230769230769], [1.77999468E12, 32.15522875816992]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999468E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 710.5, "minX": 2.0, "maxY": 1233.6666666666667, "series": [{"data": [[32.0, 835.0], [33.0, 782.0551583248207], [2.0, 806.5], [3.0, 1233.6666666666667], [4.0, 862.0], [5.0, 1076.8333333333333], [6.0, 1066.0], [7.0, 1174.1666666666667], [8.0, 752.6666666666667], [9.0, 754.1111111111111], [10.0, 732.076923076923], [11.0, 713.0833333333334], [12.0, 710.5], [13.0, 732.1818181818181], [14.0, 722.1818181818182], [15.0, 737.0], [16.0, 779.8181818181819], [17.0, 760.0], [18.0, 779.0], [19.0, 777.090909090909], [20.0, 764.3333333333333], [21.0, 828.0], [22.0, 786.2727272727273], [23.0, 953.9166666666666], [24.0, 809.7], [25.0, 795.4000000000002], [26.0, 807.3000000000001], [27.0, 801.0000000000001], [28.0, 800.75], [29.0, 823.9230769230769], [30.0, 764.9000000000001], [31.0, 838.3571428571429]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[29.613953488372108, 787.6790697674417]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 33.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 34.666666666666664, "minX": 1.77999456E12, "maxY": 2560.25, "series": [{"data": [[1.77999462E12, 2560.25], [1.77999456E12, 50.05], [1.77999468E12, 2356.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77999462E12, 1773.3333333333333], [1.77999456E12, 34.666666666666664], [1.77999468E12, 1632.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999468E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 782.0735294117641, "minX": 1.77999456E12, "maxY": 1129.230769230769, "series": [{"data": [[1.77999462E12, 786.1609022556388], [1.77999456E12, 1129.230769230769], [1.77999468E12, 782.0735294117641]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999468E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 782.0522875816986, "minX": 1.77999456E12, "maxY": 1128.7692307692307, "series": [{"data": [[1.77999462E12, 786.103759398496], [1.77999456E12, 1128.7692307692307], [1.77999468E12, 782.0522875816986]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999468E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.04060150375939849, "minX": 1.77999456E12, "maxY": 2.615384615384615, "series": [{"data": [[1.77999462E12, 0.04060150375939849], [1.77999456E12, 2.615384615384615], [1.77999468E12, 0.04084967320261427]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999468E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 616.0, "minX": 1.77999456E12, "maxY": 2274.0, "series": [{"data": [[1.77999462E12, 2274.0], [1.77999456E12, 1667.0], [1.77999468E12, 1469.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77999462E12, 616.0], [1.77999456E12, 629.0], [1.77999468E12, 700.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77999462E12, 909.0], [1.77999456E12, 1553.8], [1.77999468E12, 877.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77999462E12, 1221.0800000000004], [1.77999456E12, 1667.0], [1.77999468E12, 1178.4]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77999462E12, 756.0], [1.77999456E12, 1066.0], [1.77999468E12, 760.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77999462E12, 995.1999999999996], [1.77999456E12, 1667.0], [1.77999468E12, 938.7]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999468E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 736.0, "minX": 2.0, "maxY": 1496.0, "series": [{"data": [[2.0, 1496.0], [8.0, 739.5], [9.0, 742.0], [10.0, 759.0], [11.0, 768.0], [3.0, 909.0], [12.0, 761.5], [13.0, 756.5], [14.0, 762.0], [15.0, 789.0], [4.0, 1066.0], [5.0, 806.0], [6.0, 973.5], [7.0, 736.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 736.0, "minX": 2.0, "maxY": 1493.0, "series": [{"data": [[2.0, 1493.0], [8.0, 739.5], [9.0, 742.0], [10.0, 759.0], [11.0, 768.0], [3.0, 909.0], [12.0, 761.5], [13.0, 756.5], [14.0, 762.0], [15.0, 789.0], [4.0, 1066.0], [5.0, 806.0], [6.0, 973.5], [7.0, 736.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.77999456E12, "maxY": 11.116666666666667, "series": [{"data": [[1.77999462E12, 11.116666666666667], [1.77999456E12, 0.31666666666666665], [1.77999468E12, 10.066666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999468E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.77999456E12, "maxY": 11.083333333333334, "series": [{"data": [[1.77999462E12, 11.083333333333334], [1.77999456E12, 0.21666666666666667], [1.77999468E12, 10.2]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999468E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.77999456E12, "maxY": 11.083333333333334, "series": [{"data": [[1.77999462E12, 11.083333333333334], [1.77999456E12, 0.21666666666666667], [1.77999468E12, 10.2]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999468E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.21666666666666667, "minX": 1.77999456E12, "maxY": 11.083333333333334, "series": [{"data": [[1.77999462E12, 11.083333333333334], [1.77999456E12, 0.21666666666666667], [1.77999468E12, 10.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999468E12, "title": "Total Transactions Per Second"}},
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

