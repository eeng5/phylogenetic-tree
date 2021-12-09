/* * * * * * * * * * * * * *
*      class SankeyVis        *
* * * * * * * * * * * * * */


class ScaleableTree {

    constructor(parentElement, data) {
        this.parentElement = parentElement;
        this.data = data;

        this.initVis()
    }

    initVis() {

        var div = document.getElementById(this.parentElement);

        // In the div, we set up a "select" to transition between scaled and non-scaled branches
        var menu_pane = d3.select(div)
            .append("div")
            .append("span")
            .text("Layout:  ");

        var sel = menu_pane
            .append("select")
            .on("change", function (d) {
                switch (this.value) {
                    case "unscaled" :
                        tree.layout().scale(false);
                        break;
                    case "scaled" :
                        tree.layout().scale(true);
                        break;
                };
                tree.update();
            });

        sel
            .append("option")
            .attr("value", "unscaled")
            .attr("selected", 1)
            .text("Unscaled");

        sel
            .append("option")
            .attr("value", "scaled")
            .text("Scaled");

        var tree = tnt.tree()
            .data(tnt.tree.parse_newick(this.data))
            .duration(2000)
            .layout(tnt.tree.layout.vertical()
                .width(600)
                .scale(false)
            );

        // change the height of the labels
        tree
            .label()
            .fontsize(11)
            .height(function () {
                return 20;
            });

        // The visualization is started at this point
        tree(div);
    }
}