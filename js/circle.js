/* * * * * * * * * * * * * *
*      class Circle        *
* * * * * * * * * * * * * */


class CircleTree {

    constructor(parentElement, data) {
        this.parentElement = parentElement;
        this.data = data;
        this.displayData = data;

        this.initVis()
    }

    initVis() {

        // var div = document.getElementById(this.parentElement);

        console.log("data", this.data)

        d3 = d3v4;

        let jsonData = {
            "name": "",
            "children": this.data
        }

        console.log("json", jsonData)
        var root = d3.hierarchy(jsonData);
        var nodes = root.descendants();
        console.log("nodes", nodes)

        this.displayData = [];

        for (let index in nodes) {
            let numChildren = 0;
            let name = nodes[index].data.name;
            if (nodes[index].children) {
                numChildren = nodes[index].children.length;
            }
            this.displayData.push({
                "id": name,
                "value": numChildren
            })
        }

        console.log("display data", this.displayData)

    }
}