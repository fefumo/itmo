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
        data: {"result": {"minY": 616.0, "minX": 0.0, "maxY": 1593.0, "series": [{"data": [[0.0, 616.0], [0.1, 616.0], [0.2, 616.0], [0.3, 620.0], [0.4, 620.0], [0.5, 622.0], [0.6, 622.0], [0.7, 622.0], [0.8, 639.0], [0.9, 640.0], [1.0, 641.0], [1.1, 641.0], [1.2, 641.0], [1.3, 641.0], [1.4, 641.0], [1.5, 641.0], [1.6, 642.0], [1.7, 642.0], [1.8, 642.0], [1.9, 642.0], [2.0, 642.0], [2.1, 642.0], [2.2, 643.0], [2.3, 643.0], [2.4, 643.0], [2.5, 643.0], [2.6, 643.0], [2.7, 643.0], [2.8, 643.0], [2.9, 643.0], [3.0, 644.0], [3.1, 644.0], [3.2, 644.0], [3.3, 644.0], [3.4, 644.0], [3.5, 644.0], [3.6, 644.0], [3.7, 644.0], [3.8, 644.0], [3.9, 644.0], [4.0, 645.0], [4.1, 645.0], [4.2, 645.0], [4.3, 645.0], [4.4, 645.0], [4.5, 645.0], [4.6, 645.0], [4.7, 645.0], [4.8, 645.0], [4.9, 645.0], [5.0, 645.0], [5.1, 645.0], [5.2, 645.0], [5.3, 645.0], [5.4, 645.0], [5.5, 645.0], [5.6, 645.0], [5.7, 646.0], [5.8, 646.0], [5.9, 646.0], [6.0, 646.0], [6.1, 646.0], [6.2, 646.0], [6.3, 646.0], [6.4, 646.0], [6.5, 646.0], [6.6, 646.0], [6.7, 646.0], [6.8, 647.0], [6.9, 647.0], [7.0, 647.0], [7.1, 647.0], [7.2, 647.0], [7.3, 647.0], [7.4, 647.0], [7.5, 647.0], [7.6, 647.0], [7.7, 647.0], [7.8, 647.0], [7.9, 647.0], [8.0, 647.0], [8.1, 647.0], [8.2, 648.0], [8.3, 648.0], [8.4, 648.0], [8.5, 648.0], [8.6, 648.0], [8.7, 648.0], [8.8, 648.0], [8.9, 648.0], [9.0, 648.0], [9.1, 648.0], [9.2, 648.0], [9.3, 648.0], [9.4, 648.0], [9.5, 648.0], [9.6, 648.0], [9.7, 648.0], [9.8, 648.0], [9.9, 648.0], [10.0, 648.0], [10.1, 649.0], [10.2, 649.0], [10.3, 649.0], [10.4, 649.0], [10.5, 649.0], [10.6, 649.0], [10.7, 649.0], [10.8, 649.0], [10.9, 649.0], [11.0, 649.0], [11.1, 649.0], [11.2, 649.0], [11.3, 649.0], [11.4, 649.0], [11.5, 649.0], [11.6, 649.0], [11.7, 649.0], [11.8, 649.0], [11.9, 649.0], [12.0, 650.0], [12.1, 650.0], [12.2, 650.0], [12.3, 650.0], [12.4, 650.0], [12.5, 650.0], [12.6, 650.0], [12.7, 650.0], [12.8, 650.0], [12.9, 651.0], [13.0, 651.0], [13.1, 651.0], [13.2, 651.0], [13.3, 651.0], [13.4, 651.0], [13.5, 651.0], [13.6, 651.0], [13.7, 651.0], [13.8, 651.0], [13.9, 651.0], [14.0, 652.0], [14.1, 652.0], [14.2, 652.0], [14.3, 652.0], [14.4, 652.0], [14.5, 652.0], [14.6, 652.0], [14.7, 652.0], [14.8, 652.0], [14.9, 652.0], [15.0, 652.0], [15.1, 652.0], [15.2, 652.0], [15.3, 653.0], [15.4, 654.0], [15.5, 654.0], [15.6, 654.0], [15.7, 654.0], [15.8, 654.0], [15.9, 654.0], [16.0, 654.0], [16.1, 654.0], [16.2, 654.0], [16.3, 654.0], [16.4, 655.0], [16.5, 655.0], [16.6, 655.0], [16.7, 655.0], [16.8, 655.0], [16.9, 655.0], [17.0, 656.0], [17.1, 656.0], [17.2, 656.0], [17.3, 656.0], [17.4, 656.0], [17.5, 656.0], [17.6, 656.0], [17.7, 656.0], [17.8, 656.0], [17.9, 656.0], [18.0, 656.0], [18.1, 656.0], [18.2, 656.0], [18.3, 656.0], [18.4, 657.0], [18.5, 657.0], [18.6, 657.0], [18.7, 657.0], [18.8, 657.0], [18.9, 657.0], [19.0, 657.0], [19.1, 657.0], [19.2, 657.0], [19.3, 657.0], [19.4, 657.0], [19.5, 657.0], [19.6, 657.0], [19.7, 657.0], [19.8, 657.0], [19.9, 658.0], [20.0, 658.0], [20.1, 658.0], [20.2, 658.0], [20.3, 658.0], [20.4, 658.0], [20.5, 658.0], [20.6, 658.0], [20.7, 658.0], [20.8, 659.0], [20.9, 659.0], [21.0, 659.0], [21.1, 659.0], [21.2, 659.0], [21.3, 660.0], [21.4, 660.0], [21.5, 660.0], [21.6, 660.0], [21.7, 660.0], [21.8, 660.0], [21.9, 660.0], [22.0, 660.0], [22.1, 660.0], [22.2, 661.0], [22.3, 661.0], [22.4, 661.0], [22.5, 662.0], [22.6, 662.0], [22.7, 662.0], [22.8, 662.0], [22.9, 663.0], [23.0, 664.0], [23.1, 664.0], [23.2, 664.0], [23.3, 664.0], [23.4, 664.0], [23.5, 664.0], [23.6, 664.0], [23.7, 664.0], [23.8, 664.0], [23.9, 664.0], [24.0, 665.0], [24.1, 665.0], [24.2, 665.0], [24.3, 665.0], [24.4, 665.0], [24.5, 665.0], [24.6, 665.0], [24.7, 665.0], [24.8, 665.0], [24.9, 666.0], [25.0, 666.0], [25.1, 666.0], [25.2, 666.0], [25.3, 666.0], [25.4, 667.0], [25.5, 667.0], [25.6, 667.0], [25.7, 667.0], [25.8, 667.0], [25.9, 667.0], [26.0, 667.0], [26.1, 667.0], [26.2, 667.0], [26.3, 667.0], [26.4, 668.0], [26.5, 668.0], [26.6, 668.0], [26.7, 668.0], [26.8, 668.0], [26.9, 668.0], [27.0, 668.0], [27.1, 668.0], [27.2, 668.0], [27.3, 669.0], [27.4, 669.0], [27.5, 669.0], [27.6, 669.0], [27.7, 669.0], [27.8, 669.0], [27.9, 669.0], [28.0, 670.0], [28.1, 670.0], [28.2, 670.0], [28.3, 670.0], [28.4, 670.0], [28.5, 670.0], [28.6, 670.0], [28.7, 670.0], [28.8, 671.0], [28.9, 671.0], [29.0, 671.0], [29.1, 671.0], [29.2, 672.0], [29.3, 672.0], [29.4, 673.0], [29.5, 673.0], [29.6, 673.0], [29.7, 673.0], [29.8, 673.0], [29.9, 673.0], [30.0, 673.0], [30.1, 673.0], [30.2, 673.0], [30.3, 673.0], [30.4, 674.0], [30.5, 674.0], [30.6, 674.0], [30.7, 675.0], [30.8, 675.0], [30.9, 675.0], [31.0, 675.0], [31.1, 675.0], [31.2, 675.0], [31.3, 675.0], [31.4, 675.0], [31.5, 676.0], [31.6, 676.0], [31.7, 676.0], [31.8, 676.0], [31.9, 677.0], [32.0, 677.0], [32.1, 677.0], [32.2, 677.0], [32.3, 677.0], [32.4, 677.0], [32.5, 677.0], [32.6, 678.0], [32.7, 678.0], [32.8, 678.0], [32.9, 678.0], [33.0, 678.0], [33.1, 678.0], [33.2, 679.0], [33.3, 679.0], [33.4, 679.0], [33.5, 679.0], [33.6, 680.0], [33.7, 680.0], [33.8, 680.0], [33.9, 680.0], [34.0, 680.0], [34.1, 680.0], [34.2, 680.0], [34.3, 680.0], [34.4, 680.0], [34.5, 681.0], [34.6, 681.0], [34.7, 682.0], [34.8, 682.0], [34.9, 682.0], [35.0, 682.0], [35.1, 682.0], [35.2, 682.0], [35.3, 683.0], [35.4, 683.0], [35.5, 683.0], [35.6, 684.0], [35.7, 686.0], [35.8, 686.0], [35.9, 686.0], [36.0, 687.0], [36.1, 687.0], [36.2, 687.0], [36.3, 687.0], [36.4, 687.0], [36.5, 687.0], [36.6, 688.0], [36.7, 688.0], [36.8, 688.0], [36.9, 688.0], [37.0, 688.0], [37.1, 689.0], [37.2, 689.0], [37.3, 689.0], [37.4, 689.0], [37.5, 689.0], [37.6, 689.0], [37.7, 690.0], [37.8, 690.0], [37.9, 690.0], [38.0, 690.0], [38.1, 690.0], [38.2, 690.0], [38.3, 690.0], [38.4, 690.0], [38.5, 690.0], [38.6, 691.0], [38.7, 691.0], [38.8, 691.0], [38.9, 691.0], [39.0, 691.0], [39.1, 691.0], [39.2, 691.0], [39.3, 691.0], [39.4, 691.0], [39.5, 691.0], [39.6, 691.0], [39.7, 692.0], [39.8, 692.0], [39.9, 692.0], [40.0, 692.0], [40.1, 692.0], [40.2, 693.0], [40.3, 693.0], [40.4, 693.0], [40.5, 694.0], [40.6, 694.0], [40.7, 694.0], [40.8, 694.0], [40.9, 694.0], [41.0, 694.0], [41.1, 695.0], [41.2, 695.0], [41.3, 695.0], [41.4, 696.0], [41.5, 696.0], [41.6, 696.0], [41.7, 696.0], [41.8, 696.0], [41.9, 696.0], [42.0, 696.0], [42.1, 696.0], [42.2, 697.0], [42.3, 697.0], [42.4, 697.0], [42.5, 697.0], [42.6, 697.0], [42.7, 697.0], [42.8, 698.0], [42.9, 698.0], [43.0, 698.0], [43.1, 698.0], [43.2, 699.0], [43.3, 699.0], [43.4, 699.0], [43.5, 699.0], [43.6, 699.0], [43.7, 699.0], [43.8, 699.0], [43.9, 699.0], [44.0, 699.0], [44.1, 700.0], [44.2, 700.0], [44.3, 700.0], [44.4, 700.0], [44.5, 700.0], [44.6, 701.0], [44.7, 701.0], [44.8, 701.0], [44.9, 701.0], [45.0, 701.0], [45.1, 701.0], [45.2, 702.0], [45.3, 702.0], [45.4, 702.0], [45.5, 703.0], [45.6, 703.0], [45.7, 704.0], [45.8, 704.0], [45.9, 704.0], [46.0, 704.0], [46.1, 704.0], [46.2, 704.0], [46.3, 704.0], [46.4, 704.0], [46.5, 705.0], [46.6, 705.0], [46.7, 705.0], [46.8, 705.0], [46.9, 705.0], [47.0, 705.0], [47.1, 705.0], [47.2, 706.0], [47.3, 707.0], [47.4, 707.0], [47.5, 707.0], [47.6, 707.0], [47.7, 708.0], [47.8, 708.0], [47.9, 709.0], [48.0, 709.0], [48.1, 710.0], [48.2, 710.0], [48.3, 710.0], [48.4, 710.0], [48.5, 710.0], [48.6, 710.0], [48.7, 711.0], [48.8, 711.0], [48.9, 711.0], [49.0, 711.0], [49.1, 712.0], [49.2, 712.0], [49.3, 712.0], [49.4, 713.0], [49.5, 713.0], [49.6, 713.0], [49.7, 714.0], [49.8, 714.0], [49.9, 714.0], [50.0, 714.0], [50.1, 715.0], [50.2, 715.0], [50.3, 715.0], [50.4, 715.0], [50.5, 716.0], [50.6, 716.0], [50.7, 716.0], [50.8, 717.0], [50.9, 717.0], [51.0, 717.0], [51.1, 717.0], [51.2, 718.0], [51.3, 718.0], [51.4, 719.0], [51.5, 720.0], [51.6, 720.0], [51.7, 721.0], [51.8, 722.0], [51.9, 722.0], [52.0, 724.0], [52.1, 727.0], [52.2, 727.0], [52.3, 727.0], [52.4, 729.0], [52.5, 729.0], [52.6, 729.0], [52.7, 729.0], [52.8, 729.0], [52.9, 731.0], [53.0, 731.0], [53.1, 731.0], [53.2, 732.0], [53.3, 732.0], [53.4, 733.0], [53.5, 733.0], [53.6, 733.0], [53.7, 733.0], [53.8, 734.0], [53.9, 734.0], [54.0, 734.0], [54.1, 735.0], [54.2, 736.0], [54.3, 736.0], [54.4, 736.0], [54.5, 736.0], [54.6, 736.0], [54.7, 736.0], [54.8, 737.0], [54.9, 737.0], [55.0, 737.0], [55.1, 737.0], [55.2, 737.0], [55.3, 737.0], [55.4, 737.0], [55.5, 738.0], [55.6, 738.0], [55.7, 738.0], [55.8, 738.0], [55.9, 738.0], [56.0, 739.0], [56.1, 739.0], [56.2, 739.0], [56.3, 740.0], [56.4, 740.0], [56.5, 740.0], [56.6, 741.0], [56.7, 741.0], [56.8, 741.0], [56.9, 741.0], [57.0, 742.0], [57.1, 742.0], [57.2, 742.0], [57.3, 742.0], [57.4, 742.0], [57.5, 743.0], [57.6, 743.0], [57.7, 743.0], [57.8, 743.0], [57.9, 744.0], [58.0, 744.0], [58.1, 744.0], [58.2, 744.0], [58.3, 745.0], [58.4, 745.0], [58.5, 745.0], [58.6, 746.0], [58.7, 746.0], [58.8, 746.0], [58.9, 746.0], [59.0, 746.0], [59.1, 746.0], [59.2, 746.0], [59.3, 747.0], [59.4, 747.0], [59.5, 747.0], [59.6, 747.0], [59.7, 747.0], [59.8, 747.0], [59.9, 747.0], [60.0, 747.0], [60.1, 748.0], [60.2, 748.0], [60.3, 748.0], [60.4, 748.0], [60.5, 748.0], [60.6, 748.0], [60.7, 749.0], [60.8, 749.0], [60.9, 749.0], [61.0, 749.0], [61.1, 750.0], [61.2, 750.0], [61.3, 751.0], [61.4, 753.0], [61.5, 753.0], [61.6, 753.0], [61.7, 753.0], [61.8, 753.0], [61.9, 753.0], [62.0, 753.0], [62.1, 754.0], [62.2, 754.0], [62.3, 754.0], [62.4, 754.0], [62.5, 755.0], [62.6, 755.0], [62.7, 755.0], [62.8, 755.0], [62.9, 755.0], [63.0, 757.0], [63.1, 757.0], [63.2, 757.0], [63.3, 757.0], [63.4, 758.0], [63.5, 758.0], [63.6, 758.0], [63.7, 759.0], [63.8, 759.0], [63.9, 759.0], [64.0, 759.0], [64.1, 759.0], [64.2, 759.0], [64.3, 759.0], [64.4, 760.0], [64.5, 760.0], [64.6, 760.0], [64.7, 760.0], [64.8, 761.0], [64.9, 761.0], [65.0, 761.0], [65.1, 761.0], [65.2, 762.0], [65.3, 762.0], [65.4, 762.0], [65.5, 762.0], [65.6, 762.0], [65.7, 762.0], [65.8, 762.0], [65.9, 763.0], [66.0, 763.0], [66.1, 763.0], [66.2, 763.0], [66.3, 763.0], [66.4, 763.0], [66.5, 763.0], [66.6, 764.0], [66.7, 764.0], [66.8, 764.0], [66.9, 764.0], [67.0, 764.0], [67.1, 764.0], [67.2, 765.0], [67.3, 765.0], [67.4, 765.0], [67.5, 766.0], [67.6, 766.0], [67.7, 766.0], [67.8, 766.0], [67.9, 767.0], [68.0, 767.0], [68.1, 767.0], [68.2, 767.0], [68.3, 767.0], [68.4, 767.0], [68.5, 768.0], [68.6, 768.0], [68.7, 769.0], [68.8, 769.0], [68.9, 769.0], [69.0, 769.0], [69.1, 769.0], [69.2, 770.0], [69.3, 771.0], [69.4, 771.0], [69.5, 771.0], [69.6, 771.0], [69.7, 772.0], [69.8, 772.0], [69.9, 773.0], [70.0, 773.0], [70.1, 773.0], [70.2, 773.0], [70.3, 773.0], [70.4, 775.0], [70.5, 775.0], [70.6, 775.0], [70.7, 775.0], [70.8, 775.0], [70.9, 775.0], [71.0, 775.0], [71.1, 776.0], [71.2, 776.0], [71.3, 776.0], [71.4, 777.0], [71.5, 777.0], [71.6, 778.0], [71.7, 779.0], [71.8, 779.0], [71.9, 779.0], [72.0, 779.0], [72.1, 779.0], [72.2, 779.0], [72.3, 779.0], [72.4, 780.0], [72.5, 780.0], [72.6, 780.0], [72.7, 781.0], [72.8, 782.0], [72.9, 782.0], [73.0, 783.0], [73.1, 783.0], [73.2, 783.0], [73.3, 784.0], [73.4, 784.0], [73.5, 784.0], [73.6, 784.0], [73.7, 785.0], [73.8, 785.0], [73.9, 785.0], [74.0, 785.0], [74.1, 785.0], [74.2, 785.0], [74.3, 785.0], [74.4, 786.0], [74.5, 786.0], [74.6, 786.0], [74.7, 787.0], [74.8, 787.0], [74.9, 787.0], [75.0, 787.0], [75.1, 788.0], [75.2, 788.0], [75.3, 788.0], [75.4, 788.0], [75.5, 788.0], [75.6, 788.0], [75.7, 788.0], [75.8, 788.0], [75.9, 789.0], [76.0, 789.0], [76.1, 789.0], [76.2, 789.0], [76.3, 789.0], [76.4, 789.0], [76.5, 790.0], [76.6, 790.0], [76.7, 790.0], [76.8, 790.0], [76.9, 791.0], [77.0, 791.0], [77.1, 792.0], [77.2, 792.0], [77.3, 793.0], [77.4, 793.0], [77.5, 794.0], [77.6, 794.0], [77.7, 794.0], [77.8, 794.0], [77.9, 794.0], [78.0, 794.0], [78.1, 794.0], [78.2, 795.0], [78.3, 795.0], [78.4, 795.0], [78.5, 795.0], [78.6, 795.0], [78.7, 795.0], [78.8, 795.0], [78.9, 795.0], [79.0, 796.0], [79.1, 796.0], [79.2, 797.0], [79.3, 797.0], [79.4, 797.0], [79.5, 798.0], [79.6, 799.0], [79.7, 799.0], [79.8, 799.0], [79.9, 800.0], [80.0, 805.0], [80.1, 805.0], [80.2, 806.0], [80.3, 806.0], [80.4, 807.0], [80.5, 807.0], [80.6, 808.0], [80.7, 809.0], [80.8, 809.0], [80.9, 809.0], [81.0, 809.0], [81.1, 809.0], [81.2, 810.0], [81.3, 811.0], [81.4, 814.0], [81.5, 814.0], [81.6, 815.0], [81.7, 815.0], [81.8, 815.0], [81.9, 815.0], [82.0, 816.0], [82.1, 820.0], [82.2, 820.0], [82.3, 821.0], [82.4, 821.0], [82.5, 821.0], [82.6, 822.0], [82.7, 822.0], [82.8, 824.0], [82.9, 824.0], [83.0, 824.0], [83.1, 825.0], [83.2, 825.0], [83.3, 828.0], [83.4, 828.0], [83.5, 828.0], [83.6, 828.0], [83.7, 828.0], [83.8, 829.0], [83.9, 829.0], [84.0, 829.0], [84.1, 829.0], [84.2, 829.0], [84.3, 829.0], [84.4, 829.0], [84.5, 832.0], [84.6, 832.0], [84.7, 832.0], [84.8, 833.0], [84.9, 833.0], [85.0, 833.0], [85.1, 834.0], [85.2, 836.0], [85.3, 836.0], [85.4, 837.0], [85.5, 837.0], [85.6, 837.0], [85.7, 838.0], [85.8, 839.0], [85.9, 841.0], [86.0, 841.0], [86.1, 841.0], [86.2, 841.0], [86.3, 841.0], [86.4, 841.0], [86.5, 842.0], [86.6, 842.0], [86.7, 843.0], [86.8, 843.0], [86.9, 844.0], [87.0, 844.0], [87.1, 846.0], [87.2, 847.0], [87.3, 847.0], [87.4, 848.0], [87.5, 848.0], [87.6, 849.0], [87.7, 849.0], [87.8, 849.0], [87.9, 849.0], [88.0, 849.0], [88.1, 849.0], [88.2, 849.0], [88.3, 850.0], [88.4, 850.0], [88.5, 850.0], [88.6, 850.0], [88.7, 850.0], [88.8, 850.0], [88.9, 850.0], [89.0, 850.0], [89.1, 850.0], [89.2, 851.0], [89.3, 851.0], [89.4, 851.0], [89.5, 851.0], [89.6, 851.0], [89.7, 851.0], [89.8, 852.0], [89.9, 852.0], [90.0, 852.0], [90.1, 852.0], [90.2, 853.0], [90.3, 853.0], [90.4, 853.0], [90.5, 854.0], [90.6, 854.0], [90.7, 855.0], [90.8, 855.0], [90.9, 856.0], [91.0, 857.0], [91.1, 857.0], [91.2, 857.0], [91.3, 859.0], [91.4, 859.0], [91.5, 859.0], [91.6, 860.0], [91.7, 861.0], [91.8, 861.0], [91.9, 861.0], [92.0, 861.0], [92.1, 861.0], [92.2, 862.0], [92.3, 864.0], [92.4, 864.0], [92.5, 864.0], [92.6, 865.0], [92.7, 866.0], [92.8, 866.0], [92.9, 866.0], [93.0, 866.0], [93.1, 867.0], [93.2, 867.0], [93.3, 869.0], [93.4, 879.0], [93.5, 879.0], [93.6, 879.0], [93.7, 880.0], [93.8, 880.0], [93.9, 880.0], [94.0, 880.0], [94.1, 881.0], [94.2, 881.0], [94.3, 881.0], [94.4, 884.0], [94.5, 889.0], [94.6, 889.0], [94.7, 889.0], [94.8, 889.0], [94.9, 889.0], [95.0, 890.0], [95.1, 891.0], [95.2, 891.0], [95.3, 892.0], [95.4, 904.0], [95.5, 906.0], [95.6, 906.0], [95.7, 915.0], [95.8, 916.0], [95.9, 916.0], [96.0, 917.0], [96.1, 917.0], [96.2, 917.0], [96.3, 917.0], [96.4, 918.0], [96.5, 928.0], [96.6, 928.0], [96.7, 932.0], [96.8, 935.0], [96.9, 951.0], [97.0, 951.0], [97.1, 952.0], [97.2, 952.0], [97.3, 952.0], [97.4, 955.0], [97.5, 961.0], [97.6, 961.0], [97.7, 962.0], [97.8, 974.0], [97.9, 976.0], [98.0, 976.0], [98.1, 1006.0], [98.2, 1012.0], [98.3, 1012.0], [98.4, 1045.0], [98.5, 1060.0], [98.6, 1094.0], [98.7, 1094.0], [98.8, 1095.0], [98.9, 1103.0], [99.0, 1103.0], [99.1, 1109.0], [99.2, 1117.0], [99.3, 1179.0], [99.4, 1179.0], [99.5, 1279.0], [99.6, 1328.0], [99.7, 1328.0], [99.8, 1362.0], [99.9, 1593.0], [100.0, 1593.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 312.0, "series": [{"data": [[1100.0, 4.0], [600.0, 312.0], [1200.0, 1.0], [1300.0, 2.0], [700.0, 254.0], [1500.0, 1.0], [800.0, 110.0], [900.0, 19.0], [1000.0, 6.0]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 708.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 708.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 10.786585365853657, "minX": 1.77999396E12, "maxY": 18.0, "series": [{"data": [[1.77999396E12, 10.786585365853657], [1.77999408E12, 17.162162162162165], [1.77999402E12, 18.0]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999408E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 675.1, "minX": 1.0, "maxY": 1130.3333333333333, "series": [{"data": [[2.0, 1130.3333333333333], [8.0, 703.0], [9.0, 752.090909090909], [10.0, 737.6923076923077], [11.0, 729.1538461538462], [3.0, 966.5], [12.0, 728.9999999999999], [13.0, 702.8333333333333], [14.0, 698.6666666666667], [15.0, 675.1], [1.0, 833.0], [4.0, 705.6666666666667], [16.0, 700.9166666666666], [17.0, 736.6153846153848], [18.0, 739.4219330855016], [5.0, 735.4545454545455], [6.0, 695.5], [7.0, 829.7692307692308]], "isOverall": false, "label": "GET STLoad", "isController": false}, {"data": [[16.112834978843434, 740.7715091678422]], "isOverall": false, "label": "GET STLoad-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 18.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 437.3333333333333, "minX": 1.77999396E12, "maxY": 1386.0, "series": [{"data": [[1.77999396E12, 631.4], [1.77999408E12, 712.25], [1.77999402E12, 1386.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77999396E12, 437.3333333333333], [1.77999408E12, 493.3333333333333], [1.77999402E12, 960.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999408E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 729.6108108108107, "minX": 1.77999396E12, "maxY": 745.258333333334, "series": [{"data": [[1.77999396E12, 743.5121951219509], [1.77999408E12, 729.6108108108107], [1.77999402E12, 745.258333333334]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999408E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 729.5729729729737, "minX": 1.77999396E12, "maxY": 745.1777777777776, "series": [{"data": [[1.77999396E12, 743.4085365853663], [1.77999408E12, 729.5729729729737], [1.77999402E12, 745.1777777777776]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999408E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005405405405405412, "minX": 1.77999396E12, "maxY": 0.2682926829268294, "series": [{"data": [[1.77999396E12, 0.2682926829268294], [1.77999408E12, 0.005405405405405412], [1.77999402E12, 0.055555555555555525]], "isOverall": false, "label": "GET STLoad", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999408E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 616.0, "minX": 1.77999396E12, "maxY": 1593.0, "series": [{"data": [[1.77999396E12, 1593.0], [1.77999408E12, 1060.0], [1.77999402E12, 1117.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77999396E12, 616.0], [1.77999408E12, 640.0], [1.77999402E12, 641.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77999396E12, 852.5], [1.77999408E12, 828.4], [1.77999402E12, 861.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77999396E12, 1442.8499999999988], [1.77999408E12, 1047.1], [1.77999402E12, 1094.3899999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77999396E12, 710.0], [1.77999408E12, 712.0], [1.77999402E12, 728.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77999396E12, 972.5], [1.77999408E12, 855.4], [1.77999402E12, 903.3999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999408E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 690.0, "minX": 1.0, "maxY": 1025.0, "series": [{"data": [[1.0, 767.0], [2.0, 1025.0], [4.0, 705.0], [8.0, 754.0], [9.0, 736.0], [5.0, 690.0], [3.0, 707.0], [6.0, 698.0], [7.0, 727.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 690.0, "minX": 1.0, "maxY": 1025.0, "series": [{"data": [[1.0, 764.0], [2.0, 1025.0], [4.0, 705.0], [8.0, 754.0], [9.0, 736.0], [5.0, 690.0], [3.0, 707.0], [6.0, 698.0], [7.0, 727.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.8, "minX": 1.77999396E12, "maxY": 6.0, "series": [{"data": [[1.77999396E12, 2.8], [1.77999408E12, 3.0166666666666666], [1.77999402E12, 6.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999408E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.7333333333333334, "minX": 1.77999396E12, "maxY": 6.0, "series": [{"data": [[1.77999396E12, 2.7333333333333334], [1.77999408E12, 3.0833333333333335], [1.77999402E12, 6.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77999408E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.7333333333333334, "minX": 1.77999396E12, "maxY": 6.0, "series": [{"data": [[1.77999396E12, 2.7333333333333334], [1.77999408E12, 3.0833333333333335], [1.77999402E12, 6.0]], "isOverall": false, "label": "GET STLoad-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999408E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.7333333333333334, "minX": 1.77999396E12, "maxY": 6.0, "series": [{"data": [[1.77999396E12, 2.7333333333333334], [1.77999408E12, 3.0833333333333335], [1.77999402E12, 6.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77999408E12, "title": "Total Transactions Per Second"}},
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

