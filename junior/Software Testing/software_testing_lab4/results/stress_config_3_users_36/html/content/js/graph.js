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
        data: {"result": {"minY": 625.0, "minX": 0.0, "maxY": 1592.0, "series": [{"data": [[0.0, 625.0], [0.1, 635.0], [0.2, 636.0], [0.3, 640.0], [0.4, 640.0], [0.5, 641.0], [0.6, 644.0], [0.7, 655.0], [0.8, 655.0], [0.9, 655.0], [1.0, 661.0], [1.1, 662.0], [1.2, 679.0], [1.3, 679.0], [1.4, 682.0], [1.5, 684.0], [1.6, 685.0], [1.7, 686.0], [1.8, 686.0], [1.9, 686.0], [2.0, 691.0], [2.1, 692.0], [2.2, 697.0], [2.3, 699.0], [2.4, 700.0], [2.5, 711.0], [2.6, 713.0], [2.7, 713.0], [2.8, 714.0], [2.9, 717.0], [3.0, 717.0], [3.1, 717.0], [3.2, 717.0], [3.3, 717.0], [3.4, 718.0], [3.5, 718.0], [3.6, 718.0], [3.7, 718.0], [3.8, 718.0], [3.9, 718.0], [4.0, 719.0], [4.1, 720.0], [4.2, 720.0], [4.3, 720.0], [4.4, 722.0], [4.5, 722.0], [4.6, 723.0], [4.7, 723.0], [4.8, 723.0], [4.9, 723.0], [5.0, 723.0], [5.1, 724.0], [5.2, 724.0], [5.3, 724.0], [5.4, 724.0], [5.5, 724.0], [5.6, 724.0], [5.7, 724.0], [5.8, 724.0], [5.9, 725.0], [6.0, 725.0], [6.1, 725.0], [6.2, 725.0], [6.3, 726.0], [6.4, 726.0], [6.5, 726.0], [6.6, 726.0], [6.7, 726.0], [6.8, 726.0], [6.9, 726.0], [7.0, 726.0], [7.1, 726.0], [7.2, 726.0], [7.3, 726.0], [7.4, 726.0], [7.5, 726.0], [7.6, 726.0], [7.7, 727.0], [7.8, 727.0], [7.9, 727.0], [8.0, 727.0], [8.1, 727.0], [8.2, 727.0], [8.3, 727.0], [8.4, 728.0], [8.5, 728.0], [8.6, 728.0], [8.7, 728.0], [8.8, 728.0], [8.9, 729.0], [9.0, 729.0], [9.1, 729.0], [9.2, 729.0], [9.3, 729.0], [9.4, 729.0], [9.5, 729.0], [9.6, 729.0], [9.7, 730.0], [9.8, 730.0], [9.9, 730.0], [10.0, 730.0], [10.1, 730.0], [10.2, 730.0], [10.3, 730.0], [10.4, 731.0], [10.5, 731.0], [10.6, 731.0], [10.7, 731.0], [10.8, 731.0], [10.9, 731.0], [11.0, 731.0], [11.1, 731.0], [11.2, 731.0], [11.3, 731.0], [11.4, 731.0], [11.5, 732.0], [11.6, 732.0], [11.7, 732.0], [11.8, 732.0], [11.9, 732.0], [12.0, 732.0], [12.1, 732.0], [12.2, 732.0], [12.3, 732.0], [12.4, 732.0], [12.5, 733.0], [12.6, 733.0], [12.7, 733.0], [12.8, 733.0], [12.9, 733.0], [13.0, 733.0], [13.1, 733.0], [13.2, 733.0], [13.3, 734.0], [13.4, 734.0], [13.5, 734.0], [13.6, 734.0], [13.7, 734.0], [13.8, 734.0], [13.9, 734.0], [14.0, 735.0], [14.1, 735.0], [14.2, 735.0], [14.3, 735.0], [14.4, 735.0], [14.5, 735.0], [14.6, 735.0], [14.7, 735.0], [14.8, 735.0], [14.9, 735.0], [15.0, 735.0], [15.1, 735.0], [15.2, 736.0], [15.3, 736.0], [15.4, 736.0], [15.5, 736.0], [15.6, 736.0], [15.7, 736.0], [15.8, 736.0], [15.9, 736.0], [16.0, 736.0], [16.1, 736.0], [16.2, 737.0], [16.3, 737.0], [16.4, 737.0], [16.5, 737.0], [16.6, 737.0], [16.7, 737.0], [16.8, 737.0], [16.9, 737.0], [17.0, 738.0], [17.1, 738.0], [17.2, 738.0], [17.3, 738.0], [17.4, 738.0], [17.5, 738.0], [17.6, 738.0], [17.7, 738.0], [17.8, 739.0], [17.9, 739.0], [18.0, 739.0], [18.1, 739.0], [18.2, 739.0], [18.3, 739.0], [18.4, 739.0], [18.5, 739.0], [18.6, 739.0], [18.7, 739.0], [18.8, 740.0], [18.9, 740.0], [19.0, 740.0], [19.1, 740.0], [19.2, 740.0], [19.3, 740.0], [19.4, 740.0], [19.5, 741.0], [19.6, 741.0], [19.7, 741.0], [19.8, 741.0], [19.9, 741.0], [20.0, 741.0], [20.1, 741.0], [20.2, 741.0], [20.3, 741.0], [20.4, 741.0], [20.5, 741.0], [20.6, 741.0], [20.7, 741.0], [20.8, 741.0], [20.9, 741.0], [21.0, 742.0], [21.1, 742.0], [21.2, 742.0], [21.3, 742.0], [21.4, 742.0], [21.5, 742.0], [21.6, 743.0], [21.7, 743.0], [21.8, 743.0], [21.9, 743.0], [22.0, 743.0], [22.1, 743.0], [22.2, 743.0], [22.3, 743.0], [22.4, 743.0], [22.5, 744.0], [22.6, 744.0], [22.7, 744.0], [22.8, 744.0], [22.9, 744.0], [23.0, 744.0], [23.1, 744.0], [23.2, 744.0], [23.3, 744.0], [23.4, 744.0], [23.5, 744.0], [23.6, 745.0], [23.7, 745.0], [23.8, 745.0], [23.9, 745.0], [24.0, 745.0], [24.1, 745.0], [24.2, 745.0], [24.3, 746.0], [24.4, 746.0], [24.5, 746.0], [24.6, 746.0], [24.7, 746.0], [24.8, 746.0], [24.9, 746.0], [25.0, 746.0], [25.1, 747.0], [25.2, 747.0], [25.3, 747.0], [25.4, 747.0], [25.5, 747.0], [25.6, 747.0], [25.7, 747.0], [25.8, 748.0], [25.9, 748.0], [26.0, 748.0], [26.1, 748.0], [26.2, 748.0], [26.3, 748.0], [26.4, 748.0], [26.5, 748.0], [26.6, 749.0], [26.7, 749.0], [26.8, 749.0], [26.9, 749.0], [27.0, 749.0], [27.1, 749.0], [27.2, 749.0], [27.3, 749.0], [27.4, 749.0], [27.5, 749.0], [27.6, 750.0], [27.7, 750.0], [27.8, 750.0], [27.9, 750.0], [28.0, 750.0], [28.1, 750.0], [28.2, 750.0], [28.3, 750.0], [28.4, 750.0], [28.5, 750.0], [28.6, 750.0], [28.7, 751.0], [28.8, 751.0], [28.9, 751.0], [29.0, 751.0], [29.1, 751.0], [29.2, 751.0], [29.3, 751.0], [29.4, 751.0], [29.5, 751.0], [29.6, 752.0], [29.7, 752.0], [29.8, 752.0], [29.9, 752.0], [30.0, 752.0], [30.1, 752.0], [30.2, 752.0], [30.3, 752.0], [30.4, 753.0], [30.5, 753.0], [30.6, 753.0], [30.7, 753.0], [30.8, 754.0], [30.9, 754.0], [31.0, 754.0], [31.1, 754.0], [31.2, 754.0], [31.3, 755.0], [31.4, 755.0], [31.5, 755.0], [31.6, 755.0], [31.7, 755.0], [31.8, 755.0], [31.9, 755.0], [32.0, 755.0], [32.1, 755.0], [32.2, 755.0], [32.3, 756.0], [32.4, 756.0], [32.5, 756.0], [32.6, 756.0], [32.7, 756.0], [32.8, 756.0], [32.9, 756.0], [33.0, 756.0], [33.1, 756.0], [33.2, 756.0], [33.3, 756.0], [33.4, 756.0], [33.5, 756.0], [33.6, 756.0], [33.7, 757.0], [33.8, 757.0], [33.9, 757.0], [34.0, 757.0], [34.1, 757.0], [34.2, 757.0], [34.3, 757.0], [34.4, 757.0], [34.5, 757.0], [34.6, 757.0], [34.7, 757.0], [34.8, 757.0], [34.9, 757.0], [35.0, 758.0], [35.1, 758.0], [35.2, 758.0], [35.3, 758.0], [35.4, 758.0], [35.5, 758.0], [35.6, 759.0], [35.7, 759.0], [35.8, 759.0], [35.9, 759.0], [36.0, 759.0], [36.1, 759.0], [36.2, 759.0], [36.3, 759.0], [36.4, 759.0], [36.5, 759.0], [36.6, 759.0], [36.7, 759.0], [36.8, 759.0], [36.9, 759.0], [37.0, 759.0], [37.1, 760.0], [37.2, 760.0], [37.3, 760.0], [37.4, 760.0], [37.5, 760.0], [37.6, 760.0], [37.7, 760.0], [37.8, 760.0], [37.9, 760.0], [38.0, 760.0], [38.1, 760.0], [38.2, 760.0], [38.3, 760.0], [38.4, 760.0], [38.5, 760.0], [38.6, 761.0], [38.7, 761.0], [38.8, 761.0], [38.9, 761.0], [39.0, 761.0], [39.1, 761.0], [39.2, 761.0], [39.3, 761.0], [39.4, 761.0], [39.5, 762.0], [39.6, 762.0], [39.7, 762.0], [39.8, 762.0], [39.9, 762.0], [40.0, 762.0], [40.1, 762.0], [40.2, 762.0], [40.3, 762.0], [40.4, 762.0], [40.5, 762.0], [40.6, 763.0], [40.7, 763.0], [40.8, 763.0], [40.9, 763.0], [41.0, 763.0], [41.1, 763.0], [41.2, 763.0], [41.3, 763.0], [41.4, 763.0], [41.5, 763.0], [41.6, 764.0], [41.7, 764.0], [41.8, 764.0], [41.9, 764.0], [42.0, 764.0], [42.1, 764.0], [42.2, 765.0], [42.3, 765.0], [42.4, 765.0], [42.5, 765.0], [42.6, 765.0], [42.7, 765.0], [42.8, 765.0], [42.9, 765.0], [43.0, 765.0], [43.1, 766.0], [43.2, 766.0], [43.3, 766.0], [43.4, 766.0], [43.5, 766.0], [43.6, 767.0], [43.7, 767.0], [43.8, 767.0], [43.9, 767.0], [44.0, 767.0], [44.1, 767.0], [44.2, 767.0], [44.3, 767.0], [44.4, 767.0], [44.5, 767.0], [44.6, 767.0], [44.7, 768.0], [44.8, 768.0], [44.9, 768.0], [45.0, 768.0], [45.1, 768.0], [45.2, 768.0], [45.3, 768.0], [45.4, 768.0], [45.5, 768.0], [45.6, 769.0], [45.7, 769.0], [45.8, 769.0], [45.9, 769.0], [46.0, 769.0], [46.1, 769.0], [46.2, 770.0], [46.3, 770.0], [46.4, 770.0], [46.5, 770.0], [46.6, 770.0], [46.7, 770.0], [46.8, 770.0], [46.9, 770.0], [47.0, 770.0], [47.1, 770.0], [47.2, 770.0], [47.3, 770.0], [47.4, 771.0], [47.5, 771.0], [47.6, 771.0], [47.7, 771.0], [47.8, 771.0], [47.9, 771.0], [48.0, 771.0], [48.1, 772.0], [48.2, 772.0], [48.3, 772.0], [48.4, 772.0], [48.5, 772.0], [48.6, 772.0], [48.7, 772.0], [48.8, 772.0], [48.9, 772.0], [49.0, 772.0], [49.1, 772.0], [49.2, 772.0], [49.3, 772.0], [49.4, 772.0], [49.5, 773.0], [49.6, 773.0], [49.7, 773.0], [49.8, 773.0], [49.9, 774.0], [50.0, 774.0], [50.1, 774.0], [50.2, 774.0], [50.3, 774.0], [50.4, 774.0], [50.5, 774.0], [50.6, 774.0], [50.7, 774.0], [50.8, 774.0], [50.9, 775.0], [51.0, 775.0], [51.1, 775.0], [51.2, 775.0], [51.3, 775.0], [51.4, 775.0], [51.5, 775.0], [51.6, 775.0], [51.7, 776.0], [51.8, 776.0], [51.9, 776.0], [52.0, 776.0], [52.1, 776.0], [52.2, 776.0], [52.3, 776.0], [52.4, 776.0], [52.5, 777.0], [52.6, 777.0], [52.7, 777.0], [52.8, 777.0], [52.9, 777.0], [53.0, 777.0], [53.1, 777.0], [53.2, 777.0], [53.3, 777.0], [53.4, 777.0], [53.5, 777.0], [53.6, 778.0], [53.7, 778.0], [53.8, 778.0], [53.9, 778.0], [54.0, 778.0], [54.1, 779.0], [54.2, 779.0], [54.3, 779.0], [54.4, 779.0], [54.5, 779.0], [54.6, 779.0], [54.7, 779.0], [54.8, 780.0], [54.9, 780.0], [55.0, 780.0], [55.1, 780.0], [55.2, 780.0], [55.3, 780.0], [55.4, 780.0], [55.5, 780.0], [55.6, 781.0], [55.7, 781.0], [55.8, 782.0], [55.9, 782.0], [56.0, 782.0], [56.1, 782.0], [56.2, 783.0], [56.3, 783.0], [56.4, 783.0], [56.5, 783.0], [56.6, 783.0], [56.7, 783.0], [56.8, 783.0], [56.9, 784.0], [57.0, 784.0], [57.1, 784.0], [57.2, 784.0], [57.3, 784.0], [57.4, 784.0], [57.5, 784.0], [57.6, 784.0], [57.7, 784.0], [57.8, 784.0], [57.9, 784.0], [58.0, 785.0], [58.1, 785.0], [58.2, 785.0], [58.3, 785.0], [58.4, 785.0], [58.5, 785.0], [58.6, 785.0], [58.7, 785.0], [58.8, 785.0], [58.9, 785.0], [59.0, 785.0], [59.1, 785.0], [59.2, 785.0], [59.3, 786.0], [59.4, 786.0], [59.5, 786.0], [59.6, 786.0], [59.7, 786.0], [59.8, 787.0], [59.9, 787.0], [60.0, 787.0], [60.1, 787.0], [60.2, 787.0], [60.3, 787.0], [60.4, 787.0], [60.5, 787.0], [60.6, 788.0], [60.7, 788.0], [60.8, 788.0], [60.9, 788.0], [61.0, 788.0], [61.1, 789.0], [61.2, 789.0], [61.3, 789.0], [61.4, 789.0], [61.5, 790.0], [61.6, 790.0], [61.7, 790.0], [61.8, 790.0], [61.9, 790.0], [62.0, 790.0], [62.1, 790.0], [62.2, 790.0], [62.3, 791.0], [62.4, 791.0], [62.5, 791.0], [62.6, 792.0], [62.7, 792.0], [62.8, 792.0], [62.9, 792.0], [63.0, 792.0], [63.1, 792.0], [63.2, 792.0], [63.3, 793.0], [63.4, 793.0], [63.5, 793.0], [63.6, 793.0], [63.7, 793.0], [63.8, 793.0], [63.9, 793.0], [64.0, 793.0], [64.1, 793.0], [64.2, 794.0], [64.3, 794.0], [64.4, 794.0], [64.5, 794.0], [64.6, 794.0], [64.7, 794.0], [64.8, 794.0], [64.9, 794.0], [65.0, 794.0], [65.1, 794.0], [65.2, 795.0], [65.3, 795.0], [65.4, 795.0], [65.5, 795.0], [65.6, 795.0], [65.7, 795.0], [65.8, 795.0], [65.9, 795.0], [66.0, 795.0], [66.1, 796.0], [66.2, 796.0], [66.3, 796.0], [66.4, 796.0], [66.5, 797.0], [66.6, 797.0], [66.7, 797.0], [66.8, 797.0], [66.9, 797.0], [67.0, 797.0], [67.1, 797.0], [67.2, 797.0], [67.3, 797.0], [67.4, 797.0], [67.5, 797.0], [67.6, 797.0], [67.7, 797.0], [67.8, 798.0], [67.9, 798.0], [68.0, 798.0], [68.1, 798.0], [68.2, 798.0], [68.3, 799.0], [68.4, 799.0], [68.5, 799.0], [68.6, 799.0], [68.7, 799.0], [68.8, 799.0], [68.9, 799.0], [69.0, 799.0], [69.1, 799.0], [69.2, 800.0], [69.3, 800.0], [69.4, 800.0], [69.5, 800.0], [69.6, 800.0], [69.7, 800.0], [69.8, 800.0], [69.9, 800.0], [70.0, 801.0], [70.1, 801.0], [70.2, 801.0], [70.3, 801.0], [70.4, 801.0], [70.5, 801.0], [70.6, 801.0], [70.7, 802.0], [70.8, 802.0], [70.9, 802.0], [71.0, 802.0], [71.1, 802.0], [71.2, 802.0], [71.3, 802.0], [71.4, 803.0], [71.5, 803.0], [71.6, 803.0], [71.7, 803.0], [71.8, 803.0], [71.9, 804.0], [72.0, 804.0], [72.1, 804.0], [72.2, 804.0], [72.3, 804.0], [72.4, 804.0], [72.5, 804.0], [72.6, 804.0], [72.7, 804.0], [72.8, 804.0], [72.9, 804.0], [73.0, 804.0], [73.1, 804.0], [73.2, 805.0], [73.3, 805.0], [73.4, 805.0], [73.5, 805.0], [73.6, 805.0], [73.7, 805.0], [73.8, 805.0], [73.9, 805.0], [74.0, 805.0], [74.1, 805.0], [74.2, 805.0], [74.3, 805.0], [74.4, 805.0], [74.5, 806.0], [74.6, 806.0], [74.7, 806.0], [74.8, 806.0], [74.9, 806.0], [75.0, 806.0], [75.1, 806.0], [75.2, 806.0], [75.3, 807.0], [75.4, 807.0], [75.5, 807.0], [75.6, 807.0], [75.7, 807.0], [75.8, 807.0], [75.9, 807.0], [76.0, 807.0], [76.1, 808.0], [76.2, 808.0], [76.3, 809.0], [76.4, 809.0], [76.5, 809.0], [76.6, 809.0], [76.7, 809.0], [76.8, 809.0], [76.9, 809.0], [77.0, 810.0], [77.1, 810.0], [77.2, 811.0], [77.3, 811.0], [77.4, 811.0], [77.5, 812.0], [77.6, 812.0], [77.7, 812.0], [77.8, 812.0], [77.9, 812.0], [78.0, 812.0], [78.1, 813.0], [78.2, 813.0], [78.3, 813.0], [78.4, 813.0], [78.5, 813.0], [78.6, 813.0], [78.7, 814.0], [78.8, 814.0], [78.9, 814.0], [79.0, 814.0], [79.1, 814.0], [79.2, 814.0], [79.3, 815.0], [79.4, 815.0], [79.5, 816.0], [79.6, 816.0], [79.7, 816.0], [79.8, 816.0], [79.9, 817.0], [80.0, 817.0], [80.1, 817.0], [80.2, 817.0], [80.3, 818.0], [80.4, 818.0], [80.5, 818.0], [80.6, 818.0], [80.7, 818.0], [80.8, 818.0], [80.9, 818.0], [81.0, 818.0], [81.1, 818.0], [81.2, 819.0], [81.3, 819.0], [81.4, 820.0], [81.5, 820.0], [81.6, 820.0], [81.7, 820.0], [81.8, 821.0], [81.9, 821.0], [82.0, 821.0], [82.1, 821.0], [82.2, 822.0], [82.3, 822.0], [82.4, 822.0], [82.5, 822.0], [82.6, 823.0], [82.7, 823.0], [82.8, 823.0], [82.9, 824.0], [83.0, 825.0], [83.1, 825.0], [83.2, 825.0], [83.3, 826.0], [83.4, 826.0], [83.5, 827.0], [83.6, 827.0], [83.7, 828.0], [83.8, 829.0], [83.9, 830.0], [84.0, 830.0], [84.1, 830.0], [84.2, 830.0], [84.3, 830.0], [84.4, 830.0], [84.5, 830.0], [84.6, 831.0], [84.7, 831.0], [84.8, 831.0], [84.9, 831.0], [85.0, 831.0], [85.1, 832.0], [85.2, 832.0], [85.3, 833.0], [85.4, 833.0], [85.5, 833.0], [85.6, 834.0], [85.7, 834.0], [85.8, 834.0], [85.9, 836.0], [86.0, 837.0], [86.1, 837.0], [86.2, 837.0], [86.3, 838.0], [86.4, 838.0], [86.5, 839.0], [86.6, 840.0], [86.7, 840.0], [86.8, 840.0], [86.9, 840.0], [87.0, 841.0], [87.1, 842.0], [87.2, 842.0], [87.3, 843.0], [87.4, 843.0], [87.5, 843.0], [87.6, 843.0], [87.7, 843.0], [87.8, 845.0], [87.9, 845.0], [88.0, 847.0], [88.1, 847.0], [88.2, 848.0], [88.3, 848.0], [88.4, 849.0], [88.5, 849.0], [88.6, 849.0], [88.7, 850.0], [88.8, 851.0], [88.9, 851.0], [89.0, 853.0], [89.1, 853.0], [89.2, 855.0], [89.3, 857.0], [89.4, 857.0], [89.5, 858.0], [89.6, 859.0], [89.7, 859.0], [89.8, 859.0], [89.9, 859.0], [90.0, 861.0], [90.1, 862.0], [90.2, 863.0], [90.3, 863.0], [90.4, 864.0], [90.5, 864.0], [90.6, 864.0], [90.7, 865.0], [90.8, 865.0], [90.9, 869.0], [91.0, 871.0], [91.1, 871.0], [91.2, 872.0], [91.3, 876.0], [91.4, 878.0], [91.5, 878.0], [91.6, 882.0], [91.7, 885.0], [91.8, 885.0], [91.9, 886.0], [92.0, 887.0], [92.1, 888.0], [92.2, 889.0], [92.3, 889.0], [92.4, 892.0], [92.5, 895.0], [92.6, 895.0], [92.7, 895.0], [92.8, 896.0], [92.9, 896.0], [93.0, 896.0], [93.1, 899.0], [93.2, 904.0], [93.3, 906.0], [93.4, 907.0], [93.5, 907.0], [93.6, 909.0], [93.7, 911.0], [93.8, 918.0], [93.9, 919.0], [94.0, 922.0], [94.1, 923.0], [94.2, 925.0], [94.3, 930.0], [94.4, 930.0], [94.5, 931.0], [94.6, 932.0], [94.7, 932.0], [94.8, 933.0], [94.9, 933.0], [95.0, 933.0], [95.1, 933.0], [95.2, 933.0], [95.3, 933.0], [95.4, 934.0], [95.5, 934.0], [95.6, 935.0], [95.7, 936.0], [95.8, 936.0], [95.9, 937.0], [96.0, 939.0], [96.1, 940.0], [96.2, 943.0], [96.3, 944.0], [96.4, 951.0], [96.5, 951.0], [96.6, 954.0], [96.7, 956.0], [96.8, 957.0], [96.9, 962.0], [97.0, 963.0], [97.1, 966.0], [97.2, 970.0], [97.3, 970.0], [97.4, 972.0], [97.5, 972.0], [97.6, 976.0], [97.7, 976.0], [97.8, 976.0], [97.9, 979.0], [98.0, 980.0], [98.1, 984.0], [98.2, 984.0], [98.3, 984.0], [98.4, 988.0], [98.5, 994.0], [98.6, 1003.0], [98.7, 1005.0], [98.8, 1014.0], [98.9, 1015.0], [99.0, 1019.0], [99.1, 1039.0], [99.2, 1044.0], [99.3, 1053.0], [99.4, 1062.0], [99.5, 1062.0], [99.6, 1065.0], [99.7, 1092.0], [99.8, 1101.0], [99.9, 1267.0], [100.0, 1592.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 946.0, "series": [{"data": [[1100.0, 1.0], [600.0, 33.0], [1200.0, 1.0], [700.0, 946.0], [1500.0, 1.0], [800.0, 340.0], [900.0, 77.0], [1000.0, 17.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1415.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1415.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 29.133333333333344, "minX": 1.77999474E12, "maxY": 35.12517580872011, "series": [{"data": [[1.77999474E12, 29.133333333333344], [1.7799948E12, 35.12517580872011]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7799948E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 683.5714285714286, "minX": 2.0, "maxY": 1271.5, "series": [{"data": [[32.0, 801.8888888888889], [33.0, 799.5454545454545], [2.0, 760.5], [34.0, 798.0], [35.0, 811.8333333333334], [36.0, 789.4864104967189], [3.0, 1271.5], [4.0, 872.6666666666666], [5.0, 894.0000000000001], [6.0, 750.9], [7.0, 781.2222222222222], [8.0, 683.5714285714286], [9.0, 809.3], [10.0, 753.9090909090909], [11.0, 727.5454545454545], [12.0, 753.6], [13.0, 750.3846153846155], [14.0, 764.1999999999999], [15.0, 749.7499999999999], [16.0, 777.0833333333333], [17.0, 767.6999999999999], [18.0, 769.9999999999999], [19.0, 808.9090909090909], [20.0, 801.6666666666667], [21.0, 773.8571428571429], [22.0, 782.4999999999999], [23.0, 797.1666666666667], [24.0, 795.9090909090909], [25.0, 776.2727272727271], [26.0, 765.4285714285714], [27.0, 785.9166666666669], [28.0, 789.1], [29.0, 791.909090909091], [30.0, 785.909090909091], [31.0, 769.7647058823529]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[32.14194915254233, 787.7754237288133]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 36.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1880.0, "minX": 1.77999474E12, "maxY": 2737.35, "series": [{"data": [[1.77999474E12, 2714.25], [1.7799948E12, 2737.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77999474E12, 1880.0], [1.7799948E12, 1896.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7799948E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 784.1773049645388, "minX": 1.77999474E12, "maxY": 791.3431786216596, "series": [{"data": [[1.77999474E12, 784.1773049645388], [1.7799948E12, 791.3431786216596]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7799948E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 784.1347517730501, "minX": 1.77999474E12, "maxY": 791.3136427566819, "series": [{"data": [[1.77999474E12, 784.1347517730501], [1.7799948E12, 791.3136427566819]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7799948E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.035161744022503494, "minX": 1.77999474E12, "maxY": 0.045390070921985874, "series": [{"data": [[1.77999474E12, 0.045390070921985874], [1.7799948E12, 0.035161744022503494]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7799948E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 625.0, "minX": 1.77999474E12, "maxY": 1592.0, "series": [{"data": [[1.77999474E12, 1592.0], [1.7799948E12, 1267.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77999474E12, 625.0], [1.7799948E12, 713.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77999474E12, 857.4], [1.7799948E12, 864.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77999474E12, 1002.4599999999995], [1.7799948E12, 1046.04]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77999474E12, 773.0], [1.7799948E12, 774.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77999474E12, 929.3999999999999], [1.7799948E12, 936.4]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7799948E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 715.0, "minX": 3.0, "maxY": 892.5, "series": [{"data": [[8.0, 767.0], [16.0, 785.0], [9.0, 760.0], [10.0, 759.5], [11.0, 767.0], [3.0, 892.5], [6.0, 715.0], [12.0, 749.0], [13.0, 772.0], [14.0, 785.0], [15.0, 833.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 715.0, "minX": 3.0, "maxY": 892.5, "series": [{"data": [[8.0, 767.0], [16.0, 785.0], [9.0, 759.0], [10.0, 759.5], [11.0, 767.0], [3.0, 892.5], [6.0, 715.0], [12.0, 749.0], [13.0, 772.0], [14.0, 785.0], [15.0, 833.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.77999468E12, "maxY": 11.833333333333334, "series": [{"data": [[1.77999474E12, 11.833333333333334], [1.77999468E12, 0.03333333333333333], [1.7799948E12, 11.733333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7799948E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 11.75, "minX": 1.77999474E12, "maxY": 11.85, "series": [{"data": [[1.77999474E12, 11.75], [1.7799948E12, 11.85]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7799948E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 11.75, "minX": 1.77999474E12, "maxY": 11.85, "series": [{"data": [[1.77999474E12, 11.75], [1.7799948E12, 11.85]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7799948E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 11.75, "minX": 1.77999474E12, "maxY": 11.85, "series": [{"data": [[1.77999474E12, 11.75], [1.7799948E12, 11.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7799948E12, "title": "Total Transactions Per Second"}},
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

