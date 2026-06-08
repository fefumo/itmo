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
        data: {"result": {"minY": 622.0, "minX": 0.0, "maxY": 1367.0, "series": [{"data": [[0.0, 622.0], [0.1, 623.0], [0.2, 623.0], [0.3, 623.0], [0.4, 624.0], [0.5, 624.0], [0.6, 631.0], [0.7, 651.0], [0.8, 651.0], [0.9, 651.0], [1.0, 653.0], [1.1, 666.0], [1.2, 666.0], [1.3, 678.0], [1.4, 680.0], [1.5, 681.0], [1.6, 683.0], [1.7, 684.0], [1.8, 684.0], [1.9, 684.0], [2.0, 685.0], [2.1, 685.0], [2.2, 686.0], [2.3, 686.0], [2.4, 687.0], [2.5, 688.0], [2.6, 688.0], [2.7, 688.0], [2.8, 688.0], [2.9, 689.0], [3.0, 689.0], [3.1, 689.0], [3.2, 689.0], [3.3, 690.0], [3.4, 690.0], [3.5, 690.0], [3.6, 690.0], [3.7, 690.0], [3.8, 690.0], [3.9, 691.0], [4.0, 691.0], [4.1, 691.0], [4.2, 691.0], [4.3, 691.0], [4.4, 691.0], [4.5, 691.0], [4.6, 691.0], [4.7, 691.0], [4.8, 691.0], [4.9, 692.0], [5.0, 692.0], [5.1, 692.0], [5.2, 692.0], [5.3, 692.0], [5.4, 692.0], [5.5, 692.0], [5.6, 692.0], [5.7, 692.0], [5.8, 693.0], [5.9, 693.0], [6.0, 693.0], [6.1, 693.0], [6.2, 693.0], [6.3, 693.0], [6.4, 693.0], [6.5, 693.0], [6.6, 693.0], [6.7, 694.0], [6.8, 694.0], [6.9, 694.0], [7.0, 694.0], [7.1, 694.0], [7.2, 694.0], [7.3, 694.0], [7.4, 694.0], [7.5, 695.0], [7.6, 695.0], [7.7, 695.0], [7.8, 695.0], [7.9, 695.0], [8.0, 695.0], [8.1, 695.0], [8.2, 695.0], [8.3, 695.0], [8.4, 696.0], [8.5, 696.0], [8.6, 696.0], [8.7, 696.0], [8.8, 696.0], [8.9, 696.0], [9.0, 696.0], [9.1, 696.0], [9.2, 696.0], [9.3, 696.0], [9.4, 696.0], [9.5, 696.0], [9.6, 696.0], [9.7, 696.0], [9.8, 696.0], [9.9, 696.0], [10.0, 697.0], [10.1, 697.0], [10.2, 697.0], [10.3, 697.0], [10.4, 697.0], [10.5, 697.0], [10.6, 697.0], [10.7, 697.0], [10.8, 697.0], [10.9, 697.0], [11.0, 697.0], [11.1, 697.0], [11.2, 697.0], [11.3, 697.0], [11.4, 697.0], [11.5, 697.0], [11.6, 697.0], [11.7, 697.0], [11.8, 697.0], [11.9, 697.0], [12.0, 697.0], [12.1, 697.0], [12.2, 697.0], [12.3, 698.0], [12.4, 698.0], [12.5, 698.0], [12.6, 698.0], [12.7, 698.0], [12.8, 698.0], [12.9, 698.0], [13.0, 698.0], [13.1, 698.0], [13.2, 699.0], [13.3, 699.0], [13.4, 699.0], [13.5, 699.0], [13.6, 699.0], [13.7, 699.0], [13.8, 699.0], [13.9, 699.0], [14.0, 699.0], [14.1, 699.0], [14.2, 699.0], [14.3, 699.0], [14.4, 699.0], [14.5, 700.0], [14.6, 700.0], [14.7, 700.0], [14.8, 700.0], [14.9, 700.0], [15.0, 700.0], [15.1, 700.0], [15.2, 700.0], [15.3, 700.0], [15.4, 700.0], [15.5, 700.0], [15.6, 700.0], [15.7, 700.0], [15.8, 700.0], [15.9, 700.0], [16.0, 701.0], [16.1, 701.0], [16.2, 701.0], [16.3, 701.0], [16.4, 701.0], [16.5, 701.0], [16.6, 701.0], [16.7, 701.0], [16.8, 701.0], [16.9, 701.0], [17.0, 701.0], [17.1, 701.0], [17.2, 701.0], [17.3, 701.0], [17.4, 702.0], [17.5, 702.0], [17.6, 702.0], [17.7, 702.0], [17.8, 702.0], [17.9, 702.0], [18.0, 702.0], [18.1, 702.0], [18.2, 702.0], [18.3, 702.0], [18.4, 702.0], [18.5, 703.0], [18.6, 703.0], [18.7, 703.0], [18.8, 703.0], [18.9, 703.0], [19.0, 703.0], [19.1, 703.0], [19.2, 703.0], [19.3, 703.0], [19.4, 703.0], [19.5, 703.0], [19.6, 704.0], [19.7, 704.0], [19.8, 704.0], [19.9, 704.0], [20.0, 704.0], [20.1, 704.0], [20.2, 704.0], [20.3, 704.0], [20.4, 704.0], [20.5, 704.0], [20.6, 704.0], [20.7, 705.0], [20.8, 705.0], [20.9, 705.0], [21.0, 705.0], [21.1, 705.0], [21.2, 705.0], [21.3, 705.0], [21.4, 705.0], [21.5, 705.0], [21.6, 705.0], [21.7, 705.0], [21.8, 705.0], [21.9, 705.0], [22.0, 705.0], [22.1, 705.0], [22.2, 706.0], [22.3, 706.0], [22.4, 706.0], [22.5, 706.0], [22.6, 706.0], [22.7, 706.0], [22.8, 706.0], [22.9, 706.0], [23.0, 706.0], [23.1, 706.0], [23.2, 707.0], [23.3, 707.0], [23.4, 707.0], [23.5, 707.0], [23.6, 707.0], [23.7, 707.0], [23.8, 707.0], [23.9, 707.0], [24.0, 707.0], [24.1, 707.0], [24.2, 707.0], [24.3, 707.0], [24.4, 708.0], [24.5, 708.0], [24.6, 708.0], [24.7, 708.0], [24.8, 708.0], [24.9, 708.0], [25.0, 708.0], [25.1, 708.0], [25.2, 708.0], [25.3, 708.0], [25.4, 708.0], [25.5, 708.0], [25.6, 708.0], [25.7, 708.0], [25.8, 708.0], [25.9, 708.0], [26.0, 708.0], [26.1, 709.0], [26.2, 709.0], [26.3, 709.0], [26.4, 709.0], [26.5, 709.0], [26.6, 709.0], [26.7, 709.0], [26.8, 710.0], [26.9, 710.0], [27.0, 710.0], [27.1, 710.0], [27.2, 710.0], [27.3, 710.0], [27.4, 710.0], [27.5, 710.0], [27.6, 710.0], [27.7, 710.0], [27.8, 711.0], [27.9, 711.0], [28.0, 711.0], [28.1, 711.0], [28.2, 711.0], [28.3, 711.0], [28.4, 711.0], [28.5, 711.0], [28.6, 711.0], [28.7, 711.0], [28.8, 711.0], [28.9, 711.0], [29.0, 711.0], [29.1, 712.0], [29.2, 712.0], [29.3, 712.0], [29.4, 712.0], [29.5, 712.0], [29.6, 712.0], [29.7, 712.0], [29.8, 712.0], [29.9, 712.0], [30.0, 713.0], [30.1, 713.0], [30.2, 713.0], [30.3, 713.0], [30.4, 713.0], [30.5, 714.0], [30.6, 714.0], [30.7, 714.0], [30.8, 714.0], [30.9, 714.0], [31.0, 715.0], [31.1, 715.0], [31.2, 715.0], [31.3, 715.0], [31.4, 715.0], [31.5, 715.0], [31.6, 715.0], [31.7, 715.0], [31.8, 715.0], [31.9, 715.0], [32.0, 716.0], [32.1, 716.0], [32.2, 716.0], [32.3, 716.0], [32.4, 716.0], [32.5, 716.0], [32.6, 716.0], [32.7, 716.0], [32.8, 717.0], [32.9, 717.0], [33.0, 717.0], [33.1, 717.0], [33.2, 717.0], [33.3, 717.0], [33.4, 717.0], [33.5, 717.0], [33.6, 718.0], [33.7, 718.0], [33.8, 718.0], [33.9, 718.0], [34.0, 718.0], [34.1, 718.0], [34.2, 718.0], [34.3, 719.0], [34.4, 719.0], [34.5, 719.0], [34.6, 719.0], [34.7, 719.0], [34.8, 719.0], [34.9, 719.0], [35.0, 719.0], [35.1, 719.0], [35.2, 719.0], [35.3, 719.0], [35.4, 720.0], [35.5, 720.0], [35.6, 720.0], [35.7, 720.0], [35.8, 720.0], [35.9, 720.0], [36.0, 720.0], [36.1, 720.0], [36.2, 720.0], [36.3, 720.0], [36.4, 720.0], [36.5, 720.0], [36.6, 720.0], [36.7, 720.0], [36.8, 720.0], [36.9, 720.0], [37.0, 721.0], [37.1, 721.0], [37.2, 721.0], [37.3, 721.0], [37.4, 721.0], [37.5, 721.0], [37.6, 721.0], [37.7, 721.0], [37.8, 721.0], [37.9, 721.0], [38.0, 721.0], [38.1, 722.0], [38.2, 722.0], [38.3, 722.0], [38.4, 722.0], [38.5, 722.0], [38.6, 723.0], [38.7, 723.0], [38.8, 723.0], [38.9, 723.0], [39.0, 723.0], [39.1, 723.0], [39.2, 724.0], [39.3, 724.0], [39.4, 724.0], [39.5, 724.0], [39.6, 724.0], [39.7, 724.0], [39.8, 725.0], [39.9, 725.0], [40.0, 725.0], [40.1, 725.0], [40.2, 726.0], [40.3, 726.0], [40.4, 726.0], [40.5, 726.0], [40.6, 726.0], [40.7, 727.0], [40.8, 727.0], [40.9, 727.0], [41.0, 727.0], [41.1, 727.0], [41.2, 728.0], [41.3, 729.0], [41.4, 729.0], [41.5, 729.0], [41.6, 730.0], [41.7, 730.0], [41.8, 730.0], [41.9, 731.0], [42.0, 731.0], [42.1, 731.0], [42.2, 732.0], [42.3, 732.0], [42.4, 732.0], [42.5, 732.0], [42.6, 732.0], [42.7, 732.0], [42.8, 732.0], [42.9, 732.0], [43.0, 732.0], [43.1, 732.0], [43.2, 732.0], [43.3, 733.0], [43.4, 733.0], [43.5, 733.0], [43.6, 733.0], [43.7, 733.0], [43.8, 733.0], [43.9, 733.0], [44.0, 733.0], [44.1, 733.0], [44.2, 733.0], [44.3, 733.0], [44.4, 734.0], [44.5, 734.0], [44.6, 734.0], [44.7, 734.0], [44.8, 734.0], [44.9, 734.0], [45.0, 734.0], [45.1, 734.0], [45.2, 734.0], [45.3, 734.0], [45.4, 734.0], [45.5, 734.0], [45.6, 734.0], [45.7, 735.0], [45.8, 735.0], [45.9, 735.0], [46.0, 735.0], [46.1, 735.0], [46.2, 735.0], [46.3, 735.0], [46.4, 735.0], [46.5, 735.0], [46.6, 735.0], [46.7, 735.0], [46.8, 736.0], [46.9, 736.0], [47.0, 736.0], [47.1, 736.0], [47.2, 736.0], [47.3, 736.0], [47.4, 736.0], [47.5, 736.0], [47.6, 736.0], [47.7, 736.0], [47.8, 737.0], [47.9, 737.0], [48.0, 737.0], [48.1, 737.0], [48.2, 737.0], [48.3, 737.0], [48.4, 737.0], [48.5, 737.0], [48.6, 738.0], [48.7, 738.0], [48.8, 738.0], [48.9, 738.0], [49.0, 738.0], [49.1, 738.0], [49.2, 738.0], [49.3, 738.0], [49.4, 739.0], [49.5, 739.0], [49.6, 739.0], [49.7, 739.0], [49.8, 739.0], [49.9, 739.0], [50.0, 739.0], [50.1, 740.0], [50.2, 740.0], [50.3, 740.0], [50.4, 740.0], [50.5, 740.0], [50.6, 740.0], [50.7, 740.0], [50.8, 740.0], [50.9, 741.0], [51.0, 741.0], [51.1, 741.0], [51.2, 741.0], [51.3, 741.0], [51.4, 741.0], [51.5, 741.0], [51.6, 741.0], [51.7, 742.0], [51.8, 742.0], [51.9, 742.0], [52.0, 742.0], [52.1, 742.0], [52.2, 742.0], [52.3, 742.0], [52.4, 742.0], [52.5, 743.0], [52.6, 743.0], [52.7, 743.0], [52.8, 743.0], [52.9, 743.0], [53.0, 743.0], [53.1, 743.0], [53.2, 743.0], [53.3, 743.0], [53.4, 744.0], [53.5, 744.0], [53.6, 744.0], [53.7, 745.0], [53.8, 745.0], [53.9, 745.0], [54.0, 745.0], [54.1, 745.0], [54.2, 745.0], [54.3, 745.0], [54.4, 747.0], [54.5, 747.0], [54.6, 747.0], [54.7, 747.0], [54.8, 747.0], [54.9, 749.0], [55.0, 750.0], [55.1, 750.0], [55.2, 750.0], [55.3, 750.0], [55.4, 750.0], [55.5, 750.0], [55.6, 750.0], [55.7, 750.0], [55.8, 751.0], [55.9, 751.0], [56.0, 751.0], [56.1, 751.0], [56.2, 751.0], [56.3, 751.0], [56.4, 752.0], [56.5, 752.0], [56.6, 752.0], [56.7, 752.0], [56.8, 752.0], [56.9, 752.0], [57.0, 753.0], [57.1, 753.0], [57.2, 753.0], [57.3, 753.0], [57.4, 753.0], [57.5, 754.0], [57.6, 754.0], [57.7, 754.0], [57.8, 754.0], [57.9, 755.0], [58.0, 755.0], [58.1, 755.0], [58.2, 755.0], [58.3, 755.0], [58.4, 755.0], [58.5, 755.0], [58.6, 755.0], [58.7, 756.0], [58.8, 756.0], [58.9, 756.0], [59.0, 756.0], [59.1, 757.0], [59.2, 757.0], [59.3, 757.0], [59.4, 758.0], [59.5, 758.0], [59.6, 758.0], [59.7, 758.0], [59.8, 759.0], [59.9, 759.0], [60.0, 759.0], [60.1, 760.0], [60.2, 760.0], [60.3, 760.0], [60.4, 760.0], [60.5, 761.0], [60.6, 761.0], [60.7, 761.0], [60.8, 761.0], [60.9, 761.0], [61.0, 762.0], [61.1, 762.0], [61.2, 762.0], [61.3, 762.0], [61.4, 762.0], [61.5, 763.0], [61.6, 763.0], [61.7, 763.0], [61.8, 764.0], [61.9, 764.0], [62.0, 764.0], [62.1, 764.0], [62.2, 764.0], [62.3, 765.0], [62.4, 765.0], [62.5, 765.0], [62.6, 766.0], [62.7, 766.0], [62.8, 766.0], [62.9, 766.0], [63.0, 766.0], [63.1, 766.0], [63.2, 767.0], [63.3, 767.0], [63.4, 767.0], [63.5, 767.0], [63.6, 768.0], [63.7, 768.0], [63.8, 768.0], [63.9, 768.0], [64.0, 769.0], [64.1, 771.0], [64.2, 771.0], [64.3, 771.0], [64.4, 772.0], [64.5, 772.0], [64.6, 773.0], [64.7, 773.0], [64.8, 774.0], [64.9, 774.0], [65.0, 774.0], [65.1, 775.0], [65.2, 775.0], [65.3, 776.0], [65.4, 777.0], [65.5, 777.0], [65.6, 777.0], [65.7, 777.0], [65.8, 777.0], [65.9, 777.0], [66.0, 777.0], [66.1, 777.0], [66.2, 777.0], [66.3, 778.0], [66.4, 778.0], [66.5, 778.0], [66.6, 778.0], [66.7, 779.0], [66.8, 779.0], [66.9, 779.0], [67.0, 779.0], [67.1, 780.0], [67.2, 780.0], [67.3, 780.0], [67.4, 780.0], [67.5, 781.0], [67.6, 781.0], [67.7, 782.0], [67.8, 782.0], [67.9, 782.0], [68.0, 783.0], [68.1, 783.0], [68.2, 783.0], [68.3, 784.0], [68.4, 784.0], [68.5, 785.0], [68.6, 785.0], [68.7, 786.0], [68.8, 786.0], [68.9, 786.0], [69.0, 786.0], [69.1, 786.0], [69.2, 786.0], [69.3, 786.0], [69.4, 787.0], [69.5, 787.0], [69.6, 787.0], [69.7, 788.0], [69.8, 788.0], [69.9, 788.0], [70.0, 788.0], [70.1, 788.0], [70.2, 788.0], [70.3, 789.0], [70.4, 789.0], [70.5, 789.0], [70.6, 790.0], [70.7, 790.0], [70.8, 790.0], [70.9, 791.0], [71.0, 791.0], [71.1, 791.0], [71.2, 791.0], [71.3, 791.0], [71.4, 792.0], [71.5, 792.0], [71.6, 792.0], [71.7, 793.0], [71.8, 793.0], [71.9, 793.0], [72.0, 793.0], [72.1, 794.0], [72.2, 794.0], [72.3, 795.0], [72.4, 795.0], [72.5, 795.0], [72.6, 795.0], [72.7, 795.0], [72.8, 795.0], [72.9, 795.0], [73.0, 796.0], [73.1, 796.0], [73.2, 796.0], [73.3, 797.0], [73.4, 797.0], [73.5, 797.0], [73.6, 798.0], [73.7, 798.0], [73.8, 799.0], [73.9, 799.0], [74.0, 799.0], [74.1, 799.0], [74.2, 799.0], [74.3, 799.0], [74.4, 799.0], [74.5, 799.0], [74.6, 800.0], [74.7, 800.0], [74.8, 800.0], [74.9, 800.0], [75.0, 801.0], [75.1, 801.0], [75.2, 801.0], [75.3, 801.0], [75.4, 802.0], [75.5, 802.0], [75.6, 803.0], [75.7, 803.0], [75.8, 803.0], [75.9, 803.0], [76.0, 803.0], [76.1, 804.0], [76.2, 804.0], [76.3, 804.0], [76.4, 804.0], [76.5, 805.0], [76.6, 805.0], [76.7, 805.0], [76.8, 805.0], [76.9, 805.0], [77.0, 805.0], [77.1, 806.0], [77.2, 806.0], [77.3, 807.0], [77.4, 807.0], [77.5, 807.0], [77.6, 807.0], [77.7, 807.0], [77.8, 807.0], [77.9, 808.0], [78.0, 809.0], [78.1, 809.0], [78.2, 809.0], [78.3, 810.0], [78.4, 811.0], [78.5, 811.0], [78.6, 812.0], [78.7, 813.0], [78.8, 813.0], [78.9, 814.0], [79.0, 814.0], [79.1, 814.0], [79.2, 815.0], [79.3, 815.0], [79.4, 815.0], [79.5, 815.0], [79.6, 816.0], [79.7, 816.0], [79.8, 816.0], [79.9, 817.0], [80.0, 817.0], [80.1, 817.0], [80.2, 817.0], [80.3, 817.0], [80.4, 817.0], [80.5, 818.0], [80.6, 819.0], [80.7, 819.0], [80.8, 819.0], [80.9, 819.0], [81.0, 819.0], [81.1, 820.0], [81.2, 820.0], [81.3, 821.0], [81.4, 823.0], [81.5, 823.0], [81.6, 824.0], [81.7, 824.0], [81.8, 824.0], [81.9, 825.0], [82.0, 826.0], [82.1, 826.0], [82.2, 828.0], [82.3, 828.0], [82.4, 828.0], [82.5, 828.0], [82.6, 829.0], [82.7, 830.0], [82.8, 831.0], [82.9, 831.0], [83.0, 832.0], [83.1, 833.0], [83.2, 833.0], [83.3, 833.0], [83.4, 833.0], [83.5, 833.0], [83.6, 834.0], [83.7, 834.0], [83.8, 835.0], [83.9, 835.0], [84.0, 836.0], [84.1, 836.0], [84.2, 836.0], [84.3, 837.0], [84.4, 837.0], [84.5, 838.0], [84.6, 839.0], [84.7, 840.0], [84.8, 840.0], [84.9, 842.0], [85.0, 842.0], [85.1, 846.0], [85.2, 846.0], [85.3, 849.0], [85.4, 850.0], [85.5, 850.0], [85.6, 857.0], [85.7, 860.0], [85.8, 863.0], [85.9, 864.0], [86.0, 866.0], [86.1, 867.0], [86.2, 867.0], [86.3, 868.0], [86.4, 868.0], [86.5, 872.0], [86.6, 873.0], [86.7, 873.0], [86.8, 875.0], [86.9, 877.0], [87.0, 882.0], [87.1, 883.0], [87.2, 888.0], [87.3, 891.0], [87.4, 891.0], [87.5, 892.0], [87.6, 893.0], [87.7, 893.0], [87.8, 894.0], [87.9, 894.0], [88.0, 894.0], [88.1, 894.0], [88.2, 895.0], [88.3, 896.0], [88.4, 896.0], [88.5, 898.0], [88.6, 901.0], [88.7, 901.0], [88.8, 901.0], [88.9, 901.0], [89.0, 902.0], [89.1, 902.0], [89.2, 902.0], [89.3, 902.0], [89.4, 903.0], [89.5, 903.0], [89.6, 903.0], [89.7, 905.0], [89.8, 905.0], [89.9, 907.0], [90.0, 908.0], [90.1, 909.0], [90.2, 910.0], [90.3, 911.0], [90.4, 911.0], [90.5, 911.0], [90.6, 911.0], [90.7, 911.0], [90.8, 912.0], [90.9, 913.0], [91.0, 913.0], [91.1, 915.0], [91.2, 915.0], [91.3, 915.0], [91.4, 918.0], [91.5, 918.0], [91.6, 919.0], [91.7, 920.0], [91.8, 920.0], [91.9, 920.0], [92.0, 921.0], [92.1, 924.0], [92.2, 925.0], [92.3, 925.0], [92.4, 925.0], [92.5, 925.0], [92.6, 926.0], [92.7, 926.0], [92.8, 928.0], [92.9, 929.0], [93.0, 929.0], [93.1, 931.0], [93.2, 931.0], [93.3, 932.0], [93.4, 932.0], [93.5, 932.0], [93.6, 933.0], [93.7, 933.0], [93.8, 934.0], [93.9, 935.0], [94.0, 935.0], [94.1, 940.0], [94.2, 944.0], [94.3, 944.0], [94.4, 944.0], [94.5, 947.0], [94.6, 948.0], [94.7, 949.0], [94.8, 950.0], [94.9, 955.0], [95.0, 957.0], [95.1, 958.0], [95.2, 962.0], [95.3, 966.0], [95.4, 968.0], [95.5, 973.0], [95.6, 974.0], [95.7, 985.0], [95.8, 990.0], [95.9, 1001.0], [96.0, 1001.0], [96.1, 1003.0], [96.2, 1004.0], [96.3, 1004.0], [96.4, 1005.0], [96.5, 1005.0], [96.6, 1010.0], [96.7, 1010.0], [96.8, 1011.0], [96.9, 1012.0], [97.0, 1013.0], [97.1, 1013.0], [97.2, 1014.0], [97.3, 1015.0], [97.4, 1016.0], [97.5, 1016.0], [97.6, 1016.0], [97.7, 1017.0], [97.8, 1022.0], [97.9, 1041.0], [98.0, 1042.0], [98.1, 1042.0], [98.2, 1049.0], [98.3, 1067.0], [98.4, 1082.0], [98.5, 1104.0], [98.6, 1107.0], [98.7, 1108.0], [98.8, 1108.0], [98.9, 1108.0], [99.0, 1109.0], [99.1, 1113.0], [99.2, 1116.0], [99.3, 1119.0], [99.4, 1122.0], [99.5, 1142.0], [99.6, 1142.0], [99.7, 1146.0], [99.8, 1149.0], [99.9, 1155.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 712.0, "series": [{"data": [[1100.0, 17.0], [600.0, 171.0], [1300.0, 1.0], [700.0, 712.0], [800.0, 165.0], [900.0, 87.0], [1000.0, 31.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1184.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1184.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1184.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 6.968749999999997, "minX": 1.77999444E12, "maxY": 29.164682539682538, "series": [{"data": [[1.77999444E12, 6.968749999999997], [1.77999456E12, 29.164682539682538], [1.7799945E12, 26.80357142857145]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999456E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 688.7272727272727, "minX": 2.0, "maxY": 996.0, "series": [{"data": [[2.0, 849.3333333333334], [3.0, 902.0], [4.0, 701.5], [5.0, 833.8888888888889], [6.0, 748.0], [7.0, 688.7272727272727], [8.0, 749.8333333333333], [9.0, 758.1111111111111], [10.0, 841.8333333333333], [11.0, 814.4166666666666], [12.0, 974.8888888888889], [13.0, 785.6428571428571], [14.0, 717.6666666666666], [15.0, 775.7142857142857], [16.0, 764.7999999999998], [17.0, 785.25], [18.0, 750.2666666666667], [19.0, 735.6666666666666], [20.0, 848.9999999999999], [21.0, 742.6428571428572], [22.0, 840.076923076923], [23.0, 752.5], [24.0, 743.8571428571428], [25.0, 937.3571428571429], [26.0, 738.7692307692307], [27.0, 996.0], [28.0, 811.4545454545455], [29.0, 865.25], [30.0, 760.462921348314]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[26.736486486486495, 771.1739864864855]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 30.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 170.66666666666666, "minX": 1.77999444E12, "maxY": 2371.6, "series": [{"data": [[1.77999444E12, 246.4], [1.77999456E12, 1940.4], [1.7799945E12, 2371.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77999444E12, 170.66666666666666], [1.77999456E12, 1344.0], [1.7799945E12, 1642.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999456E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 750.9374999999999, "minX": 1.77999444E12, "maxY": 782.5762987012986, "series": [{"data": [[1.77999444E12, 750.9374999999999], [1.77999456E12, 759.8075396825406], [1.7799945E12, 782.5762987012986]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999456E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 750.828125, "minX": 1.77999444E12, "maxY": 782.5032467532469, "series": [{"data": [[1.77999444E12, 750.828125], [1.77999456E12, 759.7777777777777], [1.7799945E12, 782.5032467532469]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999456E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.039682539682539715, "minX": 1.77999444E12, "maxY": 0.6250000000000001, "series": [{"data": [[1.77999444E12, 0.6250000000000001], [1.77999456E12, 0.039682539682539715], [1.7799945E12, 0.04545454545454544]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999456E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 622.0, "minX": 1.77999444E12, "maxY": 1367.0, "series": [{"data": [[1.77999444E12, 1109.0], [1.77999456E12, 1146.0], [1.7799945E12, 1367.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77999444E12, 622.0], [1.77999456E12, 683.0], [1.7799945E12, 664.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77999444E12, 885.5], [1.77999456E12, 886.5], [1.7799945E12, 929.6000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77999444E12, 1109.0], [1.77999456E12, 1081.2499999999998], [1.7799945E12, 1115.4900000000002]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77999444E12, 735.0], [1.77999456E12, 734.5], [1.7799945E12, 750.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77999444E12, 961.0], [1.77999456E12, 912.0], [1.7799945E12, 1004.15]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999456E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 631.0, "minX": 1.0, "maxY": 1108.0, "series": [{"data": [[8.0, 724.0], [9.0, 798.5], [10.0, 770.5], [11.0, 740.0], [3.0, 631.0], [12.0, 743.0], [13.0, 750.0], [14.0, 737.5], [15.0, 793.0], [1.0, 1108.0], [4.0, 938.5], [5.0, 716.0], [6.0, 713.5], [7.0, 717.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 631.0, "minX": 1.0, "maxY": 1103.0, "series": [{"data": [[8.0, 724.0], [9.0, 798.5], [10.0, 770.5], [11.0, 740.0], [3.0, 631.0], [12.0, 743.0], [13.0, 750.0], [14.0, 737.5], [15.0, 793.0], [1.0, 1103.0], [4.0, 938.5], [5.0, 716.0], [6.0, 713.5], [7.0, 717.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.25, "minX": 1.77999444E12, "maxY": 10.25, "series": [{"data": [[1.77999444E12, 1.25], [1.77999456E12, 8.233333333333333], [1.7799945E12, 10.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999456E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.0666666666666667, "minX": 1.77999444E12, "maxY": 10.266666666666667, "series": [{"data": [[1.77999444E12, 1.0666666666666667], [1.77999456E12, 8.4], [1.7799945E12, 10.266666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999456E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.0666666666666667, "minX": 1.77999444E12, "maxY": 10.266666666666667, "series": [{"data": [[1.77999444E12, 1.0666666666666667], [1.77999456E12, 8.4], [1.7799945E12, 10.266666666666667]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999456E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.0666666666666667, "minX": 1.77999444E12, "maxY": 10.266666666666667, "series": [{"data": [[1.77999444E12, 1.0666666666666667], [1.77999456E12, 8.4], [1.7799945E12, 10.266666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999456E12, "title": "Total Transactions Per Second"}},
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

